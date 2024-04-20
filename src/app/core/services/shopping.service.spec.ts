import { TestBed } from '@angular/core/testing';
import { ShoppingService } from './shopping.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { MaterialModel } from 'src/material.module';


describe('ShoppingService', () => {
  let service: ShoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        CookieModule.withOptions(),
        MaterialModel
      ]
    });
    service = TestBed.inject(ShoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
