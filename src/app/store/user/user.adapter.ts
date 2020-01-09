import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '@cedu/models/user.model';
import { selectedUsername, sortByName } from './user.meta-data';

export interface UserState extends EntityState<User> {
  selectedUsername: string;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectedUsername,
  sortComparer: sortByName
});
