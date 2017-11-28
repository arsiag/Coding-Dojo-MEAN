import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: String = '';
  constructor(private _myService: AppointmentService, private _router: Router) { }

  ngOnInit() {
    this._myService.logout();
  }

  OnSubmit() {
    this._myService.login(this.name, (res) => {
      this._router.navigate(['/list-appointments']);
    });
  }

}
