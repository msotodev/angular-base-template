import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { APP_ROUTES } from './core/services/navigation/routes';
import { LoginPage } from './features/auth/pages/login/login.page';
import { HomePage } from './features/home/pages/home/home.page';

export const routes: Routes = [
    {
        path: APP_ROUTES.home,
        component: HomePage,
        canActivate: [authGuard],
    },
    {
        path: APP_ROUTES.login,
        component: LoginPage,
    },
    {
        path: APP_ROUTES.forgotPassword,
        loadComponent: () => import('./features/auth/pages/forgot-password/forgot-password.page').then(p => p.ForgotPasswordPage),
    },
    {
        path: APP_ROUTES.resetPassword,
        loadComponent: () => import('./features/auth/pages/reset-password/reset-password.page').then(p => p.ResetPasswordPage),
    },
    {
        path: APP_ROUTES.error,
        loadComponent: () => import('./shared/components/pages/error/error-page').then(p => p.ErrorPage)
    },
    {
        path: APP_ROUTES.unavailable,
        loadComponent: () => import('./shared/components/pages/unavailable/unavailable.page').then(p => p.UnavailablePage)
    },
    {
        path: APP_ROUTES.notFound,
        loadComponent: () => import('./shared/components/pages/not-found/not-found.page/not-found.page').then(p => p.NotFoundPage)
    },
];
