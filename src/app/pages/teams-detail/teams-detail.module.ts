import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsDetailRoutingModule } from './teams-detail-routing.module';
import { TeamsDetailComponent } from './teams-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TeamsDetailComponent
  ],
  imports: [
    CommonModule,
    TeamsDetailRoutingModule,
    SharedModule,
  ],
  exports: [TeamsDetailComponent]
})
export class TeamsDetailModule { }
