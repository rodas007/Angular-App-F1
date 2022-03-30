import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})




export class DatabaseService {

  constructor(private http: HttpClient) {}


defaultDriver: any ={

  givenName:'',
  familyName:'',
  permanentNumber:'',
  nationality:'',
  image:'',


}



  getDrivers() {
    
    return this.http
      .get('http://localhost:5000/drivers')
   }

   getTeams() {
    
    return this.http
      .get('http://localhost:5000/escuderias')

  }

  getIdDrivers = (idDriver: any) => {
    return this.http.get(
      `http://localhost:5000/drivers/${idDriver}`
    );
  };

  delIdDrivers(_id: any){
    return this.http.delete(
      "http://localhost:5000/drivers/" + _id);

     
  };


  getIdTeams = (idTeam: any) => {
    return this.http.get(
      `http://localhost:5000/escuderias/${idTeam}`
    );
  };




  postDrivers(newDriver:any) {
    
    return this.http
      .post('http://localhost:5000/drivers',newDriver)
  }



updateInfo(item:any){
this.defaultDriver= item;
console.log(this.defaultDriver);
}

putDriver(editDriver:any, driverID:any){ 
  return this.http.put("http://localhost:5000/drivers/" + driverID, editDriver)


}

}