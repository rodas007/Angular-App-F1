import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionPageComponent } from './gestion-page.component';




const routes: Routes = [
  {path: '', component: GestionPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionPageRoutingModule { }
