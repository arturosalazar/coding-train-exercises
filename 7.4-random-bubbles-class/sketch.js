/*
  Modification of Copy of the code from Coding Train 7.4 UPDATED VER 10/17
  Practice mouse interaction

  Update so that when a bubble is clicked it will cycle through various shades of red
  The color will also change when mouse hovers over a circle
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
    //will continually check if the mouse is being hovered over 
    bubbles[i].hover(mouseX,mouseY);
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.colors = [0, 64, 127, 255];
    this.colorsPosition = 0;
    this.red = 0;
    this.green = 0;
  }
  //checks if bubble clicked, if so will change color
  clicked(px, py) {
    let d = dist(px, py, this.x, this.y)
    if (d < this.r) {
      this.colorsPosition += 1;
      if (this.colorsPosition === this.colors.length) {
        this.colorsPosition = 0;
      }
    }
  }

  hover(px, py) {
    let d = dist(px, py, this.x, this.y)
    if (d < this.r) {
        this.green = 255;
      } else {
        this.green = 0;
      }
  }
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    this.red = this.colors[this.colorsPosition];
    fill(this.red, this.green, 160, 100);
    ellipse(this.x, this.y, this.r * 2);
  }
}
