import { Component, OnInit } from '@angular/core';
import { ApplicantServiceService } from '../applicant-service.service';
import { Applicants } from '../applicants';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.scss']
})
export class NewRegistrationComponent implements OnInit {

  applicant : Applicants = new Applicants();
  constructor(private applicantService : ApplicantServiceService) { }

  ngOnInit(): void {
    this.postDetails();
  }
  postDetails(){
    this.applicantService.postDetails(this.applicant).subscribe(data => {
      console.log(data);

    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.applicant);
    this.postDetails();
  }

}
