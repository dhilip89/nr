/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Base shape.
 */
var Shape = function () {
  function Shape(opts) {
    _classCallCheck(this, Shape);

    this.opts = opts;
    this.shape = opts.shape;
  }

  /**
   * Must be override.
   * @param {CanvasRenderingContext2D} context 
   */


  _createClass(Shape, [{
    key: "buildPath",
    value: function buildPath(context) {
      if (!this.shape) {
        throw new Error("You don't set the graphic shape.");
        return;
      }
    }

    /**
     * Has stroke color.
     */

  }, {
    key: "hasStroke",
    value: function hasStroke() {
      return !!this.opts.style.strokeStyle;
    }

    /**
     * Has fill color.
     */

  }, {
    key: "hasFill",
    value: function hasFill() {
      return !!this.opts.style.fillStyle;
    }
  }]);

  return Shape;
}();

exports.default = Shape;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _storage = __webpack_require__(12);

var _storage2 = _interopRequireDefault(_storage);

var _painter = __webpack_require__(13);

var _painter2 = _interopRequireDefault(_painter);

var _canvas = __webpack_require__(15);

var _canvas2 = _interopRequireDefault(_canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * NodeJS graphic render.
 */
var NRenderer = function () {
    function NRenderer(opts) {
        _classCallCheck(this, NRenderer);

        this.width = opts['width'] || 300;
        this.height = opts['height'] || 150;

        this.canvas = null;
        this.context = null;
        this.shapes = [];

        this.painter = null;
        this.storage = new _storage2.default();
    }

    /**
     * Init canvas and graphic context.
     */


    _createClass(NRenderer, [{
        key: 'init',
        value: function init() {
            this.canvas = new _canvas2.default(this.width, this.height);
            this.context = this.canvas.getContext('2d');
            this.painter = new _painter2.default(this.context);
        }

        /**
         * Get canvas 2d context.
         */

    }, {
        key: 'getContext',
        value: function getContext() {
            return this.context;
        }

        /**
         * Get canvas. for example, if you want to write it to file, you can use it to get canvas.
         */

    }, {
        key: 'getCanvas',
        value: function getCanvas() {
            return this.canvas;
        }

        /**
         * Get canvas width.
         */

    }, {
        key: 'getWidth',
        value: function getWidth() {
            return this.width;
        }

        /**
         * Get canvas height;
         */

    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this.height;
        }

        /**
         * Set canvas width.
         * @param {Number} width 
         */

    }, {
        key: 'setWidth',
        value: function setWidth(width) {
            this.width = width;
        }

        /**
         * Set canvas height.
         * @param {Number} height 
         */

    }, {
        key: 'setHeight',
        value: function setHeight(height) {
            this.height = height;
        }

        /**
         * Add shape to nrenderer to render them.
         * @param {Shape} shape 
         */

    }, {
        key: 'add',
        value: function add(shape) {
            this.storage.add(shape);
        }

        /**
         * Remove shape from nrenderer.
         * @param {Shape} shape 
         */

    }, {
        key: 'remove',
        value: function remove(shape) {
            this.storage.remove(shape);
        }

        /**
         * paint all shapes.
         */

    }, {
        key: 'paint',
        value: function paint() {
            this.painter.paintAll(this.storage.getAll());
        }

        /**
         * Clear canvas.
         * @param {Number} x 
         * @param {Number} y 
         * @param {Number} width 
         * @param {Number} height 
         */

    }, {
        key: 'clear',
        value: function clear(x, y, width, height) {
            this.painter.clear(x, y, width, height);
        }

        /**
         * Clear all the canvas.
         */

    }, {
        key: 'clearAll',
        value: function clearAll() {
            this.clear(0, 0, this.width, this.height);
        }
    }]);

    return NRenderer;
}();

exports.default = NRenderer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Nfs is nrenderer file system. Some operations about IO.
 */
var Nfs = function () {
    function Nfs() {
        _classCallCheck(this, Nfs);
    }

    /**
     * Save canvas as a png file.
     * @param {Canvas} canvas Create by you. Imported from 'canvas/lib/canvas'.
     * @param {string} path Save path of png file.
     */


    _createClass(Nfs, null, [{
        key: 'saveAsPNG',
        value: function saveAsPNG(canvas, path) {
            path = path.endsWith('.png') ? path : path + '.png';

            try {
                canvas.pngStream().pipe(_fs2.default.createWriteStream(path));
            } catch (error) {
                console.error(error);
            }
        }
    }]);

    return Nfs;
}();

exports.default = Nfs;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(16);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Canvas - Context2d
 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var canvas = __webpack_require__(3)
  , Context2d = canvas.CanvasRenderingContext2d
  , CanvasGradient = canvas.CanvasGradient
  , CanvasPattern = canvas.CanvasPattern
  , ImageData = canvas.ImageData;

/**
 * Export `Context2d` as the module.
 */

var Context2d = exports = module.exports = Context2d;

var parseFont = exports.parseFont = __webpack_require__(18);

/**
 * Cache color string RGBA values.
 */

var cache = {};

/**
 * Text baselines.
 */

var baselines = ['alphabetic', 'top', 'bottom', 'middle', 'ideographic', 'hanging'];

/**
 * Enable or disable image smoothing.
 *
 * @api public
 */

Context2d.prototype.__defineSetter__('imageSmoothingEnabled', function(val){
  this._imageSmoothing = !! val;
  this.patternQuality = val ? 'best' : 'fast';
});

/**
 * Get image smoothing value.
 *
 * @api public
 */

Context2d.prototype.__defineGetter__('imageSmoothingEnabled', function(val){
  return !! this._imageSmoothing;
});

/**
 * Create a pattern from `Image` or `Canvas`.
 *
 * @param {Image|Canvas} image
 * @param {String} repetition
 * @return {CanvasPattern}
 * @api public
 */

Context2d.prototype.createPattern = function(image, repetition){
  return new CanvasPattern(image, repetition || 'repeat');
};

/**
 * Create a linear gradient at the given point `(x0, y0)` and `(x1, y1)`.
 *
 * @param {Number} x0
 * @param {Number} y0
 * @param {Number} x1
 * @param {Number} y1
 * @return {CanvasGradient}
 * @api public
 */

Context2d.prototype.createLinearGradient = function(x0, y0, x1, y1){
  return new CanvasGradient(x0, y0, x1, y1);
};

