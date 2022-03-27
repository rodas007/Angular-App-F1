import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsDetailComponent } from './teams-detail.component';

const routes: Routes = [
{
  path: '',
  component:TeamsDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsDetailRoutingModule { }
