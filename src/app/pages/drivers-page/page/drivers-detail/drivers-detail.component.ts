import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/core/services/database.service';

@Component({
  selector: 'app-drivers-detail',
  templateUrl: './drivers-detail.component.html',
  styleUrls: ['./drivers-detail.component.scss']
})
export class DriversDetailComponent implements OnInit {
drivers: any;
delDrivers :any;

  constructor(private route: ActivatedRoute,
    public databaseService: DatabaseService,private router: Router) { }

  ngOnInit(): void {

this.route.paramMap.subscribe((params) => {

const idDriver = params.get ('idDrivers');
//console.log(idDriver);
this.databaseService.getIdDrivers(idDriver).subscribe((idDriverData) =>{
  
  this.drivers = idDriverData;
console.log("aquii pilotos", this.drivers)


});

});

  }


  onDelete(_id:any):void {
   
    this.databaseService.delIdDrivers(_id).subscribe(( )=>
    { this.router.navigate(['/drivers'])});
     
      
    console.log(this.drivers._id)

  }

  onUpdate(item:any) {
this.databaseService.updateInfo(item)


  }
}

  