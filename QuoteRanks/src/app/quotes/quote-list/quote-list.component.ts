import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote-new/quote';
@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
})
export class QuoteListComponent implements OnInit {
  @Input() quotes: Quote[];
  @Output() voteup = new EventEmitter();
  @Output() votedown = new EventEmitter();
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  voteUp(indx) {
    this.voteup.emit(indx);
   }
  voteDown(indx) {
    this.votedown.emit(indx);
   }
  deleteQuote(indx) {
    this.delete.emit(indx);
   }
}
