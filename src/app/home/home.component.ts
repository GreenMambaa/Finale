import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient } from '@angular/common/http';
import * as sha1 from 'sha1';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // API call variabler
  callerID = 'chido91';
  timeStamp = new Date().getTime();
  privateKey = 'ziAPZFmNF8or3kVQZEH38Q7AqqYP3fmYBKTGsoEg';
  unique = (Math.random() * 1e19).toString(16);
  sha: any;
  stad = 'helsingborg';

  bostadData: object;
  angivenBostad: string;

  getBostadData() {
// tslint:disable-next-line: max-line-length
    return this.http.get(`https://api.booli.se/listings?q=${this.stad}&limit=3&offset=0&callerId=${this.callerID}&time=${this.timeStamp}&unique=${this.unique}&hash=${this.sha}`);
  }

  constructor(private route: ActivatedRoute,
              private apiService: ApiserviceService,
              private http: HttpClient) {
              this.sha = sha1(this.callerID + this.timeStamp + this.privateKey + this.unique);
              console.log(this.sha);
              }

  ngOnInit() {

    this.getBostadData().subscribe(data => {
      this.bostadData = data;
      console.log(this.bostadData);
    });

    console.log(this.timeStamp);
    console.log(this.unique);

  }

}
