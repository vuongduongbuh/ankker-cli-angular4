import * as auth from './auth.actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  isLoggedIn: Boolean;
};

const initialState: State = {
  loaded: false,
  loading: false,
  isLoggedIn: false
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {

    case auth.LOGIN: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case auth.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        isLoggedIn: true
      });
    }

    case auth.LOGIN_FAILED: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false
      });
    }

    default:
      return state;
  }

}
/*
 Selectors for the state that will be later
 used in the categories-list component
 */
export const getLoadingState = (state: State) => state.loading;
export const getIsLoggedIn = (state: State) => state.isLoggedIn;
