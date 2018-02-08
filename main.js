window.onscroll = function() { RevealAbout()};

function RevealAbout() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("about").className = "slideIn";
    } else {
        document.getElementById("about").className = "about";
    }
}
