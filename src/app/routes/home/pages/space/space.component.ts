import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectAllUsers } from '@cedu-store/user/user.selectors';
import { loadUsers } from '@cedu-store/user/user.actions';
import { Observable } from 'rxjs';
import { User } from '@cedu/models/user.model';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {
  users: Observable<User[]>;
  constructor(private store: Store<User[]>) {
    this.users = store.pipe(select(selectAllUsers));
  }

  ngOnInit() {
  }

  public getUsers() {
    this.store.dispatch(loadUsers());
  }
}
