import { createAction, props } from '@ngrx/store';
import { AccessData, User } from '../../models';

// Login / Logout
export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ data: AccessData }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] User Logout');
