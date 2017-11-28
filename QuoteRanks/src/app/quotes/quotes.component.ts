import { Component, OnInit } from '@angular/core';
import { Quote } from './quote-new/quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  myquotes: Quote[] = [];
  constructor() { }

  ngOnInit() {
  }

  create(quote) {
    this.myquotes.push(quote);
    this.sortQuotes();
  }
  sortQuotes() {
    this.myquotes.sort( function(a, b) { return b.rating - a.rating; } ) ;
  }

  voteUp(quoteIndex) {
    this.myquotes[quoteIndex].rating++;
    this.sortQuotes();
  }

  voteDown(quoteIndex) {
    this.myquotes[quoteIndex].rating--;
    this.sortQuotes();
  }

  deleteQuote(quoteIndex) {
    this.myquotes.splice(quoteIndex, 1);
  }

}
