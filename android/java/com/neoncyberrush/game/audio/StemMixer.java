package com.neoncyberrush.game.audio;

import java.util.ArrayList;
import java.util.concurrent.ConcurrentLinkedQueue;

/**
 * Real-time adaptive stem mixer (pure Java, no Android dependencies — unit-testable on desktop).
 *
 * <ul>
 *   <li>Up to two decks (songs) at once for equal-power song crossfades.</li>
 *   <li>Each deck plays its stems sample-locked from one shared play head; state changes set
 *       per-stem gain targets and are quantized to the musical grid (beat / bar).</li>
 *   <li>Layers entering on a grid line come in with a 25 ms ramp (punchy drops); layers leaving fade
 *       over one beat. Unquantized changes ramp over one beat both ways.</li>
 *   <li>Varispeed (final-lap tempo push) via linear-interpolated resampling, ramped over a bar.</li>
 *   <li>Master chain: state/pause/EMP low-pass (RBJ biquad, log-smoothed cutoff) → 2.2 kHz −3.5 dB
 *       cue carve (keeps SFX/voice cues readable) → ducking envelope (10 ms attack, hold,
 *       250 ms release) → volume → soft safety clip.</li>
 * </ul>
 * All control calls are thread-safe: they are queued and applied by the audio thread at the start
 * of the next block, so the render path never takes a lock.
 */
public final class StemMixer {
    public final int sr;
    private final ConcurrentLinkedQueue<Runnable> cmds = new ConcurrentLinkedQueue<Runnable>();
    private final ArrayList<Deck> decks = new ArrayList<Deck>(2);

    // master
    private float volume = 0.8f, volTarget = 0.8f;
    private float stateLp = 20000f, pauseLp = 20000f, pulseLp = 20000f, pulseUntil = -1, lpCur = 20000f;
    private float pauseGain = 1f, pauseGainTarget = 1f;
    private float duckGain = 1f, duckTarget = 1f; private long duckHoldUntil = -1;
    private long frame = 0;                      // total frames rendered
    private final Biquad lpL = new Biquad(), lpR = new Biquad(), eqL = new Biquad(), eqR = new Biquad();

    // published (volatile) clock for the UI / game thread
    private volatile double pubBeat = 0, pubBpm = 120, pubRate = 1;
    private volatile long pubFrame = 0;
    private volatile String pubSong = null, pubState = null;

    public StemMixer(int sampleRate) {
        this.sr = sampleRate;
        eqL.peaking(sr, 2200, -3.5, 0.55); eqR.peaking(sr, 2200, -3.5, 0.55);
        lpL.lowpass(sr, 20000, 0.707); lpR.lowpass(sr, 20000, 0.707);
    }

    // ─── control API (any thread) ─────────────────────────────────────────────
    /** Start (or crossfade to) a song. startOffsetSec &lt; 0 positions the play head so that loop frame 0
     *  (bar 1) lands |startOffsetSec| seconds from now — used to put the drop exactly on "GO". */
    public void play(final Song song, final String state, final float fadeSec, final boolean withIntro, final double startOffsetSec) {
        cmds.add(new Runnable() { public void run() {
            Deck cur = top();
            if (cur != null && cur.song == song && !cur.dying) { cur.setState(state, 1, frame); return; }
            for (Deck d : decks) d.fadeOut(fadeSec);
            Deck d = new Deck(song);
            d.applyStateNow(state, 0);
            if (withIntro && song.intro != null) { d.inIntro = true; d.introPos = 0; }
            else if (startOffsetSec < 0) {
                long pre = Math.round(-startOffsetSec * sr) % song.loopFrames;
                if (pre > 0) { d.pos = song.loopFrames - pre; d.loops = -1; }
            }
            d.fadeIn(fadeSec);
            decks.add(d);
            pubSong = song.id; pubState = state;
        }});
    }

    /** Change layer state, quantized to the next multiple of `quantumBeats` (0 = now, 1 = beat, 4 = bar). */
    public void setState(final String state, final int quantumBeats) {
        cmds.add(new Runnable() { public void run() { Deck d = top(); if (d != null) { d.setState(state, quantumBeats, frame); pubState = state; } } });
    }

