let c1 = document.getElementById('C1')
let c2 = document.getElementById('C2')
let c3 = document.getElementById('C3')
let a2 = document.getElementById('A2')
let a3 = document.getElementById('A3')
let a4 = document.getElementById('A4')
let a5 = document.getElementById('A5')
let a6 = document.getElementById('A6')
let d2 = document.getElementById('D2')


let name = document.getElementById('name')
let description = document.getElementById('description')


c1.addEventListener("click", displayinfoc1)
c2.addEventListener("click", displayinfoc2)
c3.addEventListener("click", displayinfoc3)
a2.addEventListener("click", displayinfoa2)
a3.addEventListener("click", displayinfoa3)
a4.addEventListener("click", displayinfoa4)
a5.addEventListener("click", displayinfoa5)
a6.addEventListener("click", displayinfoa6)
d2.addEventListener("click", displayinfod2)


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
  description.innerHTML = "<ul> Center for Prototype Climate Modeling </ul> <ul> Center for Global Sea Level Change </ul> <ul> Center for Cyber Security	</ul> <ul> Center for Space Science </ul> <ul> Computational Approaches to Modeling Language Lab </ul> <ul> Teaching, Learning and Development Lab </ul>";
}

function displayinfoa3() {
  name.innerHTML = "A3 - West Administration Building";
  description.innerHTML = "";
}

function displayinfoa4() {
  name.innerHTML = "A4 - East Administration Building";
  description.innerHTML = "";
}

function displayinfoa5() {
  name.innerHTML = "A5 - Social Science Building";
  description.innerHTML = "<ul> Center for Technology and Economic Development </ul> <ul> Global TIES for Children </ul> <ul> eARThumanities Research Initiative </ul> <ul> Narrative Technologies and Spatial Installations Lab </ul>";
}

function displayinfoa6() {
  name.innerHTML = "A6 - Arts and Humanities Building";
  description.innerHTML = "<ul> Library of Arabic Literature </ul> <ul> Humanities Research Fellowship Program </ul> <ul> Social Science Experimental Lab </ul> <ul> Dhakira Center for Heritage Studies </ul> <ul> Falconry Research Project";
}

function displayinfod2() {
  name.innerHTML = "East Dining Hall";
  description.innerHTML = "Food Waste Research";
}
