import { type } from "../utils";
import { Action } from "@ngrx/store";

/*
 Because the Categories collection is asynchronous, there need to be actions to handle
 each of the stages of the request.
 */
export const LOAD = '[FEED] Load';
export const LOAD_SUCCESS = '[FEED] successfully Loaded';
export const LOAD_FAILED = '[FEED] failed to Load';

export class Load implements Action {
    readonly type = LOAD;
    constructor(public payload: any) { }
}

export class LoadFailed implements Action {
    readonly type = LOAD_FAILED;
    constructor() {}
}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: any) {}
}

export type Actions =
    Load | LoadFailed | LoadSuccess

