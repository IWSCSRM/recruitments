import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileAuthComponent } from './profile-auth/profile-auth.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

const routes: Routes = [{path: '', redirectTo: '/profile-auth', pathMatch: 'full'},
{path: 'profile-auth', component: ProfileAuthComponent},
{path: 'user-details', component: ProfileDetailsComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
