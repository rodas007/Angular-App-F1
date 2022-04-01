import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {InputTextModule} from 'primeng/inputtext';




@NgModule({
  declarations: [
    HomePageComponent,
    
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    InputTextModule
  ],
    exports: [HomePageComponent]
  
})
export class HomePageModule { }
