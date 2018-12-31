/*
  Copy of the code from Coding Train 7.3 UPDATED VER 10/17
  Practice using for loops to create objects in arrays utilizing Class definitions
  
  Goal - create bubbles using class definitions and "new" keyword  
*/

let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 100; i++) {
    bubbles[i] = new Bubble()
  }
}

function draw() {
  background(0);

  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}


class Bubble {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(10, 40);
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
      stroke(255);
      strokeWeight(4);
      noFill();
      ellipse(this.x, this.y, this.r*2);
    }
}
