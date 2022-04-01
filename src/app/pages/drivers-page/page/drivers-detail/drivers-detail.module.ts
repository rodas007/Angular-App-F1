import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversDetailRoutingModule } from './drivers-detail-routing.module';
import { DriversDetailComponent } from './drivers-detail.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
DriversDetailComponent

  ],
  imports: [
    CommonModule,
    DriversDetailRoutingModule,
    ButtonModule
  ]
})
export class DriversDetailModule { }
