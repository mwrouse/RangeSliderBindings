# Range Slider Bindings
Custom bindings to better handle range sliders using Knockout.js

## Syntax
This library contains four Knockout.js custom bindings, sliderValue, sliderMax, sliderMin, and sliderStep. 

All allow sliders to easily interface with custom bindings, and will update if that custom binding is changed programatically.

### sliderValue 
The sliderValue custom binding allows you to easily control a Knockout.js observable using a range slider. 
Simply apply the custom binding like so: 
```html 
<input type="range" data-bind="sliderValue: mySliderValue">
```
This input slider will control your ViewModel.mySliderValue observable.

### sliderMax
The sliderMax custom binding is a little more specific, it allows you to have an observable control the maximum value of the range slider. Or have a fixed value be the maximum value. 
```html
<input type="range" data-bind="sliderValue: mySliderValue, sliderMax: anotherSliderValue">
```
This slider controls the ViewModel.myOtherSliderValue observable, and the slider defined above controls the maximum value that this slider can be.

### sliderMin
sliderMin, similar to sliderMax (who would have thought) allows you to have an observable, or static value, control the minimum value of a range slider. 
```html
<input type="range" data-bind="sliderValue: mySliderValue, sliderMin: anotherSliderValue">
```

### sliderStep
Last, but not least, sliderStep allows you to have an observable, or fixed value, control the step interval a slider takes. 
```html
<input type="range" data-bind="sliderValue: mySliderValue, sliderStep: anotherSliderValue">
```

## Example
An example is available on [CodePen](http://codepen.io/mwrouse/pen/wWwvmN)
