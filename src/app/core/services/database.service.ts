import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})




export class DatabaseService {

  constructor(private http: HttpClient) {}

  getDrivers() {
    // return fetch("https://rickandmortyapi.com/api/character");
    return this.http
      .get('http://localhost:3000/drivers')

  }
}