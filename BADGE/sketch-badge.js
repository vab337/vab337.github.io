let canvas;

let btn1; 
let nameInput, nameVal;
let extrovert, introvert, pingpong, art, party, home;

var x = 0;
var y = 200;
var speedX = 5;
var speedY = 5;

let colors = ['#FE0002', '#FFB202', '#7BD9F2', '#042CA6' , '#FF985E', '#F435A8'];
let colorIndex1;

let balls = [];
let pingpongChose = false;
let artChose = false; 
let partyChose = false;
let homeChose = false;


function setup() {
  canvas = createCanvas(400, 400); 
  rectMode(CENTER);
  canvas.position(windowWidth/2+100, 200); 

  extrovert = createButton('Extrovert');
  extrovert.mousePressed(extrovertClicked);
  extrovert.position(200,200);
  introvert = createButton('Introvert');
  introvert.position(400,200);
  introvert.mousePressed(introvertClicked);

  pingpong = createButton('Ping-pong');
  pingpong.mousePressed(pingpongClicked);
  pingpong.position(200,300);
  art = createButton('Art');
  art.mousePressed(artClicked);
  art.position(400,300);


  party = createButton('Party people');
  party.mousePressed(partyClicked);
  party.position(200,400);
  home = createButton('Homebody');
  home.mousePressed(homeClicked);
  home.position(400,400);
  background(0);

}

function draw() {
  if(pingpongChose) {
    noStroke();
    background("#7BD9F2");

    fill(244,53,168);
    noStroke();
    ellipse(width/2,height/2,400);
    fill(4,44,166);
    rect(width/2,height/2,200);
    fill(195,244,53);
    
    for(let i=0; i < balls.length; i++) {
      balls[i].display();
      balls[i].update();
    }
  }
  if (artChose) {
      noStroke();
      fill(195,244,53);
      for(let i=0; i < balls.length; i++) {
        balls[i].display();
        balls[i].update();
      }
  }
  


}

function state1() {
  fill(255,0,0);
  ellipse(0,0,100,100);
}

function extrovertClicked() {
  background("#FF985E");
}


function introvertClicked() {
  background("#7BD9F2");
}


function pingpongClicked() {
  pingpongChose = true;
  for (i=0; i<5; i++) {
  balls.push(new Ball(30));
  }
}

function artClicked() {
  artChose = true; 
  for (i=0; i<1; i++) {
    balls.push(new Ball(10));
    }
}

function partyClicked() {
  partyChose = true; 

  for(let i=0; i < 50; i++) {
    noStroke();
    fill(random(255),random(255),168);
    rect(random(width), random(height), 30,30);
  }


}

function homeClicked() {
  homeChose = true; 
  fill(244,53,168);
  noStroke();
  ellipse(width/2,height/2,400);
  fill(4,44,166);
  rect(width/2,height/2,200);
}


class Ball {
  constructor(r) {
    this.x = random(50,width-50);
    this.y = random(50,height-50);
    this.speedX = random(-3,3);
    this.speedY = random(-4,4);
    this.r = r;
  }

  display() {
    ellipse(this.x, this.y,  this.r,  this.r);
  }

  update() {
    this.x += this.speedX;
	  this.y += this.speedY;

	if (this.x > width-20 || this.x < 20) {
		this.speedX *= -1;
	}
	// if the ball hits the top or the bottom, change the direction of the ball 	
	if (this.y > height-20 || this.y < 20) {
		this.speedY *= -1;
	}
  }
} 