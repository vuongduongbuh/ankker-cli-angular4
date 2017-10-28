import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Store } from "@ngrx/store";
import * as fromRoot from "../index";
import { Observable } from 'rxjs/Rx'
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
import * as auth from "./auth.actions";

@Injectable()
export class AuthEffects {
    page: any;
    constructor(
        private _actions: Actions,
        private httpService: HttpService,
        private authService: AuthService,
        private store: Store<fromRoot.AppState>
    ) {

    }

    //Login
    @Effect()
    login$ = this._actions.ofType(auth.LOGIN)
        .switchMap((action) => {
            return Observable.of(this.authService.login());
        }).catch((error) => {
            return Observable.of(new auth.LoginFailed());
        });

    // //Logout
    // @Effect()
    // logout$ = this._actions.ofType(auth.LOGOUT)
    //     .switchMap((action) => {
    //         return this.httpService.postAnonymous('integration/customer/token', { username: "vd2@mailinator.com", password: "Admin@123" })
    //             .map((token) => {
    //                 return new auth.LogoutSuccess(token.json());
    //             })
    //     }).catch((error) => {
    //         return Observable.of(new auth.LogoutFailed(error));
    //     });
}
