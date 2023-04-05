import { createReducer, on } from "@ngrx/store";
import { TokenStatus } from "src/app/common/emuns/token.enum";
import { AuthActions } from "../actions/actions.types";

export const initialAuthState = InitialAuthState;

export const initialState = InitialAccessCodeState;

export const authReducer = createReducer(
  initialAuthState,
  on(
    AuthActions.loginRequest,
    (state): AuthState => ({
      ...state,
      accessTokenStatus: TokenStatus.VALIDATING,
      isLoadingLogin: true,
      hasLoginError: false,
    })
  ),
  on(
    AuthActions.loginSuccess,
    (state, action): AuthState => ({
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
    (state, action): AuthState => ({
      ...state,
      isLoadingLogin: false,
      accessTokenStatus: TokenStatus.INVALID,
      hasLoginError: '[Auth] Login Failure' && !!action.error,
    })
  )
);

