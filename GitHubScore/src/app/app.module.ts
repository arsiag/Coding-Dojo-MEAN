import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppComponent } from './app.component';
import { GetScoreComponent } from './get-score/get-score.component';
import { ShowScoreComponent } from './show-score/show-score.component';
import { GithubService } from './github.service'; // <-- Imported


@NgModule({
  declarations: [
    AppComponent,
    GetScoreComponent,
    ShowScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
