/**
 * Created by enigmasn on 24.01.17.
 */
'use strict';

window.renderStatistics= function(ctx,names,times){
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110,20,420,270);

  ctx.fillStyle = 'rgba(255,255,255)';
  ctx.fillRect(100,10,420,270);

  ctx.fillStyle= 'rgba(0, 0, 0)';
  ctx.font = 'PT Mono, 16px';
  ctx.fillText('Ура, Вы победили!',120,40);
  ctx.fillText('Список результатов:',120,60);

  var histoHeight = 150;
  var histoX = 40;
  var step = 50;
  var youColor = 'rgba(255, 0, 0, 1)';

  var otherSaturation = ["0.1", "0.4", "0.8", "1"];
  var rand = Math.floor(Math.random() * otherSaturation.length);
  var otherColor = 'rgba(0, 0, 255, otherSaturation[rand]);';
};

// Время прохождения игры должно быть округлено к целому числу.
