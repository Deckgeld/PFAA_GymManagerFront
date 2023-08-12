import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenewalReportsComponent } from './renewal-reports.component';

const routes: Routes = [{ path: '', component: RenewalReportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenewalReportsRoutingModule { }
