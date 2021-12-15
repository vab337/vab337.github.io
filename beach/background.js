let imgYpos = 0;
let imgLayer;

let hit = false;
let imgYposinc=2;


function preload() {
  img = loadImage('beach.jpg');
}

function setup() {
  createCanvas(600, 800);
  pixelDensity(1);
  // image(img, 0, 0);
  frameRate(30);

}

function draw() {

  image(img,0,imgYpos);

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
}
