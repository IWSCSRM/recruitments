import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicants } from './applicants';

@Injectable({
  providedIn: 'root'
})
export class ApplicantServiceService {

  private baseUrl = 'localhost';
  constructor(private httpClient: HttpClient) { }

  getDetails(): Observable<Applicants[]>{
    return this.httpClient.get<Applicants[]>(`${this.baseUrl}`);
  }
  postDetails(applicant: Object) : Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseUrl}`, applicant);
  }

}
