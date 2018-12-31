/*
  Exercise for Coding Train 7.1

  Goal - recreate the demonstration from the youtube video
  
  Create an array with strings. Display one of the string values to the screen
  
  Iterate over the array values (circling to the first item after the last) when the mouse is clicked
*/

let words = ["swing dancing","lindy hop","balboa","charleston"]

let position = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  textSize(32);
  text(words[position],12,200);
}

function mousePressed(){
  position +=1;
  if (position === 4){
  	position = 0;
  }
	
}
