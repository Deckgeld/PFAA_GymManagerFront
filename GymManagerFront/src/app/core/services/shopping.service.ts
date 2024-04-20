import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductsService } from './products.service';
import { UsersService } from './users.service';
import { MembersService } from './members.service';
import { right } from '@popperjs/core';
import { Shopping, ShoppingEdit } from '../interfaces/shopping';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  shopping: Shopping[] = [
    {
      id: 1,
      createdOn: "2023-09-06",
      product: "Protein Powder",
      typeProduct: "Supplement",
      user: "John Doe",
      member: "Alice Johnson",
    },
    {
      id: 2,
      createdOn: "2023-09-06",
      product: "Gym Shorts",
      typeProduct: "Clothing",
      user: "Jane Smith",
      member: "Bob Williams",
    },
    {
      id: 3,
      createdOn: "2023-09-06",
      product: "Yoga Mat",
      typeProduct: "Equipment",
      user: "Emily Davis",
      member: "Chris Brown",
    },
    {
      id: 4,
      createdOn: "2023-09-06",
      product: "Weightlifting Gloves",
      user: "Michael Wilson",
      typeProduct: "Accessories",
      member: "Olivia Lee",
    }
  ];

  getShopping(): Observable<Shopping[]> {
    return of(this.shopping);
  }

  
  newShopping(newShopping: Shopping): Observable<Shopping[]> {  
    newShopping.id = this.shopping.length + 1;
    this.shopping.push(newShopping);
    return of(this.shopping);
  }

  EditShopping(updatedShopping: ShoppingEdit, id: number): Observable<Shopping[]> {
    const index = this.shopping.findIndex(item => item.id === id);
    
    if (index !== -1) {
      this.shopping[index].product = updatedShopping.product;
      this.shopping[index].typeProduct = updatedShopping.typeProduct;
      this.shopping[index].user = updatedShopping.user;
      this.shopping[index].member = updatedShopping.member;
      return of(this.shopping);
    } else {
      return of([]);
    }
  }

  deleteShopping(id: number): Observable<Shopping[]> {
    const indice = this.shopping.findIndex((item) => item.id === id);

    if (indice !== -1) {
      this.shopping.splice(indice, 1);
      return of(this.shopping)
    } else {
      return of([])
    }
  }

  constructor(
    private productsService: ProductsService,
    private usersService: UsersService,
    private membersService: MembersService,
  ) { /* empty */ }
}