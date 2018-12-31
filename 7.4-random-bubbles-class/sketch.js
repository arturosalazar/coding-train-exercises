/*
  Copy of the code from Coding Train 7.4 UPDATED VER 10/17
  Practice mouse interaction

  Update so that the bubble's fill will turn off and on if that bubble is clicked
*/

let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

//when mouse pressed, run a function on the bubble
//function will check if the bubble is pressed
function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
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
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }
  //checks if bubble clicked, if so will display console msg
  clicked(px, py) {
    let d = dist(px, py, this.x, this.y)
    if (d < this.r) {
      if (this.brightness === 0) {
        this.brightness = 255;
      } else {
        this.brightness = 0;
      }
    }
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
