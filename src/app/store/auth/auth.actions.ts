import { type } from "../utils";
import { Action } from "@ngrx/store";

/*
 Because the Categories collection is asynchronous, there need to be actions to handle
 each of the stages of the request.
 */
export const LOGIN = '[AUTH] Login';
export const LOGIN_SUCCESS = '[AUTH] successfully Logined';
export const LOGIN_FAILED = '[AUTH] failed to Login';

export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: any) { }
}

export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED;
    constructor() {}
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: any) {}
}

export type Actions =
    Login | LoginFailed | LoginSuccess

