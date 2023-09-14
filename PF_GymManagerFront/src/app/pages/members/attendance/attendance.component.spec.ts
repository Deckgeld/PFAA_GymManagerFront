import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceComponent } from './attendance.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { MaterialModel } from 'src/material.module';
import { FormsModule } from '@angular/forms';

describe('AttendanceComponent', () => {
  let component: AttendanceComponent;
  let fixture: ComponentFixture<AttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceComponent],
      imports: [
        HttpClientModule,
        CookieModule.withOptions(),
        MaterialModel,
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(AttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
