let mic; 
let vol, smoothVol; 
let redVal; 
let rawMove;
let smoothMove = 0;
let inc=0;
let xpos, ypos;
let d;
let d2;

let xoff = 0.0;
let pos;

function setup() {
  createCanvas(windowWidth,500);
  background(255);
 
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  vol = mic.getLevel(); 
  console.log(vol);
  //smoothVol = lerp(smoothVol, vol, 0.5)

  rawMove = map(vol,0,1,0,1000);
  smoothMove = lerp(smoothMove, rawMove, 0.5);

  d = floor(random(-smoothMove,smoothMove));
  d2 = floor(random(-smoothMove,smoothMove));

  redVal = map(vol,0,1,0,500);
  noStroke();
  fill(smoothMove,floor(smoothMove*0.8),smoothMove*2,100);
  ellipse(windowWidth/2+d*2,300+d2,50);
  inc++;


  // xoff = xoff + 0.01;
  // pos = noise(xoff) *smoothMove ;
  // noStroke();
  // fill(0);
  // //fill(smoothMove,floor(smoothMove*0.8),smoothMove*2,100);
  // ellipse(300+pos,300+pos,50);

}