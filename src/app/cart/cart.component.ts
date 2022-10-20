import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
     
    ) { }

  ngOnInit() {
  }

  getTotalPayment(){
    let total = 0;
    for(let item of this.items){
      total += item.product.price*item.numb;
    }
    return total;
  }

  onSubmit(data){
    let user = "Name: " + data.name
          + "\nAddress: " + data.address
          + "\nTotal payment: " + this.getTotalPayment() +"$";
    window.alert("Your payment information: \n" + user);
  }
}