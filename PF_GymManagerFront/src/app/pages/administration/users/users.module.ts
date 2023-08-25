import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MaterialModel } from 'src/material.module';
import { UserEditorModalModule } from 'src/app/components/user-editor-modal/user-editor-modal.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModel,
    UserEditorModalModule
  ]
})
export class UsersModule { }
