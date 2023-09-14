import { TestBed } from '@angular/core/testing';

import { EquipmentTypesService } from './equipment-types.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { EntityEditorDialogModule } from 'src/app/components/entity-editor-dialog/entity-editor-dialog.module';

describe('EquipmentTypesService', () => {
  let service: EquipmentTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        CookieModule.withOptions()
      ]
    });
    service = TestBed.inject(EquipmentTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
