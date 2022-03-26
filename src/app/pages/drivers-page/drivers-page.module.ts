import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversPageRoutingModule } from './drivers-page-routing.module';
import { DriversPageComponent } from './drivers-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DriversPageComponent
   
  ],
  imports: [
    CommonModule,
    DriversPageRoutingModule,
    SharedModule,

  ],

  exports: [DriversPageComponent]

})
export class DriversPageModule { }
