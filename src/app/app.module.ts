import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorFinderComponent } from './components/doctor-finder/doctor-finder.component';
import { AppointmentSystemComponent } from './components/appointment-system/appointment-system.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorControlComponent } from './components/doctor-control/doctor-control.component';
import { DoctorService } from './services/doctor.service';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorFinderComponent,
    AppointmentSystemComponent,
    DoctorListComponent,
    DoctorControlComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
