import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { ApplicantServiceService } from '../applicant-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  adminObj = {};
  pass ! : String;
  constructor(private applicantService : ApplicantServiceService, private router: Router, private adminService : AdminServiceService) { }
  
  ngOnInit(): void {
    
  }
  onSubmit(){
    this.adminObj = {
      "password" : this.pass
    };
    this.applicantService.postDetailsForAdminLogin(this.adminObj).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.adminService.password = this.pass;
      this.adminService.token = data.token;
      this.router.navigate(['/admin-iwsc']);
    },
    (Error) => {alert("Incorrect Password");}
    );
  }

}
