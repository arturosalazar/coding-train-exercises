/*
Exercise for Coding Train 5.3

Goal - create a function that converts a value from celsius to 
fahrenheit and returns the value.
Then, print the value to the screen

In this example, change 80 degrees C to F
*/

function setup() {
  var degreesF = celsiusToFahrenheit(80);
  print(degreesF);
}

function celsiusToFahrenheit(celsius){
  var fahrenheit = (celsius*9/5)+32
  return fahrenheit;
}

function draw() {
  background(220);
}
