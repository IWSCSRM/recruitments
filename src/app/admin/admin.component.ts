import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { ApplicantServiceService } from '../applicant-service.service';
import { Applicants } from '../applicants';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  applicant! : Applicants[] ; 

  constructor(private applicantService : ApplicantServiceService, private router : Router, private adminService : AdminServiceService) { }

  ngOnInit(): void {
    this.getApplicantList()
  }
  private getApplicantList(){
    if(this.adminService.password != undefined && this.adminService.token != undefined){
      this.applicantService.getDetails().subscribe(data => {
        this.applicant = data.user;
        console.log(data);
      });
      console.log(this.applicant);
    }
  }

  detailsOfCandidate(id : number){
    this.router.navigate(['applicant-details',id]);
  }
}