/**
 * Create a radial gradient at the given point `(x0, y0)` and `(x1, y1)`
 * and radius `r0` and `r1`.
 *
 * @param {Number} x0
 * @param {Number} y0
 * @param {Number} r0
 * @param {Number} x1
 * @param {Number} y1
 * @param {Number} r1
 * @return {CanvasGradient}
 * @api public
 */

Context2d.prototype.createRadialGradient = function(x0, y0, r0, x1, y1, r1){
  return new CanvasGradient(x0, y0, r0, x1, y1, r1);
};

/**
 * Reset transform matrix to identity, then apply the given args.
 *
 * @param {...}
 * @api public
 */

Context2d.prototype.setTransform = function(){
  this.resetTransform();
  this.transform.apply(this, arguments);
};

/**
 * Set the fill style with the given css color string.
 *
 * @api public
 */

Context2d.prototype.__defineSetter__('fillStyle', function(val){
  if (!val) return;
  if ('CanvasGradient' == val.constructor.name
    || 'CanvasPattern' == val.constructor.name) {
    this.lastFillStyle = val;
    this._setFillPattern(val);
  } else if ('string' == typeof val) {
    this.lastFillStyle = undefined;
    this._setFillColor(val);
  }
});

/**
 * Get previous fill style.
 *
 * @return {CanvasGradient|String}
 * @api public
 */

Context2d.prototype.__defineGetter__('fillStyle', function(){
  return this.lastFillStyle || this.fillColor;
});

/**
 * Set the stroke style with the given css color string.
 *
 * @api public
 */

Context2d.prototype.__defineSetter__('strokeStyle', function(val){
  if (!val) return;
  if ('CanvasGradient' == val.constructor.name
    || 'CanvasPattern' == val.constructor.name) {
    this.lastStrokeStyle = val;
    this._setStrokePattern(val);
  } else if ('string' == typeof val) {
    this._setStrokeColor(val);
  }
});

/**
 * Get previous stroke style.
 *
 * @return {CanvasGradient|String}
 * @api public
 */

Context2d.prototype.__defineGetter__('strokeStyle', function(){
  return this.lastStrokeStyle || this.strokeColor;
});

/**
 * Register `font` for usage.
 *
 * @param {Font} font
 * @api public
 */

Context2d.prototype.addFont = function(font) {
  this._fonts = this._fonts || {};
  if (this._fonts[font.name]) return;
  this._fonts[font.name] = font;
};

/**
 * Set font.
 *
 * @see exports.parseFont()
 * @api public
 */

Context2d.prototype.__defineSetter__('font', function(val){
  if (!val) return;
  if ('string' == typeof val) {
    var font;
    if (font = parseFont(val)) {
      this.lastFontString = val;

      var fonts = this._fonts;
      if (fonts && fonts[font.family]) {
        var fontObj = fonts[font.family];
        var type = font.weight + '-' + font.style;

        var fontFace = fontObj.getFace(type);
        this._setFontFace(fontFace, font.size);
      } else {
        this._setFont(
            font.weight
          , font.style
          , font.size
          , font.unit
          , font.family);
      }
    }
  }
});

/**
 * Get the current font.
 *
 * @api public
 */

Context2d.prototype.__defineGetter__('font', function(){
  return this.lastFontString || '10px sans-serif';
});

/**
 * Set text baseline.
 *
 * @api public
 */

Context2d.prototype.__defineSetter__('textBaseline', function(val){
  if (!val) return;
  var n = baselines.indexOf(val);
  if (~n) {
    this.lastBaseline = val;
    this._setTextBaseline(n);
  }
});

/**
 * Get the current baseline setting.
 *
 * @api public
 */

Context2d.prototype.__defineGetter__('textBaseline', function(){
  return this.lastBaseline || 'alphabetic';
});

/**
 * Set text alignment.
 *
 * @api public
 */

Context2d.prototype.__defineSetter__('textAlign', function(val){
  switch (val) {
    case 'center':
      this._setTextAlignment(0);
      this.lastTextAlignment = val;
      break;
    case 'left':
    case 'start':
      this._setTextAlignment(-1);
      this.lastTextAlignment = val;
      break;
    case 'right':
    case 'end':
      this._setTextAlignment(1);
      this.lastTextAlignment = val;
      break;
  }
});

/**
 * Get the current font.
 *
 * @see exports.parseFont()
 * @api public
 */

Context2d.prototype.__defineGetter__('textAlign', function(){
  return this.lastTextAlignment || 'start';
});

/**
 * Create `ImageData` with the given dimensions or
 * `ImageData` instance for dimensions.
 *
 * @param {Number|ImageData} width
 * @param {Number} height
 * @return {ImageData}
 * @api public
 */

Context2d.prototype.createImageData = function(width, height){
  if ('ImageData' == width.constructor.name) {
    height = width.height;
    width = width.width;
  }
  return new ImageData(new Uint8ClampedArray(width * height * 4), width, height);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _circle = __webpack_require__(29);

var _circle2 = _interopRequireDefault(_circle);

var _polyline = __webpack_require__(30);

var _polyline2 = _interopRequireDefault(_polyline);

var _heatmap = __webpack_require__(31);

var _heatmap2 = _interopRequireDefault(_heatmap);

var _arc = __webpack_require__(32);

var _arc2 = _interopRequireDefault(_arc);

var _bezierCurve = __webpack_require__(33);

var _bezierCurve2 = _interopRequireDefault(_bezierCurve);

var _polygon = __webpack_require__(35);

var _polygon2 = _interopRequireDefault(_polygon);

var _ring = __webpack_require__(37);

var _ring2 = _interopRequireDefault(_ring);

var _sector = __webpack_require__(39);

var _sector2 = _interopRequireDefault(_sector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// circle();
// arc();
// polyLine();
// heatmap();
// bezierCurve();
// polygon();
// ring();
(0, _sector2.default)();

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _shape = __webpack_require__(0);

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Circle shape.
 */
var Circle = function (_Shape) {
  _inherits(Circle, _Shape);

  function Circle(opts) {
    _classCallCheck(this, Circle);

    var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));

    _this.type = "Circle";
    _this.cx = opts.shape.cx || 150;
    _this.cy = opts.shape.cy || 75;
    _this.r = opts.shape.r || 5;
    return _this;
  }

  _createClass(Circle, [{
    key: "buildPath",
    value: function buildPath(context) {
      _get(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), "buildPath", this).call(this);

      var cx = this.cx,
          cy = this.cy,
          r = this.r;

      context.beginPath();
      context.arc(cx, cy, r, 0, 2 * Math.PI, true);
      context.closePath();
    }
  }]);

  return Circle;
}(_shape2.default);

