import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../product-list/product';
import { CartService} from '../cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product|undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }
  enableProdMode(){}

  buy(product_item: Product){
    this.cartService.addToCart(product_item);
    window.alert('The product has been shared!');
  }
    
  
  ngOnInit() {
    
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);   

  }

  
}