import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-control',
  templateUrl: './doctor-control.component.html',
  styleUrls: ['./doctor-control.component.css']
})
export class DoctorControlComponent implements OnInit {

  x: string = "";
  
  location: string  = "";

  constructor() { }

  ngOnInit(): void {
  }

}
