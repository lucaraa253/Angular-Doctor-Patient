import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public loginForm !: FormGroup;
  public input: any;

  constructor(public formBuilder: FormBuilder, public http : HttpClient, public router : Router) { }

  ngOnInit(): void {
    this.loginForm =  this.formBuilder.group({
      username:[''],
      password:['']
    })

  }

  login() {
    if (this.input.username && this.input.password) {
      let headers = new HttpHeaders({ 'content-type' : 'application/json'});
      this.http.post('http://localhost:4200/patient', JSON.stringify(this.input), { headers : headers})
      .subscribe(result =>
          this.router.navigate(['/doctor-control'])
        )
    }

  }
}
