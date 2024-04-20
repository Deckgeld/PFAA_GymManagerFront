import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Inventory } from '../interfaces/inventory';

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

  getInventory(): Observable<Inventory[]>{
    return of(this.inventory);
  }

  newInventory(newInventory: Inventory): Observable<Inventory[]> {  
    newInventory.id = this.inventory.length + 1
    this.inventory.push(newInventory);
    return of(this.inventory);
  }

  EditInventory(updatedProduct: Inventory, id: number): Observable<Inventory[]> {
    const index = this.inventory.findIndex(item => item.id === id);
    if (index !== -1) {
      this.inventory[index] = updatedProduct;
      return of(this.inventory);
    }
    else{
      return of([])
    }
  }

  deleteInventory(id: number):Observable<Inventory[]>{
    const indice = this.inventory.findIndex((item) => item.id === id);

    if(indice !== -1) {
      this.inventory.splice(indice, 1);
      return of(this.inventory)
    }else{
      return of([])
    }
  }

  constructor() { /* empty */ }
}
