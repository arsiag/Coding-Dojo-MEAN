import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BeltService {

  name = '';
  constructor(private _http: Http) { }

  login(name, callback) {
    this.name = name;
    console.log('LOGIN success: ', this.name);
    callback(this.name);
  }

  logout() {
    console.log('LOGOUT success: ', this.name);
    this.name = '';
  }

  getPolls(callback) {
    this._http.get('/polls').subscribe(
      (res) => {
        console.log('SUCCESS in getPolls: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in getPolls: ', err);
        // callback(err);
      }
    );
  }

  search(question, callback) {
    this._http.get('/polls/search/' + question).subscribe(
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

  createPoll(data, callback) {
    this._http.post('/polls', data).subscribe(
      (res) => {
        console.log('SUCCESS in createPoll: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in createPoll: ', err);
        // callback(err);
      }
    );
  }

  getPollByID(id, callback) {
    this._http.get('/polls/' + id ).subscribe(
      (res) => {
        console.log('SUCCESS in getPollByID: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in getPollByID: ', err);
        // console.log(err);
      }
    );
  }

  deletePoll(id, callback) {
    this._http.delete('/polls/destroy/' + id).subscribe(
      (res) => {
        console.log('SUCCESS in deletePoll: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in deletePoll: ', err);
      }
    );
  }

  updateVote(id, options, callback) {
    this._http.post('/polls/' + id + '/vote', options ).subscribe(
      (res) => {
        console.log('SUCCESS in updateVote: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in updateVote: ', err);
      }
    );
  }
}
