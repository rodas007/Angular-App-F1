
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigatorComponent } from './navigator/navigator.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
NavigatorComponent,
FooterComponent



  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],

  exports: [
    NavigatorComponent,
    FooterComponent
  ]


})
export class CoreModule { }
