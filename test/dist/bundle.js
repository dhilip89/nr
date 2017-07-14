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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(1);
var isNil = __webpack_require__(7);
var fail = __webpack_require__(45);
var stringify = __webpack_require__(22);

function assert(guard, message) {
  if (guard !== true) {
    if (isFunction(message)) { // handle lazy messages
      message = message();
    }
    else if (isNil(message)) { // use a default message
      message = 'Assert failed (turn on "Pause on exceptions" in your Source panel)';
    }
    assert.fail(message);
  }
}

assert.fail = fail;
assert.stringify = stringify;

module.exports = assert;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function isFunction(x) {
  return typeof x === 'function';
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isType = __webpack_require__(4);
var getFunctionName = __webpack_require__(14);

module.exports = function getTypeName(constructor) {
  if (isType(constructor)) {
    return constructor.displayName;
  }
  return getFunctionName(constructor);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isString = __webpack_require__(13);
var isFunction = __webpack_require__(1);
var forbidNewOperator = __webpack_require__(12);

module.exports = function irreducible(name, predicate) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isString(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to irreducible(name, predicate) (expected a string)'; });
    assert(isFunction(predicate), 'Invalid argument predicate ' + assert.stringify(predicate) + ' supplied to irreducible(name, predicate) (expected a function)');
  }

  function Irreducible(value, path) {

    if (process.env.NODE_ENV !== 'production') {
      forbidNewOperator(this, Irreducible);
      path = path || [name];
      assert(predicate(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return value;
  }

  Irreducible.meta = {
    kind: 'irreducible',
    name: name,
    predicate: predicate,
    identity: true
  };

  Irreducible.displayName = name;

  Irreducible.is = predicate;

  return Irreducible;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(1);
var isObject = __webpack_require__(10);

module.exports = function isType(x) {
  return isFunction(x) && isObject(x.meta);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isNil = __webpack_require__(7);
var isString = __webpack_require__(13);

module.exports = function isTypeName(name) {
  return isNil(name) || isString(name);
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function isArray(x) {
  return x instanceof Array;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function isNil(x) {
  return x === null || x === void 0;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isType = __webpack_require__(4);
var isStruct = __webpack_require__(29);
var getFunctionName = __webpack_require__(14);
var assert = __webpack_require__(0);
var stringify = __webpack_require__(22);

// creates an instance of a type, handling the optional new operator
module.exports = function create(type, value, path) {
  if (isType(type)) {
    // for structs the new operator is allowed
    return isStruct(type) ? new type(value, path) : type(value, path);
  }

  if (process.env.NODE_ENV !== 'production') {
    // here type should be a class constructor and value some instance, just check membership and return the value
    path = path || [getFunctionName(type)];
    assert(value instanceof type, function () { return 'Invalid value ' + stringify(value) + ' supplied to ' + path.join('/'); });
  }

  return value;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isType = __webpack_require__(4);

// returns true if x is an instance of type
module.exports = function is(x, type) {
  if (isType(type)) {
    return type.is(x);
  }
  return x instanceof type; // type should be a class constructor
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isNil = __webpack_require__(7);
var isArray = __webpack_require__(6);

module.exports = function isObject(x) {
  return !isNil(x) && typeof x === 'object' && !isArray(x);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var Boolean = __webpack_require__(23);
var isType = __webpack_require__(4);
var getTypeName = __webpack_require__(2);

// return true if the type constructor behaves like the identity function
module.exports = function isIdentity(type) {
  if (isType(type)) {
    if (process.env.NODE_ENV !== 'production') {
      assert(Boolean.is(type.meta.identity), function () { return 'Invalid meta identity ' + assert.stringify(type.meta.identity) + ' supplied to type ' + getTypeName(type); });
    }
    return type.meta.identity;
  }
  // for tcomb the other constructors, like ES6 classes, are identity-like
  return true;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var getTypeName = __webpack_require__(2);

module.exports = function forbidNewOperator(x, type) {
  assert(!(x instanceof type), function () { return 'Cannot use the new operator to instantiate the type ' + getTypeName(type); });
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function isString(x) {
  return typeof x === 'string';
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function getFunctionName(f) {
  return f.displayName || f.name || '<function' + f.length + '>';
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isNil = __webpack_require__(7);
var assert = __webpack_require__(0);

// safe mixin, cannot override props unless specified
module.exports = function mixin(target, source, overwrite) {
  if (isNil(source)) { return target; }
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      if (overwrite !== true) {
        if (process.env.NODE_ENV !== 'production') {
          assert(!target.hasOwnProperty(k), function () { return 'Invalid call to mixin(target, source, [overwrite]): cannot overwrite property "' + k + '" of target object'; });
        }
      }
      target[k] = source[k];
    }
  }
  return target;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(42);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(3);

module.exports = irreducible('Any', function () { return true; });


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(3);
var isFunction = __webpack_require__(1);

module.exports = irreducible('Function', isFunction);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 20 */
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

var canvas = __webpack_require__(16)
  , Context2d = canvas.CanvasRenderingContext2d
  , CanvasGradient = canvas.CanvasGradient
  , CanvasPattern = canvas.CanvasPattern
  , ImageData = canvas.ImageData;

var parseCssFont = __webpack_require__(44);

var unitsCss = __webpack_require__(73);

/**
 * Export `Context2d` as the module.
 */

var Context2d = exports = module.exports = Context2d;

/**
 * Cache color string RGBA values.
 */

var cache = {};

/**
 * Text baselines.
 */

var baselines = ['alphabetic', 'top', 'bottom', 'middle', 'ideographic', 'hanging'];

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

var parseFont = exports.parseFont = function(str) {
  var parsedFont;

  // Try to parse the font string using parse-css-font.
  // It will throw an exception if it fails.
  try {
    parsedFont = parseCssFont(str);
  }
  catch (e) {
    // Invalid
    return;
  }

  // Cached
  if (cache[str]) return cache[str];

  // Parse size into value and unit using units-css
  var size = unitsCss.parse(parsedFont.size);

  // TODO: dpi
  // TODO: remaining unit conversion
  switch (size.unit) {
    case 'pt':
      size.value /= .75;
      break;
    case 'in':
      size.value *= 96;
      break;
    case 'mm':
      size.value *= 96.0 / 25.4;
      break;
    case 'cm':
      size.value *= 96.0 / 2.54;
      break;
  }

  // Populate font object
  var font = {
    weight: parsedFont.weight,
    style: parsedFont.style,
    size: size.value,
    unit: size.unit,
    family: parsedFont.family[0]
  };

  return cache[str] = font;
};

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
  // TODO Use repetition (currently always 'repeat')
  return new CanvasPattern(image);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/*! @preserve
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2016 Giulio Canti
 *
 */

// core
var t = __webpack_require__(0);

// types
t.Any = __webpack_require__(17);
t.Array = __webpack_require__(46);
t.Boolean = __webpack_require__(23);
t.Date = __webpack_require__(47);
t.Error = __webpack_require__(48);
t.Function = __webpack_require__(18);
t.Nil = __webpack_require__(25);
t.Number = __webpack_require__(49);
t.Object = __webpack_require__(50);
t.RegExp = __webpack_require__(51);
t.String = __webpack_require__(27);

// short alias are deprecated
t.Arr = t.Array;
t.Bool = t.Boolean;
t.Dat = t.Date;
t.Err = t.Error;
t.Func = t.Function;
t.Num = t.Number;
t.Obj = t.Object;
t.Re = t.RegExp;
t.Str = t.String;

// combinators
t.dict = __webpack_require__(28);
t.declare = __webpack_require__(52);
t.enums = __webpack_require__(53);
t.irreducible = __webpack_require__(3);
t.list = __webpack_require__(30);
t.maybe = __webpack_require__(54);
t.refinement = __webpack_require__(56);
t.struct = __webpack_require__(57);
t.tuple = __webpack_require__(31);
t.union = __webpack_require__(58);
t.func = __webpack_require__(60);
t.intersection = __webpack_require__(61);
t.subtype = t.refinement;

// functions
t.assert = t;
t.update = __webpack_require__(62);
t.mixin = __webpack_require__(15);
t.isType = __webpack_require__(4);
t.is = __webpack_require__(9);
t.getTypeName = __webpack_require__(2);
t.match = __webpack_require__(63);

module.exports = t;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function stringify(x) {
  try { // handle "Converting circular structure to JSON" error
    return JSON.stringify(x, null, 2);
  }
  catch (e) {
    return String(x);
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(3);
var isBoolean = __webpack_require__(24);

module.exports = irreducible('Boolean', isBoolean);


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function isBoolean(x) {
  return x === true || x === false;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(3);
var isNil = __webpack_require__(7);

module.exports = irreducible('Nil', isNil);


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function isNumber(x) {
  return typeof x === 'number' && isFinite(x) && !isNaN(x);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(3);
var isString = __webpack_require__(13);

module.exports = irreducible('String', isString);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(5);
var isFunction = __webpack_require__(1);
var getTypeName = __webpack_require__(2);
var isIdentity = __webpack_require__(11);
var isObject = __webpack_require__(10);
var create = __webpack_require__(8);
var is = __webpack_require__(9);

function getDefaultName(domain, codomain) {
  return '{[key: ' + getTypeName(domain) + ']: ' + getTypeName(codomain) + '}';
}

function dict(domain, codomain, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(domain), function () { return 'Invalid argument domain ' + assert.stringify(domain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
    assert(isFunction(codomain), function () { return 'Invalid argument codomain ' + assert.stringify(codomain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to dict(domain, codomain, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(domain, codomain);
  var domainNameCache = getTypeName(domain);
  var codomainNameCache = getTypeName(codomain);
  var identity = isIdentity(domain) && isIdentity(codomain);

  function Dict(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      path = path || [displayName];
      assert(isObject(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    var idempotent = true; // will remain true if I can reutilise the input
    var ret = {}; // make a temporary copy, will be discarded if idempotent remains true
    for (var k in value) {
      if (value.hasOwnProperty(k)) {
        k = create(domain, k, ( process.env.NODE_ENV !== 'production' ? path.concat(domainNameCache) : null ));
        var actual = value[k];
        var instance = create(codomain, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(k + ': ' + codomainNameCache) : null ));
        idempotent = idempotent && ( actual === instance );
        ret[k] = instance;
      }
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (process.env.NODE_ENV !== 'production') {
      Object.freeze(ret);
    }

    return ret;
  }

  Dict.meta = {
    kind: 'dict',
    domain: domain,
    codomain: codomain,
    name: name,
    identity: identity
  };

  Dict.displayName = displayName;

  Dict.is = function (x) {
    if (!isObject(x)) {
      return false;
    }
    for (var k in x) {
      if (x.hasOwnProperty(k)) {
        if (!is(k, domain) || !is(x[k], codomain)) {
          return false;
        }
      }
    }
    return true;
  };

  Dict.update = function (instance, patch) {
    return Dict(assert.update(instance, patch));
  };

  return Dict;
}

dict.getDefaultName = getDefaultName;
module.exports = dict;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isType = __webpack_require__(4);

module.exports = function isStruct(x) {
  return isType(x) && ( x.meta.kind === 'struct' );
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(5);
var isFunction = __webpack_require__(1);
var getTypeName = __webpack_require__(2);
var isIdentity = __webpack_require__(11);
var create = __webpack_require__(8);
var is = __webpack_require__(9);
var isArray = __webpack_require__(6);

function getDefaultName(type) {
  return 'Array<' + getTypeName(type) + '>';
}

function list(type, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to list(type, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to list(type, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(type);
  var typeNameCache = getTypeName(type);
  var identity = isIdentity(type); // the list is identity iif type is identity

  function List(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      path = path || [displayName];
      assert(isArray(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of ' + typeNameCache + ')'; });
    }

    var idempotent = true; // will remain true if I can reutilise the input
    var ret = []; // make a temporary copy, will be discarded if idempotent remains true
    for (var i = 0, len = value.length; i < len; i++ ) {
      var actual = value[i];
      var instance = create(type, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(i + ': ' + typeNameCache) : null ));
      idempotent = idempotent && ( actual === instance );
      ret.push(instance);
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (process.env.NODE_ENV !== 'production') {
      Object.freeze(ret);
    }

    return ret;
  }

  List.meta = {
    kind: 'list',
    type: type,
    name: name,
    identity: identity
  };

  List.displayName = displayName;

  List.is = function (x) {
    return isArray(x) && x.every(function (e) {
      return is(e, type);
    });
  };

  List.update = function (instance, patch) {
    return List(assert.update(instance, patch));
  };

  return List;
}

list.getDefaultName = getDefaultName;
module.exports = list;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(5);
var isFunction = __webpack_require__(1);
var getTypeName = __webpack_require__(2);
var isIdentity = __webpack_require__(11);
var isArray = __webpack_require__(6);
var create = __webpack_require__(8);
var is = __webpack_require__(9);

function getDefaultName(types) {
  return '[' + types.map(getTypeName).join(', ') + ']';
}

function tuple(types, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(types) && types.every(isFunction), function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to tuple(types, [name]) combinator (expected an array of types)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to tuple(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(types);
  var identity = types.every(isIdentity);

  function Tuple(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value;
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      path = path || [displayName];
      assert(isArray(value) && value.length === types.length, function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of length ' + types.length + ')'; });
    }

    var idempotent = true;
    var ret = [];
    for (var i = 0, len = types.length; i < len; i++) {
      var expected = types[i];
      var actual = value[i];
      var instance = create(expected, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(i + ': ' + getTypeName(expected)) : null ));
      idempotent = idempotent && ( actual === instance );
      ret.push(instance);
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (process.env.NODE_ENV !== 'production') {
      Object.freeze(ret);
    }

    return ret;
  }

  Tuple.meta = {
    kind: 'tuple',
    types: types,
    name: name,
    identity: identity
  };

  Tuple.displayName = displayName;

  Tuple.is = function (x) {
    return isArray(x) &&
      x.length === types.length &&
      types.every(function (type, i) {
        return is(x[i], type);
      });
  };

  Tuple.update = function (instance, patch) {
    return Tuple(assert.update(instance, patch));
  };

  return Tuple;
}

tuple.getDefaultName = getDefaultName;
module.exports = tuple;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env browser, node */



var utilities = {};

utilities.getElementFontSize = function(element) {
  return typeof getComputedStyle !== 'undefined'
    ? parseFloat(getComputedStyle(element, '').fontSize)
    : 16; // Default browser font-size
};

utilities.getCreatedElementDimensions = function(parent, properties, content) {
  var element = document.createElement('div');
  var style = element.style;
  var dimensions;
  var property;

  style.position = 'absolute';
  style.zIndex = -2147483648;
  style.left = 0;
  style.top = 0;
  style.visibility = 'hidden';

  if (properties) {
    for (property in properties) {
      /* istanbul ignore else */
      if (properties.hasOwnProperty(property)) {
        style[property] = properties[property];
      }
    }
  }

  if (content) {
    element.innerHTML = content;
  }

  parent.appendChild(element);

  dimensions = [
    element.offsetWidth,
    element.offsetHeight
  ];

  parent.removeChild(element);

  return dimensions;
};

utilities.getCreatedElementWidth = function(parent, properties, content) {
  return utilities.getCreatedElementDimensions(parent, properties, content)[0];
};

utilities.getCreatedElementHeight = function(parent, properties, content) {
  return utilities.getCreatedElementDimensions(parent, properties, content)[1];
};

var selfReferenceTriggers = [
  'perspective',
  'translate',
  'translate3d',
  'translateX',
  'translateY',
  'translateZ',
  'transformOrigin'
];

var layoutYTriggers = [
  'height',
  'top',
  'translateY'
];

var positionTriggers = ['absolute', 'fixed'];

utilities.getRelativeElementDimension = function(element, property) {
  var reference;
  var dimension;
  var referenceComputed;
  var useY = layoutYTriggers.indexOf(property) > -1;
  var useSelf = selfReferenceTriggers.indexOf(property) > -1;
  var positioned = positionTriggers.indexOf(getComputedStyle(element, '').position) > -1;

  if (useSelf) {
    reference = element;
  } else {
    reference = positioned
      ? element.offsetParent
      : element.parentNode;
  }

  dimension = useY
    ? reference.offsetHeight
    : reference.offsetWidth;

  if (!useSelf && positioned) {
    referenceComputed = getComputedStyle(reference, '');

    dimension -= useY
      ? parseFloat(referenceComputed.paddingTop) + parseFloat(referenceComputed.paddingBottom)
      : parseFloat(referenceComputed.paddingRight) + parseFloat(referenceComputed.paddingLeft);
  }

  return dimension;
};

utilities.DPI = (function () {
  // Preserve dpi-reliant conversion functionality when not running in browser environment
  /* istanbul ignore next */
  if (typeof window === 'undefined') {
    return 96;
  }

  return utilities.getCreatedElementWidth(document.body, {
    'width': '1in'
  });
}());

/**
 * Return value if non-zero, else return one (to avoid division by zero in calling code).
 *
 * @param {number} value Number to return, converting to one if zero.
 * @returns {number} Non-zero value.
 */
utilities.ifZeroThenOne = function(value) {
  return value === 0
    ? 1
    : value;
};

// Exports
module.exports = utilities;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_graphic_shape_circle__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_nrenderer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_io_nfs__ = __webpack_require__(86);




let nr = new __WEBPACK_IMPORTED_MODULE_1__src_nrenderer__["a" /* default */]({
    width: 300,
    height: 300
});
nr.init();

let c = new __WEBPACK_IMPORTED_MODULE_0__src_graphic_shape_circle__["a" /* default */]({
    shape: {
        cx: 100,
        cy: 100,
        r: 20
    },
    style: {
        fillStyle: 'blue',
        strokeStyle: 'orange',
        lineWidth: 3
    }
});

nr.add(c);

c = new __WEBPACK_IMPORTED_MODULE_0__src_graphic_shape_circle__["a" /* default */]({
    shape: {
        cx: 120,
        cy: 120,
        r: 20
    },
    style: {
        fillStyle: 'blue',
        strokeStyle: 'orange',
        lineWidth: 3
    }
});

nr.add(c);
nr.paint();

__WEBPACK_IMPORTED_MODULE_2__src_io_nfs__["a" /* default */].saveAsPNG(nr.getCanvas(), './test/test.png');

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shape__ = __webpack_require__(36);


/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Circle shape.
 */
class Circle extends __WEBPACK_IMPORTED_MODULE_0__shape__["a" /* default */] {
    constructor(opts) {
        super(opts);
    }

    buildPath(context) {
        context.beginPath();
        let shape = this.opts.shape;
        context.arc(shape.cx, shape.cy, shape.r, 0, 2 * Math.PI, true);
        context.fill();
        context.stroke();
        context.closePath();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Circle;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Base shape.
 */
class Shape {
    constructor(opts) {
        this.opts = opts;
    }

    buildPath(context) {}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Shape;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__painter__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_canvas_lib_canvas__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_canvas_lib_canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_canvas_lib_canvas__);





/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * NodeJS graphic render.
 */
class NRenderer {
    constructor(opts) {
        this.width = opts['width'] || 300;
        this.height = opts['height'] || 150;

        this.canvas = null;
        this.context = null;
        this.shapes = [];

        this.painter = null;
        this.storage = new __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* default */]();
    }

    /**
     * Init canvas and graphic context.
     */
    init() {
        this.canvas = new __WEBPACK_IMPORTED_MODULE_2_canvas_lib_canvas___default.a(this.width, this.height);
        this.context = this.canvas.getContext('2d');
        this.painter = new __WEBPACK_IMPORTED_MODULE_1__painter__["a" /* default */](this.context);
    }

    /**
     * Get canvas 2d context.
     */
    getContext() {
        return this.context;
    }

    /**
     * Get canvas. for example, if you want to write it to file, you can use it to get canvas.
     */
    getCanvas() {
        return this.canvas;
    }

    /**
     * Get canvas width.
     */
    getWidth() {
        return this.width;
    }

    /**
     * Get canvas height;
     */
    getHeight() {
        return this.height;
    }

    /**
     * Set canvas width.
     * @param {Number} width 
     */
    setWidth(width) {
        this.width = width;
    }

    /**
     * Set canvas height.
     * @param {Number} height 
     */
    setHeight(height) {
        this.height = height;
    }

    /**
     * Add shape to nrenderer to render them.
     * @param {Shape} shape 
     */
    add(shape) {
        this.storage.add(shape);
    }

    /**
     * Remove shape from nrenderer.
     * @param {Shape} shape 
     */
    remove(shape) {
        this.storage.remove(shape);
    }

    /**
     * paint all shapes.
     */
    paint() {
        for (let i = 0; i < this.storage.count(); i++) {
            this.painter.paint(this.storage.get(i));
        }
    }

    /**
     * Clear canvas.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} width 
     * @param {Number} height 
     */
    clear(x, y, width, height) {
        this.painter.clear(x, y, width, height);
    }

    /**
     * Clear all the canvas.
     */
    clearAll() {
        this.clear(0, 0, this.width, this.height);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NRenderer;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Storage is the save manager of NRender.
 */
class Storage {
    constructor() {
        this.shapes = []; // Save all the base shapes.
    }

    /**
     * Add shape to storage.
     * @param {Shape} shape 
     */
    add(shape) {
        this.shapes.push(shape);
    }

    /**
     * Get shape from storage.
     * @param {Number} i 
     */
    get(i) {
        return this.shapes[i];
    }

    getAll() {
        return this.shapes;
    }

    /**
     * Remove shape from storage.
     * @param {Shape} shape 
     */
    remove(shape) {
        let index = this.shapes.indexOf(shape);

        if (index != -1) {
            this.shapes.splice(index, 1);
        }
    }

    /**
     * Get the size of shapes.
     */
    count() {
        return this.shapes.length;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Storage;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphic_style__ = __webpack_require__(40);



/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Paint the base shape.
 */
class Painter {
  /**
   * Constructor.
   * @param {Canvas2DContext} context 
   */
  constructor(context) {
    this.context = context;
  }

  /**
   * Paint base shape to canvas.
   * @param {Shape} shape 
   */
  paint(shape) {
    let shapeStyle = shape.opts.style;
    let style = new __WEBPACK_IMPORTED_MODULE_0__graphic_style__["a" /* default */](shapeStyle);
    style.bind(this.context); // bind style to context.
    shape.buildPath(this.context); // paint base shape.
  }

  /**
   * Clear canvas.
   */
  clear(x, y, width, height) {
    this.context.clearRect(x, y, width, height);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Painter;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Process about style and bind style to Canvas2DContext.
 */
class Style {
    constructor(style) {
        this.style = style;
    }

    bind(context) {
        let styleName = Object.keys(this.style);

        for (let i = 0; i < styleName.length; i++) {
            context[styleName[i]] = this.style[styleName[i]];
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Style;


/***/ }),
/* 41 */
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

var canvas = __webpack_require__(16)
  , Canvas = canvas.Canvas
  , Image = canvas.Image
  , cairoVersion = canvas.cairoVersion
  , Context2d = __webpack_require__(20)
  , PNGStream = __webpack_require__(81)
  , PDFStream = __webpack_require__(82)
  , JPEGStream = __webpack_require__(83)
  , FontFace = canvas.FontFace
  , fs = __webpack_require__(33)
  , packageJson = __webpack_require__(84)
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

__webpack_require__(20);

/**
 * Image implementation.
 */

__webpack_require__(85);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {try {global.process.dlopen(module, "/home/yuan/Desktop/NRenderer/node_modules/canvas/build/Release/canvas.node"); } catch(e) {throw new Error('Cannot open ' + "/home/yuan/Desktop/NRenderer/node_modules/canvas/build/Release/canvas.node" + ': ' + e);}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)(module)))

/***/ }),
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

﻿var t = __webpack_require__(21);
var unquote = __webpack_require__(64);
var globalKeywords = __webpack_require__(65);
var systemFontKeywords = __webpack_require__(66);
var fontWeightKeywords = __webpack_require__(67);
var fontStyleKeywords = __webpack_require__(68);
var fontStretchKeywords = __webpack_require__(69);
var cssListHelpers = __webpack_require__(70);

var helpers = __webpack_require__(71);

var SystemFont = t.struct({
	system: t.String
});

var Font = t.struct({
	style: t.String,
	variant: t.String,
	weight: t.String,
	stretch: t.String,
	size: t.String,
	lineHeight: t.union([t.String, t.Number]),
	family: t.list(t.String)
});

var Result = t.union([Font, SystemFont]);

module.exports = t.func(t.String, t.Object).of(
	function(value) {

		if (value === '') {
			throw error('Cannot parse an empty string.');
		}

		if (systemFontKeywords.indexOf(value) !== -1) {
			return SystemFont({ system: value });
		}

		var font = {
			style: 'normal',
			variant: 'normal',
			weight: 'normal',
			stretch: 'normal',
			lineHeight: 'normal'
		};

		var isLocked = false;
		var tokens = cssListHelpers.splitBySpaces(value);
		var token = tokens.shift();
		for (; !t.Nil.is(token); token = tokens.shift()) {

			if (token === 'normal' || globalKeywords.indexOf(token) !== -1) {
				['style', 'variant', 'weight', 'stretch'].forEach(function(prop) {
					font[prop] = token;
				});
				isLocked = true;
				continue;
			}

			if (fontWeightKeywords.indexOf(token) !== -1) {
				if (isLocked) {
					continue;
				}
				font.weight = token;
				continue;
			}

			if (fontStyleKeywords.indexOf(token) !== -1) {
				if (isLocked) {
					continue;
				}
				font.style = token;
				continue;
			}

			if (fontStretchKeywords.indexOf(token) !== -1) {
				if (isLocked) {
					continue;
				}
				font.stretch = token;
				continue;
			}

			if (helpers.isSize(token)) {
				var parts = cssListHelpers.split(token, ['/']);
				font.size = parts[0];
				if (!t.Nil.is(parts[1])) {
					font.lineHeight = parseLineHeight(parts[1]);
				}
				if (!tokens.length) {
					throw error('Missing required font-family.');
				}
				font.family = cssListHelpers.splitByCommas(tokens.join(' ')).map(unquote);
				return Font(font);
			}

			if (font.variant !== 'normal') {
				throw error('Unknown or unsupported font token: ' + font.variant);
			}

			if (isLocked) {
				continue;
			}
			font.variant = token;
		}

		throw error('Missing required font-size.');
	}
);

function error(message) {
	return new Error('[parse-css-font] ' + message);
}

function parseLineHeight(value) {
	var parsed = parseFloat(value);
	if (parsed.toString() === value) {
		return parsed;
	}
	return value;
}


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function fail(message) {
  throw new TypeError('[tcomb] ' + message);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(3);
var isArray = __webpack_require__(6);

module.exports = irreducible('Array', isArray);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(3);

module.exports = irreducible('Date', function (x) { return x instanceof Date; });


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(3);

module.exports = irreducible('Error', function (x) { return x instanceof Error; });


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(3);
var isNumber = __webpack_require__(26);

module.exports = irreducible('Number', isNumber);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(3);
var isObject = __webpack_require__(10);

module.exports = irreducible('Object', isObject);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(3);

module.exports = irreducible('RegExp', function (x) { return x instanceof RegExp; });


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(5);
var isType = __webpack_require__(4);
var isNil = __webpack_require__(7);
var mixin = __webpack_require__(15);
var getTypeName = __webpack_require__(2);

// All the .declare-d types should be clearly different from each other thus they should have
// different names when a name was not explicitly provided.
var nextDeclareUniqueId = 1;

module.exports = function declare(name) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isTypeName(name), function () { return 'Invalid argument name ' + name + ' supplied to declare([name]) (expected a string)'; });
  }

  var type;

  function Declare(value, path) {
    if (process.env.NODE_ENV !== 'production') {
      assert(!isNil(type), function () { return 'Type declared but not defined, don\'t forget to call .define on every declared type'; });
    }
    return type(value, path);
  }

  Declare.define = function (spec) {
    if (process.env.NODE_ENV !== 'production') {
      assert(isType(spec), function () { return 'Invalid argument type ' + assert.stringify(spec) +  ' supplied to define(type) (expected a type)'; });
      assert(isNil(type), function () { return 'Declare.define(type) can only be invoked once'; });
      assert(isNil(spec.meta.name) && Object.keys(spec.prototype).length === 0, function () { return 'Invalid argument type ' + assert.stringify(spec) + ' supplied to define(type) (expected a fresh, unnamed type)'; });
    }

    type = spec;
    mixin(Declare, type, true); // true because it overwrites Declare.displayName
    if (name) {
      type.displayName = Declare.displayName = name;
      Declare.meta.name = name;
    }
    // ensure identity is still false
    Declare.meta.identity = false;
    Declare.prototype = type.prototype;
    return Declare;
  };

  Declare.displayName = name || ( getTypeName(Declare) + "$" + nextDeclareUniqueId++ );
  // in general I can't say if this type will be an identity, for safety setting to false
  Declare.meta = { identity: false };
  Declare.prototype = null;
  return Declare;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(5);
var forbidNewOperator = __webpack_require__(12);
var isString = __webpack_require__(13);
var isObject = __webpack_require__(10);

function getDefaultName(map) {
  return Object.keys(map).map(function (k) { return assert.stringify(k); }).join(' | ');
}

function enums(map, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isObject(map), function () { return 'Invalid argument map ' + assert.stringify(map) + ' supplied to enums(map, [name]) combinator (expected a dictionary of String -> String | Number)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to enums(map, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(map);

  function Enums(value, path) {

    if (process.env.NODE_ENV !== 'production') {
      forbidNewOperator(this, Enums);
      path = path || [displayName];
      assert(Enums.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected one of ' + assert.stringify(Object.keys(map)) + ')'; });
    }

    return value;
  }

  Enums.meta = {
    kind: 'enums',
    map: map,
    name: name,
    identity: true
  };

  Enums.displayName = displayName;

  Enums.is = function (x) {
    return map.hasOwnProperty(x);
  };

  return Enums;
}

enums.of = function (keys, name) {
  keys = isString(keys) ? keys.split(' ') : keys;
  var value = {};
  keys.forEach(function (k) {
    value[k] = k;
  });
  return enums(value, name);
};

enums.getDefaultName = getDefaultName;
module.exports = enums;



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(5);
var isFunction = __webpack_require__(1);
var isMaybe = __webpack_require__(55);
var isIdentity = __webpack_require__(11);
var Any = __webpack_require__(17);
var create = __webpack_require__(8);
var Nil = __webpack_require__(25);
var forbidNewOperator = __webpack_require__(12);
var is = __webpack_require__(9);
var getTypeName = __webpack_require__(2);

function getDefaultName(type) {
  return '?' + getTypeName(type);
}

function maybe(type, name) {

  if (isMaybe(type) || type === Any || type === Nil) { // makes the combinator idempotent and handle Any, Nil
    return type;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to maybe(type, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to maybe(type, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(type);

  function Maybe(value, path) {
    if (process.env.NODE_ENV !== 'production') {
      forbidNewOperator(this, Maybe);
    }
    return Nil.is(value) ? null : create(type, value, path);
  }

  Maybe.meta = {
    kind: 'maybe',
    type: type,
    name: name,
    identity: isIdentity(type)
  };

  Maybe.displayName = displayName;

  Maybe.is = function (x) {
    return Nil.is(x) || is(x, type);
  };

  return Maybe;
}

maybe.getDefaultName = getDefaultName;
module.exports = maybe;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isType = __webpack_require__(4);

module.exports = function isMaybe(x) {
  return isType(x) && ( x.meta.kind === 'maybe' );
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(5);
var isFunction = __webpack_require__(1);
var forbidNewOperator = __webpack_require__(12);
var isIdentity = __webpack_require__(11);
var create = __webpack_require__(8);
var is = __webpack_require__(9);
var getTypeName = __webpack_require__(2);
var getFunctionName = __webpack_require__(14);

function getDefaultName(type, predicate) {
  return '{' + getTypeName(type) + ' | ' + getFunctionName(predicate) + '}';
}

function refinement(type, predicate, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to refinement(type, predicate, [name]) combinator (expected a type)'; });
    assert(isFunction(predicate), function () { return 'Invalid argument predicate supplied to refinement(type, predicate, [name]) combinator (expected a function)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to refinement(type, predicate, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(type, predicate);
  var identity = isIdentity(type);

  function Refinement(value, path) {

    if (process.env.NODE_ENV !== 'production') {
      forbidNewOperator(this, Refinement);
      path = path || [displayName];
    }

    var x = create(type, value, path);

    if (process.env.NODE_ENV !== 'production') {
      assert(predicate(x), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return x;
  }

  Refinement.meta = {
    kind: 'subtype',
    type: type,
    predicate: predicate,
    name: name,
    identity: identity
  };

  Refinement.displayName = displayName;

  Refinement.is = function (x) {
    return is(x, type) && predicate(x);
  };

  Refinement.update = function (instance, patch) {
    return Refinement(assert.update(instance, patch));
  };

  return Refinement;
}

refinement.getDefaultName = getDefaultName;
module.exports = refinement;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(5);
var String = __webpack_require__(27);
var Function = __webpack_require__(18);
var isArray = __webpack_require__(6);
var isObject = __webpack_require__(10);
var create = __webpack_require__(8);
var mixin = __webpack_require__(15);
var isStruct = __webpack_require__(29);
var getTypeName = __webpack_require__(2);
var dict = __webpack_require__(28);

function getDefaultName(props) {
  return '{' + Object.keys(props).map(function (prop) {
    return prop + ': ' + getTypeName(props[prop]);
  }).join(', ') + '}';
}

function extend(mixins, name) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(mixins) && mixins.every(function (x) {
      return isObject(x) || isStruct(x);
    }), function () { return 'Invalid argument mixins supplied to extend(mixins, name), expected an array of objects or structs'; });
  }
  var props = {};
  var prototype = {};
  mixins.forEach(function (struct) {
    if (isObject(struct)) {
      mixin(props, struct);
    }
    else {
      mixin(props, struct.meta.props);
      mixin(prototype, struct.prototype);
    }
  });
  var ret = struct(props, name);
  mixin(ret.prototype, prototype);
  return ret;
}

function struct(props, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(dict(String, Function).is(props), function () { return 'Invalid argument props ' + assert.stringify(props) + ' supplied to struct(props, [name]) combinator (expected a dictionary String -> Type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to struct(props, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(props);

  function Struct(value, path) {

    if (Struct.is(value)) { // implements idempotency
      return value;
    }

    if (process.env.NODE_ENV !== 'production') {
      path = path || [displayName];
      assert(isObject(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an object)'; });
    }

    if (!(this instanceof Struct)) { // `new` is optional
      return new Struct(value, path);
    }

    for (var k in props) {
      if (props.hasOwnProperty(k)) {
        var expected = props[k];
        var actual = value[k];
        this[k] = create(expected, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(k + ': ' + getTypeName(expected)) : null ));
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      Object.freeze(this);
    }

  }

  Struct.meta = {
    kind: 'struct',
    props: props,
    name: name,
    identity: false
  };

  Struct.displayName = displayName;

  Struct.is = function (x) {
    return x instanceof Struct;
  };

  Struct.update = function (instance, patch) {
    return new Struct(assert.update(instance, patch));
  };

  Struct.extend = function (structs, name) {
    return extend([Struct].concat(structs), name);
  };

  return Struct;
}

struct.getDefaultName = getDefaultName;
struct.extend = extend;
module.exports = struct;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(5);
var isFunction = __webpack_require__(1);
var getTypeName = __webpack_require__(2);
var isIdentity = __webpack_require__(11);
var isArray = __webpack_require__(6);
var create = __webpack_require__(8);
var is = __webpack_require__(9);
var forbidNewOperator = __webpack_require__(12);
var isType = __webpack_require__(4);
var isUnion = __webpack_require__(59);
var isNil = __webpack_require__(7);

function getDefaultName(types) {
  return types.map(getTypeName).join(' | ');
}

function union(types, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to union(types, [name]) combinator (expected an array of at least 2 types)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to union(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(types);
  var identity = types.every(isIdentity);

  function Union(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value;
      }
    }

    var type = Union.dispatch(value);
    if (!type && Union.is(value)) {
      return value;
    }

    if (process.env.NODE_ENV !== 'production') {
      forbidNewOperator(this, Union);
      path = path || [displayName];
      assert(isType(type), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (no constructor returned by dispatch)'; });
      path[path.length - 1] += '(' + getTypeName(type) + ')';
    }

    return create(type, value, path);
  }

  Union.meta = {
    kind: 'union',
    types: types,
    name: name,
    identity: identity
  };

  Union.displayName = displayName;

  Union.is = function (x) {
    return types.some(function (type) {
      return is(x, type);
    });
  };

  Union.dispatch = function (x) { // default dispatch implementation
    for (var i = 0, len = types.length; i < len; i++ ) {
      var type = types[i];
      if (isUnion(type)) { // handle union of unions
        var t = type.dispatch(x);
        if (!isNil(t)) {
          return t;
        }
      }
      else if (is(x, type)) {
        return type;
      }
    }
  };

  Union.update = function (instance, patch) {
    return Union(assert.update(instance, patch));
  };

  return Union;
}

union.getDefaultName = getDefaultName;
module.exports = union;



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isType = __webpack_require__(4);

module.exports = function isUnion(x) {
  return isType(x) && ( x.meta.kind === 'union' );
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(5);
var FunctionType = __webpack_require__(18);
var isArray = __webpack_require__(6);
var list = __webpack_require__(30);
var isObject = __webpack_require__(10);
var create = __webpack_require__(8);
var isNil = __webpack_require__(7);
var isBoolean = __webpack_require__(24);
var tuple = __webpack_require__(31);
var getFunctionName = __webpack_require__(14);
var getTypeName = __webpack_require__(2);

function getDefaultName(domain, codomain) {
  return '(' + domain.map(getTypeName).join(', ') + ') => ' + getTypeName(codomain);
}

function isInstrumented(f) {
  return FunctionType.is(f) && isObject(f.instrumentation);
}

function func(domain, codomain, name) {

  domain = isArray(domain) ? domain : [domain]; // handle handy syntax for unary functions

  if (process.env.NODE_ENV !== 'production') {
    assert(list(FunctionType).is(domain), function () { return 'Invalid argument domain ' + assert.stringify(domain) + ' supplied to func(domain, codomain, [name]) combinator (expected an array of types)'; });
    assert(FunctionType.is(codomain), function () { return 'Invalid argument codomain ' + assert.stringify(codomain) + ' supplied to func(domain, codomain, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to func(domain, codomain, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(domain, codomain);

  function FuncType(value, curried) {

    if (!isInstrumented(value)) { // automatically instrument the function
      return FuncType.of(value, curried);
    }

    if (process.env.NODE_ENV !== 'production') {
      assert(FuncType.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + displayName; });
    }

    return value;
  }

  FuncType.meta = {
    kind: 'func',
    domain: domain,
    codomain: codomain,
    name: name,
    identity: true
  };

  FuncType.displayName = displayName;

  FuncType.is = function (x) {
    return isInstrumented(x) &&
      x.instrumentation.domain.length === domain.length &&
      x.instrumentation.domain.every(function (type, i) {
        return type === domain[i];
      }) &&
      x.instrumentation.codomain === codomain;
  };

  FuncType.of = function (f, curried) {

    if (process.env.NODE_ENV !== 'production') {
      assert(FunctionType.is(f), function () { return 'Invalid argument f supplied to func.of ' + displayName + ' (expected a function)'; });
      assert(isNil(curried) || isBoolean(curried), function () { return 'Invalid argument curried ' + assert.stringify(curried) + ' supplied to func.of ' + displayName + ' (expected a boolean)'; });
    }

    if (FuncType.is(f)) { // makes FuncType.of idempotent
      return f;
    }

    function fn() {
      var args = Array.prototype.slice.call(arguments);
      var len = curried ?
        args.length :
        domain.length;
      var argsType = tuple(domain.slice(0, len));

      args = argsType(args); // type check arguments

      if (len === domain.length) {
        return create(codomain, f.apply(this, args));
      }
      else {
        var g = Function.prototype.bind.apply(f, [this].concat(args));
        var newdomain = func(domain.slice(len), codomain);
        return newdomain.of(g, curried);
      }
    }

    fn.instrumentation = {
      domain: domain,
      codomain: codomain,
      f: f
    };

    fn.displayName = getFunctionName(f);

    return fn;

  };

  return FuncType;

}

func.getDefaultName = getDefaultName;
module.exports = func;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(5);
var isFunction = __webpack_require__(1);
var isArray = __webpack_require__(6);
var forbidNewOperator = __webpack_require__(11);
var is = __webpack_require__(9);
var getTypeName = __webpack_require__(2);

function getDefaultName(types) {
  return types.map(getTypeName).join(' & ');
}

function intersection(types, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to intersection(types, [name]) combinator (expected an array of at least 2 types)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to intersection(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(types);

  function Intersection(value, path) {

    if (process.env.NODE_ENV !== 'production') {
      forbidNewOperator(this, Intersection);
      path = path || [displayName];
      assert(Intersection.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return value;
  }

  Intersection.meta = {
    kind: 'intersection',
    types: types,
    name: name,
    identity: true
  };

  Intersection.displayName = displayName;

  Intersection.is = function (x) {
    return types.every(function (type) {
      return is(x, type);
    });
  };

  Intersection.update = function (instance, patch) {
    return Intersection(assert.update(instance, patch));
  };

  return Intersection;
}

intersection.getDefaultName = getDefaultName;
module.exports = intersection;



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isObject = __webpack_require__(10);
var isFunction = __webpack_require__(1);
var isArray = __webpack_require__(6);
var isNumber = __webpack_require__(26);
var mixin = __webpack_require__(15);

function getShallowCopy(x) {
  if (isArray(x)) {
    return x.concat();
  }
  if (x instanceof Date || x instanceof RegExp) {
    return x;
  }
  if (isObject(x)) {
    return mixin({}, x);
  }
  return x;
}

function update(instance, patch) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isObject(patch), function () { return 'Invalid argument patch ' + assert.stringify(patch) + ' supplied to function update(instance, patch): expected an object containing commands'; });
  }

  var value = getShallowCopy(instance);
  var isChanged = false;
  for (var k in patch) {
    if (patch.hasOwnProperty(k)) {
      if (update.commands.hasOwnProperty(k)) {
        value = update.commands[k](patch[k], value);
        isChanged = true;
      }
      else {
        var newValue = update(value[k], patch[k]);
        isChanged = isChanged || ( newValue !== value[k] );
        value[k] = newValue;
      }
    }
  }
  return isChanged ? value : instance;
}

// built-in commands

function $apply(f, value) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(f), 'Invalid argument f supplied to immutability helper { $apply: f } (expected a function)');
  }
  return f(value);
}

function $push(elements, arr) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(elements), 'Invalid argument elements supplied to immutability helper { $push: elements } (expected an array)');
    assert(isArray(arr), 'Invalid value supplied to immutability helper $push (expected an array)');
  }
  return arr.concat(elements);
}

function $remove(keys, obj) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(keys), 'Invalid argument keys supplied to immutability helper { $remove: keys } (expected an array)');
    assert(isObject(obj), 'Invalid value supplied to immutability helper $remove (expected an object)');
  }
  for (var i = 0, len = keys.length; i < len; i++ ) {
    delete obj[keys[i]];
  }
  return obj;
}

function $set(value) {
  return value;
}

function $splice(splices, arr) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(splices) && splices.every(isArray), 'Invalid argument splices supplied to immutability helper { $splice: splices } (expected an array of arrays)');
    assert(isArray(arr), 'Invalid value supplied to immutability helper $splice (expected an array)');
  }
  return splices.reduce(function (acc, splice) {
    acc.splice.apply(acc, splice);
    return acc;
  }, arr);
}

function $swap(config, arr) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isObject(config), 'Invalid argument config supplied to immutability helper { $swap: config } (expected an object)');
    assert(isNumber(config.from), 'Invalid argument config.from supplied to immutability helper { $swap: config } (expected a number)');
    assert(isNumber(config.to), 'Invalid argument config.to supplied to immutability helper { $swap: config } (expected a number)');
    assert(isArray(arr), 'Invalid value supplied to immutability helper $swap (expected an array)');
  }
  var element = arr[config.to];
  arr[config.to] = arr[config.from];
  arr[config.from] = element;
  return arr;
}

function $unshift(elements, arr) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(elements), 'Invalid argument elements supplied to immutability helper {$unshift: elements} (expected an array)');
    assert(isArray(arr), 'Invalid value supplied to immutability helper $unshift (expected an array)');
  }
  return elements.concat(arr);
}

function $merge(obj, value) {
  return mixin(mixin({}, value), obj, true);
}

update.commands = {
  $apply: $apply,
  $push: $push,
  $remove: $remove,
  $set: $set,
  $splice: $splice,
  $swap: $swap,
  $unshift: $unshift,
  $merge: $merge
};

module.exports = update;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isFunction = __webpack_require__(1);
var isType = __webpack_require__(4);
var Any = __webpack_require__(17);

module.exports = function match(x) {
  var type, guard, f, count;
  for (var i = 1, len = arguments.length; i < len; ) {
    type = arguments[i];
    guard = arguments[i + 1];
    f = arguments[i + 2];

    if (isFunction(f) && !isType(f)) {
      i = i + 3;
    }
    else {
      f = guard;
      guard = Any.is;
      i = i + 2;
    }

    if (process.env.NODE_ENV !== 'production') {
      count = (count || 0) + 1;
      assert(isType(type), function () { return 'Invalid type in clause #' + count; });
      assert(isFunction(guard), function () { return 'Invalid guard in clause #' + count; });
      assert(isFunction(f), function () { return 'Invalid block in clause #' + count; });
    }

    if (type.is(x) && guard(x)) {
      return f(x);
    }
  }
  assert.fail('Match error');
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

var reg = /[\'\"]/

module.exports = function unquote(str) {
  if (!str) {
    return ''
  }
  if (reg.test(str.charAt(0))) {
    str = str.substr(1)
  }
  if (reg.test(str.charAt(str.length - 1))) {
    str = str.substr(0, str.length - 1)
  }
  return str
}


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = [
	"inherit",
	"initial",
	"unset"
];

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = [
	"caption",
	"icon",
	"menu",
	"message-box",
	"small-caption",
	"status-bar"
];

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = [
	"normal",
	"bold",
	"bolder",
	"lighter",
	"100",
	"200",
	"300",
	"400",
	"500",
	"600",
	"700",
	"800",
	"900"
];

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = [
	"normal",
	"italic",
	"oblique"
];

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = [
	"normal",
	"condensed",
	"semi-condensed",
	"extra-condensed",
	"ultra-condensed",
	"expanded",
	"semi-expanded",
	"extra-expanded",
	"ultra-expanded"
];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var t = __webpack_require__(21);

var Options = t.struct({
	last: t.maybe(t.Boolean)
});

var helpers = {

	split: function(value, separators, options) {
		return split(value, separators, options || {});
	},

	splitBySpaces: t.func(t.String, t.Array).of(
		function(value) {
			var spaces = [' ', '\n', '\t'];
			return helpers.split(value, spaces);
		}
	),

	splitByCommas: t.func(t.String, t.Array).of(
		function(value) {
			var comma = ',';
			return helpers.split(value, [comma], { last: true });
		}
	)

};

var split = t.func([t.String, t.Array, Options], t.Array).of(
	function(value, separators, options) {
		var array   = [];
		var current = '';
		var split   = false;

		var func    = 0;
		var quote   = false;
		var escape  = false;

		for (var i = 0; i < value.length; i++) {
			var char = value[i];

			if (quote) {
				if (escape) {
					escape = false;
				} else if (char === '\\') {
					escape = true;
				} else if (char === quote) {
					quote = false;
				}
			} else if (char === '"' || char === '\'') {
				quote = char;
			} else if (char === '(') {
				func += 1;
			} else if (char === ')') {
				if (func > 0) {
					func -= 1;
				}
			} else if (func === 0) {
				if (separators.indexOf(char) !== -1) {
					split = true;
				}
			}

			if (split) {
				if (current !== '') {
					array.push(current.trim());
				}
				current = '';
				split = false;
			} else {
				current += char;
			}
		}

		if (options.last || current !== '') {
			array.push(current.trim());
		}
		return array;
	}
);

module.exports = helpers;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var cssFontSizeKeywords = __webpack_require__(72);

module.exports = {

	isSize: function(value) {
		return /^[\d\.]/.test(value)
			|| value.indexOf('/') !== -1
			|| cssFontSizeKeywords.indexOf(value) !== -1
		;
	}

};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = [
	"xx-small",
	"x-small",
	"small",
	"medium",
	"large",
	"x-large",
	"xx-large",
	"larger",
	"smaller"
];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env browser, node */



module.exports = __webpack_require__(74);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env browser, node */



// Imports
var conversions = __webpack_require__(75);
var isNumeric = __webpack_require__(80);

var units = {};


// Expose conversion functions
//------------------------------------------------------------------------------

units.conversions = conversions;


// Properties with non default unit/value
//------------------------------------------------------------------------------

var properties = units.properties = {};

properties.lineHeight =
properties.opacity =
properties.scale =
properties.scale3d =
properties.scaleX =
properties.scaleY =
properties.scaleZ = {
  'defaultUnit': '',
  'defaultValue': 1
};

properties.rotate =
properties.rotate3d =
properties.rotateX =
properties.rotateY =
properties.rotateZ =
properties.skew =
properties.skewX =
properties.skewY = {
  'defaultUnit': 'deg'
};

properties.resolution = {
  'defaultUnit': 'dpi',
  'defaultValue': 96
};


// Public interface
//------------------------------------------------------------------------------

units.convert = function(to, value, element, property) {
  var parts = units.parse(value, property);

  if (to === '_default') {
    to = units.getDefaultUnit(property);
  }

  return to === parts.unit
    ? parts.value
    : units.processConversion(parts.unit, to, parts.value, element, property);
};

units.parse = function(value, property) {
  var parts = {};
  var matches;

  if (isNumeric(value)) {
    parts.value = value;
    parts.unit = property
      ? units.getDefaultUnit(property)
      : '';
  } else {
    matches = value.toString().trim().match(/^(-?[\d+\.\-]+)([a-z]+|%)$/i);

    if (matches !== null) {
      parts.value = matches[1];
      parts.unit = matches[2];
    } else {
      parts.unit = value;
      parts.value = property
        ? units.getDefaultValue(property)
        : 0;
    }
  }

  parts.value = parseFloat(parts.value);

  return parts;
};

units.getDefaultValue = function(property) {
  return typeof properties[property] !== 'undefined' && typeof properties[property].defaultValue !== 'undefined'
    ? properties[property].defaultValue
    : 0;
};

units.getDefaultUnit = function(property) {
  return typeof properties[property] !== 'undefined' && typeof properties[property].defaultUnit !== 'undefined'
    ? properties[property].defaultUnit
    : 'px';
};


// Protected methods
//------------------------------------------------------------------------------

units.processConversion = function(fromUnits, toUnits, value, element, property) {
  var type = units.getConversionType(fromUnits);
  var method;

  if (typeof type[fromUnits][toUnits] === 'function') {
    method = type[fromUnits][toUnits];
  } else {
    method = type[type._default][toUnits];
    value = type[fromUnits][type._default](value, element, property); // Use default unit conversion as an interstitial step
  }

  return method(value, element, property);
};

units.getConversionType = function(fromUnits) {
  var property;
  var type = null;

  for (property in conversions) {
    /* istanbul ignore else */
    if (conversions.hasOwnProperty(property) && typeof conversions[property][fromUnits] !== 'undefined') {
      type = conversions[property];
      break;
    }
  }

  return type;
};

// Exports
module.exports = units;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env browser, node */



// Exports
module.exports = {
  'angle': __webpack_require__(76),
  'length': __webpack_require__(77),
  'resolution': __webpack_require__(79)
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env browser, node */



var angle = {'_default': 'deg'};

// Supported units:
// deg, grad, rad, turn

angle.deg = {
  'grad': function(value) {
    return value / 0.9;
  },

  'rad': function(value) {
    return value * (Math.PI / 180);
  },

  'turn': function(value) {
    return value / 360;
  }
};

angle.grad = {
  'deg': function(value) {
    return value * 0.9;
  }
};

angle.rad = {
  'deg': function(value) {
    return value / (Math.PI / 180);
  }
};

angle.turn = {
  'deg': function(value) {
    return value * 360;
  }
};

// Exports
module.exports = angle;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env browser, node */



// Imports
var utilities = __webpack_require__(32);
var viewport = __webpack_require__(78);

var length = {'_default': 'px'};

// Supported units:
// %, ch, cm, em, ex, in, mm, pc, pt, px, rem, vh, vmax, vmin, vw

length[''] = {
  'px': function(value, element) {
    return parseFloat(getComputedStyle(element, '').fontSize) * value;
  }
};

length['%'] = {
  'px': function(value, element, property) {
    return (value * utilities.getRelativeElementDimension(element, property)) / 100;
  }
};

length.ch = {
  'px': function(value, element) {
    return value * utilities.ifZeroThenOne(utilities.getCreatedElementWidth(element, null, '0'));
  }
};

length.cm = {
  'px': function(value) {
    return value / 2.54 * utilities.ifZeroThenOne(utilities.DPI);
  }
};

length.em = {
  'px': function(value, element) {
    return value * utilities.getElementFontSize(element);
  }
};

length.ex = {
  'px': function(value, element) {
    return value * utilities.getCreatedElementHeight(element, null, 'x');
  }
};

length['in'] = {
  'px': function(value) {
    return value * utilities.DPI;
  }
};

length.mm = {
  'px': function(value) {
    return value / 2.54 * utilities.ifZeroThenOne(utilities.DPI) / 10;
  }
};

length.pc = {
  'px': function(value) {
    return value * ((utilities.DPI / 72) * 12);
  }
};

length.pt = {
  'px': function(value) {
    return value * utilities.DPI / 72;
  }
};

length.px = {
  '': function(value, element) {
    return value / parseFloat(getComputedStyle(element, '').fontSize);
  },

  '%': function(value, element, property) {
    return (value / utilities.ifZeroThenOne(utilities.getRelativeElementDimension(element, property))) * 100;
  },

  'ch': function(value, element) {
    return value / utilities.ifZeroThenOne(utilities.getCreatedElementWidth(element, null, '0'));
  },

  'cm': function(value) {
    return value / utilities.ifZeroThenOne(utilities.DPI) * 2.54;
  },

  'em': function(value, element) {
    return value / utilities.ifZeroThenOne(utilities.getElementFontSize(element));
  },

  'ex': function(value, element) {
    return value / utilities.ifZeroThenOne(utilities.getCreatedElementHeight(element, null, 'x'));
  },

  'in': function(value) {
    return value / utilities.ifZeroThenOne(utilities.DPI);
  },

  'mm': function(value) {
    return value * 2.54 / utilities.ifZeroThenOne(utilities.DPI) * 10;
  },

  'pc': function(value) {
    return value / ((utilities.DPI / 72) * 12);
  },

  'pt': function(value) {
    return value * 72 / utilities.DPI;
  },

  'rem': function(value) {
    return value / utilities.ifZeroThenOne(utilities.getElementFontSize(document.documentElement));
  },

  'vh': function(value) {
    return value / utilities.ifZeroThenOne((viewport.height() / 100));
  },

  'vmax': function(value) {
    return value / utilities.ifZeroThenOne((viewport.max() / 100));
  },

  'vmin': function(value) {
    return value / utilities.ifZeroThenOne((viewport.min() / 100));
  },

  'vw': function(value) {
    return value / utilities.ifZeroThenOne((viewport.width() / 100));
  }
};

length.rem = {
  'px': function(value) {
    return value * utilities.getElementFontSize(document.documentElement);
  }
};

length.vh = {
  'px': function(value) {
    return value * (viewport.height() / 100);
  }
};

length.vmax = {
  'px': function(value) {
    return value * (viewport.max() / 100);
  }
};

length.vmin = {
  'px': function(value) {
    return value * (viewport.min() / 100);
  }
};

length.vw = {
  'px': function(value) {
    return value * (viewport.width() / 100);
  }
};

// Exports
module.exports = length;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env browser, node */



var viewport = {};
var width = -1;
var height = -1;


// Public interface
//------------------------------------------------------------------------------

/**
 * Get browser viewport width.
 *
 * @returns {number} Internal reference to browser viewport width.
 */
viewport.width = function() {
  return width;
};

/**
 * Get browser viewport height.
 *
 * @returns {number} Internal reference to browser viewport height.
 */
viewport.height = function() {
  return height;
};

/**
 * Get maximum browser viewport dimension (width or height).
 *
 * @returns {number} Internal reference to maximum browser viewport dimension.
 */
viewport.max = function() {
  return Math.max(width, height);
};

/**
 * Get minimum browser viewport dimension (width or height).
 *
 * @returns {number} Internal reference to minimum browser viewport dimension.
 */
viewport.min = function() {
  return Math.min(width, height);
};


/**
 * Set internal dimension references to current browser viewport width and height.
 * Called by viewport#onWindowResize on resize and orientationchange.
 */
viewport.setDimensions = function() {
  /* istanbul ignore else */
  if (typeof document !== 'undefined') {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
  }
};


// Protected methods
//------------------------------------------------------------------------------

/**
 * Handler for window resize and orientationchange events. Calls viewport#setDimensions.
 *
 * @private
 */
viewport.onWindowResize = function() {
  viewport.setDimensions();
};

/* istanbul ignore else */
if (typeof window !== 'undefined') {
  window.addEventListener('resize', viewport.onWindowResize, false);
  window.addEventListener('orientationchange', viewport.onWindowResize, false);

  viewport.setDimensions();
}

// Exports
module.exports = viewport;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env browser, node */



// Imports
var utilities = __webpack_require__(32);

var resolution = {'_default': 'dpi'};

// Supported units:
// dpi, dpcm, dppx

resolution.dpi = {
  'dpcm': function(value) {
    return value / 2.54;
  },

  'dppx': function(value) {
    return value / utilities.DPI;
  }
};

resolution.dpcm = {
  'dpi': function(value) {
    return value * 2.54;
  }
};

resolution.dppx = {
  'dpi': function(value) {
    return value * utilities.DPI;
  }
};

// Exports
module.exports = resolution;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var isNumeric = function (obj) {
    obj = typeof(obj) === "string" ? obj.replace(/,/g, "") : obj;
    return !isNaN(parseFloat(obj)) && isFinite(obj) && Object.prototype.toString.call(obj).toLowerCase() !== "[object array]";
};

if (true) {
    if (typeof (module) !== "undefined" && module.exports) {
        exports = module.exports = isNumeric;
    }
    exports.isNumeric = isNumeric;
}


/***/ }),
/* 81 */
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

var Stream = __webpack_require__(19).Stream;

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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Canvas - PDFStream
 */

/**
 * Module dependencies.
 */

var Stream = __webpack_require__(19).Stream;

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
/* 83 */
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

var Stream = __webpack_require__(19).Stream;

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
/* 84 */
/***/ (function(module, exports) {

module.exports = {
	"_args": [
		[
			"canvas@1.6.5",
			"/home/yuan/Desktop/NRenderer"
		]
	],
	"_from": "canvas@1.6.5",
	"_id": "canvas@1.6.5",
	"_inBundle": false,
	"_integrity": "sha1-VX+ZiPXSyV/cJHxhpe5D3lL2cXw=",
	"_location": "/canvas",
	"_phantomChildren": {},
	"_requested": {
		"type": "version",
		"registry": true,
		"raw": "canvas@1.6.5",
		"name": "canvas",
		"escapedName": "canvas",
		"rawSpec": "1.6.5",
		"saveSpec": null,
		"fetchSpec": "1.6.5"
	},
	"_requiredBy": [
		"#DEV:/"
	],
	"_resolved": "https://registry.npmjs.org/canvas/-/canvas-1.6.5.tgz",
	"_spec": "1.6.5",
	"_where": "/home/yuan/Desktop/NRenderer",
	"author": {
		"name": "TJ Holowaychuk",
		"email": "tj@learnboost.com"
	},
	"bugs": {
		"url": "https://github.com/Automattic/node-canvas/issues"
	},
	"contributors": [
		{
			"name": "Nathan Rajlich",
			"email": "nathan@tootallnate.net"
		},
		{
			"name": "Rod Vagg",
			"email": "r@va.gg"
		},
		{
			"name": "Juriy Zaytsev",
			"email": "kangax@gmail.com"
		}
	],
	"dependencies": {
		"nan": "^2.4.0",
		"parse-css-font": "^2.0.2",
		"units-css": "^0.4.0"
	},
	"description": "Canvas graphics API backed by Cairo",
	"devDependencies": {
		"body-parser": "^1.13.3",
		"express": "^4.13.2",
		"mocha": "*",
		"pug": "^2.0.0-beta3",
		"standard": "^7.1.1"
	},
	"engines": {
		"node": ">=0.8.0"
	},
	"gypfile": true,
	"homepage": "https://github.com/Automattic/node-canvas",
	"keywords": [
		"canvas",
		"graphic",
		"graphics",
		"pixman",
		"cairo",
		"image",
		"images",
		"pdf"
	],
	"license": "MIT",
	"main": "./lib/canvas.js",
	"name": "canvas",
	"repository": {
		"type": "git",
		"url": "git://github.com/Automattic/node-canvas.git"
	},
	"scripts": {
		"benchmark": "node benchmarks/run.js",
		"install": "node-gyp rebuild",
		"prebenchmark": "node-gyp build",
		"pretest": "node-gyp build",
		"pretest-server": "node-gyp build",
		"test": "standard examples/*.js && mocha test/*.test.js",
		"test-server": "node test/server.js"
	},
	"version": "1.6.5"
};

/***/ }),
/* 85 */
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

var Canvas = __webpack_require__(16)
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
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);


/**
 * Nfs is nrenderer file system. Some operations about IO.
 */
class Nfs {
    constructor() {}

    /**
     * Save canvas as a png file.
     * @param {Canvas} canvas Create by you. Imported from 'canvas/lib/canvas'.
     * @param {string} path Save path of png file.
     */
    static saveAsPNG(canvas, path) {
        path = path.endsWith('.png') ? path : `${path}.png`;

        try {
            canvas.pngStream().pipe(__WEBPACK_IMPORTED_MODULE_0_fs___default.a.createWriteStream(path));
        } catch (error) {
            console.error(error);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Nfs;


/***/ })
/******/ ]);