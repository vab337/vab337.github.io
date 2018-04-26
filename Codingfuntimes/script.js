let totoro = document.getElementById('totoro')
let introVideo = document.getElementById('introVideo')
let text = document.getElementById('text')

totoro.addEventListener("click", displayvideo)

function displayvideo() {
  introVideo.style.visibility = "visible"
}

totoro.addEventListener("click",changecolor)

function changecolor () {
  let style = document.getElementById('stylesheet')
  stylesheet.setAttribute("href", "style2.css")
}

text.addEventListener("mouseover",bigger)

function bigger() {
  text.style.fontSize = "100px" 
}
