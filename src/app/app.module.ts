import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { ProfileAuthComponent } from './profile-auth/profile-auth.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewRegistrationComponent,
    ProfileAuthComponent,
    ProfileDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatBadgeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
