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

  //get by id
  getDetailsById(id: number): Observable<Applicants>{
    return this.httpClient.get<Applicants>(`${this.baseUrl}/${id}`);
  }
  //post details
  postDetails(applicant: Object) : Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseUrl}`, applicant);
  }
  //get the array
  getDetails() : Observable<Applicants[]>{
    return this.httpClient.get<Applicants[]>(`${this.baseUrl}`);
  } 
  //put details by id
  putDetailsById(Applicants : Object, id : number) : Observable<Applicants>{
    return this.httpClient.put<Applicants>(`${this.baseUrl}/${id}`, Applicants);
  }

}
