import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentTypesRoutingModule } from './equipment-types-routing.module';
import { EquipmentTypesComponent } from './equipment-types.component';
import { MaterialModel } from 'src/material.module';
import { EntityEditorDialogModule } from 'src/app/components/entity-editor-dialog/entity-editor-dialog.module';


@NgModule({
  declarations: [
    EquipmentTypesComponent
  ],
  imports: [
    CommonModule,
    EquipmentTypesRoutingModule,
    MaterialModel,
    //UserEditorModalModule,
    EntityEditorDialogModule
  ]
})
export class EquipmentTypesModule { }
