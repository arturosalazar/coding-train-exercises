//Exercise from Coding Train 2.3
//Use variables to change aspects of the circle
//animate, change size, change color etc

//Use objects to contain/group related variables

var circle = {
  x: 0,
  y: 0,
  size: 80
}

var colorRGB = {
  red: 250,
  green: 200,
  blue: 200,
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 0, 100);

  fill(colorRGB.red, colorRGB.green, colorRGB.blue, colorRGB.alpha)
  ellipse(circle.x, circle.y, circle.size)

  //change position
  circle.x += random(7);
  circle.y += random(5);

  //change size
  circle.size += 1;

  //change colors
  colorRGB.red += 1;
  colorRGB.green += 3;
  colorRGB.blue += 2;

  //reset all variables to 0 if go over size requirements
  if (circle.x > 600) circle.x = 0;
  if (circle.y > 400) circle.y = 0;
  if (circle.size > 100) circle.size = 0

  if (colorRGB.red > 255) colorRGB.red = 0;
  if (colorRGB.green > 255) colorRGB.green = 0;
  if (colorRGB.blue > 255) colorRGB.blue = 0;
}
