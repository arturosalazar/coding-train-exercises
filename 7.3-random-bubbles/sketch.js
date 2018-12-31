/*
  Copy of the code from Coding Train 7.3
  Practice using for loops to create objects in arrays
  
  A demonstration of the ability to loop to create new objects in an array
  
  slight modification to create a gradient of colors based on the circle's location
*/

let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i=0;i<400;i++) {
    bubbles[i] = {
      x: random(0, width),
      y: random(0, height),
      blue:0,
      green:0,
      move: function() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
      },
      show() {
      	//create a gradient of colors based on location
      	this.blue = map(this.x,0,width,0,255);
      	this.green = map(this.y,0,height,0,255);
        stroke(255,this.green,this.blue);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 25);
      }
    }
  }
}

function draw() {
  background(0);
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}
