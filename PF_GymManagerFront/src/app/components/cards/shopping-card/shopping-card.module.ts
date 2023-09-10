import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCardComponent } from './shopping-card.component';
import { ShoppingComponent } from 'src/app/pages/store/shopping/shopping.component';
import { MaterialModel } from 'src/material.module';



@NgModule({
  declarations: [ShoppingCardComponent],
  imports: [
    CommonModule,
    MaterialModel
  ],
  exports: [ShoppingCardComponent]
})
export class ShoppingCardModule { }
