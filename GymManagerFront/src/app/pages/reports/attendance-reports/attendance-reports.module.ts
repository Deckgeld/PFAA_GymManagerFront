import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceReportsRoutingModule } from './attendance-reports-routing.module';
import { AttendanceReportsComponent } from './attendance-reports.component';


@NgModule({
  declarations: [
    AttendanceReportsComponent
  ],
  imports: [
    CommonModule,
    AttendanceReportsRoutingModule
  ]
})
export class AttendanceReportsModule { }
