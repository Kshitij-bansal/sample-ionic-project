import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import {AuthenticateRequestData} from '../../components/models/request/authenticateRequest.model';
import {AuthenticateData} from '../../components/models/response/authenticate.model';


export const LoginActions = createActionGroup({
  source: '[Login Screen]',
  events: {
    'Login Flow Initiated': props<{ authData: AuthenticateRequestData; isLoading: boolean }>(),
    'Login Succeeded': props<{ userDetails: AuthenticateData }>(),
    'Login Failed': emptyProps(),
  }
});

export const LogoutActions = createActionGroup({
  source: '[Logout Button]',
  events: {
    'Logout Flow Initiated': emptyProps(),
    'Logout Succeeded': emptyProps(),
    'Logout Failed': emptyProps(),
  }
});

export const userChanged = createAction(
  '[Auth] User Changed',
  props<{ userDetails: AuthenticateData }>()
);
