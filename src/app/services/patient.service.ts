import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'observe': 'response'
    })
  }

  constructor(private http: HttpClient) { }

  patientURL = 'http://localhost:5050/patient';

  getPatients() : Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientURL, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  getPatient(username:string) : Observable<Patient> {
    console.log(this.patientURL+`/username/${username}`);

    return this.http.get<Patient>(this.patientURL+`/username/${username}`, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `error ${error.status}: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
}
