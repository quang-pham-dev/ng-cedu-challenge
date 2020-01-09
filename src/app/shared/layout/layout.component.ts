import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
  <app-navbar></app-navbar>
  <app-sidebar></app-sidebar>
  <app-container></app-container>
  `
})
export class LayoutComponent {
}
