/* eslint-disable @typescript-eslint/quotes */
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.devcreativo.mekaapp',
  appName: 'meka-cliente',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    SplashScreen: {
      launchAutoHide: false,
      splashImmersive: false,
      splashFullScreen: false,
      launchShowDuration: 500,
      backgroundColor: "#080f18",
      androidScaleType: "CENTER_INSIDE",
      androidSplashResourceName: "splash",
    },
  },
  android: {
    allowMixedContent: true
  },
  server: {
    cleartext: true,
    // url: 'http://192.168.250.163:8100',
    url: 'https://guayoyo-inc.web.app/'
  },
};

export default config;
