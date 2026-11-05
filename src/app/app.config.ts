import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth-interceptor';
import { errorInterceptor } from './core/interceptors/error-interceptor';
import { AuthService } from './features/auth/data-access/auth.service';
import { catchError, firstValueFrom, of } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors(
        [
          authInterceptor,
          errorInterceptor
        ]
      )
    ),
    provideAppInitializer(() => {
      const auth = inject(AuthService);

      return firstValueFrom(
        auth.loadUser().pipe(
          catchError(() => {
            auth.logout();

            return of(null);
          })
        )
      )
    })
  ]
};
