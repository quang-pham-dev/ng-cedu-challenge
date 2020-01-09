import { Component, OnInit } from '@angular/core';
import { signUpConfig } from 'src/app/routes/auth/pages/sign-up/sign-up.component';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss']
})
export class AuthComponent implements OnInit {
  signUpOptions = signUpConfig;
  constructor() {
  }

  ngOnInit() {
  }

}
