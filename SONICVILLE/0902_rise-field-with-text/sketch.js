
var zindex = 10;
const cubes = document.getElementsByClassName("cube");
const container = document.getElementById("container");
const tops = document.getElementsByClassName("top");


for (var i=0; i<40; i++) {
  const cube = document.createElement("div");
  cube.className = "cube";
  cube.id = "item" + i;
  container.appendChild(cube);
  cube.setAttribute("style", "--j:"+i);


  //create div that hold the sides 
  const sidescontainer = document.createElement("div");
  cube.appendChild(sidescontainer);

  //create top side
  const top = document.createElement("div");
  top.className = "top";
  top.id = "top" + i;
  cube.appendChild(top);

  //create sides
  for(var j=0; j<4;j++) {
    const side = document.createElement("span");
    sidescontainer.appendChild(side);
    side.setAttribute("style", "--i:"+j);
  }
}

for (var a = 0; a < cubes.length; a++) {
  const itemsides = cubes[a].querySelectorAll("div>span");
  for (var b = 0; b <4; b++)
  itemsides[3].classList.add("h1text");
  itemsides[1].classList.add("h2text");
  itemsides[2].classList.add("h3text");
}



//INSERT TEXT
document.getElementById("h1input").addEventListener("change", updateValue);
document.getElementById("h2input").addEventListener("change", updateValue);
document.getElementById("h3input").addEventListener("change", updateValue);

document.getElementById("h1factor").addEventListener("change", updateValue);
document.getElementById("h2factor").addEventListener("change", updateValue);
document.getElementById("h3factor").addEventListener("change", updateValue);


function updateValue() {
  const h1elements = document.getElementsByClassName("h1text");
  const h1factor = document.getElementById("h1factor").value;
  
  for (var i = 0; i<h1elements.length; i++) {
    var containerWidth = h1elements[i].offsetWidth; 
    h1elements[i].style.fontSize = Math.floor(containerWidth*h1factor/100) + "px";
    h1elements[i].innerText = document.getElementById("h1input").value;
  }


  const h2elements = document.getElementsByClassName("h2text");
  const h2factor = document.getElementById("h2factor").value;

  for (var i = 0; i<h2elements.length; i++) {
    var containerWidth = h2elements[i].offsetWidth; 
    h2elements[i].style.fontSize = Math.floor(containerWidth*h2factor/120) + "px";
    h2elements[i].innerText = document.getElementById("h2input").value;
  }


  const h3elements = document.getElementsByClassName("h3text");
  const h3factor = document.getElementById("h3factor").value;

  for (var i = 0; i<h3elements.length; i++) {
    var containerWidth = h3elements[i].offsetWidth; 
    h3elements[i].style.fontSize = Math.floor(containerWidth*h3factor/200) + "px";
    h3elements[i].innerText = document.getElementById("h3input").value;
  }
}



//ROTATE
document.getElementById("rotatebtn").addEventListener("click", rotateScene);
var isRotating = false;

function rotateScene() {
  if(isRotating == false) {
  container.classList.add("animator");
  isRotating = true;
} else {
  container.classList.remove("animator");
  isRotating = false;
}

}


//CHANGE COLOR 
document.getElementById("color1").addEventListener("change", updateColor);
document.getElementById("color2").addEventListener("change", updateColor);

function updateColor() {
  console.log("linear-gradient(" + document.getElementById("color1").value + "," + document.getElementById("color2").value + ");");
  for (var a = 0; a < cubes.length; a++) {
    const itemsides = cubes[a].querySelectorAll("div>span");
    for (var b = 0; b <itemsides.length; b++) {
    itemsides[b].classList.add("changeBg");
    itemsides[b].style.background = "linear-gradient(" + document.getElementById("color1").value + "," + document.getElementById("color2").value + ")";
  }}

}


//RANDOM POSITIONS FROM GRID
var cols = 10;
var rows = 15;
var gridArr = []

var w = innerWidth/cols;
var h = innerHeight/rows;
for (var i=0; i<cols; i++) {
  for(var j=0; j<rows; j++) {
      var xpos = i*w;
      var ypos = j*h;
      var index = i + j*cols; 
      gridArr[index] = new Array(xpos,ypos);
  }
}

  for (var j=0; j<cubes.length; j++) {
    var randomGrid = Math.floor(Math.random()*gridArr.length);
    var randomWidth = Math.floor(Math.random()*100+10);
  
    //random positions
    var x = Math.floor(gridArr[randomGrid][0]);
    var y = Math.floor(gridArr[randomGrid][1]);
    cubes[j].style.width = randomWidth + "px";
    cubes[j].style.height = randomWidth + "px";
    cubes[j].style.left = x + "px";
    cubes[j].style.top = y + "px";
    tops[j].style.width = randomWidth + "px";
    tops[j].style.height = randomWidth + "px";
    tops[j].style.transform = "rotateX(90deg) translateZ(calc(" + randomWidth + "px" + "/2*(-1)))";

    const item = tops[j].parentElement;
    item.style.height ="100px";
    const itemsides = item.querySelectorAll("div>span");
    for (var i=0; i<itemsides.length; i++) {
      itemsides[i].style.transform = "rotateY(calc(90deg*var(--i))) translateZ(calc(" + randomWidth +"px" + "/2))";
    }
  }




//CLICK EVENT LISTENER 
  
for(var i=0; i<tops.length; i++) {
  tops[i].addEventListener("click", itemClicked);
}

function itemClicked() {
  for(var i=0; i<tops.length; i++) {
    if(tops[i].contains(event.target)) {
          const item = tops[i].parentElement;
          const itemsides = item.querySelectorAll("div>span");
          item.style.zIndex = zindex;
          // item.style.height ="100px";
          zindex++;
          console.log(item.style.zIndex);
          for (var j=0; j<itemsides.length; j++) {
            itemsides[j].style.height="100%";
            }
            var itemHeight = item.offsetHeight;
            tops[i].style.transform = "rotateX(90deg) translateZ(calc(" + itemHeight + "px" + "/2))";
          } else {}
  }
}


//orbit control

var lastMouseX = 0,
	lastMouseY = 0;
var rotX = 0,
	rotY = 0;

$(document).on("mousedown", function(ev) {
	lastMouseX = ev.clientX;
	lastMouseY = ev.clientY;
	$(document).on("mousemove", mouseMoved);
});
$(document).on("mouseup", function() {
	$(document).off("mousemove", mouseMoved);
});

function mouseMoved(ev) {
	var deltaX = ev.pageX - lastMouseX;
	var deltaY = ev.pageY - lastMouseY;

	lastMouseX = ev.pageX;
	lastMouseY = ev.pageY;

	rotY -= deltaX * -0.1;
	rotX += deltaY * -0.1;

	$("#container").css("transform", "rotateX( " + rotX + "deg) rotateY(" + rotY + "deg)");
}

//HIDE CONTROLS
document.getElementById("hidecontrols").addEventListener("click", hideControls);
var controlsHidden = false;

function hideControls() {
  if(controlsHidden == false) {
    document.getElementById("inputscontainer").classList.add("controlshidden");
    controlsHidden = true;
    console.log(controlsHidden);
  } else {
    document.getElementById("inputscontainer").classList.remove("controlshidden");
    controlsHidden = false;
    console.log(controlsHidden);

  }
}


