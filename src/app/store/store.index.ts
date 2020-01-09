import {
  ActionReducerMap,
} from '@ngrx/store';

import { UserState } from './user/user.adapter';
import { userReducer } from './user/user.reducer';

export interface AppState {
  users: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  users: userReducer
};



