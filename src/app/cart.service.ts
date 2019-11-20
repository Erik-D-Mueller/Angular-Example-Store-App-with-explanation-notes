import { Injectable } from '@angular/core';

//Import HttpClient from the @angular/common/http package.
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// this 'CartService' is what gets imported at the top of the receving .ts file
export class CartService {

  items = [];


  // Inject HttpClient into the constructor of the CartService component class:
constructor(
  private http: HttpClient
) {}



addToCart(product){
this.items.push(product);
}

getItems(){
return this.items;
}


clearCart(){
this.items = [];
return this.items;
}

//define a new getShippingPrices() method that uses the HttpClient#get() method to retrieve the shipping data (types and prices).
getShippingPrices(){
  return this.http.get('/assets/shipping.json');
}

}
