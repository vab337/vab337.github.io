
var zindex = 10;

const container = document.getElementById("container");
for (var i=0; i<100; i++) {
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
    // side.style.display = "none";
  }
}

var cols = 10;
var rows = 10;
var cubeW = 100; 

for(var i = 0; i<cols; i++) {
  for (var j=0; j<rows; j++) {
    var index = i + j*cols;
    var x = i*cubeW;
    var y = j*60;

    const cubes = document.getElementsByClassName("cube");
    cubes[index].style.left = x + "px";
    cubes[index].style.top = y + "px";
  }
}


const tops = document.getElementsByClassName("top");
for(var i=0; i<tops.length; i++) {
  tops[i].addEventListener("click", itemClicked);
}

function itemClicked() {
  for(var i=0; i<tops.length; i++) {
    if(tops[i].contains(event.target)) {
          const item = tops[i].parentElement;
          const itemsides = item.querySelectorAll("div>span");
          item.style.zIndex = zindex;
          item.style.height ="100px";
          zindex++;
          console.log(item.style.zIndex);
          for (var j=0; j<itemsides.length; j++) {
            itemsides[j].style.height="100%";
            }
            tops[i].style.transform = "rotateX(90deg) translateZ(calc(var(--cubeW)/2))"
          } else {}
  }
}