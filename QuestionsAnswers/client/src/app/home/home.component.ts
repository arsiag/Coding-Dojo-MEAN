import { Component, OnInit } from '@angular/core';
import { QaService } from '../qa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: String = '';
  questions: [any];
  search: String = '';
  constructor(private _qaService: QaService, private _router: Router) {
    if (this._qaService.name === '') {
      console.log('Not logged in!');
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.name = this._qaService.name;
    this._qaService.getQuestions((res) => {
      this.questions = res;
    });
  }

  Search() {
    if (this.search) {
      this._qaService.search(this.search, res => {
        this.questions = res;
      });
    } else {
      this._qaService.getQuestions((res) => {
        this.questions = res;
      });
    }
  }

}
