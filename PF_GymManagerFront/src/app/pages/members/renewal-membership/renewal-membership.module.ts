import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenewalMembershipRoutingModule } from './renewal-membership-routing.module';
import { RenewalMembershipComponent } from './renewal-membership.component';


@NgModule({
  declarations: [
    RenewalMembershipComponent
  ],
  imports: [
    CommonModule,
    RenewalMembershipRoutingModule
  ]
})
export class RenewalMembershipModule { }
