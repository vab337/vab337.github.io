let doors = document.getElementById('doors');

doors.onclick = () => {
      doors.setAttribute ('src','images/doors.gif');
      setTimeout(changePage, 3500);
}

 function changePage() {
     window.location.href = "home.html";
   }
