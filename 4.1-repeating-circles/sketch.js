/*
  Exercise for Coding Train 4.1
  Use a while loop to create circles across the canvas
/*

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255)
  let x = 0;
  while (x <= width) {
    ellipse(x, 200, 25, 25);
    x = x + 50;
  }
}
