var btn = document.createElement("BUTTON");


var blockNumber = 1;
var canvasY;
var stop=0.5;

let ctx;

let x=0;
let y=0;




function setup() {
createCanvas(0,0);
btn.onclick = addBlock;
document.body.appendChild(btn);

}


function draw() {

  y=+0.05;

  linearGradientFill(0, 0, x, y, 'green', 'cyan');
  rect(0, 0, 300, 200);

}


function addBlock() {
  blockNumber++;
  console.log(blockNumber);
  //displayBlock();

  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  
  canvas.style.position = 'absolute';
  
  canvasY = blockNumber*100;
  
  canvas.style.top = canvasY + 'px';
  canvas.style.left = '0';
  
  canvas.style.width = "500px";
  canvas.style.height = "100px";
  ctx = canvas.getContext("2d");

  console.log("block added");

 

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  linearGradientFill(0, 0, 0, canvas.height, 'green', 'cyan');
  // gradient.addColorStop(0, 'green');
  // gradient.addColorStop(1, 'cyan');
  // ctx.fillStyle = gradient;
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

}

function linearGradientFill(x1, y1, x2, y2, color1, color2) {
  //const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}



function displayBlock() { 

// const canvas = document.createElement("canvas");
// document.body.appendChild(canvas);

// canvas.style.position = 'absolute';

// canvasY = blockNumber*100;

// canvas.style.top = canvasY + 'px';
// canvas.style.left = '0';

// canvas.style.width = "500px";
// canvas.style.height = "100px";
// const ctx = canvas.getContext("2d");
// const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);


// Create a linear gradient
// The start gradient point is at x=20, y=0
// The end gradient point is at x=220, y=0

// Add three color stops
const ctx = canvas.getContext("2d");
const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "green");



// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

}











// let cols, rows;
// let w, h; 

// function setup() {
//   createCanvas(800, 600);
  

//   cols = 8;
//   rows = 6;

//   w = width/cols;
//   h = height/rows; 
// }

// function draw() {

//   background(0);

//   for (let i = 0; i < cols; i++) {
//       for (let j = 0; j < rows; j++) {
// 			stroke(255);
// 			strokeWeight(1);
//       let x = i*w;
//       let y = j*h;
//       // line(y, 0, y, width);
//       // line(0,x ,height,x);
//       fill(0);
//       rect(x,y,w,h);
//       }
//   }
// }

// function mousePressed() {
  
// }