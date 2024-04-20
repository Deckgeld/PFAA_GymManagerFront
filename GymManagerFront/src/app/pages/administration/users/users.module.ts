import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MaterialModel } from 'src/material.module';
import { UserEditorModalModule } from 'src/app/components/user-editor-modal/user-editor-modal.module';
import { UserEditorDialogModule } from 'src/app/components/user-editor-dialog/user-editor-dialog.module';
import { BasicCardComponent } from 'src/app/components/cards/basic-card/basic-card.component';
import { BasicCardModule } from 'src/app/components/cards/basic-card/basic-card.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModel,
    UserEditorModalModule,
    UserEditorDialogModule,
    BasicCardModule
  ]
})
export class UsersModule { }
