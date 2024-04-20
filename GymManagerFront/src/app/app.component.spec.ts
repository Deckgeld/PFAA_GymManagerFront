import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from 'src/state/users.state';
import { CitiesState } from 'src/state/cities.state';
import { environment } from 'src/environments/environment.development';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      NgxsModule.forRoot([UsersState, CitiesState], {
        developmentMode: !environment.production
      }),
      HttpClientModule,
      CookieModule.withOptions(),
    ],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PF_GymManagerFront'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PF_GymManagerFront');
  });
});
