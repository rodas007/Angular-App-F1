import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/core/services/database.service';

@Component({
  selector: 'app-drivers-detail',
  templateUrl: './drivers-detail.component.html',
  styleUrls: ['./drivers-detail.component.scss']
})
export class DriversDetailComponent implements OnInit {
drivers: any;

  constructor(private route: ActivatedRoute,
    public databaseService: DatabaseService) { }

  ngOnInit(): void {

this.route.paramMap.subscribe((params) => {

const idDriver = params.get ('idDrivers');
console.log(idDriver);
this.databaseService.getIdDrivers(idDriver).subscribe((idDriverData) =>{
  
  this.drivers = idDriverData;
  
});

});





  }

}
