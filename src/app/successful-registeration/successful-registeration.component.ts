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

  // sampleObj = {
  //   name : "Raju Srivasta",
  //   mobileNo : "12986389163",
  //   year : "2",
  //   branch : "cse-cc",
  //   emailId : "raju@gmail.com",
  //   registrationNo : "ra2319128313",
  //   domain : [
  //     {id : 1, select : true, name : "tech", val: "www.github.com"},
  //     {id : 2, select : true, name: "content", val : ""},
  //     {id : 3, select : false, name : "hr", val : ""},
  //     {id : 4, select : true, name : "graphics", val : "www.mygrafna.com"}
  //   ]
  // };
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.applicantService.getDetailsById(this.id).subscribe(data  => {
      console.log(data);
      this.applicant = data;
    },
    error => console.log(error));
  }

}
