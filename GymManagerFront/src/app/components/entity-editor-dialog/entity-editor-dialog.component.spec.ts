import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityEditorDialogComponent } from './entity-editor-dialog.component';
import { MaterialModel } from 'src/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CookieModule } from 'ngx-cookie';
import { HttpClientModule } from '@angular/common/http';
import { CreateUpdateFormModule } from '../create-update-form/create-update-form.module';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from 'src/state/users.state';
import { CitiesState } from 'src/state/cities.state';
import { environment } from 'src/environments/environment.development';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EntityEditorDialogComponent', () => {
  let component: EntityEditorDialogComponent;
  let fixture: ComponentFixture<EntityEditorDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityEditorDialogComponent],
      imports: [
        MaterialModel,
        CookieModule.withOptions(),
        HttpClientModule,
        CreateUpdateFormModule,
        NgxsModule.forRoot([UsersState, CitiesState], {
          developmentMode: !environment.production
        }),
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} }, 
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]

    });
    fixture = TestBed.createComponent(EntityEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
