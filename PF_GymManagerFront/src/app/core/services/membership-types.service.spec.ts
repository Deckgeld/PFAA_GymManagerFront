import { TestBed } from '@angular/core/testing';

import { MembershipTypesService } from './membership-types.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';

describe('MembershipTypesService', () => {
  let service: MembershipTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        CookieModule.withOptions(),
      ]
    });
    service = TestBed.inject(MembershipTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
