
/*
  Exercise for Coding Train 3.4
  Goal - Create a rectangle, use if statements to highlight
  rectangle when hovering mouse over it
  Use mouseIsPressed variable to change the background only if
  the mouse is hovering over the rectangle
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
  if (mouseX > 246 && mouseX < 354 && mouseY > 146 && mouseY < 254) {
    if(mouseIsPressed){
      background(0,255,0)
    }
    fill(255, 0, 0)
  }

  rectMode(CENTER)
  rect(300, 200, 100, 100)
}
