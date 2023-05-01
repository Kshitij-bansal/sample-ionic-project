import {UserState} from "./user";
import {AppState} from "./app";

export interface State {

  app: AppState;
  user: UserState;
}
