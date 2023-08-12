import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalMembershipComponent } from './renewal-membership.component';

describe('RenewalMembershipComponent', () => {
  let component: RenewalMembershipComponent;
  let fixture: ComponentFixture<RenewalMembershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenewalMembershipComponent]
    });
    fixture = TestBed.createComponent(RenewalMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
