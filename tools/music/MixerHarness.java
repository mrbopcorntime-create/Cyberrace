package com.neoncyberrush.game.audio;

import java.io.*;
import java.nio.*;
import java.nio.file.*;
import java.util.*;

/**
 * Desktop test for StemMixer with the real APK assets (decoded by ffmpeg, as MediaCodec would).
 *   javac -d /tmp/mh android/java/com/neoncyberrush/game/audio/{Song,StemMixer}.java tools/music/MixerHarness.java
 *   java -cp /tmp/mh com.neoncyberrush.game.audio.MixerHarness android/assets/music out.wav
 */
public class MixerHarness {
    static final int SR = 48000;
    static int fails = 0;
    static void check(boolean ok, String msg) { System.out.println((ok ? "  PASS " : "  FAIL ") + msg); if (!ok) fails++; }

    static short[] decode(String path, int frames) throws Exception {
        Process p = new ProcessBuilder("ffmpeg", "-v", "error", "-i", path, "-f", "s16le", "-ac", "2", "-ar", "48000", "-").start();
        byte[] b = p.getInputStream().readAllBytes(); p.waitFor();
        int got = b.length / 4;
        check(got == frames, new File(path).getName() + " decodes to exactly loop length (" + got + " vs " + frames + ")");
        short[] s = new short[frames * 2];
        ByteBuffer.wrap(b).order(ByteOrder.LITTLE_ENDIAN).asShortBuffer().get(s, 0, Math.min(s.length, b.length / 2));
        return s;
    }

    // minimal manifest reader for the fields we need (avoids org.json on desktop)
    static Song load(String dir, String id, String json, String[] stems, String[] stateNames, float[][] stateGains, float[] lps) throws Exception {
        String e = json.substring(json.indexOf("\"" + id + "\""));
        int loop = Integer.parseInt(e.replaceAll("(?s).*?\"loopFrames\": (\\d+).*", "$1"));
        double bpm = Double.parseDouble(e.replaceAll("(?s).*?\"bpm\": ([0-9.]+).*", "$1"));
        double fr = e.contains("finalRate") ? Double.parseDouble(e.replaceAll("(?s).*?\"finalRate\": ([0-9.]+).*", "$1")) : 1;
        short[][] pcm = new short[stems.length][];
        for (int i = 0; i < stems.length; i++) pcm[i] = decode(dir + "/" + id + "/" + stems[i] + ".ogg", loop);
        short[] intro = null; int introFrames = 0;
        if (id.equals("menu")) { introFrames = Integer.parseInt(e.replaceAll("(?s).*?\"introFrames\": (\\d+).*", "$1")); intro = decode(dir + "/menu/intro.ogg", introFrames); }
        Song s = new Song(id, bpm, loop, stems, pcm, intro, introFrames, new int[][]{{0, 10}, {0, 10}}, fr);
        for (int i = 0; i < stateNames.length; i++) s.states.put(stateNames[i], new Song.State(stateGains[i], lps[i]));
        return s;
    }

