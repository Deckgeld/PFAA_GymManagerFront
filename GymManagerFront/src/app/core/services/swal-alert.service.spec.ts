import { TestBed } from '@angular/core/testing';

import { SwalAlertService } from './swal-alert.service';
import { CookieModule } from 'ngx-cookie';

describe('SwalAlertService', () => {
  let service: SwalAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CookieModule.withOptions(),
      ],
    });
    service = TestBed.inject(SwalAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
