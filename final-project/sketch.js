let canvas;
let webcam;
let record = false;
let button;
let speech;
let rep;
let qx = 50;
let qy;
let ax;
let ay = 50;
let prevay;
let counter = 0;
let prompt1 = false;
let prompt2 = false;
let prompt3 = false;
let prompt4 = false;
let prompt5 = false;
let utensils = ['Spoon', 'Fork', 'Chopsticks', 'Your hands', 'Bottlecap'];
let prompt1ques;
let prompt2ques;
let utensilChoice;
let prompt2Button;
let prompt3ques;
let prompt4ques;
let prompt4input;
let prompt5ques;
let itemNumber;




function setup() {


  createCanvas(windowWidth, windowHeight);
  webcam = createCapture(VIDEO);
  webcam.hide();

  rectMode(CENTER);
  button = createButton('Record');
  button.addClass("recbutton");
  button.mousePressed(startRec);
  button.position(width/2-button.width/2-10, height/2+120);


  speech = new p5.SpeechRec('en-US', gotSpeech);
  speech.continuous = true;
  speech.start();

  textSize(20);
  ax = width/2+180; //to avoid the video


  prompt2Button = createButton('random');
  prompt2Button.addClass("prompt2Button");
  prompt2Button.hide();

  prompt4input = createInput();

  prompt4input.addClass("prompt4input");  prompt4input.hide();

}

function draw() {



  // console.log("qy:", qy);
  // console.log("ay:", ay);

  push();
  background(16, 28, 161);
  stroke(255);
  strokeWeight(3);
  line(width / 2, 0, width / 2, height)
  pop();


  if (record) {
    push();
    translate(width, 0);
    scale(-1, 1);
    image(webcam, width / 2 - 160, height / 2 - 120, 320, 240);
    // filter(GRAY);
    pop();
  } else {}


  if (prompt1) {
    qy = ay; //only for prompt 1
    prompt1ques = createP('What are you eating?');
    prompt1ques.addClass('question');

    prompt1ques.position(qx, qy);
    prompt1 = !prompt1;
    // domypos += 20;
  }

  if (prompt2) {
    updateQpos();
    prompt2ques = createP('Choose your utensils');
    prompt2ques.addClass('question');
    prompt2ques.position(qx, qy);

    prompt2Button.position(qx, qy+40);
    prompt2Button.show();

    prompt2Button.mousePressed(chooseUtensils);
    prompt2 = !prompt2;
  }

  if (prompt3) {
    updateQpos();
    prompt3ques = createP('Describe what you have in front of you, for 30 second, non stop');
    prompt3ques.addClass('question');
    prompt3ques.position(qx, qy+20) //just for this prompt bc of random button
    updateApos();
    prompt3 = !prompt3;
  }

  if (prompt4) {
    updateQpos();
    prompt4ques = createP('How many items do you have in total?');
    prompt4ques.addClass('question');
    prompt4ques.position(qx, qy)
    updateApos();

    prompt4input.position(qx, qy+40);
    prompt4input.show();
    prompt4input.input(prompt4inputEvent);
    prompt4 = !prompt4;
  }

  if (prompt5) {
    prompt4input.attribute('disabled','true');

    updateQpos();
    var items = prompt4input.value();
    prompt5ques = createP('Eat item '+ int(random(1,items/2)) + ' and item ' + int(random(items/2,items)) + ' together in one bite.');
    prompt5ques.addClass('question');
    prompt5ques.position(qx,qy+20);
    prompt5 = !prompt5;


  }


}

function keyPressed() {
  if (keyCode === ENTER) {
    nextPrompt();
    checkPrompt();
    prevay = ay; //save last answer's position
  }

}

function startRec() {
  record = true;
}

function gotSpeech() {
  if (speech.resultValue) {
    console.log(speech);
    rep = createP(speech.resultString);
    rep.addClass('answer');
    rep.position(ax, ay);
    ay+=20;
  }
}

function nextPrompt() {
  counter++;
  // domypos += 20;
}

function checkPrompt() {
  if (counter === 1) {
    prompt1 = true;
  }

  if (counter === 2) {
    prompt2 = true;
  }

  if (counter === 3) {
    prompt3 = true;
  }

  if (counter === 4) {
    prompt4 = true;
  }

  if (counter === 5) {
    prompt5 = true;
  }


}

function updateQpos() {
  qy = prevay + 100;
}

function updateApos() {
  ay = qy;
}


function chooseUtensils() {
  updateApos();
  utensilChoice = createP(utensils[int(random(0, 4))]);
  utensilChoice.addClass("answer");
  utensilChoice.position(ax, ay);
}

function prompt4inputEvent() {
  itemNumber = createP(prompt4input.value());
  itemNumber.addClass("answer");
  itemNumber.position(ax, ay);
}
