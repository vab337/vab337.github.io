let lamp = document.getElementById('Lamp')
let playingcard = document.getElementById('PlayingCard')
let dogface = document.getElementById('DogFace')


let image = document.getElementById('image')
let original = document.getElementById('orginal')
let finalImage = document.getElementById('finalImage')


lamp.onclick = () => { //when the user click the apple
  console.log('lamp clicked')
  original.style.display = "none" //make the old image disappear
  image.setAttribute("class", "finalImageContainer") //put the gif into the place of the still image
  finalImage.setAttribute("src", "lampchoice.jpg")
  finalImage.style.display = "block" //display the hidden gif
}


dogface.onclick = () => { //when the user click the apple
  console.log('dog face clicked')
  original.style.display = "none" //make the old image disappear
  image.setAttribute("class", "finalImageContainer") //put the gif into the place of the still image
  finalImage.setAttribute("src", "dogfacechoice.jpg")
  finalImage.style.display = "block" //display the hidden gif
}

playingcard.onclick = () => {
  console.log('card clicked')
  original.style.display = "none" //make the old image disappear
  image.setAttribute("class", "finalImageContainer") //put the gif into the place of the still image
  finalImage.setAttribute("src", "cardchoice.jpg")
  finalImage.style.display = "block" //display the hidden gif
}
