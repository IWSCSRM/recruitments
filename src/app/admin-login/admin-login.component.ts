import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantServiceService } from '../applicant-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  adminObj = {};
  pass ! : String;
  constructor(private applicantService : ApplicantServiceService, private router: Router) { }
  
  ngOnInit(): void {
    
  }
  onSubmit(){
    this.adminObj = {
      "password" : this.pass
    };
    this.applicantService.postDetailsForAdminLogin(this.adminObj).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/admin-iwsc']);
    },
    (Error) => {alert("Incorrect Password");}
    );
  }

}
