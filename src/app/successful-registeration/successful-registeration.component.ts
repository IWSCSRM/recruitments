import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantServiceService } from '../applicant-service.service';
import { Applicants } from '../applicants';

@Component({
  selector: 'app-successful-registeration',
  templateUrl: './successful-registeration.component.html',
  styleUrls: ['./successful-registeration.component.scss']
})
export class SuccessfulRegisterationComponent implements OnInit {

  id! : number;
  applicant : Applicants = new Applicants();
  constructor(private applicantService: ApplicantServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.applicantService.getDetailsById(this.id).subscribe(data  => {
      console.log(data);
      this.applicant = data.user[0];
    },
    error => console.log(error));
  }

}
