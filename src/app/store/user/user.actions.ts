import { createAction, props } from '@ngrx/store';
import { User } from '@cedu/models/user.model';

export const selectUser = createAction('[User/Page] Select User', props<{ user: User }>());
export const loadUsers = createAction('[Users/API] Load Users');
export const addUser = createAction('[User/API] Add User', props<{ user: User }>());
export const addUsers = createAction('[Users/API] Add Users', props<{ users: User[] }>());
