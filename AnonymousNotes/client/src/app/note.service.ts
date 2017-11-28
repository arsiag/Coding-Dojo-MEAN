import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class NoteService {

  constructor(private _http: Http) { }

  getNotes(callback) {
    this._http.get('/notes').subscribe(
      (res) => {
        console.log('Load: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in getNotes: ', err);
        // callback(err);
      }
    );
  }

  createNote(data, callback) {
    // console.log('Inside createNote: ', data);
    this._http.post('/notes', {note: data} ).subscribe(
      (res) => {
        console.log('Create: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in createNote: ', err);
        // callback(err);
      }
    );
  }

}
