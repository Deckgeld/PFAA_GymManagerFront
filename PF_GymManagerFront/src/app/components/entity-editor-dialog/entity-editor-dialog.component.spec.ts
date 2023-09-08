import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityEditorDialogComponent } from './entity-editor-dialog.component';

describe('EntityEditorDialogComponent', () => {
  let component: EntityEditorDialogComponent;
  let fixture: ComponentFixture<EntityEditorDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityEditorDialogComponent]
    });
    fixture = TestBed.createComponent(EntityEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
