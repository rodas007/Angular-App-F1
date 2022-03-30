import { Component, OnInit } from '@angular/core';



import { DatabaseService } from 'src/app/core/services/database.service';
@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {
  public titleTeams = "F1 Teams 2022";
teams:any;

constructor(private databaseService: DatabaseService) { }

ngOnInit(): void {
  this.databaseService.getTeams().subscribe((res: any) => {
    console.log(res);
    this.teams = res.data.escuderias;
  });

}

}