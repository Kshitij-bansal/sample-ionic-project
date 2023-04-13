import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoginService} from "../../screens/authentication/login/login.service";

import {catchError, from, fromEvent, map, of, switchMap, tap} from "rxjs";
import {Store} from "@ngrx/store";
import * as AppActions from "./app.actions";
import {Network} from "@capacitor/network";
import {fromPromise} from "rxjs/internal/observable/innerFrom";


@Injectable()
export class NetworkEffects {
  constructor(
    private actions: Actions<any>,
    private loginService: LoginService,
    private store: Store,
  ) {
  }


  detectNetwork$ = createEffect(() => {
    return Network.addListener('networkStatusChange', (status) => {
      if (status.connected) {
        return of(AppActions.allNetworkActions.NetworkReconnected);
      } else {
        return of(AppActions.allNetworkActions.NetworkReconnected);
      }
    });
  }, { dispatch: true });

}
