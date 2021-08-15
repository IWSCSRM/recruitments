import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';


const components = [
  CommonModule,
  FormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  ReactiveFormsModule,
  FormsModule,
  MatInputModule,
  MatDialogModule,
  MatFormFieldModule,
  MatBadgeModule
]

@NgModule({
  imports: [ components ],
  exports: [ components ]
})
export class MaterialsModule { }
