/*This is basically the routing file, which  connects URLs to destinations */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

// HttpClient is used for communicating with APIs and comes from HttpClientModule
// The HttpClient service is what you inject into your services to fetch data and interact with external APIs and resources.
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component'

  /* In app.module.ts, add a route for product details, with a path of products/:productId and
  ProductDetailsComponent for the component.
  */

@NgModule({
  imports: [
    BrowserModule,

    //Adding HttpClientModule to the imports array of the app module (@NgModule) registers the Angulars HTTP client providers globally
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

      // This is the route for the homepage, hence ''
      { path: '', component: ProductListComponent },

      //This is the route to display product details when they click on a product from the homepage
      { path: 'products/:productId', component: ProductDetailsComponent },

// This is the route for checkout, or viewing all of the items in the cart'
{ path: 'cart', component: CartComponent},

{ path: 'shipping', component: ShippingComponent },

    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
