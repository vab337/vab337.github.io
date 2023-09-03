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

    tops[i].style.transform = "rotateX(90deg) translateZ(calc(var(--cubeW)/2))"
  } else {}


  }
}


/*$(document).on("mousemove", function(ev) {
	var degY = 360*(ev.pageX/$(document).width());
	var degX = 360*(ev.pageY/$(document).height());
	
	$("#cube").css("transform", "translateZ( -100px) rotateY( "+degY+"deg) rotateX("+degX+"deg)");
});*/

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





