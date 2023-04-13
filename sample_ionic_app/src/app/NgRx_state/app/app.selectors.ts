import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AppState} from "./app.state";

export const selectNetworkStatus = createFeatureSelector<AppState>('app');

export const selectIsNetworkConnected = createSelector(
  selectNetworkStatus,
  (state: AppState) => state.isNetworkConnected
);