    public void stop(final float fadeSec) {
        cmds.add(new Runnable() { public void run() { for (Deck d : decks) d.fadeOut(fadeSec); pubSong = null; } });
    }

    /** Tempo push, ramped over `rampBeats` beats (1.0 = original). */
    public void setRate(final double rate, final double rampBeats) {
        cmds.add(new Runnable() { public void run() {
            Deck d = top(); if (d == null) return;
            d.rateTarget = rate;
            double frames = Math.max(1, rampBeats * 60.0 / d.song.bpm * sr);
            d.rateStep = (rate - d.rate) / frames;
        }});
    }

    public void setVolume(final float v) { cmds.add(new Runnable() { public void run() { volTarget = Math.max(0, Math.min(1.5f, v)); } }); }

    public void setPaused(final boolean on) {
        cmds.add(new Runnable() { public void run() { pauseLp = on ? 650f : 20000f; pauseGainTarget = on ? 0.42f : 1f; } });
    }

    /** Temporary low-pass choke (EMP hit): close to `hz`, hold `holdSec`, reopen. */
    public void lowpassPulse(final float hz, final float holdSec) {
        cmds.add(new Runnable() { public void run() { pulseLp = hz; pulseUntil = frame + holdSec * sr; } });
    }

    /** Duck the music by `db` (negative) for `holdSec`, 10 ms attack / 250 ms release. */
    public void duck(final float db, final float holdSec) {
        cmds.add(new Runnable() { public void run() {
            float g = (float) Math.pow(10, db / 20.0);
            duckTarget = frame > duckHoldUntil ? g : Math.min(duckTarget, g);   // overlapping ducks: deepest wins
            duckHoldUntil = Math.max(duckHoldUntil, frame + (long) ((0.010f + holdSec) * sr));
        }});
    }

    // ─── clock (any thread) ──────────────────────────────────────────────────
    /** Musical beat at the write head of the last rendered block (fractional, can be negative in intros). */
    public double beatAtWriteHead() { return pubBeat; }
    public double bpm() { return pubBpm; }
    public double rate() { return pubRate; }
    public long framesRendered() { return pubFrame; }
    public String songId() { return pubSong; }
    public String stateName() { return pubState; }

    // ─── render (audio thread only) ───────────────────────────────────────────
    /** Render `frames` stereo frames into `out` (interleaved float, length ≥ frames*2). */
    public void render(float[] out, int frames) {
        Runnable r;
        while ((r = cmds.poll()) != null) r.run();
        java.util.Arrays.fill(out, 0, frames * 2, 0f);
        for (int i = decks.size() - 1; i >= 0; i--) {
            Deck d = decks.get(i);
            d.render(out, frames, frame);
            if (d.dead()) decks.remove(i);
        }
        master(out, frames);
        frame += frames;
        Deck t = top();
        if (t != null) { pubBeat = t.beat(); pubBpm = t.song.bpm; pubRate = t.rate; }
        pubFrame = frame;
    }

    /** Test hook: current gain of stem `i` on the active deck (audio thread / single-threaded tests only). */
    float debugGain(int i) { Deck d = top(); return d == null ? -1 : d.gain[i]; }

    private Deck top() {
        for (int i = decks.size() - 1; i >= 0; i--) if (!decks.get(i).dying) return decks.get(i);
        return null;
    }

