import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members.component';

const routes: Routes = [
  { path: '', component: MembersComponent }, 
  { path: 'renewalMembership', loadChildren: () => import('./renewal-membership/renewal-membership.module').then(m => m.RenewalMembershipModule) },
  { path: 'attendance', loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule) },
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
