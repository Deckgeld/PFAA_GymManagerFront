import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardComponent } from './shopping-card.component';
import { MaterialModel } from 'src/material.module';

describe('ShoppingCardComponent', () => {
  let component: ShoppingCardComponent;
  let fixture: ComponentFixture<ShoppingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCardComponent],
      imports: [MaterialModel]
    });
    fixture = TestBed.createComponent(ShoppingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
