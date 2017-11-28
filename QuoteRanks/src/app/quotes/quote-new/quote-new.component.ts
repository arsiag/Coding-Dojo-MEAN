import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css'],
})
export class QuoteNewComponent implements OnInit {
  @Output() addQuote = new EventEmitter();
  quote: Quote = new Quote();
  constructor() { }

  ngOnInit() { }

  onSubmit() {
    this.addQuote.emit(this.quote);
    this.quote = new Quote();
  }

}
