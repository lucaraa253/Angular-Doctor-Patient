import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public user = new Patient();;

}
