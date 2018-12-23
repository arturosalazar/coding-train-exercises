/*
Exercise from Coding Train 2.1 updated with 2.5 tools
Make a paint program using mouseX and mouseY
In addition, make a new color changing animation for the circle "brush"

Use the random() function to update the color of the brush
*/

let circle = 1;

//use object to hold colors
let currentColor = {
	r:250,
  g:0,
  b:20
}

function setup() {
  createCanvas(400, 400);
  background(0, 0, 100);
}

//Draws shape at the mouse location
function draw() {

  //randomize the colors
  currentColor.r=random(0,255)
  currentColor.g=random(0,255)
  currentColor.b=random(0,255)
  noStroke();
    
  //check if drawing circle or rectangle
  if (circle === 1) {
    //changes colors if the paintbrush is a circle
    fill(currentColor.r, currentColor.g, currentColor.b,100);
    ellipse(mouseX, mouseY, 25);
  }
  else if (circle !=1){
  	fill(currentColor.r, 204, 100,100);
  	noStroke()
		rect(mouseX,mouseY,25,25)  
  }
}

//Clear background and change shape when mouse is clicked
function mousePressed() {
  background(0, 0, 100)
  if (circle == 1) {
    return circle = 0;
  }
  if (circle !== 1) {
    return circle = 1;
  }
  console.log(circle)
}
