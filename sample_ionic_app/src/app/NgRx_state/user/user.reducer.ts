import { Action, createReducer, on } from '@ngrx/store';
import { initialState, UserState } from './user.state';
import * as UserActions from './user.actions';

const userReducer = createReducer(
  initialState,
  on(
    UserActions.LoginActions.loginFlowInitiated,
    (state, { authData: AuthenticateRequestData, isLoading: isLoading }) => {
      console.log('authdata reducer initiate', AuthenticateRequestData);
      console.log('authdata reducer initiate', isLoading);
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    UserActions.LoginActions.loginSucceeded,
    (state, { userDetails: authData }) => {
      console.log('authdata', authData);
      return {
        ...state,
        userDetails: authData,
        isLoading: false,
      };
    }
  )
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
