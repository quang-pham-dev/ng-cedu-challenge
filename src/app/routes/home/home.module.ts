import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SpaceComponent } from './pages/space/space.component';

@NgModule({
  declarations: [
    HomeComponent,
    SpaceComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
