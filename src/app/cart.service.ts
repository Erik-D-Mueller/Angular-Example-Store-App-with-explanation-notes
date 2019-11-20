import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// this 'CartService' is what gets imported at the top of the receving .ts file
export class CartService {

  items = [];

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


}
