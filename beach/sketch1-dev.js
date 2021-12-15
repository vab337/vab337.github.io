//Vector Version

let img;
let c;
let wave = [];
let wave2 = [];

let col;
let angle = 0;

let imgYpos = 0;
let imgLayer;

let hit = false;
let imgYposinc=2;

//mouse Vector
let mouseV;

function preload() {
  img = loadImage('beach.jpg');
}

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  image(img, 0, 0);
  frameRate(30);

  imgLayer = createGraphics(800, 800);

  mouseV = createVector(mouseX, mouseY);

}

function draw() {

  image(img,0,0);
  img.loadPixels();

  imgYpos+=imgYposinc;
  if (imgYpos>height-400) {
      hit=true;
    } else if (imgYpos < 400) {
      hit=true;
  } else if (imgYpos>=0 && imgYpos <= height-400){
      hit=false;
  }

  if (hit) {
    imgYposinc = -(imgYposinc);
  }
  if(hit==false) {
    imgYposinc
  }



  for (let i = 0; i < wave.length; i++) {
    wave[i].show();
    wave[i].getColor();
    wave[i].update();
    wave[i].repulsion();
  }
}


//add new array when clicked
function mouseClicked() {
  for (let i = 0; i < width; i++) {
    var ypos = mouseY;
    var ypos = floor(map(sin(angle), -1, 1, mouseY, mouseY + 25) + random(-10, 10));
    console.log(ypos);
    wave.push(new Particle(i, ypos));
    angle += 0.02;
  }
}

function Particle(x, y) {
  this.x = x;
  this.y = y;
  var y0 = y;
  var col = img.get(this.x, this.y);
  var vy = random(1, 2);
  var leanx = floor(random(-5,5));

  this.update = function() {
    this.y += vy;
    vy += 0.002;
    if (this.y > y0 + 50) {
      vy = -2;
    }
    if (this.y < y0 - 50) {
      vy = 2;
    }
  }

  this.getColor = function() {}


  this.show = function() {
    stroke(col[0]+50, col[1]+50, col[2]+50, col[4]);
    line(this.x, this.y, this.x, this.y+50);
    // noStroke();
    // fill(col);
    // rect(this.x, this.y, 2, 2);
  }

  this.repulsion = function() {
    // var mouseV= createVector(mouseX,mouseY);
    // var waveV1 = createVector(this.x, this.y);
    // var waveV2 = createVector(this.x, this.y+100);
    // var repulsionForce = mouseV.sub(waveV2);
    var distanceFromMouse = dist(mouseX, mouseY, this.x, this.y);

    if (distanceFromMouse<50) {
      // repulsionForce.normalize();
      // repulsionForce.mult(map(distanceFromMouse, 0, 100, 2, 0));
      // waveV2.add(repulsionForce);
      this.x-=2;
      this.y+=2;
    }

  }
}
