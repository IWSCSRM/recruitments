import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicants } from './applicants';

@Injectable({
  providedIn: 'root'
})
export class ApplicantServiceService {

  private baseUrl = 'https://nameless-meadow-87725.herokuapp.com/api/';
  constructor(private httpClient: HttpClient) { }

  //get by id
  getDetailsById(id: number): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"getDetailbyId/"+id);
  }
  //post details
  postDetails(applicant: Applicants) : Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"form", applicant);
  }
  //get the array
  getDetails() : Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"getDetail");
  } 
  //put details by id
  putDetailsById(Applicants : Applicants, id : number) : Observable<any>{
    return this.httpClient.put<any>(this.baseUrl+"updateAdm/"+id, {Applicants});
  }

}
