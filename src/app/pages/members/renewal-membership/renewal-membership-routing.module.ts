import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenewalMembershipComponent } from './renewal-membership.component';

const routes: Routes = [{ path: '', component: RenewalMembershipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenewalMembershipRoutingModule { }
