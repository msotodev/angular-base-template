import { inject, Service, signal } from '@angular/core';
import { catchError, finalize, Observable, tap, throwError } from 'rxjs';
import { LoginRequest, LoginResponse } from './auth.model';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../../../core/config/api.config';

@Service()
export class AuthService {
    private readonly http = inject(HttpClient);

    public user = signal<object | null>(null);

    login(request: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${API_ENDPOINTS.identity}/Login`, request).pipe(
            tap((response) => this.user.set(response.user))
        );
    }

    logout(): Observable<void> {
        return this.http.post<void>(`${API_ENDPOINTS.identity}/Logout`, {}).pipe(
            finalize(() => this.user.set(null))
        );
    }

    loadUser(): Observable<object> {
        return this.http.get<object>(
            `${API_ENDPOINTS.identity}/Me`
        ).pipe(
            tap(user => this.user.set(user)),
            catchError((error) => {
                this.user.set(null);
                return throwError(() => error);
            })
        );
    }

    isAuthenticated(): boolean {
        return this.user() !== null;
    }
}