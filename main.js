

const hamburgerButton= document.querySelector(".fa-bars");
const hamburgerList = document.querySelector(".hamburger-menu");
hamburgerButton.addEventListener("click", mobileMenu)


function mobileMenu() {
    hamburgerButton.classList.toggle("active");
    hamburgerList.classList.toggle("active");
}

const navLink = document.querySelectorAll(".hamburger-menu a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburgerButton.remove("active");
    hamburgerList.remove("active");
}


