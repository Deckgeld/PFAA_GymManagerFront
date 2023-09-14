import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingComponent } from './shopping.component';
import { UsersService } from 'src/app/core/services/users.service';
import { ShoppingService } from 'src/app/core/services/shopping.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { MaterialModel } from 'src/material.module';
import { ShoppingCardModule } from 'src/app/components/cards/shopping-card/shopping-card.module';

describe('ShoppingComponent', () => {
  let component: ShoppingComponent;
  let fixture: ComponentFixture<ShoppingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingComponent],
      providers: [
        UsersService,
        ShoppingService,
      ],
      imports: [
        HttpClientModule,
        CookieModule.withOptions(),
        MaterialModel,
        ShoppingCardModule
      ],
    });
    fixture = TestBed.createComponent(ShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
