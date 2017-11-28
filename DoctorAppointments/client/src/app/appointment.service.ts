import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppointmentService {

  name: String = '';
  constructor(private _http: Http) { }

  login(name, callback) {
    this.name = name;
    console.log('login success: ', this.name);
    callback(this.name);
  }

  logout() {
    console.log('logout success: ', this.name);
    this.name = '';
  }

  getAppointments(callback) {
    this._http.get('/appointments').subscribe(
      (res) => {
        console.log('SUCCESS in getAppointments: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in getAppointments: ', err);
        // callback(err);
      }
    );
  }

  search(patient, callback) {
    this._http.get('/appointments/search/' + patient).subscribe(
      (res) => {
        console.log('SUCCESS in search: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in search: ', err);
        // callback(err);
      }
    );
  }

  createAppointment(data, callback) {
    this._http.post('/appointments', data).subscribe(
      (res) => {
        console.log('SUCCESS in createAppointment: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in createAppointment: ', err);
        // callback(err);
      }
    );
  }

  deleteAppointment(id, callback) {
    this._http.delete('/appointments/destroy/' + id).subscribe(
      (res) => {
        console.log('SUCCESS in deleteAppointment: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in deleteAppointment: ', err);
      }
    );
  }

}
