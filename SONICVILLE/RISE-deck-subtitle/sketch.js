// const cubes = document.getElementsByClassName("cube");
// for(var i=0; i<cubes.length; i++) {
//   cubes[i].addEventListener("click", itemClicked);
// }

// function itemClicked() {
//   for(var i=0; i<cubes.length; i++) {
//   if(cubes[i].contains(event.target)) {
//     console.log(this.id);
//     const item = document.getElementById(this.id);
//     const itemsides = item.querySelectorAll("div>span");
//     //console.log(itemsides);
//         for (var i=0; i<itemsides.length; i++) {
//           //item1sides[i].setAttribute("style","height: 150%");
//           itemsides[i].style.height="100%";
//         }
//   } else {}
//   }
// }


const tops = document.getElementsByClassName("top");
for(var i=0; i<tops.length; i++) {
  tops[i].addEventListener("click", itemClicked);
}

function itemClicked() {
  for(var i=0; i<tops.length; i++) {
  if(tops[i].contains(event.target)) {
    console.log(this.id);
    const item = tops[i].parentElement;
    const itemsides = item.querySelectorAll("div>span");
    for (var j=0; j<itemsides.length; j++) {
      itemsides[j].style.height="100%";
      }

  } else {}
  }
}


const textInput=document.getElementById('textInput');
const innertext = document.getElementById('innertext');

textInput.addEventListener('change', () => {
  innertext.innerText = textInput.value;
})




