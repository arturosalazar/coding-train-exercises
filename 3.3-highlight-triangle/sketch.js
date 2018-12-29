/*
  Exercise for Coding Train 3.3
  Goal - Create a rectangle, use if statements to highlight
  rectangle when hovering mouse over it
*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  noFill()
  stroke(255)
  strokeWeight(4)

  //only work if mouse is within all 4 sides of the rectangle
  //NOTE: added a 4 px buffer to each side so highlights as
  //     soon as mouse touches the border of the rectangle
  //     Just an extra addition I wanted, not needed
  if (mouseX > 246 && mouseX < 354 && mouseY > 146 && mouseY < 254) {
    fill(255, 0, 0)
  }

  rectMode(CENTER)
  rect(300, 200, 100, 100)
}
