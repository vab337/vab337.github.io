let angle = 0;
let radius = 100;
let blobs = [];
let blobsLength;

var mydatabase;
var ref;

let speech;
var i = 0;
let myinput;
let allinputs = [];
let index=0;

let soundBtn;
let transBtn;
let trans;

function preload() {
  skin = loadImage('skin2.jpeg');
}

class Blob {
  constructor(x, y, z, vx, vy, vz, r) {
    this.transX = x;
    this.transY = y;
    this.transZ = z;
    this.vx = vx;
    this.vy = vy;
    this.vz = vz;
    this.r = r;
  }

  show() {
    texture(skin);
    noStroke();

    push();



    translate(this.transX, this.transY, this.transZ);

    sphere(this.r);

    pop();

    this.transX += this.vx * 0.005;
    this.transY += this.vy * 0.002;
    this.transZ += this.vz * 0.002;

    rotateX(angle*0.005);
    rotateY(angle*0.001);
    rotateZ(angle*0.002);

    angle+=0.0001;
  }

  update() {
    if (this.transX>this.r*this.r || this.transX< -(this.r*this.r) ) {
      this.vx=0;
    }
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  const firebaseConfig = {
    apiKey: "AIzaSyDqhM8CCYXidjWGgVpkLTNx6jXEjaI7SiU",
    authDomain: "persona-1f4ab.firebaseapp.com",
    databaseURL: "https://persona-1f4ab-default-rtdb.firebaseio.com",
    projectId: "persona-1f4ab",
    storageBucket: "persona-1f4ab.appspot.com",
    messagingSenderId: "156433376224",
    appId: "1:156433376224:web:17650e3bff06479dff8185",
    measurementId: "G-MSB7K36EWK"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  mydatabase = firebase.database();
  ref = mydatabase.ref('input');

  ref.on('value', gotData, errData); //on the event value, call a function to get data, and another in case there's an error

  speech = new p5.Speech(); //create speech object


  trans = document.getElementById('transcript');
  trans.style.display = "none";
  transBtn = document.getElementById('transBtn');
  transBtn.onclick = toggletrans;

}

function gotData(data) {

  // for (var i=0; i<allinputs.length; i++) {
  //     allinputs[i].remove();
  // }

  var inputs = data.val();
  var keys = Object.keys(inputs); //get the keys of all the objects
  // console.log(keys.length);
  blobsLength = keys.length;

  for (let i = 0; i < blobsLength; i++) {
    let vx = random(-10, 10);
    let vy = random(-5, 5);
    let vz = random(-10, 50);
    let v = random(-1, 1);
    let r = blobsLength;
    blobs[i] = new Blob(0, 10, -5, vx, vy, vz,r);
  }


  for (var i=0; i<keys.length; i++) {
    var k = keys[i];
    var myinput = inputs[k].userInput;
    allinputs.push(myinput);

    //create the list element
      var li = createElement('li', myinput);
      li.parent('trans-text');
  }

  console.log(allinputs);
  // console.log(blobs.length);



}

function errData(err) {
  console.log('Error!');
  console.log(err);
}



function draw() {
  background(0);

  lights();


  for (let i = 0; i < blobs.length; i++) {
    blobs[i].show();
  }

  speech.setRate(0.6);
  speech.speak(allinputs[index]);
  speech.onEnd = nextInput;

  function nextInput() {
    index = index + 1;
    console.log(index);
    if (index > allinputs.length) {
      index=0;
    } else {}
}

}

function toggletrans() {
  if (trans.style.display === "none") {
    trans.style.display = "block";
    transBtn.innerHTML = "Hide transcript";

  } else {
  trans.style.display = "none";
  transBtn.innerHTML = "Show transcript";

}
}
