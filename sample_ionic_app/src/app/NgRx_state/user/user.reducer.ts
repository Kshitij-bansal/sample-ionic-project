import { Action, createReducer, on } from '@ngrx/store';
import { initialState, UserState } from './user.state';
import * as UserActions from './user.actions';

const userReducer = createReducer(
  initialState,
  on (UserActions.allLoginScreenActions.loginSucceeded, (state, { userDetails: authData }) => {
    console.log("authdata", authData);
    return ({
    ...state,
    userDetails: authData,
    isLoading: true
  })})
);


export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
