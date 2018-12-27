/*
  Exercise from Coding Train 2.2
  Use variables to change aspects of the circle animate, change size, change color etc
*/

let circleX = 0;
let circleY = 0;
let redColor = 250;
let greenColor = 200;
let blueColor = 200;
let circleSize = 80;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 0, 100);

  fill(redColor, greenColor, blueColor)
  ellipse(circleX, circleY, circleSize)

  //change position
  circleX = circleX + random(7);
  circleY = circleY + random(5);

  //change size
  circleSize = circleSize + 1;

  //change colors
  redColor = redColor + 1;
  greenColor = greenColor + 3;
  blueColor = blueColor + 2;

  //reset all variables to 0 if go over size requirements
  if (circleX > 600) circleX = 0;
  if (circleY > 400) circleY = 0;
  if (circleSize > 100) circleSize = 0

  if (redColor > 255) redColor = 0;
  if (greenColor > 255) greenColor = 0;
  if (blueColor > 255) blueColor = 0;
}
