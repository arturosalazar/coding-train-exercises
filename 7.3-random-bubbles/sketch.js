/*
  Copy of the code from Coding Train 7.3
  Practice using for loops to create objects in arrays
  
  A demonstration of the ability to loop to create new objects in an array
*/

let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i=0;i<4000;i++) {
    bubbles[i] = {
      x: random(0, width),
      y: random(0, height),
      move: function() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
      },
      show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 1);
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
