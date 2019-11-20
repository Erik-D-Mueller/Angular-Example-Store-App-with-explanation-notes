import { Component, OnInit } from '@angular/core';
// Modify the shipping component so it uses the cart service to retrieve shipping data via HTTP from the shipping.json file.
//Import the cart service.
import{ CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  //define a shippingCosts property
  shippingCosts;

  constructor(

    //Inject the cart service into the ShippingComponent class:
    private cartService: CartService

  ) {


  }

  ngOnInit() {

    this.shippingCosts = this.cartService.getShippingPrices();

  }

}
