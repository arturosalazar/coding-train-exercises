/*
  Exercise for Coding Train 4.1
  Modification of previous version of exercise
  Use a for loop to create circles across the canvas (instead of while)
  Use map to make the colors change depending on where the shape is created across the canvas
  Make every other shape a rectangle
*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
 	noStroke()
  let blue = 0;
  for (x = 0; x <= width; x = x + 50) {
    blue = map(x,0,width,0,255);
    fill(255,0,blue);
    if(x%100==50){
			rectMode(CENTER)
      rect(x,200,25,25)
    }
    else{
      ellipse(x, 200, 25, 25);
    }
  }
}
