//Coding Train 10.6 - Query an API with user input

let weather;

let api = "http://api.openweathermap.org/data/2.5/weather?q="
let city = "London"
let apiKey = "&APPID=001b0f58045147663b1ea518d34d88b4&units=imperial"
let url = api + city + apiKey

function getData(data) {
  weather = data;
  console.log(data);
}

function setup() {
  createCanvas(400, 200)
  loadJSON(url, getData);

  let button = select('#submit');
  button.mousePressed(runWeatherSearch);
}

function runWeatherSearch(){
  city = document.getElementById('city').value
  url = api + city + apiKey
  loadJSON(url, getData);
}

function draw() {
  background(0);
  if (weather) {
    let temp = weather.main.temp;
    let humidity = weather.main.humidity
    fill(255);
    ellipse(100, 100, temp, temp);
    ellipse(300, 100, humidity, humidity);
  }
}
