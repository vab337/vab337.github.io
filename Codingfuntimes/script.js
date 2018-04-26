let totoro = document.getElementById('totoro')
let introVideo = document.getElementById('introVideo')

totoro.addEventListener("click", displayvideo)

function displayvideo() {
  introVideo.style.visibility = "visible"
}

totoro.addEventListener("click",changecolor)

function changecolor () {
  let style = document.getElementById('stylesheet')
  stylesheet.setAttribute("href", "style2.css")
}
