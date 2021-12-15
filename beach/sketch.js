let img;
let c;
let wave = [];
let wave2 = [];

let col;
let angle=0;

function preload() {
  img = loadImage('beach.jpg');
}

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  image(img,0,0);


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
  img.loadPixels();


  for (let i = 0; i < wave.length; i++) {
  wave[i].show();
  wave[i].getColor();
  wave[i].update();
  // wave2[i].show();
  // wave2[i].getColor();
  // wave2[i].update();
}
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
}

function mousePressed() {
  for (let i=0; i<width; i++) {
    var ypos= mouseY;
    var ypos = floor(map(sin(angle),-1,1,mouseY,mouseY+25)+random(-10,10));
    console.log(ypos);
    wave.push(new Particle(i,ypos));
    // wave2.push(new Particle(i,ypos-100));
    angle += 0.02;
    // col = img.get(i,ypos);
  }
}

function Particle(x,y) {
  this.x = x;
  this.y = y;
  var y0= y;
  var col = img.get(this.x,this.y);
  var vy = random(1,2);

  this.update = function() {
    // var vy;
    this.y+= vy;
    vy +=0.02;
    if (this.y > y0+200){
      vy=0;
    }

  }

  this.getColor = function() {
  }

  this.show = function() {
    // var col = img.get(this.x, this.y);
    noStroke();
    fill(col);
    rect(this.x, this.y,2,2);
  }
}
