
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigatorComponent } from './navigator/navigator.component';


@NgModule({
  declarations: [
NavigatorComponent


  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],

  exports: [
    NavigatorComponent
  ]


})
export class CoreModule { }
