import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { ListComponent } from './producer/list/list.component';
import { FormProducerComponent } from './producer/form-producer/form-producer.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    ListComponent,
    FormProducerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MaintenanceRoutingModule,
  ]
})
export class MaintenanceModule { }
