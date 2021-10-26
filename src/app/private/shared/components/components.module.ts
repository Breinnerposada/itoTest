import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { FiltersComponent } from './filters/filters.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ActiveUserPipe } from 'src/app/pipes/active-user.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    ComponentsComponent,
    TableComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ComponentsRoutingModule,
    PipesModule,
  ],
  exports:[
    FiltersComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
