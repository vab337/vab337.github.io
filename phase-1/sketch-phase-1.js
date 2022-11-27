//Generative system
let points,font;
let type1;
let type2;
let col1, col2;

let txtInput1;
let txtArea;



function preload() {
	font = loadFont("assets/FKGroteskNeue.ttf");
}


function setup() {
	canvas = createCanvas(windowWidth, windowHeight);

	//txtArea = createElement('textarea');

	txtInput1 = createInput();
	//txtInput1 = createElement('textarea');
	txtInput1.id('txtInput1');
	document.getElementById("txtInput1").placeholder = "Text #1";
	document.getElementById("txtInput1").focus();

	// saveBtn.mousePressed(saveArt);


	col1 = color(255,0,0);
	col2 = color(0,0,255);
	type1 = new GenType('SHADOW', width/4, col1);
	rectMode(CENTER);

}

function draw() {
	background(0);
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
			sampleFactor : 0.03,
			simplifyThreshold: 0
		});
	}


	move() {
		blendMode(DIFFERENCE);
		for (let i=0; i<points.length; i++) {
			let p = points[i];
			let s = mouseY/10 + sin(i*0.075 - frameCount * 0.15) * 10;
			fill(this.txtCol);
			rect(p.x,p.y,s,s);
		}
		blendMode(BLEND);
	}

	changeText1() {
			this.txtString = txtInput1.value();
	}

}


function keyPressed() {
	if (keyCode === ENTER) {
		saveArt();
		window.setTimeout(reloadPage, 2000);
	} 
}

function saveArt() {
	saveCanvas(canvas, 'Du', 'png');
}

function reloadPage() {
	location.reload();
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