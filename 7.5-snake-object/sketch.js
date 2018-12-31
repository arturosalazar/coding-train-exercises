/*
  Copy of the code from Coding Train 7.5 Removing Objects from Arrays
  Practice deleting objects from array

  Goal - create bubbles while dragging the mouse, delete
  old bubbles as new ones are created when you get over
  a certain number of bubbles

  makes a "snake"
*/

let bubbles = [];

function setup() {
  createCanvas(600, 400);
}

//when mouse pressed, run a function on the bubble
//function will check if the bubble is pressed
function mouseDragged() {
  let b = new Bubble(mouseX, mouseY, 50);
  bubbles.push(b);
}

function draw() {
  background(0);
  for (i = 0; i < bubbles.length; i++) {
    if (bubbles[i].hover(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
  if (bubbles.length > 10){
  	bubbles.splice(0,1);
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }
  changeColor(level) {
    this.brightness = level;
  }
  hover(px, py) {
    let d = dist(px, py, this.x, this.y);
    return d < this.r;
  }
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 100);
    ellipse(this.x, this.y, this.r * 2);
  }
}
