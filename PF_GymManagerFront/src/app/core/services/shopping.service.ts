import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  shopping: Shopping[] =[
    {
      id: 1,
      product: {
        name: 'Product 1',
        category: 'Category 1'
      },
      user: {
        name: 'User 1'
      },
      member: {
        name: 'Member 1'
      },
      createdOn: '2023-09-08'
    },
    {
      id: 2,
      product: {
        name: 'Product 2',
        category: 'Category 2'
      },
      user: {
        name: 'User 2'
      },
      member: {
        name: 'Member 2'
      },
      createdOn: '2023-09-09'
    },
    {
      id: 3,
      product: {
        name: 'Product 3',
        category: 'Category 3'
      },
      user: {
        name: 'User 3'
      },
      member: {
        name: 'Member 3'
      },
      createdOn: '2023-09-10'
    }
  ];
  
  empty : Shopping[] = []
  

  getShopping(): Observable<Shopping[]>{
    return of(this.shopping);
  }

  deleteShopping(id: number):Observable<Shopping[]>{
    const indice = this.shopping.findIndex((item) => item.id === id);

    if(indice !== -1) {
      this.shopping.splice(indice, 1);
      return of(this.shopping)
    }else{
      return of(this.empty)
    }
  }

  constructor() { /* empty */ }
}


///////
export interface Shopping {
  id: number;
  product: dummyProduct
  
  user: dummyUser
  member: dummyMember
  createdOn:string
}

export interface dummyUser{
  name: string
}
export interface dummyMember{
  name:string
}
export interface dummyProduct{
  name:string
  category:string
}


