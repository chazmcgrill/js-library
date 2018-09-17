// HEADER HEIGHT SETUP

var body = document.getElementsByTagName('body')[0];
var header = document.getElementsByTagName('header')[0];

// Finds height of window or client and resizes header.
function setHeaderHeight() {
  var y = window.innerHeight || document.documentElement.clientHeight || body.clientHeight;
  header.style.height = y + 'px';
}

// on window resize height function is called.
window.addEventListener('resize', function () {
  if (window, innerHeight > 480) {
    setHeaderHeight();
  }
});

setHeaderHeight();