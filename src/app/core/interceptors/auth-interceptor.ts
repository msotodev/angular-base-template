import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../../features/auth/data-access/auth.service';
import { inject } from '@angular/core';
import { NavigationService } from '../services/navigation/navigation.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const navigation = inject(NavigationService);
  
  if (!req.url.startsWith(environment.apiUrl)) return next(req);
  
  const clone = req.clone({
    withCredentials: true
  });

  return next(clone).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log('Error interceptor', error);
      if (!req.url.includes('/auth/login') && error.status === 401) {
        auth.logout();
        navigation.goToLogin();
      }
      
      return throwError(() => error);
    })
  );
};