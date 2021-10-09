import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantServiceService } from '../applicant-service.service';
import { Applicants } from '../applicants';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  applicant : Applicants = new Applicants();
  id ! : number;
  constructor(private applicantService : ApplicantServiceService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.applicantService.getDetailsById(this.id).subscribe((data) => {
      this.applicant = data.user[0];
      console.log(this.applicant);
    },
    (error) => {console.log(error)}
    );
  }

}
