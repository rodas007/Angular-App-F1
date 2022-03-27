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

  constructor(
    private formBuilder: FormBuilder,
    private databaseService: DatabaseService 
  ) {
    this.gestionForm = this.formBuilder.group({
      givenName: ['', [Validators.required]],
      familyName: ['', [Validators.required]],
      permanentNumber: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      image: [''],
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
      console.log(this.newDriver);
       this.databaseService.postDrivers(this.newDriver).subscribe(); 
      this.submitted = false;
    }
  }
}

    
