// каталог в хедере
var catalogMenu = document.querySelector('.catalog-menu');
var catalogTitle = document.querySelector('.catalog__title');

// клаасс на пагинацию в списке
var listNavPage = document.querySelector('.list-nav__page');
var listNavLink = document.querySelector('.list-nav__link');

// карта по клику
var modalMap = document.querySelector('.modal-map');
var contactsMap = document.querySelector('.contacts-map');
var modalCloseMap = document.querySelector('.modal-close__map');

// форма связи по клику
var modalWrite = document.querySelector('.modal-write');
var contactsLink = document.querySelector('.contacts__link');
var modalCloseMessage = document.querySelector('.modal-close__message');


var addRemoveClass = function(elem, className) {
  if(className === undefined) {
    className = 'show-elem';
  }
  elem.classList.contains(className) ? elem.classList.remove(className) : elem.classList.add(className);
}

var removeClass = function(elem, className) {
  if(className === undefined) {
    className = 'show-elem';
  }
  elem.classList.remove(className);
}


if(catalogTitle) {
  catalogTitle.addEventListener('click', function() {
    addRemoveClass(catalogMenu);
  });
}

if(contactsMap) {
  contactsMap.addEventListener('click', function() {
    addRemoveClass(modalMap);
  });
}

if(contactsLink) {
  contactsLink.addEventListener('click', function(event) {
    event.preventDefault();
    addRemoveClass(modalWrite);
  });
}

if(modalCloseMap) {
  modalCloseMap.addEventListener('click', function() {
    addRemoveClass(modalMap);
  });
}

if(modalCloseMessage) {
  modalCloseMessage.addEventListener('click', function() {
    addRemoveClass(modalWrite);
  });
}

  

window.addEventListener('keydown', function(event) {
  if(event.keyCode === 27 ) {
    removeClass(modalMap);
    removeClass(modalWrite);
  }
});



