/*!
 * The MIT License
 * 
 * Copyright (c) 2017 te schultz
 * https://github.com/artisin/firemap
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */


/* eslint-disable */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["firemap"] = factory();
	else
		root["firemap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(28)('wks')
  , uid        = __webpack_require__(31)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(23)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(27);
module.exports = __webpack_require__(4) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(2)
  , IE8_DOM_DEFINE = __webpack_require__(53)
  , toPrimitive    = __webpack_require__(74)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(12);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(3)
  , ctx       = __webpack_require__(9)
  , hide      = __webpack_require__(5)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(10)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys')
  , uid    = __webpack_require__(31);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(55)
  , defined = __webpack_require__(13);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(8)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(26)
  , $export        = __webpack_require__(15)
  , redefine       = __webpack_require__(68)
  , hide           = __webpack_require__(5)
  , has            = __webpack_require__(10)
  , Iterators      = __webpack_require__(6)
  , $iterCreate    = __webpack_require__(58)
  , setToStringTag = __webpack_require__(16)
  , getPrototypeOf = __webpack_require__(64)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(9)
  , invoke             = __webpack_require__(54)
  , html               = __webpack_require__(24)
  , cel                = __webpack_require__(14)
  , global             = __webpack_require__(1)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(8)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(18)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Created by Denis Radin aka PixelsCommander
 * http://pixelscommander.com
 *
 * Polyfill is build around the principe that janks are most harmful to UX when user is continously interacting with app.
 * So we are basically preventing operation from being executed while user interacts with interface.
 * Currently this implies scrolls, taps, clicks, mouse and touch movements.
 * The condition is pretty simple - if there were no interactions for 300 msec there is a huge chance that we are in idle.
 */

var applyPolyfill = function () {
    //By default we may assume that user stopped interaction if we are idle for 300 miliseconds
    var IDLE_ENOUGH_DELAY = 300;
    var timeoutId = null;
    var callbacks = [];
    var lastInteractionTime = Date.now();
    var deadline = {
        timeRemaining: IDLE_ENOUGH_DELAY
    };

    var isFree = function () {
        return timeoutId === null;
    }

    var onContinousInteractionStarts = function (interactionName) {
        deadline.timeRemaining = 0;
        lastInteractionTime = Date.now();

        if (!timeoutId) {
            timeoutId = setTimeout(timeoutCompleted, IDLE_ENOUGH_DELAY);
        }
    }

    var onContinousInteractionEnds = function (interactionName) {
        clearTimeout(timeoutId);
        timeoutId = null;

        for (var i = 0; i < callbacks.length; i++) {
            executeCallback(callbacks[i])
        }
    }

    //Consider categorizing last interaction timestamp in order to add cancelling events like touchend, touchleave, touchcancel, mouseup, mouseout, mouseleave
    document.addEventListener('keydown', onContinousInteractionStarts.bind(this, 'keydown'));
    document.addEventListener('mousedown', onContinousInteractionStarts.bind(this, 'mousedown'));
    document.addEventListener('touchstart', onContinousInteractionStarts.bind(this, 'touchstart'));
    document.addEventListener('touchmove', onContinousInteractionStarts.bind(this, 'touchmove'));
    document.addEventListener('mousemove', onContinousInteractionStarts.bind(this, 'mousemove'));
    document.addEventListener('scroll', onContinousInteractionStarts.bind(this, 'scroll'), true);


    var timeoutCompleted = function () {
        var expectedEndTime = lastInteractionTime + IDLE_ENOUGH_DELAY;
        var delta = expectedEndTime - Date.now();

        if (delta > 0) {
            timeoutId = setTimeout(timeoutCompleted, delta);
        } else {
            onContinousInteractionEnds();
        }
    }

    var createCallbackObject = function (callback, timeout) {
        var callbackObject = {
            callback: callback,
            timeoutId: null
        };

        callbackObject.timeoutId = timeout !== null ? setTimeout(executeCallback.bind(this, callbackObject), timeout) : null;

        return callbackObject;
    }

    var addCallback = function (callbackObject, timeout) {
        callbacks.push(callbackObject);
    }

    var executeCallback = function (callbackObject) {
        var callbackIndex = callbacks.indexOf(callbackObject);

        if (callbackIndex !== -1) {
            callbacks.splice(callbacks.indexOf(callbackObject), 1);
        }

        callbackObject.callback(deadline);

        if (callbackObject.timeoutId) {
            clearTimeout(callbackObject.timeoutId);
            callbackObject.timeoutId = null;
        }
    }

    return function (callback, options) {
        var timeout = (options && options.timeout) || null;
        var callbackObject = createCallbackObject(callback, timeout);

        if (isFree()) {
            executeCallback(callbackObject);
        } else {
            addCallback(callbackObject);
        }
    };
};

if (!window.requestIdleCallback) {
    window.ricActivated = true;
    window.requestIdleCallback = applyPolyfill();
}

window.requestUserIdle = window.ricActivated && window.requestIdleCallback || applyPolyfill();

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//requestIdleCallback Polyfill
__webpack_require__(32);

/**
 * Generates canvus starts
 * @param  {num} arms        -> number of arms on star
 * @param  {num} x           -> position x
 * @param  {num} y           -> position y
 * @param  {num} outerRadius -> outter radius
 * @param  {num} innerRadius -> innter radius
 * @param  {dom} context     -> canvus element
 * @param  {str} colour      -> color fill
 */
var drawStar = function drawStar(arms, x, y, outerRadius, innerRadius, context, colour) {
  var angle = Math.PI / arms;
  context.fillStyle = colour;
  context.beginPath();
  for (var i = 0; i < 2 * arms; i++) {
    var r = i & 1 ? innerRadius : outerRadius;
    var pointX = x + Math.cos(i * angle) * r;
    var pointY = y + Math.sin(i * angle) * r;

    if (!i) {
      context.moveTo(pointX, pointY);
    } else {
      context.lineTo(pointX, pointY);
    }
  }
  context.closePath();
  context.fill();
};

/**
 * Creates and draws the heat map
 * @param  {ojb} options.ctx         -> canvuas context
 * @param  {arr} options.clickPoints -> data points to create clicks from [{}...]
 */
var drawClicks = function drawClicks(_ref) {
  var ctx = _ref.ctx,
      clickPoints = _ref.clickPoints;

  var self = this;
  var clickColor = self.clickColor || 'rgba(231, 76, 60, 0.75)';
  var clickSize = self.clickSize || 20;

  return new Promise(function (done) {
    window.requestUserIdle(function () {
      /**
       * Draw coordinate points
       */
      var point = null;
      for (var i = 0; i < clickPoints.length; i += 1) {
        point = clickPoints[i];
        //draw start
        drawStar(8, point.x, point.y, clickSize, clickSize / 2, ctx, clickColor);
      }

      //->
      done(true);
    }, { timeout: 2000 });
  });
};

module.exports = drawClicks;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPointValue = __webpack_require__(43);
var getColor = __webpack_require__(42);
//requestIdleCallback Polyfill
__webpack_require__(32);

/**
 * sorts based on i axis
 * @param  {arr} dataPoints -> dataPoints to min/max
 * @param  {str} i          -> x | y
 * @return {obj}            -> min/max
 */
var getMinMax = function getMinMax(dataPoints) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';

  dataPoints.sort(function (a, b) {
    return a[i] === b[i] ? a.x - b.x : a[i] - b[i];
  });
  return {
    min: dataPoints[0][i],
    max: dataPoints[dataPoints.length - 1][i]
  };
};

