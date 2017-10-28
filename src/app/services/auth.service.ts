import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import Auth0Lock from 'auth0-lock';

@Injectable()
export class AuthService {
    lock = new Auth0Lock(
        'Iy1DXf0BUS1Aw3hD4x9vRWGOhVCcHw7g',
        'hbconsulting.eu.auth0.com',
        {
            oidcConformant: true,
            autoclose: true,
            auth: {
                redirectUrl: window.location.origin + '/#/callback',
                responseType: 'token id_token',
                audience: `https://hbconsulting.eu.auth0.com/userinfo`,
                params: {
                    scope: 'openid profile email'
                }
            },
            languageDictionary: {
                title: "bc.pthings.io"
            },
            theme: {
                logo: '/assets/images/logo/pthing-icon.png',
                primaryColor: '#1E88E5'
            },
        }
    );

    constructor(public router: Router) {}

    public login(): void {
        this.lock.show();
    }

    // Call this method in app.component.ts
    // if using hash-based routing
    public handleAuthenticationWithHash(): void {
        this.router.events
            .filter(event => event instanceof NavigationStart)
            .filter((event: NavigationStart) =>
                /access_token|id_token|error/.test(event.url)
            )
            .subscribe(() => {
                this.lock.resumeAuth(
                    window.location.hash,
                    (err, authResult) => {
                        if (err) {
                            this.router.navigate(['/login']);
                            console.log(err);
                            return;
                        }

                        this.setSession(authResult);
                        this.router.navigate(['/employees']);
                    }
                );
            });
    }

    private setSession(authResult): void {
        const expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    public logout(): void {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}
