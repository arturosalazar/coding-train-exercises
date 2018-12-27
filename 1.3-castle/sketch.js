/*
  Exercise for  Coding Train 1.3
  Goal - create a picture using some of the functions/features of p5.js
*/

function setup() {
  createCanvas(600, 340);
}

function draw() {
  background(99, 129, 247);

  rectMode(CENTER);
  stroke(90)
  fill(238, 96, 44)

  //To create the castle, I had to make the 2nd level first, and then the 1st level
  //castle peaks - second level
  rect(240, 211, 12, 100);
  rect(260, 211, 12, 100);

  //castle peaks - second level edges
  rect(221, 211, 10, 100);
  rect(279, 211, 10, 100);

  //castle-second-main
  rect(250, 215, 68, 75);

  //castle-second-windows
  fill(0)
  rect(265, 202, 20, 29)
  rect(235, 202, 20, 29)

  //reset castle color
  fill(238, 96, 44)
	
  //peaks - first level
  rect(220, 268, 12, 100);
  rect(240, 268, 12, 100);
  rect(260, 268, 12, 100);
  rect(280, 268, 12, 100);

  //peaks - first level edges
  rect(205, 268, 10, 100);
  rect(295, 268, 10, 100);

  //castle-main
  rect(250, 272, 100, 75);

  //castle-door
  fill(0)
  rect(250, 280, 30, 58, 15, 15, 0, 0)
	
  //left shrub
  fill(0, 171, 41)
  ellipse(25,340,100,130);
  
  //flag
  fill(255)
  triangle(18, 40, 60, 40, 60, 80)
	
  //flag pole
  fill(175, 248, 68)
  rect(60, 160, 5, 250)
	
  //flag circle
  fill(0, 168, 41)
  ellipse(60, 30, 18)

  //flag base
  fill(238, 96, 44)
  rect(60, 295, 30, 30)

  //pipes
  fill(73, 249, 68)
  //top pipe
  rect(500, 260, 50, 100)
  rect(500, 208, 60, 20)
  //side pipe
  rect(460, 282, 50, 50, 0, 15, 15, 0)
  rect(430, 281, 20, 56)

  //ground
  fill(238, 96, 44)
  rect(300, 325, 600, 31);

  //sun-peaks
  fill (225, 165, 0)
  quad(500,0,465,26,508,32,508,16);
  quad(507,34,477,72,520,62,520,42);
  quad(520,63,510,105,546,84,538,68);
  quad(547,80,550,125,578,95,568,82);
  quad(575,90,595,135,617,90,601,79);
  
  //sun
  fill(225, 165, 0)
  ellipse(600, 0, 200)

  //right shrubs
  fill(0, 171, 41)
  arc(350, 310, 40 * 1.5, 65 * 2, PI + TWO_PI, TWO_PI);
  
  cloud(120, 140, 2);
  cloud(420, 150, 1.5);
	
  //cloud function from Clouds by jackiezen
  function cloud(x, y, size) {
    fill(255, 255, 255);
    noStroke();
    arc(x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
    arc(x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
    arc(x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
    arc(x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
  }
}
