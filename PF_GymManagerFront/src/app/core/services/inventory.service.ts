import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  inventory : Inventory[] = [
    {
      id: 1,
      name: 'Weight Machine',
      brand: 'Life Fitness',
      category: 'Weight Equipment',
      color: 'Black and Gray',
      quantity: 5,
      lastUpdate: '2023-09-01',
    },
    {
      id: 2,
      name: 'Treadmill',
      brand: 'NordicTrack',
      category: 'Cardio Equipment',
      color: 'Silver',
      quantity: 2,
      lastUpdate:'2023-08-15',
    },
    {
      id: 3,
      name: 'Abdominal Bench',
      brand: 'Bowflex',
      category: 'Functional Training Equipment',
      color: 'Red and Black',
      quantity: 3,
      lastUpdate: '2023-09-05',
    },
  ];  
  empty = []

  getInventory(): Observable<Inventory[]>{
    return of(this.inventory);
  }

  deleteInventory(id: number):Observable<Inventory[]>{
    const indice = this.inventory.findIndex((item) => item.id === id);

    if(indice !== -1) {
      this.inventory.splice(indice, 1);
      return of(this.inventory)
    }else{
      return of(this.empty)
    }
  }

  constructor() { /* empty */ }
}

export interface Inventory {
  id: number;
  name: string;
  brand: string;
  category: string;
  color: string;
  quantity: number;
  lastUpdate: string;
}