exports.default = Circle;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shape = __webpack_require__(0);

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Circle shape.
 */
var Rect = function (_Shape) {
    _inherits(Rect, _Shape);

    function Rect(opts) {
        _classCallCheck(this, Rect);

        var _this = _possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).apply(this, arguments));

        _this.type = "Rect";
        _this.x = opts.shape.x || 0;
        _this.y = opts.shape.y || 0;
        _this.width = opts.shape.width || 150;
        _this.height = opts.shape.height || 75;
        return _this;
    }

    _createClass(Rect, [{
        key: "buildPath",
        value: function buildPath(context) {
            var x = this.x,
                y = this.y,
                width = this.width,
                height = this.height;

            context.rect(x, y, width, height);
        }
    }]);

    return Rect;
}(_shape2.default);

exports.default = Rect;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _shape = __webpack_require__(0);

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Circle shape.
 */
var Line = function (_Shape) {
  _inherits(Line, _Shape);

  function Line(opts) {
    _classCallCheck(this, Line);

    var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));

    _this.type = 'Line';
    _this.x1 = opts.shape.x1 || 0;
    _this.y1 = opts.shape.y1 || 0;
    _this.x2 = opts.shape.x2 || 150;
    _this.y2 = opts.shape.y2 || 75;
    return _this;
  }

  _createClass(Line, [{
    key: "buildPath",
    value: function buildPath(context) {
      _get(Line.prototype.__proto__ || Object.getPrototypeOf(Line.prototype), "buildPath", this).call(this, context);

      var x1 = this.x1,
          y1 = this.y1,
          x2 = this.x2,
          y2 = this.y2;

      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
    }
  }]);

  return Line;
}(_shape2.default);

exports.default = Line;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Storage is the save manager of NRender.
 */
var Storage = function () {
    function Storage() {
        _classCallCheck(this, Storage);

        this.shapes = []; // Save all the base shapes.
    }

    /**
     * Add shape to storage.
     * @param {Shape} shape 
     */


    _createClass(Storage, [{
        key: "add",
        value: function add(shape) {
            this.shapes.push(shape);
        }

        /**
         * Get shape from storage.
         * @param {Number} i 
         */

    }, {
        key: "get",
        value: function get(i) {
            return this.shapes[i];
        }
    }, {
        key: "getAll",
        value: function getAll() {
            return this.shapes;
        }

        /**
         * Remove shape from storage.
         * @param {Shape} shape 
         */

    }, {
        key: "remove",
        value: function remove(shape) {
            var index = this.shapes.indexOf(shape);

            if (index != -1) {
                this.shapes.splice(index, 1);
            }
        }

        /**
         * Get the size of shapes.
         */

    }, {
        key: "count",
        value: function count() {
            return this.shapes.length;
        }
    }]);

    return Storage;
}();

exports.default = Storage;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(14);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Paint the base shape.
 */
var Painter = function () {
    /**
     * Constructor.
     * @param {Canvas2DContext} context 
     */
    function Painter(context) {
        _classCallCheck(this, Painter);

        this.context = context;
    }

    /**
     * Paint base shape to canvas.
     * @param {Shape} shape 
     */


    _createClass(Painter, [{
        key: 'paint',
        value: function paint(shape) {
            var shapeStyle = shape.opts.style;
            var style = new _style2.default(shapeStyle);
            style.bind(this.context); // bind style to context.

            shape.buildPath(this.context); // paint base shape.
            shape.hasStroke() && this.context.stroke();
            shape.hasFill() && this.context.fill();
        }

        /**
         * Paint all shapes.
         * @param {Array} shapes 
         */

    }, {
        key: 'paintAll',
        value: function paintAll(shapes) {
            for (var i = 0; i < shapes.length; i++) {
                this.paint(shapes[i]);
            }
        }

        /**
         * Clear canvas.
         */

    }, {
        key: 'clear',
        value: function clear(x, y, width, height) {
            this.context.clearRect(x, y, width, height);
        }
    }]);

    return Painter;
}();

exports.default = Painter;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Process about style and bind style to Canvas2DContext.
 */
var Style = function () {
  function Style(style) {
    _classCallCheck(this, Style);

    this.style = style;
  }

  /**
   * Set context style.
   * @param {CanvasRenderingContext2D} context
   */


  _createClass(Style, [{
    key: "bind",
    value: function bind(context) {
      this.reset(context);

      if (this.style) {
        // if has style.
        var styleName = Object.keys(this.style);

        for (var i = 0; i < styleName.length; i++) {
          context[styleName[i]] = this.style[styleName[i]];
        }
      }
    }

    /**
     * Reset context style.
     * @param {CanvasRenderingContext2D} context
     */

  }, {
    key: "reset",
    value: function reset(context) {
      var styles = {
        fillStyle: "rgba(0,0,0,0)",
        strokeStyle: "rgba(0,0,0,0)",
        shadowColor: "rgb(0, 0, 0)",
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineCap: "butt",
        lineJoin: "bevel",
        lineWidth: 0,
        miterLimit: 0,
        font: "微软雅黑 12px",
        textAlign: "center",
        textBaseline: "alphabetic"
      };

      var styleName = Object.keys(styles);

      for (var i = 0; i < styleName.length; i++) {
        context[styleName[i]] = styles[styleName[i]];
      }
    }
  }]);

  return Style;
}();

exports.default = Style;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Canvas
 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var canvas = __webpack_require__(3)
  , Canvas = canvas.Canvas
  , Image = canvas.Image
  , cairoVersion = canvas.cairoVersion
  , Context2d = __webpack_require__(6)
  , PNGStream = __webpack_require__(19)
  , PDFStream = __webpack_require__(20)
  , JPEGStream = __webpack_require__(21)
  , FontFace = canvas.FontFace
  , fs = __webpack_require__(5)
  , packageJson = __webpack_require__(22)
  , FORMATS = ['image/png', 'image/jpeg'];

/**
 * Export `Canvas` as the module.
 */

var Canvas = exports = module.exports = Canvas;

/**
 * Library version.
 */

exports.version = packageJson.version;

/**
 * Cairo version.
 */

exports.cairoVersion = cairoVersion;

/**
 * jpeglib version.
 */

if (canvas.jpegVersion) {
  exports.jpegVersion = canvas.jpegVersion;
}

/**
 * gif_lib version.
 */

