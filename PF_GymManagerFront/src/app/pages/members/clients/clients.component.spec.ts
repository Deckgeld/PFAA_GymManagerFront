import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsComponent } from './clients.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { EntityEditorDialogModule } from 'src/app/components/entity-editor-dialog/entity-editor-dialog.module';
import { MaterialModel } from 'src/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsComponent],
      imports: [
        HttpClientModule,
        CookieModule.withOptions(),
        EntityEditorDialogModule,
        MaterialModel,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
