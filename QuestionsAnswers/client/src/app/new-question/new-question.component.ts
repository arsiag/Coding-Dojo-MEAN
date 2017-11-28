import { Component, OnInit } from '@angular/core';
import { QaService } from '../qa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  question = {question: '', description: '' };
  constructor(private _qaService: QaService, private _router: Router) { 
    if (this._qaService.name === '') {
      console.log('Not logged in!');
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

  OnSubmit() {
    this._qaService.createQuestion(this.question, (res) => {
      this._router.navigate(['/home']);
    });
  }

  Cancel() {
    this._router.navigate(['/home']);
  }

}