if (canvas.gifVersion) {
  exports.gifVersion = canvas.gifVersion.replace(/[^.\d]/g, '');
}

/**
 * freetype version.
 */

if (canvas.freetypeVersion) {
  exports.freetypeVersion = canvas.freetypeVersion;
}

/**
 * Expose constructors.
 */

exports.Context2d = Context2d;
exports.PNGStream = PNGStream;
exports.PDFStream = PDFStream;
exports.JPEGStream = JPEGStream;
exports.Image = Image;
exports.ImageData = canvas.ImageData;

if (FontFace) {
  var Font = function Font(name, path, idx) {
    this.name = name;
    this._faces = {};

    this.addFace(path, 'normal', 'normal', idx);
  };

  Font.prototype.addFace = function(path, weight, style, idx) {
    style = style || 'normal';
    weight = weight || 'normal';

    var face = new FontFace(path, idx || 0);
    this._faces[weight + '-' + style] = face;
  };

  Font.prototype.getFace = function(weightStyle) {
    return this._faces[weightStyle] || this._faces['normal-normal'];
  };

  exports.Font = Font;
}

/**
 * Context2d implementation.
 */

__webpack_require__(6);

/**
 * Image implementation.
 */

__webpack_require__(23);

/**
 * Inspect canvas.
 *
 * @return {String}
 * @api public
 */

Canvas.prototype.inspect = function(){
  return '[Canvas ' + this.width + 'x' + this.height + ']';
};

/**
 * Get a context object.
 *
 * @param {String} contextId
 * @return {Context2d}
 * @api public
 */

Canvas.prototype.getContext = function(contextId){
  if ('2d' == contextId) {
    var ctx = this._context2d || (this._context2d = new Context2d(this));
    this.context = ctx;
    ctx.canvas = this;
    return ctx;
  }
};

/**
 * Create a `PNGStream` for `this` canvas.
 *
 * @return {PNGStream}
 * @api public
 */

Canvas.prototype.pngStream =
Canvas.prototype.createPNGStream = function(){
  return new PNGStream(this);
};

/**
 * Create a synchronous `PNGStream` for `this` canvas.
 *
 * @return {PNGStream}
 * @api public
 */

Canvas.prototype.syncPNGStream =
Canvas.prototype.createSyncPNGStream = function(){
  return new PNGStream(this, true);
};

/**
 * Create a `PDFStream` for `this` canvas.
 *
 * @return {PDFStream}
 * @api public
 */

Canvas.prototype.pdfStream =
Canvas.prototype.createPDFStream = function(){
  return new PDFStream(this);
};

/**
 * Create a synchronous `PDFStream` for `this` canvas.
 *
 * @return {PDFStream}
 * @api public
 */

Canvas.prototype.syncPDFStream =
Canvas.prototype.createSyncPDFStream = function(){
  return new PDFStream(this, true);
};

/**
 * Create a `JPEGStream` for `this` canvas.
 *
 * @param {Object} options
 * @return {JPEGStream}
 * @api public
 */

Canvas.prototype.jpegStream =
Canvas.prototype.createJPEGStream = function(options){
  return this.createSyncJPEGStream(options);
};

/**
 * Create a synchronous `JPEGStream` for `this` canvas.
 *
 * @param {Object} options
 * @return {JPEGStream}
 * @api public
 */

Canvas.prototype.syncJPEGStream =
Canvas.prototype.createSyncJPEGStream = function(options){
  options = options || {};
  // Don't allow the buffer size to exceed the size of the canvas (#674)
  var maxBufSize = this.width * this.height * 4;
  var clampedBufSize = Math.min(options.bufsize || 4096, maxBufSize);
  return new JPEGStream(this, {
      bufsize: clampedBufSize
    , quality: options.quality || 75
    , progressive: options.progressive || false
  });
};

/**
 * Return a data url. Pass a function for async support (required for "image/jpeg").
 *
 * @param {String} type, optional, one of "image/png" or "image/jpeg", defaults to "image/png"
 * @param {Object|Number} encoderOptions, optional, options for jpeg compression (see documentation for Canvas#jpegStream) or the JPEG encoding quality from 0 to 1.
 * @param {Function} fn, optional, callback for asynchronous operation. Required for type "image/jpeg".
 * @return {String} data URL if synchronous (callback omitted)
 * @api public
 */

