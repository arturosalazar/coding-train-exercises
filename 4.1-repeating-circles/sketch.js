/*
  Exercise for Coding Train 4.1
  Modification of previous version of exercise
  Use a for loop to create circles across the canvas (instead of while)
*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255)
  for (x = 0; x <= width; x = x + 50) {
    ellipse(x, 200, 25, 25);
  }
}
