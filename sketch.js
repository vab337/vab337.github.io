let XSPEED = 3;
let YSPEED = -5;
let CIRCLESIZE = 80;
let ballX, ballY, ballXSpeed, ballYSpeed;
let colordivider;

function setup(){ //happens once
  var mycanvas = createCanvas(windowWidth, windowHeight)
  ballX =200;
  ballY = 200;
  ballXSpeed = XSPEED;
  ballYSpeed = YSPEED;
  background(255);
  colordivider = random(2,3);
}

function draw(){ //happens every frame
  ballX = ballX + ballXSpeed;
  ballY = ballY + ballYSpeed;

  let radius = CIRCLESIZE/2;

  if ((ballY < radius) || (ballY > (height-radius))) { //check if the ball hits the ceiling or floor
    ballYSpeed = -ballYSpeed;
  }

  if ((ballX < radius) || (ballX > (width-radius))) {  //check if the ball hits the left or right wall
    ballXSpeed = -ballXSpeed;
  }

  noStroke();
  fill((ballX/colordivider),(ballY/colordivider),175,200);
  ellipse(ballX, ballY, CIRCLESIZE, CIRCLESIZE);

  let distance = dist(mouseX, mouseY, ballX, ballY);

  if (distance <= 100) {
    ballX = mouseX;
    ballY = mouseY;
  }

  textFont("Montserrat");
  textAlign(CENTER);
  fill(255,255,255);

  textSize(50);
  text('Welcome to my website!', windowWidth/2, 300);

  rectMode(CENTER);
  textSize(30);
  text("I'm Van and I'm an Arts students that is forever interested in funny and goofy things. Curious what funny and goofy things I did in Communications Lab?", windowWidth/2, 600, 600, 500);
  text("Click here", windowWidth/2, 550);



}
