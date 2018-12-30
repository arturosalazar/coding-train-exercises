/*
  Exercise for Coding Train 6.2

  Goal - take a previous coding train project update it so it uses classes

  use the fact that it has classes to call multiple instances
*/
let tree1, tree2;

class HappyTree {
  //constructor function, always necessary in a class - use to "set up" the object created with this class
  constructor() {
    //what does this refer to here? In a constructor, this refers to the object created with this constructor
    //(at the moment it doesn't exist
    this.x = 100;
    this.y = 100;
    this.wide = 30;
  }
  //functions declared in HappyTree class will be avail for objects created with this constructor
  //can be called later
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
  	this.x = this.x + random(-5,5)
  	this.y = this.y + random(-5,5)
  }
  
  


}

function setup() {
  createCanvas(400, 400);
  //'new' keyword to construct a new object instance of an object as defined by class HappyTree
  tree1 = new HappyTree();
  tree2 = new HappyTree();
}

function draw() {
  background(250);
  tree1.drawTree();
  tree2.drawTree();

  tree1.move();
  tree2.move();
  
}
