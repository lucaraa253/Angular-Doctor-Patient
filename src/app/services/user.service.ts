import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private user = new Patient();
  
  getUser(): Patient {
    return this.user;
  }

  setUser(user : Patient): void {
    this.user = user;
  }

  resetUser(): void {
    this.user = new Patient();
  }
  
}
