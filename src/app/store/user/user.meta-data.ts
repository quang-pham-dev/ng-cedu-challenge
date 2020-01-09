import { EntityMetadataMap } from '@ngrx/data';
import { User } from '@cedu/models/user.model';

export const userEntityMetadata: EntityMetadataMap = {
    User: {
      entityName: 'User',
      entityDispatcherOptions: { optimisticAdd: true, optimisticUpdate: true }
    }
};

export function sortByName(a: User, b: User): number {
  if (a.username && b.username) {
    return a.username.localeCompare(b.username);
  }
  return -1;
}


export function selectedUsername(a: User): string {
  if (a.username) {
    return a.username;
  }
  return '';
}
