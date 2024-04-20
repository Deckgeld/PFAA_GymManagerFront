import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipCardComponent } from './membership-card.component';
import { MaterialModel } from 'src/material.module';

describe('MembershipCardComponent', () => {
  let component: MembershipCardComponent;
  let fixture: ComponentFixture<MembershipCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershipCardComponent],
      imports: [MaterialModel],
    });
    fixture = TestBed.createComponent(MembershipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
