import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModalRoutingModule } from './user-modal-routing.module';
import { UserModalComponent } from './user-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/private/shared/material.module';


@NgModule({
  declarations: [
    UserModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    UserModalRoutingModule
  ]
})
export class UserModalModule { }
