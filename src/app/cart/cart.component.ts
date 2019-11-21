import { Component, OnInit } from '@angular/core';
// We have to import it, to be able to use it here
// A service is a class that is used with dependency injection, so that other files can use it
// We're importing it so that we can display all the items
// A service has to be "exported" for it to be "imported"
import { CartService } from './../cart.service';

//The FormBuilder service is provided by the ReactiveFormsModule, which is already defined in the AppModule you modified previously (in app.module.ts).
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items;
  // Define the checkoutForm property to store the form model
  checkoutForm;

  constructor(

    private cartService: CartService,
    //inject the FormBuilder service
    private formBuilder: FormBuilder,

  ) {

    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

  }

  onSubmit(customerData) {

    //Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

  }

}
