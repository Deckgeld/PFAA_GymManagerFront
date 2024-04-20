import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenewalMembershipRoutingModule } from './renewal-membership-routing.module';
import { RenewalMembershipComponent } from './renewal-membership.component';
import { FormsModule } from '@angular/forms';
import { MaterialModel } from 'src/material.module';


@NgModule({
  declarations: [
    RenewalMembershipComponent
  ],
  imports: [
    CommonModule,
    RenewalMembershipRoutingModule,
    FormsModule,
    MaterialModel
  ]
})
export class RenewalMembershipModule { }
