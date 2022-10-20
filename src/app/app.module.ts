import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  {path: 'products/:productId', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'home', component: ProductListComponent},
  {path: 'shipping', component: ShippingComponent},
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes), 
    HttpClientModule ],
  declarations: [ AppComponent, TopBarComponent, ProductListComponent, ProductDetailComponent, 
        CartComponent, ShippingComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

