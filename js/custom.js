// Testimonial owlCarousel start

$('.owl-carousel.ourPartnerSlider').owlCarousel({
    loop: true,
    margin: 90,
    nav: false,
    dots: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay: true, // Enable auto-slide
    autoplayTimeout: 2000, // Auto-slide interval in milliseconds (5000ms = 5s)
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 7
        }
    }
});


// Testimonial owlCarousel end


// Sticky header


window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}









document.addEventListener("DOMContentLoaded", () => {
    const zoomElements = document.querySelectorAll(".zoom-on-load");
    zoomElements.forEach((el) => {
      setTimeout(() => {
        el.classList.add("animate");
      }, 100); // Optional delay for a smooth effect
    });
  });