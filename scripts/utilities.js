window.onscroll = function() {
    var yOffset = window.pageYOffset;
    var windowHeight = window.innerHeight;
    if (yOffset > windowHeight/2) {
        document.getElementsByClassName("arrow")[0].classList.add("scrolled");
    } else {
        document.getElementsByClassName("arrow")[0].classList.remove("scrolled");
    }
}

function scrollToDescription() {
    console.log("hello");
    window.scrollTo(0, window.innerHeight - document.getElementsByClassName("navbar-container")[0].offsetHeight);
}