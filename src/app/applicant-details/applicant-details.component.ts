import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantServiceService } from '../applicant-service.service';
import { Applicants } from '../applicants';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.scss']
})
export class ApplicantDetailsComponent implements OnInit {

  id! : number;
  applicant : Applicants = new Applicants();
  constructor(private applicantService : ApplicantServiceService, private route : ActivatedRoute) { }

  // applicant = {
  //     id : 2,
  //     name : "Raju Srivasta",
  //     mobileNo : "12986389163",
  //     year : "2",
  //     branch : "cse-cc",
  //     emailId : "raju@gmail.com",
  //     registrationNo : "ra2319128313",
  //     domain : [
  //       {id : 1, select : true, name : "tech", val: "www.github.com", isShortlisted: false},
  //       {id : 2, select : true, name: "content", val : "", isShortlisted: false},
  //       {id : 3, select : false, name : "hr", val : "", isShortlisted: false},
  //       {id : 4, select : true, name : "graphics", val : "www.mygrafna.com", isShortlisted: false}
  //     ]
  //   };
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.applicantService.getDetailsById(this.id).subscribe(data => {
      this.applicant = data;
    },
    error => console.log(error)
    );
  } 
  onChecking($event : any) {
    const id = $event.target.value;
    const shortlisted = $event.target.checked;
    this.applicant.domain[id-1].isShortlisted = shortlisted;
    this.applicantService.putDetailsById(this.applicant, this.id).subscribe(data => {
      this.applicant = data;
    },
    error => console.log(error))
  }

}
