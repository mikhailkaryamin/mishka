var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
navMain.classList.remove('main-nav--nojs');
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var modalWindow = document.querySelectorAll('.modal-js');
var popupSize = document.querySelector('.modal');

function modalOpen(modal) {
  modal.addEventListener('click', function(evt){
    evt.preventDefault();
    popupSize.classList.add('modal--show');
  });
}

modalWindow.forEach(function(modal){
  modalOpen(modal);
});

window.addEventListener('keydown', function(evt){
  if(evt.keyCode === 27) {
    evt.preventDefault();
    if(popupSize.classList.contains('modal--show')){
      popupSize.classList.remove('modal--show');
    }
  }
});

//Maps

ymaps.ready(init);
  function init () {
    var myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 18
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: "Большая Конюшенная, д. 19/8, офис 101"
    }, {
      iconLayout: "default#image",
      iconImageHref: "../img/icon-map-pin.svg",
      iconImageSize: [67, 100],
      iconImageOffset: [-33, -101]
    });

    myMap.geoObjects
    .add(myPlacemark)
  }
