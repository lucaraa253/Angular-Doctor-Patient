import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public loginForm !: FormGroup;
  public patient = new Patient()

  constructor(public formBuilder: FormBuilder, public http : HttpClient, public router : Router) { }

  ngOnInit(): void {
    this.loginForm =  this.formBuilder.group({
      username:[''],
      password:['']
    })

  }

  login() {
    if (this.patient) {
      let headers = new HttpHeaders({ 'content-type' : 'application/json'});
      this.http.post('http://localhost:4200/patient', JSON.stringify(this.patient), { headers : headers})
      .subscribe(result =>
          this.router.navigate(['/doctor-control'])
        )
    }

  }
}
