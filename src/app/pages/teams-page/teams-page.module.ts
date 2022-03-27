import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsPageRoutingModule } from './teams-page-routing.module';
import { TeamsPageComponent } from './teams-page.component';
import { SharedModule } from 'src/app/shared/shared.module';






@NgModule({
  declarations: [
    TeamsPageComponent,
    
   
  ],
  imports: [
    CommonModule,
    TeamsPageRoutingModule,
    SharedModule,
    
  ],
  exports: [TeamsPageComponent]
})
export class TeamsPageModule { }
