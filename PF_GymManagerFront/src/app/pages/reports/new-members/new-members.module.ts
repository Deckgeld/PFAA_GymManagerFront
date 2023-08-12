import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewMembersRoutingModule } from './new-members-routing.module';
import { NewMembersComponent } from './new-members.component';


@NgModule({
  declarations: [
    NewMembersComponent
  ],
  imports: [
    CommonModule,
    NewMembersRoutingModule
  ]
})
export class NewMembersModule { }
