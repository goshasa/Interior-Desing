function menuOpen() {
    let hamburger = document.querySelector('#hamburger');
    let nav = document.querySelector('#nav');
    hamburger.onclick = function() {
        hamburger.classList.toggle('hamburger_active');
        nav.classList.toggle('nav_active');
    }
    let menuLinks = document.querySelectorAll('#nav a');
    menuLinks.forEach(function(menuLink){
        menuLink.onclick = function() {
            hamburger.classList.remove('hamburger_active');
            nav.classList.remove('nav_active');
        }
    })
}
menuOpen();