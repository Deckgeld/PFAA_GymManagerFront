import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './share/layout/layout.component';

var pep = false;


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'sign-in', loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'sign-up', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
  
  { path: '', component: LayoutComponent, children:[
    { path: 'administration', loadChildren: () => import('./pages/administration/administration.module').then(m => m.AdministrationModule)},
    { path: 'store', loadChildren: () => import('./pages/store/store.module').then(m => m.StoreModule) },
    { path: 'members', loadChildren: () => import('./pages/members/members.module').then(m => m.MembersModule) },
    { path: 'invoicing', loadChildren: () => import('./pages/invoicing/invoicing.module').then(m => m.InvoicingModule) },
    { path: 'reports', loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule) },
    { path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) }
  ]},
  
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
    
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
