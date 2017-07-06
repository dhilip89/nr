var fs = require('fs');
var zrender = require('../lib/zrender/src/zrender');
var Canvas = require('canvas/lib/canvas')
  , canvas = new Canvas(500, 500)
  , ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(100, 100, 30, 0, Math.PI * 2);
ctx.closePath()
ctx.fill();
canvas.pngStream().pipe(fs.createWriteStream('./test.png'));