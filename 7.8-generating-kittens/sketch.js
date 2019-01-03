//Exercise for Coding Train 7.8 - Objects
//and images

//using the previous bubble object, generate
//objects that will display images

//display images randomly and allow
//user to click an image to change it

//This is used to create the objects to disp image
let bubbles = [];

//This is just used to hold on to the images
let kittens = [];

function preload(){
  for (let i = 0; i < 5; i++){
    kittens[i] = loadImage(`kittens/kitten${i}.jpg`);
  }
}


function setup() {
  createCanvas(600, 400);
  for (let i = 0; i<20; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10,50);
    let kitten = random(kittens);
  	b = new Bubble(x,y,r, kitten);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
	
  for (let i = 0; i<bubbles.length; i++){
  	bubbles[i].show();
    bubbles[i].move();
    
    // for (let j = 0; j<bubbles.length; j++) {
  	// //We check if b doesn't equal other to 
    // //avoid an object checking if it 
    // //intersects itself
    // 	if (bubbles[i]!==bubbles[j]&&bubbles[i].intersects(bubbles[j])){
		// 		bubbles[i].overlapping = true;
    //   }
    // if (bubbles[i].overlapping) {
    // 	bubbles[i].changeColor(255);
    // } else {
    //   bubbles[i].changeColor(0);
    // }
    //}
  }
  
}


class Bubble {
  constructor(x, y, r, kitten) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.kitten = kitten;
  }

	intersects(other){
    let d = dist(this.x,this.y,other.x,other.y)
    return d<this.r+other.r
  }

  clicked(px, py) {
   if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
     this.kitten = random(kittens);
   }
 }


  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    image(this.kitten, this.x, this.y, this.r, this.r);
  }
}