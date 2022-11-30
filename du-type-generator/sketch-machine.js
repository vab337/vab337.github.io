//Generative system
let points,font;
let type1;
let type2;
let col1, col2;

let txtInputP,adjustP; 
let adjust1, adjust2, adjust3;
let rectP, rectWP, rectHP;

let txtInput1, txtInput2;
let slider1, slider2, slider3;
let rectW, rectH;
let res, resP;
let saveBtn;



function preload() {
	font = loadFont("assets/FKGroteskNeue.ttf");
}


function setup() {
	canvas = createCanvas(windowWidth-windowWidth/4, windowHeight);

	txtInputP = createP("1. TEXT INPUTS");
	txtInputP.id('txtInputP');
	txtInputP.class('titles');

	txtInput1 = createInput();
	txtInput1.id('txtInput1');
	//document.getElementById("txtInput1").placeholder = "Text #1";
	//txtInput1.changed(txt1Change);

	txtInput2 = createInput();
	txtInput2.id('txtInput2');
	//document.getElementById("txtInput2").placeholder = "Text #2";

	adjustP = createP("2. ADJUSTMENTS");
	adjustP.id('adjustP');
	adjustP.class('titles');

	adjust1 = createP("Piece movements");
	adjust1.id('adjust1');
	adjust1.class('h2');
	slider1 = createSlider(0.015,6.5,0.075,0);
	slider1.id('slider1');
	slider1.class('sliders');
	slider1.changed(slider1Change);

	adjust2 = createP("Fidgety");
	adjust2.id('adjust2');
	adjust2.class('h2');
	slider2 = createSlider(0.025,0.5,0.15,0);
	slider2.id('slider2');
	slider2.class('sliders');
	slider2.changed(slider2Change);


	adjust3 = createP("Speed & Scale");
	adjust3.id('adjust3');
	adjust3.class('h2');
	slider3 = createSlider(1,80,10,0);
	slider3.id('slider3');
	slider3.class('sliders');
	slider3.changed(slider3Change);


	rectP = createP("3. PIECE DIMENSIONS");
	rectP.id('rectP');
	rectP.class('titles');

	
	rectWP = createP("Width");
	rectWP.id('rectWP');
	rectWP.class('h2');

	rectW = createSlider(-50,50,0,0);//slider value pending 
	rectW.id('rectW');
	rectW.class('sliders');

	rectHP = createP("Height");
	rectHP.id('rectHP');
	rectHP.class('h2');

	rectH = createSlider(-50,50,0,0); //slider value pending
	rectH.id('rectH');
	rectH.class('sliders');

	resP = createP("4. RESOLUTION");
	resP.id('resP');
	resP.class('titles');
	res = createSlider(0.01,0.09,0.03,0);
	res.id('res');
	res.class('sliders');

	saveBtn = createButton('Press Enter to Save Artwork');
	//saveBtn.mousePressed(saveArt);
	saveBtn.id('saveBtn')



	col1 = color(255);
	col2 = color(255);
	type1 = new GenType('SHADOW', width/4, col1);
	type2 = new GenType('A', width/4, col2);
	rectMode(CENTER);

}

function draw() {
	background(0);
 	translate(width/2, height / 2);
	type1.show();
	type1.move();
	type1.changeText1();

	type2.show();
	type2.move();
	type2.changeText2();
	//noLoop();
}



class GenType {
	constructor(txtString, txtSize, txtCol) {
		this.txtString = txtString; 
		this.txtSize = txtSize;
		this.txtCol = txtCol; 
	}

	show() {
		let bounds = font.textBounds(this.txtString, 0, 0, this.txtSize);
		points = font.textToPoints(this.txtString, -bounds.w / 2, bounds.h / 2, this.txtSize, {
			sampleFactor : res.value(),
			simplifyThreshold: 0
		});

	}


	move() {
		blendMode(DIFFERENCE);
		for (let i=0; i<points.length; i++) {
			let p = points[i];
			// let s = mouseY/10 + sin(i*0.075 - frameCount * 0.15) * 10;
			let s = mouseY/10 + sin(i*slider1.value() - frameCount * slider2.value()) * slider3.value();

			fill(this.txtCol);
			rect(p.x,p.y,s+rectW.value(),s+rectH.value());
		}
		blendMode(BLEND);
	}

	changeText1() {
			this.txtString = txtInput1.value();
	}

	changeText2() {
		this.txtString = txtInput2.value();
}
}



function slider1Change() {
}

function slider2Change() {
}

function slider3Change() {
}

function saveArt() {
	saveCanvas(canvas, 'Du', 'png');
}

	
function keyPressed() {
	if (keyCode === ENTER) {
		saveArt();
	} 
}

//mouseY/10 + sin(i*0.075<movement of the squares> - frameCount * 0.15) *  30 <slower/faster>;		


	// function genType(txtString, txtSize) {
// 	let bounds = font.textBounds(txtString, 0, 0, txtSize);
// 	points = font.textToPoints(txtString, -bounds.w / 2, bounds.h / 2, txtSize, {
// 		sampleFactor : 0.05,
// 		simplifyThreshold: 0
		
// 	});
// }


	// blendMode(DIFFERENCE);
		// for(let i = 0; i < points.length; i++) {
		// 	let p = points[i];
		// 	let s = mouseY / 10 + sin(i * 0.025 + frameCount * 0.05) *10;
		// 	noStroke();
		// 	fill(25, 59, 227);
		// 	circle(p.x, p.y, s);
		// 	//rect(p.x, p.y, s,s*2);
		// }	
		// blendMode(BLEND);


//RECT 
//let s = 30 + sin(i*0.5 + frameCount * 0.15) *10;
//rect(p.x,p.y,s,s);


// let s = mouseY/10 + sin(i*6.5 - frameCount * 0.05) *80;
// fill(this.txtCol);
// ellipse(p.x,p.y,s/2,s/2);

// let s = mouseY/10 + sin(i*0.075 - frameCount * 0.25) * 30;
// fill(this.txtCol);
// rect(p.x,p.y,s/2,s/2);


// let s = mouseY/10 + sin(i*0.075 - frameCount * 0.15) * 30;
// fill(this.txtCol);
// rect(p.x,p.y,s,s);

//EXPAND IN BOTH DIRECTIONS - EXTREME 
// let s = mouseY/10 + sin(i*0.075 - frameCount * 0.15) * 30;
// fill(this.txtCol);
// rect(p.x,p.y,s,s-50);
