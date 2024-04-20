import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  { path: '', component: ReportsComponent }, 
  { path: 'newMembers', loadChildren: () => import('./new-members/new-members.module').then(m => m.NewMembersModule) }, 
  { path: 'attendance', loadChildren: () => import('./attendance-reports/attendance-reports.module').then(m => m.AttendanceReportsModule) }, 
  { path: 'renewal', loadChildren: () => import('./renewal-reports/renewal-reports.module').then(m => m.RenewalReportsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
