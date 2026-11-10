package com.neoncyberrush.game.audio;

import java.util.HashMap;
import java.util.Map;

/** A decoded adaptive song: N sample-locked looping stems (+ optional one-shot intro mix). */
public final class Song {
    /** Layer configuration for one game state. */
    public static final class State {
        public final float[] gains;     // per stem, linear
        public final float lowpassHz;   // 0 = open
        public State(float[] gains, float lowpassHz) { this.gains = gains; this.lowpassHz = lowpassHz; }
    }

    public final String id;
    public final double bpm;
    public final int loopFrames;
    public final String[] stemNames;
    public final short[][] pcm;          // interleaved stereo, exactly loopFrames * 2 each
    public final short[] intro;          // interleaved stereo or null
    public final int introFrames;
    public final int[][] kick;           // kick 16th-steps per bar (2-bar pattern) for engine sidechain
    public final double finalRate;
    public final Map<String, State> states = new HashMap<String, State>();

    public Song(String id, double bpm, int loopFrames, String[] stemNames, short[][] pcm,
                short[] intro, int introFrames, int[][] kick, double finalRate) {
        this.id = id; this.bpm = bpm; this.loopFrames = loopFrames; this.stemNames = stemNames; this.pcm = pcm;
        this.intro = intro; this.introFrames = intro == null ? 0 : introFrames; this.kick = kick; this.finalRate = finalRate;
    }

    public int stemIndex(String name) {
        for (int i = 0; i < stemNames.length; i++) if (stemNames[i].equals(name)) return i;
        return -1;
    }

    public long bytes() {
        long b = intro == null ? 0 : intro.length * 2L;
        for (short[] p : pcm) b += p.length * 2L;
        return b;
    }
}
