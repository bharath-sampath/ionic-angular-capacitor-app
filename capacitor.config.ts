import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Ionic-Angular-Capacitor-App',
  webDir: 'www',
  server: {
    url: 'https://ionic-angular-capacitor-app.vercel.app/',
    allowNavigation: [
      'ionic-angular-capacitor-app.vercel.app'
    ],
  },
};

export default config;
