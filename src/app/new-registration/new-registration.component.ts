import { Component, OnInit } from '@angular/core';
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
  constructor(private applicantService : ApplicantServiceService, private router : Router) {
   }

  ngOnInit(): void {
    this.postDetails();
    this.applicant.domain = [
      {id: 1, select : false, name : 'tech', value : "", isShortlisted : false},
      {id: 2, select : false, name : 'hr', value : "", isShortlisted : false},
      {id: 3, select : false, name : 'content', value : "", isShortlisted : false},
      {id: 4, select : false, name : 'graphic', value : "", isShortlisted : false},
    ];
  }
  postDetails(){
    this.applicantService.postDetails(this.applicant).subscribe(data => {
      console.log(data);
      this.router.navigate(['registered', this.applicant.id]);
    },
    error => console.log(error));
  }

  onChecking($event :any){
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    this.applicant.domain[id-1].select = isChecked;
  }
  onSubmit(){
    console.log(this.applicant);
    this.postDetails();
  }

}
