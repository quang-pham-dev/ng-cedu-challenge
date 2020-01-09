import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { UserState, userAdapter } from './user.adapter';
import { userReducer } from './user.reducer';

export const reducers: ActionReducerMap<{ users: UserState }> = {
  users: userReducer,
};

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  userAdapter.getSelectors().selectAll
);
