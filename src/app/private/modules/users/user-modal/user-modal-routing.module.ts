import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModalComponent } from './user-modal.component';

const routes: Routes = [{ path: '', component: UserModalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModalRoutingModule { }
