
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









/* function closeMenu() {
    hamburgerList.hide('active');
} */

/* /* const navLink = document.querySelectorAll(".hamburger-menu a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburgerButton.remove("active");
    hamburgerList.remove("active");
} 


 */

/* $(function() {
    $(".toggle-menu").click(function() {
      $(this).toggleClass("active");
      $('.menu-drawer').toggleClass("open");
    });
  }); */


/*   $('.fa-bars').on('click', function () {
    $('.menu').addClass('open');
  });
  
  $( '.fa-times' ).on("click", function(){
    $('.menu').removeClass('open');
  });



hamburgerClose.on("click", function(){ hamburgerList.hide(); }); */