import { Component, OnInit } from '@angular/core';
import { BeltService } from '../belt.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = '';
  polls: [any];
  search: String = '';
  constructor(private _myService: BeltService, private _router: Router ) {
    if (this._myService.name === '') {
      console.log('Not logged in!');
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.name = this._myService.name;
    this._myService.getPolls((res) => {
      this.polls = res;
    });
  }

  Search() {
    if (this.search) {
      this._myService.search(this.search, (res) => {
        this.polls = res;
      });
    } else {
      this._myService.getPolls((res) => {
        this.polls = res;
      });
    }
  }

  Delete(id) {
    this._myService.deletePoll(id, (res) => {
      this._myService.getPolls((polls) => {
        this.polls = polls;
      });
      // this._router.navigate(['/home']);
    });
  }

}
