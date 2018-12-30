/*
  Exercise for Coding Train 6.4

  Goal - update happy trees exercise
  
  Place classes and user input functions in separate .js files
  
  NOTE: The key to these files working is to indicate them as src files in index.html
*/
let tree1,tree2,tree3,tree4,tree5,tree6;

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
