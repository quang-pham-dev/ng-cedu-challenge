import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SpaceComponent } from './pages/space/space.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: SpaceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
