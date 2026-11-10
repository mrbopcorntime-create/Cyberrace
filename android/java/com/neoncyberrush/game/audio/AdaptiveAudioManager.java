package com.neoncyberrush.game.audio;

import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.content.res.AssetManager;
import android.media.AudioAttributes;
import android.media.AudioFocusRequest;
import android.media.AudioFormat;
import android.media.AudioManager;
import android.media.AudioTimestamp;
import android.media.AudioTrack;
import android.media.MediaCodec;
import android.media.MediaExtractor;
import android.media.MediaFormat;
import android.os.Process;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.ShortBuffer;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Native adaptive music for Cyber Race.
 *
 * Owns the music bus: decodes the Ogg Vorbis stems listed in assets/music/manifest.json (MediaCodec),
 * mixes them in {@link StemMixer} and streams the result through a low-latency float AudioTrack.
 * The WebView game drives it through the CRAudio JavaScript bridge (see MainActivity) with
 * high-level state changes; SFX/engines stay in WebAudio.
 */
public final class AdaptiveAudioManager implements AudioManager.OnAudioFocusChangeListener {
    private static final String TAG = "CRAudio";
    private static final int SR = 48000, BLOCK = 256, MAX_CACHED = 3;

    private final AssetManager assets;
    private final AudioManager am;
    private final StemMixer mixer = new StemMixer(SR);
    private final ExecutorService decoder = Executors.newSingleThreadExecutor();
    private final Map<String, Song> cache = new LinkedHashMap<String, Song>(8, 0.75f, true);
    private final Map<String, Boolean> loading = new HashMap<String, Boolean>();
    private JSONObject manifest;
    private String manifestRaw = "{}";
    private AudioTrack track;
    private Thread thread;
    private volatile boolean running = false, hostPaused = false, focusLost = false;
    private AudioFocusRequest focusReq;
    private final AudioTimestamp ts = new AudioTimestamp();
    private volatile String wantPlayId = null;      // latest play() request still waiting on a decode
    private Runnable wantPlay = null;
    private String wantPlayFor = null;

    public AdaptiveAudioManager(Context ctx) {
        assets = ctx.getAssets();
        am = (AudioManager) ctx.getSystemService(Context.AUDIO_SERVICE);
        try {
            InputStream in = assets.open("music/manifest.json");
            ByteArrayOutputStream bo = new ByteArrayOutputStream();
            byte[] b = new byte[16384]; int n;
            while ((n = in.read(b)) > 0) bo.write(b, 0, n);
            in.close();
            manifestRaw = bo.toString("UTF-8");
            manifest = new JSONObject(manifestRaw);
        } catch (Exception e) {
            Log.w(TAG, "no music manifest", e);
            manifest = null;
        }
        if (manifest != null) start();
    }

    public boolean available() { return manifest != null && track != null; }
    public String manifestJson() { return manifestRaw; }

