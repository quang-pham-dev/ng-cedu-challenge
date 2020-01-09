import { StorageHelper } from './storage.helper';
import { User } from 'src/app/models/user.model';
import { EnumsConst } from 'src/app/constants/enums.const';

export class AuthHelper {
    retryCount = 0;
    limitCallCount = 20;
    storageHelper: StorageHelper = new StorageHelper();

    public doCheck(auth, isAuthorizedObs, user) {
        auth.currentAuthenticatedUser()
        .then((cognito) => {
          this.storageHelper.setItem('AuthorizeStatus', EnumsConst.AuthStatus.LoggedIn);
          user.next(this.getUserInfo(cognito, EnumsConst.AuthStatus.LoggedIn));
        })
        .catch(() => {
          if (this.retryCount <= this.limitCallCount) {
            if (this.retryCount < this.limitCallCount) {
              user.next({ status: EnumsConst.AuthStatus.Checking });
              isAuthorizedObs.next(false);
            }
            if (this.retryCount === this.limitCallCount) {
              user.next({ status: EnumsConst.AuthStatus.LoggedOut });
            }
          }
          this.retryCount++;
        });
    }

    public getUserInfo(cognitoIdentity, status?: string): User {
        return {
            token: cognitoIdentity.signInUserSession.accessToken.jwtToken,
            email: cognitoIdentity.attributes.email,
            name: cognitoIdentity.attributes.name,
            username: cognitoIdentity.username,
            status
        };
    }
}
