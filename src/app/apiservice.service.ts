import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getBostadData() {
    return this.http.get(`https://api.booli.se/listings?q=nacka&limit=3&offset=0&callerId=[callerId]&time=1323793365&unique=3116053465361547264&hash=a053d19fcced8e180df1a40b3fc95b6560eee1af`);
  }

}
