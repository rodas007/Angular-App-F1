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
      .get('https://backend-f1-api.vercel.app/drivers')
   }

   getTeams() {
    
    return this.http
      .get('https://backend-f1-api.vercel.app/escuderias')

  }

  getIdDrivers = (idDriver: any) => {
    return this.http.get(
      `https://backend-f1-api.vercel.app/drivers/${idDriver}`
    );
  };

  delIdDrivers(_id: any){
    return this.http.delete(
      "https://backend-f1-api.vercel.app/drivers/" + _id);

     
  };


  getIdTeams = (idTeam: any) => {
    return this.http.get(
      `https://backend-f1-api.vercel.app/escuderias/${idTeam}`
    );
  };




  postDrivers(newDriver:any) {
    
    return this.http
      .post('https://backend-f1-api.vercel.app/drivers',newDriver)
  }



updateInfo(item:any){
this.defaultDriver= item;
//console.log(this.defaultDriver);
}

putDriver(editDriver:any, driverID:any){ 
  return this.http.put("https://backend-f1-api.vercel.app/drivers/" + driverID, editDriver)


}

}