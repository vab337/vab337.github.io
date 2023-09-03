


const container = document.getElementById("container");
for (var i=0; i<40; i++) {
  const cube = document.createElement("div");
  cube.className = "cube";
  cube.id = "item" + i;
  container.appendChild(cube);

  //create top side
  const top = document.createElement("div");
  top.className = "top";
  top.id = "top" + i;
  cube.appendChild(top);

  //create div that hold the sides 
  const sidescontainer = document.createElement("div");
  cube.appendChild(sidescontainer);

  //create sides
  for(var j=0; j<4;j++) {
    const side = document.createElement("span");
    sidescontainer.appendChild(side);
    side.setAttribute("style", "--i:"+j);
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
          
          for (var j=0; j<itemsides.length; j++) {
            itemsides[j].style.height="100%";
            }
        } else {}
  }
}

// function itemClicked() {
//   for(var i=0; i<cubes.length; i++) {
//   if(cubes[i].contains(event.target)) {
//     const item = document.getElementById(this.id);

//     const itemsides = item.querySelectorAll("div>span");
//         for (var i=0; i<itemsides.length; i++) {
//           itemsides[i].style.height="150%";
//         }
//   } else {}
//   }
// }