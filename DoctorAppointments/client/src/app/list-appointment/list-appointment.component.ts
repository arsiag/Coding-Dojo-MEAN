import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit {

  name: String = '';
  appoinments: [any];
  search: String = '';
  currentDate: String = '';
  constructor(private _myService: AppointmentService, private _router: Router ) {
    // console.log('Inside ListAppointment constructor: ', this._myService.name);
    if (this._myService.name === '') {
      console.log('Not logged in!');
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    let day = dd.toString();
    let mnt = mm.toString();
    let year = yyyy.toString();
    if ( dd < 10 ) { day = '0' + day; }
    if ( mm < 10 ) { mnt = '0' + mnt; }
    this.currentDate = year + '-' + mnt + '-' + day;
    // console.log('Inside ListAppointment init: ', this.currentDate);
    this.name = this._myService.name;
    this._myService.getAppointments((res) => {
      this.appoinments = res;
    });
  }

  Search() {
    if (this.search) {
      this._myService.search(this.search, (res) => {
        this.appoinments = res;
      });
    } else {
      this._myService.getAppointments((res) => {
        this.appoinments = res;
      });
    }
  }

  Cancel(id) {
    this._myService.deleteAppointment(id, (res) => {
      this._router.navigate(['/home']);
      // this._router.navigate(['/list-appointments']);
    });
  }

}
