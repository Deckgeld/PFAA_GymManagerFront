import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateFormComponent } from './create-update-form.component';
import { MaterialModel } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from 'src/state/users.state';
import { CitiesState } from 'src/state/cities.state';
import { environment } from 'src/environments/environment.development';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateUpdateFormComponent', () => {
  let component: CreateUpdateFormComponent;
  let fixture: ComponentFixture<CreateUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUpdateFormComponent],
      imports: [
        MaterialModel,
        ReactiveFormsModule,
        NgxsModule.forRoot([UsersState, CitiesState], {
          developmentMode: !environment.production
        }),
        HttpClientModule,
        CookieModule.withOptions(),
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(CreateUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