Canvas.prototype.toDataURL = function(a1, a2, a3){
  // valid arg patterns (args -> [type, opts, fn]):
  // [] -> ['image/png', null, null]
  // [qual] -> ['image/png', null, null]
  // [undefined] -> ['image/png', null, null]
  // ['image/png'] -> ['image/png', null, null]
  // ['image/png', qual] -> ['image/png', null, null]
  // [fn] -> ['image/png', null, fn]
  // [type, fn] -> [type, null, fn]
  // [undefined, fn] -> ['image/png', null, fn]
  // ['image/png', qual, fn] -> ['image/png', null, fn]
  // ['image/jpeg', fn] -> ['image/jpeg', null, fn]
  // ['image/jpeg', opts, fn] -> ['image/jpeg', opts, fn]
  // ['image/jpeg', qual, fn] -> ['image/jpeg', {quality: qual}, fn]
  // ['image/jpeg', undefined, fn] -> ['image/jpeg', null, fn]

  var type = 'image/png';
  var opts = {};
  var fn;

  if ('function' === typeof a1) {
    fn = a1;
  } else {
    if ('string' === typeof a1 && FORMATS.indexOf(a1.toLowerCase()) !== -1) {
      type = a1.toLowerCase();
    }

    if ('function' === typeof a2) {
      fn = a2;
    } else {
      if ('object' === typeof a2) {
        opts = a2;
      } else if ('number' === typeof a2) {
        opts = {quality: Math.max(0, Math.min(1, a2)) * 100};
      }

      if ('function' === typeof a3) {
        fn = a3;
      } else if (undefined !== a3) {
        throw new TypeError(typeof a3 + ' is not a function');
      }
    }
  }

  if (this.width === 0 || this.height === 0) {
    // Per spec, if the bitmap has no pixels, return this string:
    var str = "data:,";
    if (fn) {
      setTimeout(function() {
        fn(null, str);
      });
    }
    return str;
  }

  if ('image/png' === type) {
    if (fn) {
      this.toBuffer(function(err, buf){
        if (err) return fn(err);
        fn(null, 'data:image/png;base64,' + buf.toString('base64'));
      });
    } else {
      return 'data:image/png;base64,' + this.toBuffer().toString('base64');
    }

  } else if ('image/jpeg' === type) {
    if (undefined === fn) {
      throw new Error('Missing required callback function for format "image/jpeg"');
    }

    var stream = this.jpegStream(opts);
    // note that jpegStream is synchronous
    var buffers = [];
    stream.on('data', function (chunk) {
      buffers.push(chunk);
    });
    stream.on('error', function (err) {
      fn(err);
    });
    stream.on('end', function() {
      var result = 'data:image/jpeg;base64,' + Buffer.concat(buffers).toString('base64');
      fn(null, result);
    });
  }
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {try {global.process.dlopen(module, "/Users/yuanzhaokang/Desktop/nr/node_modules/_canvas@1.6.10@canvas/build/Release/canvas.node"); } catch(e) {throw new Error('Cannot open ' + "/Users/yuanzhaokang/Desktop/nr/node_modules/_canvas@1.6.10@canvas/build/Release/canvas.node" + ': ' + e);}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Font RegExp helpers.
 */

var weights = 'bold|bolder|lighter|[1-9]00'
  , styles = 'italic|oblique'
  , variants = 'small-caps'
  , stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded'
  , units = 'px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q'
  , string = '\'([^\']+)\'|"([^"]+)"|[\\w-]+'

// [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop
var weightRe = new RegExp('(' + weights + ') +', 'i')
var styleRe = new RegExp('(' + styles + ') +', 'i')
var variantRe = new RegExp('(' + variants + ') +', 'i')
var stretchRe = new RegExp('(' + stretches + ') +', 'i')
var sizeFamilyRe = new RegExp(
  '([\\d\\.]+)(' + units + ') *'
  + '((?:' + string + ')( *, *(?:' + string + '))*)')

/**
 * Cache font parsing.
 */

var cache = {}

var defaultHeight = 16 // pt, common browser default

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */

module.exports = function (str) {
  // Cached
  if (cache[str]) return cache[str]

  // Try for required properties first.
  var sizeFamily = sizeFamilyRe.exec(str)
  if (!sizeFamily) return // invalid

  // Default values and required properties
  var font = {
    weight: 'normal',
    style: 'normal',
    stretch: 'normal',
    variant: 'normal',
    size: parseFloat(sizeFamily[1]),
    unit: sizeFamily[2],
    family: sizeFamily[3].replace(/["']/g, '').replace(/ *, */g, ',')
  }

  // Optional, unordered properties.
  var weight, style, variant, stretch
  // Stop search at `sizeFamily.index`
  var substr = str.substring(0, sizeFamily.index)
  if ((weight = weightRe.exec(substr))) font.weight = weight[1]
  if ((style = styleRe.exec(substr))) font.style = style[1]
  if ((variant = variantRe.exec(substr))) font.variant = variant[1]
  if ((stretch = stretchRe.exec(substr))) font.stretch = stretch[1]

  // Convert to device units. (`font.unit` is the original unit)
  // TODO: ch, ex
  switch (font.unit) {
    case 'pt':
      font.size /= 0.75
      break
    case 'pc':
      font.size *= 16
      break
    case 'in':
      font.size *= 96
      break
    case 'cm':
      font.size *= 96.0 / 2.54
      break
    case 'mm':
      font.size *= 96.0 / 25.4
      break
    case '%':
      // TODO disabled because existing unit tests assume 100
      // font.size *= defaultHeight / 100 / 0.75
      break
    case 'em':
    case 'rem':
      font.size *= defaultHeight / 0.75
      break
    case 'q':
      font.size *= 96 / 25.4 / 4
      break
  }

  return (cache[str] = font)
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Canvas - PNGStream
 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var Stream = __webpack_require__(4).Stream;

/**
 * Initialize a `PNGStream` with the given `canvas`.
 *
 * "data" events are emitted with `Buffer` chunks, once complete the
 * "end" event is emitted. The following example will stream to a file
 * named "./my.png".
 *
 *     var out = fs.createWriteStream(__dirname + '/my.png')
 *       , stream = canvas.createPNGStream();
 *
 *     stream.pipe(out);
 *
 * @param {Canvas} canvas
 * @param {Boolean} sync
 * @api public
 */

var PNGStream = module.exports = function PNGStream(canvas, sync) {
  var self = this
    , method = sync
      ? 'streamPNGSync'
      : 'streamPNG';
  this.sync = sync;
  this.canvas = canvas;
  this.readable = true;
  // TODO: implement async
  if ('streamPNG' == method) method = 'streamPNGSync';
  process.nextTick(function(){
    canvas[method](function(err, chunk, len){
      if (err) {
        self.emit('error', err);
        self.readable = false;
      } else if (len) {
        self.emit('data', chunk, len);
      } else {
        self.emit('end');
        self.readable = false;
      }
    });
  });
};

/**
 * Inherit from `EventEmitter`.
 */

PNGStream.prototype.__proto__ = Stream.prototype;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Canvas - PDFStream
 */

/**
 * Module dependencies.
 */

var Stream = __webpack_require__(4).Stream;

/**
 * Initialize a `PDFStream` with the given `canvas`.
 *
 * "data" events are emitted with `Buffer` chunks, once complete the
 * "end" event is emitted. The following example will stream to a file
 * named "./my.pdf".
 *
 *     var out = fs.createWriteStream(__dirname + '/my.pdf')
 *       , stream = canvas.createPDFStream();
 *
 *     stream.pipe(out);
 *
 * @param {Canvas} canvas
 * @param {Boolean} sync
 * @api public
 */

var PDFStream = module.exports = function PDFStream(canvas, sync) {
  var self = this
    , method = sync
      ? 'streamPDFSync'
      : 'streamPDF';
  this.sync = sync;
  this.canvas = canvas;
  this.readable = true;
  // TODO: implement async
  if ('streamPDF' == method) method = 'streamPDFSync';
  process.nextTick(function(){
    canvas[method](function(err, chunk, len){
      if (err) {
        self.emit('error', err);
        self.readable = false;
      } else if (len) {
        self.emit('data', chunk, len);
      } else {
        self.emit('end');
        self.readable = false;
      }
    });
  });
};

/**
 * Inherit from `EventEmitter`.
 */

PDFStream.prototype.__proto__ = Stream.prototype;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Canvas - JPEGStream
 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var Stream = __webpack_require__(4).Stream;

/**
 * Initialize a `JPEGStream` with the given `canvas`.
 *
 * "data" events are emitted with `Buffer` chunks, once complete the
 * "end" event is emitted. The following example will stream to a file
 * named "./my.jpeg".
 *
 *     var out = fs.createWriteStream(__dirname + '/my.jpeg')
 *       , stream = canvas.createJPEGStream();
 *
 *     stream.pipe(out);
 *
 * @param {Canvas} canvas
 * @param {Boolean} sync
 * @api public
 */

var JPEGStream = module.exports = function JPEGStream(canvas, options, sync) {
  var self = this
    , method = sync
      ? 'streamJPEGSync'
      : 'streamJPEG';
  this.options = options;
  this.sync = sync;
  this.canvas = canvas;
  this.readable = true;
  // TODO: implement async
  if ('streamJPEG' == method) method = 'streamJPEGSync';
  process.nextTick(function(){
    canvas[method](options.bufsize, options.quality, options.progressive, function(err, chunk){
      if (err) {
        self.emit('error', err);
        self.readable = false;
      } else if (chunk) {
        self.emit('data', chunk);
      } else {
        self.emit('end');
        self.readable = false;
      }
    });
  });
};

/**
 * Inherit from `EventEmitter`.
 */

JPEGStream.prototype.__proto__ = Stream.prototype;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {"name":"canvas","description":"Canvas graphics API backed by Cairo","version":"1.6.10","author":"TJ Holowaychuk <tj@learnboost.com>","contributors":["Nathan Rajlich <nathan@tootallnate.net>","Rod Vagg <r@va.gg>","Juriy Zaytsev <kangax@gmail.com>"],"keywords":["canvas","graphic","graphics","pixman","cairo","image","images","pdf"],"homepage":"https://github.com/Automattic/node-canvas","repository":"git://github.com/Automattic/node-canvas.git","scripts":{"prebenchmark":"node-gyp build","benchmark":"node benchmarks/run.js","pretest":"node-gyp build","test":"standard examples/*.js && mocha test/*.test.js","pretest-server":"node-gyp build","test-server":"node test/server.js"},"dependencies":{"nan":"^2.4.0"},"devDependencies":{"body-parser":"^1.13.3","express":"^4.13.2","mocha":"^2.5.3","pug":"^2.0.0-beta3","standard":"^10.0.3"},"engines":{"node":">=0.8.0"},"main":"./lib/canvas.js","license":"MIT","_from":"canvas@1.6.10","_resolved":"http://registry.npm.taobao.org/canvas/download/canvas-1.6.10.tgz"}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Canvas - Image
 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var Canvas = __webpack_require__(3)
  , Image = Canvas.Image;

/**
 * Src setter.
 *
 *  - convert data uri to `Buffer`
 *
 * @param {String|Buffer} val filename, buffer, data uri
 * @api public
 */

Image.prototype.__defineSetter__('src', function(val){
  if ('string' == typeof val && 0 == val.indexOf('data:')) {
    val = val.slice(val.indexOf(',') + 1);
    this.source = new Buffer(val, 'base64');
  } else {
    this.source = val;
  }
});

/**
 * Src getter.
 *
 * TODO: return buffer
 *
 * @api public
 */

Image.prototype.__defineGetter__('src', function(){
  return this.source;
});

/**
 * Inspect image.
 *
 * TODO: indicate that the .src was a buffer, data uri etc
 *
 * @return {String}
 * @api public
 */

Image.prototype.inspect = function(){
  return '[Image'
    + (this.complete ? ':' + this.width + 'x' + this.height : '')
    + (this.src ? ' ' + this.src : '')
    + (this.complete ? ' complete' : '')
    + ']';
};


/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _shape = __webpack_require__(0);

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Polyline.
 */
var Polyline = function (_Shape) {
  _inherits(Polyline, _Shape);

  function Polyline(opts) {
    _classCallCheck(this, Polyline);

    var _this = _possibleConstructorReturn(this, (Polyline.__proto__ || Object.getPrototypeOf(Polyline)).apply(this, arguments));

    _this.type = "Polyline";
    _this.shape = opts.shape;
    return _this;
  }

  _createClass(Polyline, [{
    key: "buildPath",
    value: function buildPath(context) {
      _get(Polyline.prototype.__proto__ || Object.getPrototypeOf(Polyline.prototype), "buildPath", this).call(this, context);

      var points = this.shape["points"] || [];

      context.beginPath();
      context.moveTo(points[0][0], points[0][1]);

      for (var i = 0; i < points.length; i++) {
        context.lineTo(points[i][0], points[i][1]);
      }
    }
  }]);

  return Polyline;
}(_shape2.default);

exports.default = Polyline;

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _shape = __webpack_require__(0);

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Arc shape.
 */
var Arc = function (_Shape) {
  _inherits(Arc, _Shape);

  function Arc(opts) {
    _classCallCheck(this, Arc);

    var _this = _possibleConstructorReturn(this, (Arc.__proto__ || Object.getPrototypeOf(Arc)).apply(this, arguments));

    _this.type = "Arc";
    _this.cx = opts.shape.cx || 150;
    _this.cy = opts.shape.cy || 75;
    _this.r = opts.shape.r || 5;
    _this.startAngle = opts.shape.startAngle || 0;
    _this.endAngle = opts.shape.endAngle || 0;
    _this.clockwise = opts.shape.clockwise || true;
    return _this;
  }

  _createClass(Arc, [{
    key: "buildPath",
    value: function buildPath(context) {
      _get(Arc.prototype.__proto__ || Object.getPrototypeOf(Arc.prototype), "buildPath", this).call(this, context);

      var cx = this.cx,
          cy = this.cy,
          r = this.r,
          startAngle = this.startAngle,
          endAngle = this.endAngle,
          clockwise = this.clockwise;
      //  var unitX = Math.cos(startAngle);
      //  var unitY = Math.sin(startAngle);

      // context.moveTo(unitX * r + cx, unitY * r + cy);

      context.beginPath();
      context.arc(cx, cy, r, startAngle, endAngle, !clockwise);
    }
  }]);

  return Arc;
}(_shape2.default);

exports.default = Arc;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var nr = new _nrenderer2.default({
        width: 300,
        height: 300
    });
    nr.init();

    var c = new _circle2.default({
        shape: {
            cx: 100,
            cy: 85,
            r: 20
        },
        style: {
            fillStyle: 'blue',
            strokeStyle: 'red',
            lineWidth: 3
        }
    });

    nr.add(c);

    c = new _circle2.default({
        shape: {
            cx: 120,
            cy: 120,
            r: 20
        },
        style: {
            fillStyle: 'red',
            strokeStyle: 'green',
            lineWidth: 3
        }
    });

    nr.add(c);

    c = new _circle2.default({
        shape: {
            cx: 80,
            cy: 120,
            r: 20
        },
        style: {
            fillStyle: 'green',
            strokeStyle: 'blue',
            lineWidth: 3
        }
    });

    nr.add(c);

    nr.paint();
    _nfs2.default.saveAsPNG(nr.getCanvas(), './test/circle/circle.png');
};

var _circle = __webpack_require__(9);

var _circle2 = _interopRequireDefault(_circle);

var _rect = __webpack_require__(10);

var _rect2 = _interopRequireDefault(_rect);

var _line = __webpack_require__(11);

var _line2 = _interopRequireDefault(_line);

var _nrenderer = __webpack_require__(1);

var _nrenderer2 = _interopRequireDefault(_nrenderer);

var _nfs = __webpack_require__(2);

var _nfs2 = _interopRequireDefault(_nfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var nr = new _nrenderer2.default({
        width: 300,
        height: 300
    });
    nr.init();

    var polyLine = new _polyline2.default({
        shape: {
            points: [[10, 10], [100, 100], [100, 30], [120, 90], [200, 250]]
        },
        style: {
            strokeStyle: 'red',
            lineWidth: 3
        }
    });

    nr.add(polyLine);
    nr.paint();
    _nfs2.default.saveAsPNG(nr.getCanvas(), './test/polyline/polyline.png');
};

var _polyline = __webpack_require__(25);

var _polyline2 = _interopRequireDefault(_polyline);

var _nrenderer = __webpack_require__(1);

var _nrenderer2 = _interopRequireDefault(_nrenderer);

var _nfs = __webpack_require__(2);

var _nfs2 = _interopRequireDefault(_nfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var nr = new _nrenderer2.default({
        width: 300,
        height: 300
    });
    nr.init();

    var context = nr.getContext();
    var radialGradient = context.createRadialGradient(100, 100, 0, 100, 100, 50);
    radialGradient.addColorStop(0, 'rgba(255, 0, 0, 1)');
    radialGradient.addColorStop(0.25, 'rgba(255, 0, 0, 0.85)');
    radialGradient.addColorStop(0.55, 'rgba(255, 255, 0 ,0.55)');
    radialGradient.addColorStop(0.85, 'rgba(0, 255, 0, 0.25)');
    radialGradient.addColorStop(1, 'rgba(0, 0, 255, 0)');
    context.fillStyle = radialGradient;
    context.arc(100, 100, 50, 0, 2 * Math.PI, true);
    context.fill();

    // nr.getCanvas().pngStream().pipe(fs.createWriteStream('./test/heatmap.png'));

    // nr.paint();
    _nfs2.default.saveAsPNG(nr.getCanvas(), './test/heatmap.png');
};

var _nrenderer = __webpack_require__(1);

var _nrenderer2 = _interopRequireDefault(_nrenderer);

var _nfs = __webpack_require__(2);

var _nfs2 = _interopRequireDefault(_nfs);

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var nr = new _nrenderer2.default({
        width: 300,
        height: 300
    });
    nr.init();

    var arc = new _arc2.default({
        shape: {
            cx: 100,
            cy: 100,
            r: 30,
            startAngle: 0,
            endAngle: Math.PI / 2
        },
        style: {
            strokeStyle: 'red',
            lineWidth: 2
            // fillStyle: 'blue'
        }
    });

    nr.add(arc);

    nr.paint();
    _nfs2.default.saveAsPNG(nr.getCanvas(), './test/arc/arc.png');
};

var _arc = __webpack_require__(28);

var _arc2 = _interopRequireDefault(_arc);

var _nrenderer = __webpack_require__(1);

var _nrenderer2 = _interopRequireDefault(_nrenderer);

var _nfs = __webpack_require__(2);

var _nfs2 = _interopRequireDefault(_nfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var nr = new _nrenderer2.default({
    width: 300,
    height: 300
  });
  nr.init();

  var bezierCurve = new _bezierCurve2.default({
    shape: {
      x1: 10,
      y1: 10,
      cpx1: 50,
      cpy1: 120,
      cpx2: 80,
      cpy2: 3,
      x2: 130,
      y2: 10
    },
    style: {
      strokeStyle: "red",
      lineWidth: 2
      // fillStyle: 'blue'
    }
  });

  nr.add(bezierCurve);

  nr.paint();
  _nfs2.default.saveAsPNG(nr.getCanvas(), "./test/bezierCurve/bezierCurve.png");
};

var _bezierCurve = __webpack_require__(34);

var _bezierCurve2 = _interopRequireDefault(_bezierCurve);

var _nrenderer = __webpack_require__(1);

var _nrenderer2 = _interopRequireDefault(_nrenderer);

var _nfs = __webpack_require__(2);

var _nfs2 = _interopRequireDefault(_nfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _shape2 = __webpack_require__(0);

var _shape3 = _interopRequireDefault(_shape2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * 贝塞尔曲线.
 */
var BezierCurve = function (_Shape) {
  _inherits(BezierCurve, _Shape);

  function BezierCurve(opts) {
    _classCallCheck(this, BezierCurve);

    var _this = _possibleConstructorReturn(this, (BezierCurve.__proto__ || Object.getPrototypeOf(BezierCurve)).apply(this, arguments));

    _this.type = "BezierCurve";
    _this.shape = opts.shape;
    return _this;
  }

  _createClass(BezierCurve, [{
    key: "buildPath",
    value: function buildPath(context) {
      _get(BezierCurve.prototype.__proto__ || Object.getPrototypeOf(BezierCurve.prototype), "buildPath", this).call(this, context);

      var _shape = this.shape,
          x1 = _shape.x1,
          y1 = _shape.y1,
          cpx1 = _shape.cpx1,
          cpy1 = _shape.cpy1,
          cpx2 = _shape.cpx2,
          cpy2 = _shape.cpy2,
          x2 = _shape.x2,
          y2 = _shape.y2;

      context.beginPath();
      context.moveTo(x1, y1);

      if (cpx2 && cpy2) {
        // 三次贝塞尔.
        context.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
        return;
      }

      context.quadraticCurveTo(cpx1, cpy1, x2, y2);
    }
  }]);

  return BezierCurve;
}(_shape3.default);

exports.default = BezierCurve;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var nr = new _nrenderer2.default({
        width: 300,
        height: 300
    });
    nr.init();

    var polygon = new _polygon2.default({
        shape: {
            points: [[10, 10], [100, 100], [100, 30], [120, 90], [200, 250]]
        },
        style: {
            strokeStyle: 'red',
            lineWidth: 3
        }
    });

    nr.add(polygon);
    nr.paint();
    _nfs2.default.saveAsPNG(nr.getCanvas(), './test/polygon/polygon.png');
};

var _polygon = __webpack_require__(36);

var _polygon2 = _interopRequireDefault(_polygon);

var _nrenderer = __webpack_require__(1);

var _nrenderer2 = _interopRequireDefault(_nrenderer);

var _nfs = __webpack_require__(2);

var _nfs2 = _interopRequireDefault(_nfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _polyline = __webpack_require__(25);

var _polyline2 = _interopRequireDefault(_polyline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Polygon.
 */
var Polygon = function (_Polyline) {
  _inherits(Polygon, _Polyline);

  function Polygon(opts) {
    _classCallCheck(this, Polygon);

    var _this = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).apply(this, arguments));

    _this.type = "Polygon";
    return _this;
  }

  _createClass(Polygon, [{
    key: "buildPath",
    value: function buildPath(context) {
      _get(Polygon.prototype.__proto__ || Object.getPrototypeOf(Polygon.prototype), "buildPath", this).call(this, context);
      context.closePath();
    }
  }]);

  return Polygon;
}(_polyline2.default);

exports.default = Polygon;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var nr = new _nrenderer2.default({
    width: 300,
    height: 300
  });
  nr.init();

  var ring = new _ring2.default({
    shape: {
      cx: 100,
      cy: 100,
      r0: 20,
      r1: 30
    },
    style: {
      strokeStyle: "red",
      lineWidth: 2
      // fillStyle: 'blue'
    }
  });

  nr.add(ring);

  nr.paint();
  _nfs2.default.saveAsPNG(nr.getCanvas(), "./test/ring/ring.png");
};

var _ring = __webpack_require__(38);

var _ring2 = _interopRequireDefault(_ring);

var _nrenderer = __webpack_require__(1);

var _nrenderer2 = _interopRequireDefault(_nrenderer);

var _nfs = __webpack_require__(2);

var _nfs2 = _interopRequireDefault(_nfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _shape2 = __webpack_require__(0);

var _shape3 = _interopRequireDefault(_shape2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Ring.
 */
var Ring = function (_Shape) {
  _inherits(Ring, _Shape);

  function Ring(opts) {
    _classCallCheck(this, Ring);

    var _this = _possibleConstructorReturn(this, (Ring.__proto__ || Object.getPrototypeOf(Ring)).apply(this, arguments));

    _this.type = "Ring";
    _this.shape = opts.shape;
    return _this;
  }

  _createClass(Ring, [{
    key: "buildPath",
    value: function buildPath(context) {
      _get(Ring.prototype.__proto__ || Object.getPrototypeOf(Ring.prototype), "buildPath", this).call(this, context);

      var PI2 = Math.PI * 2;
      var _shape = this.shape,
          cx = _shape.cx,
          cy = _shape.cy,
          r0 = _shape.r0,
          r1 = _shape.r1;


      context.moveTo(cx + r0, cy);
      context.arc(cx, cy, r0, 0, PI2, false);
      context.moveTo(cx + r1, cy);
      context.arc(cx, cy, r1, 0, PI2, true);
    }
  }]);

  return Ring;
}(_shape3.default);

exports.default = Ring;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var nr = new _nrenderer2.default({
    width: 300,
    height: 300
  });
  nr.init();

  var sector = new _sector2.default({
    shape: {
      startAngle: -Math.PI / 4,
      endAngle: Math.PI / 4,
      r0: 50,
      r1: 100,
      clockWise: true
    },
    style: {
      strokeStyle: "red",
      lineWidth: 2,
      fillStyle: 'blue'
    }
  });

  nr.add(sector);

  nr.paint();
  _nfs2.default.saveAsPNG(nr.getCanvas(), "./test/sector/sector.png");
};

var _sector = __webpack_require__(40);

var _sector2 = _interopRequireDefault(_sector);

var _nrenderer = __webpack_require__(1);

var _nrenderer2 = _interopRequireDefault(_nrenderer);

var _nfs = __webpack_require__(2);

var _nfs2 = _interopRequireDefault(_nfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shape2 = __webpack_require__(0);

var _shape3 = _interopRequireDefault(_shape2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sector = function (_Shape) {
  _inherits(Sector, _Shape);

  function Sector(opts) {
    _classCallCheck(this, Sector);

    return _possibleConstructorReturn(this, (Sector.__proto__ || Object.getPrototypeOf(Sector)).apply(this, arguments));
  }

  _createClass(Sector, [{
    key: "buildPath",
    value: function buildPath(context) {
      var sin = Math.sin,
          cos = Math.cos,
          PI = Math.PI;

      var _init = this.init(),
          cx = _init.cx,
          cy = _init.cy,
          startAngle = _init.startAngle,
          endAngle = _init.endAngle,
          r0 = _init.r0,
          r1 = _init.r1,
          clockWise = _init.clockWise;

      context.moveTo(cx + r0 * cos(startAngle), cy + r0 * sin(startAngle));
      context.arc(cx, cy, r0, startAngle, endAngle, clockWise);
      context.lineTo(cx + r1 * cos(endAngle), cy + r1 * sin(endAngle));
      context.arc(cx, cy, r1, endAngle, startAngle, !clockWise);
      context.closePath();
    }
  }, {
    key: "init",
    value: function init() {
      var _shape = this.shape,
          cx = _shape.cx,
          cy = _shape.cy,
          startAngle = _shape.startAngle,
          endAngle = _shape.endAngle,
          r0 = _shape.r0,
          r1 = _shape.r1,
          clockWise = _shape.clockWise;

      r0 = r0 ? r0 : 0;
      r1 = r1 ? r1 : 0;
      clockWise = !clockWise;
      startAngle = startAngle ? startAngle : 0;
      endAngle = endAngle ? endAngle : Math.PI * 2;
      cx = cx ? cx : 150;
      cy = cy ? cy : 150;

      return { cx: cx, cy: cy, startAngle: startAngle, endAngle: endAngle, r0: r0, r1: r1, clockWise: clockWise };
    }
  }]);

  return Sector;
}(_shape3.default);

exports.default = Sector;

/***/ })
/******/ ]);