/*
  Coding Train 2.1 Exercise
  Make a paint program using mouseX and mouseY

  In addition, make a new color changing animation for the circle "brush"
*/

let circle = 1;
let currentColor = 0;


function setup() {
  createCanvas(400, 400);
  background(0, 0, 100);
}

//Draws shape at the mouse location
function draw() {
  fill(255, 204, 100, 100);
  noStroke();
    
  //check if drawing circle or rectangle
  if (circle === 1) {
    //changes colors if the paintbrush is a circle
    fill(currentColor*random(5), currentColor*random(5), currentColor*random(5),100);
    ellipse(mouseX, mouseY, 25);
  }
  else if (circle != 1) rect(mouseX, mouseY, 25, 25);
  
  //current color changes by the number of frames that have run
  currentColor = frameCount;
  if (frameCount > 255) frameCount = 0;

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
