import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFormComponent } from './store-form.component';
import { MaterialModel } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('StoreFormComponent', () => {
  let component: StoreFormComponent;
  let fixture: ComponentFixture<StoreFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreFormComponent],
      imports: [
        MaterialModel,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(StoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
