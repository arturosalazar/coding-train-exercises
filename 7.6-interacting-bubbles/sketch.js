//Copy of the code from Coding Train 7.6 
//Object communication part 1 

//goal - recreate code from 7.6
// 2 bubbles
// create function in bubble class to detect
// if 2 bubbles touch

// if so, make them do something 

let bubble1
let bubble2

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200,300);
  bubble2 = new Bubble(300,300,100);
}


function draw() {
  background(0);
	
  if (bubble1.intersects(bubble2)){
   background(100,0,250); 
  }
  
  
  bubble1.show();
  bubble2.show();
  bubble1.move();
  
  bubble2.x = mouseX;
  bubble2.y = mouseY;
}


class Bubble {
  constructor(x, y, r=50) {
    this.x = x;
    this.y = y;
    this.r = r;
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
    noFill()
    ellipse(this.x, this.y, this.r * 2);
  }
}
