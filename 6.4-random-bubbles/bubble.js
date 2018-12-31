class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(255,0,100,50);
    ellipse(this.x, this.y, this.r * 2);
  }
}