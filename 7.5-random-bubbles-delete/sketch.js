/*
  Copy of the code from Coding Train 7.5 Removing Objects from Arrays
  Practice deleting objects from array

  Goal - create bubbles that change in some way if hover & delete when clicked
*/

let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 100; i++) {
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
  for (let i = bubbles.length-1; i>=0 ; i--) {
    if (bubbles[i].hover(mouseX, mouseY)){
    	bubbles.splice(i,1);
    }
  }
}

function draw() {
  background(0);

  for (i = 0; i < bubbles.length; i++) {
    if (bubbles[i].hover(mouseX,mouseY)){
    	bubbles[i].changeGreen(255);
    } else {
    	bubbles[i].changeGreen(0);
    }    
    bubbles[i].move();
    bubbles[i].show();
  }
}


class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.green = 0;
  }
  changeGreen(level){
  	this.green = level;
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
    fill(0, this.green, 160, 100);
    ellipse(this.x, this.y, this.r * 2);
  }
}
