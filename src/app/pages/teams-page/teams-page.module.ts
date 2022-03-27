import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsPageRoutingModule } from './teams-page-routing.module';
import { TeamsPageComponent } from './teams-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamsDetailComponent } from './teams-detail/teams-detail.component';





@NgModule({
  declarations: [
    TeamsPageComponent,
    TeamsDetailComponent,
   
  ],
  imports: [
    CommonModule,
    TeamsPageRoutingModule,
    SharedModule,
    
  ]
})
export class TeamsPageModule { }
