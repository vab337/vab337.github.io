//predefined height, mouse avoid

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

let startWaveX=[50,100,400,500];
let startWaveY = [32,43,483,219,578,382,438,110,40];
let endWave=[] //=startWave+random | startWaveY+50

function preload() {
  img = loadImage('beach.jpg');
}

function setup() {
  createCanvas(600, 800);
  pixelDensity(1);
  image(img, 0, 0);
  frameRate(30);
  // setInterval(resetSketch, 2000);

  // imgLayer = createGraphics(800, 800);

  //
  // for (let i=0; i<100; i++) {
  //   wave.push(new Particle(i,100));
  //   wave2.push(new Particle(i+120,300));
  //   angle += 0.02;
  //   // col = img.get(i,ypos);
  // }



  for (let v=0; v<6; v++) {
    var waveLengthArray=[100,150,250,300];
    var waveLength=random(waveLengthArray);
  for (let i=0; i<waveLength; i++) {
    wave.push(new Particle(i+random(0,waveLength),random(startWaveY)));
  }
  }
}

function draw() {
  // image(img,0,imgYpos);

  imgYpos+=imgYposinc;
  if (imgYpos>height-400) {
      hit=true;
    } else if (imgYpos < 0) {
      hit=true;
  } else if (imgYpos>=0 && imgYpos <= height-400){
      hit=false;
  }

  if (hit) {
    imgYposinc = -(imgYposinc);
  }
  // if(hit==false) {
  //   imgYposinc;
  // }


  // image(imgLayer,0,0);
  // imgYpos++;

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




//add new array when clicked
// function mouseDragged() {
//   for (let i = 0; i < 10; i++) {
//     var ypos = mouseY;
//     var ypos = floor(map(sin(angle), -1, 1, mouseY, mouseY + 25) + random(-10, 10));
//     console.log(ypos);
//     wave.push(new Particle(mouseX + random(-5, 5), ypos));
//     // wave2.push(new Particle(i,ypos-100));
//     angle += 0.02;
//     // col = img.get(i,ypos);
//   }
// }

function Particle(x, y) {
  this.x = x;
  this.y = y;
  var y0 = y;
  var col = img.get(this.x, this.y);
  var vy = random(1, 2);

  this.update = function() {
    // var vy;
    this.y -= vy;

    vy += 0.002;
    if (this.y < y0 + random(-150,100)) {
      vy = -2;
    }
    if (this.y > y0 - random(-100,150)) {
      vy = 2;
    }

    // this.x += noise(0.0)*0.05;
  }

  this.getColor = function() {}

  this.show = function() {
    // var col = img.get(this.x, this.y);
    var ranVal = random(-10,10);
    noStroke();
    // fill(col);
    fill(col[0]+ranVal, col[1]+ranVal, col[2]+ranVal, col[3]);
    rect(this.x, this.y, 2, 2);


    stroke(col[0]+ranVal, col[1]+ranVal, col[2]+ranVal, col[3]);
    line(this.x, this.y, this.x, this.y+50);
  }
}

function resetSketch() {
  pixelDensity(1);
  image(img, 0, 0);
  frameRate(30);
  setInterval(resetSketch, 2000);}
