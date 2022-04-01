import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from '../../services/patient.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public loginForm !: FormGroup;
  public patient = new Patient()

  constructor(public formBuilder: FormBuilder,
              public router : Router,
              public patientService : PatientService,
              public user : UserService) { }

  ngOnInit(): void {
    this.loginForm =  this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  private errorMessage !: string;
  
  login() {
    if (this.loginForm.value.username === '' || this.loginForm.value.password ==- '')
      alert('enter username and password');
    else {
      this.patientService.getPatient(this.loginForm.value.username).subscribe(
        (data: Patient) => {
           this.patient = data;
           if (this.patient.password === this.loginForm.value.password) {
             this.user.setUser(this.patient);
             this.router.navigate(['DoctorFinder']);
           }
           else
             alert('incorrect username or password');
        },
        err => alert('incorrect username or password')
        );
    }
  }
}
