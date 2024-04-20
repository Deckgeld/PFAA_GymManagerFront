import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryComponent } from './inventory.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EntityEditorDialogModule } from 'src/app/components/entity-editor-dialog/entity-editor-dialog.module';
import { CookieModule } from 'ngx-cookie';
import { MaterialModel } from 'src/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryComponent],
      imports: [
        EntityEditorDialogModule,
        CookieModule.withOptions(),
        MaterialModel,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
