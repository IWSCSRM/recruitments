import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


const components = [
  CommonModule,
  FormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
]

@NgModule({
  imports: [ components ],
  exports: [ components ]
})
export class MaterialsModule { }
