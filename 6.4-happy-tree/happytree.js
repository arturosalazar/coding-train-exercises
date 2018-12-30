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
