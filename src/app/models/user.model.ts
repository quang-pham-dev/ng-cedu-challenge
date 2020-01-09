import { _Base } from './base.model';
export class User extends _Base {
    readonly token?: string;
    readonly email?: string;
    readonly username?: string;
    readonly roles?: [string];
    readonly state?: string;
    phone?: string;
    displayName?: string;
}
