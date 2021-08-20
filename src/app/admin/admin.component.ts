import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantServiceService } from '../applicant-service.service';
import { Applicants } from '../applicants';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  applicant! : Applicants[] ; 

  constructor(private applicantService : ApplicantServiceService, private router : Router) { }

  ngOnInit(): void {
    this.getApplicantList()
  }
  private getApplicantList(){
    this.applicantService.getDetails().subscribe(data => {
      this.applicant = data.user;
      console.log(data);
    });
    console.log(this.applicant);
  }

  detailsOfCandidate(id : number){
    this.router.navigate(['applicant-details',id]);
  }
}
