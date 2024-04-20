import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { MaterialModel } from 'src/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    MaterialModel,
    FormsModule
  ]
})
export class AttendanceModule { }
