import { InputedFormInformation } from './../inputed-form-information';
import { Component, OnInit } from '@angular/core';

// Templte driven form is pretty simple, a standard html form with ng directives added to bind the data fields to the ,model object, which has properties of the same name

// We have to import it, to be able to use it here
// A service is a class that is used with dependency injection, so that other files can use it
// We're importing it so that we can display all the items
// A service has to be "exported" for it to be "imported"
import { CartService } from './../cart.service';


// import { inputedFormInformation } from '../inputed-form-information';

//The FormBuilder service is provided by the ReactiveFormsModule, which is already defined in the AppModule you modified previously (in app.module.ts).
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  submitted = false;

  // model = new inputedFormInformation('Jane Doe', '123 Main St', 'Minato Ku Tokyoa', 'Japan');

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
      address: '',
      custDestNameLine1: '',
      custDestNameLine2: '',
      custDestAddressLine1: '',
      custDestAddressLine2: '',
      custDestAddressLine3: '',
      custDestAddressLine4: '',
      custDestAddressLine5: ''

    });

  }

  onSubmit(customerData) {

    //Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

  }

 // TODO: Remove this when we're done
 // get diagnostic() { return JSON.stringify(this.model); }

}
