import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  mockdata = [
  {
    'name': 'Dr. Kildare',
    'location': 'Ventura',
    'specialty': 'General Practitioner',
    'insurance': 'Blue Cross'
  },
  {
    'name': 'Dr. Caligari',
    'location': 'Port Hueneme',
    'specialty': 'Oncology',
    'insurance': 'Blue Shield'
  },
  {
    'name': 'Dr. Frankenstein',
    'location': 'Oxnard',
    'specialty': 'Pediatrics',
    'insurance': 'Blue Cross'
  },
  {
    'name': 'Dr. Pepper',
    'location': 'Ventura',
    'specialty': 'Pediatrics',
    'insurance': 'Cigna'
  }];

  constructor() { }

  getDoctors() {
    return this.mockdata;
  }
  
}
