'use strict'

var headerLinks = document.querySelectorAll('.site-list__item');

var setActiveItem = function(item) {
  item.addEventListener('click', function(evt) {
    for (var i = 0; i < headerLinks.length; i++) {
      var isActive = headerLinks[i].classList.contains('site-list__item--active');
      if (isActive) {
        headerLinks[i].classList.remove('site-list__item--active');
      }
    }
    console.log(item);
    item.classList.add('site-list__item--active');
  })
}

var setEventListener = function() {
  for (var i = 0; i < headerLinks.length; i++) {
    setActiveItem(headerLinks[i]);
  }
}

setEventListener();
