let mic; 
let vol; 
let redVal; 
let rawChange;
let smoothChange = 0;
let xpos, ypos;
let d;
let d2;

let ctx;


let xoff = 0.0;
let pos;

let red, green, blue,c;
let colorVel = 1;

let moods = [];
let colorStop = 0.5;
let inc = 0.001;

function setup() {
  //createCanvas(windowWidth,windowWidth*0.15);

  createCanvas(windowWidth,windowHeight);
  background(0);
 
  mic = new p5.AudioIn();
  mic.start();

  ctx = canvas.getContext('2d');

  red = 0;
  green = 0;
  blue = 255; 
}

function draw() {
  background(0);

  vol = mic.getLevel(); 
  rawChange = map(vol,0,1,0,255);
  smoothChange = lerp(smoothChange, rawChange, 0.5);



  noStroke();
  //linearGradientFill(0, 0, 0, height, '#FFD6C2', '#E7BA44');
  linearGradientFill(0, 0, 0, height, '#FCDDC1', '#FFBA32','#FFA902');

  
  rect(0, 0, width, height);

  if (colorStop > 0.9 || colorStop<0.4) {
    inc = -inc;
  }

  colorStop+=inc;


  if(vol>0.1 && vol<0.3) {
    moods.push(new Mood(random(width),0,'green', 'cyan'));
  }



  for (let i = moods.length - 1; i >= 0; i--) {
    moods[i].linearGradientFill(); 
    moods[i].display(); 
    moods[i].moveGradient();
    moods[i].update();
    if (moods[i].finished()) {
      // remove this particle
      moods.splice(i, 1);
    }
  }


}




function linearGradientFill(x1, y1, x2, y2, color1, color2,color3) {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(colorStop, color2);
  gradient.addColorStop(1, color3);
  ctx.fillStyle = gradient;
}