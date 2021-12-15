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

let images=['beach.jpg','beach2.jpg','beach3.jpg','beach4.jpg', 'beach5.jpg', 'beach6.jpg', 'beach7.jpg', 'beach8.jpg', 'beach9.jpg', 'beach10.jpg', 'beach11.jpg', 'beach12.jpg', 'beach13.jpg', 'beach14.jpg', 'beach15.jpg'];

function preload() {
  img = loadImage(random(images));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  img.resize(width, height);
  image(img, 0, 0);
  frameRate(30);
}

function draw() {
  for (let i = 0; i < 10; i++) {
    var ypos = mouseY;
    var ypos = floor(map(sin(angle), -1, 1, mouseY, mouseY + 25) + random(-10, 10));
    wave.push(new Particle(mouseX + random(-100, 100), ypos));
    angle += 0.02;
  }

  img.loadPixels();


  for (let i = 0; i < wave.length; i++) {
    wave[i].show();
    wave[i].getColor();
    wave[i].update();
   // wave[i].repulsion();
    if (wave[i].lifespan>300){
      wave.splice(i,1);
    }

    }
  }

function Particle(x, y) {
  this.x = x;
  this.y = y;
  var y0 = y;
  var col = img.get(this.x, this.y);
  var vy = random(1, 2);
  this.lifespan = 0;

  this.update = function() {
    this.y += vy;
    vy += 0.05; //0.05 (fine)
    if (this.y > y0 + 100) {
      vy = -3; //used to be -2 and 2
    }
    if (this.y < y0 - 100) {
      vy = 3;
    }

    this.lifespan = this.lifespan + 1;
  }

  this.getColor = function() {}

  this.show = function() {
    // var col = img.get(this.x, this.y);
    noStroke();


    if (this.lifespan > 180) {
      col = img.get(this.x, this.y)
      fill(col);
      rect(this.x, this.y, 3, 3);

    } else {
      fill(col);
      rect(this.x, this.y, 3, 3);

    }

  }

  this.repulsion = function() {
    var distanceFromMouse = dist(mouseX, mouseY, this.x, this.y);

    if (distanceFromMouse<50) {
      this.x-=random(-5,5);
      this.y+=random(-5,5);
    }


}
}
