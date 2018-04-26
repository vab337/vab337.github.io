let totoro = document.getElementById('totoro')
let introVideo = document.getElementById('introVideo')

totoro.onlick = () => {
  let style = document.getElementById('stylesheet')
  stylesheet.setAttribute("href", "style2.css")
}

totoro.addEventListener("click", displayvideo)

function displayvideo() {
  introVideo.style.visibility = "visible"
}
