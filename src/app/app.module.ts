import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorFinderComponent } from './components/doctor-finder/doctor-finder.component';
import { AppointmentSystemComponent } from './components/appointment-system/appointment-system.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorControlComponent } from './components/doctor-control/doctor-control.component';
import { DoctorService } from './services/doctor.service';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SpecialtySelectPipe } from './pipes/specialty-select.pipe';
import { InsuranceSelectPipe } from './pipes/insurance-select.pipe';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorFinderComponent,
    AppointmentSystemComponent,
    DoctorListComponent,
    DoctorControlComponent,
    AppointmentListComponent,
    SignUpComponent,
    LogInComponent,
    SpecialtySelectPipe,
    InsuranceSelectPipe,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
