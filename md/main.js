console.log('hello-world')

let colors = ['#ef5350', 'ef5350','#ffa000', '#00796b', '#4a148c','#e91e63', '#fbc02d',
'#263238', '#263238', '#3f51b5', '#ff8a65', '#ffb74d','#00796b', '#4a148c']

let BackgroundColor
let i, s

for (s=1; s < 11; s++) {
for (i=1; i<colors.length; i++) {
  BackgroundColor = colors[i]
  console.log(BackgroundColor)
  let thing = document.getElementsByClassName('thing')[i*s]
  thing.style.backgroundColor = BackgroundColor
  }
}
