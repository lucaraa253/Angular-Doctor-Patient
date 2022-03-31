import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doctor-control',
  templateUrl: './doctor-control.component.html',
  styleUrls: ['./doctor-control.component.css']
})
export class DoctorControlComponent implements OnInit {

 @Output() messageEvent = new EventEmitter<string>();

  x: string = "";
  
  location: string  = "";

  constructor() { }

  ngOnInit(): void {
  }

  specialtyChange(event: any) {
    this.messageEvent.emit('s' + event.target.value);
  }

  insuranceChange(event: any) {
    this.messageEvent.emit('i' + event.target.value);
  }
}
