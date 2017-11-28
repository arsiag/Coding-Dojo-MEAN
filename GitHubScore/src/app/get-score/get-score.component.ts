import { Component, OnInit } from '@angular/core';
import { GithubService } from './../github.service'; // <-- Imported
@Component({
  selector: 'app-get-score',
  templateUrl: './get-score.component.html',
  styleUrls: ['./get-score.component.css'],
})
export class GetScoreComponent implements OnInit {
  username: string = null;
  score: number = 0;
  userExists: boolean = null;
  githubname: string = '';

  constructor(private _githubService: GithubService) {
    // this.score = this._githubService.retrieveGithubScore();
  }

  ngOnInit() {
  }

  // METHOD 1 - SUBSCRIBE IN THE SERVICE
  // in this method, we must pass the data AND a callback
  // into the service. the callback will allow us to wait
  // for the HTTP request to come back with our data

  onSubmit1() {
    this._githubService.retriveGithubInfo1(this.username, (response) => {
      if (!response) {
        this.userExists = false;
      } else {
        this.userExists = true;
        // console.log('public post ' + response.public_repos);
        // console.log('followers ' + response.followers);
        this.score = response.public_repos + response.followers;
        this.githubname = response.name;
        // console.log(this.score);
      }
    });
    this.username = undefined;
  }


  // METHOD 2 - SUBSCRIBE IN THE COMPONENT
  // in this method, service is RETURNING an object.
  // from that object, we chain on .subscribe and write our two
  // result callbacks.

  onSubmit2() {
    this._githubService.retriveGithubInfo2(this.username)
      .subscribe(
        (response) => {   // this first callback has the response which is the whole object
          this.userExists = true;
          // console.log(response.json());
          // console.log('public post ' + response.json().public_repos);
          // console.log('followers ' + response.json().followers);
          this.score = response.json().public_repos + response.json().followers;
          this.githubname = response.json().name;
          // console.log(this.score);
         },
        (error) => {    // this second callback is for when the server does not properly respond
          console.log(error);
          this.userExists = false;
        }
     );
    this.username = undefined;
  }

}
