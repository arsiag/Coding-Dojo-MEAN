import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class QaService {

  name: String = '';
  constructor(private _http: Http) { }

  login(name, callback) {
    this.name = name;
    console.log('login success: ', this.name);
    callback(this.name);
  }

  logout() {
    this.name = '';
  }

  getQuestions(callback) {
    this._http.get('/questions').subscribe(
      (res) => {
        console.log('SUCCESS in getQuestions: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in getQuestions: ', err);
        // callback(err);
      }
    );
  }
  search(term, callback) {
    this._http.get('/questions/search/' + term).subscribe(
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

  createQuestion(question, callback) {
    this._http.post('/questions', question).subscribe(
      (res) => {
        console.log('SUCCESS in createQuestion: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in createQuestion: ', err);
        // callback(err);
      }
    );
  }

  createAnswer(id, answer, callback) {
    answer.username = this.name;
    this._http.post('/questions/' + id + '/answers', answer).subscribe(
      (res) => {
        console.log('SUCCESS in createAnswer: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in createAnswer: ', err);
        // callback(err);
      }
    );
  }

  getQuestionWithID(id, callback) {
    this._http.get('/questions/' + id + '/answers').subscribe(
      (res) => {
        console.log('SUCCESS in getQuestionWithID: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in getQuestionWithID: ', err);
        // console.log(err);
      }
    );
  }

  updateLike(id, callback) {
    this._http.post('/answers/' + id + '/like', {like: 1} ).subscribe(
      (res) => {
        console.log('SUCCESS in updateLike: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in updateLike: ', err);
      }
    );
  }
}
