import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentTypesRoutingModule } from './equipment-types-routing.module';
import { EquipmentTypesComponent } from './equipment-types.component';
import { MaterialModel } from 'src/material.module';
import { UserEditorModalModule } from 'src/app/components/user-editor-modal/user-editor-modal.module';
import { UserEditorDialogModule } from 'src/app/components/user-editor-dialog/user-editor-dialog.module';


@NgModule({
  declarations: [
    EquipmentTypesComponent
  ],
  imports: [
    CommonModule,
    EquipmentTypesRoutingModule,
    MaterialModel,
    //UserEditorModalModule,
    UserEditorDialogModule
  ]
})
export class EquipmentTypesModule { }
