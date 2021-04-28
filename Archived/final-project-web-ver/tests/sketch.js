let video;
let snaptaken = false;
let snapImg;
let canvas;
let slider;
let snapBtn;
let sliderValMapped, sliderVal2;
let movePixels = false;
let sliderVal;
let inc = 0; //increment
let dx = 0;
let dy = 0;

let w = 0;
let input1;


function setup() {
  canvas = createCanvas(640, 480);
  canvas.id('myCanvas');
  video = createCapture(VIDEO);
  video.id('myVideo');
  // video.hide();
  pixelDensity(1);

  snapBtn = createButton('snap');
  snapBtn.mousePressed(takesnap);
  snapBtn.position(0, 500)

  slider = createSlider(0, 10, 10, 1);
  // slider.input(mode1);
  slider.position(0, 550);
  slider2 = createSlider(2, 10, 6, 0.5);
  slider2.position(0, 600);

  //test
  input1 = createInput();
}

function draw() {
  //test
  // background(255);

  var finW = input1.value();

  if (w<finW) {
  fill(0);
  rect(10,10, w, 20);
  w++;
} else {
  w+=0;
}


  video.loadPixels();
  loadPixels();

  sliderVal = slider.value();
  sliderValMapped = map(slider.value(), 10, 50, 5, 20);
  sliderVal2 = slider2.value();

  if (snaptaken) {
    snapImg.loadPixels();

// NOISE -------------------------------------------------------------------------------------

    // for (let y = 0; y < height; y++) {
    //   for (let x = 0; x < width; x++) {
    //     var index = (x + y * width) * 4 ;
    //
    //     var r = snapImg.pixels[index];
    //     var g = snapImg.pixels[index + 1];
    //     var b = snapImg.pixels[index + 2];
    //     var a = snapImg.pixels[index + 3];
    //
    //     noiseDetail(1, 0.2);
    //     pixels[index*sliderVal + 0] = r;
    //     pixels[index*sliderVal + 1] = noise(g)*255;
    //     pixels[index*sliderVal + 2] = noise(b)*255;
    //     pixels[index + 3] = 255;
    //
    //     inc+=0.001;
    //
    //
    //
    //
    //   }
    // }
    // updatePixels();


// TILES -------------------------------------------------------------------------------------

    let tilesX = 6;
    let tilesY = 5;

    let tileW = int(random(50,width));
    let tileH = 100;

    for (let y = 0; y < tilesY; y++) {
      for (let x = 0; x < tilesX; x++) {

    // SOURCE
    let sx = x*tileW;
    let sy = y*tileH;
    let sw = tileW;
    let sh = tileH;

    let dxpos = [1, 3, 5];
    let dypos = [0, 2, 4, 6];

    // DESTINATION
    let dx = int(random(dxpos))*tileW;
    let dy = int(random(dypos))*tileH;
    let dw = tileW;
    let dh = tileH;

    let randomCol = int(random(255));

    // push();
    // tint(255,randomCol,255);
    tint(0, 153, 204);
    copy(snapImg, sx, sy, sw, sh, dx, dy, dw, dh);
    // pop();


  }
}


// DRAW NOISE BLEND  -------------------------------------------------------------------------------------

    // let mul = 3;
    //
    // var blendW = 100;
    // var sx = noise(0+inc)*640;
    // var sy = noise(100+inc)*480;
    //
    // if (dx > width-100) {
    //   dx = 0;
    //   dy = dy + 100;
    // } else {
    //   dx+=2;  }
    //
    // inc+=0.01;
    // blend(snapImg, sx, sy, 150, 50, dx, dy, 200, 100, HARD_LIGHT);
    //

  }

}

function takesnap() {
  snapImg = video.get();
  image(snapImg, 0, 0);
  snaptaken = true;
}



function brightMap() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      var index = (x + y * width) * 4;

      var r = video.pixels[index];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var a = video.pixels[index + 3];

      var bright = (r + g + b) / 3;

      if (bright > 150) {
        r = 255;
        g = x - 100;
        b = 100;
      } else if (bright > 100 && bright < 150) {
        r = 100;
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
