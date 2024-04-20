import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipTypesRoutingModule } from './membership-types-routing.module';
import { MembershipTypesComponent } from './membership-types.component';
import { MaterialModel } from 'src/material.module';
import { EntityEditorDialogModule } from 'src/app/components/entity-editor-dialog/entity-editor-dialog.module';
import { MembershipCardModule } from 'src/app/components/cards/membership-card/membership-card.module';


@NgModule({
  declarations: [
    MembershipTypesComponent
  ],
  imports: [
    CommonModule,
    MembershipTypesRoutingModule,
    MaterialModel,
    EntityEditorDialogModule,
    MembershipCardModule
  ]
})
export class MembershipTypesModule { }
