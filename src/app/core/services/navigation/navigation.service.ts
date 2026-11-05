import { inject, Service } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { APP_ROUTES } from './routes';

@Service()
export class NavigationService {
    private router = inject(Router);

    goTo(route: string, params: NavigationExtras = {}): Promise<boolean> {
        if (!route) {
            return this.router.navigateByUrl('/');
        }

        const url = route.startsWith('/')
            ? route
            : `/${route}`;

        return this.router.navigate([url], params);
    }

    goToLogin(returnUrl?: string | null): Promise<boolean> {
        return this.router.navigate(['/', APP_ROUTES.login], {
            queryParams: returnUrl
                ? { returnUrl }
                : undefined
        });
    }

    goToReturnUrl(returnUrl?: string | null): Promise<boolean> {
        return this.router.navigateByUrl(returnUrl || '/');
    }

    goBack(): void {
        window.history.back();
    }
}
