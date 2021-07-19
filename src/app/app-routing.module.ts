import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { SuccessfulRegisterationComponent } from './successful-registeration/successful-registeration.component';

const routes: Routes = [
  {path: '', redirectTo: 'apply', pathMatch: 'full'},
  {path: 'apply', component: NewRegistrationComponent},
  {path: 'registered/:id', component: SuccessfulRegisterationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
