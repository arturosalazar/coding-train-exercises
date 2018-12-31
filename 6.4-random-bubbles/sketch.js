/*
  Modification on program from Coding Train 6.4
  Create vibrating bubbles on the screen with classes
  
  Separate functionality onto different .js files
*/

let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200, 40);
  bubble2 = new Bubble(400, 200, 20);
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}
