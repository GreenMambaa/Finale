import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bostadData: object;
  public angivenBostad = 'Stad';

  constructor(private route: ActivatedRoute, private apiService: ApiserviceService) { }

  ngOnInit() {



  }

}
