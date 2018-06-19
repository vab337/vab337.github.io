let screamApple = document.getElementById('Apple_1_')

let screamImage = document.getElementById('screamImage')
let screamOriginal = document.getElementById('screamOrginal')
let screamGif = document.getElementById('screamGif')


screamApple.onclick = () => { //when the user click the apple
  console.log('apple clicked')
  screamOriginal.style.display = "none" //make the old image disappear
  screamImage.setAttribute("class", "screamGifContainer") //put the gif into the place of the still image
  screamGif.style.display = "block" //display the hidden gif
}
