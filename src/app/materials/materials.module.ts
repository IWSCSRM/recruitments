import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


const components = [
  CommonModule,
  FormsModule,
  MatInputModule
]

@NgModule({
  imports: [ components ],
  exports: [ components ]
})
export class MaterialsModule { }
