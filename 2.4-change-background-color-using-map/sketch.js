/*
  Exercise from Coding Train 2.4
  use p5.js's map() function to control background color and circle color
  map() rgb values to the mouseX and mouseY locations
*/

var colors = {
	r:0,
  g:255,
  b:200
}

var colorsCircle = {
	r:0,
  g:255,
  b:200
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  //change background based on mouse position
  colors.r = map(mouseX,0,600,0,255);
  colors.g = map(mouseX,0,600,255,0);
  colors.b = map(mouseY,0,400,0,255);
  
  background(colors.r,colors.g,colors.b);
  
  //change fill based on mouse position, use opposite of background
  colorsCircle.r = map(mouseX,0,600,255,0);
  colorsCircle.g = map(mouseX,0,600,0,255);
  colorsCircle.b = map(mouseY,0,400,255,0);
  fill(colorsCircle.r,colorsCircle.g,colorsCircle.b)
  ellipse(mouseX,mouseY,80)
}
