let video;
let snaptaken = false;
let snapImg;
let canvas;
let snapBtn;
let saveBtn;
let x = 0;
let y = 0;
let movePixels = false;

var interval1;

let val = 2;
let valmapped = 20;
let noiseBlendact = false;
let noiseBlendVeract = false;
let inc = 0;
let dx = 0;
let dy = 0;

let nameText;
let nameInput;

let ageText;
let ageSlider;
let ageSliderVal;

let genText;
let genDrop;
let genderVal;
let genderValRed, genderValBlue, genderValGreen;

let dob;
let dobInput;
let dobInputVal;
let dobArr;

let nat;
let natInput;
let natInputVal;
let natChar = 10;

let occ;
let occInput;
let occInputVal;
let occChar;

let rand;
let randButton;
let randQuestion;
let randQuestions = ['Time spent on your  phone a day', 'What time did you wake up today?', 'Your favorite drink', 'Most used mode of transportation'];
let randInput;
let randInputVal;
let randCharr;

let imageFeed = [];
let imgNum = 0;
let idname;
let delNum = 0;



function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(windowWidth / 2 - 320, windowHeight / 2 - 240);
  canvas.id('myCanvas');

  video = createCapture(VIDEO);
  video.id('myVideo');
  video.position(windowWidth / 2 - 320, windowHeight / 2 - 240);
  pixelDensity(1);

  saveBtn = createButton('Save Portrait');
  saveBtn.mousePressed(savePortrait);
  saveBtn.id('saveBtn')
  saveBtn.hide();

  nameText = createP("Name");
  nameText.id('nameText');
  nameInput = createInput();
  nameInput.changed(takesnap);
  nameInput.id('nameInput');


  genText = createP("Gender");
  genText.id('genText');
  genDrop = createSelect();
  genDrop.id('genDrop');
  genDrop.option("");
  genDrop.option("Female");
  genDrop.option("Male");
  genDrop.option("Non binary");
  genDrop.input(genChange);

  ageText = createP("Age");
  ageText.id('ageText');
  ageSlider = createSlider(10, 50, 0, 1);
  ageSlider.id('ageSlider');
  ageSlider.input(mode1);

  nat = createP('Nationality');
  nat.id('nat');
  natInput = createInput();
  natInput.id('natInput');
  natInput.changed(natChange);

  occ = createP('Occupation');
  occ.id('occ');
  occInput = createInput();
  occInput.id('occInput');
  occInput.changed(occChange);

  randButton = createButton('Random Question');
  randButton.mousePressed(getrandomQuestion);
  randButton.id('randButton');
  randQuestion = document.getElementById('randQuestion');
  randInput = createInput('');
  randInput.id('randInput');
  randInput.changed(randChange);

}

function draw() {

  video.loadPixels();
  loadPixels();

  //change Age on screen
  document.getElementById("ageSliderVal").innerHTML = ageSlider.value();


  if (snaptaken) {
    snapImg.loadPixels();
    filter(POSTERIZE, 10);
    if (movePixels) {
      smearEffect();
    }

    if (noiseBlendact) {
      noiseBlendHor();
    }

    if (noiseBlendVeract) {
      noiseBlendVer();
    }

  }

}


function genChange() {
  interval1 = setInterval(incPosterize, 500);
  genderVal = genDrop.value();
  if (genderVal == "Female") {
    genderValRed = 200;
    genderValGreen = 90; //194, 85, 89
    genderValBlue = 30;
  } else if (genderVal == "Male") {
    genderValRed = 21;
    genderValGreen = 30; //21, 30, 194
    genderValBlue = 200;
  } else {
    genderValRed = 120;
    genderValGreen = 30; //128, 21, 194
    genderValBlue = 190;
  }


}


//Input change/Triggers
function mode1() {
  movePixels = true;
}

function mode2() {
  interval1 = setInterval(incPosterize, 500);
}

function natChange() {
  natInputVal = natInput.value();
  natChar = natInputVal.charCodeAt(0);
}

function occChange() {
  occInputVal = occInput.value();
  occChar = occInputVal.charCodeAt(0);
  noiseBlendact = true;
  movePixels = false;
}

function randChange() {
  // noiseBlendact = false;
  noiseBlendVeract = true;
  randInputVal = randInput.value();
  randChar = randInputVal.charCodeAt(0);
  saveBtn.show();
}

