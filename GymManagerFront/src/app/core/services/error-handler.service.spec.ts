import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';
import { CookieModule, CookieService } from 'ngx-cookie';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CookieModule.withOptions(),
      ],
      providers:[CookieService]
    });
    service = TestBed.inject(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
