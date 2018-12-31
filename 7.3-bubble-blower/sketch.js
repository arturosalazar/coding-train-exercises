/*
  Modification of Copy of the code from Coding Train 7.3 UPDATED VER 10/17
  Practice using for loops to create objects in arrays utilizing Class definitions

  Goal - create bubbles that errupt from a "blower" when clicking or dragging the mouse
  
  Modify to control where the bubbles "blow" based on mouse position when clicking/dragging
*/

let bubbles = [];

function setup() {
  createCanvas(600, 400);
}

function mousePressed() {
  let r = random(10, 40);
  let b = new Bubble(130, 277, r);
  bubbles.push(b);
}

function mouseDragged() {
  let r = random(10, 40);
  let b = new Bubble(130, 277, r);
  bubbles.push(b);
}

function draw() {
  background(0);
  
  stroke(0,255,0)
  noFill()
  ellipse(130,277,80)

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
    //convert mouseY into up and down direction for bubble move
    this.direction = map(mouseY,0,height,-3,1.5);
  }
  move() {
    this.x = this.x + random(-1, 5);
 
    //use converted mouseY val to change the direction of bubble
    //move up and down
    this.y = this.y + this.direction;
  }
  show() {
    stroke(0, 255, 255,20);
    strokeWeight(4);
    fill(0, 255, 255,10);
    ellipse(this.x, this.y, this.r * 2);
  }
}
