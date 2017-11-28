import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  appointment = {patient: '', date: '', time: '', complain: '' };
  currentDate: String = '';
  constructor(private _myService: AppointmentService, private _router: Router) {
    // console.log('Inside NewAppointmentComponent constructor: ', this._myService.name);
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
    // console.log('Inside NewAppointmentComponent init: ', this.currentDate);
  }

  OnSubmit() {
    this._myService.createAppointment(this.appointment, (res) => {
      this._router.navigate(['/list-appointments']);
    });
  }

}
