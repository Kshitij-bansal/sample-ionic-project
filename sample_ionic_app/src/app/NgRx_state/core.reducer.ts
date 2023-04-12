import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {State} from "./core.state";

import * as UserReducer from "./user/user.reducer";

export const reducers: ActionReducerMap<State> = {

  app: AppReducer.reducer,
  user: UserReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
