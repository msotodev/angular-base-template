import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../features/auth/data-access/auth.service';
import { inject } from '@angular/core';
import { APP_ROUTES } from '../services/navigation/routes';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuthenticated()) return true;

    console.log("auth guard");

    return router.createUrlTree([APP_ROUTES.login]);
};