    public static void main(String[] a) throws Exception {
        String dir = a[0], json = new String(Files.readAllBytes(Paths.get(dir, "manifest.json")));
        Song menu = load(dir, "menu", json, new String[]{"drums", "bass", "music"},
                new String[]{"main", "lounge", "loading", "results"},
                new float[][]{{1, 1, 1}, {0, .8f, 1}, {0, 0, 1}, {1, 1, 1}}, new float[]{0, 2600, 1100, 0});
        String[] rs = {"drums", "bass", "harm", "lead", "top"};
        Song race = load(dir, "t5_3", json, rs, new String[]{"grid", "cruise", "race", "intense", "final"},
                new float[][]{{0, .55f, 1, 0, 0}, {1, 1, 1, 0, 0}, {1, 1, 1, 1, 0}, {1, 1, 1, 1, 1}, {1, 1, 1, 1, 1}}, new float[]{1400, 0, 0, 0, 0});

        StemMixer m = new StemMixer(SR);
        m.setVolume(1f);
        int B = 256; float[] blk = new float[B * 2];
        ByteArrayOutputStream wav = new ByteArrayOutputStream();
        double[] peak = {0}; boolean[] nan = {false};
        long[] t = {0};
        // render helper
        java.util.function.IntConsumer run = frames -> {
            for (int f = 0; f < frames; f += B) {
                m.render(blk, B);
                for (int i = 0; i < B * 2; i++) {
                    float v = blk[i]; if (Float.isNaN(v)) nan[0] = true; peak[0] = Math.max(peak[0], Math.abs(v));
                    int s = Math.round(Math.max(-1, Math.min(1, v)) * 32767); wav.write(s & 255); wav.write((s >> 8) & 255);
                }
                t[0] += B;
            }
        };

        System.out.println("1) menu intro -> loop handoff");
        m.play(menu, "main", 0, true, 0);
        run.accept(SR * 2);
        check(m.beatAtWriteHead() < 0, "beat clock negative during intro (" + String.format("%.2f", m.beatAtWriteHead()) + ")");
        // jump close to the intro end by rendering through it, checking continuity at the handoff
        int toEnd = menu.introFrames - (int) t[0] - B * 4; run.accept(toEnd - toEnd % B);
        float prevR = 0; double maxJump = 0, avgStep = 0; int cnt = 0;
        for (int k = 0; k < 16; k++) { m.render(blk, B); for (int i = 0; i < B; i++) { float v = blk[2 * i]; if (k + i > 0) { double d = Math.abs(v - prevR); maxJump = Math.max(maxJump, d); avgStep += d; cnt++; } prevR = v; } t[0] += B; }
        check(maxJump < 0.25, String.format("intro->loop continuous (max step %.3f, avg %.4f)", maxJump, avgStep / cnt));
        check(m.beatAtWriteHead() > 0 && m.beatAtWriteHead() < 3, "beat clock passes 0 at the drop (" + String.format("%.2f", m.beatAtWriteHead()) + ")");

        System.out.println("2) quantized menu state change (main -> lounge on next bar)");
        m.setState("lounge", 4);
        double b0 = m.beatAtWriteHead(); int drumsOffAt = -1;
        for (int k = 0; k < 400 && drumsOffAt < 0; k++) { m.render(blk, B); t[0] += B; if (m.debugGain(0) < 0.999f) drumsOffAt = k; }
        double bAt = m.beatAtWriteHead();
        check(drumsOffAt >= 0 && Math.abs(bAt - Math.ceil((b0 - 0.15) / 4) * 4) < 0.05, String.format("fade starts on the bar line (requested @%.2f, started @%.2f)", b0, bAt));

        System.out.println("3) crossfade to race song, drop aligned to GO in 3.0 s");
        m.play(race, "grid", 1.2f, false, -3.0);
        m.render(blk, B); t[0] += B;
        double bStart = m.beatAtWriteHead(), expect = -3.0 * race.bpm / 60;
        check(Math.abs(bStart - expect) < 0.1, String.format("race clock starts at %.2f beats (expect %.2f)", bStart, expect));
        run.accept((int) (2.9 * SR) - B);
        m.setState("race", 1);  // the GO call, ~0.1 s early
        long goFrame = t[0]; int leadOnAt = -1;
        for (int k = 0; k < 200 && leadOnAt < 0; k++) { m.render(blk, B); t[0] += B; if (m.debugGain(3) > 0.5f) leadOnAt = k; }
        check(leadOnAt >= 0 && Math.abs(m.beatAtWriteHead()) < 0.2, String.format("lead layer lands on bar 1 (beat %.3f)", m.beatAtWriteHead()));

        System.out.println("4) seamless loop wrap of the full race mix (vs. the identical downbeat at bar 17)");
        m.setState("intense", 0);
        double fpb = 60.0 / race.bpm * SR;
        java.util.function.DoubleUnaryOperator stepAround = targetBeat -> {
            double cur = m.beatAtWriteHead(); double loopBeats = race.loopFrames / fpb;
            double ahead = ((targetBeat - cur) % loopBeats + loopBeats) % loopBeats;
            int fr = (int) (ahead * fpb) - B * 8; run.accept(fr - fr % B);
            double mx = 0; float pv = 0;
            for (int k = 0; k < 16; k++) { m.render(blk, B); t[0] += B; for (int i = 0; i < B; i++) { float v = blk[2 * i]; if (k + i > 0) mx = Math.max(mx, Math.abs(v - pv)); pv = v; } }
            return mx;
        };
        double mid = stepAround.applyAsDouble(64), wrap = stepAround.applyAsDouble(0);
        check(wrap < mid * 1.3 + 0.02, String.format("wrap step %.3f within range of the bar-17 downbeat step %.3f", wrap, mid));
        System.out.println("5) final lap: +4 BPM varispeed over 2 bars");
        m.setState("final", 1); m.setRate(race.finalRate, 8);
        run.accept(SR * 4);
        check(Math.abs(m.rate() - race.finalRate) < 1e-6, String.format("rate reached %.4f", m.rate()));
        System.out.println("6) pause low-pass + duck, then results");
        m.setPaused(true); run.accept(SR); m.duck(-6, 0.3f); run.accept(SR / 2); m.setPaused(false); run.accept(SR);
        m.play(menu, "results", 1.5f, false, 0); run.accept(SR * 3);
        check("menu".equals(m.songId()), "results returns to the menu song");

        check(!nan[0], "no NaN");
        check(peak[0] <= 1.0, String.format("no clipping (peak %.3f)", peak[0]));
        if (a.length > 1) {
            byte[] pcm = wav.toByteArray();
            try (DataOutputStream o = new DataOutputStream(new FileOutputStream(a[1]))) {
                ByteBuffer h = ByteBuffer.allocate(44).order(ByteOrder.LITTLE_ENDIAN);
                h.put("RIFF".getBytes()).putInt(36 + pcm.length).put("WAVEfmt ".getBytes()).putInt(16).putShort((short) 1).putShort((short) 2)
                 .putInt(SR).putInt(SR * 4).putShort((short) 4).putShort((short) 16).put("data".getBytes()).putInt(pcm.length);
                o.write(h.array()); o.write(pcm);
            }
            System.out.println("wrote " + a[1] + " (" + String.format("%.1f", t[0] / (double) SR) + " s)");
        }
        System.out.println(fails == 0 ? "ALL PASS" : fails + " FAILED");
        System.exit(fails == 0 ? 0 : 1);
    }
}
