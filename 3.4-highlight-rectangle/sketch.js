
/*
  Exercise for Coding Train 3.4
  Goal - Create a rectangle, use if statements to highlight
  rectangle when hovering mouse over it
  Use mousePressed function and on variable to toggle between backgrounds
  only if mouse clicked while hovering over the rectangle
*/

let on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  //determine background color using on variable
  if (on) {
    background(0, 255, 0)
  } else {
    background(0);
  }

  noFill()
  stroke(255)
  strokeWeight(4)

  //only highlight rectangle if mouse is within all 4 sides of the rectangle
  if (mouseX > 246 && mouseX < 354 && mouseY > 146 && mouseY < 254) {
    fill(255, 0, 200)
  }
  rectMode(CENTER)
  rect(300, 200, 100, 100)
}

//if mouse clicked while hovering, change on variable
function mousePressed() {
  if (mouseX > 246 && mouseX < 354 && mouseY > 146 && mouseY < 254) {
    on = !on
  }
}
