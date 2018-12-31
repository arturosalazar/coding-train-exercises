/*
  Exercise for Coding Train 7.1
  Goal - recreate the demonstration from the youtube video
  
  Create an array with strings. Loop over the words array to display all of the words on the string
  
  Use the position variable to determine which word should be highlighted
  
  keycommands.js provideds functionality so that up and down arrows change which position is selected
*/

let words = ["swing dancing", "lindy hop", "charleston","balboa"]

let size = [60, 50, 40, 30]

let position = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255)
  for (let i = 0; i<words.length; i++){
    if (position == i) fill(255,255,0)
    else fill(255)
    textSize(size[i])
  	text(words[i], 12, 60+i*100);    
  }
}

