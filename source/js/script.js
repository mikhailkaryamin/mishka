var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojscript');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('main-nav__toggle--opened');
    navToggle.classList.add('main-nav__toggle--closed');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('main-nav__toggle--opened');
    navToggle.classList.remove('main-nav__toggle--closed');
  }
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('contacts__map'), {
    center: {lat: 59.938730, lng: 30.323095},
    zoom: 8
  });
}
