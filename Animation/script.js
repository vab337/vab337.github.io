let generalwaste
let paper
let canplastic
let distGeneralwaste
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  generalwaste = rect(200, 300 ,300, 500);
  stroke(0,0,0);
  fill(249, 229, 77);
  paper = rect(500, 300 ,300, 500);
  stroke(0,0,0);
  fill(191, 242, 255);
  canplastic = rect(800, 300 ,300, 500);
  stroke(0,0,0);
  fill(252, 186, 219);

  text("General Waste", 250, 400);
  fill(0,0,0);
  textSize(32);


  text("Paper", 600, 400);
  fill(0,0,0);
  textSize(32);

  text("Can & Plastic", 850, 400);
  fill(0,0,0);
  textSize(32);

  distGeneralwaste = dist(450,450,mouseX,mouseY);
  if (distGeneralwaste < 50) {
    text("Wrong can", 30, 30);
    fill(0,0,0);
    textSize(32);
    console.log("Wrong can")
  }

}
