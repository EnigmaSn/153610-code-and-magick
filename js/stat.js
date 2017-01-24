'use strict';

window.renderStatistics= function(ctx,names,times){
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');

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

  // var histoHeight = 150;
  // var histoX = 40;
  // var step = 50;
  // var columnIndent = 50;
  // var youColor = 'rgba(255, 0, 0, 1)';

  //случайная прозрачность соперников
  // var otherSaturation = ["0.1", "0.4", "0.8", "1"];
  // var rand = Math.floor(Math.random() * otherSaturation.length);
  // var otherColor = 'rgba(0, 0, 255, otherSaturation[rand]);';

  // Переменная для задания отступа между колонками. Первая колонка будет расположена в 30 пикселях от левого края облака
  var indent = 30;

  /*
   Вычисляем максимальное время среди участников.
   Это максимальная колонка на гистограмме.
   От её величины будут отрисовываться другие колонки.
   Метод Math.max() возвращает наибольшее из нуля или более чисел.
   */
  var maxHeight = Math.max.apply(null, times);

  // вызываем функцию drawColumn в цикле, перебирая значения из массивов names и times
  for (var i = 0; i < names.length; i++) {
    drawColumn(names[i], times[i]);
  }

  /*
   Функция принимает имя игрока и его время и отрисовывает на основании этого колонку в гистограмме.
   */
  function drawColumn(name, time) {
    var columnHeight = getHeight(time);
    // Переменная, хранящая цвет колонки. Если пользователь с именем Вы, то колонка красная. В ином случае - синяя с рандомным значением прозрачности
    var columnColor;
    if (name === 'Вы') {
      columnColor = 'rgba(255, 0, 0, 1)';
    } else {
      var opacity = (Math.random(0.1, 1) * (1 - 0.1) + 0.1).toFixed(1); // запомнить
      columnColor = 'rgba(0, 0, 255, ' + opacity + ')';
    }

    /*
     Отрисовываем имя.
     */
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.font = '16px PT Mono';
    ctx.fillText(name, 110 + indent, 260);

    /*
     Отрисовываем колонку.
     Координата y рассчитывается исходя из высоты колонки.
     90 - количество пикселей от верха облака.
     150 - высота гистограммы.
     */
    ctx.fillStyle = columnColor;
    ctx.fillRect(110 + indent, 90 + 150 - columnHeight, 40, columnHeight);

    // Отрисовываем время
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.font = '16px PT Mono';
    ctx.fillText(parseInt(time, 10), 110 + indent, 80 + 150 - columnHeight);

    // На каждой итерации увеличиваем значение переменной indent
    indent += 90;
  }

  /*
   Вычисляем высоту отображаемой колонки
   Значение 140 - максимальная высота колонки. Эта высота будет у колонки игрока с максимальным временем.
   Все остальные колонки получат высоту, пропорциональную от максимальной.
   */
  function getHeight(time) {
    return 140 / maxHeight * time;
  }
};
