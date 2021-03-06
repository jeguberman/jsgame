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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(20);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Images = {

  marioStandRight: {
    imageX: 4,
    imageY: 55,
    width: 15,
    height: 28
  },

  marioDead: {
    imageX: 401,
    imageY: 0,
    width: 16,
    height: 26
  },

  marioStandLeft: {
    imageX: 457,
    imageY: 225,
    width: 15,
    height: 28
  },

  marioWalkLeftA: {
    imageX: 438,
    imageY: 225,
    width: 17,
    height: 28
  },

  marioWalkLeftB: {
    imageX: 421,
    imageY: 226,
    width: 16,
    height: 27
  },

  marioFaceUp: {
    imageX: 412,
    imageY: 59,
    width: 15,
    height: 27
  },

  marioJumpRight: {
    imageX: 145,
    imageY: 54,
    width: 16,
    height: 31
  },

  marioJumpLeft: {
    imageX: 314,
    imageY: 224,
    width: 16,
    height: 31
  },

  unitSquare: {
    imageX: 0,
    imageY: 0,
    width: 16,
    height: 16
  },

  coin: {
    imageX: 2,
    imageY: 0,
    width: 12,
    height: 16
  },

  lakituPuff: {
    imageX: 258,
    imageY: 40,
    width: 28,
    height: 34
  },

  lakituA: {
    imageX: 156,
    imageY: 0,
    width: 26,
    height: 36
  },

  lakituInit: {
    imageX: 156,
    imageY: 0,
    width: 26,
    height: 36
  },

  lakituAthrow: {
    imageX: 153,
    imageY: 44,
    width: 28,
    height: 34
  },

  lakituB: {
    imageX: 184,
    imageY: 0,
    width: 28,
    height: 38
  },

  spinyWalkLeft: {},

  spinyWalkRight: {},

  spinyRollA: {
    imageX: 67,
    imageY: 3,
    width: 16,
    height: 16
  },

  spinyRollB: {
    imageX: 67,
    imageY: 3,
    width: 16,
    height: 16
  },

  destroy: {
    imageX: 20,
    imageY: 0,
    width: 10,
    height: 10
  },

  null: {
    imageX: 20,
    imageY: 0,
    width: 10,
    height: 10
  },

  ground: {
    name: "Ground",
    imageX: 0,
    imageY: 0,
    width: 288,
    height: 32
  },

  startScreen: {
    name: "startScreen",
    imageX: 0,
    imageY: 0,
    width: 480,
    height: 435

  }

};
module.exports = Images;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _images = __webpack_require__(2);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovingObject = function () {
  function MovingObject(options) {
    _classCallCheck(this, MovingObject);

    options = (0, _merge2.default)({}, {
      pos: [0, 0],
      vel: [0, 0],
      acc: [0, 0],
      term: 10,
      maxGround: 5,

      color: "#ffffff",

      collisionType: "box",
      sprite: _images2.default.unitSquare,
      src: './assets/singleblock.png',
      static: false,
      name: undefined

    }, options);

    this.pos = options.pos;
    this.vel = options.vel;
    this.acc = options.acc;
    this.term = options.term;
    this.maxGround = options.maxGround;

    this.collisionType = options.collisionType;
    this.image = new Image();
    this.image.src = options.src;
    this.sprite = options.sprite;

    this.game = options.game;
    this.color = options.color;

    this.static = options.static;
    this.name = options.name;
  }

  _createClass(MovingObject, [{
    key: 'move',
    value: function move(velocityScale) {
      this.vel = [this.vel[0] + velocityScale * this.acc[0], this.vel[1] + velocityScale * this.acc[1]];
      this.terminalVelocity();
      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    }
  }, {
    key: 'terminalVelocity',
    value: function terminalVelocity() {
      if (this.vel[1] > this.term) {
        this.vel[1] = this.term;
      }
      if (this.vel[0] > this.term) {
        this.vel[0] = this.term;
      }
      if (this.vel[1] < this.term * -1) {
        this.vel[1] = this.term * -1;
      }
      if (this.vel[0] < this.term * -1) {
        this.vel[0] = this.term * -1;
      }
    }
  }, {
    key: 'checkCollisions',
    value: function checkCollisions(obj) {

      this.gravityControl(obj);
      if (obj.collisionType === "box") {
        this.boxCollision(obj);
      }
    }
  }, {
    key: 'boxCollision',
    value: function boxCollision(obj) {
      if (this.pos[0] + this.sprite.width > obj.pos[0] && this.pos[0] < obj.pos[0] + obj.sprite.width && this.pos[1] < obj.pos[1] + obj.sprite.height && this.pos[1] + this.sprite.height > obj.pos[1]) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'fullStop',
    value: function fullStop() {
      this.acc = [0, 0];
      this.vel = [0, 0];
      this.static = true;
    }
  }, {
    key: 'footCorrect',
    value: function footCorrect(obj) {
      if (this.pos[0] > obj.pos[0] || this.pos[0] + this.sprite.width < obj.pos[0] + obj.sprite.width) {
        this.pos[1] = obj.pos[1] - this.sprite.height;
      }
    }
  }, {
    key: 'footCollision',
    value: function footCollision(obj) {
      if (this !== obj && this.pos[1] + this.sprite.height > obj.pos[1] && this.pos[1] + this.sprite.height < obj.pos[1] + obj.sprite.height && this.pos[0] < obj.pos[0] + obj.sprite.width && this.pos[0] + this.sprite.width > obj.pos[0]) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'gravityControl',
    value: function gravityControl(obj) {
      if (this.footCollision(obj)) {
        this.verticalStop(obj);
      } else {
        this.applyGravity();
      }
    }
  }, {
    key: 'applyGravity',
    value: function applyGravity() {
      var _this = this;

      this.staticBlock(function () {
        _this.acc[1] = _this.game.gravity;
      });
    }
  }, {
    key: 'verticalStop',
    value: function verticalStop(obj) {
      var _this2 = this;

      if (obj.name === "ground" && !this.game.gameOver) {
        this.vel[1] = 0;
        this.acc[1] = 0;
        this.staticBlock(function () {
          _this2.footCorrect(obj);
        });
      }
    }
  }, {
    key: 'staticBlock',
    value: function staticBlock(callback) {
      if (!this.static) {
        callback();
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      // debugger
      ctx.save();
      // const pattern = ctx.createPattern(this.image, 'repeat');
      // ctx.fillStyle = pattern;
      ctx.fillStyle = "blue";
      // ctx.fillRect (this.pos[0], this.pos[1], this.sprite.width, this.sprite.height);
      ctx.drawImage(this.image, this.sprite.imageX, this.sprite.imageY, this.sprite.width, this.sprite.height, this.pos[0], this.pos[1], this.sprite.width, this.sprite.height);
      // ctx.restore();
    }
  }]);

  return MovingObject;
}();

module.exports = MovingObject;

// rightCollision(obj){
//   if(
//     this !== obj &&
//     this.pos[0] + this.sprite.width >= obj.pos[0] && //right side collision
//     this.pos[0] < obj.pos[0] +obj.sprite.width && //not cleared left side
//     ((this.pos[1] > obj.pos[1] && this.pos[1] < obj.pos[1] + obj.sprite.height) || //head check
//     (this.pos[1] + this.sprite.height > obj.pos[1] && this.pos[1] + this.sprite.height < obj.pos[1] + obj.sprite.height)) && //foot check
//     (this.vel[0]>0)
//   ){
//     this.staticBlock(()=>{
//       this.vel[0] = -0.7;
//       this.acc[0] = 0;
//     });
//   }
// }
//
// leftCollision(obj){
//   if(
//     this !== obj &&
//     this.pos[0] <= obj.pos[0] + obj.with && //left side collision
//     this.pos[0]+this.sprite.width > obj.pos[0] && //not cleared right side
//     ((this.pos[1] > obj.pos[1] && this.pos[1] < obj.pos[1] + obj.sprite.height) || //head check
//     (this.pos[1] + this.sprite.height > obj.pos[1] && this.pos[1] + this.sprite.height < obj.pos[1] + obj.sprite.height)) && //foot check
//     (this.vel[0]<0)
//   ){
//     this.staticBlock(()=>{
//       this.vel[0] = 0.7;
//       this.acc[0] = 0;
//     });
//   }
// }

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(36),
    createAssigner = __webpack_require__(94);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(38),
    listCacheDelete = __webpack_require__(39),
    listCacheGet = __webpack_require__(40),
    listCacheHas = __webpack_require__(41),
    listCacheSet = __webpack_require__(42);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(8);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(19),
    getRawTag = __webpack_require__(50),
    objectToString = __webpack_require__(51);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(65);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(48),
    getValue = __webpack_require__(55);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObject = __webpack_require__(0);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(22);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(13),
    isLength = __webpack_require__(27);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(3);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _images = __webpack_require__(2);

var _images2 = _interopRequireDefault(_images);

var _player = __webpack_require__(103);

var _player2 = _interopRequireDefault(_player);

var _coin = __webpack_require__(33);

var _coin2 = _interopRequireDefault(_coin);

var _lakitu = __webpack_require__(104);

var _lakitu2 = _interopRequireDefault(_lakitu);

var _spiny = __webpack_require__(34);

var _spiny2 = _interopRequireDefault(_spiny);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.allObjects = [new _moving_object2.default({
      game: this,
      static: true,
      name: "startScreen",
      src: "assets/startscreen.jpg",
      sprite: _images2.default.startScreen
    })];

    this.gravity = 0.75;

    this.controls();

    this.bg = new Image();
    this.bg.src = 'assets/SNES - Super Mario World - Backgrounds.png';

    this.lakitus = 0;

    this.coincount = 0;

    this.coincountDisplay = $("#coincount");
    this.coincountDisplay.text(this.coincount);
    this.gameOver = false;
    this.restart = false;

    this.endGame = this.endGame.bind(this);
    this.startMenu = true;
  }

  _createClass(Game, [{
    key: 'controls',
    value: function controls() {
      var _this = this;

      document.addEventListener('keydown', function (e) {
        _this.handleKeydown(e.key);
      });

      document.addEventListener('keyup', function (e) {
        _this.handleKeyup(e.key);
      });
    }
  }, {
    key: 'handleKeyup',
    value: function handleKeyup(key) {
      // console.log("up " + key)
      if (!this.gameOver) {
        switch (key) {
          case 'ArrowLeft':
            this.player.LbrakeOn();
            break;
          case 'ArrowRight':
            this.player.RbrakeOn();
            break;
          case 'a':
            this.player.LbrakeOn();
            break;
          case 'd':
            this.player.RbrakeOn();
            break;
          case ' ':
            this.player.outJump();
            break;
        }
      }
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(key) {
      // console.log("down " + key)
      switch (key) {
        case 'ArrowLeft':
          this.player.Lwalk();
          break;
        case 'ArrowRight':
          this.player.Rwalk(1);
          break;
        case 'a':
          this.player.Lwalk();
          break;
        case 'd':
          this.player.Rwalk(1);
          break;
        case ' ':
          this.player.jump();
          break;
        case 'Enter':
          if (this.startMenu === true) {
            this.startGame();
          }
          break;
      }
    }
  }, {
    key: 'startGame',
    value: function startGame() {
      this.startMenu = false;
      this.allObjects = [new _player2.default({ game: this }), new _moving_object2.default({
        pos: [96, 320],
        vel: [0, 0],
        sprite: _images2.default.ground,
        color: '#a11aaa',
        game: this,
        static: true,
        name: "ground",
        src: "assets/18X2blocks.png"
      }), new _lakitu2.default({
        pos: [100, 105],
        game: this,
        sprite: _images2.default.lakituInit
      })];
      this.player = this.allObjects[0];
      this.lakitus = 0;

      this.coincount = 0;
      this.gameOver = false;
      this.restart = false;
      // this.controls();
    }
  }, {
    key: 'endGame',
    value: function endGame() {

      if (this.startMenu === false) {
        this.startMenu = true;
        this.allObjects = [new _moving_object2.default({
          game: this,
          static: true,
          name: "startScreen",
          src: "assets/startscreen.jpg",
          sprite: _images2.default.startScreen
        })];
      }
    }
  }, {
    key: 'step',
    value: function step(velocityScale) {
      this.destroy();
      this.moveObjects(velocityScale);
      if (!this.gameOver) {
        this.checkCollisions();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.allObjects = this.allObjects.filter(function (object) {
        return object.sprite !== _images2.default.destroy && object.pos[1] < Game.HEIGHT;
      });
    }
  }, {
    key: 'triggerGameOver',
    value: function triggerGameOver() {
      if (!this.gameOver) {
        this.gameOver = true;
        this.gravity = 0.5;
        // this.allObjects.push(this.allObjects.shift());
        this.allObjects.forEach(function (object) {
          return object.fullStop();
        });
        this.player.gameOver();
      }
    }
  }, {
    key: 'moveObjects',
    value: function moveObjects(velocityScale) {
      // console.log(Math.max(this.allObjects.map((el)=>el.vel[0])));

      this.allObjects.forEach(function (object) {
        return object.move(velocityScale);
      });
    }
  }, {
    key: 'incrementCoincount',
    value: function incrementCoincount() {
      this.coincount += 1;
      this.coincountDisplay.text(this.coincount);
    }
  }, {
    key: 'checkCollisions',
    value: function checkCollisions() {
      var _this2 = this;

      this.allObjects.forEach(function (objA) {
        _this2.allObjects.forEach(function (objB) {
          objA.checkCollisions(objB);
        });
      });
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      // console.log(this.allObjects.length);
      ctx.clearRect(0, 0, Game.WIDTH, Game.HEIGHT);
      ctx.drawImage(this.bg, -515, -435);
      ctx.fillStyle = Game.BG_COLOR;
      // ctx.fillRect(0, 115, Game.WIDTH, 1);
      // ctx.fillRect(170, 0, 80, Game.HEIGHT);
      this.allObjects.forEach(function (object) {
        object.draw(ctx);
      });
    }
  }]);

  return Game;
}();

Game.BG_COLOR = "#000000";
Game.WIDTH = 480;
Game.HEIGHT = 435;
Game.FPS = 60;

var NORMAL_TIME_FRAME_DELTA = 1000 / Game.FPS;

module.exports = Game;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(14),
    eq = __webpack_require__(8);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(79);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(80),
    isObjectLike = __webpack_require__(4);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1),
    stubFalse = __webpack_require__(82);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(84),
    baseUnary = __webpack_require__(85),
    nodeUtil = __webpack_require__(86);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(90),
    baseKeysIn = __webpack_require__(92),
    isArrayLike = __webpack_require__(16);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(3);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _images = __webpack_require__(2);

var _images2 = _interopRequireDefault(_images);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coin = function (_MovingObject) {
  _inherits(Coin, _MovingObject);

  function Coin(options) {
    _classCallCheck(this, Coin);

    var _this = _possibleConstructorReturn(this, (Coin.__proto__ || Object.getPrototypeOf(Coin)).call(this, options));

    _this.collected = false;
    _this.minVel = 2.2;
    _this.name = "coin";
    _this.image.src = "assets/coin.png";
    _this.sprite = _images2.default.coin;
    return _this;
  }

  _createClass(Coin, [{
    key: 'checkCollisions',
    value: function checkCollisions(obj) {

      this.gravityControl(obj);
      this.playerCollision(obj);
    }
  }, {
    key: 'playerCollision',
    value: function playerCollision(obj) {
      if (this.boxCollision(obj)) {
        if (obj.name === "player") {
          this.sprite = _images2.default.destroy;
          this.game.incrementCoincount();
        }
      }
    }
  }, {
    key: 'verticalStop',
    value: function verticalStop(obj) {
      var _this2 = this;

      if (obj.name === "ground") {
        this.vel[1] = this.vel[1] * -0.7;
        this.acc[1] = 0;
        this.staticBlock(function () {
          _this2.footCorrect(obj);
        });
      }
    }
  }, {
    key: 'ensureHorizontalMovement',
    value: function ensureHorizontalMovement() {
      if (!this.game.gameOver) {
        if (this.vel[0] < this.minVel && this.vel[0] >= 0) {
          this.vel[0] = this.minVel;
        } else if (this.vel[0] > -this.minVel && this.vel[0] < 0) {
          this.vel[0] = this.minVel * -1;
        }
      }
    }
  }, {
    key: 'move',
    value: function move(velocityScale) {
      if (!this.gameOver) {
        this.ensureHorizontalMovement();
        this.vel = [this.vel[0] + velocityScale * this.acc[0], this.vel[1] + velocityScale * this.acc[1]];
        this.terminalVelocity();
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      }
    }
  }]);

  return Coin;
}(_moving_object2.default);

exports.default = Coin;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(3);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _images = __webpack_require__(2);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spiny = function (_MovingObject) {
  _inherits(Spiny, _MovingObject);

  function Spiny(options) {
    _classCallCheck(this, Spiny);

    var _this = _possibleConstructorReturn(this, (Spiny.__proto__ || Object.getPrototypeOf(Spiny)).call(this, options));

    _this.image.src = "assets/lakitu.png";
    _this.sprite = _images2.default.spinyRollA;
    _this.minVel = 1;
    _this.name = "spiny";
    _this.inroll = true;

    _this.collisionType = "radial";
    _this.updateCenter();
    return _this;
  }

  _createClass(Spiny, [{
    key: 'checkCollisions',
    value: function checkCollisions(obj) {
      this.gravityControl(obj);
      if (obj.name === "player") {
        if (this.boxCollision(obj)) {
          this.game.triggerGameOver();
        }
      }
    }
  }, {
    key: 'boxCollision',
    value: function boxCollision(obj) {
      var DeltaX = this.getDelta(0, obj);
      var DeltaY = this.getDelta(1, obj);
      // console.log(DeltaX * DeltaX + DeltaY * DeltaY);
      return DeltaX * DeltaX + DeltaY * DeltaY < 64;
    }
  }, {
    key: 'getDelta',
    value: function getDelta(axis, obj) {
      var dim = axis === 0 ? "width" : "height";
      var least = Math.min(this.center[axis], obj.pos[axis] + obj.sprite[dim]);
      var comperand = Math.max(obj.pos[axis], least);
      return this.center[axis] - comperand;
    }
  }, {
    key: 'ensureHorizontalMovement',
    value: function ensureHorizontalMovement() {
      if (!this.game.gameOver) {
        if (this.vel[0] < this.minVel && this.vel[0] >= 0) {
          this.vel[0] = this.minVel;
        } else if (this.vel[0] > -this.minVel && this.vel[0] < 0) {
          this.vel[0] = this.minVel * -1;
        }
      }
    }
  }, {
    key: 'updateCenter',
    value: function updateCenter() {
      this.center = this.pos.map(function (el) {
        return el + 8;
      });
    }
  }, {
    key: 'move',
    value: function move(velocityScale) {
      if (!this.gameOver) {
        this.updateCenter();
        this.ensureHorizontalMovement();
        this.vel = [this.vel[0] + velocityScale * this.acc[0], this.vel[1] + velocityScale * this.acc[1]];
        this.terminalVelocity();
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      }
    }
  }]);

  return Spiny;
}(_moving_object2.default);

module.exports = Spiny;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(17);

var _game2 = _interopRequireDefault(_game);

var _renderer = __webpack_require__(105);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Controllr from './lib/controller';
var Util = __webpack_require__(107);

var util = new Util();

var trueGame = function trueGame() {
  var view = document.getElementById('view');
  view.width = _game2.default.WIDTH;
  view.height = _game2.default.HEIGHT;

  var ctx = view.getContext('2d');

  var renderer = new _renderer2.default(ctx);

  renderer.start(ctx);
};

var falseGame = function falseGame() {
  // const stage = document.getElementById('view');
  // stage.width = Game.WIDTH;
  // stage.height = Game.HEIGHT;
  //
  // const ctx = stage.getContext('2d');

  $("#coincount").append("free");
};

var switcher = function switcher(n) {
  if (n) {
    return trueGame;
  } else {
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(1));

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(37),
    assignMergeValue = __webpack_require__(21),
    baseFor = __webpack_require__(69),
    baseMergeDeep = __webpack_require__(71),
    isObject = __webpack_require__(0),
    keysIn = __webpack_require__(30);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6),
    stackClear = __webpack_require__(43),
    stackDelete = __webpack_require__(44),
    stackGet = __webpack_require__(45),
    stackHas = __webpack_require__(46),
    stackSet = __webpack_require__(47);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(7);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(6),
    Map = __webpack_require__(18),
    MapCache = __webpack_require__(56);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(13),
    isMasked = __webpack_require__(52),
    isObject = __webpack_require__(0),
    toSource = __webpack_require__(54);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(19);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(53);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(57),
    mapCacheDelete = __webpack_require__(64),
    mapCacheGet = __webpack_require__(66),
    mapCacheHas = __webpack_require__(67),
    mapCacheSet = __webpack_require__(68);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(58),
    ListCache = __webpack_require__(6),
    Map = __webpack_require__(18);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(59),
    hashDelete = __webpack_require__(60),
    hashGet = __webpack_require__(61),
    hashHas = __webpack_require__(62),
    hashSet = __webpack_require__(63);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(10);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(11);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(11);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(11);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(11);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(70);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(21),
    cloneBuffer = __webpack_require__(72),
    cloneTypedArray = __webpack_require__(73),
    copyArray = __webpack_require__(76),
    initCloneObject = __webpack_require__(77),
    isArguments = __webpack_require__(25),
    isArray = __webpack_require__(26),
    isArrayLikeObject = __webpack_require__(81),
    isBuffer = __webpack_require__(28),
    isFunction = __webpack_require__(13),
    isObject = __webpack_require__(0),
    isPlainObject = __webpack_require__(83),
    isTypedArray = __webpack_require__(29),
    toPlainObject = __webpack_require__(87);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(74);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(75);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(78),
    getPrototype = __webpack_require__(23),
    isPrototype = __webpack_require__(24);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(16),
    isObjectLike = __webpack_require__(4);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    getPrototype = __webpack_require__(23),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isLength = __webpack_require__(27),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(20);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(88),
    keysIn = __webpack_require__(30);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(89),
    baseAssignValue = __webpack_require__(14);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(14),
    eq = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(91),
    isArguments = __webpack_require__(25),
    isArray = __webpack_require__(26),
    isBuffer = __webpack_require__(28),
    isIndex = __webpack_require__(31),
    isTypedArray = __webpack_require__(29);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0),
    isPrototype = __webpack_require__(24),
    nativeKeysIn = __webpack_require__(93);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(95),
    isIterateeCall = __webpack_require__(102);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(32),
    overRest = __webpack_require__(96),
    setToString = __webpack_require__(98);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(97);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(99),
    shortOut = __webpack_require__(101);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(100),
    defineProperty = __webpack_require__(22),
    identity = __webpack_require__(32);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(8),
    isArrayLike = __webpack_require__(16),
    isIndex = __webpack_require__(31),
    isObject = __webpack_require__(0);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(3);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _images = __webpack_require__(2);

var _images2 = _interopRequireDefault(_images);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_MovingObject) {
  _inherits(Player, _MovingObject);

  function Player(options) {
    _classCallCheck(this, Player);

    options = (0, _merge2.default)({
      pos: [120, 300],
      vel: [0, 0],
      acc: [0, 0],
      term: 100,

      color: "#ff3333",

      name: "player"
    }, options);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, options));

    _this.jumpAcc = -15;
    _this.walkAcc = 0.4;
    _this.inJump = false;
    _this.inWalk = false;
    _this.Lbrake = true;
    _this.Rbrake = true;
    _this.breakConst = 0.75;
    _this.leftFace = false;

    _this.image = new Image();
    _this.image.src = 'assets/mario_sprites.png';
    _this.sprite = _images2.default.marioFaceUp;

    _this.deathFall = _this.deathFall.bind(_this);

    // this.static = true;

    return _this;
  }

  _createClass(Player, [{
    key: 'gameOver',
    value: function gameOver() {
      this.sprite = _images2.default.marioDead;
      this.static = true;
      setTimeout(this.deathFall, 300);
      setTimeout(this.game.endGame, 1750);
    }
  }, {
    key: 'deathFall',
    value: function deathFall() {
      this.static = false;
      this.vel[1] = -8;
      this.acc[1] = this.game.gravity;
    }
  }, {
    key: 'verticalStop',
    value: function verticalStop(obj) {
      var _this2 = this;

      if (obj.name === "ground") {
        this.vel[1] = 0;
        this.acc[1] = 0;
        this.staticBlock(function () {
          _this2.footCorrect(obj);
        });
      }
    }
  }, {
    key: 'speedLessThanMaxGround',
    value: function speedLessThanMaxGround() {
      if (this.vel[0] < this.maxGround && this.vel[0] > this.maxGround * -1) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'footCheck',
    value: function footCheck() {
      var foot = this.pos[1] + this.sprite.height;
      return foot < 321 && foot > 319;
    }
  }, {
    key: 'jump',
    value: function jump() {
      if (!this.inJump && this.footCheck()) {
        this.vel[1] = this.vel[1] + this.jumpAcc;
        this.inJumpOn();
      }
    }
  }, {
    key: 'inJumpOn',
    value: function inJumpOn() {
      this.inJump = true;
      if (this.leftFace) {
        this.changeSprite(_images2.default.marioJumpLeft);
      } else {
        this.changeSprite(_images2.default.marioJumpRight);
      }
    }
  }, {
    key: 'outJump',
    value: function outJump() {
      if (this.vel[1] < 0) {
        this.vel[1] = 0;
      }
      this.inJump = false;
      if (this.leftFace) {
        this.changeSprite(_images2.default.marioStandLeft);
      } else {
        this.changeSprite(_images2.default.marioStandRight);
      }
    }
  }, {
    key: 'Lwalk',
    value: function Lwalk() {
      if (!this.game.gameOver) {
        if (this.inJump) {
          this.changeSprite(_images2.default.marioJumpLeft);
        } else {
          this.changeSprite(_images2.default.marioStandLeft);
        }
        if (this.speedLessThanMaxGround) {
          if (this.vel[0] > 0) {
            this.vel[0] = 0.7;
          }
          this.acc[0] = this.walkAcc * -1;
        }
        this.LbrakeOff();
        this.leftFace = true;
      }
    }
  }, {
    key: 'LbrakeOff',
    value: function LbrakeOff() {
      this.Lbrake = false;
    }
  }, {
    key: 'LbrakeOn',
    value: function LbrakeOn() {
      this.Lbrake = true;
    }
  }, {
    key: 'Rwalk',
    value: function Rwalk() {
      if (!this.game.gameOver) {
        if (this.inJump) {
          this.changeSprite(_images2.default.marioJumpRight);
        } else {
          this.changeSprite(_images2.default.marioStandRight);
        }
        if (this.speedLessThanMaxGround) {
          if (this.vel[0] < 0) {
            this.vel[0] = -0.7;
          }
          this.acc[0] = this.walkAcc;
        }
        this.RbrakeOff();
        this.leftFace = false;
      }
    }
  }, {
    key: 'RbrakeOff',
    value: function RbrakeOff() {
      this.Rbrake = false;
    }
  }, {
    key: 'RbrakeOn',
    value: function RbrakeOn() {
      this.Rbrake = true;
    }
  }, {
    key: 'brakeCheck',
    value: function brakeCheck() {
      if (this.Lbrake && this.vel[0] < 0) {
        this.acc[0] = this.acc[0] * this.breakConst;
        this.vel[0] = this.vel[0] * this.breakConst;
      }
      if (this.Rbrake && this.vel[0] > 0) {
        this.acc[0] = this.acc[0] * this.breakConst;
        this.vel[0] = this.vel[0] * this.breakConst;
      }
    }
  }, {
    key: 'terminalVelocity',
    value: function terminalVelocity() {
      if (this.vel[1] > this.term) {
        this.vel[1] = this.term;
      }
      if (this.vel[0] > this.maxGround) {
        this.vel[0] = this.maxGround;
      }
      if (this.vel[1] < this.term * -1) {
        this.vel[1] = this.term * -1;
      }
      if (this.vel[0] < this.maxGround * -1) {
        this.vel[0] = this.maxGround * -1;
      }
    }
  }, {
    key: 'move',
    value: function move(delta) {
      this.brakeCheck();
      this.vel = [this.vel[0] + delta * this.acc[0], this.vel[1] + delta * this.acc[1]];
      this.terminalVelocity();
      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      if (this.pos[1] > 436) {
        this.game.triggerGameOver();
      }
    }
  }, {
    key: 'changeSprite',
    value: function changeSprite(newImage) {
      this.sprite = newImage;
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      ctx.save();
      ctx.fillStyle = this.color;
      // ctx.fillRect (this.pos[0], this.pos[1], this.sprite.width, this.sprite.height);
      ctx.drawImage(this.image, this.sprite.imageX, this.sprite.imageY, this.sprite.width, this.sprite.height, this.pos[0], this.pos[1], this.sprite.width, this.sprite.height);
      ctx.restore();
    }
  }]);

  return Player;
}(_moving_object2.default);

