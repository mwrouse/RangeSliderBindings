/**
 * Ranger Slider Bindings for Knockout.js 
 * Author: Michael Rouse 
 */
define(['knockout'], function (ko) {
  'use strict';
  /**
   * The sliderValue binding allows a slider to easily control an observable 
   */
  ko.bindingHandlers.sliderValue = {
    // Init, runs on initialization 
    init: function ( element, valueAccessor, allBindings, viewModel, bindingContext ) {
      if ( ko.isObservable( valueAccessor() ) && ( element instanceof HTMLInputElement) && ( element.type === "range" ) )
      {
        // Set initial slider value (for page load)
        element.value = ko.unwrap( valueAccessor() );
        
        // Add event listener to the slider, this will update the observable on input (just moving the slider),
        // Otherwise, you have to move the slider then release it for the value to change 
        element.addEventListener( 'input', function(){
          // Update the observable 
          valueAccessor()( element.value );
          
          // Trigger the change event, now you can use the change event listener, similar to a select box 
          element.dispatchEvent( new Event( 'change' ) );
        } ); // End event listener 
        
      }
    }, // End init 
    
    // Update, runs whenever observables for this binding change(and on initialization)
    update: function ( element, valueAccessor, allBindings, viewModel, bindingContext ) {
      // Make sure the parameter passed is an observable 
      if ( ko.isObservable( valueAccessor() ) && ( element instanceof HTMLInputElement) && ( element.type === "range" ) )
      {
        // Update the slider value (so if the value changes programatically, the slider will update)
        element.value = ko.unwrap( valueAccessor() );
      }
    } // End update 
    
  };
  
  
  
  
  /**
   * The sliderMax custom binding allows another observable to control the maximum value of a slider
   */
  ko.bindingHandlers.sliderMax = {
    // Init, runs on initialization 
    init: function ( element, valueAccessor, allBindings, viewModel, bindingContext ) {
      // Setup the initial maximum value if it is not an observable
      if ( !ko.isObservable( valueAccessor() ) && ( element instanceof HTMLInputElement) && ( element.type === "range" ) )
      {
        element.max = valueAccessor(); // Not an observable 
      }
      
    }, // End init
    
    // Update, runs whenever observables for this binding change (and on initialization)
    update: function ( element, valueAccessor, allBindings, viewModel, bindingContext ) {
      // Update function is only meant for observables
      if ( ko.isObservable( valueAccessor() ) && ( element instanceof HTMLInputElement) && ( element.type === "range" ) )
      {
        // Make sure slider value is not too large
        if ( element.value > ko.unwrap( valueAccessor() ) )
        {
          element.value = ko.unwrap( valueAccessor() ); // Shrink value to the new maximum
          element.dispatchEvent( new Event( 'input' ) ); // Dispatch input event
        }
        
        // Set new maximum value 
        element.max = ko.unwrap( valueAccessor() );
      }
    } // End update 
    
  };
});
