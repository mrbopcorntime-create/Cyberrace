package com.neoncyberrush.game;

import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.view.InputDevice;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * Neon Cyber Rush host activity.
 * Runs the WebGL game from assets in a fullscreen hardware-accelerated WebView,
 * forwards game-controller buttons/axes into the page (Android WebView has no
 * Gamepad API), and exposes haptics + exit to JavaScript.
 */
public class MainActivity extends Activity {
    private WebView web;
    private boolean pageReady = false;
    private final float[] lastAxes = new float[10];

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        Window w = getWindow();
        w.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON
                | WindowManager.LayoutParams.FLAG_FULLSCREEN
                | WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED);
        if (Build.VERSION.SDK_INT >= 28) {
            WindowManager.LayoutParams lp = w.getAttributes();
            lp.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            w.setAttributes(lp);
        }
        // Ask for the panel's top refresh rate; the game itself caps simulation at 60 fps.
        if (Build.VERSION.SDK_INT >= 30) {
            WindowManager.LayoutParams lp = w.getAttributes();
            lp.preferredRefreshRate = 60f;
            w.setAttributes(lp);
        }

        web = new WebView(this);
        web.setBackgroundColor(Color.rgb(5, 6, 16));
        web.setLayerType(View.LAYER_TYPE_HARDWARE, null);
        web.setFocusable(true);
        web.setFocusableInTouchMode(true);
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        web.setVerticalScrollBarEnabled(false);
        web.setHorizontalScrollBarEnabled(false);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setAllowFileAccess(true);
        s.setSupportZoom(false);
        s.setBuiltInZoomControls(false);
        s.setDisplayZoomControls(false);
        s.setUseWideViewPort(true);
        s.setLoadWithOverviewMode(true);
        s.setCacheMode(WebSettings.LOAD_NO_CACHE);

        web.addJavascriptInterface(new Bridge(), "NCRNative");
        web.setWebChromeClient(new WebChromeClient());
        web.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                pageReady = true;
            }
        });
        setContentView(web);
        hideSystemUi();
        web.loadUrl("file:///android_asset/www/index.html");
        web.requestFocus();
    }

    private void hideSystemUi() {
        if (Build.VERSION.SDK_INT >= 30) {
            getWindow().setDecorFitsSystemWindows(false);
            WindowInsetsController c = getWindow().getInsetsController();
            if (c != null) {
                c.hide(WindowInsets.Type.statusBars() | WindowInsets.Type.navigationBars());
                c.setSystemBarsBehavior(WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
            }
        } else {
            getWindow().getDecorView().setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                            | View.SYSTEM_UI_FLAG_FULLSCREEN
                            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
        }
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideSystemUi();
    }

    private void js(String code) {
        if (web != null && pageReady) web.evaluateJavascript(code, null);
    }

    @Override
    protected void onPause() {
        js("window.NCR_onAppPause&&NCR_onAppPause()");
        if (web != null) web.onPause();
        super.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (web != null) web.onResume();
        hideSystemUi();
        js("window.NCR_onAppResume&&NCR_onAppResume()");
    }

    @Override
    protected void onDestroy() {
        if (web != null) {
            web.destroy();
            web = null;
        }
        super.onDestroy();
    }

    @SuppressWarnings("deprecation")
    @Override
    public void onBackPressed() {
        if (pageReady) js("window.NCR_onBack&&NCR_onBack()");
        else super.onBackPressed();
    }

    private static boolean isPadSource(int src) {
        return (src & InputDevice.SOURCE_GAMEPAD) == InputDevice.SOURCE_GAMEPAD
                || (src & InputDevice.SOURCE_JOYSTICK) == InputDevice.SOURCE_JOYSTICK
                || (src & InputDevice.SOURCE_DPAD) == InputDevice.SOURCE_DPAD;
    }

    @Override
    public boolean dispatchKeyEvent(KeyEvent e) {
        int code = e.getKeyCode();
        boolean pad = isPadSource(e.getSource()) || KeyEvent.isGamepadButton(code);
        if (pad && code != KeyEvent.KEYCODE_BACK) {
            int a = e.getAction();
            if (a == KeyEvent.ACTION_DOWN && e.getRepeatCount() == 0) {
                js("window.NCR_padKey&&NCR_padKey(" + code + ",1)");
            } else if (a == KeyEvent.ACTION_UP) {
                js("window.NCR_padKey&&NCR_padKey(" + code + ",0)");
            }
            return true;
        }
        return super.dispatchKeyEvent(e);
    }

    @Override
    public boolean dispatchGenericMotionEvent(MotionEvent e) {
        int src = e.getSource();
        if ((src & InputDevice.SOURCE_JOYSTICK) == InputDevice.SOURCE_JOYSTICK
                && e.getAction() == MotionEvent.ACTION_MOVE) {
            float[] ax = new float[]{
                    e.getAxisValue(MotionEvent.AXIS_X),
                    e.getAxisValue(MotionEvent.AXIS_Y),
                    e.getAxisValue(MotionEvent.AXIS_Z),
                    e.getAxisValue(MotionEvent.AXIS_RZ),
                    Math.max(e.getAxisValue(MotionEvent.AXIS_LTRIGGER), e.getAxisValue(MotionEvent.AXIS_BRAKE)),
                    Math.max(e.getAxisValue(MotionEvent.AXIS_RTRIGGER), e.getAxisValue(MotionEvent.AXIS_GAS)),
                    e.getAxisValue(MotionEvent.AXIS_HAT_X),
                    e.getAxisValue(MotionEvent.AXIS_HAT_Y),
                    0f, 0f
            };
            boolean changed = false;
            for (int i = 0; i < 8; i++) {
                if (Math.abs(ax[i] - lastAxes[i]) > 0.01f) changed = true;
                lastAxes[i] = ax[i];
            }
            if (changed) {
                StringBuilder sb = new StringBuilder("window.NCR_padAxes&&NCR_padAxes([");
                for (int i = 0; i < 8; i++) {
                    if (i > 0) sb.append(',');
                    sb.append(Math.round(ax[i] * 1000f) / 1000f);
                }
                sb.append("])");
                js(sb.toString());
            }
            return true;
        }
        return super.dispatchGenericMotionEvent(e);
    }

    /** Methods callable from JavaScript as window.NCRNative.* */
    public class Bridge {
        @JavascriptInterface
        public void vibrate(int ms, int amplitude) {
            try {
                Vibrator v = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
                if (v == null || !v.hasVibrator()) return;
                int amp = Math.max(1, Math.min(255, amplitude));
                v.vibrate(VibrationEffect.createOneShot(Math.max(1, ms), amp));
            } catch (Exception ignored) {
            }
        }

        @JavascriptInterface
        public void exitApp() {
            runOnUiThread(new Runnable() {
                public void run() {
                    finishAndRemoveTask();
                }
            });
        }

        @JavascriptInterface
        public String platform() {
            return Build.MANUFACTURER + " " + Build.MODEL + " / Android " + Build.VERSION.RELEASE;
        }
    }
}
