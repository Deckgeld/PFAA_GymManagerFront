// users.state.spec.ts
import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { UsersState } from './users.state';
import { LoadUsersAction } from './users.actions';
import { User } from 'src/app/core/interfaces/user';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';

describe('Users actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([UsersState]),
        HttpClientModule,
        CookieModule.withOptions(),
      ]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action to load items', () => {
    store.dispatch(new LoadUsersAction());

    const expectedUsers: User[] = [
      {
        id: '24752cb7-e9c9-4e93-8081-b05881b04fef',
        userName: 'alejandra@gmail.com',
        phoneNumber: '3434',
        email: 'alejandra@gmail.com'
      },
      {
        id: '465b514d-5062-47a4-9724-7b20840d210e',
        userName: 'cris@gmail.com',
        phoneNumber: '1212121212',
        email: 'cris@gmail.com'
      }
    ];
    
    store.select(state => state.users.items).subscribe((items: User[]) => {
      expect(items.length).toBeGreaterThan(0);
      expect(items).toEqual(expectedUsers);
    });
  });

});
