import { Component } from '@angular/core';
import { AuthService } from '@cedu-services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <ng-container>
      <app-auth *ngIf="auth.user?.state !== 'signedIn'"></app-auth>
      <app-layout *ngIf="auth.user?.state === 'signedIn'"></app-layout>
    </ng-container>
  `
})

export class AppComponent {
  constructor(public auth: AuthService) {}
}
