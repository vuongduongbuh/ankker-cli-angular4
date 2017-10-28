/*
  Import createSelector from reselect to make selection of different parts of the state fast efficient
 */
import { createSelector } from 'reselect';
/*
  Import the store logger to log all the actions to the console
 */
import { storeLogger } from "ngrx-store-logger";

import { compose } from "@ngrx/core";
import { combineReducers, State } from "@ngrx/store";
import { state } from "@angular/core";

/*
 Import the layout state
 */
import * as feed from "./feed/feed.reducer";
import * as auth from "./auth/auth.reducer";


export interface AppState {
    auth: auth.State,
    feed: feed.State
}

export const reducers = {
    feed: feed.reducer,
    auth: auth.reducer
};



const developmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);


export function reducer(state: any, action: any) {
    return developmentReducer(state, action);
}

/*
Feed
 */
export const layoutGetState = (state: AppState) => state.feed;

/*
Feed
 */
export const authGetState = (state: AppState) => state.auth;
export const authIsLoggedIn = (state: AppState) => createSelector(authGetState, auth.getIsLoggedIn);
