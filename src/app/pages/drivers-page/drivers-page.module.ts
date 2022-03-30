import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversPageRoutingModule } from './drivers-page-routing.module';
import { DriversPageComponent } from './drivers-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    DriversPageComponent,
    
   
    
   
  ],
  imports: [
    CommonModule,
    DriversPageRoutingModule,
    SharedModule,
    FormsModule

  ],

  exports: [DriversPageComponent]

})
export class DriversPageModule { }
