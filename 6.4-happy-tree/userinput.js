//reset when hitting space bar
function keyPressed() {
  if (keyCode === 32) {
    tree1.x = random(0, 100);
    tree2.x = random(0, 100);
    tree3.x = random(0, 100);
    tree4.x = random(0, 100);
    tree5.x = random(0, 100);
    tree6.x = random(0, 100);


    tree1.y = random(0, 100);
    tree2.y = random(0, 100);
    tree3.y = random(0, 100);
    tree4.y = random(0, 100);
    tree5.y = random(0, 100);
    tree6.y = random(0, 100);
  }
}

//when the mouse is pressed, increase tree speed
//"sprint to finish"
function mousePressed() {
  tree1.speed += 2
  tree2.speed += 2
  tree3.speed += 2
  tree4.speed += 2
  tree5.speed += 2
  tree6.speed += 2
}