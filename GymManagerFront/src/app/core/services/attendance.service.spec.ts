import { TestBed } from '@angular/core/testing';

import { AttendanceService } from './attendance.service';
import { CookieModule } from 'ngx-cookie';
import { HttpClientModule } from '@angular/common/http';

describe('AttendanceService', () => {
  let service: AttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        CookieModule.withOptions(),
      ]
    });
    service = TestBed.inject(AttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
