#!/usr/bin/env bash
# Bundles the audio worker as a text blob, then the game. Usage: tools/bundle.sh [--minify]
set -e
cd "$(dirname "$0")/.."
npx esbuild src/audio/worker.js --bundle --format=iife --target=chrome110 $1 --outfile=src/audio/worker.gen.js --log-level=warning
mv src/audio/worker.gen.js src/audio/worker.gen.txt
npx esbuild src/main.js --bundle --format=iife --target=chrome110 $1 --outfile=www/game.js --log-level=warning
