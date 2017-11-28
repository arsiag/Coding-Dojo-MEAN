import { Component, OnInit } from '@angular/core';
import { BeltService } from '../belt.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-poll-show',
  templateUrl: './poll-show.component.html',
  styleUrls: ['./poll-show.component.css']
})
export class PollShowComponent implements OnInit {

  name = '';
  poll = {author: '', question: '', options: []};
  constructor(private _myService: BeltService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      // console.log(params.get('id'));
      this._myService.getPollByID(params.get('id'), (res) => {
        this.poll = res;
      });
    });
  }

  Vote(id, idx) {
    this.poll.options[idx].vote += 1;
    this._myService.updateVote(id, this.poll.options, (res) => {
      this._myService.getPollByID(id, (poll) => {
        this.poll = poll;
      });
      // this._router.navigate(['/dashboard']);
    });
  }
}
