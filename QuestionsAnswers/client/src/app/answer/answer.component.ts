import { Component, OnInit } from '@angular/core';
import { QaService } from '../qa.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  question = {_id: 0};
  answer = {answer: '', details: '', username: '' };
  constructor(private _qaService: QaService, private _router: Router, private _route: ActivatedRoute) { 
    if (this._qaService.name === '') {
      console.log('Not logged in!');
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      // console.log(params);
      // console.log(params.get('id'));
      this._qaService.getQuestionWithID(params.get('id'), (res) => {
        this.question = res;
      });
    });
  }

  OnSubmit() {
    this._qaService.createAnswer(this.question._id, this.answer, (res) => {
      this._router.navigate(['/home']);
    });
  }

  Cancel() {
    this._router.navigate(['/home']);
  }

}
