/*
  Exercise for Coding Train 6.3

  Goal - add parameters to constructor so that arguments can be passed to each object
*/

let tree1,tree2,tree3,tree4,tree5,tree6;

class HappyTree {
  constructor(x,y,wide,speed) {
    this.x = x;
    this.y = y;
    this.wide = wide;
    this.speed = speed;
  }
  drawTree() {
    fill(103, 84, 78);
    rect(this.x - 10, this.y, 20, 100);
    noStroke();
    fill(34, 139, 34)
    triangle(this.x, this.y - 60, this.x + this.wide, this.y - 20, this.x - this.wide, this.y - 20);
    triangle(this.x, this.y - 35, this.x + 20 + this.wide, this.y + 20, this.x - 20 - this.wide, this.y + 20);
    triangle(this.x, this.y, this.x + 40 + this.wide, this.y + 65, this.x - 40 - this.wide, this.y + 65);
  }
  move(){
  	this.x = this.x + random(this.speed)
  	this.y = this.y + random(this.speed)
  }
}

function setup() {
  createCanvas(400, 400);
  tree1 = new HappyTree(random(0,100),random(0,100),30,random(1,5));
  tree2 = new HappyTree(random(0,100),random(0,100),30,random(1,5));
  tree3 = new HappyTree(random(0,100),random(0,100),30,random(1,5));
  tree4 = new HappyTree(random(0,100),random(0,100),30,random(1,5));
  tree5 = new HappyTree(random(0,100),random(0,100),30,random(1,5));
  tree6 = new HappyTree(random(0,100),random(0,100),30,random(1,5));
}

function draw() {
  background(250);
  tree1.drawTree();
  tree2.drawTree();
  tree3.drawTree();
  tree4.drawTree();
  tree5.drawTree();
  tree6.drawTree();

  tree1.move();
  tree2.move();
  tree3.move();
  tree4.move();
  tree5.move();
  tree6.move();
}