    private void master(float[] out, int n) {
        Deck t = top();
        stateLp = t == null ? 20000f : t.lowpass;
        if (pulseUntil >= 0 && frame > pulseUntil) { pulseLp = 20000f; pulseUntil = -1; }
        float target = Math.min(stateLp, Math.min(pauseLp, pulseLp));
        // log-domain smoothing (~60 ms when closing for EMP / pause, ~350 ms when opening)
        float coef = target < lpCur ? 0.35f : 0.06f;
        lpCur = (float) Math.exp(Math.log(lpCur) + (Math.log(target) - Math.log(lpCur)) * coef * (n / 256f));
        if (Math.abs(lpCur - target) < 1f) lpCur = target;
        boolean lpOn = lpCur < 19000f;
        if (lpOn) { lpL.lowpass(sr, lpCur, 0.75); lpR.lowpass(sr, lpCur, 0.75); }

        if (frame > duckHoldUntil) duckTarget = 1f;
        final float atk = 1f / (0.010f * sr), rel = (float) (1 - Math.exp(-1.0 / (0.25 / 4.6 * sr)));
        final float pStep = 1f / (0.15f * sr), vStep = 1f / (0.05f * sr);
        for (int i = 0; i < n; i++) {
            float l = out[2 * i], rr = out[2 * i + 1];
            if (lpOn) { l = lpL.runL(l); rr = lpR.runL(rr); }
            l = eqL.runL(l); rr = eqR.runL(rr);
            if (duckGain > duckTarget) duckGain = Math.max(duckTarget, duckGain - atk); else duckGain += (duckTarget - duckGain) * rel;
            if (pauseGain < pauseGainTarget) pauseGain = Math.min(pauseGainTarget, pauseGain + pStep); else if (pauseGain > pauseGainTarget) pauseGain = Math.max(pauseGainTarget, pauseGain - pStep);
            if (volume < volTarget) volume = Math.min(volTarget, volume + vStep); else if (volume > volTarget) volume = Math.max(volTarget, volume - vStep);
            float g = duckGain * pauseGain * volume;
            out[2 * i] = soft(l * g); out[2 * i + 1] = soft(rr * g);
        }
    }

    private static float soft(float x) {           // transparent below 0.9, smooth knee to ±1
        float a = Math.abs(x);
        if (a <= 0.9f) return x;
        float y = 0.9f + 0.1f * (float) Math.tanh((a - 0.9f) / 0.1f);
        return x < 0 ? -y : y;
    }

    // ─── one song instance ────────────────────────────────────────────────────
    private final class Deck {
        final Song song;
        final int ns;
        final float[] gain, target, step;
        final double fpb;                         // frames per beat (at rate 1)
        double pos = 0; long loops = 0;           // loop play head
        boolean inIntro = false; int introPos = 0;
        double rate = 1, rateTarget = 1, rateStep = 0;
        float deck = 0, deckTarget = 1, deckStep = 1; boolean dying = false;
        float lowpass = 20000f;
        String pending = null; double pendingBeat = 0;

        Deck(Song s) {
            song = s; ns = s.pcm.length;
            gain = new float[ns]; target = new float[ns]; step = new float[ns];
            fpb = 60.0 / s.bpm * sr;
        }

        double timeline() { return inIntro ? introPos - song.introFrames : loops * (double) song.loopFrames + pos; }
        double beat() { return timeline() / fpb; }

        void fadeIn(float sec) { deck = sec <= 0 ? 1 : 0; deckTarget = 1; deckStep = sec <= 0 ? 1 : 1f / (sec * sr); }
        void fadeOut(float sec) { dying = true; deckTarget = 0; deckStep = sec <= 0 ? 1 : 1f / (sec * sr); }
        boolean dead() { return dying && deck <= 0f; }

        void applyStateNow(String name, int rampFrames) {
            Song.State st = song.states.get(name);
            if (st == null) return;
            lowpass = st.lowpassHz > 0 ? st.lowpassHz : 20000f;
            for (int i = 0; i < ns; i++) {
                target[i] = i < st.gains.length ? st.gains[i] : 0;
                int f = rampFrames;
                if (f <= 0) { gain[i] = target[i]; step[i] = 0; continue; }
                step[i] = (target[i] - gain[i]) / f;
            }
        }

        void setState(String name, int quantum, long now) {
            if (!song.states.containsKey(name)) return;
            if (quantum <= 0) { applyStateNow(name, (int) fpb); pending = null; return; }
            double b = beat();
            // a call that arrives up to 0.15 beat late still snaps to the grid line it was meant for
            double q = Math.ceil((b - 0.15) / quantum) * quantum;
            pending = name; pendingBeat = q;
            if (q <= b) fire();
        }

