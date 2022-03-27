import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionPageRoutingModule } from './gestion-page-routing.module';
import { GestionPageComponent } from './gestion-page.component';
import { HomePageModule } from '../home-page/home-page.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GestionPageComponent
  ],
  imports: [
    CommonModule,
    GestionPageRoutingModule,
    HomePageModule,
    ReactiveFormsModule
  ]

  
})
export class GestionPageModule { }
