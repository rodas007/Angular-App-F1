import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {
  public titleTeams = "F1 Teams 2022";
  constructor() { }

  ngOnInit(): void {
  }

}
