import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'observe': 'response'
    })
  }

  constructor(private http: HttpClient) { }

  doctorURL = 'http://localhost:5050/doctor';

  getDoctors() : Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorURL, this.httpOptions)
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