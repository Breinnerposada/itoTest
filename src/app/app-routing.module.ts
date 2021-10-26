import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () => import('./private/modules/users/users.module').then(m => m.UsersModule)
  },
  { path: 'user-modal', loadChildren: () => import('./private/modules/users/user-modal/user-modal.module').then(m => m.UserModalModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
