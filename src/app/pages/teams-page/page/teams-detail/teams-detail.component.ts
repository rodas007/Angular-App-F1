import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/core/services/database.service';
@Component({
  selector: 'app-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.scss']
})
export class TeamsDetailComponent implements OnInit {
 teams: any;
 constructor(private route: ActivatedRoute,
  public databaseService: DatabaseService) { }

ngOnInit(): void {

this.route.paramMap.subscribe((params) => {

const idTeam = params.get ('idTeams');

this.databaseService.getIdTeams(idTeam).subscribe((idTeamData) =>{

this.teams = idTeamData;
//console.log(this.teams);
});

});





}

}
