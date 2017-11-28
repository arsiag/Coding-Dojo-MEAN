import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported
@Injectable()
export class GithubService {

  // score = 777;
  constructor(private _http: Http) { }

  // retrieveGithubScore() {
  //   return this.score;
  // }
  // METHOD 1 - SUBSCRIBE IN THE SERVICE
  // in this method, we pass in a callback, that callback is called and given the response
  // when subscribe hears the response. we must make sure to convert the res with .json()!

  retriveGithubInfo1(username, callback) {
    this._http.get(`https://api.github.com/users/${username}`)
      .subscribe(
        (response) => { callback(response.json()); },
        (error) => { console.log(error); callback(false); }
      );
  }

  // METHOD 2 - SUBSCRIBE IN THE COMPONENT
  // in this method, we return the http request object entirely, running .subscribe
  // on the component side. this lets us handle error messages uniquely for each component
  // using the service, and also removes the extra callback.

  retriveGithubInfo2(username) {
    return this._http.get(`https://api.github.com/users/${username}`);
  }

}
