// каталог в хедере
var catalogMenu = document.querySelector('.catalog');
var catalogTitle = document.querySelector('.catalog-wrap');

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
var inputName = document.querySelector('.form-write__input_name');
var inputEmail = document.querySelector('.form-write__input_email');
var textarea = document.querySelector('.form-write__textarea');
var btnWrite = document.querySelector('.btn__write');
var form = document.querySelector('form');

var storage = localStorage.getItem("login");

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
  if(elem.classList.contains(className)) {
    elem.classList.remove(className);
  }
}


if(catalogMenu) {
  catalogMenu.addEventListener('mouseenter', function() {
    //addRemoveClass(catalogTitle);
    if(!catalogTitle.classList.contains('show-elem')) {
      catalogTitle.classList.add('show-elem');
    }
  });

  catalogMenu.addEventListener('mouseleave', function() {
    if(catalogTitle.classList.contains('show-elem')) {
      catalogTitle.classList.remove('show-elem');
    }
  });
}

if(contactsMap) {
  contactsMap.addEventListener('click', function() {
    modalMap.classList.add('show-elem');
  });
}

if(contactsLink) {
  contactsLink.addEventListener('click', function(event) {
    event.preventDefault();
    modalWrite.classList.add('show-elem');
    
    if (storage) {
      inputName.value = storage;
      inputEmail.focus();
    } else {
      inputName.focus();
    }
  });
}

form.addEventListener('submit', function(event) {
  
  if(!inputName.value || !inputEmail.value || !textarea.value) {
    event.preventDefault();
    if(!inputName.value) {
      removeClass(inputName, 'succes');
      inputName.classList.add('alert');
    } else {
      removeClass(inputName, 'alert');
      inputName.classList.add('succes');
    }

    if(!inputEmail.value) {
      removeClass(inputEmail, 'succes');
      inputEmail.classList.add('alert');
    } else {
      removeClass(inputEmail, 'alert');
      inputEmail.classList.add('succes');
    }

    if(!textarea.value) {
      removeClass(textarea, 'succes');
      textarea.classList.add('alert');
    } else {
      removeClass(textarea, 'alert');
      textarea.classList.add('succes');
    }
  } else {
    //alert(inputName.value);
    localStorage.setItem("login", inputName.value);
  }
  // var all = form.elements;
  // for(i = 0; i < all.length; i++) {
  //   if(!all[i].value && all[i].lastChild) {
  //     all[i].classList.remove('succes');
  //     all[i].classList.add('alert');
  //   } else if(all[i].value) {
  //     all[i].classList.remove('alert');
  //     all[i].classList.add('succes');
  //   }


  // }
  
});

if(modalCloseMap) {
  modalCloseMap.addEventListener('click', function() {
    removeClass(modalMap);
  });
}

if(modalCloseMessage) {
  modalCloseMessage.addEventListener('click', function() {
    removeClass(modalWrite);
  });
}

window.addEventListener('keydown', function(event) {
  if(event.keyCode === 27 ) {
    removeClass(modalMap);
    removeClass(modalWrite);
    removeClass(inputName, 'alert');
    removeClass(inputName, 'succes');
    removeClass(inputEmail, 'alert');
    removeClass(inputEmail, 'succes');
    removeClass(textarea, 'alert');
    removeClass(textarea, 'succes');
  }
});


ymaps.ready(init);
  function init(){
    var geocoder = new ymaps.geocode(
     'г. Москва, ул. Строителей, 15',

    { results: 1 }
    );           
    geocoder.then(
    function (res) {

      // координаты объекта
      var coord = res.geoObjects.get(0).geometry.getCoordinates();
      var myMap = new ymaps.Map('map', {
        // Центр карты - координаты первого элемента
        center: coord,
        // Коэффициент масштабирования
        zoom: 10
      });
      // устанавливаем максимально возможный коэффициент масштабирования - 1
      myMap.zoomRange.get(coord).then(function(range){
        myMap.setCenter(coord, range[1] - 1)
      });



      var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        coord, {

          // Свойства
          // Текст метки

          balloonContent: 'asd',
          hintContent: 'ул. Строителей, 15'
        }, 
        {
          iconImageHref: './img/index/mark.png', // картинка иконки
          iconImageSize: [40, 40], // размеры картинки
          iconImageOffset: [-10, -60] // смещение картинки
        });     
        // Добавление метки на карту
        myMap.geoObjects.add(myPlacemark);
      
    }
    );
  }
