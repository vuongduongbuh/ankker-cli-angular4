import * as feed from './feed.actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  feeds: Array<any>;
};

const initialState: State = {
  loaded: false,
  loading: false,
  feeds: []
};

export function reducer(state = initialState, action: feed.Actions): State {
  switch (action.type) {

    case feed.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case feed.LOAD_SUCCESS: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false
      });
    }

    case feed.LOAD_FAILED: {
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
export const getFeeds = (state: State) => state.feeds;
