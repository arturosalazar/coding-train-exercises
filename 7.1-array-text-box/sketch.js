//Exercise for Coding Train 7.1 - What is an array

//Goal - create own array to use on a different parameter

//try to make the parameter random

let words = ["swing dancing", "lindy hop", "balboa", "charleston"]

let size = [32, 12, 60, 40]

let sizeNum = 0;

let position = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255)
  textSize(size[sizeNum])
  text(words[position], 12, 200);
}

