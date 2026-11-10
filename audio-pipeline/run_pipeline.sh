#!/usr/bin/env bash
# GPU-workstation orchestration: upgrade race tracks with ACE-Step 1.5 (Grid Runner as timbre reference),
# re-sync, re-stem, re-master and drop them into the APK assets. Usage:
#   ./run_pipeline.sh Grid_Runner.mp3 t5_3 [t0_0 ...]
set -euo pipefail
cd "$(dirname "$0")"
REF=$1; shift
IDS=("$@")
B=../build/pipeline
mkdir -p $B
echo "[1] Grid Runner stems (Demucs htdemucs_ft)"
[ -f $B/grid_runner/music.wav ] || python3 demucs_stems.py "$REF" $B/grid_runner --model htdemucs_ft --shifts 2
echo "[2] arrangements (exact grid) for: ${IDS[*]}"
node ../tools/music/compose.mjs $B/compose $(for i in "${IDS[@]}"; do echo "$i" | sed 's/^t\([0-9]\)_\([0-9]\)$/\1-\2/'; done)
echo "[3] ACE-Step 1.5 cover + seam repaint + lego percussion"
python3 ace_step_tracks.py --compose-dir $B/compose --ref "$REF" --out $B/ace --only "${IDS[@]}" --candidates 3
for id in "${IDS[@]}"; do
  bpm=$(python3 -c "import json;print(json.load(open('$B/compose/$id/meta.json'))['bpm'])")
  title=$(python3 -c "import json;print(json.load(open('$B/compose/$id/meta.json'))['title'])")
  pick=${PICK:-0}          # audition cand0..2 and set PICK=n
  echo "[4] $id: tempo-lock + loop ($bpm BPM) -> stems"
  python3 align_loop.py $B/ace/$id/cand$pick.wav $B/aligned_$id.wav --bpm "$bpm" --bars 32 --search 0:3
  python3 stems_from_mix.py $B/aligned_$id.wav $B/stems/$id --id "$id" --bpm "$bpm" --title "$title" \
    --layer top=$B/ace/$id/cand${pick}_percussion.wav
done
echo "[5] master -> APK assets"
python3 master_songs.py $B/stems --out ../android/assets/music
echo "[6] verify + build"
javac -nowarn -d /tmp/mh ../android/java/com/neoncyberrush/game/audio/{Song,StemMixer}.java ../tools/music/MixerHarness.java
java -cp /tmp/mh com.neoncyberrush.game.audio.MixerHarness ../android/assets/music
(cd .. && ./build.sh)
