let pg;
let myFont;
function preload() {
  myFont = loadFont('assets/PPMori-Regular.otf');
}

function setup() {
  createCanvas(500, 500, WEBGL);
  pg = createGraphics(500,500);;
}

function draw() {
  background(220);

  orbitControl();

  rotateX(90);
  plane(100,100);

  translateX(50);
  plane(100,100);


  rotateX(-90);
  translate(50,0,0);
  // rotateX(-90);
  // rotateY(90);
  plane(100,200);

}



