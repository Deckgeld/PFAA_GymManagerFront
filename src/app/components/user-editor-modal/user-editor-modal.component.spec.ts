import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditorModalComponent } from './user-editor-modal.component';
import { UsersService } from 'src/app/core/services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CookieModule } from 'ngx-cookie';
import { LoginFormModule } from '../login-form/login-form.module';

describe('UserEditorModalComponent', () => {
  let component: UserEditorModalComponent;
  let fixture: ComponentFixture<UserEditorModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditorModalComponent],
      imports: [
        HttpClientModule,
        MatDialogModule,
        CookieModule.withOptions(),
        LoginFormModule
      ],
      providers: [
        { provide: MatDialog, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(UserEditorModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
