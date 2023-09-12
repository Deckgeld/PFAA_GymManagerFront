import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModel } from 'src/material.module';
import { StoreFormComponent } from './store-form.component';



@NgModule({
  declarations: [StoreFormComponent],
  imports: [
    CommonModule,
    MaterialModel,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [StoreFormComponent]
})
export class StoreFormModule { }
