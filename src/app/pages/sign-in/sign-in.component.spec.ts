import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { LoginFormModule } from 'src/app/components/login-form/login-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [
        HttpClientModule,
        CookieModule.withOptions(),
        LoginFormModule,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
