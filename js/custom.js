/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function () {
  $(".preloader").fadeOut(1000); // set duration in brackets
});

$(document).ready(function () {
  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  /* Smoothscroll js
  -----------------------------------------------*/
  $(function () {
    $(".navbar-default a").bind("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  /* Home Slideshow Vegas
   -----------------------------------------------*/
  $(function () {
    $("body").vegas({
      slides: [
        { src: "images/slide-img1.jpg" },
        { src: "images/slide-img2.jpg" },
        { src: "images/slide-img3.jpg" },
      ],
      timer: false,
      transition: ["zoomIn"],
      animation: ["kenburns"],
    });
  });

  /* Team carousel
  -----------------------------------------------*/
  $(document).ready(function () {
    $("#team-carousel").owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3],
      slideSpeed: 300,
      itemsDesktop: [1199, 2],
      itemsTablet: [768, 1],
      itemsTabletSmall: [985, 2],
      itemsMobile: [479, 1],
    });
  });

  /* Back to Top
  -----------------------------------------------*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".go-top").fadeIn(200);
    } else {
      $(".go-top").fadeOut(200);
    }
  });
  // Animate the scroll to top
  $(".go-top").click(function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();
});

const btn = document.getElementById("button");
var id = document.getElementById("email");
var nameInput = document.getElementById("name");
var message = document.getElementById("message");
function changeButton() {
  btn.value = "Email Sent!!";
  btn.style.background = "#00ff00";
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "padsdrive";
  const templateID = "template_iz9p55e";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      changeButton();
      message.value = "";
      nameInput.value = "";
      id.value = "";
      setTimeout(() => {
        btn.value = "Send Email";
        btn.style.background = "#e44c65";
      }, 3000);
    },
    (err) => {
      btn.value = "Something went wrong... try again.";
      message.value = "";
      nameInput.value = "";
      id.value = "";
      setTimeout(() => {
        btn.value = "Send Email";
      }, 5000);
    }
  );
});