module.exports = Player;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _moving_object = __webpack_require__(3);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _images = __webpack_require__(2);

var _images2 = _interopRequireDefault(_images);

var _coin = __webpack_require__(33);

var _coin2 = _interopRequireDefault(_coin);

var _spiny = __webpack_require__(34);

var _spiny2 = _interopRequireDefault(_spiny);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lakitu = function (_MovingObject) {
  _inherits(Lakitu, _MovingObject);

  function Lakitu(options) {
    _classCallCheck(this, Lakitu);

    var _this = _possibleConstructorReturn(this, (Lakitu.__proto__ || Object.getPrototypeOf(Lakitu)).call(this, options));

    _this.game.lakitus += 1;
    _this.term = 3;

    _this.safeWindow = 1500;
    _this.safeWindow = 500;

    _this.toss = _this.toss.bind(_this);
    _this.changeSprite = _this.changeSprite.bind(_this);
    _this.spawnLakitu = _this.spawnLakitu.bind(_this);
    _this.addLakitu = _this.addLakitu.bind(_this);
    _this.maxLakitus = 4;

    _this.static = true;
    _this.image.src = "assets/lakitu.png";
    _this.nextThing = _this.spawnCoin();
    _this.loadThing();

    setTimeout(function () {
      return _this.changeSprite();
    }, 550);
    setTimeout(function () {
      return _this.toss(_this.nextThing);
    }, _this.safeWindow);
    setTimeout(_this.addLakitu, 10000);
    return _this;
  }

  _createClass(Lakitu, [{
    key: 'toss',
    value: function toss() {
      if (!this.game.gameOver) {
        this.giveNextThingPos();
        this.changeSprite();
        this.tossThing(this.nextThing);
        this.setNewSafeWindow();
        setTimeout(this.toss, this.safeWindow + 650);
        this.loadThing();
      }
    }
  }, {
    key: 'giveNextThingPos',
    value: function giveNextThingPos() {
      this.nextThing.pos = this.pos;
    }
  }, {
    key: 'changeSprite',
    value: function changeSprite() {
      if (!this.game.gameOver) {
        if (this.sprite === _images2.default.lakituA) {
          this.sprite = _images2.default.lakituAthrow;
          setTimeout(this.changeSprite, 650);
        } else {
          this.sprite = _images2.default.lakituA;
        }
      }
    }
  }, {
    key: 'tossThing',
    value: function tossThing(obj) {
      if (this.game.allObjects.length < 20) {
        this.game.allObjects.push(obj);
      }
    }
  }, {
    key: 'addLakitu',
    value: function addLakitu() {
      if (this.game.lakitus < this.maxLakitus) {
        this.nextThing = this.spawnLakitu();
      }
    }
  }, {
    key: 'loadThing',
    value: function loadThing() {
      var die = Math.floor(Math.random() * 3);
      // console.log(die)
      switch (die) {
        case (0, 1):
          this.nextThing = this.spawnSpiny();
          break;
        case 2:
          this.nextThing = this.spawnCoin();
          break;
        case 3:
          this.nextThing = this.spawnCoin();
          break;
      }
      // this.nextThing = this.spawnSpiny();
    }
  }, {
    key: 'spawnCoin',
    value: function spawnCoin() {
      return new _coin2.default({
        vel: [this.vel[0], -3],
        game: this.game
      });
    }
  }, {
    key: 'spawnSpiny',
    value: function spawnSpiny() {
      return new _spiny2.default({
        vel: [this.vel[0], -3],
        game: this.game
      });
    }
  }, {
    key: 'spawnLakitu',
    value: function spawnLakitu() {
      return new Lakitu({
        pos: [this.pos[0], 115],
        vel: [this.vel[0] * -0.8, 0],
        game: this.game
        // image: Images.lakituPuff
      });
    }
  }, {
    key: 'brotherYPosition',
    value: function brotherYPosition() {
      return this.pos[0] > 115 ? 120 : 105;
    }
  }, {
    key: 'setNewSafeWindow',
    value: function setNewSafeWindow() {
      this.safeWindow = (Math.floor(Math.random() * 4) + 1.2) * 400;
    }
  }, {
    key: 'keepInBoundary',
    value: function keepInBoundary() {
      var n = 50;
      if (this.pos[0] < 220 - n) {
        this.acc[0] = 0.09;
      } else if (this.pos[0] > 220 + n) {
        this.acc[0] = -0.09;
      }

      if (this.pos[1] < 115) {
        this.acc[1] = 0.07 * (1 - this.pos[1] / 115);
      } else if (this.pos[1] > 115) {
        this.acc[1] = -0.07 * (1 - 115 / this.pos[1]);
      }

      if (this.pos[1] > 200) {
        this.pos[1] = 200;
      }
    }
  }, {
    key: 'move',
    value: function move(velocityScale) {
      if (!this.game.gameOver) {
        this.keepInBoundary();
        this.vel = [this.vel[0] + velocityScale * this.acc[0], this.vel[1] + velocityScale * this.acc[1]];
        this.terminalVelocity();
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      }
    }
  }]);

  return Lakitu;
}(_moving_object2.default);

