/**
 * The sliderValue binding allows a slider to easily control an observable 
 */
ko.bindingHandlers.sliderValue = {
  // Init, runs on initialization 
  init: function (element, valueAccessor, allBindings, viewModel, bindingContext)  {
    if ( ko.isObservable(valueAccessor()) && (element instanceof HTMLInputElement) && (element.type === "range") )
    {
      // Add event listener to the slider, this will update the observable on input (just moving the slider),
      // Otherwise, you have to move the slider then release it for the value to change 
      element.addEventListener('input', function(){
        // Update the observable 
        if (ko.unwrap(valueAccessor()) != element.value)
        {
          valueAccessor()(element.value);
        
          // Trigger the change event, awesome fix that makes
          // changing a dropdown and a range slider function the same way
          element.dispatchEvent(new Event('change'));
        }
      }); // End event listener 
    }
    
  }, // End init 
  
  // Update, runs whenever observables for this binding change(and on initialization)
  update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    // Make sure the parameter passed is an observable 
    if ( ko.isObservable(valueAccessor()) && (element instanceof HTMLInputElement) && (element.type === "range") )
    {
      // Update the slider value (so if the value changes programatically, the slider will update)
      if (element.value != ko.unwrap(valueAccessor()))
      {
        element.value = ko.unwrap(valueAccessor());
        element.dispatchEvent(new Event('input'));
      }
    }
  } // End update 
  
}; // End sliderValue




/**
 * The sliderMax custom binding allows another observable to control the maximum value of a slider
 */
ko.bindingHandlers.sliderMax = {
  // Init, runs on initialization 
  init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    // Setup the initial maximum value if it is not an observable
    if ( !ko.isObservable(valueAccessor()) && (element instanceof HTMLInputElement) && (element.type === "range") )
    {
      element.max = valueAccessor(); // Not an observable 
    }
    
  }, // End init
  
  // Update, runs whenever observables for this binding change (and on initialization)
  update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    // Update function is only meant for observables
    if ( ko.isObservable(valueAccessor()) && (element instanceof HTMLInputElement) && (element.type === "range") )
    {
      // Make sure slider value is not too large
      if ( element.value > ko.unwrap(valueAccessor()) )
      {
        element.value = ko.unwrap(valueAccessor()); // Shrink value to the new maximum
        element.dispatchEvent(new Event('input')); // Dispatch input event
      }
      
      // Set new maximum value 
      element.max = ko.unwrap(valueAccessor());
    }
  } // End update 
  
}; // End sliderMax



/**
 * The sliderMin custom binding allows another observable to control the minimum value of a slider
 */
ko.bindingHandlers.sliderMin = {
  // Init, runs on initialization 
  init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    // Setup the initial minimum value if it is not an observable
    if ( !ko.isObservable(valueAccessor()) && (element instanceof HTMLInputElement) && (element.type === "range") )
    {
      element.min = valueAccessor(); // Not an observable 
    }
    
  }, // End init
  
  // Update, runs whenever observables for this binding change (and on initialization)
  update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    // Update function is only meant for observables
    if ( ko.isObservable(valueAccessor()) && (element instanceof HTMLInputElement) && (element.type === "range") )
    {
      // Make sure slider value is not too small
      if ( element.value < ko.unwrap(valueAccessor()) )
      {
        element.value = ko.unwrap(valueAccessor()); // Shrink value to the new maximum
        element.dispatchEvent(new Event('input')); // Dispatch input event
      }
      
      // Set new minimum value 
      element.min = ko.unwrap(valueAccessor());
    }
  } // End update 
  
}; // End sliderMin



/**
 * The sliderStep custom binding allows another observable to control the step value of a slider
 */
ko.bindingHandlers.sliderStep = {
  // Init, runs on initialization 
  init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    // Setup the initial step value if it is not an observable
    if ( !ko.isObservable(valueAccessor()) && (element instanceof HTMLInputElement) && (element.type === "range") )
    {
      element.step = valueAccessor(); // Not an observable 
    }
    
  }, // End init
  
  // Update, runs whenever observables for this binding change (and on initialization)
  update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    // Update function is only meant for observables
    if ( ko.isObservable(valueAccessor()) && (element instanceof HTMLInputElement) && (element.type === "range") )
    {
      // Set new step value 
      element.step = ko.unwrap(valueAccessor());
    }
  } // End update 
  
}; // End sliderStep
