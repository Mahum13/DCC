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
