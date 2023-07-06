var btn = document.createElement("BUTTON");


var blockNumber = 1;
var canvasY;
var stop=0.5;




function setup() {
createCanvas(0,0);

btn.onclick = addBlock;
document.body.appendChild(btn);
}


function draw() {

}


function addBlock() {
  blockNumber++;
  console.log(blockNumber);
  displayBlock();
}



function displayBlock() { 

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = 'absolute';

canvasY = blockNumber*100;

canvas.style.top = canvasY + 'px';
canvas.style.left = '0';

canvas.style.width = "500px";
canvas.style.height = "100px";


//const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create a linear gradient
// The start gradient point is at x=20, y=0
// The end gradient point is at x=220, y=0
const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

// Add three color stops
gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "green");



// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100);
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