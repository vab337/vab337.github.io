let c1 = document.getElementById('C1')
let c2 = document.getElementById('C2')
let c3 = document.getElementById('C3')
let a1 = document.getElementById('A2')



let name = document.getElementById('name')
let description = document.getElementById('description')


c1.addEventListener("click", displayinfoc1)
c2.addEventListener("click", displayinfoc2)
c3.addEventListener("click", displayinfoc3)
a2.addEventListener("click", displayinfoa1)




function displayinfoc1() {
  name.innerHTML = "C1 - Experimental Research Building";
  description.innerHTML = "The ERB supports advanced research and cross-disciplinary collaborations in the sciences and engineering, housing labs organized around multidisciplinary areas of research, extensive core facilities, and instructional labs.";
}

function displayinfoc2() {
  name.innerHTML = "C2 - Campus Center";
  description.innerHTML = "The focal point of NYU Abu Dhabi, the building serves as a gathering point for the community and houses a range of spaces for student life, meeting rooms, lounges, informal study spaces, restaurants, and athletics facilities.";
}

function displayinfoc3() {
  name.innerHTML = "C3 - The Arts Center";
  description.innerHTML = "The Arts Center at NYU Abu Dhabi, designed by the acclaimed Rafael Viñoly Architects with acoustics by Shen Milsom & Wilke, is a multi-purpose complex of theaters and performance venues, rehearsals rooms, film editing studios, classrooms, and workshops. </br></br> The Arts Center is the house to Visual Arts, Music, Theater, Film, and Interactive Media Studios";
}

function displayinfoa2() {
  name.innerHTML = "A2 - Computational Research Building";
  description.innerHTML = "The Arts Center at NYU Abu Dhabi, designed by the acclaimed Rafael Viñoly Architects with acoustics by Shen Milsom & Wilke, is a multi-purpose complex of theaters and performance venues, rehearsals rooms, film editing studios, classrooms, and workshops. </br></br> The Arts Center is the house to Visual Arts, Music, Theater, Film, and Interactive Media Studios";
}
