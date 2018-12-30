/*
  Exercise for Coding Train 5.2
  Goal - practice creating and using functions with arguments

  create a pattern generated by a function (using arguments)
  call the function multiple times
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  happyTree(100,100);
  happyTree(150,150);
  happyTree(300,130);
}

function happyTree (x,y) {
  fill (103,84,78);
  //create trunk of tree
  rect(x-10,y,20,100);
  noStroke();
  fill(34,139,34)
  
  //create each of the 3 triangles that make up the tree
  triangle(x,y-60,x+30,y-20,x-30,y-20);
  triangle(x,y-35,x+50,y+20,x-50,y+20);
  triangle(x,y,x+70,y+65,x-70,y+65);
}

