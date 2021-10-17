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
  emailObj : Object = {};
  applicant : Applicants = new Applicants();
  OTP : number | undefined;
  constructor(private applicantService : ApplicantServiceService, private router : Router) { }
   unhide = "unhide";
   hide = "hide"
  toggle(){
    if(this.unhide){
      this.unhide = "hide";
    }
    else{
      this.unhide = "hide";
    }
    if(this.hide){
      this.hide = "unhide";
    }
    else{
      this.hide = "hide";
    }
    this.emailObj = {
      "email" : this.profileAuth.emailId
    }
    this.applicantService.postDetailsForLogin(this.emailObj).subscribe((data) => {
      this.OTP = data.uuid;
      console.log(this.OTP);
      this.applicant = data.user;
    },
    (Error) => {alert("User with email id doesn't exist");}
    );
  }
  
  ngOnInit(): void {
    
  }

  onSubmit(){
    if(this.OTP == this.profileAuth.otp){
      this.router.navigate(['/user-details',this.applicant._id]);
    }
    else{
      alert("Enter correct otp");
    }
  }
}
