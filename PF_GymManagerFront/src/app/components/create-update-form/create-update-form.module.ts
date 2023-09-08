import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUpdateFormComponent } from './create-update-form.component';
import { MaterialModel } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateUpdateFormComponent],
  imports: [
    CommonModule,
    MaterialModel,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports: [CreateUpdateFormComponent]
})
export class CreateUpdateFormModule { }