//Operations
function takesnap() {
  snapImg = video.get();
  snapImg.loadPixels();
  image(snapImg, 0, 0);
  snaptaken = true;
  video.hide();
}

function savePortrait() {
  saveCanvas(canvas, 'myportrait' + imgNum, 'jpg');
  window.setTimeout(reloadPage, 3000);
}

function reloadPage() {
  setup();
}

//Effects
function incPosterize() {

  if (snaptaken) {

    if (val < 20) {
      val += 0.5;
      filter(POSTERIZE, val);
      brightMap();
    } else {
      val = 255;
      clearInterval(interval1);
    }


  }
}

function smearEffect() {
  ageSliderVal = ageSlider.value();

  for (let i = 0; i < snapImg.width; i += ageSliderVal * 2) {
    for (let j = 0; j < snapImg.height; j += ageSliderVal * 2) {
      var colPixel = snapImg.get(i, j);
      var wave = int(sin(frameCount * 0.005 + (i / 10 * j / 10) * 0.05) * natChar);
      var sx = i + wave;
      var sy = j;
      noStroke();
      fill(colPixel[0], colPixel[1], colPixel[2], 150);
      if (genderVal == "Female") {
        ellipse(sx, sy, ageSliderVal, ageSliderVal);
      } else if (genderVal == "Male") {
        rect(sx, sy, ageSliderVal, ageSliderVal);
      } else {
        arc(sx, sy, ageSliderVal, ageSliderVal, PI, TWO_PI);
      }


    }
  }
}

function brightMap() {

  // dobInputVal = dobInput.value();
  // dobArr = dobInputVal.split("/");
  // var parsedDob = [];
  // for (let i = 0; i < dobArr.length; i++) {
  //   var parsedValue = parseInt(dobArr[i]);
  //   parsedDob.push(parsedValue);
  // }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width / 2; x++) {
      var index = (x * 2 + y * width) * 4;

      var r = video.pixels[index];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var a = video.pixels[index + 3];

      var bright = (r + g + b) / 3;

      if (bright > 150) {
        // r = valmapped * 2;
        // g = x - valmapped*2;
        // b = valmapped * 3;
        r = y - genderValRed;
        g = y - genderValGreen;
        b = y - genderValBlue;
      } else if (bright > 70 && bright < 150) {
        // r = parsedDob[0] + genderValRed;
        // g = parsedDob[1];
        // b = x - parsedDob[2] + genderValBlue;
        r = genderValRed;
        g = genderValGreen;
        b = genderValBlue;
      } else {
        r = valmapped;
        g = valmapped;
        b = y - valmapped;
      }

      pixels[index + 0] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
      pixels[index + 3] = 255;

    }
  }
  updatePixels();
}

function noiseBlendHor() {

  var sx = dx - 10;
  var sy = dy;

  var wEnd = [100, 200, 250, 300, 400, 520, 640];
  var dxMax = random(wEnd)

  if (dx > width) {
    dx = 0;
    dy = dy + 70;
  } else if (dx == dxMax) {
    dx += 100;
  } else {
    dx += 4;
  }

  tint(occInputVal.charCodeAt(0) * 2, occInputVal.charCodeAt(1) * 2, occInputVal.charCodeAt(2) * 2, 200);
  image(snapImg, dx, dy, 50, 20, sx, sy, 150, 30);

  // copy(snapImg, sx, sy, 100, 20, dx, dy, 200, 10);
  // blend(snapImg, sx, sy, 150, 50, dx, dy, 50, 40, HARD_LIGHT);
}

function noiseBlendVer() {

  var sx = noise(0 + inc) * 640;
  var sy = noise(100 + inc) * 480;

  if (dy > height) {
    dy = 0;
    dx = dx + 100;
  } else {
    dy += 2;
  }

  inc += 0.01;

  tint(randInputVal.charCodeAt(0) * 3, randInputVal.charCodeAt(1), randInputVal.charCodeAt(2), 200);
  image(snapImg, dx, dy, 20, 100, sx, sy, 30, 150);

}

function getrandomQuestion() {
  document.getElementById('randQuestion').innerHTML = randQuestions[int(random(0, 4))];
}
