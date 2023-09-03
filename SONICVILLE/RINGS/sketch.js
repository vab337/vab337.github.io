let angle = 0;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

  orbitControl();

  rotateZ(angle);
angle+=0.01;
  noFill();
  stroke(255);
  ellipse(0,0, 700, 700);
  ellipse(0,0, 500, 500);
  ellipse(0,0, 300, 300);
  fill(255);
  ellipse(0,0, 100, 100);


}
