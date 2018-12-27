//Exercise based on Coding Train 3.1
//Goal: To use if() conditional statement
//to control a central shape based on
//the mouse position

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke('white')
  noFill()
  
  //circle
  if (mouseX<200){
  	ellipse(300,200,100);
  }
  
  //rectangle
  if (mouseX>200&&mouseX<400){
  	rectMode(CENTER);
    rect(300,200,100,100);
  }
  
  //triangle
  if (mouseX>400&&mouseX<600){
  	triangle(300,150,250,250,350,250)
  }
 
}
