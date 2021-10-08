import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantServiceService } from '../applicant-service.service';
import { Applicants } from '../applicants';
import { ProfileAuthClass } from '../profile-auth-class';

@Component({
  selector: 'app-profile-auth',
  templateUrl: './profile-auth.component.html',
  styleUrls: ['./profile-auth.component.scss']
})
export class ProfileAuthComponent implements OnInit {
  // passwordPattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}";
  emailPattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
  profileAuth : ProfileAuthClass = new ProfileAuthClass();
  applicant : Applicants = new Applicants();
  OTP : number = 90234;
  constructor(private applicantService : ApplicantServiceService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.profileAuth.otp === this.OTP){
      this.applicantService.getDetailsByEmailId(this.profileAuth.emailId).subscribe((data)=>{
        this.applicant = data;
        this.router.navigate(['/user-details',this.applicant._id]);
      },
      (error) => {console.log(error)}
      );
    }
  }
}
