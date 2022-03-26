import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'drivers',
    loadChildren: () =>
      import('./pages/drivers-page/drivers-page.module').then((m) => m.DriversPageModule),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./pages/teams-page/teams-page.module').then((m) => m.TeamsPageModule),
      
  },
  {
    path: 'gestion',
    loadChildren: () =>
      import('./pages/gestion-page/gestion-page.module').then((m) => m.GestionPageModule),
  },
  {  path: '**', redirectTo: '' },
  

];
  
 
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
