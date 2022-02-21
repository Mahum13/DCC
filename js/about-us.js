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


function animateOnScroll() {
  const flipContainerArray = document.getElementsByClassName("flip-container");
  Array.from(flipContainerArray).forEach(item => item.classList.remove("bounce-7"));
  // Create observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // window.alert('is visible');
        entry.target.classList.add('bounce-7');
        return;
      }

    });
  }, {rootMargin: "0px 0px -200px 0px"});
  // Tell observer which elements to track
  Array.from(flipContainerArray).forEach(item => observer.observe(item));
}
