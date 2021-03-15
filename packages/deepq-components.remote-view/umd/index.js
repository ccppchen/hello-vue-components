(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("vue"));
	else
		root["index"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "195d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 加载
 *
 * @author Y3G
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("9ab4");
var installCSS_1 = tslib_1.__importDefault(__webpack_require__("3662"));
var installJS_1 = tslib_1.__importDefault(__webpack_require__("a094"));
/**
 * 加载一个完整模块.
 *
 * module中最后一个js会以模拟的AMD格式加载, 如果要导出接口, 最后一个js请使用UMD格式.
 *
 * @export
 * @param {ModuleInfo} module 模块信息
 * @returns {Promise<any>}
 */
function importModule(module) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var js, css, umd, ret;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    js = module.js, css = module.css, umd = module.umd;
                    return [4 /*yield*/, installCSS_1.default(css)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, installJS_1.default(js, {
                            umd: typeof umd === 'undefined' ? true : umd
                        })];
                case 2:
                    ret = _a.sent();
                    return [2 /*return*/, ret];
            }
        });
    });
}
exports.importModule = importModule;
/**
 * 加载一个js脚本.
 *
 * @export
 * @param {string} url 脚本地址
 * @param {ImportScriptOptions} [options={ umd: true }] 配置项
 * @returns {Promise<any>}
 */
function importScript(url, options) {
    if (options === void 0) { options = { umd: true }; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var ret;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, importModule({ js: [url], css: [], umd: options.umd })];
                case 1:
                    ret = _a.sent();
                    return [2 /*return*/, ret];
            }
        });
    });
}
exports.importScript = importScript;
/**
 * 加载一个css文件.
 *
 * @export
 * @param {string} url css地址
 * @returns {Promise<any>}
 */
function importStyle(url) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var ret;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, importModule({ css: [url], js: [] })];
                case 1:
                    ret = _a.sent();
                    return [2 /*return*/, ret];
            }
        });
    });
}
exports.importStyle = importStyle;
exports.default = { importModule: importModule, importScript: importScript, importStyle: importStyle };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW1wb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7OztBQUVILG9FQUFxQztBQUNyQyxrRUFBbUM7QUFhbkM7Ozs7Ozs7O0dBUUc7QUFDSCxTQUFzQixZQUFZLENBQUMsTUFBa0I7Ozs7OztvQkFDM0MsRUFBRSxHQUFlLE1BQU0sR0FBckIsRUFBRSxHQUFHLEdBQVUsTUFBTSxJQUFoQixFQUFFLEdBQUcsR0FBSyxNQUFNLElBQVgsQ0FBVztvQkFFL0IscUJBQU0sb0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBQTs7b0JBQXJCLFNBQXFCLENBQUE7b0JBQ1QscUJBQU0sbUJBQVMsQ0FBQyxFQUFFLEVBQUU7NEJBQzlCLEdBQUcsRUFBRSxPQUFPLEdBQUcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRzt5QkFDN0MsQ0FBQyxFQUFBOztvQkFGSSxHQUFHLEdBQUcsU0FFVjtvQkFFRixzQkFBTyxHQUFHLEVBQUE7Ozs7Q0FDWDtBQVRELG9DQVNDO0FBTUQ7Ozs7Ozs7R0FPRztBQUNILFNBQXNCLFlBQVksQ0FBQyxHQUFXLEVBQUUsT0FBNEM7SUFBNUMsd0JBQUEsRUFBQSxZQUFpQyxHQUFHLEVBQUUsSUFBSSxFQUFFOzs7Ozt3QkFDOUUscUJBQU0sWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUE7O29CQUFsRSxHQUFHLEdBQUcsU0FBNEQ7b0JBQ3hFLHNCQUFPLEdBQUcsRUFBQTs7OztDQUNYO0FBSEQsb0NBR0M7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFzQixXQUFXLENBQUMsR0FBVzs7Ozs7d0JBQy9CLHFCQUFNLFlBQVksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFBOztvQkFBaEQsR0FBRyxHQUFHLFNBQTBDO29CQUN0RCxzQkFBTyxHQUFHLEVBQUE7Ozs7Q0FDWDtBQUhELGtDQUdDO0FBRUQsa0JBQWUsRUFBRSxZQUFZLGNBQUEsRUFBRSxZQUFZLGNBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFBIn0=

