import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { NewsComponent } from './components/news/news.component';
import { PictureComponent } from './components/picture/picture.component';
import { TitleComponent } from './components/title/title.component';
import { GalleryTeamsComponent } from './components/gallery-teams/gallery-teams.component';



@NgModule({
  declarations: [
ListComponent,
NewsComponent,
PictureComponent,
TitleComponent,
GalleryTeamsComponent,



  ],
  imports: [
    CommonModule
  ],

exports: [ListComponent, NewsComponent, PictureComponent, TitleComponent,GalleryTeamsComponent]

})
export class SharedModule { }
