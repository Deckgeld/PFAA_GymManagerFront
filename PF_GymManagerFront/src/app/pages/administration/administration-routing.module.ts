import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [
  { path: '', component: AdministrationComponent },
  { path: 'equipment-types', loadChildren: () => import('./equipment-types/equipment-types.module').then(m => m.EquipmentTypesModule) },
  { path: 'membership-types', loadChildren: () => import('./membership-types/membership-types.module').then(m => m.MembershipTypesModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
