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

  applicant : Array<Applicants> = [];
  constructor(private applicantService : ApplicantServiceService, private router : Router) { }

  // applicant = [
  //   {
  //     id : 12,
  //     name : "rajeev",
  //     emailId : "rajeev.gamil.com",
  //   },
  //   {
  //     id : 23,
  //     name : "raju",
  //     emailId : "raju2gamil.com",
  //   }
  // ];
  ngOnInit(): void {
    this.getApplicantList()
  }
  private getApplicantList(){
    this.applicantService.getDetails().subscribe(data => {
      this.applicant = data;
    });
  }

  detailsOfCandidate(id : number){
    this.router.navigate(['applicant-details',id]);
  }
}
