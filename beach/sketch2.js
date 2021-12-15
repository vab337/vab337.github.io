let img;
let c;
let wave = [];

let col;
let angle = 0;

let imgYpos = 0;
let imgLayer;

let ypos;
var noiseScale=0.02;


function preload() {
  img = loadImage('beach.jpg');
}

function setup() {
  createCanvas(600, 800);
  pixelDensity(1);
  image(img, 0, 0);
  frameRate(12);

  imgLayer = createGraphics(800, 800);

  for (let i=0; i<800; i++) {
      var ypos=0;
      var ypos = floor(map(sin(angle),-1,1,250,275)+random(-10,10));
    wave.push(new Particle(i,ypos));
  }

  // for (let i=0; i<width; i++) {
  //   var ypos=0;
  //   var ypos = floor(map(sin(angle),-1,1,250,275)+random(-10,10));
  //   console.log(ypos);
  //   wave.push(new Particle(i,ypos));
  //   wave2.push(new Particle(i,ypos-100));
  //   angle += 0.02;
  //   // col = img.get(i,ypos);
  // }
}

function draw() {

  // imgLayer.image(img,0,imgYpos);
  // image(imgLayer,0,0);
  // imgYpos++;

  img.loadPixels();
  // image(img, 0, 0);


  //
  // for (let i = 0; i < wave.length; i++) {
  //   wave[i].show();
  //   wave[i].getColor();
  //   wave[i].update();
  // }
  // for (var y=0; y<height; y++) {
  //   for (var x=0; x<width; x++) {
  //     var index = (x + y*width) * 4;
  //     var c = img.get(x,y);
  //     pixels[index] = c[0]
  //     pixels[index+1] = c[1]
  //     pixels[index+2] = c[2]
  //     pixels[index+3] = c[3]
  //   }
  // }

  //     let angle = map(i, 0, width, 0, TWO_PI);
  //     let y = map(sin(angle), -1, 1, -100, 100);


  for (let x=0; x < width; x++) {
  var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
  var col = img.get(x, mouseY);
  stroke(col);
  line(x, mouseY+noiseVal*80, x, mouseY+noiseVal*80-100);
  noiseScale+=0.2;
}
}


//add new array when clicked
function mouseDragged() {
  for (let i = 0; i < 10; i++) {
    var ypos = mouseY;
    var ypos = floor(map(sin(angle), -1, 1, mouseY, mouseY + 25) + random(-10, 10));
    console.log(ypos);
    wave.push(new Particle(mouseX + random(-5, 5), ypos));
    // wave2.push(new Particle(i,ypos-100));
    angle += 0.02;
    // col = img.get(i,ypos);
  }
}

function Particle(x, y) {
  this.x = x;
  this.y = y;
  var y0 = y;
  // var col = img.get(this.x, this.y);
  var vy = random(1, 2);

  this.update = function() {
    // var vy;
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
    // var col = img.get(this.x, this.y);
    var col = img.get(this.x, this.y);
    // noStroke();
    // fill(col);
    // rect(this.x, this.y, 2, 2);
  //   for (let x=0; x < width; x++) {
  //   var noiseScale=0.02;
  //   var noiseVal = noise((mouseX+this.x)*noiseScale, mouseY*noiseScale);
  //   stroke(col);
  //   line(this.x, mouseY+noiseScale*80, this.x, height);
  // }
  }
}
