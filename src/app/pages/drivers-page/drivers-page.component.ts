import { Component, OnInit,Input } from '@angular/core';
import { DatabaseService } from 'src/app/core/services/database.service';


@Component({
  selector: 'app-drivers-page',
  templateUrl: './drivers-page.component.html',
  styleUrls: ['./drivers-page.component.scss']
})
export class DriversPageComponent implements OnInit {

  public titleDrivers = "F1 Drivers 2022";
  @Input() driver!: any;
 drivers: any;
 searchDriver!: any;
 

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.databaseService.getDrivers().subscribe((res: any) => {
      
      this.drivers = res.data.drivers;
      ;
    });
  }




}
