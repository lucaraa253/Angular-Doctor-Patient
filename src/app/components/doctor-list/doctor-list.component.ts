import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { SpecialtySelectPipe } from '../../pipes/specialty-select.pipe';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[] = [];

  @Input() specialty: string = "";

  @Input() insurance: string = "";

  public errorMessage !: string;

  constructor(public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.refreshDoctors();
  }

  refreshDoctors() {
    this.doctorService.getDoctors().subscribe((data: any) => {
      this.doctors = data;
    }, err => this.errorMessage = err)
  }

}
