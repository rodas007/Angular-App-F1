import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/core/services/database.service';



@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss']
})
export class GestionPageComponent implements OnInit {

  gestionForm!: any;
  public submitted: boolean = false;
  public newDriver: any;
  public driverId: any = this.databaseService.defaultDriver._id;

  constructor(
    private formBuilder: FormBuilder,
    private databaseService: DatabaseService 
  ) {
    this.gestionForm = this.formBuilder.group({
      givenName: [this.databaseService.defaultDriver.givenName, [Validators.required]],
      familyName: [this.databaseService.defaultDriver.familyName, [Validators.required]],
      permanentNumber: [this.databaseService.defaultDriver.permanentNumber, [Validators.required]],
      nationality: [this.databaseService.defaultDriver.nationality, [Validators.required]],
      image: [this.databaseService.defaultDriver.image,], 
    });
  }
  

  ngOnInit(): void {
    this.gestionForm.valueChanges.subscribe((changes: any) => { this.newDriver = changes; })
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.gestionForm.valid) {
     
      this.newDriver = {
        givenName: this.gestionForm.get('givenName').value,
        familyName: this.gestionForm.get('familyName').value,
        permanentNumber: this.gestionForm.get('permanentNumber').value,
        nationality: this.gestionForm.get('nationality').value,
        image: this.gestionForm.get('image').value,
      };
      if(this.databaseService.defaultDriver._id === undefined) {
      //console.log(this.newDriver);
       this.databaseService.postDrivers(this.newDriver).subscribe(); 
      this.submitted = false;
      this.gestionForm.reset();
      alert("Driver created successfully");
      
    } else {
this.databaseService.putDriver(this.newDriver, this.driverId).subscribe();
alert("Actualizado");
this.gestionForm.reset();


    }
  }
  }
}

    
