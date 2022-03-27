import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { NewsComponent } from './components/news/news.component';
import { PictureComponent } from './components/picture/picture.component';
import { TitleComponent } from './components/title/title.component';
import { GalleryTeamsComponent } from './components/gallery-teams/gallery-teams.component';
import { RouterModule } from '@angular/router';
import { GestionDetailComponent } from './components/gestion-detail/gestion-detail.component';






@NgModule({
  declarations: [
ListComponent,
NewsComponent,
PictureComponent,
TitleComponent,
GalleryTeamsComponent,
GestionDetailComponent,





  ],
  imports: [
    CommonModule,
   RouterModule
   
  ],

exports: [ListComponent, NewsComponent, PictureComponent, TitleComponent,GalleryTeamsComponent,GestionDetailComponent]

})
export class SharedModule { }
