/*
  Copy of the code from Coding Train 7.3 UPDATED VER 10/17
  Practice using for loops to create objects in arrays utilizing Class definitions
  
  Goal - create bubbles using class definitions and "new" keyword 
  Create circles on mouse click
*/
let bubbles = [];

function setup() {
  createCanvas(600, 400);
}

//when mouse clicked, create a new object in a variable and push that variable to the array
function mousePressed() {
  let r = random(10, 40);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background(0);

  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}


class Bubble {
  constructor(x, y, r) {
    this.x = x
    this.y = y
    this.r = r
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}
