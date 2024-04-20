import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { EntityEditorDialogModule } from 'src/app/components/entity-editor-dialog/entity-editor-dialog.module';
import { MaterialModel } from 'src/material.module';


@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModel,
    EntityEditorDialogModule
  ]
})
export class ClientsModule { }
