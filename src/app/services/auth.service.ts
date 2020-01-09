import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';
import { Observable } from 'rxjs';
import { User } from '@cedu-models/user.model';
import enums from '@cedu-constants/enums.const';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: Observable<any>;
  user: User;
  isAuthorized = false;
  constructor(amplifyService: AmplifyService, router: Router) {
    amplifyService.authStateChange$
    .subscribe(authState => {
      this.user = authState;
      if (authState.state === enums.AuthStatus.SignedIn) {
        this.isAuthorized = true;
        this.user = {
          displayName: authState.user.attributes['custom:display_name'],
          username: authState.user.username,
          email: authState.user.attributes.email,
          phone: authState.user.attributes.phone_number,
          state: authState.state,
          roles: authState.user.signInUserSession.accessToken.payload['cognito:groups']
        };
        router.navigate(['home']);
      }
    });
  }

  signOut() {
    return Auth.signOut({ global: true });
  }
}