module.exports = Lakitu;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game = __webpack_require__(17);

var _game2 = _interopRequireDefault(_game);

var _menu = __webpack_require__(106);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Viewer = function () {
  function Viewer(ctx) {
    _classCallCheck(this, Viewer);

    this.ctx = ctx;
    this.game = new _game2.default();
    this.normalTimeDelta = 1000 / this.game.FPS;
  }

  _createClass(Viewer, [{
    key: 'start',
    value: function start() {
      this.lastTime = 0;
      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: 'renderGame',
    value: function renderGame(velocityScale) {
      this.game.step(velocityScale);
      this.game.draw(this.ctx);
    }
  }, {
    key: 'checkForGameOver',
    value: function checkForGameOver() {
      if (this.game.restart === true) {
        this.game = new _game2.default();
      }
    }
  }, {
    key: 'animate',
    value: function animate(time) {
      var timeDelta = time - this.lastTime;
      var idealDelta = 1000 / 60;
      var velocityScale = timeDelta / idealDelta;
      this.renderGame(velocityScale);
      this.checkForGameOver();
      this.lastTime = time;
      requestAnimationFrame(this.animate.bind(this));
    }
  }]);

  return Viewer;
}();

module.exports = Viewer;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function Menu() {
  _classCallCheck(this, Menu);
};

module.exports = Menu;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
  function Util() {
    _classCallCheck(this, Util);

    this.handleMouse = this.handleMouse.bind(this);
  }

  _createClass(Util, [{
    key: 'handleMouse',
    value: function handleMouse(e) {
      console.log('this');
      console.log(e.clientX);
      this.someFunc();
    }
  }, {
    key: 'someFunc',
    value: function someFunc() {
      console.log('didit');
    }
  }]);

  return Util;
}();

module.exports = Util;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map