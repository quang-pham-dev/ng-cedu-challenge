import { Injectable } from '@angular/core';
import { User } from '@cedu-models/user.model';

@Injectable()
export class UserService {
  constructor() {}
  public async getAllUsers(): Promise<User[]> {
    return new Promise(resolve => {
      const users: User[] = [
        {
          displayName: 'Khanh',
          username: 'khanh',
          email: 'khanh@cedu.vn',
        },
        {
          displayName: 'Quang',
          username: 'quang',
          email: 'quang@cedu.vn',
        },
        {
          displayName: 'Viet',
          username: 'viet',
          email: 'viet@cedu.vn',
        },
      ];
      resolve(users);
    });
  }
}
