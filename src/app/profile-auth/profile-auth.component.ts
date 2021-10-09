import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-auth',
  templateUrl: './profile-auth.component.html',
  styleUrls: ['./profile-auth.component.scss']
})
export class ProfileAuthComponent implements OnInit {
  // passwordPattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}";
  emailPattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
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

  }
 
  constructor() { }
 
  ngOnInit(): void {
    
  }
 
}
