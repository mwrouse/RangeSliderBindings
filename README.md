# Range Slider Bindings
Custom bindings to better handle range sliders using Knockout.js

## Syntax
This library contains two Knockout.js custom bindings, sliderValue and sliderMax.

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
<input type="range" data-bind="sliderValue: myOtherSliderValue, sliderMax: mySliderValue">
```
This slider controls the ViewModel.myOtherSliderValue observable, and the slider defined above controls the maximum value that this slider can be.

## Example
An example is available on [CodePen](http://codepen.io/mwrouse/pen/wWwvmN)
