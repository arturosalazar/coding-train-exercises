
/*
  Exercise for Coding Train 3.4
  Goal - Create a rectangle, create checkHover function that determines if the mouse is hovering over rectangle
  Toggle between backgrounds only if mouse clicked while hovering over the rectangle
  
  Using a function to check if hovering will reduce duplicate code 
  by containing the check in one function for use in multiple areas
*/

let on = false;
let hoveringOnRect = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  checkHover();
  //determine background color using on variable
  if (on) {
    background(0, 255, 0)
  } else {
    background(0);
  }

  noFill()
  stroke(255)
  strokeWeight(4)

  //only work if mouse is within all 4 sides of the rectangle
  if (hoveringOnRect) {
    fill(255, 0, 200)
  }
  rectMode(CENTER)
  rect(300, 200, 100, 100)
}

//if mouse clicked while hovering, change background variable
function mousePressed() {
  if (hoveringOnRect) {
    on = !on
  }
}

function checkHover(){
	if (mouseX > 246 && mouseX < 354 && mouseY > 146 && mouseY < 254) {
    hoveringOnRect = true;
  }
  else hoveringOnRect = false;
}
