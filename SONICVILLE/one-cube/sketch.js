const cubes = document.getElementsByClassName("cube");
for(var i=0; i<cubes.length; i++) {
  cubes[i].addEventListener("click", itemClicked);
}

function itemClicked() {
  for(var i=0; i<cubes.length; i++) {
  if(cubes[i].contains(event.target)) {
    console.log(this.id);
    const item = document.getElementById(this.id);
    const itemsides = item.querySelectorAll("div>span");
    //console.log(itemsides);
        for (var i=0; i<itemsides.length; i++) {
          //item1sides[i].setAttribute("style","height: 150%");
          itemsides[i].style.height="100%";
        }
  } else {}
  }

}




