import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipTypesComponent } from './membership-types.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { MaterialModel } from 'src/material.module';

describe('MembershipTypesComponent', () => {
  let component: MembershipTypesComponent;
  let fixture: ComponentFixture<MembershipTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershipTypesComponent],
      imports: [
        HttpClientModule,
        CookieModule.withOptions(),
        MaterialModel
      ]
    });
    fixture = TestBed.createComponent(MembershipTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
