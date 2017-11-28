import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { NewQuestionComponent } from './new-question/new-question.component';

const routes: Routes = [
  { path: '', component: LoginComponent , pathMatch: 'full' },
  { path: 'home', component: HomeComponent , pathMatch: 'full' },
  { path: 'new_question', component: NewQuestionComponent , pathMatch: 'full' },
  { path: 'question/:id', component: QuestionComponent , pathMatch: 'full' },
  { path: 'question/:id/new_answer', component: AnswerComponent , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