/**
 * Creates and draws the heat map
 * @param  {ojb} options.ctx        -> canvuas context
 * @param  {num} options.limit      -> neighborhood limit
 * @param  {num} options.interval   -> interpolation interval
 * @param  {arr} options.dataPoints -> data points to create map from [{}...]
 * @param  {arr} options.polygon    -> the surounding convex polygon around dataPoints
 * @param  {bln} options.cleanEdges -> to remove rough edges
 * @param  {bln} options.mesh       -> to create mesh-like map
 * @param  {bln} options.points     -> to draw coordinates for dataPoints
 * @param  {num} options.pointSize  -> size of coordinates points
 */
var drawHeatMap = function drawHeatMap(_ref) {
  var ctx = _ref.ctx,
      limit = _ref.limit,
      interval = _ref.interval,
      dataPoints = _ref.dataPoints,
      polygon = _ref.polygon,
      cleanEdges = _ref.cleanEdges,
      mesh = _ref.mesh,
      points = _ref.points,
      pointSize = _ref.pointSize;

  var self = this;
  var size = self.size;
  var hue = self.hue;
  var max = self.maxValue;
  var opacity = self.opacity;
  var thresh = self.threshold;
  var corners = self.corners;
  var radius = mesh ? interval * 1.5 : 1;
  return new Promise(function (done) {
    window.requestUserIdle(function () {
      //set up
      limit = limit > dataPoints.length ? dataPoints.length : limit + 1;
      var xMinMax = getMinMax(dataPoints, 'x');
      var yMinMax = getMinMax(dataPoints, 'y');
      var xMin = xMinMax.min;
      var yMin = yMinMax.min;
      var xMax = xMinMax.max;
      var yMax = yMinMax.max;
      var dbl = 2 * interval;
      var col = [];
      var val = 0.0;
      var x = 0;
      var y = 0;
      var color = '';
      var gradient = null;
      //clear pervious canvus before redraw
      ctx.clearRect(0, 0, size.width, size.height);

      //draw heatmap
      for (x = xMin; x < xMax; x += interval) {
        for (y = yMin; y < yMax; y += interval) {
          //get indv points value
          val = getPointValue(limit, polygon, dataPoints, { x: x, y: y });
          if (val !== -255) {
            ctx.beginPath();
            //get corresponding color to val
            col = getColor({ val: val, hue: hue, max: max });
            color = 'rgba(' + col[0] + ', ' + col[1] + ', ' + col[2] + ',';
            gradient = ctx.createRadialGradient(x, y, radius, x, y, interval);
            gradient.addColorStop(0, color + opacity + ')');
            gradient.addColorStop(1, color + ' 0)');
            ctx.fillStyle = '#ffffff';
            ctx.lineJoin = 'round';
            ctx.fillStyle = gradient;
            ctx.fillRect(x - interval, y - interval, dbl, dbl);
            ctx.fill();
            ctx.closePath();
          }
        }
      }

      /**
       * Clean hard edges
       */
      if (!corners && cleanEdges && polygon.length > 1) {
        ctx.globalCompositeOperation = 'destination-in';
        ctx.fillStyle = '#ffffff';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(polygon[0].x, polygon[0].y);
        for (var i = 1; i < polygon.length; i++) {
          ctx.lineTo(polygon[i].x, polygon[i].y);
        }
        ctx.lineTo(polygon[0].x, polygon[0].y);
        ctx.closePath();
        ctx.fill();
      }

      /**
       * Draw coordinate points
       */
      if (points) {
        var PI2 = 2 * Math.PI;
        var point = null;
        for (var _i = 0; _i < dataPoints.length; _i += 1) {
          point = dataPoints[_i];
          if (point.value > thresh) {
            //get corresponding color to val
            color = getColor({ val: point.value, hue: hue, max: max });
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            ctx.beginPath();
            ctx.arc(point.x, point.y, pointSize, 0, PI2, false);
            ctx.fill();
            ctx.lineWidth = pointSize / 4;
            ctx.strokeStyle = 'rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 0.8)';
            ctx.beginPath();
            ctx.arc(point.x, point.y, pointSize, 0, PI2, false);
            ctx.stroke();
            ctx.textAlign = 'center';
            ctx.font = pointSize - 2 + 'px monospace';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#474f50';
            ctx.fillText(Math.round(point.value), point.x, point.y);
          }
        }
      }

      //->
      done(true);
    }, { timeout: 2000 });
  });
};

