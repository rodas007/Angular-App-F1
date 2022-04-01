import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-gallery-teams',
  templateUrl: './gallery-teams.component.html',
  styleUrls: ['./gallery-teams.component.scss']
})
export class GalleryTeamsComponent implements OnInit {
  @Input() teams!: any;
  filterGalery : any  = "";



  constructor() { }

  ngOnInit(): void {
  }

}
