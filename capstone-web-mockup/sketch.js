let camfeed;
let welcomeText;
let yesButton;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('myCanvas')
  camfeed = createCapture(VIDEO);
  camfeed.id('myVideo');
  camfeed.size(windowWidth, windowHeight);
  camfeed.position(0, 0);
  pixelDensity(1);
  camfeed.hide();

  welcomeText = createP('would you like to buy some time?');
  welcomeText.id('welcomeText');

  // yesButton = createButton('yes');
  // yesButton.id('yesButton');




}

function draw() {
  // image(camfeed, 0, 0, windowWidth, windowHeight);

  background(0);


  camfeed.loadPixels();
  loadPixels();
  brightMap();

}

function brightMap() {

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width / 2; x++) {
      var index = (x * 2 + y * width) * 4;

      var r = camfeed.pixels[index];
      var g = camfeed.pixels[index + 1];
      var b = camfeed.pixels[index + 2];
      var a = camfeed.pixels[index + 3];

      var bright = (r + g + b) / 3;

      if (bright > 150) {
        r = 255;
        g = 0;
        b = 0;
        a = 255;
      } else if (bright > 70 && bright < 150) {
        r = 0;
        g = 0;
        b = 255;
        a = 255;
      } else {
      }

      pixels[index + 0] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
      pixels[index + 3] = a;

    }
  }
  updatePixels();
}
