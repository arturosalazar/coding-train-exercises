//reset when hitting space bar
function keyPressed() {
  if (keyCode === 32) {
    for (i = 0; i < trees.length; i++) {
      trees[i].x = random(0,100)
      trees[i].y = random(0,100)
      trees[i].speed = random(1,5);
    }
  }
}

//when the mouse is pressed, increase tree speed
//"sprint to finish"
function mousePressed() {
  for (i = 0; i < trees.length; i++) {
    trees[i].speed += 2;
  }
}