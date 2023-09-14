// cities.state.spec.ts
import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { CitiesState } from './cities.state';
import { AddCitiesAction, LoadCitiesAction } from './cities.actions';
import { City } from 'src/app/core/interfaces/city'; // Asegúrate de importar el tipo City desde la ubicación correcta
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';

describe('Cities actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([CitiesState]),
        HttpClientModule,
        CookieModule.withOptions(),
      ]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const city: City = {
      id: 1,
      name: 'CDMX',
      members: []
    };
    store.dispatch(new AddCitiesAction(city));
    store.select(state => state.cities.items).subscribe((items: City[]) => {
      const expectedCity = items.find(city => city.id === 1 && city.name === 'CDMX');
      expect(expectedCity).toBeDefined();
    });
  });
  

  it('should create an action and load items', () => {
    const expectedCities: City[] = [
      {
        id: 1,
        name: 'CDMX',
        members: []
      },
      {
        id: 2,
        name: 'Morelia',
        members: []
      }
    ];
    
    store.dispatch(new LoadCitiesAction());
    store.select(state => state.cities.items).subscribe((items: City[]) => {
      expect(items.length).toBeGreaterThan(0);
      expect(items).toEqual(expectedCities);
    });
  });

});
