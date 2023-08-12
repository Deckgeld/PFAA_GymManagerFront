import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceReportsComponent } from './attendance-reports.component';

const routes: Routes = [{ path: '', component: AttendanceReportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceReportsRoutingModule { }
