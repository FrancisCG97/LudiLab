import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(
      {
        "projectId": "fir-crud-df0f5",
        "appId": "1:845834747164:web:195b4ad9a1b4235baa4ed9",
        "storageBucket": "fir-crud-df0f5.appspot.com",
        "authDomain": "fir-crud-df0f5.firebaseapp.com",
        "messagingSenderId": "845834747164"
      }
    )), provideFirestore(() => getFirestore())
  ]
};
