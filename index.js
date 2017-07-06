var fs = require('fs');
var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(200, 200)
  , ctx = canvas.getContext('2d');

canvas.pngStream().pipe(fs.createWriteStream('./a.png'));