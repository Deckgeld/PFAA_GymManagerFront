import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityEditorDialogComponent } from './entity-editor-dialog.component';
import { CreateUpdateFormModule } from '../create-update-form/create-update-form.module';
import { MaterialModel } from 'src/material.module';
import { StoreFormModule } from '../store-form/store-form.module';



@NgModule({
  declarations: [EntityEditorDialogComponent],
  imports: [
    CommonModule,
    CreateUpdateFormModule,
    MaterialModel,
    StoreFormModule
  ],
  exports: [EntityEditorDialogComponent]
})
export class EntityEditorDialogModule { }
