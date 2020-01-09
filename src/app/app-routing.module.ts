import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedGuard } from '@cedu-guards/authorized.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('@cedu-routes/home/home.module')
    .then(mod => {
      return mod.HomeModule;
    })
    .catch(error => {
      throw error;
    }),
    canActivateChild: [AuthorizedGuard]
  },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('src/app/routes/admin/admin.module')
  //   .then(mod => {
  //     return mod.AdminModule;
  //   })
  //   .catch(error => {
  //     return error;
  //   }),
  //   canActivateChild: [AuthorizedGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
