import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.refreshDoctors();
  }

  refreshDoctors() {
    this.doctors = this.doctorService.getDoctors();
  }

}