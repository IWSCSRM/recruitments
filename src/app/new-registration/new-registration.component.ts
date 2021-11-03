import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicantServiceService } from '../applicant-service.service';
import { Applicants } from '../applicants';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.scss']
})
export class NewRegistrationComponent implements OnInit {

  applicant : Applicants = new Applicants();
  link:any =[
    "Github Link",
    "Behance Link",
    "Medium Link",
    "Instagram Link",
    "Instagram Link",
    "Instagram Link"
  ]
  constructor(private applicantService : ApplicantServiceService, private router : Router) {
  }


  ngOnInit(): void {
    this.applicant.domain = [
      {id: 1, select : false, name : 'Technical', value : "", isShortlisted : false},
      {id: 2, select : false, name : 'Graphics', value : "", isShortlisted : false},
      {id: 3, select : false, name : 'Content', value : "", isShortlisted : false},
      {id: 4, select : false, name : 'Creatives', value : "", isShortlisted : false},
      {id: 5, select : false, name : 'HR', value : "", isShortlisted : false},
      {id: 6, select : false, name : 'Marketing', value : "", isShortlisted : false},
    ];
  }
  postDetails(){
    this.applicantService.postDetails(this.applicant).subscribe(data => {
      this.applicant = data.user;
      this.router.navigate(['/registered', this.applicant._id]);
    },
    error => alert("User with details already exist Or invalid details"));
  }

  onChecking($event :any){
    this.applicant.domain[$event.target.value-1].select = $event.target.checked;
  }
  onSubmit(){
    this.postDetails();
  }

}