    // ─── output ──────────────────────────────────────────────────────────────
    private void start() {
        try {
            int min = AudioTrack.getMinBufferSize(SR, AudioFormat.CHANNEL_OUT_STEREO, AudioFormat.ENCODING_PCM_FLOAT);
            int bytes = Math.max(min, 1536 * 8);
            track = new AudioTrack.Builder()
                    .setAudioAttributes(new AudioAttributes.Builder()
                            .setUsage(AudioAttributes.USAGE_GAME)
                            .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC).build())
                    .setAudioFormat(new AudioFormat.Builder()
                            .setEncoding(AudioFormat.ENCODING_PCM_FLOAT)
                            .setSampleRate(SR)
                            .setChannelMask(AudioFormat.CHANNEL_OUT_STEREO).build())
                    .setBufferSizeInBytes(bytes)
                    .setTransferMode(AudioTrack.MODE_STREAM)
                    .setPerformanceMode(AudioTrack.PERFORMANCE_MODE_LOW_LATENCY)
                    .build();
        } catch (Exception e) {
            Log.e(TAG, "AudioTrack init failed", e);
            track = null;
            return;
        }
        requestFocus();
        track.play();
        running = true;
        thread = new Thread(new Runnable() {
            public void run() {
                Process.setThreadPriority(Process.THREAD_PRIORITY_URGENT_AUDIO);
                float[] buf = new float[BLOCK * 2];
                while (running) {
                    if (hostPaused || focusLost) {
                        synchronized (AdaptiveAudioManager.this) {
                            try { AdaptiveAudioManager.this.wait(250); } catch (InterruptedException ignored) { }
                        }
                        continue;
                    }
                    mixer.render(buf, BLOCK);
                    int off = 0;
                    while (off < buf.length && running && !hostPaused) {
                        int w = track.write(buf, off, buf.length - off, AudioTrack.WRITE_BLOCKING);
                        if (w <= 0) break;
                        off += w;
                    }
                }
            }
        }, "CRAudio-mix");
        thread.start();
    }

    private void requestFocus() {
        try {
            focusReq = new AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN)
                    .setAudioAttributes(new AudioAttributes.Builder().setUsage(AudioAttributes.USAGE_GAME)
                            .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC).build())
                    .setOnAudioFocusChangeListener(this)
                    .setWillPauseWhenDucked(false)
                    .build();
            am.requestAudioFocus(focusReq);
        } catch (Exception e) { Log.w(TAG, "focus", e); }
    }

    @Override
    public void onAudioFocusChange(int change) {
        if (change == AudioManager.AUDIOFOCUS_LOSS || change == AudioManager.AUDIOFOCUS_LOSS_TRANSIENT) {
            focusLost = true; if (track != null) track.pause();
        } else if (change == AudioManager.AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK) {
            mixer.duck(-12f, 1f);
        } else if (change == AudioManager.AUDIOFOCUS_GAIN) {
            focusLost = false; if (track != null && !hostPaused) track.play();
            synchronized (this) { notifyAll(); }
        }
    }

    public void onHostPause() {
        hostPaused = true;
        if (track != null) track.pause();
    }

    public void onHostResume() {
        hostPaused = false;
        if (track != null && !focusLost) track.play();
        synchronized (this) { notifyAll(); }
    }

    public void release() {
        running = false;
        synchronized (this) { notifyAll(); }
        try { if (thread != null) thread.join(500); } catch (InterruptedException ignored) { }
        if (track != null) { track.release(); track = null; }
        if (focusReq != null) am.abandonAudioFocusRequest(focusReq);
        decoder.shutdownNow();
    }

    // ─── control (called from the JS bridge thread) ───────────────────────────
    public void preload(final String id) { load(id, null); }

    public synchronized boolean isReady(String id) { return cache.containsKey(id); }

    /** Play `id` in `state`. If the song is still decoding, the request is held and the most recent
     *  request wins (so a quick menu → race → menu sequence never plays a stale song). */
    public void play(final String id, final String state, final float fadeSec, final boolean intro, final double startOffsetSec) {
        final long t0 = System.nanoTime();
        wantPlayId = id;
        load(id, new Runnable() {
            public void run() {
                if (!id.equals(wantPlayId)) return;
                Song s;
                synchronized (AdaptiveAudioManager.this) { s = cache.get(id); }
                if (s == null) return;
                // keep a "drop on GO" offset correct even if the decode finished late
                double late = (System.nanoTime() - t0) / 1e9;
                mixer.play(s, state, fadeSec, intro, startOffsetSec < 0 ? Math.min(-0.001, startOffsetSec + late) : startOffsetSec);
            }
        });
    }

    public void setState(String state, int quantumBeats) { mixer.setState(state, quantumBeats); }
    public void setRate(double rate, double rampBeats) { mixer.setRate(rate, rampBeats); }
    public void stop(float fadeSec) { wantPlayId = null; mixer.stop(fadeSec); }
    public void setVolume(float v) { mixer.setVolume(v); }
    public void setPaused(boolean on) { mixer.setPaused(on); }
    public void duck(float db, float holdSec) { mixer.duck(db, holdSec); }
    public void lowpassPulse(float hz, float holdSec) { mixer.lowpassPulse(hz, holdSec); }

    /** Beat currently reaching the speaker (write-head beat minus the output latency). */
    public double beat() {
        double b = mixer.beatAtWriteHead();
        if (track == null) return b;
        long written = mixer.framesRendered();
        long audible;
        if (track.getTimestamp(ts)) audible = ts.framePosition + (long) ((System.nanoTime() - ts.nanoTime) * 1e-9 * SR);
        else audible = track.getPlaybackHeadPosition() & 0xffffffffL;
        long lat = Math.max(0, Math.min(SR, written - audible));
        return b - lat * mixer.rate() * mixer.bpm() / 60.0 / SR;
    }
    public double bpm() { return mixer.bpm() * mixer.rate(); }

    public String status() {
        StringBuilder sb = new StringBuilder("{");
        sb.append("\"song\":").append(q(mixer.songId())).append(",\"state\":").append(q(mixer.stateName()))
          .append(",\"beat\":").append(String.format(java.util.Locale.US, "%.3f", beat()))
          .append(",\"bpm\":").append(String.format(java.util.Locale.US, "%.3f", bpm()));
        long mem = 0; synchronized (this) { for (Song s : cache.values()) mem += s.bytes(); sb.append(",\"cached\":").append(cache.size()); }
        sb.append(",\"cacheMB\":").append(mem / 1048576).append("}");
        return sb.toString();
    }
    private static String q(String s) { return s == null ? "null" : "\"" + s + "\""; }

    // ─── decoding ────────────────────────────────────────────────────────────
    private void load(final String id, final Runnable then) {
        synchronized (this) {
            if (cache.containsKey(id)) { if (then != null) then.run(); return; }
            if (then != null) { wantPlay = then; wantPlayFor = id; }
            if (loading.containsKey(id)) return;
            loading.put(id, Boolean.TRUE);
        }
        decoder.execute(new Runnable() {
            public void run() {
                Song s = null;
                long t0 = System.nanoTime();
                try { s = decodeSong(id); } catch (Throwable e) { Log.e(TAG, "decode " + id, e); }
                Runnable cb;
                synchronized (AdaptiveAudioManager.this) {
                    loading.remove(id);
                    if (s != null) {
                        cache.put(id, s);
                        evict(id);
                    }
                    cb = null;
                    if (wantPlay != null && id.equals(wantPlayFor)) { cb = wantPlay; wantPlay = null; wantPlayFor = null; }
                }
                Log.i(TAG, "decoded " + id + " in " + (System.nanoTime() - t0) / 1000000 + " ms");
                if (cb != null) cb.run();
            }
        });
    }

    /** LRU: keep the menu song pinned plus the most recent race songs. */
    private void evict(String keep) {
        while (cache.size() > MAX_CACHED) {
            Iterator<String> it = cache.keySet().iterator();
            boolean removed = false;
            while (it.hasNext()) {
                String k = it.next();
                if (!k.equals("menu") && !k.equals(keep) && !k.equals(mixer.songId())) { it.remove(); removed = true; break; }
            }
            if (!removed) break;
        }
    }

    private Song decodeSong(String id) throws Exception {
        JSONObject e = manifest.getJSONObject("songs").getJSONObject(id);
        int loopFrames = e.getInt("loopFrames");
        JSONObject stems = e.getJSONObject("stems");
        String[] names = new String[stems.length()];
        short[][] pcm = new short[names.length][];
        Iterator<String> keys = stems.keys();
        for (int i = 0; keys.hasNext(); i++) {
            names[i] = keys.next();
            pcm[i] = decode("music/" + stems.getString(names[i]), loopFrames);
        }
        short[] intro = null; int introFrames = 0;
        if (e.has("introFile")) {
            introFrames = e.getInt("introFrames");
            intro = decode("music/" + e.getString("introFile"), introFrames);
        }
        int[][] kick = new int[][]{{0, 10}, {0, 10}};
        if (e.has("kick")) {
            JSONArray k = e.getJSONArray("kick");
            kick = new int[k.length()][];
            for (int b = 0; b < k.length(); b++) {
                JSONArray bar = k.getJSONArray(b);
                kick[b] = new int[bar.length()];
                for (int j = 0; j < bar.length(); j++) kick[b][j] = bar.getInt(j);
            }
        }
        Song s = new Song(id, e.getDouble("bpm"), loopFrames, names, pcm, intro, introFrames, kick, e.optDouble("finalRate", 1.0));
        JSONObject st = e.getJSONObject("states");
        Iterator<String> sk = st.keys();
        while (sk.hasNext()) {
            String name = sk.next();
            JSONObject so = st.getJSONObject(name), g = so.getJSONObject("gains");
            float[] gains = new float[names.length];
            for (int i = 0; i < names.length; i++) gains[i] = (float) g.optDouble(names[i], 0);
            s.states.put(name, new Song.State(gains, (float) so.optDouble("lowpass", 0)));
        }
        return s;
    }

    /** Decode an (uncompressed-in-APK) Ogg Vorbis asset to interleaved 16-bit stereo, exactly `frames` long. */
    private short[] decode(String path, int frames) throws Exception {
        short[] out = new short[frames * 2];
        AssetFileDescriptor fd = assets.openFd(path);
        MediaExtractor ex = new MediaExtractor();
        MediaCodec codec = null;
        try {
            ex.setDataSource(fd.getFileDescriptor(), fd.getStartOffset(), fd.getLength());
            int ti = -1; MediaFormat fmt = null;
            for (int i = 0; i < ex.getTrackCount(); i++) {
                MediaFormat f = ex.getTrackFormat(i);
                if (f.getString(MediaFormat.KEY_MIME).startsWith("audio/")) { ti = i; fmt = f; break; }
            }
            if (ti < 0) throw new IllegalStateException("no audio track in " + path);
            ex.selectTrack(ti);
            codec = MediaCodec.createDecoderByType(fmt.getString(MediaFormat.KEY_MIME));
            codec.configure(fmt, null, null, 0);
            codec.start();
            MediaCodec.BufferInfo info = new MediaCodec.BufferInfo();
            int ch = fmt.getInteger(MediaFormat.KEY_CHANNEL_COUNT), rate = fmt.getInteger(MediaFormat.KEY_SAMPLE_RATE);
            boolean isFloat = false, inEos = false, outEos = false;
            int w = 0; // frames written
            double rs = rate == SR ? 1 : (double) rate / SR, rsPos = 0; // fallback resampler state
            short lastL = 0, lastR = 0;
            while (!outEos) {
                if (!inEos) {
                    int ii = codec.dequeueInputBuffer(5000);
                    if (ii >= 0) {
                        ByteBuffer ib = codec.getInputBuffer(ii);
                        int n = ex.readSampleData(ib, 0);
                        if (n < 0) { codec.queueInputBuffer(ii, 0, 0, 0, MediaCodec.BUFFER_FLAG_END_OF_STREAM); inEos = true; }
                        else { codec.queueInputBuffer(ii, 0, n, ex.getSampleTime(), 0); ex.advance(); }
                    }
                }
                int oi = codec.dequeueOutputBuffer(info, 5000);
                if (oi == MediaCodec.INFO_OUTPUT_FORMAT_CHANGED) {
                    MediaFormat of = codec.getOutputFormat();
                    ch = of.getInteger(MediaFormat.KEY_CHANNEL_COUNT);
                    rate = of.getInteger(MediaFormat.KEY_SAMPLE_RATE); rs = rate == SR ? 1 : (double) rate / SR;
                    isFloat = of.containsKey(MediaFormat.KEY_PCM_ENCODING) && of.getInteger(MediaFormat.KEY_PCM_ENCODING) == AudioFormat.ENCODING_PCM_FLOAT;
                } else if (oi >= 0) {
                    ByteBuffer ob = codec.getOutputBuffer(oi);
                    ob.position(info.offset); ob.limit(info.offset + info.size);
                    ob.order(ByteOrder.nativeOrder());
                    int samples = info.size / (isFloat ? 4 : 2), inFrames = samples / ch;
                    short[] tmp = new short[samples];
                    if (isFloat) { for (int i = 0; i < samples; i++) tmp[i] = (short) Math.max(-32768, Math.min(32767, Math.round(ob.getFloat() * 32767f))); }
                    else { ShortBuffer sb = ob.asShortBuffer(); sb.get(tmp); }
                    if (rs == 1) {
                        for (int f = 0; f < inFrames && w < frames; f++, w++) {
                            out[2 * w] = tmp[f * ch]; out[2 * w + 1] = tmp[f * ch + (ch > 1 ? 1 : 0)];
                        }
                    } else { // linear resample (only if an asset was not authored at 48 kHz)
                        for (int f = 0; f < inFrames; f++) {
                            short l = tmp[f * ch], r = tmp[f * ch + (ch > 1 ? 1 : 0)];
                            while (rsPos <= 1 && w < frames) {
                                out[2 * w] = (short) (lastL + (l - lastL) * rsPos); out[2 * w + 1] = (short) (lastR + (r - lastR) * rsPos);
                                w++; rsPos += rs;
                            }
                            rsPos -= 1; lastL = l; lastR = r;
                        }
                    }
                    codec.releaseOutputBuffer(oi, false);
                    if ((info.flags & MediaCodec.BUFFER_FLAG_END_OF_STREAM) != 0) outEos = true;
                }
            }
            if (w < frames) Log.w(TAG, path + ": decoded " + w + " of " + frames + " frames (zero-padded)");
            return out;
        } finally {
            if (codec != null) { try { codec.stop(); } catch (Exception ignored) { } codec.release(); }
            ex.release();
            fd.close();
        }
    }
}
