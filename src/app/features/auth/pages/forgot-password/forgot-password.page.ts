import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-forgot-password',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './forgot-password.page.html'
})
export class ForgotPasswordPage {
    private readonly fb = inject(FormBuilder);

    form: FormGroup = this.fb.group({
        email: ['', [Validators.required, Validators.minLength(10)]],
    });

    onSubmit(): void {
        if (this.form.invalid) {
            console.log("Invalid");
            this.form.markAllAsTouched();
            return;
        }

        console.log("valid");
    }
}
