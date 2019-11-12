import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';  /** Set up the new product alerts component to receive a product as input.  We added this to import the phone prices */
import { Output, EventEmitter } from '@angular/core'; /** We have added this so that your "notify-me" button can actually do something */

/* 

 This indicates that the following class is a component. It provides metadata about the component,
 * including its templates, styles, and a selector. The selector is used to identify the component. The selector
 * is the name you give the Angular component when it is rendered as an HTML element on the page.
By convention, Angular component selectors begin with the prefix app-, followed by the component name.
The template and style filenames. These reference the other two files generated for you. */
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})


/*  In the ProductAlertsComponent class definition, define a property named product with an @Input() decorator.
The @Input() decorator indicates that the property value passes in from the component's parent,
the product list component.  */


 /* In the component class, define a property named notify with an @Output() decorator and an 
 instance of EventEmitter(). This allows the product alert component to emit an event when the 
 value of the notify property changes. */

export class ProductAlertsComponent implements OnInit {

  /** The Input decorator indicates that the property value will be passed in from the component's parent (in this case, the product list component). */
  @Input() product;
  @Output() notify = new EventEmitter();     /** This is added to let our notify-me button actually do something */
  constructor() { }

  ngOnInit() {
  }

}
