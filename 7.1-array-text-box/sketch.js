/*
  Exercise for Coding Train 7.1
  Goal - recreate the demonstration from the youtube video
  
  Create an array with strings. Display one of the string values to the screen
  
  Iterate over the array values (circling to the first item after the last) when the mouse is clicked
  
  Use spacebar/mouse click and left arrow/right arrow to increment and decriment through array
  
  Use another .js file to contain the key commands
*/

let words = ["swing dancing", "lindy hop", "balboa", "charleston"]

let size = [32, 12, 60, 40]

let sizeNum = 0;

let position = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255)
  textSize(size[sizeNum])
  text(words[position], 12, 200);
}
