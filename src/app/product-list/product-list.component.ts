import { Component } from '@angular/core';

import { products } from '../products';

/* Notice the @Component() decorator. This indicates that the following class is a component.
It provides metadata about the component, including its selector, templates, and styles.
The selector identifies the component. The selector is the name you give the Angular component
when it is rendered as an HTML element on the page. By convention, Angular component selectors begin with the prefix app-, followed by the component name.
The template and style filenames reference the HTML and CSS files that StackBlitz generates.
The component definition also exports the class, ProductAlertsComponent, which handles functionality
 for the component. */

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}

