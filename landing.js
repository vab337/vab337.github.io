var doors = document.querySelector('img');

doors.onclick = function() {
      doors.setAttribute ('src','images/doors.gif');
      setTimeout(changePage, 3500);
}

 function changePage() {
     window.location.href = "home.html";
   }
