import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  AutoRefreshTokenService,
  INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
  includeBearerTokenInterceptor,
  provideKeycloak, UserActivityService,
  withAutoRefreshToken,
} from 'keycloak-angular';
import { BASE_PATH } from './api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
    {
      provide: BASE_PATH,
      useValue: 'http://localhost:3000',
    },
    provideKeycloak({
      config: {
        url: 'http://localhost:8081',
        realm: 'campus',
        clientId: 'campus_fe',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      },
      features: [
        withAutoRefreshToken({
          onInactivityTimeout: 'none',
        })
      ],
      providers: [
        AutoRefreshTokenService,
        UserActivityService,
        {
          provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
          useValue: {
            urlPattern: /^(.*)$/,
            bearerPrefix: 'Bearer'
          },
        },
      ]
    }),
  ],
};
