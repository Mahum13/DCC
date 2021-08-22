function adjustOnload() {
  if (window.innerWidth < 982) {
    $('.openSidenav').css('display', 'block');
    $('.navbar').css('display', 'none');
  } else {
    $('.navbar').css('display', 'inline-block');
    $('.openSidenav').css('display', 'none');
  }
}

function openNav() {
  document.getElementById("sidenavbar").style.width = "75%";
}

function closeNav() {
  document.getElementById("sidenavbar").style.width = "0";
}

function resizeNavbar() {
  window.onresize = function() {
    if (window.innerWidth < 982) {
      $('.navbar').css('display', 'none');
      $('.openSidenav').css('display', 'block');

    } else {
      $('.navbar').css('display', 'inline-block');
      $('.openSidenav').css('display', 'none');

    }
  }
}



function showSlides() {
  var i;
  var slides = document.getElementsByClassName("nlp-intro");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace( "active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}



function partnersModal(n) {
  //document.getElementById("myModal" + n).style.dispaly = "block";
  var modal = document.getElementById('myModal' + n);
  var span = document.getElementsByClassName('close')[n];

  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("vidSlides");
  var dots = document.getElementsByClassName('demo');

  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i=0 ; i < x.length; i++) {
    x[i].style.display = "none";

  }
  // for (i=0; i < dots.length; i++) {
  //   //dots[i].className = dots[i].className.replace
  // }
  x[slideIndex - 1].style.display = "inline-block";
  // dots[slideIndex - 1].className += ""
}
