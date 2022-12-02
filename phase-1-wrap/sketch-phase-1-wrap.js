//Generative system
let points,font;
let txtArr = [];
let lines = [];

let col1, col2;

let txtInput1;
let txtInput1Val;
let txtArea;

let newLineInc;
let makeNewLine = false;



function preload() {
	font = loadFont("assets/FKGroteskNeue.ttf");
}


function setup() {
	canvas = createCanvas(600, 1000);


	txtInput1 = createInput();
	txtInput1.id('txtInput1');
	document.getElementById("txtInput1").placeholder = "Text #1";
	document.getElementById("txtInput1").focus();


	col1 = color(255);
	for (i=0; i<7; i++) {
		lines[i] = new GenType('', width/4, 0);
	}
	rectMode(CENTER);

}

function draw() {
	background(0);
 	translate(width/2, 100);



	// type1.show();
	// type1.move();
	// type1.changeText1();
	
	detectSpace();
	txtArr = txtInput1Val.split(" ");

	for (i=0; i<txtArr.length; i++) {
		lines[i].show(i*200);
		lines[i].move();
		lines[i].changeText1(txtArr[i]);
	}
	//notMakeNewLine();
}



class GenType {
	constructor(txtString, txtSize,txtYpos ) {
		this.txtString = txtString;
		this.txtSize = txtSize;
		this.txtYpos = txtYpos; 
		newLineInc = 0;

	}

	show(txtYpos) {
		let bounds = font.textBounds(this.txtString, 0, 0, this.txtSize);
		points = font.textToPoints(this.txtString, -bounds.w / 2, bounds.h + txtYpos, this.txtSize, {
			sampleFactor : 0.055,
			simplifyThreshold: 0
		});
	}


	move() {
		blendMode(DIFFERENCE);
		for (let i=0; i<points.length; i++) {
			let p = points[i];
			let s = 10 + sin(i*0.075 - frameCount * 0.15) * 5;
			fill(255);
			rect(p.x,p.y,s*2,s);
		}
		blendMode(BLEND);
	}

	newLine() {
		newLineInc=newLineInc+this.txtSize;
		//console.log(newLineInc); 
	}

	changeText1(newText) {
		this.txtString = newText;

	}

}

function keyPressed() {
	if (keyCode === 32) {
		type1.newLine();
		//saveArt();
		//window.setTimeout(reloadPage, 2000);
	} 
}

function saveArt() {
	saveCanvas(canvas, 'Du', 'png');
}

function reloadPage() {
	location.reload();
}

function detectSpace() {
	txtInput1Val = txtInput1.value();
	for (i=0; i<txtInput1Val.length ; i++) {
		if (txtInput1Val.charCodeAt(txtInput1Val.length-1) == 32 && makeNewLine==false) {
			makeNewLine = true; //do something to go to new line here 
		} 
		if (txtInput1Val.charCodeAt(txtInput1Val.length-2) == 32 && makeNewLine==true) {
			//console.log('not make'); //stop going to new line 
			makeNewLine = false;
		}
		
	}
}

function notMakeNewLine(){
	if (makeNewLine==false) {
	} 
}
	


