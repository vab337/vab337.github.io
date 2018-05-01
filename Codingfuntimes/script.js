let totoro = document.getElementById('totoro')
let introVideo = document.getElementById('introVideo')
let text = document.getElementById('text')
let funfun = document.getElementById('funfun')


funfun.addEventListener("mouseout", playmusic)

function playmusic() {
  music.play()
}

function displayvideo() {
  introVideo.style.display = "block"
}

totoro.addEventListener("click",changecolor)

function changecolor () {
  let style = document.getElementById('stylesheet')
  stylesheet.setAttribute("href", "style2.css")
}

text.addEventListener("mouseover",bigger)

function bigger() {
  text.style.fontSize = "100px"
  text.style.color = "crimson"

}
