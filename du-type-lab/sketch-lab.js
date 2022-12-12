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
let speedScale;

let textSizeSlider, textSizeSliderP;

let bgColor, type1Color, type2Color; 



function preload() {
	font = loadFont("assets/FKGroteskNeue.ttf");
}


function setup() {
	canvas = createCanvas(windowWidth-windowWidth/4, windowHeight);
	bgColor = document.getElementById("bgColor").value;
	type1Color = document.getElementById("type1Color").value;

	// textSizeSliderP = createP("5. Text Size");
	// textSizeSliderP.id('textSizeSliderP');
	// textSizeSliderP.class('titles');
	// textSizeSlider = createSlider(0,width,0,10);
	// textSizeSlider.id('textSizeSlider');
	// textSizeSlider.class('sliders');
	// textSizeSlider.changed(slider2Change);

	txtInputP = createP("1. TEXT INPUTS");
	txtInputP.id('txtInputP');
	txtInputP.class('titles');

	txtInput1 = createInput();
	txtInput1.id('txtInput1');


	// txtInput2 = createInput();
	// txtInput2.id('txtInput2');


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

	rectW = createSlider(-50,200,0,0);//slider value pending 
	rectW.id('rectW');
	rectW.class('sliders');

	rectHP = createP("Height");
	rectHP.id('rectHP');
	rectHP.class('h2');

	rectH = createSlider(-50,200,0,0); //slider value pending
	rectH.id('rectH');
	rectH.class('sliders');

	resP = createP("4. RESOLUTION");
	resP.id('resP');
	resP.class('titles');
	res = createSlider(0.01,0.05,0.03,0);
	res.id('res');
	res.class('sliders');

	saveBtn = createButton('Press Enter to Save Artwork');
	saveBtn.id('saveBtn')




	type1 = new GenType('Đ', width/2, col1);
	rectMode(CENTER);

}

function draw() {
	bgColor = document.getElementById("bgColor").value;
	type1Color = document.getElementById("type1Color").value;

	background(bgColor);
 	translate(width/2, height / 2);
	type1.show();
	type1.move();
	type1.changeText1();
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
		speedScale = map(mouseX, 0, width, 1,80);
		blendMode(EXCLUSION);
		for (let i=0; i<points.length; i++) {
			let p = points[i];
			// let s = mouseY/10 + sin(i*0.075 - frameCount * 0.15) * 10;
			let s = mouseY/10 + sin(i*slider1.value() - frameCount * slider2.value()) * slider3.value();
			noStroke();
			//fill(this.txtCol);
			fill(type1Color);
			rect(p.x,p.y,s+rectW.value(),s+rectH.value());
		}
		blendMode(BLEND);
	}


	changeText1() {
			this.txtString = txtInput1.value();
	}


}



function slider1Change() {
}

function slider2Change() {
}

function slider3Change() {
}

function saveArt() {
	saveGif('mySketch', 2);
}

	
function keyPressed() {
	if (keyCode === ENTER) {
		saveArt();
	} 
}

