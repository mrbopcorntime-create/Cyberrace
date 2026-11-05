#!/usr/bin/env bash
# Builds NeonCyberRush.apk without Gradle: esbuild -> javac -> d8 -> aapt2 -> align -> apksigner
set -euo pipefail
cd "$(dirname "$0")"
# Toolchain (android.jar, d8, ecj, apksigner, aapt2) is fetched from npm on first run.
TOOLS=${TOOLS:-$PWD/.tools}
if [ ! -f "$TOOLS/minapk/package/tools/android.jar" ]; then
  echo "[0/7] fetching Android toolchain from npm"
  mkdir -p "$TOOLS" && (cd "$TOOLS" && npm pack @drxiaozhi/minapk@0.5.1 aaptjs3@2.0.2 >/dev/null \
    && mkdir -p minapk aapt && tar xzf drxiaozhi-minapk-*.tgz -C minapk && tar xzf aaptjs3-*.tgz -C aapt \
    && chmod +x aapt/package/bin/x64/linux/aapt2)
fi
[ -d node_modules/three ] || npm install --no-audit --no-fund
T=$TOOLS/minapk/package/tools
AAPT2=$TOOLS/aapt/package/bin/x64/linux/aapt2
ANDROID_JAR=$T/android.jar
VERSION_CODE=${VERSION_CODE:-1}
VERSION_NAME=${VERSION_NAME:-1.0.0}
OUT=build
rm -rf $OUT && mkdir -p $OUT/classes $OUT/dex $OUT/assets/www

echo "[1/7] bundle game"
tools/bundle.sh --minify
cp www/index.html www/game.js $OUT/assets/www/

echo "[2/7] icon"
[ -f android/res/mipmap-xxxhdpi/ic_launcher.png ] || python3 tools/make_icon.py android/res/mipmap-xxxhdpi/ic_launcher.png
rm -f android/res/mipmap-xxxhdpi/ic_launcher_1024.png

echo "[3/7] javac"
java -jar $T/ecj-3.45.0.jar -source 8 -target 8 -encoding UTF-8 -nowarn -bootclasspath $ANDROID_JAR \
  -classpath $ANDROID_JAR -d $OUT/classes $(find android/java -name '*.java') 2>&1 | grep -v JAVA_TOOL || true

echo "[4/7] d8"
java -cp $T/d8.jar com.android.tools.r8.D8 --release --min-api 26 --lib $ANDROID_JAR \
  --output $OUT/dex $(find $OUT/classes -name '*.class') 2>&1 | grep -v JAVA_TOOL || true

echo "[5/7] aapt2"
$AAPT2 compile --dir android/res -o $OUT/res.zip
$AAPT2 link -o $OUT/base.apk -I $ANDROID_JAR --manifest android/AndroidManifest.xml \
  -A $OUT/assets --min-sdk-version 26 --target-sdk-version 34 \
  --version-code $VERSION_CODE --version-name $VERSION_NAME $OUT/res.zip
(cd $OUT/dex && zip -q -9 ../base.apk classes.dex)

echo "[6/7] align"
python3 tools/zipalign.py $OUT/base.apk $OUT/aligned.apk

echo "[7/7] sign"
KS=keystore/ncr-release.jks
if [ ! -f $KS ]; then
  mkdir -p keystore
  keytool -genkeypair -keystore $KS -storepass neonrush -keypass neonrush -alias ncr \
    -keyalg RSA -keysize 2048 -validity 10000 \
    -dname "CN=Neon Cyber Rush, O=Neon Cyber Rush, C=AU" 2>&1 | grep -v JAVA_TOOL || true
fi
java -jar $T/apksigner.jar sign --ks $KS --ks-pass pass:neonrush --key-pass pass:neonrush \
  --ks-key-alias ncr --v1-signing-enabled true --v2-signing-enabled true --v3-signing-enabled true \
  --out $OUT/NeonCyberRush.apk $OUT/aligned.apk 2>&1 | grep -v JAVA_TOOL || true
java -jar $T/apksigner.jar verify --verbose $OUT/NeonCyberRush.apk 2>&1 | grep -E "Verified|Verifies|ERROR|WARNING: .*v[23]" | head
ls -la $OUT/NeonCyberRush.apk
