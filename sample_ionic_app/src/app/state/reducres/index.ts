import { createReducer, on } from '@ngrx/store';
import { TokenStatus } from 'src/app/components/emuns/token.enum';
import { AuthActions } from '../actions/actions.types';
import { InitialAccessCodeState } from 'src/app/components/model/access-code.model';
import {
  InitialAuthState,
  AuthState,
} from 'src/app/components/model/authStateModel';

export const initialAuthState = InitialAuthState;

export const initialState = InitialAccessCodeState;

export const authReducer = createReducer(
  initialAuthState,
  on(
    AuthActions.loginRequest,
    (state: AuthState): AuthState => ({
      ...state,
      accessTokenStatus: TokenStatus.VALIDATING,
      isLoadingLogin: true,
      hasLoginError: false,
    })
  ),
  on(
    AuthActions.loginSuccess,
    (state: AuthState, action: { data: any }): AuthState => ({
      ...state,
      accessData: action.data,
      isLoggedIn: true,
      hasLoginError: false,
      isLoadingLogin: false,
      accessTokenStatus: TokenStatus.VALID,
    })
  ),
  on(
    AuthActions.loginFailure,
    (state: AuthState, action: { error: any }): AuthState => ({
      ...state,
      isLoadingLogin: false,
      accessTokenStatus: TokenStatus.INVALID,
      hasLoginError: '[Auth] Login Failure' && !!action.error,
    })
  )
);
