import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipCardComponent } from './membership-card.component';
import { MaterialModel } from 'src/material.module';



@NgModule({
  declarations: [
    MembershipCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModel
  ], exports: [MembershipCardComponent]
})
export class MembershipCardModule { }
