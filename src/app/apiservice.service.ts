import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getBostadData() {
    return this.http.get(`https://api.booli.se/listings?q=${stad}`);
  }

}
