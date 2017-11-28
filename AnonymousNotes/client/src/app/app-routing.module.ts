import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: '', component: NotesComponent , pathMatch: 'full' },
  { path: 'notes', component: NotesComponent , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
