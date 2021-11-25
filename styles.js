$(window).on("load", function() {
  $(".loader-wrapper").delay(1000).fadeOut("slow");
});

mybutton = document.getElementById("myBtn");
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function(event) {
  var scrollpos = localStorage.getItem('scrollpos');
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function(e) {
  localStorage.setItem('scrollpos', window.scrollY);
};

$(document).ready(function() {
  $('.frame').click(function() {
    $('.top').addClass('open');
    $('.message').addClass('pull');
  })
});

let moon = document.getElementById('moon');
let front_scene = document.getElementById('front_scene');
let middle_scene = document.getElementById('middle_scene');
let mountainsandsky = document.getElementById('mountainsandsky');
let text = document.getElementsByClassName("h2");
let birds = document.getElementById('birds');

window.addEventListener('scroll', function() {
  let value = window.scrollY;
  mountainsandsky.style.top = value * 0.4 + 'px';
  birds.style.left = value * 0.5 + 'px';
  birds.style.top = value * -0.05 + 'px';
  moon.style.top = value * 0.8 + 'px';
  middle_scene.style.top = value * 0.2 + 'px';
  text.style.top = value * 5 + 'px';
});
