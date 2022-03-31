import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-finder',
  templateUrl: './doctor-finder.component.html',
  styleUrls: ['./doctor-finder.component.css']
})
export class DoctorFinderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  specialtyMessage: string = "";
  insuranceMessage: string = "";

  receiveMessage($event : any) {
    if ($event[0] == 's')
      this.specialtyMessage = $event.substring(1);
    else if ($event[0] == 'i')
      this.insuranceMessage = $event.substring(1);
  }
 
}
