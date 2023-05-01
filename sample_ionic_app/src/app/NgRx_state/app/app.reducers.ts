import { Action, createReducer, on } from '@ngrx/store';
import {AppState, initialState} from "./app.state";
import * as AppActions from './app.actions';
import {allNetworkActions} from "./app.actions";


const appReducer = createReducer(
  initialState,
  on(
    allNetworkActions.NetworkDisconnected,
    (state,) => {
      return {
        ...state,
        isNetworkConnected: false,
      };
    }
  ),
  on(
    allNetworkActions.NetworkReconnected,
    (state,) => {
      return {
        ...state,
        isNetworkConnected: true,
      };
    }
  ),

);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
