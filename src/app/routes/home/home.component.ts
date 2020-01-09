import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>Home Header</h2>
    <router-outlet></router-outlet>
    <h3>Home Footer</h3>
  `
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
