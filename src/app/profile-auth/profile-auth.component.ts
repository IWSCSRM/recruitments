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
    this.applicantService.postDetailsForLogin(this.profileAuth.emailId).subscribe((data) => {
      console.log(data);
      this.OTP = data.uuid;
      if(this.OTP === this.profileAuth.otp){
        this.applicant = data.user;
      }
    },
    (Error) => {console.log(Error)}
    );
  }
  
  ngOnInit(): void {
    
  }

  onSubmit(){
    if(this.OTP === this.profileAuth.otp){
       this.router.navigate(['/user-details',this.applicant._id]);
     }
     else{
       alert("Enter correct email id");
     }
  }
}
