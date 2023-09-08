import { Injectable } from '@angular/core';
import { State, Action, StateContext, Select } from '@ngxs/store';
import { AddCitiesAction, LoadCitiesAction } from './cities.actions';
import { City } from 'src/app/core/interfaces/city';
import { CityService } from 'src/app/core/services/city.service';
import { tap } from 'rxjs';
import { ResponseArrayModel } from 'src/app/core/interfaces/response-models';

export class CitiesStateModel {
  public cities!: City[];
}

const defaults = {
  cities: []
};

@State<CitiesStateModel>({
  name: 'StateCities',
  defaults
})
@Injectable()
export class CitiesState {
  constructor(private cityService:CityService) { }

  @Select()
  public static getCities({ cities }: CitiesStateModel): City[]{
    return cities
  }

  @Action(AddCitiesAction)
  addCity({ getState, setState }: StateContext<CitiesStateModel>, { payload }: AddCitiesAction) {
    const state = getState();
    setState({ cities: [ ...state.cities, payload ] });
  }
  @Action(LoadCitiesAction)
  loadCities({ setState }: StateContext<CitiesStateModel>): LoadCitiesAction{
    return this.cityService.getCities().pipe(
      tap((response: ResponseArrayModel<City>) => {
        const cities = response.model;
        setState({ cities });
      })
    ).subscribe();
  }
}
