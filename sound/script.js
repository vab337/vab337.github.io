let theAudio

function init() {
  theAudio = document.getElementById('audio')
  theAudio.play()
  theAudio.addEventListener('ended', function() {
    console.log('this is over')
    theAudio.setAttribute('src', 'sober.mp3')
    //play the new file, but when there's autoplay, it will
    //play the audio
    //setTimeout(function(),2000)
    //example setTimeout(function() {theAudio.play()},2000)
    theAudio.play()
  })
}


//properties in JS, attributes in HTML, attributes&properties have value
//use 'ended' to control events
