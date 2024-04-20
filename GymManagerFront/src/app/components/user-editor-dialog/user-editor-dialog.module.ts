import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditorDialogComponent } from './user-editor-dialog.component';
import { LoginFormModule } from '../login-form/login-form.module';
import { MaterialModel } from 'src/material.module';
import { CreateUpdateFormModule } from '../create-update-form/create-update-form.module';



@NgModule({
  declarations: [UserEditorDialogComponent],
  imports: [
    CommonModule,
    MaterialModel,
    LoginFormModule,
  ],
  exports:[UserEditorDialogComponent]
})
export class UserEditorDialogModule { }
