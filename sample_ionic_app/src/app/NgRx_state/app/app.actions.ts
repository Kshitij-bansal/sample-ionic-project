import {createAction} from "@ngrx/store";


export const allNetworkActions = {
  NetworkStatusChanged: createAction('[Network] Network status changed'),

  NetworkDisconnected: createAction(
    '[Network] Network connection disconnected'
  ),
  NetworkReconnected: createAction(
    '[Network] Network connection is restored'
  ),
};
