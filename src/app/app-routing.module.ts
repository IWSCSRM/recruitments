import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { SuccessfulRegisterationComponent } from './successful-registeration/successful-registeration.component';
import { ProfileAuthComponent } from './profile-auth/profile-auth.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {path: '', redirectTo: 'apply', pathMatch: 'full'},
  {path: 'apply', component: NewRegistrationComponent},
  {path: 'registered/:id', component: SuccessfulRegisterationComponent},
  {path : 'admin-iwsc', component : AdminComponent},
  {path: 'applicant-details/:id', component : ApplicantDetailsComponent},
  {path: 'profile-auth', component: ProfileAuthComponent},
  {path: 'user-details/:id', component: ProfileDetailsComponent},
  {path: 'admin-login', component: AdminLoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
