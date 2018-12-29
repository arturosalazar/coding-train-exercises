/*
  Exercise for Coding Train 3.2
  Goal - make a ball bounce that bounces off any side using if statements
  Allow the ball to move along the x and y planes
*/

//x and y locations of the circle
let circleLoc = {
	x:0,
  y:200
}

//speed at which the circle moves through x and y
let speed = {
	x:3,
  y:-3
}

let colors = {
	r:255,
  g:255,
  b:255,
  a:100,
}

function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  noFill();
  stroke(colors.r,colors.g,colors.b,colors.a);
  strokeWeight(40);
  ellipse (circleLoc.x,circleLoc.y,100,100);

  //if statements that let the circles bounce off each side
  //bounce top
  if (circleLoc.y<0) {
  	speed.y = -speed.y;
    colors.r = random(100,255);
  }
  
  //bounce right
  if (circleLoc.x>width){
  	speed.x = -speed.x;
    colors.g = random(100,255);
  }
	
  //bounce off bottom side
  if (circleLoc.y>height){
  	speed.y = -speed.y;
    colors.b = random(100,255);
  }
  
  //bounce off left side
  //include an or statement so it'll also bounce off the mouseX
  //lets user interact with the circle
  if (circleLoc.x<0||circleLoc.x<mouseX){
  	speed.x = -speed.x;
    colors.a = random(100,255);
  }
  
  //animation for moving circle
  circleLoc.x = circleLoc.x + speed.x
  circleLoc.y = circleLoc.y + speed.y
  
}

function mousePressed(){
	speed.x = random(0,8);
  speed.y = random(0,8);
}
