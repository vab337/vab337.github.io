
var zindex = 10;
const cubes = document.getElementsByClassName("cube");
const container = document.getElementById("container");
const tops = document.getElementsByClassName("top");


for (var i=0; i<50; i++) {
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

// var cols = 4;
// var rows = 4;
// var cubeW = 100; 

// for(var i = 0; i<cols; i++) {
//   for (var j=0; j<rows; j++) {
//     var index = i + j*cols;
//     var x = i*cubeW;
//     var y = j*60;



//     const cubes = document.getElementsByClassName("cube");
//     cubes[index].style.left = x + "px";
//     cubes[index].style.top = y + "px";
//   }
// }

//RANDOM POSITIONS:
  // for (var j=0; j<cubes.length; j++) {
  //   // var x = i*cubeW;
  //   // var y = j*60;

  //   //random positions
  //   var x = Math.floor(Math.random()*window.innerWidth);
  //   var y = Math.floor(Math.random()*window.innerHeight);

  //   cubes[j].style.left = x + "px";
  //   cubes[j].style.top = y + "px";
  // }


//RANDOM POSITIONS FROM GRID
var cols = 10;
var rows = 10;
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

