let apple = document.getElementById('apple_1_')

let image = document.getElementById('image')
let original = document.getElementById('orginal')
let gif = document.getElementById('gif')


apple.onclick = () => { //when the user click the apple
  console.log('apple clicked')
  original.style.display = "none" //make the old image disappear
  image.setAttribute("class", "gifContainer") //put the gif into the place of the still image
  gif.style.display = "block" //display the hidden gif
}
