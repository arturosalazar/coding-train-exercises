/*
  Copy of the code from Coding Train 7.7 - Object communication part 2
  goal - recreate code from 7.7
  create a bubble class - within the bubble class, create a function to detect if 2 bubbles touch
  create two bubbles with the class
  change the background if the two bubbles touch

  copy up to 11:03 - the bubbles will highlight when they touch, but don't clear when they stop touching
*/

let bubbles = []

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i<10; i++){
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
    for (let other of bubbles) {
    	if (b!==other&&b.intersects(other)){
				b.changeColor(255);
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
    let d = dist(this.x,this.y,other.x,other.y);
    return d<this.r+other.r;
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
