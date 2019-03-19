//Coding Train 10.5 - simple exercise to start working with JSON files

let data;

function preload(){
  data = loadJSON("birds.json");
}

function setup() {
  noCanvas();
  // createP(data.birds[1].members[2]);

  let birds = data.birds;

  for (let i = 0; i < birds.length; i++){
    createElement('h1', birds[i].family);
    for (let j = 0; j < birds[i].members.length; j++){
      createP(birds[i].members[j]);
    }
  }
}

function draw() {
  // put drawing code here
}
