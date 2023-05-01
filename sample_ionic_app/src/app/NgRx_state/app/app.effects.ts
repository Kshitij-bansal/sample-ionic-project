import {Injectable} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {LoginService} from "../../screens/authentication/login/login.service";

import {Store} from "@ngrx/store";
import * as AppActions from "./app.actions";


@Injectable()
export class NetworkEffects {
  constructor(
    private actions$: Actions<any>,
    private loginService: LoginService,
    private store: Store,
  ) {
  }


  // detectNetwork$ = createEffect(() => {
  //   let action;
  //   Network.addListener('networkStatusChange', (status) => {
  //
  //     action = status.connected
  //       ? AppActions.allNetworkActions.NetworkReconnected()
  //       : AppActions.allNetworkActions.NetworkDisconnected();
  //     window.alert(status);
  //   });
  //   return of(action);
  // }, { dispatch: false });

}
