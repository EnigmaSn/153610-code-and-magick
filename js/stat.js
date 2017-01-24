'use strict';

window.renderStatistics= function(ctx,names,times){

  // эта строчка тоже не нужна?
  var canvas = document.querySelector('canvas');

  // подложка
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110,20,420,270);

  //белое облако
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillRect(100,10,420,270);

  ctx.fillStyle= 'rgba(0, 0, 0, 1)';
  ctx.font = 'PT Mono, 16px';
  ctx.fillText('Ура, Вы победили!',230,40);
  ctx.fillText('Список результатов:',230,60);

  // определяем максимальное и минимальное время
  var max = 0;
  var min = Infinity;

  // переопределяет min и max в зависимости от переданных данных
  times.forEach(function (time){
    if (time > max) {
      max = time;
    }
    if (time < min) {
      min = time;
    }
  });

  var histoHeight = 150; // Высота гистограммы
  var histoX = 40; // Ширина колонки
  var columnIndent = 50; // Расстояние между колонками
  var stepY = histoHeight/ (max-min); // высота шага
  var stepX = histoX + columnIndent; // шаг через который рисуются колонки(?)
  var youColor = 'rgba(255, 0, 0, 1)'; // цвет для колонки "Вы"

  // случайная прозрачность соперников
  var otherSaturation = ["0.1", "0.4", "0.8", "1"];
  var rand = Math.floor(Math.random() * otherSaturation.length);
  var otherColor = 'rgba(0, 0, 255, otherSaturation[rand]);';


  for(var i = 0 ; i < times.length; i++ ) {
    var time = times[i];
    var name = names[i];

    // высота конкретной колонки
    var height = stepY * (time - min);

    // выводим текст в гистограмме
    // toFixed(0) округляет значение до целого
    // выпить и понять
    ctx.fillText(time.toFixed(), histoX + columnIndent * i, stepX +  histoHeight- height);
  }
};
