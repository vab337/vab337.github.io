let UpperBody = document.getElementById("upper-body")
let UpArrow = document.getElementById('up-arrow')
let About = document.getElementById("about")
let Team = document.getElementById('team')

// window.onscroll = () => {
//   if (document.body.scrollTop > 200) {
//         document.getElementById("about").className = "slideIn"
//         UpperBody.style.opacity = 0
//         UpArrow.style.opacity = 1
//     } else {
//         document.getElementById("about").className = "about"
//         UpperBody.style.opacity = 1
//     }
// }

UpArrow.onclick = () => {
  window.scrollTo(0, 0)
  UpperBody.style.opacity = 1
}

window.onscroll = () => {
  if (document.body.scrollTop > 200 && document.body.scrollTop < 600) {
        About.style.opacity = 1
        About.style.paddingLeft = '2%'
        UpperBody.style.opacity = 0
        UpArrow.style.opacity = 1
    } else
      {if (document.body.scrollTop > 650) {
      Team.style.opacity = 1
      } else {
      UpperBody.style.opacity = 1
      }
}
}
