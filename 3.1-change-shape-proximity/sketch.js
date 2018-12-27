/*
Exercise for Coding Train 3.1
Goal: Use if() conditional statement to control a central shape 
based on the mouse's proximity to shape
*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke('white')
  noFill()
  
  //circle if mouse to the left of center
  if (mouseX<200){
  	ellipse(300,200,100);
  }
  
  //rectangle if mouse is at center/on the shape
  if (mouseX>200&&mouseX<400){
  	rectMode(CENTER);
    rect(300,200,100,100);
  }
  
  //triangle if mouse to the right of center
  if (mouseX>400&&mouseX<600){
  	triangle(300,150,250,250,350,250)
  }
 
}
