let works = document.getElementById('workItem')
let thumbs = document.getElementsByClassName('workItem-picture')

works.addEventListener("mouseover", moveup);

function moveup() {
  console.log('moveupstarted')
  thumbs.style.transform = "translate(0px, -10px)";
}
