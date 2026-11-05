import { HttpErrorResponse, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { NavigationService } from '../services/navigation/navigation.service';
import { inject } from '@angular/core';
import { APP_ROUTES } from '../services/navigation/routes';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const navigation = inject(NavigationService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        navigation.goTo(APP_ROUTES.unavailable);
      }

      if (error.status === HttpStatusCode.InternalServerError) {
        navigation.goTo(APP_ROUTES.error);
      }

      return throwError(() => error);
    })
  );
};