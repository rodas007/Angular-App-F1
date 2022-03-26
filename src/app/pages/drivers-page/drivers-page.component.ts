import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/core/services/database.service';


@Component({
  selector: 'app-drivers-page',
  templateUrl: './drivers-page.component.html',
  styleUrls: ['./drivers-page.component.scss']
})
export class DriversPageComponent implements OnInit {

  public titleDrivers = "F1 Drivers 2022";
 drivers: any

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.databaseService.getDrivers().subscribe((res: any) => {
      console.log(res);
      this.drivers = res;
    });
  }

}
