let video;
let snaptaken = false;
let snapImg;
let canvas;
let slider;
let snapBtn;
let x = 0;
let y = 0;
let movePixels = false;

let button1;
let button2;
let button3;

let val = 2;
let noiseBlendact = false;
let inc = 0;
let dx = 0;
let dy = 0;



function setup() {
  canvas = createCanvas(640, 480);
  canvas.id('myCanvas');
  video = createCapture(VIDEO);
  video.id('myVideo');
  pixelDensity(1);

  snapBtn = createButton('Take Photo!');
  snapBtn.mousePressed(takesnap);


  button1 = createButton('Mode 1');
  button1.mousePressed(mode1);

  button2 = createButton('Mode 2');
  button2.mousePressed(mode2);

  button3 = createButton('Mode 3');
  button3.mousePressed(mode3);

}

function draw() {
  video.loadPixels();
  loadPixels();


  if (snaptaken) {

    snapImg.loadPixels();

    filter(POSTERIZE, 10);

    if (movePixels) {
      smearEffect();
    }

    if (noiseBlendact) {
      noiseBlend();
    }

  }

}


function incPosterize() {

  if (snaptaken) {

    if (val < 10) {
      filter(POSTERIZE, val);
      brightMap();
      val += 0.5;
    } else {
      val = 0;
      clearInterval(interval1);
    }

  }

}

function mode1() {
  interval1 = setInterval(incPosterize, 500);
}

function mode2() {
  movePixels = true;
}

function mode3() {
  noiseBlendact = true;
}


function takesnap() {
  snapImg = video.get();
  snapImg.loadPixels();
  image(snapImg, 0, 0);
  snaptaken = true;
  video.hide();
}


function smearEffect() {

  for (let i = 0; i < snapImg.width; i+=20) {
    for (let j = 0; j < snapImg.height; j+=20) {
      var colPixel = snapImg.get(i, j);
      var waveX = int(sin(frameCount * 0.005 + (i / 10 * j / 10) * 0.05) * 100);
      var sx = i + waveX;
      var sy = j;

      noStroke();
      fill(colPixel);
      rect(sx, sy, 20, 20)
    }
  }
}

function brightMap() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width / 2; x++) {
      var index = (x * 2 + y * width) * 4;

      var r = video.pixels[index];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var a = video.pixels[index + 3];

      var bright = (r + g + b) / 3;

      if (bright > 150) {
        r = 255-random(100);
        g = x - 100;
        b = 100;
      } else if (bright > 70 && bright < 150) {
        r = x;
        g = 255;
        b = x - 100;
      } else {
        r = 100;
        g = 100;
        b = y - 100;
      }

      pixels[index + 0] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
      pixels[index + 3] = 255;

    }
  }
  updatePixels();
}

function noiseBlend() {


  var blendW = 100;
  var sx = int(noise(0 + inc) * 640);
  var sy = int(noise(100 + inc) * 480);

  var wEnd = [100,200,250,300,400,520,640];
  var dxMax = random(wEnd)

  if (dx > width) {
    dx = 0;
    dy = dy + 70;
  } else if (dx == dxMax) {
    dx += 100;
  } else {
    dx+=2;
  }

  inc += 0.01;
  blend(snapImg, sx, sy, 150, 50, dx, dy, 50, 40, HARD_LIGHT);
}
