import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../auth/data-access/auth.service';
import { APP_ROUTES } from '../../../../core/services/navigation/routes';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationService } from '../../../../core/services/navigation/navigation.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
    templateUrl: './home.page.html'
})
export class HomePage implements OnInit, OnDestroy {
    private readonly auth = inject(AuthService);
    private readonly navigation = inject(NavigationService);

    isProfileOpen = false;
    isMobileSidebarOpen = false;

    ngOnInit(): void {
    }

    ngOnDestroy(): void {

    }

    toggleProfile(): void {
        this.isProfileOpen = !this.isProfileOpen;
    }

    closeProfile(): void {
        this.isProfileOpen = false;
    }

    toggleMobileSidebar(): void {
        this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
        this.isProfileOpen = false;
    }

    closeMobileSidebar(): void {
        this.isMobileSidebarOpen = false;
    }

    onLogout(): void {
        this.auth.logout().subscribe({
            next: () => this.navigation.goTo(APP_ROUTES.login)
        });
    }
}
