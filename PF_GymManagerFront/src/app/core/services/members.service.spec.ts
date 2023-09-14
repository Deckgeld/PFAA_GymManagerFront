import { TestBed } from '@angular/core/testing';

import { MembersService } from './members.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { ShoppingCardModule } from 'src/app/components/cards/shopping-card/shopping-card.module';

describe('MembersService', () => {
  let service: MembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        CookieModule.withOptions()
      ]
    });
    service = TestBed.inject(MembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
