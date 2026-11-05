import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../data-access/auth.service';
import { APP_ROUTES } from '../../../../core/services/navigation/routes';
import { NavigationService } from '../../../../core/services/navigation/navigation.service';
import { LucideLogIn } from '@lucide/angular';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
    CommonModule,
    ReactiveFormsModule,
    LucideLogIn,
],
    templateUrl: './login.page.html'
})
export class LoginPage implements OnInit {
    private readonly fb = inject(FormBuilder);
    private readonly authService = inject(AuthService);
    private readonly navigation = inject(NavigationService);

    loginForm: FormGroup = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    readonly errorMessage = signal("");
    readonly isLoading = signal(false);

    ngOnInit(): void {
        if (this.authService.isAuthenticated()) {
            this.navigation.goTo(APP_ROUTES.home);
        }
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        this.isLoading.set(true);
        this.errorMessage.set("");

        const { username, password } = this.loginForm.value;

        this.authService.login({ username, password }).subscribe({
            next: () => {
                this.isLoading.set(false);
                this.navigation.goTo(APP_ROUTES.home);
            },
            error: (e) => {
                this.isLoading.set(false);
                this.errorMessage.set('Invalid username or password');
            }
        });
    }

    onForgotPassword(): void {
        this.navigation.goTo(APP_ROUTES.forgotPassword);
    }

    get f() {
        return this.loginForm.controls;
    }
}
