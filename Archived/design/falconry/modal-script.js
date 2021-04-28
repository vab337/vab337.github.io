let modal = document.getElementById('modal')
let modalImg = document.getElementById('modalImg')
let closeButton = document.getElementById('close-button')
let arrowBack = document.getElementById('arrow-back')
let arrowFwd = document.getElementById('arrow-fwd')
let photoNum

let photo0 = document.getElementById('photo0')
let photo1 = document.getElementById('photo1')
let photo2 = document.getElementById('photo2')
let photo3 = document.getElementById('photo3')
let photo4 = document.getElementById('photo4')
let photo5 = document.getElementById('photo5')
let photo6 = document.getElementById('photo6')
let photo7 = document.getElementById('photo7')
let photo8 = document.getElementById('photo8')
let photo9 = document.getElementById('photo9')
let photo10 = document.getElementById('photo10')
let photo11 = document.getElementById('photo11')
let photo12 = document.getElementById('photo12')

closeButton.onclick = () => {
  console.log('close');
  modal.style.display = "none";
}

arrowBack.onclick = () => {
  photoNum--;
  console.log(photoNum);
  modalImg.src = "fal-" + photoNum + ".jpg";
}

arrowFwd.onclick = () => {
  photoNum++;
  console.log(photoNum);
  modalImg.src = "fal-" + photoNum + ".jpg";
}

photo0.onclick = () => {
  modal.style.display = "block";
  modalImg.src = photo0.src;
  photoNum = 0
}

photo1.onclick = () => {
  modal.style.display = "block";
  modalImg.src = photo1.src;
  photoNum = 1
}

photo2.onclick = () => {
  modal.style.display = "block";
  modalImg.src = photo2.src;
  photoNum = 2
}

photo3.onclick = () => {
  modal.style.display = "block";
  modalImg.src = photo3.src;
  photoNum = 3
}

photo4.onclick = () => {
  modal.style.display = "block";
  modalImg.src = photo4.src;
  photoNum = 4
}

photo5.onclick = () => {
  modal.style.display = "block";
  modalImg.src = photo5.src;
  photoNum = 5
}

photo6.onclick = () => {
  modal.style.display = "block";
  modalImg.src = photo6.src;
  photoNum = 6
}

photo7.onclick = () => {
  modal.style.display = "block";
  modalImg.src = photo7.src;
  photoNum = 7
}

photo8.onclick = () => {
  modal.style.display = "block";
  modalImg.src = photo8.src;
  photoNum = 8
}

photo9.onclick = () => {
  modal.style.display = "block";
  modalImg.src = photo9.src;
  photoNum = 9
}

photo10.onclick = () => {
  modal.style.display = "block";
  modalImg.src = photo10.src;
  photoNum = 10
}
