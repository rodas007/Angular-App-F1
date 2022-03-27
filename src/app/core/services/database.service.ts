import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})




export class DatabaseService {

  constructor(private http: HttpClient) {}

  getDrivers() {
    
    return this.http
      .get('http://localhost:3000/drivers')
   }

   getTeams() {
    
    return this.http
      .get('http://localhost:3000/teams')


      
  }

  getIdDrivers = (idDriver: any) => {
    return this.http.get(
      `http://localhost:3000/drivers/${idDriver}`
    );
  };

  getIdTeams = (idTeam: any) => {
    return this.http.get(
      `http://localhost:3000/teams/${idTeam}`
    );
  };

  postDrivers(newDriver:any) {
    
    return this.http
      .post('http://localhost:3000/drivers',newDriver)

   
}
}