import { State, createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const selectUser = createFeatureSelector<UserState>('user');
export const isLoading = createFeatureSelector<UserState>('user');

export const selectIsLoading = createSelector(
  isLoading,
  (state: UserState) => state.isLoading
);

export const selectUserDetails = createSelector(
  selectUser,
  (state: UserState) => state.userDetails
);

export const selectIsLoggedIn = createSelector(
  selectUserDetails,
  (userDetails) => !!userDetails
);

// export const selectUserRoles = createSelector(
//   selectUserDetails,
// (userDetails) => userDetails[`${authentication.roles}/roles`]
// );

// export const selectIsAdmin = createSelector(selectUserRoles, (userRoles) =>
//   userRoles?.includes(USER_ROLES.MENU_ADMIN)
// );
