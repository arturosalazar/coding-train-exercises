//Exercise for Coding Traing 2.5
//Goal: Use random to make dots appear all over canvas
//in different colors

var spot ={
	x:50,
  y:50
}

var colors = {
	r:200,
  g:0,
  b:0,
}

function setup() {
  createCanvas(600, 400);
  background (0);
}

//draw a bunch of dots in random places
function draw() {
  spot.x = random(0,width)
  spot.y = random(0,height)
  
  //use the spot.x value to determine the amount of red
  //more red the closer to the right the dot is
  colors.r=map(spot.x,0,width,100,255)
  
  //use the spot.y value to determine the amount of blue
  colors.b=map(spot.y,0,height,0,255)
  
  
  noStroke()
  fill(colors.r,colors.g,colors.b,100)
  ellipse(spot.x,spot.y,24,24)
}
