import { Component, OnInit } from '@angular/core';
import { QaService } from '../qa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: String = '';
  constructor(private _qaService: QaService, private _router: Router) { }

  ngOnInit() {
    this._qaService.logout();
  }

  OnSubmit() {
    this._qaService.login(this.name, (res) => {
      this._router.navigate(['/home']);
    });
  }

}
