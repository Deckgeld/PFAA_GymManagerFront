import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateFormComponent } from './create-update-form.component';

describe('CreateUpdateFormComponent', () => {
  let component: CreateUpdateFormComponent;
  let fixture: ComponentFixture<CreateUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUpdateFormComponent]
    });
    fixture = TestBed.createComponent(CreateUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
