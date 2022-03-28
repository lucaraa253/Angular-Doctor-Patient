import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorFinderComponent } from './components/doctor-finder/doctor-finder.component';
import { AppointmentSystemComponent } from './components/appointment-system/appointment-system.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
