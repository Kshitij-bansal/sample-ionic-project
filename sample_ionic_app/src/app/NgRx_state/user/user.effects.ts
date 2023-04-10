import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoginService} from "../../screens/authentication/login/login.service";

import * as UserActions from "./user.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";


@Injectable()
export class UserEffects {
  constructor(
    private actions: Actions<any>,
    private loginService: LoginService
  ) {}

  login = createEffect(
    () =>
      this.actions.pipe(
        ofType(UserActions.allLoginScreenActions.loginFlowInitiated.type),
        switchMap((action) =>
          this.loginService.login(action.userDetails).pipe(
            map(() => UserActions.allLoginScreenActions.loginSucceeded()),
            catchError((error) => of(UserActions.allLoginScreenActions.loginFailed) )
          )
        )
      ),
    { dispatch: false }
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
