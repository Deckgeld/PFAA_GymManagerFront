import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditorDialogComponent } from './user-editor-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CookieModule } from 'ngx-cookie';
import { LoginFormModule } from '../login-form/login-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserEditorDialogComponent', () => {
  let component: UserEditorDialogComponent;
  let fixture: ComponentFixture<UserEditorDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditorDialogComponent],
      imports: [
        HttpClientModule,
        CookieModule.withOptions(),
        LoginFormModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} }, 
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]

    });
    fixture = TestBed.createComponent(UserEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
