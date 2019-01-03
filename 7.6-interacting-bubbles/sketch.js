/*
  Modification of code from Coding Train 7.6 - Object communication part 1 

  goal - create a bubble class - within the bubble class, create a function to detect if 2 bubbles touch
  create multiple bubbles with the class

  change the background of the bubble if the two bubbles touch
*/
//CODE DOES NOT WORK RIGHT
//they are constantly lit. Why? Because the 
//code also checks each bubble against itself
//so they are always highlighted. 
//not sure how to fix...right now...

let bubbles = []

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i<20; i++){
    bubbles[i] = new Bubble(random(width),random(height),25); 
  }
}

function draw() {
  background(0);
	
  for (let i = 0; i<bubbles.length; i++){
    bubbles[i].show();
    bubbles[i].move();
    for (let g = 0; g<bubbles.length; g++){
      if (bubbles[i].intersects(bubbles[g])){
        bubbles[i].brightness = 255;  
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
