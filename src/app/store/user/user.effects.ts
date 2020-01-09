import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { addUsers, loadUsers } from './user.actions';
import { UserService } from '@cedu-services/user.service';

@Injectable()
export class UserEffects {
  private loadUsers$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() => from(this.userService.getAllUsers())
        .pipe(
          map(users => addUsers({ users })),
          catchError(error => of(error))
        )
      )
    )
  );
  constructor(private actions$: Actions, private userService: UserService) {
    this.loadUsers$._isScalar = false;
  }
}
