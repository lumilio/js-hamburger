
const hamburgerList = document.querySelector(".hamburger-menu");
const hamburgerButton = document.querySelector(".fa-bars");
const hamburgerClose = document.querySelector('.fa-times')

hamburgerButton.addEventListener("click", mobileMenu)
hamburgerClose.addEventListener("click", closeMenu)


function mobileMenu() {
    hamburgerList.style.display = "block";
}

function closeMenu() {
    hamburgerList.style.display = "none";
}









