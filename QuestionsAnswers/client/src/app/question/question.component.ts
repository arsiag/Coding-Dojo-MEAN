import { Component, OnInit } from '@angular/core';
import { QaService } from '../qa.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question = {_id: 0};
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

  Like(id) {
    this._qaService.updateLike(id, (res) => {
      this.question = res;
    });
  }

}