module.exports = drawHeatMap;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets perpendicular vector
 */
var vectorProduct = function vectorProduct(a, b, c) {
  return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
};

/**
 * Creates an convex hull polygon - ie, the outter bounds around the points
 * @param  {arr} points -> points to form polygon around
 * @return {arr}        -> the polygon points
 */
var getConvexHullPolygon = function getConvexHullPolygon(points) {
  return new Promise(function (done) {
    var lower = [];
    var upper = [];

    for (var i = 0; i < points.length; i += 1) {
      while (lower.length >= 2 && vectorProduct(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0) {
        lower.pop();
      }
      lower.push(points[i]);
    }
    for (var _i = points.length - 1; _i >= 0; _i -= 1) {
      while (upper.length >= 2 && vectorProduct(upper[upper.length - 2], upper[upper.length - 1], points[_i]) <= 0) {
        upper.pop();
      }
      upper.push(points[_i]);
    }

    upper.pop();
    lower.pop();
    var polygon = lower.concat(upper);
    done(polygon);
  });
};

module.exports = getConvexHullPolygon;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(46);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(45);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _detectHover = __webpack_require__(82);

var _detectHover2 = _interopRequireDefault(_detectHover);

var _detectPointer = __webpack_require__(84);

var _detectPointer2 = _interopRequireDefault(_detectPointer);

var _detectTouchEvents = __webpack_require__(85);

var _detectTouchEvents2 = _interopRequireDefault(_detectTouchEvents);

var _detectPassiveEvents = __webpack_require__(83);

var _detectPassiveEvents2 = _interopRequireDefault(_detectPassiveEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * detectIt object structure
 * const detectIt = {
 *   deviceType: 'mouseOnly' / 'touchOnly' / 'hybrid',
 *   passiveEvents: boolean,
 *   hasTouch: boolean,
 *   hasMouse: boolean,
 *   maxTouchPoints: number,
 *   primaryHover: 'hover' / 'none',
 *   primaryPointer: 'fine' / 'coarse' / 'none',
 *   state: {
 *     detectHover,
 *     detectPointer,
 *     detectTouchEvents,
 *     detectPassiveEvents,
 *   },
 *   update() {...},
 * }
 */

function determineDeviceType(hasTouch, anyHover, anyFine, state) {
  // A hybrid device is one that both hasTouch and any input device can hover
  // or has a fine pointer.
  if (hasTouch && (anyHover || anyFine)) return 'hybrid';

  // workaround for browsers that have the touch events api,
  // and have implemented Level 4 media queries but not the
  // hover and pointer media queries, so the tests are all false (notable Firefox)
  // if it hasTouch, no pointer and hover support, and on an android assume it's touchOnly
  // if it hasTouch, no pointer and hover support, and not on an android assume it's a hybrid
  if (hasTouch && Object.keys(state.detectHover).filter(function (key) {
    return key !== 'update';
  }).every(function (key) {
    return state.detectHover[key] === false;
  }) && Object.keys(state.detectPointer).filter(function (key) {
    return key !== 'update';
  }).every(function (key) {
    return state.detectPointer[key] === false;
  })) {
    if (window.navigator && /android/.test(window.navigator.userAgent.toLowerCase())) {
      return 'touchOnly';
    }
    return 'hybrid';
  }

  // In almost all cases a device that doesn’t support touch will have a mouse,
  // but there may be rare exceptions. Note that it doesn’t work to do additional tests
  // based on hover and pointer media queries as older browsers don’t support these.
  // Essentially, 'mouseOnly' is the default.
  return hasTouch ? 'touchOnly' : 'mouseOnly';
}

var detectIt = {
  state: {
    detectHover: _detectHover2.default,
    detectPointer: _detectPointer2.default,
    detectTouchEvents: _detectTouchEvents2.default,
    detectPassiveEvents: _detectPassiveEvents2.default
  },
  update: function update() {
    detectIt.state.detectHover.update();
    detectIt.state.detectPointer.update();
    detectIt.state.detectTouchEvents.update();
    detectIt.state.detectPassiveEvents.update();
    detectIt.updateOnlyOwnProperties();
  },
  updateOnlyOwnProperties: function updateOnlyOwnProperties() {
    if (typeof window !== 'undefined') {
      detectIt.passiveEvents = detectIt.state.detectPassiveEvents.hasSupport || false;

      detectIt.hasTouch = detectIt.state.detectTouchEvents.hasSupport || false;

      detectIt.deviceType = determineDeviceType(detectIt.hasTouch, detectIt.state.detectHover.anyHover, detectIt.state.detectPointer.anyFine, detectIt.state);

      detectIt.hasMouse = detectIt.deviceType !== 'touchOnly';

      detectIt.primaryInput = detectIt.deviceType === 'mouseOnly' && 'mouse' || detectIt.deviceType === 'touchOnly' && 'touch' ||
      // deviceType is hybrid:
      detectIt.state.detectHover.hover && 'mouse' || detectIt.state.detectHover.none && 'touch' ||
      // if there's no support for hover media queries but detectIt determined it's
      // a hybrid  device, then assume it's a mouse first device
      'mouse';
    }
  }
};

detectIt.updateOnlyOwnProperties();
exports.default = detectIt;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

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
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 */
var hslToRgb = function hslToRgb(h, s, l) {
  var r = void 0,
      g = void 0,
      b = void 0;

  if (s === 0) {
    // achromatic
    r = g = b = l;
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }
      if (t < 1 / 2) {
        return q;
      }
      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

/**
 * Gets color based on constrants
 */
var getColor = function getColor(_ref) {
  var hue = _ref.hue,
      max = _ref.max,
      val = _ref.val;

  // 0   -> orange
  // 0.5 -> green
  // 1   -> violet
  var min = 0;
  var dif = max - min;
  val = val > max ? max : val < min ? min : val;
  return hslToRgb(1 - (1 - hue) - (val - min) * hue / dif, 1, 0.5);
};

module.exports = getColor;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the inverse distance weight of the point
 * @param  {num} limit     -> limit points
 * @param  {arr} polygon   -> the convex hull polygon
 * @param  {arr} points    -> all points
 * @param  {num} options.x -> point in quesion
 * @param  {num} options.y -> point in question
 * @return {num}           -> value
 */
var getPointValue = function getPointValue(limit, polygon, points, _ref) {
  var x = _ref.x,
      y = _ref.y;

  var insidePolygon = false;
  var xa = 0;
  var xb = 0;
  var ya = 0;
  var yb = 0;
  var intersect = false;
  var p = polygon.length - 1;
  //find out if point inside the polygon
  for (var i = 0; i < polygon.length; i++) {
    xa = polygon[i].x;
    ya = polygon[i].y;
    xb = polygon[p].x;
    yb = polygon[p].y;
    intersect = ya > y !== yb > y && x < (xb - xa) * (y - ya) / (yb - ya) + xa;
    insidePolygon = !intersect ? insidePolygon : !insidePolygon;
    p = i;
  }

  if (insidePolygon) {
    var arr = [];
    var pwr = 2;
    var dist = 0.0;
    var inv = 0.0;

    //square distances
    for (var _i = 0; _i < points.length; _i++) {
      var distX = x - points[_i].x;
      var distY = y - points[_i].y;
      dist = distX * distX + distY * distY;
      if (dist === 0) {
        return points[_i].value;
      }
      arr[_i] = [dist, _i];
    }

    arr.sort(function (a, b) {
      return a[0] - b[0];
    });

    //calc
    var b = 0.0;
    var ptr = 0;
    var t = 0.0;
    for (var _i2 = 0; _i2 < limit; _i2++) {
      ptr = arr[_i2];
      inv = 1 / Math.pow(ptr[0], pwr);
      t += inv * points[ptr[1]].value;
      b += inv;
    }
    return t / b;
  }

  return -255;
};

module.exports = getPointValue;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(39);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(36);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(37);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(38);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lodashThrottle = __webpack_require__(41);
var detectIt = __webpack_require__(40);
var getConvexHullPolygon = __webpack_require__(35);
var drawHeatMap = __webpack_require__(34);
var drawClickMap = __webpack_require__(33);

var FireMap = function () {
  /**
   * @param  {arr} dataPoints       -> user data points for mouse
   * @param  {arr} clickPoints      -> user data points for clicks
   * @param  {num} area             -> sampling area which clusters all points
   *                                   within its area into a single cluster
   *                                   default is 5 so 5px by 5px sample area
   * @param  {dom} canvas           -> canvas dom element to draw map on
   * @param  {bln} cleanEdges       -> cleans edges of polygon to remove rough
   *                                   edges to make it look pretty, only used
   *                                   if corners is false
   * @param  {str} clickColor       -> color of the click point data stars
   * @param  {num} clickSize        -> size of the click point data stars
   * @param  {num}  corners         -> creats pseudo data points for cornor of the
   *                                   window so heatmap spans the entire screen
   * @param  {num} height           -> height of canvas || screen height
   * @param  {num} hue              -> color hue for map default is 0.5 green,
   *                                   0.8 violet, 3.5 rgbiv and no non-point color
   * @param  {num} interval         -> interpolation interval of unknown points,
   *                                   the lower the number the more points
   *                                   calculates which producesed a better map
   * @param  {num} limit            -> search neighborhood limit, higher num
   *                                   smoother blend of map colors
   *                                   but it also increase computation time
   * @param  {num} maxValue         -> max value for color default is 100
   *                                   so any value above 100 is going to be the
   *                                   same color
   * @param  {bln} mesh             -> to create a mesh-like map rather then
   *                                   a solid map
   * @param  {num} opacity          -> opacity of canvus fill
   * @param  {bln} points           -> to draw data marker point coordinates
   * @param  {num} pointSize        -> font-size of points
   * @param  {obj} styles           -> custom CSS canvas styles
   * @param  {fnk} subscribe        -> a subscribe function that is invoked on
   *                                   the mouse tracking & click event,
   *                                   passes the event and binded to this
   * @param  {num} threshold        -> point values has to be higher than threshold
   * @param  {num} throttle         -> mouse tracker throttle
   * @param  {num} width            -> width of canvas || screen width
   */
  function FireMap() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$dataPoints = _ref.dataPoints,
        dataPoints = _ref$dataPoints === undefined ? [] : _ref$dataPoints,
        _ref$clickPoints = _ref.clickPoints,
        clickPoints = _ref$clickPoints === undefined ? [] : _ref$clickPoints,
        subscribe = _ref.subscribe,
        canvas = _ref.canvas,
        width = _ref.width,
        height = _ref.height,
        _ref$area = _ref.area,
        area = _ref$area === undefined ? 10 : _ref$area,
        _ref$maxValue = _ref.maxValue,
        maxValue = _ref$maxValue === undefined ? 100 : _ref$maxValue,
        _ref$styles = _ref.styles,
        styles = _ref$styles === undefined ? {} : _ref$styles,
        _ref$hue = _ref.hue,
        hue = _ref$hue === undefined ? 0.5 : _ref$hue,
        _ref$opacity = _ref.opacity,
        opacity = _ref$opacity === undefined ? 0.8 : _ref$opacity,
        _ref$cleanEdges = _ref.cleanEdges,
        cleanEdges = _ref$cleanEdges === undefined ? true : _ref$cleanEdges,
        _ref$throttle = _ref.throttle,
        throttle = _ref$throttle === undefined ? 100 : _ref$throttle,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 110 : _ref$threshold,
        _ref$corners = _ref.corners,
        corners = _ref$corners === undefined ? true : _ref$corners,
        _ref$limit = _ref.limit,
        limit = _ref$limit === undefined ? 100 : _ref$limit,
        _ref$interval = _ref.interval,
        interval = _ref$interval === undefined ? 8 : _ref$interval,
        _ref$mesh = _ref.mesh,
        mesh = _ref$mesh === undefined ? false : _ref$mesh,
        _ref$points = _ref.points,
        points = _ref$points === undefined ? false : _ref$points,
        _ref$pointSize = _ref.pointSize,
        pointSize = _ref$pointSize === undefined ? 13 : _ref$pointSize,
        _ref$clickTrack = _ref.clickTrack,
        clickTrack = _ref$clickTrack === undefined ? false : _ref$clickTrack,
        clickSize = _ref.clickSize,
        clickColor = _ref.clickColor;

    (0, _classCallCheck3.default)(this, FireMap);

    var self = this;
    self.error = false;

    /**
     * Error gate
     */
    canvas = canvas || document.getElementsByTagName('canvas') && document.getElementsByTagName('canvas')[0];
    if (!canvas) {
      self.error = true;
      console.error('Fatal Fire Map Error: Canvas element not found, cannot proceed.');
      return false;
    }
    /**
     * User data
     */
    self.dataPoints = dataPoints;
    self.clickPoints = clickPoints;

    /**
     * Tracking Vars/setup
     */
    self.area = area;
    self.throttle = throttle;
    self.threshold = threshold;
    var getDocSize = function getDocSize() {
      var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Width';

      var D = document;
      return Math.max(D.body['scroll' + axis], D.documentElement['scroll' + axis], D.body['offset' + axis], D.documentElement['offset' + axis], D.body['client' + axis], D.documentElement['client' + axis]);
    };
    self.width = width ? width : getDocSize('Width');
    self.height = height ? height : getDocSize('Height');
    //used in mouse track
    self._time = false;
    self._temp = [];
    //create location matrix, add one for safty
    self.data = [];
    self.data.length = Math.round((self.width + self.area) / self.area) + 1;
    var ySize = Math.round((self.height + self.area) / self.area) + 1;
    for (var i = self.data.length - 1; i >= 0; i--) {
      self.data[i] = [];
      self.data[i].length = ySize;
    }
    //checks for clickTracking and creates need be
    self.clickTrack = clickTrack;
    if (self.clickTrack) {
      self.clickData = [];
      self.clickData.length = Math.round((self.width + self.area) / self.area) + 1;
      for (var _i = self.clickData.length - 1; _i >= 0; _i--) {
        self.clickData[_i] = [];
        self.clickData[_i].length = ySize;
      }
    }

    /**
     * HeatMap
     */
    self.drawHeatMap = drawHeatMap.bind(self);
    self.drawClickMap = drawClickMap.bind(self);
    self.maxValue = maxValue;
    self.hue = hue;
    self.cleanEdges = cleanEdges;
    self.opacity = opacity;
    self.ctx = null;
    //set canvus to take up entire screen
    canvas.width = self.width;
    canvas.height = self.height;
    self.canvas = canvas;
    self.points = [];
    self.polygon = [];
    self.limits = {
      xMin: 0,
      xMax: 0,
      yMin: 0,
      yMax: 0
    };
    self.size = {
      height: canvas.height,
      width: canvas.width
    };
    //set canvus style props
    styles = Object.assign({
      position: 'absolute',
      top: '0',
      left: '0',
      opacity: opacity
    }, styles);
    Object.keys(styles).forEach(function (key) {
      canvas.style[key] = styles[key];
    });

    /**
     * Draw
     */
    self.corners = corners;
    self.limit = limit;
    self.interval = interval;
    self.mesh = mesh;
    self.points = points;
    self.pointSize = pointSize;
    //clicks
    self.clickSize = clickSize;
    self.clickColor = clickColor;

    //used for realtime tracking
    if (typeof subscribe === 'function') {
      self.subscribe = subscribe.bind(self);
    }
    self.dataPointCount = false;
  }

  /**
   * Draws the heatzmap based on data points
   * @param  {arr} options.dataPoints -> user data points for mouse
   * @param  {arr} options.clickPoint -> user data points for clicks
   * @param  {num} options.clickSize  -> size of the click point data stars
   * @param  {str} options.clickColor -> color of the click point data stars
   * @param  {fnk} options.cb         -> Callback function invoked upon completion
   *                                     and binded to instance with the first arg
   *                                     being the canvas context (ctx)
   * @param  {num} options.hue        -> color hue for map default is 0.5 green,
   *                                     0.8 violet, 3.5 rgbiv and no non-point color
   * @param  {num} options. interval  -> interpolation interval of unknown points,
   *                                     the lower the number the more points
   *                                     calculates which producesed a better
   * @param  {num} options.limit      -> search neighborhood limit, higher num
   *                                     smoother blend of map colors
   * @param  {bln} options.mesh       -> to create a mesh-like map rather then
   *                                    a solid map
   * @param  {num} options.opacity    -> opacity of canvus fill
   * @param  {bln} options.points     -> to draw data marker point coordinates
   * @param  {num} options.pointSize  -> font-size of points
   * @param  {num} options.threshold  -> point values has to be higher than threshold
   */


  (0, _createClass3.default)(FireMap, [{
    key: 'draw',
    value: function draw() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          dataPoints = _ref2.dataPoints,
          clickPoints = _ref2.clickPoints,
          limit = _ref2.limit,
          interval = _ref2.interval,
          mesh = _ref2.mesh,
          points = _ref2.points,
          pointSize = _ref2.pointSize,
          threshold = _ref2.threshold,
          hue = _ref2.hue,
          opacity = _ref2.opacity,
          clickSize = _ref2.clickSize,
          clickColor = _ref2.clickColor,
          _ref2$cb = _ref2.cb,
          cb = _ref2$cb === undefined ? false : _ref2$cb;

      var self = this;
      dataPoints = dataPoints !== undefined ? dataPoints : self.dataPoints;
      clickPoints = clickPoints !== undefined ? clickPoints : self.clickPoints;
      limit = limit !== undefined ? limit : self.limit;
      interval = interval !== undefined ? interval : self.interval;
      mesh = mesh !== undefined ? mesh : self.mesh;
      points = points !== undefined ? points : self.points;
      pointSize = pointSize !== undefined ? pointSize : self.pointSize;
      //self vars
      self.threshold = threshold !== undefined ? threshold : self.threshold;
      self.hue = hue !== undefined ? hue : self.hue;
      self.opacity = opacity !== undefined ? opacity : self.opacity;
      self.clickSize = clickSize !== undefined ? clickSize : self.clickSize;
      self.clickColor = clickColor !== undefined ? clickColor : self.clickColor;
      var ctx = void 0;
      /**
       * Wrapper so that we don't trip up the main thread. draw-heat-map also
       * is wrapped via requestUserIdle to only execue on idle
       */
      var run = function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var cleanEdges, polygon;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  //cannot't clean with real time
                  cleanEdges = dataPoints ? self.cleanEdges : false;

                  ctx = self.canvas.getContext('2d');

                  if (!dataPoints.length) {
                    _context.next = 6;
                    break;
                  }

                  _context.t0 = dataPoints;
                  _context.next = 9;
                  break;

                case 6:
                  _context.next = 8;
                  return self.getData();

                case 8:
                  _context.t0 = _context.sent;

                case 9:
                  dataPoints = _context.t0;

                  if (!dataPoints.length) {
                    _context.next = 16;
                    break;
                  }

                  _context.next = 13;
                  return getConvexHullPolygon(dataPoints);

                case 13:
                  polygon = _context.sent;
                  _context.next = 16;
                  return self.drawHeatMap({
                    ctx: ctx, limit: limit, interval: interval, dataPoints: dataPoints, polygon: polygon, cleanEdges: cleanEdges, mesh: mesh, points: points, pointSize: pointSize
                  });

                case 16:
                  if (!(clickPoints === true)) {
                    _context.next = 22;
                    break;
                  }

                  _context.next = 19;
                  return self.getData(self.clickData || [], true);

                case 19:
                  _context.t1 = _context.sent;
                  _context.next = 23;
                  break;

                case 22:
                  _context.t1 = clickPoints;

                case 23:
                  clickPoints = _context.t1;

                  if (!clickPoints.length) {
                    _context.next = 27;
                    break;
                  }

                  _context.next = 27;
                  return self.drawClickMap({ ctx: ctx, clickPoints: clickPoints });

                case 27:
                  return _context.abrupt('return', true);

                case 28:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function run() {
          return _ref3.apply(this, arguments);
        }

        return run;
      }();
      run().then(function () {
        console.log('Draw Complete');
        if (cb) {
          cb.apply(self, [ctx]);
        }
      });
    }

    /**
     * Formats the data matricks are removes undefined data
     * @param  {arr} source -> Source data
     * @return {prm}         -> promise([{x, y, value} ...])
     */

  }, {
    key: 'getData',
    value: function getData() {
      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var click = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var self = this;
      return new Promise(function (done) {
        source = source || self.data;
        var data = [];
        var value = null;
        for (var x = source.length - 1; x >= 0; x--) {
          for (var y = source[x].length - 1; y >= 0; y--) {
            value = source[x][y];
            if (value) {
              data.push({
                x: x * self.area,
                y: y * self.area,
                value: !click ? value / 10 : value
              });
            }
          }
        }
        done(data);
      });
    }

    /**
     * Client init to start tracking mouse movements
     */

  }, {
    key: 'init',
    value: function init() {
      var subscribe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var self = this;
      if (!self.error) {
        //subscribe set up
        self.subscribe = subscribe && typeof subscribe === 'function' ? subscribe.bind(self) : self.subscribe;
        var sub = function sub(event, type) {
          return self.subscribe && self.subscribe(event, type);
        };
        //mouse movement
        self._trackAndLogMouse = self._trackAndLogMouse.bind(self);
        document.addEventListener('mousemove', lodashThrottle(function (event) {
          self._trackAndLogMouse(event);
          sub(event, 'mousemove');
        }, self.throttle), detectIt.passiveEvents ? { passive: true } : false);

        //click
        if (self.clickTrack) {
          self._logClicks = self._logClicks.bind(self);
          document.addEventListener('pointerdown', lodashThrottle(function (event) {
            self._logClicks(event);
            sub(event, 'pointerdown');
          }, 75), detectIt.passiveEvents ? { passive: true } : false);
        }

        //used so that tracker resets otherwise you get edge outliers
        document.addEventListener('pointerdown', function () {
          self._time = new Date();
        }, detectIt.passiveEvents ? { passive: true } : false);
      }
      //places data points at corners of canvus
      if (self.corners) {
        var val = 1;
        var x = self.data.length - 1;
        var y = self.data[0].length - 1;
        self.data[0][0] = val;
        self.data[0][y] = val;
        self.data[x][0] = val;
        self.data[x][y] = val;
      }
    }
  }, {
    key: '_setCoordinates',
    value: function _setCoordinates(x, y) {
      var mouse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var self = this;
      var posX = Math.round(x / self.area);
      var posY = Math.round(y / self.area);
      //mouse loging
      if (mouse) {
        if (!self._time || !self._temp.length) {
          self._time = new Date();
          self._temp = [posX, posY];
        } else {
          var newTime = new Date();
          var time = newTime - self._time;
          //set current data
          var temp = self._temp;
          //set data, and error check
          if (self.data[temp[0]]) {
            var data = self.data[temp[0]][temp[1]];
            self.data[temp[0]][temp[1]] = !data ? time : data + time;
          }
          //store new time + temp
          self._time = newTime;
          self._temp = [posX, posY];
        }
        //for real time update
        if (self.dataPointCount) {
          self.dataPointCount.count += 1;
        }
      } else {
        //click track
        var _data = self.clickData[posX][posY];
        self.clickData[posX][posY] = !_data ? 1 : _data + 1;
      }
    }

    /**
     * Tracks mouse events set movements to _setCoordinates
     */

  }, {
    key: '_trackAndLogMouse',
    value: function _trackAndLogMouse(event) {
      var self = this;
      event = event || window.event;
      if (event.pageX === null && event.clientX !== null) {
        var eventDoc = event.target && event.target.ownerDocument || document;
        var doc = eventDoc.documentElement;
        var body = eventDoc.body;

        event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
      }
      self._setCoordinates(event.pageX, event.pageY);
    }

    /**
     * Tracks clicks
     */

  }, {
    key: '_logClicks',
    value: function _logClicks(event) {
      var self = this;
      event = event || window.event;
      if (event.pageX === null && event.clientX !== null) {
        var eventDoc = event.target && event.target.ownerDocument || document;
        var doc = eventDoc.documentElement;
        var body = eventDoc.body;

        event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
      }
      self._setCoordinates(event.pageX, event.pageY, false);
    }

    /**
     * Updates heatmap in real time
     * @param  {num} interval -> update heatmap every x data points
     */

  }, {
    key: 'realTime',
    value: function realTime() {
      var drawInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

      var self = this;
      var dataPointCount = { count: 0 };
      var proxy = new Proxy(dataPointCount, {
        set: function set(target, property, value) {
          target[property] = value;
          if (value % drawInterval === 0) {
            self.draw();
          }
          return true;
        }
      });
      self.dataPointCount = proxy;
    }
  }]);
  return FireMap;
}();

