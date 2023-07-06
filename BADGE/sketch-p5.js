let moods = [];


let cols, rows;
let w,h;
let moodIndex = -1; 

let posArr = [];
let ctx;

let btn1, btn2, btn3, btn4, btn5; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  ctx = canvas.getContext('2d');

  btn1 = createButton('Amazing');
  btn1.position(10, 0);
  btn1.mousePressed(state1);

  btn2= createButton('Excited');
  btn2.position(100, 0);
  btn2.mousePressed(state2);


  btn3= createButton('Good');
  btn3.position(200, 0);
  btn3.mousePressed(state3);

  btn4 = createButton('Meh');
  btn4.position(300, 0);
  btn4.mousePressed(state4);

  btn5 = createButton('Stressed');
  btn5.position(400, 0);
  btn5.mousePressed(state5);

  for(let i = 0; i < moods.length; i++){
		moods.push(new Mood(randomWidth,randomHeight,'green', 'cyan'));
	}


cols = 20;
rows = 20;

w = width/cols;
h = height/rows;

for (let i=0; i<cols; i++) {
  for(let j=0; j<rows; j++) {
      let xpos = i*w;
      let ypos = j*h;
      let index = i + j*cols; 
      posArr[index] = new Array(xpos,ypos);
  }
}
}


function draw() {
  background(220);
  
  for(let i = 0; i < moods.length; i++){
		moods[i].linearGradientFill(); 
    moods[i].display(); 
    moods[i].moveGradient();
	}
}

// function linearGradientFill(x1, y1, x2, y2, color1, color2) {
//   const ctx = canvas.getContext("2d");
//   const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
//   gradient.addColorStop(0, color1);
//   gradient.addColorStop(1, color2);
//   ctx.fillStyle = gradient;
// }

function mousePressed(){
  // moodIndex++;
  // moods.push(new Mood(posArr[moodIndex][0], posArr[moodIndex][1],'#02B227', '#00ED32'));
	//moods.push(new Mood(mouseX, mouseY,'#02B227', '#00ED32'));
}

function state1() {
  moodIndex++;
  moods.push(new Mood(posArr[moodIndex][0], posArr[moodIndex][1],'#8A2387', '#F27121'));
}

function state2() {
  moodIndex++;
  moods.push(new Mood(posArr[moodIndex][0], posArr[moodIndex][1],'#FF5F6D', '#FFC371'));
}

function state3() {
  moodIndex++;
  moods.push(new Mood(posArr[moodIndex][0], posArr[moodIndex][1],'#FFAF7B', '#3A1C71'));
}

function state4() {
  moodIndex++;
  moods.push(new Mood(posArr[moodIndex][0], posArr[moodIndex][1],'#43cea2', '#185a9d'));
}

function state5() {
  moodIndex++;
  moods.push(new Mood(posArr[moodIndex][0], posArr[moodIndex][1],'#EB5757', '#000000'));
}