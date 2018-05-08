let mff = document.getElementById('mff')
let sound = document.getElementById('sound')
let comics = document.getElementById('comics')
let video = document.getElementById('video')
let animation = document.getElementById('animation')

let mffsub = document.getElementById('mffsub')
let soundsub = document.getElementById('soundsub')
let comicssub = document.getElementById('comicssub')
let videosub = document.getElementById('videosub')
let animsub = document.getElementById('animsub')

mff.addEventListener("mouseover", mffover)
sound.addEventListener("mouseover", soundover)
comics.addEventListener("mouseover", comicsover)
video.addEventListener("mouseover", videoover)
animation.addEventListener("mouseover", animover)

function mffover() {
  mffcounter = true
  console.log(mffcounter)
  document.body.style.backgroundColor = "orange"
  mff.style.color = "white"
  sound.style.visibility = "hidden"
  comics.style.visibility = "hidden"
  video.style.visibility = "hidden"
  animation.style.visibility = "hidden"
  mffsub.style.display = "block"
}

function soundover() {
  document.body.style.backgroundColor = "blue"
  sound.style.color = "white"
  mff.style.visibility = "hidden"
  comics.style.visibility = "hidden"
  video.style.visibility = "hidden"
  animation.style.visibility = "hidden"
  soundsub.style.display = "block"

}

function comicsover() {
  document.body.style.backgroundColor = "crimson"
  comics.style.color = "white"
  mff.style.visibility = "hidden"
  sound.style.visibility = "hidden"
  video.style.visibility = "hidden"
  animation.style.visibility = "hidden"
  comicssub.style.display = "block"

}

function videoover() {
  document.body.style.backgroundColor = "lightSeaGreen"
  video.style.color = "white"
  mff.style.visibility = "hidden"
  sound.style.visibility = "hidden"
  comics.style.visibility = "hidden"
  animation.style.visibility = "hidden"
  videosub.style.display = "block"
  videosub.setAttribute("class", "videosub");


}

function animover() {
  document.body.style.backgroundColor = "salmon"
  animation.style.color = "white"
  mff.style.visibility = "hidden"
  sound.style.visibility = "hidden"
  comics.style.visibility = "hidden"
  video.style.visibility = "hidden"
  animsub.style.display = "block"
  animsub.setAttribute("class", "animsub");


}



mff.addEventListener("mouseleave", leave)
sound.addEventListener("mouseleave", leave)
comics.addEventListener("mouseleave", leave)
video.addEventListener("mouseleave", leave)
animation.addEventListener("mouseleave", leave)

function leave() {
  document.body.style.backgroundColor = "white";
  mff.style.visibility = "visible"
  sound.style.visibility = "visible"
  comics.style.visibility = "visible"
  video.style.visibility = "visible"
  animation.style.visibility = "visible"
  mff.style.color = "orange"
  sound.style.color = "blue"
  comics.style.color = "crimson"
  video.style.color = "lightSeaGreen"
  animation.style.color = "salmon"
  mffsub.style.display = "none"
  soundsub.style.display = "none"
  comicssub.style.display = "none"
  videosub.style.display = "none"
  animsub.style.display = "none"

}
