import { HttpClient } from '@angular/common/http';
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
  const user: any;
  const a: any;

  constructor(public formBuilder: FormBuilder, public http : HttpClient, public router : Router) { }

  ngOnInit(): void {
    this.loginForm =  this.formBuilder.group({
      username:[''],
      password:['']
    })

  }

  login() {
    this.http.get<any>("http://localhost:4200/")
    .subscribe(res=> {
      const user = res.find(a : any)=> {
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      }
    });
    if(user) {
      alert("Login successful.");
       this.loginForm.reset();
    }
  }
}
