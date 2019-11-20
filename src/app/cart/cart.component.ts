import { Component, OnInit } from '@angular/core';
// We have to import it, to be able to use it here
// A service is a class that is used with dependency injection, so that other files can use it
// We're importing it so that we can display all the items
// A service has to be "exported" for it to be "imported"
import { CartService } from './../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  items;

  constructor(

    private cartService: CartService

  ) { }

  ngOnInit(){
    this.items = this.cartService.getItems();
  }
}
