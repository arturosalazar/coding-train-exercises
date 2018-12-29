/*
  Exercise for Coding Train 3.2
  Goal - make the ball bounce off each
  side using if statements
*/

let x = 0;
let y = 200;

let speedX = 3; 
// let speedY = -3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse (x,y,100,100);

  if (x>width) {
  	speedX = -speedX  
  }
  
  if (x<0) {
  	speedX = -speedX  
  }
  
  x = x + speedX
  
  
}