/***/ }),

/***/ "1991":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var invoke = __webpack_require__("31f4");
var html = __webpack_require__("fab2");
var cel = __webpack_require__("230e");
var global = __webpack_require__("7726");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("2d95")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
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

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "31f4":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
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
  } return fn.apply(that, args);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "3662":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 加载CSS
 *
 * @author Y3G
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("9ab4");
var cache_1 = tslib_1.__importStar(__webpack_require__("bd09"));
function installACSS(url) {
    var item = cache_1.default.item(url);
    var status = item.status, error = item.error;
    if (status === cache_1.CacheStatus.LOADED) {
        return Promise.resolve();
    }
    if (status === cache_1.CacheStatus.ERROR) {
        return Promise.reject(error);
    }
    if (status === cache_1.CacheStatus.LOADING) {
        return new Promise(function (resolve, reject) {
            var el = item.el;
            var loadCallback = function () {
                el.removeEventListener('load', loadCallback);
                resolve();
            };
            var errorCallback = function (evt) {
                el.removeEventListener('error', errorCallback);
                reject(evt.error);
            };
            el.addEventListener('load', loadCallback);
            el.addEventListener('error', errorCallback);
        });
    }
    item.status = cache_1.CacheStatus.LOADING;
    return new Promise(function (resolve, reject) {
        var el = document.createElement('link');
        el.rel = 'stylesheet';
        el.href = url;
        var loadCallback = function () {
            el.removeEventListener('load', loadCallback);
            item.status = cache_1.CacheStatus.LOADED;
            item.el = null;
            resolve();
        };
        var errorCallback = function (evt) {
            el.removeEventListener('error', errorCallback);
            var error = evt.error || new Error("Load css failed. href=" + url);
            item.status = cache_1.CacheStatus.ERROR;
            item.error = error;
            item.el = null;
            reject(error);
        };
        el.addEventListener('load', loadCallback);
        el.addEventListener('error', errorCallback);
        item.el = el;
        document.head.appendChild(el);
    });
}
function installCSS(urls) {
    return Promise.all(urls.map(function (url) { return installACSS(url); })).then(function () {
        return Promise.resolve();
    }).catch(function (err) {
        return Promise.reject(err);
    });
}
exports.default = installCSS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbENTUy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnN0YWxsQ1NTLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHOzs7QUFFSCx1REFBNEM7QUFFNUMsU0FBUyxXQUFXLENBQUUsR0FBVztJQUMvQixJQUFNLElBQUksR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BCLElBQUEsb0JBQU0sRUFBRSxrQkFBSyxDQUFTO0lBRTlCLElBQUksTUFBTSxLQUFLLG1CQUFXLENBQUMsTUFBTSxFQUFFO1FBQ2pDLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO0tBQ3pCO0lBRUQsSUFBSSxNQUFNLEtBQUssbUJBQVcsQ0FBQyxLQUFLLEVBQUU7UUFDaEMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQzdCO0lBRUQsSUFBSSxNQUFNLEtBQUssbUJBQVcsQ0FBQyxPQUFPLEVBQUU7UUFDbEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3pCLElBQUEsWUFBRSxDQUFTO1lBQ25CLElBQU0sWUFBWSxHQUFHO2dCQUNuQixFQUFHLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFBO2dCQUM3QyxPQUFPLEVBQUUsQ0FBQTtZQUNYLENBQUMsQ0FBQTtZQUNELElBQU0sYUFBYSxHQUFHLFVBQUMsR0FBZTtnQkFDcEMsRUFBRyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQTtnQkFDL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNuQixDQUFDLENBQUE7WUFFRCxFQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFBO1lBQzFDLEVBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUE7UUFDOUMsQ0FBQyxDQUFDLENBQUE7S0FDSDtJQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQVcsQ0FBQyxPQUFPLENBQUE7SUFFakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFekMsRUFBRSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUE7UUFDckIsRUFBRSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUE7UUFFYixJQUFNLFlBQVksR0FBRztZQUNuQixFQUFFLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFBO1lBRTVDLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQVcsQ0FBQyxNQUFNLENBQUE7WUFDaEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUE7WUFDZCxPQUFPLEVBQUUsQ0FBQTtRQUNYLENBQUMsQ0FBQTtRQUVELElBQU0sYUFBYSxHQUFHLFVBQUMsR0FBZTtZQUNwQyxFQUFHLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFBO1lBRS9DLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsMkJBQXlCLEdBQUssQ0FBQyxDQUFBO1lBRXBFLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQVcsQ0FBQyxLQUFLLENBQUE7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7WUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUE7WUFFZCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDZixDQUFDLENBQUE7UUFFRCxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFBO1FBQ3pDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUE7UUFFM0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUE7UUFDWixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUMvQixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFRCxTQUF3QixVQUFVLENBQUUsSUFBbUI7SUFDckQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN6RCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUMxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsVUFBQSxHQUFHO1FBQ1gsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzVCLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQU5ELDZCQU1DIn0=

/***/ }),

/***/ "3cb5":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4a59":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var getIterFn = __webpack_require__("27ee");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "551c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var global = __webpack_require__("7726");
var ctx = __webpack_require__("9b43");
var classof = __webpack_require__("23c6");
var $export = __webpack_require__("5ca1");
var isObject = __webpack_require__("d3f4");
var aFunction = __webpack_require__("d8e8");
var anInstance = __webpack_require__("f605");
var forOf = __webpack_require__("4a59");
var speciesConstructor = __webpack_require__("ebd6");
var task = __webpack_require__("1991").set;
var microtask = __webpack_require__("8079")();
var newPromiseCapabilityModule = __webpack_require__("a5b8");
var perform = __webpack_require__("9c80");
var userAgent = __webpack_require__("a25f");
var promiseResolve = __webpack_require__("bcaa");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("2b4c")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("dcbc")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("7f20")($Promise, PROMISE);
__webpack_require__("7a56")(PROMISE);
Wrapper = __webpack_require__("8378")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("5cc5")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
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

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6ed5":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8079":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var macrotask = __webpack_require__("1991").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("2d95")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "96cf":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
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
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "9ab4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c80":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a094":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 加载JS
 *
 * @author Y3G
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("9ab4");
var cache_1 = tslib_1.__importStar(__webpack_require__("bd09"));
var define_1 = tslib_1.__importDefault(__webpack_require__("d721"));
function doPrivateJob(url) {
    // patch: vc4.5.8+依赖g_config中的appkey
    var re = /legao-comp\/(.*)\/[\d.]+\/web.js$/;
    var match = re.exec(url);
    var win = window;
    if (match && match.length > 0) {
        var appKey = match[1];
        win.g_config = win.g_config || {};
        win.g_config.appKey = appKey;
    }
}
function doInstallAJS(item, url, umd) {
    item.status = cache_1.CacheStatus.LOADING;
    doPrivateJob(url);
    return new Promise(function (resolve, reject) {
        var el = document.createElement('script');
        el.src = url;
        el.async = false; // 保持时序
        el.crossOrigin = 'anonymous'; // 避免window.onerror拿不到脚本的报错
        if (umd) {
            // 用于define函数发生错误时调用, 详见define.ts
            item.reject = reject;
            // 插入加载队列, 详见define.ts
            define_1.default(item);
        }
        var loadCallback = function () {
            el.removeEventListener('load', loadCallback);
            item.status = cache_1.CacheStatus.LOADED;
            item.el = null;
            resolve(item.exportThing);
        };
        var errorCallback = function (evt) {
            el.removeEventListener('error', errorCallback);
            var error = evt.error || new Error("Load javascript failed. src=" + url);
            item.status = cache_1.CacheStatus.ERROR;
            item.error = error;
            item.el = null;
            reject(error);
        };
        el.addEventListener('load', loadCallback);
        el.addEventListener('error', errorCallback);
        item.el = el;
        document.body.appendChild(el);
    });
}
function installAJS(url, umd) {
    var item = cache_1.default.item(url);
    var status = item.status, exportThing = item.exportThing, error = item.error;
    if (status === cache_1.CacheStatus.LOADED) {
        return Promise.resolve(exportThing);
    }
    if (status === cache_1.CacheStatus.ERROR) {
        return Promise.reject(error);
    }
    if (status === cache_1.CacheStatus.LOADING) {
        var el_1 = item.el;
        return new Promise(function (resolve, reject) {
            var loadCallback = function () {
                el_1.removeEventListener('load', loadCallback);
                resolve(item.exportThing);
            };
            var errorCallback = function (evt) {
                el_1.removeEventListener('error', errorCallback);
                reject(evt.error);
            };
            el_1.addEventListener('load', loadCallback);
            el_1.addEventListener('error', errorCallback);
        });
    }
    return doInstallAJS(item, url, umd);
}
function installJS(urls, options) {
    if (options === void 0) { options = { umd: true }; }
    var chain = Promise.resolve();
    var lastIndex = urls.length - 1;
    var umd = options.umd;
    urls.forEach(function (url, index) {
        // 只有最后一个js使用umd模式加载
        var useUmd = umd && (index === lastIndex);
        chain = chain.then(function (_) { return installAJS(url, useUmd); });
    });
    return chain;
}
exports.default = installJS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbEpTLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2luc3RhbGxKUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7O0FBRUgsdURBQXVEO0FBQ3ZELDREQUErQjtBQUUvQixTQUFTLFlBQVksQ0FBRSxHQUFXO0lBQ2hDLG9DQUFvQztJQUNwQyxJQUFNLEVBQUUsR0FBRyxtQ0FBbUMsQ0FBQTtJQUM5QyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzFCLElBQU0sR0FBRyxHQUFRLE1BQU0sQ0FBQTtJQUV2QixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUM3QixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkIsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQTtRQUNqQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7S0FDN0I7QUFDSCxDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsSUFBZSxFQUFFLEdBQVcsRUFBRSxHQUFZO0lBQzlELElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQVcsQ0FBQyxPQUFPLENBQUE7SUFDakMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRWpCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRTNDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO1FBQ1osRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUEsQ0FBQyxPQUFPO1FBQ3hCLEVBQUUsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBLENBQUMsMkJBQTJCO1FBRXhELElBQUksR0FBRyxFQUFFO1lBQ1AsaUNBQWlDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1lBQ3BCLHNCQUFzQjtZQUN0QixnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2Y7UUFFRCxJQUFNLFlBQVksR0FBRztZQUNuQixFQUFFLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFBO1lBRTVDLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQVcsQ0FBQyxNQUFNLENBQUE7WUFDaEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUE7WUFFZCxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQTtRQUVELElBQU0sYUFBYSxHQUFHLFVBQUMsR0FBZTtZQUNwQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFBO1lBRTlDLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsaUNBQStCLEdBQUssQ0FBQyxDQUFBO1lBRTFFLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQVcsQ0FBQyxLQUFLLENBQUE7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7WUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUE7WUFFZCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDZixDQUFDLENBQUE7UUFFRCxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFBO1FBQ3pDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUE7UUFFM0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUE7UUFDWixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUMvQixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBRSxHQUFXLEVBQUUsR0FBWTtJQUM1QyxJQUFNLElBQUksR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BCLElBQUEsb0JBQU0sRUFBRSw4QkFBVyxFQUFFLGtCQUFLLENBQVM7SUFFM0MsSUFBSSxNQUFNLEtBQUssbUJBQVcsQ0FBQyxNQUFNLEVBQUU7UUFDakMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0tBQ3BDO0lBRUQsSUFBSSxNQUFNLEtBQUssbUJBQVcsQ0FBQyxLQUFLLEVBQUU7UUFDaEMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQzdCO0lBRUQsSUFBSSxNQUFNLEtBQUssbUJBQVcsQ0FBQyxPQUFPLEVBQUU7UUFDMUIsSUFBQSxjQUFFLENBQVM7UUFFbkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQU0sWUFBWSxHQUFHO2dCQUNuQixJQUFHLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFBO2dCQUM3QyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQzNCLENBQUMsQ0FBQTtZQUVELElBQU0sYUFBYSxHQUFHLFVBQUMsR0FBZTtnQkFDcEMsSUFBRyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQTtnQkFDL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNuQixDQUFDLENBQUE7WUFFRCxJQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFBO1lBQzFDLElBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUE7UUFDOUMsQ0FBQyxDQUFDLENBQUE7S0FDSDtJQUVELE9BQU8sWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDckMsQ0FBQztBQU1ELFNBQXdCLFNBQVMsQ0FBRSxJQUFtQixFQUFFLE9BQXdDO0lBQXhDLHdCQUFBLEVBQUEsWUFBNkIsR0FBRyxFQUFFLElBQUksRUFBRTtJQUM5RixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDN0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDekIsSUFBQSxpQkFBRyxDQUFZO0lBRXZCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSztRQUN0QixvQkFBb0I7UUFDcEIsSUFBTSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFBO1FBQzNDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFBO0lBQ2xELENBQUMsQ0FBQyxDQUFBO0lBRUYsT0FBTyxLQUFLLENBQUE7QUFDZCxDQUFDO0FBWkQsNEJBWUMifQ==

/***/ }),

/***/ "a25f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "a5b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("d8e8");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "aff7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 入口文件
 *
 * @author Y3G
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__("9ab4");
var importer_1 = tslib_1.__importStar(__webpack_require__("195d"));
exports.importModule = importer_1.importModule;
exports.importScript = importer_1.importScript;
exports.importStyle = importer_1.importStyle;
exports.default = importer_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7OztBQUVILDZEQUE4RTtBQUVyRSx1QkFGVSx1QkFBWSxDQUVWO0FBQUUsdUJBRlUsdUJBQVksQ0FFVjtBQUFFLHNCQUZVLHNCQUFXLENBRVY7QUFFaEQsa0JBQWUsa0JBQVEsQ0FBQSJ9

/***/ }),

/***/ "bcaa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var newPromiseCapability = __webpack_require__("a5b8");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "bd09":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 缓存
 *
 * @author Y3G
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CacheStatus;
(function (CacheStatus) {
    CacheStatus[CacheStatus["NONE"] = 0] = "NONE";
    CacheStatus[CacheStatus["LOADING"] = 1] = "LOADING";
    CacheStatus[CacheStatus["LOADED"] = 2] = "LOADED";
    CacheStatus[CacheStatus["ERROR"] = 3] = "ERROR";
})(CacheStatus = exports.CacheStatus || (exports.CacheStatus = {}));
var Cache = /** @class */ (function () {
    function Cache() {
        this.items = {};
    }
    Cache.prototype.item = function (key) {
        var ret = this.items[key];
        if (ret) {
            return ret;
        }
        ret = this.items[key] = {
            status: CacheStatus.NONE,
            exportThing: void 0,
            el: null,
            error: null,
            reject: null
        };
        return ret;
    };
    return Cache;
}());
exports.default = new Cache();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY2FjaGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7O0FBSUgsSUFBWSxXQUE0QztBQUF4RCxXQUFZLFdBQVc7SUFBRyw2Q0FBSSxDQUFBO0lBQUUsbURBQU8sQ0FBQTtJQUFFLGlEQUFNLENBQUE7SUFBRSwrQ0FBSyxDQUFBO0FBQUMsQ0FBQyxFQUE1QyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUFpQztBQVl4RDtJQUFBO1FBQ0UsVUFBSyxHQUFlLEVBQUUsQ0FBQTtJQW1CeEIsQ0FBQztJQWpCQyxvQkFBSSxHQUFKLFVBQU0sR0FBVztRQUNmLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFekIsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLEdBQUcsQ0FBQTtTQUNYO1FBRUQsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUc7WUFDdEIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxJQUFJO1lBQ3hCLFdBQVcsRUFBRSxLQUFLLENBQUM7WUFDbkIsRUFBRSxFQUFFLElBQUk7WUFDUixLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQTtRQUVELE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBRUQsa0JBQWUsSUFBSSxLQUFLLEVBQUUsQ0FBQSJ9

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d721":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 全局define函数
 *
 * @author Y3G
 */
Object.defineProperty(exports, "__esModule", { value: true });
var cache_1 = __webpack_require__("bd09");
var win = window;
var define = win.define;
var keys = Object.keys;
var hasOtherAMDLoader = false;
if (typeof define !== 'undefined' && !define.runtime_import) {
    console.warn("runtime-import should NOT be used with requiesjs or seajs or any other AMD/CMD loader.");
    hasOtherAMDLoader = true;
}
// 脚本加载队列
var itemQueue = [];
// 模拟AMD, 注意只能用来加载UMD格式的js
var umdDefine = function define() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var factory = args.pop();
    var item = itemQueue.shift();
    if (!item) {
        throw new Error('Can NOT find item.');
    }
    try {
        var externals = args[0] || [];
        var name_1 = null;
        if (typeof externals === 'string') {
            name_1 = externals;
            externals = args[1] || [];
        }
        var exportThing = (item.exportThing = factory.apply(void 0, externals.map(function (el) {
            return win[el];
        })));
        if (name_1) {
            win[name_1] = exportThing;
        }
        if (exportThing && keys(exportThing).length === 1 && exportThing.default) {
            item.exportThing = exportThing.default;
        }
    }
    catch (err) {
        item.status = cache_1.CacheStatus.ERROR;
        item.error = err;
        item.reject(err);
    }
    finally {
        dec();
    }
};
umdDefine.n = 0;
umdDefine.amd = true;
umdDefine.cmd = true;
umdDefine.runtime_import = true;
function inc() {
    umdDefine.n += 1;
    if (umdDefine.n === 1) {
        win.define = umdDefine;
    }
}
function dec() {
    umdDefine.n -= 1;
    if (umdDefine.n === 0) {
        delete win.define;
    }
    else if (umdDefine.n < 0) {
        umdDefine.n = 0;
    }
}
function pushItem(item) {
    if (hasOtherAMDLoader) {
        throw new Error("runtime-import UMD mode uses window.define, your should NOT have your own window.define.");
    }
    itemQueue.push(item);
    inc();
}
exports.default = pushItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRzs7QUFFSCxpQ0FBZ0Q7QUFFaEQsSUFBTSxHQUFHLEdBQVEsTUFBTSxDQUFBO0FBQ2YsSUFBQSxtQkFBTSxDQUFRO0FBQ2QsSUFBQSxrQkFBSSxDQUFXO0FBRXZCLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFBO0FBRTdCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtJQUMzRCxPQUFPLENBQUMsSUFBSSxDQUFDLHdGQUF3RixDQUFDLENBQUE7SUFDdEcsaUJBQWlCLEdBQUcsSUFBSSxDQUFBO0NBQ3pCO0FBRUQsU0FBUztBQUNULElBQU0sU0FBUyxHQUFxQixFQUFFLENBQUE7QUFVdEMsMEJBQTBCO0FBQzFCLElBQU0sU0FBUyxHQUFlLFNBQVMsTUFBTTtJQUFDLGNBQW1CO1NBQW5CLFVBQW1CLEVBQW5CLHFCQUFtQixFQUFuQixJQUFtQjtRQUFuQix5QkFBbUI7O0lBQy9ELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUN4QixJQUFNLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7SUFFOUIsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtLQUN0QztJQUVELElBQUk7UUFDRixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzdCLElBQUksTUFBSSxHQUFHLElBQUksQ0FBQTtRQUVmLElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQ2pDLE1BQUksR0FBRyxTQUFTLENBQUE7WUFDaEIsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDMUI7UUFFRCxJQUFNLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxlQUMxQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBVTtZQUMxQixPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNoQixDQUFDLENBQUMsQ0FDSCxDQUFDLENBQUE7UUFFRixJQUFJLE1BQUksRUFBRTtZQUNSLEdBQUcsQ0FBQyxNQUFJLENBQUMsR0FBRyxXQUFXLENBQUE7U0FDeEI7UUFFRCxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3hFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQTtTQUN2QztLQUNGO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFXLENBQUMsS0FBSyxDQUFBO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQ2hCLElBQUksQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDbEI7WUFBUztRQUNSLEdBQUcsRUFBRSxDQUFBO0tBQ047QUFDSCxDQUFDLENBQUE7QUFFRCxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNmLFNBQVMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFBO0FBQ3BCLFNBQVMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFBO0FBQ3BCLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFBO0FBRS9CLFNBQVMsR0FBRztJQUNWLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRWhCLElBQUksU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDckIsR0FBRyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUE7S0FDdkI7QUFDSCxDQUFDO0FBRUQsU0FBUyxHQUFHO0lBQ1YsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFaEIsSUFBSSxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNyQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUE7S0FDbEI7U0FBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzFCLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ2hCO0FBQ0gsQ0FBQztBQUVELFNBQXdCLFFBQVEsQ0FBQyxJQUFlO0lBQzlDLElBQUksaUJBQWlCLEVBQUU7UUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQywwRkFBMEYsQ0FBQyxDQUFBO0tBQzVHO0lBRUQsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNwQixHQUFHLEVBQUUsQ0FBQTtBQUNQLENBQUM7QUFQRCwyQkFPQyJ9

/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "dcbc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("2aba");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "f605":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e6c8c7c4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/RemoteView.vue?vue&type=template&id=f4344d56&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.mode,_vm._g(_vm._b({tag:"component"},'component',_vm.$attrs,false),_vm.$listeners))}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/RemoteView.vue?vue&type=template&id=f4344d56&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/runtime-import/lib/index.js
var lib = __webpack_require__("aff7");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/RemoteView.vue?vue&type=script&lang=js&



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//



if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('RemoteView', component.exports);
}

/* harmony default export */ var RemoteViewvue_type_script_lang_js_ = ({
  name: 'RemoteView',
  inheritAttrs: true,
  props: {
    viewName: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      mode: '',
      $libURL: 'http://127.0.0.1:5500/components/'
    };
  },
  watch: {
    viewName: {
      immediate: true,
      handler: function () {
        var _handler = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(name) {
          var _component;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (name) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _context.prev = 2;
                  _context.next = 5;
                  return Object(lib["importScript"])("".concat(this.$libURL + name, "/").concat(name, ".umd.min.js"));

                case 5:
                  _component = _context.sent;
                  this.mode = name;
                  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(this.mode, _component);
                  _context.next = 14;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](2);
                  this.mode = '';
                  console.warn('js加载错误,请检查组件名是否正确');

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[2, 10]]);
        }));

        function handler(_x) {
          return _handler.apply(this, arguments);
        }

        return handler;
      }()
    }
  }
});
// CONCATENATED MODULE: ./src/RemoteView.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_RemoteViewvue_type_script_lang_js_ = (RemoteViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// EXTERNAL MODULE: ./src/RemoteView.vue?vue&type=custom&index=0&blockType=meta
var RemoteViewvue_type_custom_index_0_blockType_meta = __webpack_require__("6ed5");
var RemoteViewvue_type_custom_index_0_blockType_meta_default = /*#__PURE__*/__webpack_require__.n(RemoteViewvue_type_custom_index_0_blockType_meta);

// EXTERNAL MODULE: ./src/RemoteView.vue?vue&type=custom&index=1&blockType=example
var RemoteViewvue_type_custom_index_1_blockType_example = __webpack_require__("3cb5");
var RemoteViewvue_type_custom_index_1_blockType_example_default = /*#__PURE__*/__webpack_require__.n(RemoteViewvue_type_custom_index_1_blockType_example);

// CONCATENATED MODULE: ./src/RemoteView.vue





/* normalize component */

var RemoteView_component = normalizeComponent(
  src_RemoteViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof RemoteViewvue_type_custom_index_0_blockType_meta_default.a === 'function') RemoteViewvue_type_custom_index_0_blockType_meta_default()(RemoteView_component)

if (typeof RemoteViewvue_type_custom_index_1_blockType_example_default.a === 'function') RemoteViewvue_type_custom_index_1_blockType_example_default()(RemoteView_component)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('RemoteView', RemoteView_component.exports)
}
/* harmony default export */ var RemoteView = (RemoteView_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (RemoteView);



/***/ })

/******/ })["default"];
});