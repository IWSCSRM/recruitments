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
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.applicantService.getDetailsById(this.id).subscribe(data => {
      console.log(data);
      this.applicant = data.user[0];
    },
    error => console.log(error)
    );
  } 
  onChecking($event : any) {
    const id = $event.target.value;
    const shortlisted = $event.target.checked;
    this.applicant.domain[id-1].isShortlisted = shortlisted;
    this.applicantService.putDetailsById(this.applicant, this.id).subscribe(data => {
      this.applicant = data.result;
    },
    error => console.log(error))
  }

}