exports.default = FireMap;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(48), __esModule: true };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
__webpack_require__(80);
__webpack_require__(81);
__webpack_require__(79);
module.exports = __webpack_require__(3).Promise;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19)
  , toLength  = __webpack_require__(30)
  , toIndex   = __webpack_require__(72);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(9)
  , call        = __webpack_require__(57)
  , isArrayIter = __webpack_require__(56)
  , anObject    = __webpack_require__(2)
  , toLength    = __webpack_require__(30)
  , getIterFn   = __webpack_require__(75)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(23)(function(){
  return Object.defineProperty(__webpack_require__(14)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(8);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(6)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(2);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(62)
  , descriptor     = __webpack_require__(27)
  , setToStringTag = __webpack_require__(16)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(29).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(8)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(2)
  , dPs         = __webpack_require__(63)
  , enumBugKeys = __webpack_require__(22)
  , IE_PROTO    = __webpack_require__(17)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(14)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(24).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(2)
  , getKeys  = __webpack_require__(66);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(10)
  , toObject    = __webpack_require__(73)
  , IE_PROTO    = __webpack_require__(17)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(10)
  , toIObject    = __webpack_require__(19)
  , arrayIndexOf = __webpack_require__(51)(false)
  , IE_PROTO     = __webpack_require__(17)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(65)
  , enumBugKeys = __webpack_require__(22);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(5);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(3)
  , dP          = __webpack_require__(7)
  , DESCRIPTORS = __webpack_require__(4)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(2)
  , aFunction = __webpack_require__(12)
  , SPECIES   = __webpack_require__(0)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18)
  , defined   = __webpack_require__(13);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(13);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(21)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(6);
module.exports = __webpack_require__(3).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(49)
  , step             = __webpack_require__(60)
  , Iterators        = __webpack_require__(6)
  , toIObject        = __webpack_require__(19);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(25)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(15);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(4), 'Object', {defineProperty: __webpack_require__(7).f});

/***/ }),
/* 78 */
/***/ (function(module, exports) {



/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(26)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(9)
  , classof            = __webpack_require__(21)
  , $export            = __webpack_require__(15)
  , isObject           = __webpack_require__(11)
  , aFunction          = __webpack_require__(12)
  , anInstance         = __webpack_require__(50)
  , forOf              = __webpack_require__(52)
  , speciesConstructor = __webpack_require__(70)
  , task               = __webpack_require__(29).set
  , microtask          = __webpack_require__(61)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(67)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(16)($Promise, PROMISE);
__webpack_require__(69)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(59)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(71)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(25)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(5)
  , Iterators     = __webpack_require__(6)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var detectHover = {
  update: function update() {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.matchMedia === 'function') {
      detectHover.hover = window.matchMedia('(hover: hover)').matches;
      detectHover.none = window.matchMedia('(hover: none)').matches || window.matchMedia('(hover: on-demand)').matches;
      detectHover.anyHover = window.matchMedia('(any-hover: hover)').matches;
      detectHover.anyNone = window.matchMedia('(any-hover: none)').matches || window.matchMedia('(any-hover: on-demand)').matches;
    }
  }
};

detectHover.update();
exports.default = detectHover;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.addEventListener === 'function' && typeof Object.defineProperty === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      window.addEventListener('test', null, options);

      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var detectPointer = {
  update: function update() {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.matchMedia === 'function') {
      detectPointer.fine = window.matchMedia('(pointer: fine)').matches;
      detectPointer.coarse = window.matchMedia('(pointer: coarse)').matches;
      detectPointer.none = window.matchMedia('(pointer: none)').matches;
      detectPointer.anyFine = window.matchMedia('(any-pointer: fine)').matches;
      detectPointer.anyCoarse = window.matchMedia('(any-pointer: coarse)').matches;
      detectPointer.anyNone = window.matchMedia('(any-pointer: none)').matches;
    }
  }
};

detectPointer.update();
exports.default = detectPointer;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var detectTouchEvents = {
  update: function update() {
    if (window !== undefined) {
      detectTouchEvents.hasSupport = 'ontouchstart' in window;
      detectTouchEvents.browserSupportsApi = Boolean(window.TouchEvent);
    }
  }
};

detectTouchEvents.update();
exports.default = detectTouchEvents;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(87);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=firemap.js.map