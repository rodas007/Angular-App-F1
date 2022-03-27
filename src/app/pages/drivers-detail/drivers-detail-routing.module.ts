import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversDetailComponent } from './drivers-detail.component';

const routes: Routes = [
  {
 path: '',
component: DriversDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversDetailRoutingModule { }
