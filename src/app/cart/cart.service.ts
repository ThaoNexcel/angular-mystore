import { Injectable } from '@angular/core';
import { Product } from '../product-list/product';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'any'})
export class CartService {

  items: ItemCart[] = [];
  index: number;

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: Product){
    this.index = this.items.findIndex(itemCart=>itemCart.product==product)
    if(this.index>=0){
      this.items[this.index].numb++;
    }
    else
      this.items.push({"product":product, "numb": 1});
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  
}

export interface ItemCart{
  product: Product;
  numb: number;
}