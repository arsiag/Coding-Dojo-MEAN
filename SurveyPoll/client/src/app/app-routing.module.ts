import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PollNewComponent } from './poll-new/poll-new.component';
import { PollShowComponent } from './poll-show/poll-show.component';


const routes: Routes = [
  { path: '', component: LoginComponent , pathMatch: 'full' },
  { path: 'home', component: HomeComponent , pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent , pathMatch: 'full' },
  { path: 'create', component: PollNewComponent, pathMatch: 'full' },
  { path: 'poll/:id', component: PollShowComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
