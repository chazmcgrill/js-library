// SMOOTH SCROLL

// Scroll function that animates the move to each section
function scrollTo(element, to, duration) {
  if (duration <= 0) {
    return;
  }
  var difference = to - window.scrollY;
  var perTick = difference / duration * 10;

  if (perTick) {
    setTimeout(function () {
      window.scroll(0, window.scrollY + perTick);
      if (window.scrollY === to) {
        return;
      }
      scrollTo(element, to, duration - 10);
    }, 10);
  }
}

// Function that calls scroll to function with the corresponding id;
function navClick(navId) {
  navId = navId ? navId.toLowerCase() : 'bio';
  var section = document.getElementById(navId);
  scrollTo(document.body, section.offsetTop, 500);
}

// Click events for navigation
var elements = document.querySelectorAll('.nav-item');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function (event) {
    navClick(event.target.innerText);
  }, false);
}

// Click event for down arrow
var arrow = document.querySelector('.arrow');
arrow.addEventListener('click', function (event) {
  navClick(event.target.id);
}, false);