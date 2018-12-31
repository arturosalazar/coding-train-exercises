//Keys up and down will change which word is selected
function keyPressed() {

  //decriment up arrow (chose word higher in the list
  if (keyCode == 38) {
    position -= 1;
    if (position < 0) {
      position = 4;
    }
  }
  //increment down arrow (choose word lower on list
  if (keyCode == 40) {
    position += 1;
    if (position === 4) {
      position = 0;
    }
  }
}
