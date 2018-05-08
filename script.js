let mff = document.getElementById('mff')
let sound = document.getElementById('sound')
let comics = document.getElementById('comics')
let video = document.getElementById('video')
let animation = document.getElementById('animation')

mff.addEventListener("mouseover", mffover)
sound.addEventListener("mouseover", soundover)
comics.addEventListener("mouseover", comicsover)
video.addEventListener("mouseover", videoover)
animation.addEventListener("mouseover", animationover)


mff.addEventListener("mouseleave", leave)
sound.addEventListener("mouseleave", leave)
comics.addEventListener("mouseleave", leave)
video.addEventListener("mouseleave", leave)
animation.addEventListener("mouseleave", leave)
