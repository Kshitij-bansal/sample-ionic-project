import { Action, createReducer, on } from '@ngrx/store';
import { initialState, UserState } from './user.state';
import * as UserActions from './user.actions';

const userReducer = createReducer(
  initialState,
  on(
    UserActions.allLoginScreenActions.loginSucceeded,
    (state, { userDetails: authData }) => ({
      ...state,
      userDetails: authData,
    })
  )
);

const initiateLogin = createReducer(
  initialState,
  on(
    UserActions.allLoginScreenActions.loginFlowInitiated,
    (state, { isLoading: boolean }) => ({
      ...state,
      isLoading: true,
    })
  )
);
export function reducer(state: UserState | undefined, action: Action) {
  // return userReducer(state, action);
  return initiateLogin(state, action);
}
