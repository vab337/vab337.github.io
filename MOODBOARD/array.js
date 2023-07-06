let cols, rows;

let w,h;

let posArr = [];

function setup() {
createCanvas(600,480);
background(0);

cols = 6;
rows = 8;

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

for (let i=0; i<posArr.length; i++) {
    rect(posArr[i][0],posArr[i][1],w,h);
}

}



function draw() {

}