import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http:HttpClient) { }

  getSwapi(film){
    return this.http.get('https://swapi.co/api/films/?search=' +film);
    }
}

