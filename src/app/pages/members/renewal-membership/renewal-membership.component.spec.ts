import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalMembershipComponent } from './renewal-membership.component';
import { CookieModule } from 'ngx-cookie';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModel } from 'src/material.module';
import { FormsModule } from '@angular/forms';

describe('RenewalMembershipComponent', () => {
  let component: RenewalMembershipComponent;
  let fixture: ComponentFixture<RenewalMembershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenewalMembershipComponent],
      imports: [
        CookieModule.withOptions(),
        HttpClientModule,
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(RenewalMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
