import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorFinderComponent } from './components/doctor-finder/doctor-finder.component';
import { AppointmentSystemComponent } from './components/appointment-system/appointment-system.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'DoctorFinder',
    pathMatch: 'full'
  },
  {
    path: 'DoctorFinder',
    component: DoctorFinderComponent
  },
  {
    path: 'DoctorFinder/AppointmentSystem',
    component: AppointmentSystemComponent
  },
  {
    path: 'AppointmentList',
    component: AppointmentListComponent
  },
  {
    path: 'SignUp',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
