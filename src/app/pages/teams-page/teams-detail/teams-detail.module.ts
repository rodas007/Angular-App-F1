import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsDetailRoutingModule } from './teams-detail-routing.module';
import { TeamscardComponent } from './components/teamscard/teamscard.component';


@NgModule({
  declarations: [
    TeamscardComponent
  ],
  imports: [
    CommonModule,
    TeamsDetailRoutingModule
  ]
})
export class TeamsDetailModule { }
