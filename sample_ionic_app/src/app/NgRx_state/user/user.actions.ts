import {createAction, props} from "@ngrx/store";
import {AuthenticateRequestData} from "../../components/models/request/authenticateRequest.model";
import {AuthenticateData} from "../../components/models/response/authenticate.model";


export const allLoginScreenActions = {
  loginFlowInitiated: createAction("[LoginScreen] Login Flow Initiated", props<AuthenticateRequestData>()),
  loginSucceeded: createAction('[LoginScreen] Login is succeeded'),
  loginFailed: createAction('[LoginScreen] Login is failed'),
  logoutFlowInitiated: createAction("[LoginScreen] Logout Flow Initiated"),
};

export const userChanged = createAction(
  "[Auth] User Changed",
  props<{ userDetails: AuthenticateData }>()
);
