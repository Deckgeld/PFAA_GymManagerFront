import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { MaterialModel } from 'src/material.module';
import { ShoppingCardModule } from 'src/app/components/cards/shopping-card/shopping-card.module';


@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule, 
    MaterialModel,
    ShoppingCardModule
  ]
})
export class ShoppingModule { }
