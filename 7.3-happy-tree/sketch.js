//Exercise for Coding Train 7.3 UPDATED 10/17 version

//Goal - using a previous project, auto generate objects

//use loops and classes to generate these trees

let trees = [];

function setup() {
  createCanvas(400, 400);
   
  for (i = 0; i<6; i++){
    let x = random (0,100);
    let y = random (0,100);
    let width = 30;
    let speed = random(1,5);
  	trees[i] = new HappyTree(x,y,width,speed);
  }

}

function draw() {
  background(250);
  for (i=0;i<trees.length;i++){
  	trees[i].drawTree();
    trees[i].move();
  }
}