'use strict';

window.renderStatistics = function (ctx, names, times) {
  // подложка
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // белое облако
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, Вы победили!', 230, 40);
  ctx.fillText('Список результатов:', 230, 60);

  var histoHeight = 150; // Высота гистограммы
  var histoX = 40; // Ширина колонки
  var columnIndent = 50; // Расстояние между колонками
  var stepX = histoX + columnIndent; // шаг через который рисуются колонки
  var youColor = 'rgba(255, 0, 0, 1)'; // цвет для колонки "Вы"

  // объявление max вне цикла!!!
  // определяем максимальное время
  var max = 0;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    var name = names[i];

    // переопределяем max в зависимости от переданных данных
    max = time > max ? time : max;
  }

  var stepY = histoHeight / max; // высота шага

  // во втором цикле с той же переменной var не ставить
  for (i = 0; i < times.length; i++) {
    // переобъявить параметры time и name!!! (новый цикл)
    time = times[i];
    name = names[i];

    var height = stepY * time;

    // выводим время в гистограмме
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.fillText(time.toFixed(), stepX * i + 150, stepX + histoHeight - height - 10); // вычитаем высоту, чтобы текст был над колонкой

    // выводим имена в гистограмму
    ctx.fillText(name, stepX * i + 150, 20 + stepX + histoHeight);

    // цвета колонок
    var opacity = (Math.random() * 0.9 + 0.1).toFixed(1);
    // умножить на разность max и min значений и вычесть min

    var otherColor = 'rgba(0, 0, 255,' + opacity + ')';

    var columnColor;

    if (name === 'Вы') {
      columnColor = youColor;
    } else {
      columnColor = otherColor;
    }

    // рисуем сами колонки
    ctx.fillStyle = columnColor;
    ctx.fillRect(stepX * i + 150, 90 + histoHeight - height, histoX, height);
  }
};
