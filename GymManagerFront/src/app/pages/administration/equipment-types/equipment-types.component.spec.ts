import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTypesComponent } from './equipment-types.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { EntityEditorDialogModule } from 'src/app/components/entity-editor-dialog/entity-editor-dialog.module';
import { MaterialModel } from 'src/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EquipmentTypesComponent', () => {
  let component: EquipmentTypesComponent;
  let fixture: ComponentFixture<EquipmentTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentTypesComponent],
      imports: [
        HttpClientModule,
        CookieModule.withOptions(),
        EntityEditorDialogModule,
        MaterialModel,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(EquipmentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
