import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {State} from "./core.state";

import * as UserReducer from "./user/user.reducer";
import * as AppReducer from "./app/app.reducers";

export const reducers: ActionReducerMap<State> = {

  app: AppReducer.reducer,
  user: UserReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
