import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, } from '@angular/forms'
import { Router } from '@angular/router';

import { Patient } from '../../models/patient';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm !: FormGroup;

  constructor(public formBuilder : FormBuilder, public http : HttpClient, public router : Router) { }

  ngOnInit(): void {
    // adding values to formBuilder group.
    this.signUpForm = this.formBuilder.group({
      username:[''],
      password:[''],
      confirmPassword:[''],
      insurance:['']
    })

  }

  signUp() {
    console.log(this.signUpForm.value);
    
    if (this.signUpForm.value.password !== this.signUpForm.value.confirmPassword)
      alert("Passwords don't match");
    else {
      let patient = new Patient();
      
      patient.username = this.signUpForm.value.username;
      patient.password = this.signUpForm.value.password;
      patient.insuranceProvider = this.signUpForm.value.insurance;

      this.http.post("http://localhost:5050/patient", patient, { responseType : 'text' })
        .subscribe(res=> {
          alert("Sign up successful.");
          this.signUpForm.reset();
          this.router.navigate(['LogIn']);
        },err=> {
          alert(err.message)
        });
    }
  }

}
