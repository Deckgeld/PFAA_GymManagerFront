import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditorModalComponent } from './user-editor-modal.component';
import { LoginFormModule } from '../login-form/login-form.module';



@NgModule({
  declarations: [UserEditorModalComponent],
  imports: [
    CommonModule,
    LoginFormModule
  ],
  exports:[UserEditorModalComponent]
})
export class UserEditorModalModule { }
