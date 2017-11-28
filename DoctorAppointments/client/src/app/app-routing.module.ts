import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';

const routes: Routes = [
  { path: '', component: LoginComponent , pathMatch: 'full' },
  { path: 'home', component: ListAppointmentComponent , pathMatch: 'full' },
  { path: 'list-appointments', component: ListAppointmentComponent, pathMatch: 'full' },
  { path: 'new-appointment', component: NewAppointmentComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
