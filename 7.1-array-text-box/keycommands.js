//mouse click to increment
function mousePressed() {
  position += 1;
  if (position === 4) {
    position = 0;
  }
}

function keyPressed() {
  //spacebar to decriment
  if (keyCode == 32) {
    sizeNum = Math.floor(random(0, 3));
    position -= 1;
    if (position < 0) {
      position = 3;
    }
  }
  //right arrow to increment
  if (keyCode == 39) {
    position += 1;
    if (position === 4) {
      position = 0;
    }
  }
  //left arrow to decriment
  if (keyCode == 37) {
    position -= 1;
    if (position < 0) {
      position = 3;
    }
  }
}
