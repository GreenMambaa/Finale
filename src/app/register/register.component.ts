import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginClick(): void {
    this.router.navigate(['/login']);
  }

  registerClick(): void {
    this.router.navigate(['/register']);
  }

}
