import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenewalReportsRoutingModule } from './renewal-reports-routing.module';
import { RenewalReportsComponent } from './renewal-reports.component';


@NgModule({
  declarations: [
    RenewalReportsComponent
  ],
  imports: [
    CommonModule,
    RenewalReportsRoutingModule
  ]
})
export class RenewalReportsModule { }
