//Mod to create new trees when mouse is pressed, and to generate a whole new bunch when spacebar hit

//reset when hitting space bar
function keyPressed() {
  if (keyCode === 32) {
    for (i = 0; i < 60 ; i++) {
      let x = random (0,200);
    	let y = random (0,150);
    	let width = 30;
    	let speed = random(2,10);
  		let tree = new HappyTree(x,y,width,speed);
      trees.push(tree); 
    } 
  }
  if (keyCode === 38) {
    for (i = 0; i < trees.length; i++) {
      trees[i].speed += 2;
    }
  }
}


function mousePressed() {
  let speed = random (2,10)
	let tree = new HappyTree (mouseX,mouseY,30,speed)
  trees.push(tree);
}
