import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Network, NetworkStatusChangeCallback} from '@capacitor/network';

import * as UserActions from "./user.actions";
import {catchError, from, fromEvent, map, of, switchMap, tap} from "rxjs";
import {Store} from "@ngrx/store";


@Injectable()
export class NetworkEffects {
  constructor(
    private actions: Actions<any>,
    // private loginService: LoginService,
    private store: Store,
  ) {}

  detectNetwork = createEffect(
    () =>

    { dispatch: true }
  );

  logout = createEffect(
    () =>
      this.actions.pipe(
        ofType(UserActions.allLoginScreenActions.logoutFlowInitiated.type),
        tap(() => this.loginService.logout())
      ),
    { dispatch: false }
  );
}
