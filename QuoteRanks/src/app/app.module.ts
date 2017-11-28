import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteNewComponent } from './quotes/quote-new/quote-new.component';
import { QuoteListComponent } from './quotes/quote-list/quote-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteNewComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
