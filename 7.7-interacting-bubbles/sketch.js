/*
  Copy of the code from Coding Train 7.7 - Object communication part 2
  goal - recreate code from 7.7
  create a bubble class - within the bubble class, create a function to detect if 2 bubbles touch
  create multiple bubbles with the class
  change the background of a bubble if it touches another, remove change if they stop touching 
*/

let bubbles = []

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i<20; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10,50);
  	bubbles[i] = new Bubble(x,y,r); 
  }
}

function draw() {
  background(0);
	
  for (let b of bubbles){
    b.show();
    b.move();
    let overlapping = false;
    for (let other of bubbles) {
    //We check if b doesn't equal other on each for loop to 
    //avoid an object checking if it intersects itself
      if (b!==other&&b.intersects(other)){
        overlapping = true;
      }
	    
      if (overlapping) {
        b.changeColor(255);
      } else {
        b.changeColor(0);
      }
    }
  }
}

class Bubble {
  constructor(x, y, r=50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }
  intersects(other){
    let d = dist(this.x,this.y,other.x,other.y)
    return d<this.r+other.r
  }
  changeColor(bright){
    this.brightness = bright; 
  }
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness,100);
    ellipse(this.x, this.y, this.r * 2);
  }
}
