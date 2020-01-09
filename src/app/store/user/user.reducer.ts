import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { UserState, userAdapter } from './user.adapter';

export const initialState: UserState = userAdapter.getInitialState({
  selectedUsername: ''
});

export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, { user }) => {
    return userAdapter.addOne(user, state);
  }),
  on(UserActions.addUsers, (state, { users }) => {
    return userAdapter.addMany(users, state);
  })
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}




