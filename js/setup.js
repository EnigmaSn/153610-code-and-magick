'use strict';

// открытие / закрытие окна настройки персонажа
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});
setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

// валидация имени персонажа
var userName = document.querySelector('.setup-user-name');

userName.setAttribute('maxlength', 50);
userName.setAttribute('required', true);

// Изменение цвета мантии персонажа по нажатию
var wizardCoat = document.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = wizardCoatColors[Math.floor(Math.random() * wizardCoatColors.length)];
});

// Изменение цвета глаз персонажа по нажатию
var wizardEyes = document.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizardEyesColors[Math.floor(Math.random() * wizardEyesColors.length)];
});

// Изменение цвета фаерболов по нажатию
var fireballWrap = document.querySelector('.setup-fireball-wrap');
var fireballWrapColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
];

fireballWrap.addEventListener('click', function () {
  fireballWrap.style.background = fireballWrapColors[Math.floor(Math.random() * fireballWrapColors.length)];
});


