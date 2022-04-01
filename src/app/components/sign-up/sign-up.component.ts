import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, } from '@angular/forms'
import { Router } from '@angular/router';

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
      insurance:['']
    })

  }

  signUp() {
    this.http.post<any>("http://localhost:4200/patient", this.signUpForm.value)
    .subscribe(res=> {
      alert("Sign up successful.");
      this.signUpForm.reset();
      this.router.navigate(['/log-in']);
    },err=> {
      alert("Uh-oh! Something went wrong.")
    })
  }

}
