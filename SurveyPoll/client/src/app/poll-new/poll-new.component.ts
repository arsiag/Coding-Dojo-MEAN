import { Component, OnInit } from '@angular/core';
import { BeltService } from '../belt.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-poll-new',
  templateUrl: './poll-new.component.html',
  styleUrls: ['./poll-new.component.css']
})
export class PollNewComponent implements OnInit {

  name = '';
  poll = {author: '', question: '', options: []};
  constructor(private _myService: BeltService, private _router: Router) {
    if (this._myService.name === '') {
      console.log('Not logged in!');
      this._router.navigate(['/']);
    } else {
      this.name = this._myService.name;
    }
   }

  ngOnInit() {
  }

  OnSubmit() {
    this.poll.author = this.name;
    for (let i = 0; i < this.poll.options.length; i++) {
      this.poll.options[i] = {option: this.poll.options[i], vote: 0};
    }
    // console.log('Inside submit, this.poll: ', this.poll);
    this._myService.createPoll(this.poll, (res) => {
      this._router.navigate(['/dashboard']);
    });
  }

}
