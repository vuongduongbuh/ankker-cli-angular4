import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { AppConstants } from '../app.constant';

//Import store
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/index';
import * as auth from '../store/auth/auth.actions';

@Injectable()
export class AuthService {
    // lock = new Auth0Lock(
    //     AppConstants.auth0ClientId,
    //     AppConstants.auth0Domain,
    //     {
    //         // oidcConformant: true,
    //         // autoclose: true,
    //         // auth: {
    //         //     redirectUrl: "http://localhost:4200/callback",
    //         //     responseType: 'token id_token',
    //         //     audience: `https://` + AppConstants.auth0Domain + `/userinfo`,
    //         //     params: {
    //         //         scope: 'openid profile email'
    //         //     }
    //         // },
    //         // languageDictionary: {
    //         //     title: "bc.pthings.io"
    //         // },
    //         // theme: {
    //         //     logo: '/assets/images/logo/pthing-icon.png',
    //         //     primaryColor: '#1E88E5'
    //         // },
    //         responseType: 'token id_token',
    //         audience: 'https://personallog.eu.auth0.com/userinfo',
    //         redirectUri: 'http://localhost:4200/callback',      
    //         scope: 'openid'
    //     }
    // );

    auth0 = new auth0.WebAuth({
        clientID: AppConstants.auth0ClientId,
        domain: AppConstants.auth0Domain,
        responseType: 'token id_token',
        audience: 'https://personallog.eu.auth0.com/userinfo',
        redirectUri: 'http://localhost:4200/callback',
        scope: 'openid'
    });

    constructor(public router: Router, private store: Store<fromRoot.AppState>) { }

    public login(): void {
        this.auth0.authorize();
    }

    public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
                this.store.dispatch(new auth.LoginSuccess(authResult))
                this.router.navigate(['/feed']);
            } else if (err) {
                console.log(err);
                this.store.dispatch(new auth.Login(1));
                this.store.dispatch(new auth.LoginFailed());
                this.router.navigate(['/']);
            }
        });
    }

    private setSession(authResult): void {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}