        void fire() {
            Song.State st = song.states.get(pending);
            pending = null;
            if (st == null) return;
            lowpass = st.lowpassHz > 0 ? st.lowpassHz : 20000f;
            int in = (int) (0.025 * sr), out = (int) fpb;
            for (int i = 0; i < ns; i++) {
                target[i] = i < st.gains.length ? st.gains[i] : 0;
                int f = target[i] > gain[i] ? in : out;
                step[i] = (target[i] - gain[i]) / Math.max(1, f);
            }
        }

        void render(float[] out, int n, long now) {
            final short[][] pcm = song.pcm;
            final int L = song.loopFrames;
            final float k = 1f / 32768f;
            for (int i = 0; i < n; i++) {
                // deck fade
                if (deck < deckTarget) deck = Math.min(deckTarget, deck + deckStep); else if (deck > deckTarget) deck = Math.max(deckTarget, deck - deckStep);
                float dg = deck <= 0 ? 0 : (float) Math.sin(deck * Math.PI / 2);   // equal power
                if (inIntro) {
                    int j = introPos * 2;
                    out[2 * i] += song.intro[j] * k * dg; out[2 * i + 1] += song.intro[j + 1] * k * dg;
                    if (++introPos >= song.introFrames) { inIntro = false; pos = 0; loops = 0; }
                    continue;
                }
                if (pending != null && timeline() >= pendingBeat * fpb) fire();
                int i0 = (int) pos; float fr = (float) (pos - i0);
                int i1 = i0 + 1 == L ? 0 : i0 + 1;
                float l = 0, r = 0;
                for (int s = 0; s < ns; s++) {
                    float g = gain[s];
                    if (step[s] != 0) {
                        g += step[s];
                        if ((step[s] > 0 && g >= target[s]) || (step[s] < 0 && g <= target[s])) { g = target[s]; step[s] = 0; }
                        gain[s] = g;
                    }
                    if (g <= 0f) continue;
                    short[] p = pcm[s];
                    float a = p[2 * i0], b = p[2 * i1];
                    float c = p[2 * i0 + 1], d = p[2 * i1 + 1];
                    l += (a + (b - a) * fr) * g; r += (c + (d - c) * fr) * g;
                }
                out[2 * i] += l * k * dg; out[2 * i + 1] += r * k * dg;
                if (rateStep != 0) { rate += rateStep; if ((rateStep > 0 && rate >= rateTarget) || (rateStep < 0 && rate <= rateTarget)) { rate = rateTarget; rateStep = 0; } }
                pos += rate;
                if (pos >= L) { pos -= L; loops++; }
            }
        }
    }

    /** Direct-form-I biquad (RBJ cookbook). */
    static final class Biquad {
        double b0 = 1, b1, b2, a1, a2, x1, x2, y1, y2;
        void lowpass(int sr, double fc, double q) {
            double w = 2 * Math.PI * Math.min(fc, sr * 0.45) / sr, al = Math.sin(w) / (2 * q), c = Math.cos(w), a0 = 1 + al;
            b0 = (1 - c) / 2 / a0; b1 = (1 - c) / a0; b2 = b0; a1 = -2 * c / a0; a2 = (1 - al) / a0;
        }
        void peaking(int sr, double fc, double db, double q) {
            double A = Math.pow(10, db / 40), w = 2 * Math.PI * fc / sr, al = Math.sin(w) / (2 * q), c = Math.cos(w), a0 = 1 + al / A;
            b0 = (1 + al * A) / a0; b1 = -2 * c / a0; b2 = (1 - al * A) / a0; a1 = -2 * c / a0; a2 = (1 - al / A) / a0;
        }
        float runL(float x) {
            double y = b0 * x + b1 * x1 + b2 * x2 - a1 * y1 - a2 * y2;
            x2 = x1; x1 = x; y2 = y1; y1 = y;
            return (float) y;
        }
    }
}
