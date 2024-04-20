import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Products: Product[] = [
    {
      id: 1,
      name: 'Protein Powder (2 lbs)',
      type: 'Supplement',
      category: 'Nutrition',
      brand: 'Optimum Nutrition',
      quantity: 50,
      expirationDate: 'N/A',
    },
    {
      id: 2,
      name: 'Gym T-Shirt',
      type: 'Apparel',
      category: 'Clothing',
      brand: 'Nike',
      quantity: 30,
      expirationDate: 'N/A',
    },
    {
      id: 3,
      name: 'Energy Drink',
      type: 'Beverage',
      category: 'Nutrition',
      brand: 'Monster',
      quantity: 100,
      expirationDate: 'N/A',
    },
    {
      id: 4,
      name: 'Yoga Mat',
      type: 'Equipment',
      category: 'Accessories',
      brand: 'Gaiam',
      quantity: 20,
      expirationDate: 'N/A',
    },
  ];
  
  getProducts(): Observable<Product[]>{
    return of(this.Products);
  }

  newProduct(newShopping: Product): Observable<Product[]> {  
    newShopping.id =this.Products.length + 1
    this.Products.push(newShopping);
    return of(this.Products);
  }

  EditProduct(updatedProduct: Product, id: number): Observable<Product[]> {
    const index = this.Products.findIndex(item => item.id === id);
    if (index !== -1) {
      this.Products[index] = updatedProduct;
      return of(this.Products);
    }
    else{
      return of([])
    }
  }


  deleteProducts(id: number):Observable<Product[]>{
    const indice = this.Products.findIndex((item) => item.id === id);

    if(indice !== -1) {
      this.Products.splice(indice, 1);
      return of(this.Products)
    }else{
      return of([])
    }
  }

  constructor() { /* empty */ }

}