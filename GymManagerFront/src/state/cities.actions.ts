import { City } from "src/app/core/interfaces/city";

export class AddCitiesAction {
  static readonly type = '[CitiesState] Add item';
  constructor(public payload: City) { }
}

export class LoadCitiesAction {
  static readonly type = '[CitiesState] Load items';
}