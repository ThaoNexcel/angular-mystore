import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  numb: number;
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
    
  }

}