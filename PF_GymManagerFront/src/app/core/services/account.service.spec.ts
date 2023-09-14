import { TestBed } from '@angular/core/testing';
import { AccountService } from './account.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule,
        CookieModule.withOptions(),
      ]    
    });
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
