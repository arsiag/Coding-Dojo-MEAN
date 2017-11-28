import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppointmentService } from './appointment.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListAppointmentComponent,
    NewAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
