let video;
let snaptaken = false;
let snapImg;
let canvas;
let slider;
let snapBtn;
let x = 0;
let y = 0;
let sliderValMapped, sliderVal2;
let movePixels = false;
let sliderVal;


function setup() {
  canvas = createCanvas(640, 480);
  canvas.id('myCanvas');
  video = createCapture(VIDEO);
  video.id('myVideo');
  pixelDensity(1);

  snapBtn = createButton('snap');
  snapBtn.mousePressed(takesnap);
  snapBtn.position(0,500)

  createP('');
  slider = createSlider(10, 50, 50,1);
  slider.input(mode1);
  slider.position(0,550);
  slider2 = createSlider(2, 10, 6, 0.5);
  slider2.position(0,600);
}

function draw() {
  video.loadPixels();
  loadPixels();

  sliderVal = slider.value();
  sliderValMapped = map(slider.value(), 10, 50, 5, 20);
  sliderVal2 = slider2.value();

  if (snaptaken) {

    filter(POSTERIZE, sliderVal2);

    slider2.input(brightMap);

    if (movePixels) { smearEffect(); }


    // copy(snapImg, sx, sy, sw, sh, dx, dy, dw, dh);
    // copy(snapImg, 0 , h/2 , w, 50 , x, h/2, w, 50);
    //   }
    //
    // }
    //
  }

}

function mode1() {
  movePixels = true;
}

function takesnap() {
  snapImg = video.get();
  snapImg.loadPixels();
  image(snapImg, 0, 0);
  snaptaken = true;
}

function smearEffect() {
  for (let i = 0; i < snapImg.width; i += sliderVal) {
     for (let j = 0; j < snapImg.height; j += sliderVal) {
       var colPixel = snapImg.get(i, j);
       var wave = int(sin(frameCount * 0.005 + (i / 10 * j / 10) * 0.05) * 100);
       var sx = i  + wave;
       var sy = j ;
       noStroke();
       fill(colPixel);
       rect(sx, sy, sliderValMapped, sliderValMapped)
     }
   }
}

function brightMap() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      var index = (x + y*width) * 4;

      var r = video.pixels[index];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var a = video.pixels[index + 3];

      var bright = (r+g+b)/3;

      if (bright>150) {
         r = 255;
         g = x-100;
         b = 100;
      } else if (bright>100 && bright<150) {
        r = 100;
        g = 255;
        b = x-100;
      } else {
        r = 100;
        g = 100;
        b = y-100;
      }

      pixels[index+0] = r;
      pixels[index+1] = g;
      pixels[index+2] = b;
      pixels[index+3] = 255;

    }
   }
   updatePixels();
}
