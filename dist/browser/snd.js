
  /**
   * @license
   * Snd.js v1.0.0
   * Released under the MIT License.
   */

var Snd = (function () {
	'use strict';

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var src = {};

	function _typeof(o) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	  }, _typeof(o);
	}

	/******************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise, SuppressedError, Symbol */

	var _extendStatics = function extendStatics(d, b) {
	  _extendStatics = Object.setPrototypeOf || {
	    __proto__: []
	  } instanceof Array && function (d, b) {
	    d.__proto__ = b;
	  } || function (d, b) {
	    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
	  };
	  return _extendStatics(d, b);
	};
	function __extends(d, b) {
	  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	  _extendStatics(d, b);
	  function __() {
	    this.constructor = d;
	  }
	  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	var _assign = function __assign() {
	  _assign = Object.assign || function __assign(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	      s = arguments[i];
	      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	    }
	    return t;
	  };
	  return _assign.apply(this, arguments);
	};
	function __rest(s, e) {
	  var t = {};
	  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	}
	function __decorate(decorators, target, key, desc) {
	  var c = arguments.length,
	    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	    d;
	  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	  return c > 3 && r && Object.defineProperty(target, key, r), r;
	}
	function __param(paramIndex, decorator) {
	  return function (target, key) {
	    decorator(target, key, paramIndex);
	  };
	}
	function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
	  function accept(f) {
	    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
	    return f;
	  }
	  var kind = contextIn.kind,
	    key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
	  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
	  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
	  var _,
	    done = false;
	  for (var i = decorators.length - 1; i >= 0; i--) {
	    var context = {};
	    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
	    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
	    context.addInitializer = function (f) {
	      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
	      extraInitializers.push(accept(f || null));
	    };
	    var result = (0, decorators[i])(kind === "accessor" ? {
	      get: descriptor.get,
	      set: descriptor.set
	    } : descriptor[key], context);
	    if (kind === "accessor") {
	      if (result === void 0) continue;
	      if (result === null || _typeof(result) !== "object") throw new TypeError("Object expected");
	      if (_ = accept(result.get)) descriptor.get = _;
	      if (_ = accept(result.set)) descriptor.set = _;
	      if (_ = accept(result.init)) initializers.unshift(_);
	    } else if (_ = accept(result)) {
	      if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
	    }
	  }
	  if (target) Object.defineProperty(target, contextIn.name, descriptor);
	  done = true;
	}
	function __runInitializers(thisArg, initializers, value) {
	  var useValue = arguments.length > 2;
	  for (var i = 0; i < initializers.length; i++) {
	    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
	  }
	  return useValue ? value : void 0;
	}
	function __propKey(x) {
	  return _typeof(x) === "symbol" ? x : "".concat(x);
	}
	function __setFunctionName(f, name, prefix) {
	  if (_typeof(name) === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
	  return Object.defineProperty(f, "name", {
	    configurable: true,
	    value: prefix ? "".concat(prefix, " ", name) : name
	  });
	}
	function __metadata(metadataKey, metadataValue) {
	  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	}
	function __awaiter(thisArg, _arguments, P, generator) {
	  function adopt(value) {
	    return value instanceof P ? value : new P(function (resolve) {
	      resolve(value);
	    });
	  }
	  return new (P || (P = Promise))(function (resolve, reject) {
	    function fulfilled(value) {
	      try {
	        step(generator.next(value));
	      } catch (e) {
	        reject(e);
	      }
	    }
	    function rejected(value) {
	      try {
	        step(generator["throw"](value));
	      } catch (e) {
	        reject(e);
	      }
	    }
	    function step(result) {
	      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
	    }
	    step((generator = generator.apply(thisArg, _arguments || [])).next());
	  });
	}
	function __generator(thisArg, body) {
	  var _ = {
	      label: 0,
	      sent: function sent() {
	        if (t[0] & 1) throw t[1];
	        return t[1];
	      },
	      trys: [],
	      ops: []
	    },
	    f,
	    y,
	    t,
	    g;
	  return g = {
	    next: verb(0),
	    "throw": verb(1),
	    "return": verb(2)
	  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
	    return this;
	  }), g;
	  function verb(n) {
	    return function (v) {
	      return step([n, v]);
	    };
	  }
	  function step(op) {
	    if (f) throw new TypeError("Generator is already executing.");
	    while (g && (g = 0, op[0] && (_ = 0)), _) try {
	      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	      if (y = 0, t) op = [op[0] & 2, t.value];
	      switch (op[0]) {
	        case 0:
	        case 1:
	          t = op;
	          break;
	        case 4:
	          _.label++;
	          return {
	            value: op[1],
	            done: false
	          };
	        case 5:
	          _.label++;
	          y = op[1];
	          op = [0];
	          continue;
	        case 7:
	          op = _.ops.pop();
	          _.trys.pop();
	          continue;
	        default:
	          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
	            _ = 0;
	            continue;
	          }
	          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
	            _.label = op[1];
	            break;
	          }
	          if (op[0] === 6 && _.label < t[1]) {
	            _.label = t[1];
	            t = op;
	            break;
	          }
	          if (t && _.label < t[2]) {
	            _.label = t[2];
	            _.ops.push(op);
	            break;
	          }
	          if (t[2]) _.ops.pop();
	          _.trys.pop();
	          continue;
	      }
	      op = body.call(thisArg, _);
	    } catch (e) {
	      op = [6, e];
	      y = 0;
	    } finally {
	      f = t = 0;
	    }
	    if (op[0] & 5) throw op[1];
	    return {
	      value: op[0] ? op[1] : void 0,
	      done: true
	    };
	  }
	}
	var __createBinding = Object.create ? function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  var desc = Object.getOwnPropertyDescriptor(m, k);
	  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	    desc = {
	      enumerable: true,
	      get: function get() {
	        return m[k];
	      }
	    };
	  }
	  Object.defineProperty(o, k2, desc);
	} : function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  o[k2] = m[k];
	};
	function __exportStar(m, o) {
	  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
	}
	function __values(o) {
	  var s = typeof Symbol === "function" && Symbol.iterator,
	    m = s && o[s],
	    i = 0;
	  if (m) return m.call(o);
	  if (o && typeof o.length === "number") return {
	    next: function next() {
	      if (o && i >= o.length) o = void 0;
	      return {
	        value: o && o[i++],
	        done: !o
	      };
	    }
	  };
	  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function __read(o, n) {
	  var m = typeof Symbol === "function" && o[Symbol.iterator];
	  if (!m) return o;
	  var i = m.call(o),
	    r,
	    ar = [],
	    e;
	  try {
	    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	  } catch (error) {
	    e = {
	      error: error
	    };
	  } finally {
	    try {
	      if (r && !r.done && (m = i["return"])) m.call(i);
	    } finally {
	      if (e) throw e.error;
	    }
	  }
	  return ar;
	}

	/** @deprecated */
	function __spread() {
	  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
	  return ar;
	}

	/** @deprecated */
	function __spreadArrays() {
	  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
	  return r;
	}
	function __spreadArray(to, from, pack) {
	  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	    if (ar || !(i in from)) {
	      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	      ar[i] = from[i];
	    }
	  }
	  return to.concat(ar || Array.prototype.slice.call(from));
	}
	function __await(v) {
	  return this instanceof __await ? (this.v = v, this) : new __await(v);
	}
	function __asyncGenerator(thisArg, _arguments, generator) {
	  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	  var g = generator.apply(thisArg, _arguments || []),
	    i,
	    q = [];
	  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
	    return this;
	  }, i;
	  function verb(n) {
	    if (g[n]) i[n] = function (v) {
	      return new Promise(function (a, b) {
	        q.push([n, v, a, b]) > 1 || resume(n, v);
	      });
	    };
	  }
	  function resume(n, v) {
	    try {
	      step(g[n](v));
	    } catch (e) {
	      settle(q[0][3], e);
	    }
	  }
	  function step(r) {
	    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
	  }
	  function fulfill(value) {
	    resume("next", value);
	  }
	  function reject(value) {
	    resume("throw", value);
	  }
	  function settle(f, v) {
	    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
	  }
	}
	function __asyncDelegator(o) {
	  var i, p;
	  return i = {}, verb("next"), verb("throw", function (e) {
	    throw e;
	  }), verb("return"), i[Symbol.iterator] = function () {
	    return this;
	  }, i;
	  function verb(n, f) {
	    i[n] = o[n] ? function (v) {
	      return (p = !p) ? {
	        value: __await(o[n](v)),
	        done: false
	      } : f ? f(v) : v;
	    } : f;
	  }
	}
	function __asyncValues(o) {
	  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	  var m = o[Symbol.asyncIterator],
	    i;
	  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
	    return this;
	  }, i);
	  function verb(n) {
	    i[n] = o[n] && function (v) {
	      return new Promise(function (resolve, reject) {
	        v = o[n](v), settle(resolve, reject, v.done, v.value);
	      });
	    };
	  }
	  function settle(resolve, reject, d, v) {
	    Promise.resolve(v).then(function (v) {
	      resolve({
	        value: v,
	        done: d
	      });
	    }, reject);
	  }
	}
	function __makeTemplateObject(cooked, raw) {
	  if (Object.defineProperty) {
	    Object.defineProperty(cooked, "raw", {
	      value: raw
	    });
	  } else {
	    cooked.raw = raw;
	  }
	  return cooked;
	}
	var __setModuleDefault = Object.create ? function (o, v) {
	  Object.defineProperty(o, "default", {
	    enumerable: true,
	    value: v
	  });
	} : function (o, v) {
	  o["default"] = v;
	};
	function __importStar(mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	  __setModuleDefault(result, mod);
	  return result;
	}
	function __importDefault(mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	}
	function __classPrivateFieldGet(receiver, state, kind, f) {
	  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	}
	function __classPrivateFieldSet(receiver, state, value, kind, f) {
	  if (kind === "m") throw new TypeError("Private method is not writable");
	  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
	}
	function __classPrivateFieldIn(state, receiver) {
	  if (receiver === null || _typeof(receiver) !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
	  return typeof state === "function" ? receiver === state : state.has(receiver);
	}
	function __addDisposableResource(env, value, async) {
	  if (value !== null && value !== void 0) {
	    if (_typeof(value) !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
	    var dispose;
	    if (async) {
	      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
	      dispose = value[Symbol.asyncDispose];
	    }
	    if (dispose === void 0) {
	      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
	      dispose = value[Symbol.dispose];
	    }
	    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
	    env.stack.push({
	      value: value,
	      dispose: dispose,
	      async: async
	    });
	  } else if (async) {
	    env.stack.push({
	      async: true
	    });
	  }
	  return value;
	}
	var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
	  var e = new Error(message);
	  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
	};
	function __disposeResources(env) {
	  function fail(e) {
	    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
	    env.hasError = true;
	  }
	  function next() {
	    while (env.stack.length) {
	      var rec = env.stack.pop();
	      try {
	        var result = rec.dispose && rec.dispose.call(rec.value);
	        if (rec.async) return Promise.resolve(result).then(next, function (e) {
	          fail(e);
	          return next();
	        });
	      } catch (e) {
	        fail(e);
	      }
	    }
	    if (env.hasError) throw env.error;
	  }
	  return next();
	}
	var tslib_es6 = {
	  __extends: __extends,
	  __assign: _assign,
	  __rest: __rest,
	  __decorate: __decorate,
	  __param: __param,
	  __metadata: __metadata,
	  __awaiter: __awaiter,
	  __generator: __generator,
	  __createBinding: __createBinding,
	  __exportStar: __exportStar,
	  __values: __values,
	  __read: __read,
	  __spread: __spread,
	  __spreadArrays: __spreadArrays,
	  __spreadArray: __spreadArray,
	  __await: __await,
	  __asyncGenerator: __asyncGenerator,
	  __asyncDelegator: __asyncDelegator,
	  __asyncValues: __asyncValues,
	  __makeTemplateObject: __makeTemplateObject,
	  __importStar: __importStar,
	  __importDefault: __importDefault,
	  __classPrivateFieldGet: __classPrivateFieldGet,
	  __classPrivateFieldSet: __classPrivateFieldSet,
	  __classPrivateFieldIn: __classPrivateFieldIn,
	  __addDisposableResource: __addDisposableResource,
	  __disposeResources: __disposeResources
	};

	var tslib_es6$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		__extends: __extends,
		get __assign () { return _assign; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__esDecorate: __esDecorate,
		__runInitializers: __runInitializers,
		__propKey: __propKey,
		__setFunctionName: __setFunctionName,
		__metadata: __metadata,
		__awaiter: __awaiter,
		__generator: __generator,
		__createBinding: __createBinding,
		__exportStar: __exportStar,
		__values: __values,
		__read: __read,
		__spread: __spread,
		__spreadArrays: __spreadArrays,
		__spreadArray: __spreadArray,
		__await: __await,
		__asyncGenerator: __asyncGenerator,
		__asyncDelegator: __asyncDelegator,
		__asyncValues: __asyncValues,
		__makeTemplateObject: __makeTemplateObject,
		__importStar: __importStar,
		__importDefault: __importDefault,
		__classPrivateFieldGet: __classPrivateFieldGet,
		__classPrivateFieldSet: __classPrivateFieldSet,
		__classPrivateFieldIn: __classPrivateFieldIn,
		__addDisposableResource: __addDisposableResource,
		__disposeResources: __disposeResources,
		'default': tslib_es6
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(tslib_es6$1);

	var snd = {};

	var eventemitter3 = {exports: {}};

	(function (module) {

	  var has = Object.prototype.hasOwnProperty,
	    prefix = '~';

	  /**
	   * Constructor to create a storage for our `EE` objects.
	   * An `Events` instance is a plain object whose properties are event names.
	   *
	   * @constructor
	   * @private
	   */
	  function Events() {}

	  //
	  // We try to not inherit from `Object.prototype`. In some engines creating an
	  // instance in this way is faster than calling `Object.create(null)` directly.
	  // If `Object.create(null)` is not supported we prefix the event names with a
	  // character to make sure that the built-in object properties are not
	  // overridden or used as an attack vector.
	  //
	  if (Object.create) {
	    Events.prototype = Object.create(null);

	    //
	    // This hack is needed because the `__proto__` property is still inherited in
	    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	    //
	    if (!new Events().__proto__) prefix = false;
	  }

	  /**
	   * Representation of a single event listener.
	   *
	   * @param {Function} fn The listener function.
	   * @param {*} context The context to invoke the listener with.
	   * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	   * @constructor
	   * @private
	   */
	  function EE(fn, context, once) {
	    this.fn = fn;
	    this.context = context;
	    this.once = once || false;
	  }

	  /**
	   * Add a listener for a given event.
	   *
	   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	   * @param {(String|Symbol)} event The event name.
	   * @param {Function} fn The listener function.
	   * @param {*} context The context to invoke the listener with.
	   * @param {Boolean} once Specify if the listener is a one-time listener.
	   * @returns {EventEmitter}
	   * @private
	   */
	  function addListener(emitter, event, fn, context, once) {
	    if (typeof fn !== 'function') {
	      throw new TypeError('The listener must be a function');
	    }
	    var listener = new EE(fn, context || emitter, once),
	      evt = prefix ? prefix + event : event;
	    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
	    return emitter;
	  }

	  /**
	   * Clear event by name.
	   *
	   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	   * @param {(String|Symbol)} evt The Event name.
	   * @private
	   */
	  function clearEvent(emitter, evt) {
	    if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
	  }

	  /**
	   * Minimal `EventEmitter` interface that is molded against the Node.js
	   * `EventEmitter` interface.
	   *
	   * @constructor
	   * @public
	   */
	  function EventEmitter() {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  /**
	   * Return an array listing the events for which the emitter has registered
	   * listeners.
	   *
	   * @returns {Array}
	   * @public
	   */
	  EventEmitter.prototype.eventNames = function eventNames() {
	    var names = [],
	      events,
	      name;
	    if (this._eventsCount === 0) return names;
	    for (name in events = this._events) {
	      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	    }
	    if (Object.getOwnPropertySymbols) {
	      return names.concat(Object.getOwnPropertySymbols(events));
	    }
	    return names;
	  };

	  /**
	   * Return the listeners registered for a given event.
	   *
	   * @param {(String|Symbol)} event The event name.
	   * @returns {Array} The registered listeners.
	   * @public
	   */
	  EventEmitter.prototype.listeners = function listeners(event) {
	    var evt = prefix ? prefix + event : event,
	      handlers = this._events[evt];
	    if (!handlers) return [];
	    if (handlers.fn) return [handlers.fn];
	    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	      ee[i] = handlers[i].fn;
	    }
	    return ee;
	  };

	  /**
	   * Return the number of listeners listening to a given event.
	   *
	   * @param {(String|Symbol)} event The event name.
	   * @returns {Number} The number of listeners.
	   * @public
	   */
	  EventEmitter.prototype.listenerCount = function listenerCount(event) {
	    var evt = prefix ? prefix + event : event,
	      listeners = this._events[evt];
	    if (!listeners) return 0;
	    if (listeners.fn) return 1;
	    return listeners.length;
	  };

	  /**
	   * Calls each of the listeners registered for a given event.
	   *
	   * @param {(String|Symbol)} event The event name.
	   * @returns {Boolean} `true` if the event had listeners, else `false`.
	   * @public
	   */
	  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	    var evt = prefix ? prefix + event : event;
	    if (!this._events[evt]) return false;
	    var listeners = this._events[evt],
	      len = arguments.length,
	      args,
	      i;
	    if (listeners.fn) {
	      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	      switch (len) {
	        case 1:
	          return listeners.fn.call(listeners.context), true;
	        case 2:
	          return listeners.fn.call(listeners.context, a1), true;
	        case 3:
	          return listeners.fn.call(listeners.context, a1, a2), true;
	        case 4:
	          return listeners.fn.call(listeners.context, a1, a2, a3), true;
	        case 5:
	          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	        case 6:
	          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	      }
	      for (i = 1, args = new Array(len - 1); i < len; i++) {
	        args[i - 1] = arguments[i];
	      }
	      listeners.fn.apply(listeners.context, args);
	    } else {
	      var length = listeners.length,
	        j;
	      for (i = 0; i < length; i++) {
	        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	        switch (len) {
	          case 1:
	            listeners[i].fn.call(listeners[i].context);
	            break;
	          case 2:
	            listeners[i].fn.call(listeners[i].context, a1);
	            break;
	          case 3:
	            listeners[i].fn.call(listeners[i].context, a1, a2);
	            break;
	          case 4:
	            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
	            break;
	          default:
	            if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
	              args[j - 1] = arguments[j];
	            }
	            listeners[i].fn.apply(listeners[i].context, args);
	        }
	      }
	    }
	    return true;
	  };

	  /**
	   * Add a listener for a given event.
	   *
	   * @param {(String|Symbol)} event The event name.
	   * @param {Function} fn The listener function.
	   * @param {*} [context=this] The context to invoke the listener with.
	   * @returns {EventEmitter} `this`.
	   * @public
	   */
	  EventEmitter.prototype.on = function on(event, fn, context) {
	    return addListener(this, event, fn, context, false);
	  };

	  /**
	   * Add a one-time listener for a given event.
	   *
	   * @param {(String|Symbol)} event The event name.
	   * @param {Function} fn The listener function.
	   * @param {*} [context=this] The context to invoke the listener with.
	   * @returns {EventEmitter} `this`.
	   * @public
	   */
	  EventEmitter.prototype.once = function once(event, fn, context) {
	    return addListener(this, event, fn, context, true);
	  };

	  /**
	   * Remove the listeners of a given event.
	   *
	   * @param {(String|Symbol)} event The event name.
	   * @param {Function} fn Only remove the listeners that match this function.
	   * @param {*} context Only remove the listeners that have this context.
	   * @param {Boolean} once Only remove one-time listeners.
	   * @returns {EventEmitter} `this`.
	   * @public
	   */
	  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	    var evt = prefix ? prefix + event : event;
	    if (!this._events[evt]) return this;
	    if (!fn) {
	      clearEvent(this, evt);
	      return this;
	    }
	    var listeners = this._events[evt];
	    if (listeners.fn) {
	      if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
	        clearEvent(this, evt);
	      }
	    } else {
	      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
	          events.push(listeners[i]);
	        }
	      }

	      //
	      // Reset the array, or remove it completely if we have no more listeners.
	      //
	      if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
	    }
	    return this;
	  };

	  /**
	   * Remove all listeners, or those of the specified event.
	   *
	   * @param {(String|Symbol)} [event] The event name.
	   * @returns {EventEmitter} `this`.
	   * @public
	   */
	  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	    var evt;
	    if (event) {
	      evt = prefix ? prefix + event : event;
	      if (this._events[evt]) clearEvent(this, evt);
	    } else {
	      this._events = new Events();
	      this._eventsCount = 0;
	    }
	    return this;
	  };

	  //
	  // Alias methods names because people roll like that.
	  //
	  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	  //
	  // Expose the prefix.
	  //
	  EventEmitter.prefixed = prefix;

	  //
	  // Allow `EventEmitter` to be imported as module namespace.
	  //
	  EventEmitter.EventEmitter = EventEmitter;

	  //
	  // Expose the module.
	  //
	  {
	    module.exports = EventEmitter;
	  }
	})(eventemitter3);

	var constant = {};

	var resources$2 = [
		"./assets/sounds/sprite/01/audioSprite.ogg",
		"./assets/sounds/sprite/01/audioSprite.m4a",
		"./assets/sounds/sprite/01/audioSprite.mp3",
		"./assets/sounds/sprite/01/audioSprite.ac3"
	];
	var spritemap$2 = {
		button: {
			start: 0,
			end: 0.1001814058956916,
			loop: false
		},
		caution: {
			start: 2,
			end: 2.160544217687075,
			loop: false
		},
		celebration: {
			start: 4,
			end: 5,
			loop: false
		},
		disabled: {
			start: 6,
			end: 6.070113378684807,
			loop: false
		},
		notification: {
			start: 8,
			end: 8.30031746031746,
			loop: false
		},
		progress_loop: {
			start: 10,
			end: 11.5,
			loop: false
		},
		ringtone_loop: {
			start: 13,
			end: 15,
			loop: false
		},
		select: {
			start: 16,
			end: 16.1,
			loop: false
		},
		swipe: {
			start: 18,
			end: 18.15,
			loop: false
		},
		swipe_01: {
			start: 20,
			end: 20.15,
			loop: false
		},
		swipe_02: {
			start: 22,
			end: 22.150272108843538,
			loop: false
		},
		swipe_03: {
			start: 24,
			end: 24.150272108843538,
			loop: false
		},
		swipe_04: {
			start: 26,
			end: 26.15,
			loop: false
		},
		swipe_05: {
			start: 28,
			end: 28.15,
			loop: false
		},
		tap_01: {
			start: 30,
			end: 30.01,
			loop: false
		},
		tap_02: {
			start: 32,
			end: 32.01,
			loop: false
		},
		tap_03: {
			start: 34,
			end: 34.01004535147392,
			loop: false
		},
		tap_04: {
			start: 36,
			end: 36.01002267573696,
			loop: false
		},
		tap_05: {
			start: 38,
			end: 38.01,
			loop: false
		},
		toggle_off: {
			start: 40,
			end: 40.09972789115646,
			loop: false
		},
		toggle_on: {
			start: 42,
			end: 42.09972789115646,
			loop: false
		},
		transition_down: {
			start: 44,
			end: 44.10018140589569,
			loop: false
		},
		transition_up: {
			start: 46,
			end: 46.10063492063492,
			loop: false
		},
		type_01: {
			start: 48,
			end: 48.010068027210885,
			loop: false
		},
		type_02: {
			start: 50,
			end: 50.01011337868481,
			loop: false
		},
		type_03: {
			start: 52,
			end: 52.010068027210885,
			loop: false
		},
		type_04: {
			start: 54,
			end: 54.0102947845805,
			loop: false
		},
		type_05: {
			start: 56,
			end: 56.01011337868481,
			loop: false
		}
	};
	var require$$1 = {
		resources: resources$2,
		spritemap: spritemap$2
	};

	var resources$1 = [
		"./assets/sounds/sprite/02/audioSprite.ogg",
		"./assets/sounds/sprite/02/audioSprite.m4a",
		"./assets/sounds/sprite/02/audioSprite.mp3",
		"./assets/sounds/sprite/02/audioSprite.ac3"
	];
	var spritemap$1 = {
		button: {
			start: 0,
			end: 0.5513151927437642,
			loop: false
		},
		caution: {
			start: 2,
			end: 2.499750566893424,
			loop: false
		},
		celebration: {
			start: 4,
			end: 7.001179138321996,
			loop: false
		},
		disabled: {
			start: 9,
			end: 9.499115646258504,
			loop: false
		},
		notification: {
			start: 11,
			end: 14.0037641723356,
			loop: false
		},
		progress_loop: {
			start: 16,
			end: 17.892199546485262,
			loop: false
		},
		ringtone_loop: {
			start: 19,
			end: 20.66204081632653,
			loop: false
		},
		select: {
			start: 22,
			end: 22.26063492063492,
			loop: false
		},
		swipe_01: {
			start: 24,
			end: 24.209115646258503,
			loop: false
		},
		swipe_02: {
			start: 26,
			end: 26.230566893424037,
			loop: false
		},
		swipe_03: {
			start: 28,
			end: 28.230385487528345,
			loop: false
		},
		swipe_04: {
			start: 30,
			end: 30.23963718820862,
			loop: false
		},
		swipe_05: {
			start: 32,
			end: 32.196281179138325,
			loop: false
		},
		tap_01: {
			start: 34,
			end: 34.19621315192744,
			loop: false
		},
		tap_02: {
			start: 36,
			end: 36.21399092970522,
			loop: false
		},
		tap_03: {
			start: 38,
			end: 38.2343537414966,
			loop: false
		},
		tap_04: {
			start: 40,
			end: 40.19183673469388,
			loop: false
		},
		tap_05: {
			start: 42,
			end: 42.21993197278911,
			loop: false
		},
		toggle_off: {
			start: 44,
			end: 44.55002267573696,
			loop: false
		},
		toggle_on: {
			start: 46,
			end: 46.51664399092971,
			loop: false
		},
		transition_down: {
			start: 48,
			end: 48.7502947845805,
			loop: false
		},
		transition_up: {
			start: 50,
			end: 50.7502947845805,
			loop: false
		},
		type_01: {
			start: 52,
			end: 52.50140589569161,
			loop: false
		},
		type_02: {
			start: 54,
			end: 54.500680272108845,
			loop: false
		},
		type_03: {
			start: 56,
			end: 56.500090702947844,
			loop: false
		},
		type_04: {
			start: 58,
			end: 58.500090702947844,
			loop: false
		},
		type_05: {
			start: 60,
			end: 60.50004535147392,
			loop: false
		}
	};
	var require$$2 = {
		resources: resources$1,
		spritemap: spritemap$1
	};

	var resources = [
		"./assets/sounds/sprite/03/audioSprite.ogg",
		"./assets/sounds/sprite/03/audioSprite.m4a",
		"./assets/sounds/sprite/03/audioSprite.mp3",
		"./assets/sounds/sprite/03/audioSprite.ac3"
	];
	var spritemap = {
		button: {
			start: 0,
			end: 0.4033333333333333,
			loop: false
		},
		caution: {
			start: 2,
			end: 2.2503854875283444,
			loop: false
		},
		celebration: {
			start: 4,
			end: 5.0561224489795915,
			loop: false
		},
		disabled: {
			start: 7,
			end: 7.1000680272108845,
			loop: false
		},
		notification: {
			start: 9,
			end: 9.753197278911564,
			loop: false
		},
		progress_loop: {
			start: 11,
			end: 12.701383219954648,
			loop: false
		},
		ringtone_loop: {
			start: 14,
			end: 16.085532879818594,
			loop: false
		},
		select: {
			start: 18,
			end: 18.199909297052155,
			loop: false
		},
		swipe_01: {
			start: 20,
			end: 20.138639455782315,
			loop: false
		},
		swipe_02: {
			start: 22,
			end: 22.14278911564626,
			loop: false
		},
		swipe_03: {
			start: 24,
			end: 24.14666666666667,
			loop: false
		},
		swipe_04: {
			start: 26,
			end: 26.158798185941045,
			loop: false
		},
		swipe_05: {
			start: 28,
			end: 28.142585034013607,
			loop: false
		},
		tap_01: {
			start: 30,
			end: 30.03,
			loop: false
		},
		tap_02: {
			start: 32,
			end: 32.030589569160995,
			loop: false
		},
		tap_03: {
			start: 34,
			end: 34.03022675736961,
			loop: false
		},
		tap_04: {
			start: 36,
			end: 36.034013605442176,
			loop: false
		},
		tap_05: {
			start: 38,
			end: 38.037120181405896,
			loop: false
		},
		toggle_off: {
			start: 40,
			end: 40.22455782312925,
			loop: false
		},
		toggle_on: {
			start: 42,
			end: 42.2743537414966,
			loop: false
		},
		transition_down: {
			start: 44,
			end: 44.60936507936508,
			loop: false
		},
		transition_up: {
			start: 46,
			end: 46.62498866213152,
			loop: false
		},
		type_01: {
			start: 48,
			end: 48.04462585034014,
			loop: false
		},
		type_02: {
			start: 50,
			end: 50.03868480725624,
			loop: false
		},
		type_03: {
			start: 52,
			end: 52.07,
			loop: false
		},
		type_04: {
			start: 54,
			end: 54.04698412698413,
			loop: false
		},
		type_05: {
			start: 56,
			end: 56.045034013605445,
			loop: false
		}
	};
	var require$$3 = {
		resources: resources,
		spritemap: spritemap
	};

	Object.defineProperty(constant, "__esModule", { value: true });
	constant.TOGGLE_SOUND_KEYS = constant.TYPE_SOUND_KEYS = constant.SWIPE_SOUND_KEYS = constant.TAP_SOUND_KEYS = constant.EVENT_CLASS_NAMES = constant.SOUNDS = constant.ENABLE_TAGS = constant.KIT_INFO = constant.KITS = void 0;
	const tslib_1$6 = require$$0;
	const _01_json_1 = tslib_1$6.__importDefault(require$$1);
	const _02_json_1 = tslib_1$6.__importDefault(require$$2);
	const _03_json_1 = tslib_1$6.__importDefault(require$$3);
	const BUTTON = "button";
	const CAUTION = "caution";
	const CELEBRATION = "celebration";
	const DISABLED = "disabled";
	const NOTIFICATION = "notification";
	const PROGRESS_LOOP = "progress_loop";
	const RINGTONE_LOOP = "ringtone_loop";
	const SELECT = "select";
	const SWIPE = "swipe";
	const SWIPE_01 = "swipe_01";
	const SWIPE_02 = "swipe_02";
	const SWIPE_03 = "swipe_03";
	const SWIPE_04 = "swipe_04";
	const SWIPE_05 = "swipe_05";
	const TAP = "tap";
	const TAP_01 = "tap_01";
	const TAP_02 = "tap_02";
	const TAP_03 = "tap_03";
	const TAP_04 = "tap_04";
	const TAP_05 = "tap_05";
	const TOGGLE = "toggle";
	const TOGGLE_OFF = "toggle_off";
	const TOGGLE_ON = "toggle_on";
	const TRANSITION_DOWN = "transition_down";
	const TRANSITION_UP = "transition_up";
	const TYPE = "type";
	const TYPE_01 = "type_01";
	const TYPE_02 = "type_02";
	const TYPE_03 = "type_03";
	const TYPE_04 = "type_04";
	const TYPE_05 = "type_05";
	const TAP_SOUND_KEYS = [
	    TAP_01,
	    TAP_02,
	    TAP_03,
	    TAP_04,
	    TAP_05
	];
	constant.TAP_SOUND_KEYS = TAP_SOUND_KEYS;
	const SWIPE_SOUND_KEYS = [
	    SWIPE_01,
	    SWIPE_02,
	    SWIPE_03,
	    SWIPE_04,
	    SWIPE_05
	];
	constant.SWIPE_SOUND_KEYS = SWIPE_SOUND_KEYS;
	const TYPE_SOUND_KEYS = [
	    TYPE_01,
	    TYPE_02,
	    TYPE_03,
	    TYPE_04,
	    TYPE_05
	];
	constant.TYPE_SOUND_KEYS = TYPE_SOUND_KEYS;
	const TOGGLE_SOUND_KEYS = [
	    TOGGLE_ON,
	    TOGGLE_OFF
	];
	constant.TOGGLE_SOUND_KEYS = TOGGLE_SOUND_KEYS;
	const _SOUND_KEYS = {
	    BUTTON,
	    CAUTION,
	    CELEBRATION,
	    DISABLED,
	    NOTIFICATION,
	    PROGRESS_LOOP,
	    RINGTONE_LOOP,
	    SELECT,
	    SWIPE,
	    TAP,
	    TOGGLE_ON,
	    TOGGLE_OFF,
	    TRANSITION_DOWN,
	    TRANSITION_UP,
	    TYPE
	};
	const _EVENT_CLASS_NAMES = {
	    [BUTTON]: `snd__${BUTTON}`,
	    [CAUTION]: `snd__${CAUTION}`,
	    [CELEBRATION]: `snd__${CELEBRATION}`,
	    [DISABLED]: `snd__${DISABLED}`,
	    [NOTIFICATION]: `snd__${NOTIFICATION}`,
	    [PROGRESS_LOOP]: `snd__${PROGRESS_LOOP}`,
	    [RINGTONE_LOOP]: `snd__${RINGTONE_LOOP}`,
	    [SELECT]: `snd__${SELECT}`,
	    [SWIPE]: `snd__${SWIPE}`,
	    [TAP]: `snd__${TAP}`,
	    [TOGGLE]: `snd__${TOGGLE}`,
	    [TRANSITION_DOWN]: `snd__${TRANSITION_DOWN}`,
	    [TRANSITION_UP]: `snd__${TRANSITION_UP}`,
	    [TYPE]: `snd__${TYPE}`,
	};
	const SOUNDS = Object.freeze(_SOUND_KEYS);
	constant.SOUNDS = SOUNDS;
	const EVENT_CLASS_NAMES = Object.freeze(_EVENT_CLASS_NAMES);
	constant.EVENT_CLASS_NAMES = EVENT_CLASS_NAMES;
	const TAG_EVENT_SOUND = {
	    "input:text,email,number,password,search,url,tel": {
	        events: {
	            "input": "type"
	        }
	    },
	    "input:checkbox": {
	        events: {
	            "change": "toggle"
	        }
	    },
	    "input:radio": {
	        events: {
	            "change": "select"
	        }
	    },
	    "input:button,reset,submit": {
	        events: {
	            "click": "button,caution,celebration,disabled,notification,tap,transition_down,transition_up"
	        }
	    },
	    "select": {
	        events: {
	            "change": "select"
	        }
	    },
	    "any": {
	        events: {
	            "click": "button,caution,celebration,disabled,notification,tap,transition_down,transition_up"
	        }
	    }
	};
	constant.ENABLE_TAGS = TAG_EVENT_SOUND;
	const _KITS = {
	    SND01: "01",
	    SND02: "02",
	    SND03: "03",
	};
	const KITS = Object.freeze(_KITS);
	constant.KITS = KITS;
	const _KIT_INFO = {
	    [KITS.SND01]: {
	        json: _01_json_1.default,
	        audioSrc: "https://cdn.jsdelivr.net/gh/snd-lib/snd-lib@v1.1.2/assets/sounds/sprite/01/audioSprite.mp3",
	    },
	    [KITS.SND02]: {
	        json: _02_json_1.default,
	        audioSrc: "https://cdn.jsdelivr.net/gh/snd-lib/snd-lib@v1.1.2/assets/sounds/sprite/02/audioSprite.mp3",
	    },
	    [KITS.SND03]: {
	        json: _03_json_1.default,
	        audioSrc: "https://cdn.jsdelivr.net/gh/snd-lib/snd-lib@v1.1.2/assets/sounds/sprite//03/audioSprite.mp3",
	    },
	};
	const KIT_INFO = Object.freeze(_KIT_INFO);
	constant.KIT_INFO = KIT_INFO;

	var soundKit = {};

	var audioSource = {};

	var audioNode = {};

	Object.defineProperty(audioNode, "__esModule", { value: true });
	class AudioNodes {
	    constructor(audioBufferSourceNode, gainNode) {
	        this.audioSrc = null;
	        this._gain = null;
	        this._tail = null;
	        this._volume = 1;
	        this._masterVolume = 1;
	        this.audioSrc = audioBufferSourceNode;
	        this._gain = gainNode;
	        this._tail = this.audioSrc;
	    }
	    set volume(val) {
	        this._volume = val;
	        this._setVolume();
	    }
	    get volume() {
	        return this._volume;
	    }
	    set masterVolume(val) {
	        this._masterVolume = val;
	        this._setVolume();
	    }
	    get masterVolume() {
	        return this._masterVolume;
	    }
	    _setVolume() {
	        if (this._gain !== null)
	            this._gain.gain.value = this.volume * this.masterVolume;
	    }
	    connect(audioNode) {
	        var _a;
	        (_a = this._tail) === null || _a === void 0 ? void 0 : _a.connect(audioNode);
	        this._tail = audioNode;
	        return this;
	    }
	}
	audioNode.default = AudioNodes;

	var tween = {};

	Object.defineProperty(tween, "__esModule", { value: true });
	const tslib_1$5 = require$$0;
	class Tween {
	    static to(target, propName, to, options) {
	        if (target[propName] === undefined)
	            throw new Error(`prop: ${propName} does not exists in ${target}`);
	        else
	            return new Tween(target, propName, 0, to, "to", options);
	    }
	    static from(target, propName, from, options) {
	        if (target[propName] === undefined)
	            throw new Error(`prop: ${propName} does not exists in ${target}`);
	        return new Tween(target, propName, from, 0, "from", options);
	    }
	    static fromTo(target, propName, from, to, options) {
	        if (target[propName] === undefined)
	            throw new Error(`prop: ${propName} does not exists in ${target}`);
	        return new Tween(target, propName, from, to, "fromTo", options);
	    }
	    constructor(target, propName, from, to, type, options) {
	        this._propName = "";
	        this._to = 0;
	        this._from = 0;
	        this._duration = 0.5;
	        this._delay = 0;
	        this._onComplete = () => { };
	        this._onUpdate = () => { };
	        this._updater = 0;
	        this._tween = (from, to) => tslib_1$5.__awaiter(this, void 0, void 0, function* () {
	            if (this._target[this._propName] === undefined)
	                return;
	            this.kill();
	            const startTime = this._time;
	            const dur = this._duration;
	            const del = this._delay;
	            const endTime = startTime + dur + del;
	            while (this._time < endTime) {
	                if (this._time < startTime + del)
	                    continue;
	                const crrTime = this._time;
	                const percentage = (crrTime - startTime) / (endTime - startTime);
	                const val = (to - from) * percentage + from;
	                this._target[this._propName] = val;
	                this._onUpdate();
	                yield new Promise(res => {
	                    this._updater = requestAnimationFrame(res);
	                });
	            }
	            this.kill();
	            this._target[this._propName] = to;
	            this._onUpdate();
	            this._onComplete();
	        });
	        this.kill = () => {
	            cancelAnimationFrame(this._updater);
	        };
	        this._target = target;
	        this._propName = propName;
	        this._from = from;
	        this._to = to;
	        options = Object.assign(Object.assign({}, Tween._defaultOptions), options);
	        this._duration = options === null || options === void 0 ? void 0 : options.duration;
	        this._delay = options === null || options === void 0 ? void 0 : options.delay;
	        this._onComplete = options === null || options === void 0 ? void 0 : options.onComplete;
	        this._onUpdate = options === null || options === void 0 ? void 0 : options.onUpdate;
	        if (this._target[this._propName] !== undefined) {
	            switch (type) {
	                case "to":
	                    this._tweenTo();
	                    break;
	                case "from":
	                    this._tweenFrom();
	                    break;
	                case "fromTo":
	                    this._tweenFromTo();
	                    break;
	            }
	        }
	        else {
	            throw new Error(`prop: ${this._propName} does not exists in ${this._target}`);
	        }
	    }
	    get _time() {
	        return Date.now() / 1000;
	    }
	    _tweenTo() {
	        const from = this._target[this._propName];
	        const to = this._to;
	        this._tween(from, to);
	    }
	    _tweenFrom() {
	        const from = this._from;
	        const to = this._target[this._propName];
	        this._tween(from, to);
	    }
	    _tweenFromTo() {
	        const from = this._from;
	        const to = this._to;
	        this._tween(from, to);
	    }
	}
	tween.default = Tween;
	Tween._defaultOptions = {
	    duration: 0.5,
	    delay: 0,
	    onComplete: () => { },
	    onUpdate: () => { }
	};

	Object.defineProperty(audioSource, "__esModule", { value: true });
	const tslib_1$4 = require$$0;
	const audioNode_1 = tslib_1$4.__importDefault(audioNode);
	const tween_1$1 = tslib_1$4.__importDefault(tween);
	class AudioSource {
	    static get isActive() {
	        return this._isActive;
	    }
	    static activate() {
	        if (this._isActive)
	            return;
	        try {
	            const AudioContext = window.AudioContext || window.webkitAudioContext;
	            this._ctx = new AudioContext();
	            const emptySrc = this._ctx.createBufferSource();
	            emptySrc.start();
	            try {
	                emptySrc.stop();
	            }
	            catch (e) {
	                console.warn(e);
	            }
	            this._isActive = true;
	            this._analyzeAllInstances();
	        }
	        catch (err) {
	            throw new Error(`an err occurred while AudioSource.setup ${err}`);
	        }
	    }
	    static _analyzeAllInstances() {
	        this._instances.forEach((instance) => {
	            if (instance._hasLoaded && !instance._hasStartedAnalysis) {
	                instance.analyze();
	            }
	        });
	    }
	    static _createAudioBuffer(buffer) {
	        return tslib_1$4.__awaiter(this, void 0, void 0, function* () {
	            try {
	                if (typeof Promise !== 'undefined' && this._ctx.decodeAudioData.length === 1) {
	                    return yield this._ctx.decodeAudioData(buffer);
	                }
	                else {
	                    return new Promise((res, rej) => {
	                        this._ctx.decodeAudioData(buffer, (data) => res(data), (err) => rej(err));
	                    });
	                }
	            }
	            catch (err) {
	                throw new Error(`an err occured while AudioSource._createAudioBuffer ${err}`);
	            }
	        });
	    }
	    static _createAudioArrayBuffer(audioSrc) {
	        return tslib_1$4.__awaiter(this, void 0, void 0, function* () {
	            try {
	                const res = yield fetch(audioSrc);
	                const arrayBuffer = yield res.arrayBuffer();
	                return arrayBuffer;
	            }
	            catch (err) {
	                throw new Error(`an err occurred while AudioSource._createAudioArrayBuffer ${err}`);
	            }
	        });
	    }
	    constructor() {
	        this._audioArrayBuffer = null;
	        this._audioBuffer = null;
	        this._audioList = new Map();
	        this._cnt = 1000;
	        this._json = null;
	        this._hasStartedLoading = false;
	        this._hasLoaded = false;
	        this._hasStartedAnalysis = false;
	        this._hasAnalyzed = false;
	        this._masterVolume = 1;
	        this._analyzePromise = null;
	        AudioSource._instances.push(this);
	    }
	    get _uniqueKey() {
	        return this._cnt++;
	    }
	    set masterVolume(val) {
	        this._masterVolume = val;
	        this._audioList.forEach((audio) => {
	            audio.nodes.masterVolume = this._masterVolume;
	        });
	    }
	    get masterVolume() {
	        return this._masterVolume;
	    }
	    load(audioSrc, json) {
	        return tslib_1$4.__awaiter(this, void 0, void 0, function* () {
	            if (this._hasStartedLoading) {
	                console.warn("The file has already started loading.");
	                return;
	            }
	            this._json = json;
	            this._hasStartedLoading = true;
	            try {
	                this._audioArrayBuffer = yield AudioSource._createAudioArrayBuffer(audioSrc);
	                this._hasLoaded = true;
	            }
	            catch (err) {
	                if (err instanceof Error)
	                    throw err;
	                else
	                    throw new Error("unknown error");
	            }
	        });
	    }
	    analyze() {
	        return tslib_1$4.__awaiter(this, void 0, void 0, function* () {
	            if (!AudioSource.isActive)
	                return;
	            if (this._hasStartedAnalysis) {
	                console.warn("analyze(): AudioBuffer has already started analysis");
	                return;
	            }
	            if (!this._hasLoaded || this._audioArrayBuffer == null) {
	                console.warn("analyze(): The file hasn't loaded yet.");
	                return;
	            }
	            this._hasStartedAnalysis = true;
	            try {
	                this._analyzePromise = AudioSource._createAudioBuffer(this._audioArrayBuffer);
	                this._audioBuffer = yield this._analyzePromise;
	                this._analyzePromise = null;
	                this._hasAnalyzed = true;
	            }
	            catch (err) {
	                if (err instanceof Error)
	                    throw err;
	                else
	                    throw new Error("unknown error");
	            }
	        });
	    }
	    play(key, options) {
	        var _a, _b;
	        if (!this._hasLoaded) {
	            console.warn("play(): The file hasn't loaded yet.");
	            return -999;
	        }
	        if (!this._hasAnalyzed) {
	            if (!this._hasStartedAnalysis) {
	                try {
	                    AudioSource.activate();
	                }
	                catch (err) {
	                    console.warn("play(): Can not play audio before initialization (AudioContext must be initialization by pointer event).");
	                    return -999;
	                }
	            }
	            if (this._analyzePromise != null) {
	                const id = this._uniqueKey;
	                this._playLater(id, key, options);
	                return id;
	            }
	            else {
	                console.warn(("_analyzePromise is null"));
	                return -999;
	            }
	        }
	        if (this._json === null || !this._json.spritemap || !(key in this._json.spritemap)) {
	            throw new Error(`json error: ${this._json}`);
	        }
	        if (((_a = AudioSource._ctx) === null || _a === void 0 ? void 0 : _a.state) == "interrupted") {
	            const id = this._uniqueKey;
	            (_b = AudioSource._ctx) === null || _b === void 0 ? void 0 : _b.resume().then(() => {
	                this.play(key, options);
	            });
	            return id;
	        }
	        const id = this._uniqueKey;
	        this._play(id, key, options);
	        this.setLoop(options.loop, id);
	        this.setVolume(options.volume, id);
	        return id;
	    }
	    stop(id, delay = 0) {
	        var _a;
	        if (!this._audioList.has(id))
	            return;
	        (_a = this._audioList.get(id)) === null || _a === void 0 ? void 0 : _a.nodes.audioSrc.stop(AudioSource._ctx.currentTime + delay);
	        this._audioList.delete(id);
	    }
	    setVolume(vol, id) {
	        var _a;
	        if (!this._audioList.has(id))
	            return;
	        const audioNodes = (_a = this._audioList.get(id)) === null || _a === void 0 ? void 0 : _a.nodes;
	        if (audioNodes !== null && audioNodes.volume !== null)
	            audioNodes.volume = vol;
	    }
	    setLoop(loop, id) {
	        var _a, _b;
	        if (!this._audioList.has(id))
	            return;
	        const key = (_a = this._audioList.get(id)) === null || _a === void 0 ? void 0 : _a.key;
	        const audioNodes = (_b = this._audioList.get(id)) === null || _b === void 0 ? void 0 : _b.nodes;
	        if (loop) {
	            const start = this._json.spritemap[key].start;
	            const end = this._json.spritemap[key].end;
	            audioNodes.audioSrc.loop = true;
	            audioNodes.audioSrc.loopStart = start;
	            audioNodes.audioSrc.loopEnd = end;
	        }
	        else {
	            audioNodes.audioSrc.loop = false;
	        }
	    }
	    fade(volTo, duration, id) {
	        var _a;
	        return tslib_1$4.__awaiter(this, void 0, void 0, function* () {
	            if (!this._audioList.has(id))
	                return;
	            const audioNodes = (_a = this._audioList.get(id)) === null || _a === void 0 ? void 0 : _a.nodes;
	            yield new Promise((res) => {
	                tween_1$1.default.to(audioNodes, "volume", volTo, {
	                    duration: duration,
	                    onComplete: res
	                });
	            });
	        });
	    }
	    fadeAll(volTo) {
	        this._audioList.forEach((_, id) => {
	            this.fade(volTo, 0.5, id).then(_ => this.stop(id));
	        });
	    }
	    _play(id, key, options) {
	        const audioSrc = AudioSource._ctx.createBufferSource();
	        audioSrc.buffer = this._audioBuffer;
	        const gainNode = AudioSource._ctx.createGain();
	        const audioNodes = new audioNode_1.default(audioSrc, gainNode);
	        audioNodes.masterVolume = this.masterVolume;
	        audioNodes.connect(gainNode).connect(AudioSource._ctx.destination);
	        const start = this._json.spritemap[key].start;
	        const end = this._json.spritemap[key].end;
	        if (options.loop) {
	            audioNodes.audioSrc.start(AudioSource._ctx.currentTime + options.delay, start, end);
	        }
	        else {
	            const dur = Math.max(end - start, 0.1);
	            audioNodes.audioSrc.start(AudioSource._ctx.currentTime + options.delay, start, dur);
	        }
	        audioNodes.audioSrc.onended = () => {
	            this.stop(id);
	            audioNodes.audioSrc.disconnect();
	            audioNodes.audioSrc.buffer = null;
	            options.callback(id);
	        };
	        this._audioList.set(id, {
	            key,
	            nodes: audioNodes,
	        });
	    }
	    _playLater(id, key, options) {
	        return tslib_1$4.__awaiter(this, void 0, void 0, function* () {
	            yield this._analyzePromise;
	            this._play(id, key, options);
	            this.setLoop(options.loop, id);
	            this.setVolume(options.volume, id);
	        });
	    }
	}
	audioSource.default = AudioSource;
	AudioSource.END = "end";
	AudioSource._instances = [];
	AudioSource._ctx = null;
	AudioSource._isActive = false;

	Object.defineProperty(soundKit, "__esModule", { value: true });
	const tslib_1$3 = require$$0;
	const constant_1$2 = constant;
	const audioSource_1$1 = tslib_1$3.__importDefault(audioSource);
	class SoundKit {
	    constructor(key) {
	        this._ids = new Map();
	        this._audioSrc = new audioSource_1$1.default();
	        this._masterVolume = 1;
	        this.key = key;
	    }
	    get masterVolume() {
	        return this._masterVolume;
	    }
	    set masterVolume(val) {
	        this._masterVolume = val;
	        this._audioSrc.masterVolume = this._masterVolume;
	    }
	    load() {
	        return tslib_1$3.__awaiter(this, void 0, void 0, function* () {
	            const json = constant_1$2.KIT_INFO[this.key].json;
	            const audioSrc = constant_1$2.KIT_INFO[this.key].audioSrc;
	            try {
	                yield this._audioSrc.load(audioSrc, json);
	            }
	            catch (err) {
	                throw err;
	            }
	        });
	    }
	    analyze() {
	        return tslib_1$3.__awaiter(this, void 0, void 0, function* () {
	            try {
	                yield this._audioSrc.analyze();
	            }
	            catch (err) {
	                throw err;
	            }
	        });
	    }
	    play(key, options) {
	        const oldId = this._ids.get(key);
	        if (oldId !== undefined)
	            this._audioSrc.fade(0, 0.05, oldId);
	        const id = this._audioSrc.play(key, options);
	        const fadeoutDuration = 0.05;
	        if (options.duration > fadeoutDuration) {
	            setTimeout(() => {
	                this._audioSrc.fade(0, fadeoutDuration, id);
	            }, (options.duration - fadeoutDuration) * 1000);
	        }
	        this._ids.set(key.replace(/_[0-9][0-9]/, ""), id);
	    }
	    stop(soundKey) {
	        const id = this._ids.get(soundKey);
	        if (id)
	            this._audioSrc.stop(id);
	        else
	            console.warn(`[SoundKit.stop()] key: ${soundKey} haven't played`);
	    }
	    fade(volTo) {
	        this._audioSrc.fadeAll(volTo);
	    }
	}
	soundKit.default = SoundKit;

	var domInteraction = {};

	var events = {exports: {}};

	var R = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect : null;
	var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
	  return Function.prototype.apply.call(target, receiver, args);
	};
	var ReflectOwnKeys;
	if (R && typeof R.ownKeys === 'function') {
	  ReflectOwnKeys = R.ownKeys;
	} else if (Object.getOwnPropertySymbols) {
	  ReflectOwnKeys = function ReflectOwnKeys(target) {
	    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
	  };
	} else {
	  ReflectOwnKeys = function ReflectOwnKeys(target) {
	    return Object.getOwnPropertyNames(target);
	  };
	}
	function ProcessEmitWarning(warning) {
	  if (console && console.warn) console.warn(warning);
	}
	var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
	  return value !== value;
	};
	function EventEmitter() {
	  EventEmitter.init.call(this);
	}
	events.exports = EventEmitter;
	events.exports.once = once;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._eventsCount = 0;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	var defaultMaxListeners = 10;
	function checkListener(listener) {
	  if (typeof listener !== 'function') {
	    throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(listener));
	  }
	}
	Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
	  enumerable: true,
	  get: function get() {
	    return defaultMaxListeners;
	  },
	  set: function set(arg) {
	    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
	      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
	    }
	    defaultMaxListeners = arg;
	  }
	});
	EventEmitter.init = function () {
	  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
	    this._events = Object.create(null);
	    this._eventsCount = 0;
	  }
	  this._maxListeners = this._maxListeners || undefined;
	};

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
	    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
	  }
	  this._maxListeners = n;
	  return this;
	};
	function _getMaxListeners(that) {
	  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
	  return that._maxListeners;
	}
	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
	  return _getMaxListeners(this);
	};
	EventEmitter.prototype.emit = function emit(type) {
	  var args = [];
	  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
	  var doError = type === 'error';
	  var events = this._events;
	  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

	  // If there is no 'error' event listener then throw.
	  if (doError) {
	    var er;
	    if (args.length > 0) er = args[0];
	    if (er instanceof Error) {
	      // Note: The comments on the `throw` lines are intentional, they show
	      // up in Node's output if this results in an unhandled exception.
	      throw er; // Unhandled 'error' event
	    }
	    // At least give some kind of context to the user
	    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
	    err.context = er;
	    throw err; // Unhandled 'error' event
	  }
	  var handler = events[type];
	  if (handler === undefined) return false;
	  if (typeof handler === 'function') {
	    ReflectApply(handler, this, args);
	  } else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
	  }
	  return true;
	};
	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;
	  checkListener(listener);
	  events = target._events;
	  if (events === undefined) {
	    events = target._events = Object.create(null);
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener !== undefined) {
	      target.emit('newListener', type, listener.listener ? listener.listener : listener);

	      // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object
	      events = target._events;
	    }
	    existing = events[type];
	  }
	  if (existing === undefined) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
	      // If we've already got an array, just append.
	    } else if (prepend) {
	      existing.unshift(listener);
	    } else {
	      existing.push(listener);
	    }

	    // Check for listener leak
	    m = _getMaxListeners(target);
	    if (m > 0 && existing.length > m && !existing.warned) {
	      existing.warned = true;
	      // No error code for this since it is a Warning
	      // eslint-disable-next-line no-restricted-syntax
	      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
	      w.name = 'MaxListenersExceededWarning';
	      w.emitter = target;
	      w.type = type;
	      w.count = existing.length;
	      ProcessEmitWarning(w);
	    }
	  }
	  return target;
	}
	EventEmitter.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	EventEmitter.prototype.prependListener = function prependListener(type, listener) {
	  return _addListener(this, type, listener, true);
	};
	function onceWrapper() {
	  if (!this.fired) {
	    this.target.removeListener(this.type, this.wrapFn);
	    this.fired = true;
	    if (arguments.length === 0) return this.listener.call(this.target);
	    return this.listener.apply(this.target, arguments);
	  }
	}
	function _onceWrap(target, type, listener) {
	  var state = {
	    fired: false,
	    wrapFn: undefined,
	    target: target,
	    type: type,
	    listener: listener
	  };
	  var wrapped = onceWrapper.bind(state);
	  wrapped.listener = listener;
	  state.wrapFn = wrapped;
	  return wrapped;
	}
	EventEmitter.prototype.once = function once(type, listener) {
	  checkListener(listener);
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};
	EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
	  checkListener(listener);
	  this.prependListener(type, _onceWrap(this, type, listener));
	  return this;
	};

	// Emits a 'removeListener' event if and only if the listener was removed.
	EventEmitter.prototype.removeListener = function removeListener(type, listener) {
	  var list, events, position, i, originalListener;
	  checkListener(listener);
	  events = this._events;
	  if (events === undefined) return this;
	  list = events[type];
	  if (list === undefined) return this;
	  if (list === listener || list.listener === listener) {
	    if (--this._eventsCount === 0) this._events = Object.create(null);else {
	      delete events[type];
	      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
	    }
	  } else if (typeof list !== 'function') {
	    position = -1;
	    for (i = list.length - 1; i >= 0; i--) {
	      if (list[i] === listener || list[i].listener === listener) {
	        originalListener = list[i].listener;
	        position = i;
	        break;
	      }
	    }
	    if (position < 0) return this;
	    if (position === 0) list.shift();else {
	      spliceOne(list, position);
	    }
	    if (list.length === 1) events[type] = list[0];
	    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
	  }
	  return this;
	};
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
	  var listeners, events, i;
	  events = this._events;
	  if (events === undefined) return this;

	  // not listening for removeListener, no need to emit
	  if (events.removeListener === undefined) {
	    if (arguments.length === 0) {
	      this._events = Object.create(null);
	      this._eventsCount = 0;
	    } else if (events[type] !== undefined) {
	      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
	    }
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    var keys = Object.keys(events);
	    var key;
	    for (i = 0; i < keys.length; ++i) {
	      key = keys[i];
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = Object.create(null);
	    this._eventsCount = 0;
	    return this;
	  }
	  listeners = events[type];
	  if (typeof listeners === 'function') {
	    this.removeListener(type, listeners);
	  } else if (listeners !== undefined) {
	    // LIFO order
	    for (i = listeners.length - 1; i >= 0; i--) {
	      this.removeListener(type, listeners[i]);
	    }
	  }
	  return this;
	};
	function _listeners(target, type, unwrap) {
	  var events = target._events;
	  if (events === undefined) return [];
	  var evlistener = events[type];
	  if (evlistener === undefined) return [];
	  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
	  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
	}
	EventEmitter.prototype.listeners = function listeners(type) {
	  return _listeners(this, type, true);
	};
	EventEmitter.prototype.rawListeners = function rawListeners(type) {
	  return _listeners(this, type, false);
	};
	EventEmitter.listenerCount = function (emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount.call(emitter, type);
	  }
	};
	EventEmitter.prototype.listenerCount = listenerCount;
	function listenerCount(type) {
	  var events = this._events;
	  if (events !== undefined) {
	    var evlistener = events[type];
	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener !== undefined) {
	      return evlistener.length;
	    }
	  }
	  return 0;
	}
	EventEmitter.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
	};
	function arrayClone(arr, n) {
	  var copy = new Array(n);
	  for (var i = 0; i < n; ++i) copy[i] = arr[i];
	  return copy;
	}
	function spliceOne(list, index) {
	  for (; index + 1 < list.length; index++) list[index] = list[index + 1];
	  list.pop();
	}
	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);
	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }
	  return ret;
	}
	function once(emitter, name) {
	  return new Promise(function (resolve, reject) {
	    function errorListener(err) {
	      emitter.removeListener(name, resolver);
	      reject(err);
	    }
	    function resolver() {
	      if (typeof emitter.removeListener === 'function') {
	        emitter.removeListener('error', errorListener);
	      }
	      resolve([].slice.call(arguments));
	    }
	    eventTargetAgnosticAddListener(emitter, name, resolver, {
	      once: true
	    });
	    if (name !== 'error') {
	      addErrorHandlerIfEventEmitter(emitter, errorListener, {
	        once: true
	      });
	    }
	  });
	}
	function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
	  if (typeof emitter.on === 'function') {
	    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
	  }
	}
	function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
	  if (typeof emitter.on === 'function') {
	    if (flags.once) {
	      emitter.once(name, listener);
	    } else {
	      emitter.on(name, listener);
	    }
	  } else if (typeof emitter.addEventListener === 'function') {
	    // EventTarget does not have `error` event semantics like Node
	    // EventEmitters, we do not listen for `error` events here.
	    emitter.addEventListener(name, function wrapListener(arg) {
	      // IE does not have builtin `{ once: true }` support so we
	      // have to do it manually.
	      if (flags.once) {
	        emitter.removeEventListener(name, wrapListener);
	      }
	      listener(arg);
	    });
	  } else {
	    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + _typeof(emitter));
	  }
	}

	Object.defineProperty(domInteraction, "__esModule", { value: true });
	const tslib_1$2 = require$$0;
	const events_1 = tslib_1$2.__importDefault(events.exports);
	const constant_1$1 = constant;
	class DOMInteraction extends events_1.default {
	    constructor() {
	        super();
	        this._init();
	    }
	    _init() {
	        for (const key in constant_1$1.EVENT_CLASS_NAMES) {
	            const className = constant_1$1.EVENT_CLASS_NAMES[key];
	            const elements = document.getElementsByClassName(className);
	            for (let i = 0; i < elements.length; i++) {
	                const el = elements[i];
	                const soundKey = key.replace("snd__", "");
	                const eventName = this._getEventName(soundKey, el);
	                if (eventName == null)
	                    break;
	                this._listen(el, eventName, soundKey);
	            }
	        }
	    }
	    _getEventName(soundKey, element) {
	        const tagName = element.tagName.toLowerCase();
	        for (const tagString in constant_1$1.ENABLE_TAGS) {
	            if (tagName == "input" && tagString.match("input") != null) {
	                const type = element.type || "";
	                const types = tagString.split(":")[1].split(",");
	                for (const event in constant_1$1.ENABLE_TAGS[tagString].events) {
	                    for (const i in types) {
	                        if (type != types[i])
	                            continue;
	                        const sounds = constant_1$1.ENABLE_TAGS[tagString].events[event].split(",");
	                        for (const j in sounds) {
	                            if (soundKey == sounds[j])
	                                return event;
	                        }
	                    }
	                }
	            }
	            else {
	                if (tagString == tagName || tagString == "any") {
	                    for (const event in constant_1$1.ENABLE_TAGS[tagString].events) {
	                        const sounds = constant_1$1.ENABLE_TAGS[tagString].events[event].split(",");
	                        for (const i in sounds) {
	                            if (soundKey == sounds[i])
	                                return event;
	                        }
	                    }
	                }
	            }
	        }
	        return null;
	    }
	    _listen(element, eventName, soundKey) {
	        element.addEventListener(eventName, (e) => this._process(e, eventName, soundKey));
	    }
	    _process(e, eventName, soundKey) {
	        const target = e.target;
	        if (!target.classList.contains(`snd__${soundKey}`))
	            return;
	        if (soundKey == "toggle") {
	            soundKey = target.checked ? constant_1$1.TOGGLE_SOUND_KEYS[0] : constant_1$1.TOGGLE_SOUND_KEYS[1];
	        }
	        this._emit(target, eventName, soundKey);
	    }
	    _emit(DOM, event, soundKey) {
	        if (document.documentElement.classList.contains("muted"))
	            return;
	        this.emit(DOMInteraction.INTERACT, soundKey);
	    }
	}
	domInteraction.default = DOMInteraction;

	Object.defineProperty(snd, "__esModule", { value: true });
	const tslib_1$1 = require$$0;
	const eventemitter3_1 = tslib_1$1.__importDefault(eventemitter3.exports);
	const constant_1 = constant;
	const soundKit_1 = tslib_1$1.__importDefault(soundKit);
	const domInteraction_1 = tslib_1$1.__importDefault(domInteraction);
	const tween_1 = tslib_1$1.__importDefault(tween);
	const audioSource_1 = tslib_1$1.__importDefault(audioSource);
	class Snd extends eventemitter3_1.default {
	    static get masterVolume() { return this._masterVolume; }
	    static set masterVolume(val) {
	        this._masterVolume = val;
	        this._instances.forEach((instance) => {
	            instance._soundKit.masterVolume = this._masterVolume * instance._volume;
	        });
	    }
	    constructor(options) {
	        super();
	        this._soundKit = new soundKit_1.default(constant_1.KITS.SND01);
	        this._dom = null;
	        this._vol = 1;
	        this._isMutedByDeveloper = false;
	        this._isMutedByWindow = false;
	        this._isWindowBlurred = false;
	        this._muteOnWindowBlur = false;
	        this._fadeVol = 1;
	        this._windowVol = 1;
	        this._fadeTweenByDeveloper = null;
	        this._fadeTweenByWindowEvent = null;
	        this._onVisibilityChange = () => {
	            window.document.hidden ? this._onBlur() : this._onFocus();
	        };
	        this._onBlur = () => {
	            if (this._muteOnWindowBlur)
	                this._muteOnBlur();
	            this._isWindowBlurred = true;
	        };
	        this._onFocus = () => {
	            if (this._muteOnWindowBlur)
	                this._unmuteOnFocus();
	            this._isWindowBlurred = false;
	        };
	        this._onInteract = (event) => {
	            this.play(event);
	        };
	        if (typeof window === "undefined")
	            return;
	        Snd._instances.push(this);
	        options = Object.assign(Object.assign({}, Snd._defaultOptions), options);
	        this._muteOnWindowBlur = options.muteOnWindowBlur || false;
	        if (options === null || options === void 0 ? void 0 : options.easySetup) {
	            this._dom = new domInteraction_1.default();
	            this._dom.on(domInteraction_1.default.INTERACT, this._onInteract);
	        }
	        if (options.preloadSoundKit)
	            this.load(options.preloadSoundKit);
	        const initAudioContext = () => {
	            audioSource_1.default.activate();
	            window.removeEventListener("click", initAudioContext);
	            window.removeEventListener("touchstart", initAudioContext);
	        };
	        window.addEventListener("click", initAudioContext, { once: true });
	        window.addEventListener("touchstart", initAudioContext, { once: true });
	        const isSp = navigator.userAgent.match(/iPhone|Android.+Mobile/) != null;
	        if (isSp) {
	            window.addEventListener("visibilitychange", this._onVisibilityChange);
	        }
	        else {
	            window.addEventListener("blur", this._onBlur);
	            window.addEventListener("focus", this._onFocus);
	        }
	    }
	    get kit() { return this._soundKit.key; }
	    get isMuted() { return this._isMutedByDeveloper || this._isMutedByWindow; }
	    get isWindowBlurred() { return this._isWindowBlurred; }
	    get _fadeVolume() { return this._fadeVol; }
	    set _fadeVolume(val) {
	        this._fadeVol = val;
	        this._volume = this._fadeVol * this._windowVolume;
	    }
	    get _windowVolume() { return this._windowVol; }
	    set _windowVolume(val) {
	        this._windowVol = val;
	        this._volume = this._fadeVolume * this._windowVol;
	    }
	    get _volume() {
	        return this._vol;
	    }
	    set _volume(val) {
	        this._vol = val;
	        this._soundKit.masterVolume = this._vol * Snd._masterVolume;
	    }
	    load(soundKitKey) {
	        return tslib_1$1.__awaiter(this, void 0, void 0, function* () {
	            this._soundKit.fade(0);
	            const oldKey = this._soundKit.key;
	            const kit = Snd._initializedSoundKits.get(soundKitKey);
	            if (kit === undefined) {
	                const newKit = new soundKit_1.default(soundKitKey);
	                Snd._initializedSoundKits.set(soundKitKey, newKit);
	                yield newKit.load();
	                yield newKit.analyze();
	                this._soundKit = newKit;
	            }
	            else {
	                this._soundKit = kit;
	            }
	            this._soundKit.fade(1);
	            const crrKey = this._soundKit.key;
	            if (oldKey !== crrKey)
	                this.emit(Snd.CHANGE_SOUND_KIT, crrKey, oldKey);
	        });
	    }
	    play(soundKey, options = {}) {
	        options = Object.assign(Object.assign({}, Snd._defaultPlayOptions), options);
	        if (this.isWindowBlurred)
	            return;
	        if (soundKey === constant_1.SOUNDS.TAP)
	            return this.playTap(options);
	        if (soundKey === constant_1.SOUNDS.TYPE)
	            return this.playType(options);
	        if (soundKey === constant_1.SOUNDS.SWIPE)
	            return this.playSwipe(options);
	        this._soundKit.play(soundKey, options);
	    }
	    stop(key) {
	        this._soundKit.stop(key);
	    }
	    mute() {
	        this._isMutedByDeveloper = true;
	        this._fadeByDeveloper(0, 0.3);
	    }
	    unmute() {
	        this._isMutedByDeveloper = false;
	        this._fadeByDeveloper(1, 0.3);
	    }
	    playTap(options = {}) {
	        this._playRandom(constant_1.TAP_SOUND_KEYS, options);
	    }
	    playSwipe(options = {}) {
	        this._playRandom(constant_1.SWIPE_SOUND_KEYS, options);
	    }
	    playType(options = {}) {
	        this._playRandom(constant_1.TYPE_SOUND_KEYS, options);
	    }
	    playButton(options = {}) {
	        this.play(Snd.SOUNDS.BUTTON, options);
	    }
	    playCaution(options = {}) {
	        this.play(Snd.SOUNDS.CAUTION, options);
	    }
	    playCelebration(options = {}) {
	        this.play(Snd.SOUNDS.CELEBRATION, options);
	    }
	    playDisabled(options = {}) {
	        this.play(Snd.SOUNDS.DISABLED, options);
	    }
	    playNotification(options = {}) {
	        this.play(Snd.SOUNDS.NOTIFICATION, options);
	    }
	    playProgressLoop(options = {}) {
	        this.play(Snd.SOUNDS.PROGRESS_LOOP, options);
	    }
	    playRingtoneLoop(options = {}) {
	        this.play(Snd.SOUNDS.RINGTONE_LOOP, options);
	    }
	    playSelect(options = {}) {
	        this.play(Snd.SOUNDS.SELECT, options);
	    }
	    playTransitionUp(options = {}) {
	        this.play(Snd.SOUNDS.TRANSITION_UP, options);
	    }
	    playTransitionDown(options = {}) {
	        this.play(Snd.SOUNDS.TRANSITION_DOWN, options);
	    }
	    playToggleOn(options = {}) {
	        this.play(Snd.SOUNDS.TOGGLE_ON, options);
	    }
	    playToggleOff(options = {}) {
	        this.play(Snd.SOUNDS.TOGGLE_OFF, options);
	    }
	    _playRandom(keys, options = {}) {
	        this.play(keys[Math.floor(Math.random() * keys.length)], options);
	    }
	    _muteOnBlur() {
	        this._isMutedByWindow = true;
	        this._fadeByWindowEvent(0, 0.3);
	    }
	    _unmuteOnFocus() {
	        this._isMutedByWindow = false;
	        this._fadeByWindowEvent(1, 0.3);
	    }
	    _fadeByDeveloper(volumeTo, duration) {
	        return tslib_1$1.__awaiter(this, void 0, void 0, function* () {
	            if (this._fadeTweenByDeveloper != null)
	                this._fadeTweenByDeveloper.kill();
	            this._fadeTweenByDeveloper = tween_1.default.to(this, "_fadeVolume", volumeTo, { duration });
	        });
	    }
	    _fadeByWindowEvent(volumeTo, duration) {
	        return tslib_1$1.__awaiter(this, void 0, void 0, function* () {
	            if (this._fadeTweenByWindowEvent != null)
	                this._fadeTweenByWindowEvent.kill();
	            this._fadeTweenByWindowEvent = tween_1.default.to(this, "_windowVolume", volumeTo, { duration });
	        });
	    }
	}
	snd.default = Snd;
	Snd.CHANGE_SOUND_KIT = "change_sound_kit";
	Snd.SOUNDS = constant_1.SOUNDS;
	Snd.KITS = constant_1.KITS;
	Snd._instances = [];
	Snd._initializedSoundKits = new Map();
	Snd._masterVolume = 1;
	Snd._defaultOptions = {
	    muteOnWindowBlur: true,
	    easySetup: false,
	    preloadSoundKit: null,
	};
	Snd._defaultPlayOptions = {
	    loop: false,
	    volume: 1,
	    delay: 0,
	    duration: -1,
	    callback: () => { }
	};

	Object.defineProperty(src, "__esModule", { value: true });
	const tslib_1 = require$$0;
	const snd_1 = tslib_1.__importDefault(snd);
	var _default = src.default = snd_1.default;

	return _default;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25kLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiLCIuLi8uLi9zcmMvY29uc3RhbnQudHMiLCIuLi8uLi9zcmMvYXVkaW9Ob2RlLnRzIiwiLi4vLi4vc3JjL3R3ZWVuLnRzIiwiLi4vLi4vc3JjL2F1ZGlvU291cmNlLnRzIiwiLi4vLi4vc3JjL3NvdW5kS2l0LnRzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCIuLi8uLi9zcmMvZG9tSW50ZXJhY3Rpb24udHMiLCIuLi8uLi9zcmMvc25kLnRzIiwiLi4vLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xyXG4gICAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XHJcbiAgICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xyXG4gICAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XHJcbiAgICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcclxuICAgIHZhciBfLCBkb25lID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XHJcbiAgICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcclxuICAgICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xyXG4gICAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xyXG4gICAgZG9uZSA9IHRydWU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xyXG4gICAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hZGREaXNwb3NhYmxlUmVzb3VyY2UoZW52LCB2YWx1ZSwgYXN5bmMpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XHJcbiAgICAgICAgdmFyIGRpc3Bvc2U7XHJcbiAgICAgICAgaWYgKGFzeW5jKSB7XHJcbiAgICAgICAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xyXG4gICAgICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChhc3luYykge1xyXG4gICAgICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XHJcbiAgICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xyXG4gICAgZnVuY3Rpb24gZmFpbChlKSB7XHJcbiAgICAgICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xyXG4gICAgICAgIGVudi5oYXNFcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgICAgIHdoaWxlIChlbnYuc3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciByZWMgPSBlbnYuc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVjLmRpc3Bvc2UgJiYgcmVjLmRpc3Bvc2UuY2FsbChyZWMudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlYy5hc3luYykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZmFpbChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW52Lmhhc0Vycm9yKSB0aHJvdyBlbnYuZXJyb3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBfX2V4dGVuZHM6IF9fZXh0ZW5kcyxcclxuICAgIF9fYXNzaWduOiBfX2Fzc2lnbixcclxuICAgIF9fcmVzdDogX19yZXN0LFxyXG4gICAgX19kZWNvcmF0ZTogX19kZWNvcmF0ZSxcclxuICAgIF9fcGFyYW06IF9fcGFyYW0sXHJcbiAgICBfX21ldGFkYXRhOiBfX21ldGFkYXRhLFxyXG4gICAgX19hd2FpdGVyOiBfX2F3YWl0ZXIsXHJcbiAgICBfX2dlbmVyYXRvcjogX19nZW5lcmF0b3IsXHJcbiAgICBfX2NyZWF0ZUJpbmRpbmc6IF9fY3JlYXRlQmluZGluZyxcclxuICAgIF9fZXhwb3J0U3RhcjogX19leHBvcnRTdGFyLFxyXG4gICAgX192YWx1ZXM6IF9fdmFsdWVzLFxyXG4gICAgX19yZWFkOiBfX3JlYWQsXHJcbiAgICBfX3NwcmVhZDogX19zcHJlYWQsXHJcbiAgICBfX3NwcmVhZEFycmF5czogX19zcHJlYWRBcnJheXMsXHJcbiAgICBfX3NwcmVhZEFycmF5OiBfX3NwcmVhZEFycmF5LFxyXG4gICAgX19hd2FpdDogX19hd2FpdCxcclxuICAgIF9fYXN5bmNHZW5lcmF0b3I6IF9fYXN5bmNHZW5lcmF0b3IsXHJcbiAgICBfX2FzeW5jRGVsZWdhdG9yOiBfX2FzeW5jRGVsZWdhdG9yLFxyXG4gICAgX19hc3luY1ZhbHVlczogX19hc3luY1ZhbHVlcyxcclxuICAgIF9fbWFrZVRlbXBsYXRlT2JqZWN0OiBfX21ha2VUZW1wbGF0ZU9iamVjdCxcclxuICAgIF9faW1wb3J0U3RhcjogX19pbXBvcnRTdGFyLFxyXG4gICAgX19pbXBvcnREZWZhdWx0OiBfX2ltcG9ydERlZmF1bHQsXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0OiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxyXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldDogX19jbGFzc1ByaXZhdGVGaWVsZFNldCxcclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRJbjogX19jbGFzc1ByaXZhdGVGaWVsZEluLFxyXG4gICAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2U6IF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxyXG4gICAgX19kaXNwb3NlUmVzb3VyY2VzOiBfX2Rpc3Bvc2VSZXNvdXJjZXMsXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRXZlbnRzKCkge31cblxuLy9cbi8vIFdlIHRyeSB0byBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC4gSW4gc29tZSBlbmdpbmVzIGNyZWF0aW5nIGFuXG4vLyBpbnN0YW5jZSBpbiB0aGlzIHdheSBpcyBmYXN0ZXIgdGhhbiBjYWxsaW5nIGBPYmplY3QuY3JlYXRlKG51bGwpYCBkaXJlY3RseS5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBjaGFyYWN0ZXIgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Rcbi8vIG92ZXJyaWRkZW4gb3IgdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy9cbmlmIChPYmplY3QuY3JlYXRlKSB7XG4gIEV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vXG4gIC8vIFRoaXMgaGFjayBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgYF9fcHJvdG9fX2AgcHJvcGVydHkgaXMgc3RpbGwgaW5oZXJpdGVkIGluXG4gIC8vIHNvbWUgb2xkIGJyb3dzZXJzIGxpa2UgQW5kcm9pZCA0LCBpUGhvbmUgNS4xLCBPcGVyYSAxMSBhbmQgU2FmYXJpIDUuXG4gIC8vXG4gIGlmICghbmV3IEV2ZW50cygpLl9fcHJvdG9fXykgcHJlZml4ID0gZmFsc2U7XG59XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgZXZlbnQgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IGVtaXR0ZXIsIG9uY2UpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0pIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIGVtaXR0ZXIuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XS5mbikgZW1pdHRlci5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBbZW1pdHRlci5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gZW1pdHRlcjtcbn1cblxuLyoqXG4gKiBDbGVhciBldmVudCBieSBuYW1lLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZ0IFRoZSBFdmVudCBuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xlYXJFdmVudChlbWl0dGVyLCBldnQpIHtcbiAgaWYgKC0tZW1pdHRlci5fZXZlbnRzQ291bnQgPT09IDApIGVtaXR0ZXIuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgZWxzZSBkZWxldGUgZW1pdHRlci5fZXZlbnRzW2V2dF07XG59XG5cbi8qKlxuICogTWluaW1hbCBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgbmFtZXMgPSBbXVxuICAgICwgZXZlbnRzXG4gICAgLCBuYW1lO1xuXG4gIGlmICh0aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgcmV0dXJuIG5hbWVzO1xuXG4gIGZvciAobmFtZSBpbiAoZXZlbnRzID0gdGhpcy5fZXZlbnRzKSkge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgaGFuZGxlcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWhhbmRsZXJzKSByZXR1cm4gW107XG4gIGlmIChoYW5kbGVycy5mbikgcmV0dXJuIFtoYW5kbGVycy5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBoYW5kbGVyc1tpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1iZXIgb2YgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWxpc3RlbmVycykgcmV0dXJuIDA7XG4gIGlmIChsaXN0ZW5lcnMuZm4pIHJldHVybiAxO1xuICByZXR1cm4gbGlzdGVuZXJzLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZXZlbnQgaGFkIGxpc3RlbmVycywgZWxzZSBgZmFsc2VgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgZmFsc2UpO1xufTtcblxuLyoqXG4gKiBBZGQgYSBvbmUtdGltZSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoaXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IGhhdmUgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uZS10aW1lIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKFxuICAgICAgbGlzdGVuZXJzLmZuID09PSBmbiAmJlxuICAgICAgKCFvbmNlIHx8IGxpc3RlbmVycy5vbmNlKSAmJlxuICAgICAgKCFjb250ZXh0IHx8IGxpc3RlbmVycy5jb250ZXh0ID09PSBjb250ZXh0KVxuICAgICkge1xuICAgICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZXZlbnRzID0gW10sIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuIHx8XG4gICAgICAgIChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSkgfHxcbiAgICAgICAgKGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgICAvL1xuICAgIGlmIChldmVudHMubGVuZ3RoKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gICAgZWxzZSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMsIG9yIHRob3NlIG9mIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQ7XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcbiAgICBpZiAodGhpcy5fZXZlbnRzW2V2dF0pIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cbiIsImltcG9ydCB7IFNvdW5kS2V5cywgRE9NRXZlbnRTb3VuZCB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgU09VTkRfS0lUXzAxIGZyb20gXCIuL2pzb24vMDEuanNvblwiO1xuaW1wb3J0IFNPVU5EX0tJVF8wMiBmcm9tIFwiLi9qc29uLzAyLmpzb25cIjtcbmltcG9ydCBTT1VORF9LSVRfMDMgZnJvbSBcIi4vanNvbi8wMy5qc29uXCI7XG5cbmNvbnN0IEJVVFRPTiA9IFwiYnV0dG9uXCI7XG5jb25zdCBDQVVUSU9OID0gXCJjYXV0aW9uXCI7XG5jb25zdCBDRUxFQlJBVElPTiA9IFwiY2VsZWJyYXRpb25cIjtcbmNvbnN0IERJU0FCTEVEID0gXCJkaXNhYmxlZFwiO1xuY29uc3QgTk9USUZJQ0FUSU9OID0gXCJub3RpZmljYXRpb25cIjtcbmNvbnN0IFBST0dSRVNTX0xPT1AgPSBcInByb2dyZXNzX2xvb3BcIjtcbmNvbnN0IFJJTkdUT05FX0xPT1AgPSBcInJpbmd0b25lX2xvb3BcIjtcbmNvbnN0IFNFTEVDVCA9IFwic2VsZWN0XCI7XG5jb25zdCBTV0lQRSA9IFwic3dpcGVcIjtcbmNvbnN0IFNXSVBFXzAxID0gXCJzd2lwZV8wMVwiO1xuY29uc3QgU1dJUEVfMDIgPSBcInN3aXBlXzAyXCI7XG5jb25zdCBTV0lQRV8wMyA9IFwic3dpcGVfMDNcIjtcbmNvbnN0IFNXSVBFXzA0ID0gXCJzd2lwZV8wNFwiO1xuY29uc3QgU1dJUEVfMDUgPSBcInN3aXBlXzA1XCI7XG5jb25zdCBUQVAgPSBcInRhcFwiO1xuY29uc3QgVEFQXzAxID0gXCJ0YXBfMDFcIjtcbmNvbnN0IFRBUF8wMiA9IFwidGFwXzAyXCI7XG5jb25zdCBUQVBfMDMgPSBcInRhcF8wM1wiO1xuY29uc3QgVEFQXzA0ID0gXCJ0YXBfMDRcIjtcbmNvbnN0IFRBUF8wNSA9IFwidGFwXzA1XCI7XG5jb25zdCBUT0dHTEUgPSBcInRvZ2dsZVwiO1xuY29uc3QgVE9HR0xFX09GRiA9IFwidG9nZ2xlX29mZlwiO1xuY29uc3QgVE9HR0xFX09OID0gXCJ0b2dnbGVfb25cIjtcbmNvbnN0IFRSQU5TSVRJT05fRE9XTiA9IFwidHJhbnNpdGlvbl9kb3duXCI7XG5jb25zdCBUUkFOU0lUSU9OX1VQID0gXCJ0cmFuc2l0aW9uX3VwXCI7XG5jb25zdCBUWVBFID0gXCJ0eXBlXCI7XG5jb25zdCBUWVBFXzAxID0gXCJ0eXBlXzAxXCI7XG5jb25zdCBUWVBFXzAyID0gXCJ0eXBlXzAyXCI7XG5jb25zdCBUWVBFXzAzID0gXCJ0eXBlXzAzXCI7XG5jb25zdCBUWVBFXzA0ID0gXCJ0eXBlXzA0XCI7XG5jb25zdCBUWVBFXzA1ID0gXCJ0eXBlXzA1XCI7XG5cbmNvbnN0IFRBUF9TT1VORF9LRVlTOiBzdHJpbmdbXSA9IFtcblx0VEFQXzAxLFxuXHRUQVBfMDIsXG5cdFRBUF8wMyxcblx0VEFQXzA0LFxuXHRUQVBfMDVcbl07XG5cbmNvbnN0IFNXSVBFX1NPVU5EX0tFWVM6IHN0cmluZ1tdID0gW1xuXHRTV0lQRV8wMSxcblx0U1dJUEVfMDIsXG5cdFNXSVBFXzAzLFxuXHRTV0lQRV8wNCxcblx0U1dJUEVfMDVcbl07XG5cbmNvbnN0IFRZUEVfU09VTkRfS0VZUzogc3RyaW5nW10gPSBbXG5cdFRZUEVfMDEsXG5cdFRZUEVfMDIsXG5cdFRZUEVfMDMsXG5cdFRZUEVfMDQsXG5cdFRZUEVfMDVcbl07XG5cbmNvbnN0IFRPR0dMRV9TT1VORF9LRVlTOiBzdHJpbmdbXSA9IFtcblx0VE9HR0xFX09OLFxuXHRUT0dHTEVfT0ZGXG5dO1xuXG5jb25zdCBfU09VTkRfS0VZUzogU291bmRLZXlzID0ge1xuXHRCVVRUT04sXG5cdENBVVRJT04sXG5cdENFTEVCUkFUSU9OLFxuXHRESVNBQkxFRCxcblx0Tk9USUZJQ0FUSU9OLFxuXHRQUk9HUkVTU19MT09QLFxuXHRSSU5HVE9ORV9MT09QLFxuXHRTRUxFQ1QsXG5cdFNXSVBFLFxuXHRUQVAsXG5cdFRPR0dMRV9PTixcblx0VE9HR0xFX09GRixcblx0VFJBTlNJVElPTl9ET1dOLFxuXHRUUkFOU0lUSU9OX1VQLFxuXHRUWVBFXG59O1xuXG5jb25zdCBfRVZFTlRfQ0xBU1NfTkFNRVM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9ID0ge1xuXHRbQlVUVE9OXTogYHNuZF9fJHtCVVRUT059YCxcblx0W0NBVVRJT05dOiBgc25kX18ke0NBVVRJT059YCxcblx0W0NFTEVCUkFUSU9OXTogYHNuZF9fJHtDRUxFQlJBVElPTn1gLFxuXHRbRElTQUJMRURdOiBgc25kX18ke0RJU0FCTEVEfWAsXG5cdFtOT1RJRklDQVRJT05dOiBgc25kX18ke05PVElGSUNBVElPTn1gLFxuXHRbUFJPR1JFU1NfTE9PUF06IGBzbmRfXyR7UFJPR1JFU1NfTE9PUH1gLFxuXHRbUklOR1RPTkVfTE9PUF06IGBzbmRfXyR7UklOR1RPTkVfTE9PUH1gLFxuXHRbU0VMRUNUXTogYHNuZF9fJHtTRUxFQ1R9YCxcblx0W1NXSVBFXTogYHNuZF9fJHtTV0lQRX1gLFxuXHRbVEFQXTogYHNuZF9fJHtUQVB9YCxcblx0W1RPR0dMRV06IGBzbmRfXyR7VE9HR0xFfWAsXG5cdFtUUkFOU0lUSU9OX0RPV05dOiBgc25kX18ke1RSQU5TSVRJT05fRE9XTn1gLFxuXHRbVFJBTlNJVElPTl9VUF06IGBzbmRfXyR7VFJBTlNJVElPTl9VUH1gLFxuXHRbVFlQRV06IGBzbmRfXyR7VFlQRX1gLFxufTtcblxuXG5cbmNvbnN0IFNPVU5EUyA9IE9iamVjdC5mcmVlemUoX1NPVU5EX0tFWVMpO1xuY29uc3QgRVZFTlRfQ0xBU1NfTkFNRVMgPSBPYmplY3QuZnJlZXplKF9FVkVOVF9DTEFTU19OQU1FUyk7XG5cbmNvbnN0IFRBR19FVkVOVF9TT1VORDogRE9NRXZlbnRTb3VuZCA9IHtcblx0XCJpbnB1dDp0ZXh0LGVtYWlsLG51bWJlcixwYXNzd29yZCxzZWFyY2gsdXJsLHRlbFwiOiB7XG5cdFx0ZXZlbnRzOiB7XG5cblx0XHRcdFwiaW5wdXRcIjogXCJ0eXBlXCJcblx0XHR9XG5cdH0sXG5cdFwiaW5wdXQ6Y2hlY2tib3hcIjoge1xuXHRcdGV2ZW50czoge1xuXHRcdFx0XCJjaGFuZ2VcIjogXCJ0b2dnbGVcIlxuXHRcdH1cblx0fSxcblx0XCJpbnB1dDpyYWRpb1wiOiB7XG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRcImNoYW5nZVwiOiBcInNlbGVjdFwiXG5cdFx0fVxuXHR9LFxuXHRcImlucHV0OmJ1dHRvbixyZXNldCxzdWJtaXRcIjoge1xuXHRcdGV2ZW50czoge1xuXHRcdFx0XCJjbGlja1wiOiBcImJ1dHRvbixjYXV0aW9uLGNlbGVicmF0aW9uLGRpc2FibGVkLG5vdGlmaWNhdGlvbix0YXAsdHJhbnNpdGlvbl9kb3duLHRyYW5zaXRpb25fdXBcIlxuXHRcdH1cblx0fSxcblx0XCJzZWxlY3RcIjoge1xuXHRcdGV2ZW50czoge1xuXHRcdFx0XCJjaGFuZ2VcIjogXCJzZWxlY3RcIlxuXHRcdH1cblx0fSxcblx0XCJhbnlcIjoge1xuXHRcdGV2ZW50czoge1xuXHRcdFx0XCJjbGlja1wiOiBcImJ1dHRvbixjYXV0aW9uLGNlbGVicmF0aW9uLGRpc2FibGVkLG5vdGlmaWNhdGlvbix0YXAsdHJhbnNpdGlvbl9kb3duLHRyYW5zaXRpb25fdXBcIlxuXHRcdH1cblx0fVxufTtcblxuXG5leHBvcnQgdHlwZSBLaXRLaW5kcyA9IFwiMDFcIiB8IFwiMDJcIiB8IFwiMDNcIjtcbmNvbnN0IF9LSVRTOiB7IFtrZXk6IHN0cmluZ106IEtpdEtpbmRzOyB9ID0ge1xuXHRTTkQwMTogXCIwMVwiLFxuXHRTTkQwMjogXCIwMlwiLFxuXHRTTkQwMzogXCIwM1wiLFxufTtcbmNvbnN0IEtJVFMgPSBPYmplY3QuZnJlZXplKF9LSVRTKTtcblxuY29uc3QgX0tJVF9JTkZPOiB7IFtrZXk6IHN0cmluZ106IHsganNvbjogYW55LCBhdWRpb1NyYzogc3RyaW5nOyB9OyB9ID0ge1xuXHRbS0lUUy5TTkQwMV06IHtcblx0XHRqc29uOiBTT1VORF9LSVRfMDEsXG5cdFx0YXVkaW9TcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3NuZC1saWIvc25kLWxpYkB2MS4xLjIvYXNzZXRzL3NvdW5kcy9zcHJpdGUvMDEvYXVkaW9TcHJpdGUubXAzXCIsXG5cblx0fSxcblx0W0tJVFMuU05EMDJdOiB7XG5cdFx0anNvbjogU09VTkRfS0lUXzAyLFxuXHRcdGF1ZGlvU3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9zbmQtbGliL3NuZC1saWJAdjEuMS4yL2Fzc2V0cy9zb3VuZHMvc3ByaXRlLzAyL2F1ZGlvU3ByaXRlLm1wM1wiLFxuXG5cdH0sXG5cdFtLSVRTLlNORDAzXToge1xuXHRcdGpzb246IFNPVU5EX0tJVF8wMyxcblx0XHRhdWRpb1NyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvc25kLWxpYi9zbmQtbGliQHYxLjEuMi9hc3NldHMvc291bmRzL3Nwcml0ZS8vMDMvYXVkaW9TcHJpdGUubXAzXCIsXG5cblx0fSxcbn07XG5jb25zdCBLSVRfSU5GTyA9IE9iamVjdC5mcmVlemUoX0tJVF9JTkZPKTtcblxuZXhwb3J0IHtcblx0S0lUUyxcblx0S0lUX0lORk8sXG5cdFRBR19FVkVOVF9TT1VORCBhcyBFTkFCTEVfVEFHUyxcblx0U09VTkRTLFxuXHRFVkVOVF9DTEFTU19OQU1FUyxcblx0VEFQX1NPVU5EX0tFWVMsXG5cdFNXSVBFX1NPVU5EX0tFWVMsXG5cdFRZUEVfU09VTkRfS0VZUyxcblx0VE9HR0xFX1NPVU5EX0tFWVNcbn07IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb05vZGVzIHtcblxuXHRwdWJsaWMgYXVkaW9TcmM6IEF1ZGlvQnVmZmVyU291cmNlTm9kZSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF9nYWluOiBHYWluTm9kZSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF90YWlsOiBBdWRpb05vZGUgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfdm9sdW1lOiBudW1iZXIgPSAxO1xuXHRwcml2YXRlIF9tYXN0ZXJWb2x1bWU6IG51bWJlciA9IDE7XG5cblx0Y29uc3RydWN0b3IoYXVkaW9CdWZmZXJTb3VyY2VOb2RlOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGUsIGdhaW5Ob2RlOiBHYWluTm9kZSkge1xuXHRcdHRoaXMuYXVkaW9TcmMgPSBhdWRpb0J1ZmZlclNvdXJjZU5vZGU7XG5cdFx0dGhpcy5fZ2FpbiA9IGdhaW5Ob2RlO1xuXHRcdHRoaXMuX3RhaWwgPSB0aGlzLmF1ZGlvU3JjO1xuXHR9XG5cblx0cHVibGljIHNldCB2b2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl92b2x1bWUgPSB2YWw7XG5cdFx0dGhpcy5fc2V0Vm9sdW1lKCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IHZvbHVtZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl92b2x1bWU7XG5cdH1cblxuXHRwdWJsaWMgc2V0IG1hc3RlclZvbHVtZSh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuX21hc3RlclZvbHVtZSA9IHZhbDtcblx0XHR0aGlzLl9zZXRWb2x1bWUoKTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgbWFzdGVyVm9sdW1lKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHByaXZhdGUgX3NldFZvbHVtZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5fZ2FpbiAhPT0gbnVsbCkgdGhpcy5fZ2Fpbi5nYWluLnZhbHVlID0gdGhpcy52b2x1bWUgKiB0aGlzLm1hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBjb25uZWN0KGF1ZGlvTm9kZTogQXVkaW9Ob2RlKTogQXVkaW9Ob2RlcyB7XG5cdFx0dGhpcy5fdGFpbD8uY29ubmVjdChhdWRpb05vZGUpO1xuXHRcdHRoaXMuX3RhaWwgPSBhdWRpb05vZGU7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxufSIsImludGVyZmFjZSBPcHRpb25zIHtcblx0ZHVyYXRpb24/OiBudW1iZXI7XG5cdGRlbGF5PzogbnVtYmVyO1xuXHRvbkNvbXBsZXRlPzogKCkgPT4gdm9pZDtcblx0b25VcGRhdGU/OiAoKSA9PiB2b2lkO1xufVxuXG50eXBlIFR3ZWVuVHlwZSA9IFwidG9cIiB8IFwiZnJvbVwiIHwgXCJmcm9tVG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4ge1xuXG5cdHByaXZhdGUgc3RhdGljIF9kZWZhdWx0T3B0aW9uczogT3B0aW9ucyA9IHtcblx0XHRkdXJhdGlvbjogMC41LFxuXHRcdGRlbGF5OiAwLFxuXHRcdG9uQ29tcGxldGU6ICgpID0+IHsgfSxcblx0XHRvblVwZGF0ZTogKCkgPT4geyB9XG5cdH07XG5cblx0cHJpdmF0ZSBfdGFyZ2V0OiBhbnk7XG5cdHByaXZhdGUgX3Byb3BOYW1lOiBzdHJpbmcgPSBcIlwiO1xuXHRwcml2YXRlIF90bzogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBfZnJvbTogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBfZHVyYXRpb246IG51bWJlciA9IDAuNTtcblx0cHJpdmF0ZSBfZGVsYXk6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgX29uQ29tcGxldGU6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG5cdHByaXZhdGUgX29uVXBkYXRlOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuXHRwcml2YXRlIF91cGRhdGVyOiBudW1iZXIgPSAwO1xuXG5cdHB1YmxpYyBzdGF0aWMgdG8odGFyZ2V0OiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIHRvOiBudW1iZXIsIG9wdGlvbnM/OiBPcHRpb25zKTogVHdlZW4ge1xuXHRcdGlmICh0YXJnZXRbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihgcHJvcDogJHtwcm9wTmFtZX0gZG9lcyBub3QgZXhpc3RzIGluICR7dGFyZ2V0fWApO1xuXHRcdGVsc2UgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXQsIHByb3BOYW1lLCAwLCB0bywgXCJ0b1wiLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgZnJvbSh0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgZnJvbTogbnVtYmVyLCBvcHRpb25zPzogT3B0aW9ucyk6IFR3ZWVuIHtcblx0XHRpZiAodGFyZ2V0W3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoYHByb3A6ICR7cHJvcE5hbWV9IGRvZXMgbm90IGV4aXN0cyBpbiAke3RhcmdldH1gKTtcblx0XHRyZXR1cm4gbmV3IFR3ZWVuKHRhcmdldCwgcHJvcE5hbWUsIGZyb20sIDAsIFwiZnJvbVwiLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgZnJvbVRvKHRhcmdldDogYW55LCBwcm9wTmFtZTogc3RyaW5nLCBmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIsIG9wdGlvbnM/OiBPcHRpb25zKTogVHdlZW4ge1xuXHRcdGlmICh0YXJnZXRbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihgcHJvcDogJHtwcm9wTmFtZX0gZG9lcyBub3QgZXhpc3RzIGluICR7dGFyZ2V0fWApO1xuXHRcdHJldHVybiBuZXcgVHdlZW4odGFyZ2V0LCBwcm9wTmFtZSwgZnJvbSwgdG8sIFwiZnJvbVRvXCIsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3Rvcih0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCB0eXBlOiBUd2VlblR5cGUsIG9wdGlvbnM/OiBPcHRpb25zKSB7XG5cdFx0dGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdHRoaXMuX3Byb3BOYW1lID0gcHJvcE5hbWU7XG5cdFx0dGhpcy5fZnJvbSA9IGZyb207XG5cdFx0dGhpcy5fdG8gPSB0bztcblx0XHRvcHRpb25zID0ge1xuXHRcdFx0Li4uVHdlZW4uX2RlZmF1bHRPcHRpb25zLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH07XG5cdFx0dGhpcy5fZHVyYXRpb24gPSBvcHRpb25zPy5kdXJhdGlvbiE7XG5cdFx0dGhpcy5fZGVsYXkgPSBvcHRpb25zPy5kZWxheSE7XG5cdFx0dGhpcy5fb25Db21wbGV0ZSA9IG9wdGlvbnM/Lm9uQ29tcGxldGUhO1xuXHRcdHRoaXMuX29uVXBkYXRlID0gb3B0aW9ucz8ub25VcGRhdGUhO1xuXG5cdFx0aWYgKHRoaXMuX3RhcmdldFt0aGlzLl9wcm9wTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJ0b1wiOlxuXHRcdFx0XHRcdHRoaXMuX3R3ZWVuVG8oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImZyb21cIjpcblx0XHRcdFx0XHR0aGlzLl90d2VlbkZyb20oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImZyb21Ub1wiOlxuXHRcdFx0XHRcdHRoaXMuX3R3ZWVuRnJvbVRvKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgcHJvcDogJHt0aGlzLl9wcm9wTmFtZX0gZG9lcyBub3QgZXhpc3RzIGluICR7dGhpcy5fdGFyZ2V0fWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0IF90aW1lKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIERhdGUubm93KCkgLyAxMDAwO1xuXHR9XG5cblx0cHJpdmF0ZSBfdHdlZW5UbygpOiB2b2lkIHtcblx0XHRjb25zdCBmcm9tID0gdGhpcy5fdGFyZ2V0W3RoaXMuX3Byb3BOYW1lXTtcblx0XHRjb25zdCB0byA9IHRoaXMuX3RvO1xuXHRcdHRoaXMuX3R3ZWVuKGZyb20sIHRvKTtcblx0fVxuXG5cdHByaXZhdGUgX3R3ZWVuRnJvbSgpOiB2b2lkIHtcblx0XHRjb25zdCBmcm9tID0gdGhpcy5fZnJvbTtcblx0XHRjb25zdCB0byA9IHRoaXMuX3RhcmdldFt0aGlzLl9wcm9wTmFtZV07XG5cdFx0dGhpcy5fdHdlZW4oZnJvbSwgdG8pO1xuXHR9XG5cblx0cHJpdmF0ZSBfdHdlZW5Gcm9tVG8oKTogdm9pZCB7XG5cdFx0Y29uc3QgZnJvbSA9IHRoaXMuX2Zyb207XG5cdFx0Y29uc3QgdG8gPSB0aGlzLl90bztcblx0XHR0aGlzLl90d2Vlbihmcm9tLCB0byk7XG5cdH1cblxuXHRwcml2YXRlIF90d2VlbiA9IGFzeW5jIChmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRpZiAodGhpcy5fdGFyZ2V0W3RoaXMuX3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cblx0XHR0aGlzLmtpbGwoKTtcblxuXHRcdGNvbnN0IHN0YXJ0VGltZSA9IHRoaXMuX3RpbWU7XG5cdFx0Y29uc3QgZHVyID0gdGhpcy5fZHVyYXRpb247XG5cdFx0Y29uc3QgZGVsID0gdGhpcy5fZGVsYXk7XG5cdFx0Y29uc3QgZW5kVGltZSA9IHN0YXJ0VGltZSArIGR1ciArIGRlbDtcblxuXHRcdHdoaWxlICh0aGlzLl90aW1lIDwgZW5kVGltZSkge1xuXHRcdFx0aWYgKHRoaXMuX3RpbWUgPCBzdGFydFRpbWUgKyBkZWwpIGNvbnRpbnVlO1xuXG5cdFx0XHRjb25zdCBjcnJUaW1lID0gdGhpcy5fdGltZTtcblx0XHRcdGNvbnN0IHBlcmNlbnRhZ2UgPSAoY3JyVGltZSAtIHN0YXJ0VGltZSkgLyAoZW5kVGltZSAtIHN0YXJ0VGltZSk7XG5cdFx0XHRjb25zdCB2YWwgPSAodG8gLSBmcm9tKSAqIHBlcmNlbnRhZ2UgKyBmcm9tO1xuXG5cdFx0XHR0aGlzLl90YXJnZXRbdGhpcy5fcHJvcE5hbWVdID0gdmFsO1xuXHRcdFx0dGhpcy5fb25VcGRhdGUoKTtcblx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKHJlcyA9PiB7XG5cdFx0XHRcdHRoaXMuX3VwZGF0ZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR0aGlzLmtpbGwoKTtcblx0XHR0aGlzLl90YXJnZXRbdGhpcy5fcHJvcE5hbWVdID0gdG87XG5cdFx0dGhpcy5fb25VcGRhdGUoKTtcblx0XHR0aGlzLl9vbkNvbXBsZXRlKCk7XG5cdH07XG5cblx0cHVibGljIGtpbGwgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fdXBkYXRlcik7XG5cdH07XG5cbn0iLCJpbXBvcnQgQXVkaW9Ob2RlcyBmcm9tIFwiLi9hdWRpb05vZGVcIjtcbmltcG9ydCB7IFBsYXlPcHRpb25zIH0gZnJvbSBcIi4vc25kXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4vdHdlZW5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBTcHJpdGVKU09OIHtcblx0cmVzb3VyY2VzOiBzdHJpbmdbXTtcblx0c3ByaXRlbWFwOiB7XG5cdFx0W2tleTogc3RyaW5nXToge1xuXHRcdFx0c3RhcnQ6IG51bWJlcjtcblx0XHRcdGVuZDogbnVtYmVyO1xuXHRcdFx0bG9vcDogYm9vbGVhbjtcblx0XHR9O1xuXHR9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1ZGlvRGF0YSB7XG5cdGtleTogc3RyaW5nO1xuXHRub2RlczogQXVkaW9Ob2Rlcztcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuXHR2YXIgd2Via2l0QXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvU291cmNlIHtcblxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVORDogc3RyaW5nID0gXCJlbmRcIjtcblx0cHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlczogQXVkaW9Tb3VyY2VbXSA9IFtdO1xuXHRwcml2YXRlIHN0YXRpYyBfY3R4OiBBdWRpb0NvbnRleHQgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBzdGF0aWMgX2lzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSBfYXVkaW9BcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXIgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfYXVkaW9CdWZmZXI6IEF1ZGlvQnVmZmVyIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX2F1ZGlvTGlzdDogTWFwPG51bWJlciwgQXVkaW9EYXRhPiA9IG5ldyBNYXA8bnVtYmVyLCBBdWRpb0RhdGE+KCk7XG5cdHByaXZhdGUgX2NudDogbnVtYmVyID0gMTAwMDtcblx0cHJpdmF0ZSBfanNvbjogU3ByaXRlSlNPTiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF9oYXNTdGFydGVkTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9oYXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfaGFzU3RhcnRlZEFuYWx5c2lzOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX2hhc0FuYWx5emVkOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX21hc3RlclZvbHVtZTogbnVtYmVyID0gMTtcblx0cHJpdmF0ZSBfYW5hbHl6ZVByb21pc2U6IFByb21pc2U8QXVkaW9CdWZmZXI+IHwgbnVsbCA9IG51bGw7XG5cblx0cHVibGljIHN0YXRpYyBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBhY3RpdmF0ZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5faXNBY3RpdmUpIHJldHVybjtcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5cdFx0XHR0aGlzLl9jdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cblx0XHRcdGNvbnN0IGVtcHR5U3JjID0gdGhpcy5fY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuXHRcdFx0ZW1wdHlTcmMuc3RhcnQoKTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGVtcHR5U3JjLnN0b3AoKTtcblx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG5cblx0XHRcdHRoaXMuX2FuYWx5emVBbGxJbnN0YW5jZXMoKTtcblxuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBhbiBlcnIgb2NjdXJyZWQgd2hpbGUgQXVkaW9Tb3VyY2Uuc2V0dXAgJHtlcnJ9YCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgX2FuYWx5emVBbGxJbnN0YW5jZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5faW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlOiBBdWRpb1NvdXJjZSkgPT4ge1xuXHRcdFx0aWYgKGluc3RhbmNlLl9oYXNMb2FkZWQgJiYgIWluc3RhbmNlLl9oYXNTdGFydGVkQW5hbHlzaXMpIHtcblx0XHRcdFx0aW5zdGFuY2UuYW5hbHl6ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgYXN5bmMgX2NyZWF0ZUF1ZGlvQnVmZmVyKGJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBQcm9taXNlPEF1ZGlvQnVmZmVyPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5fY3R4IS5kZWNvZGVBdWRpb0RhdGEubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiBhd2FpdCB0aGlzLl9jdHghLmRlY29kZUF1ZGlvRGF0YShidWZmZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlPEF1ZGlvQnVmZmVyPigocmVzLCByZWopID0+IHtcblx0XHRcdFx0XHR0aGlzLl9jdHghLmRlY29kZUF1ZGlvRGF0YShidWZmZXIsXG5cdFx0XHRcdFx0XHQoZGF0YTogQXVkaW9CdWZmZXIpID0+IHJlcyhkYXRhKSxcblx0XHRcdFx0XHRcdChlcnI6IEVycm9yKSA9PiByZWooZXJyKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBhbiBlcnIgb2NjdXJlZCB3aGlsZSBBdWRpb1NvdXJjZS5fY3JlYXRlQXVkaW9CdWZmZXIgJHtlcnJ9YCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgYXN5bmMgX2NyZWF0ZUF1ZGlvQXJyYXlCdWZmZXIoYXVkaW9TcmM6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXVkaW9TcmMpO1xuXHRcdFx0Y29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCByZXMuYXJyYXlCdWZmZXIoKTtcblx0XHRcdHJldHVybiBhcnJheUJ1ZmZlcjtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgYW4gZXJyIG9jY3VycmVkIHdoaWxlIEF1ZGlvU291cmNlLl9jcmVhdGVBdWRpb0FycmF5QnVmZmVyICR7ZXJyfWApO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdEF1ZGlvU291cmNlLl9pbnN0YW5jZXMucHVzaCh0aGlzKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0IF91bmlxdWVLZXkoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fY250Kys7XG5cdH1cblxuXHRwdWJsaWMgc2V0IG1hc3RlclZvbHVtZSh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuX21hc3RlclZvbHVtZSA9IHZhbDtcblx0XHR0aGlzLl9hdWRpb0xpc3QuZm9yRWFjaCgoYXVkaW86IEF1ZGlvRGF0YSkgPT4ge1xuXHRcdFx0YXVkaW8ubm9kZXMubWFzdGVyVm9sdW1lID0gdGhpcy5fbWFzdGVyVm9sdW1lO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGdldCBtYXN0ZXJWb2x1bWUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFzdGVyVm9sdW1lO1xuXHR9XG5cblx0cHVibGljIGFzeW5jIGxvYWQoYXVkaW9TcmM6IHN0cmluZywganNvbjogU3ByaXRlSlNPTik6IFByb21pc2U8dm9pZD4ge1xuXHRcdGlmICh0aGlzLl9oYXNTdGFydGVkTG9hZGluZykge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiVGhlIGZpbGUgaGFzIGFscmVhZHkgc3RhcnRlZCBsb2FkaW5nLlwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fanNvbiA9IGpzb247XG5cdFx0dGhpcy5faGFzU3RhcnRlZExvYWRpbmcgPSB0cnVlO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLl9hdWRpb0FycmF5QnVmZmVyID0gYXdhaXQgQXVkaW9Tb3VyY2UuX2NyZWF0ZUF1ZGlvQXJyYXlCdWZmZXIoYXVkaW9TcmMpO1xuXHRcdFx0dGhpcy5faGFzTG9hZGVkID0gdHJ1ZTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikgdGhyb3cgZXJyO1xuXHRcdFx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIGVycm9yXCIpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBhc3luYyBhbmFseXplKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGlmICghQXVkaW9Tb3VyY2UuaXNBY3RpdmUpIHJldHVybjtcblx0XHRpZiAodGhpcy5faGFzU3RhcnRlZEFuYWx5c2lzKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJhbmFseXplKCk6IEF1ZGlvQnVmZmVyIGhhcyBhbHJlYWR5IHN0YXJ0ZWQgYW5hbHlzaXNcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghdGhpcy5faGFzTG9hZGVkIHx8IHRoaXMuX2F1ZGlvQXJyYXlCdWZmZXIgPT0gbnVsbCkge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiYW5hbHl6ZSgpOiBUaGUgZmlsZSBoYXNuJ3QgbG9hZGVkIHlldC5cIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5faGFzU3RhcnRlZEFuYWx5c2lzID0gdHJ1ZTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5fYW5hbHl6ZVByb21pc2UgPSBBdWRpb1NvdXJjZS5fY3JlYXRlQXVkaW9CdWZmZXIodGhpcy5fYXVkaW9BcnJheUJ1ZmZlciEpO1xuXHRcdFx0dGhpcy5fYXVkaW9CdWZmZXIgPSBhd2FpdCB0aGlzLl9hbmFseXplUHJvbWlzZTtcblx0XHRcdHRoaXMuX2FuYWx5emVQcm9taXNlID0gbnVsbDtcblx0XHRcdHRoaXMuX2hhc0FuYWx5emVkID0gdHJ1ZTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikgdGhyb3cgZXJyO1xuXHRcdFx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIGVycm9yXCIpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBwbGF5KGtleTogc3RyaW5nLCBvcHRpb25zOiBQbGF5T3B0aW9ucyk6IG51bWJlciB7XG5cdFx0aWYgKCF0aGlzLl9oYXNMb2FkZWQpIHtcblx0XHRcdGNvbnNvbGUud2FybihcInBsYXkoKTogVGhlIGZpbGUgaGFzbid0IGxvYWRlZCB5ZXQuXCIpO1xuXHRcdFx0cmV0dXJuIC05OTk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5faGFzQW5hbHl6ZWQpIHtcblx0XHRcdGlmICghdGhpcy5faGFzU3RhcnRlZEFuYWx5c2lzKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0QXVkaW9Tb3VyY2UuYWN0aXZhdGUoKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKFwicGxheSgpOiBDYW4gbm90IHBsYXkgYXVkaW8gYmVmb3JlIGluaXRpYWxpemF0aW9uIChBdWRpb0NvbnRleHQgbXVzdCBiZSBpbml0aWFsaXphdGlvbiBieSBwb2ludGVyIGV2ZW50KS5cIik7XG5cdFx0XHRcdFx0cmV0dXJuIC05OTk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX2FuYWx5emVQcm9taXNlICE9IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgaWQgPSB0aGlzLl91bmlxdWVLZXk7XG5cdFx0XHRcdHRoaXMuX3BsYXlMYXRlcihpZCwga2V5LCBvcHRpb25zKTtcblx0XHRcdFx0cmV0dXJuIGlkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKChcIl9hbmFseXplUHJvbWlzZSBpcyBudWxsXCIpKTtcblx0XHRcdFx0cmV0dXJuIC05OTk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2pzb24gPT09IG51bGwgfHwgIXRoaXMuX2pzb24uc3ByaXRlbWFwIHx8ICEoa2V5IGluIHRoaXMuX2pzb24uc3ByaXRlbWFwKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBqc29uIGVycm9yOiAke3RoaXMuX2pzb259YCk7XG5cdFx0fVxuXG5cdFx0aWYgKChBdWRpb1NvdXJjZS5fY3R4Py5zdGF0ZSBhcyBzdHJpbmcpID09IFwiaW50ZXJydXB0ZWRcIikge1xuXHRcdFx0Y29uc3QgaWQgPSB0aGlzLl91bmlxdWVLZXk7XG5cdFx0XHRBdWRpb1NvdXJjZS5fY3R4Py5yZXN1bWUoKS50aGVuKCgpID0+IHtcblx0XHRcdFx0dGhpcy5wbGF5KGtleSwgb3B0aW9ucyk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBpZDtcblx0XHR9XG5cblx0XHRjb25zdCBpZCA9IHRoaXMuX3VuaXF1ZUtleTtcblx0XHR0aGlzLl9wbGF5KGlkLCBrZXksIG9wdGlvbnMpO1xuXHRcdHRoaXMuc2V0TG9vcChvcHRpb25zLmxvb3AhLCBpZCk7XG5cdFx0dGhpcy5zZXRWb2x1bWUob3B0aW9ucy52b2x1bWUhLCBpZClcblxuXHRcdHJldHVybiBpZDtcblx0fVxuXG5cdHB1YmxpYyBzdG9wKGlkOiBudW1iZXIsIGRlbGF5OiBudW1iZXIgPSAwKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLl9hdWRpb0xpc3QuaGFzKGlkKSkgcmV0dXJuO1xuXG5cdFx0dGhpcy5fYXVkaW9MaXN0LmdldChpZCk/Lm5vZGVzLmF1ZGlvU3JjIS5zdG9wKEF1ZGlvU291cmNlLl9jdHghLmN1cnJlbnRUaW1lICsgZGVsYXkpO1xuXHRcdHRoaXMuX2F1ZGlvTGlzdC5kZWxldGUoaWQpO1xuXHR9XG5cblx0cHVibGljIHNldFZvbHVtZSh2b2w6IG51bWJlciwgaWQ6IG51bWJlcik6IHZvaWQge1xuXHRcdGlmICghdGhpcy5fYXVkaW9MaXN0LmhhcyhpZCkpIHJldHVybjtcblxuXHRcdGNvbnN0IGF1ZGlvTm9kZXM6IEF1ZGlvTm9kZXMgPSB0aGlzLl9hdWRpb0xpc3QuZ2V0KGlkKT8ubm9kZXMhO1xuXHRcdGlmIChhdWRpb05vZGVzICE9PSBudWxsICYmIGF1ZGlvTm9kZXMudm9sdW1lICE9PSBudWxsKSBhdWRpb05vZGVzLnZvbHVtZSA9IHZvbDtcblx0fVxuXG5cdHB1YmxpYyBzZXRMb29wKGxvb3A6IGJvb2xlYW4sIGlkOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuX2F1ZGlvTGlzdC5oYXMoaWQpKSByZXR1cm47XG5cblx0XHRjb25zdCBrZXkgPSB0aGlzLl9hdWRpb0xpc3QuZ2V0KGlkKT8ua2V5O1xuXHRcdGNvbnN0IGF1ZGlvTm9kZXMgPSB0aGlzLl9hdWRpb0xpc3QuZ2V0KGlkKT8ubm9kZXM7XG5cblx0XHRpZiAobG9vcCkge1xuXHRcdFx0Y29uc3Qgc3RhcnQgPSB0aGlzLl9qc29uIS5zcHJpdGVtYXBba2V5IV0uc3RhcnQ7XG5cdFx0XHRjb25zdCBlbmQgPSB0aGlzLl9qc29uIS5zcHJpdGVtYXBba2V5IV0uZW5kO1xuXHRcdFx0YXVkaW9Ob2RlcyEuYXVkaW9TcmMhLmxvb3AgPSB0cnVlO1xuXHRcdFx0YXVkaW9Ob2RlcyEuYXVkaW9TcmMhLmxvb3BTdGFydCA9IHN0YXJ0O1xuXHRcdFx0YXVkaW9Ob2RlcyEuYXVkaW9TcmMhLmxvb3BFbmQgPSBlbmQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF1ZGlvTm9kZXMhLmF1ZGlvU3JjIS5sb29wID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGFzeW5jIGZhZGUodm9sVG86IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuXHRcdGlmICghdGhpcy5fYXVkaW9MaXN0LmhhcyhpZCkpIHJldHVybjtcblx0XHRjb25zdCBhdWRpb05vZGVzID0gdGhpcy5fYXVkaW9MaXN0LmdldChpZCk/Lm5vZGVzO1xuXG5cdFx0YXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlczogKCkgPT4gdm9pZCkgPT4ge1xuXHRcdFx0VHdlZW4udG8oYXVkaW9Ob2RlcywgXCJ2b2x1bWVcIiwgdm9sVG8sIHtcblx0XHRcdFx0ZHVyYXRpb246IGR1cmF0aW9uLFxuXHRcdFx0XHRvbkNvbXBsZXRlOiByZXNcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdH1cblxuXHRwdWJsaWMgZmFkZUFsbCh2b2xUbzogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5fYXVkaW9MaXN0LmZvckVhY2goKF86IEF1ZGlvRGF0YSwgaWQ6IG51bWJlcikgPT4ge1xuXHRcdFx0dGhpcy5mYWRlKHZvbFRvLCAwLjUsIGlkKS50aGVuKF8gPT4gdGhpcy5zdG9wKGlkKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIF9wbGF5KGlkOiBudW1iZXIsIGtleTogc3RyaW5nLCBvcHRpb25zOiBQbGF5T3B0aW9ucyk6IHZvaWQge1xuXHRcdGNvbnN0IGF1ZGlvU3JjOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGUgPSBBdWRpb1NvdXJjZS5fY3R4IS5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcblx0XHRhdWRpb1NyYyEuYnVmZmVyID0gdGhpcy5fYXVkaW9CdWZmZXI7XG5cblx0XHRjb25zdCBnYWluTm9kZSA9IEF1ZGlvU291cmNlLl9jdHghLmNyZWF0ZUdhaW4oKTtcblx0XHRjb25zdCBhdWRpb05vZGVzOiBBdWRpb05vZGVzID0gbmV3IEF1ZGlvTm9kZXMoYXVkaW9TcmMsIGdhaW5Ob2RlKTtcblx0XHRhdWRpb05vZGVzLm1hc3RlclZvbHVtZSA9IHRoaXMubWFzdGVyVm9sdW1lO1xuXHRcdGF1ZGlvTm9kZXMuY29ubmVjdChnYWluTm9kZSkuY29ubmVjdChBdWRpb1NvdXJjZS5fY3R4IS5kZXN0aW5hdGlvbik7XG5cblx0XHRjb25zdCBzdGFydCA9IHRoaXMuX2pzb24hLnNwcml0ZW1hcFtrZXldLnN0YXJ0O1xuXHRcdGNvbnN0IGVuZCA9IHRoaXMuX2pzb24hLnNwcml0ZW1hcFtrZXldLmVuZDtcblxuXHRcdGlmIChvcHRpb25zLmxvb3AhKSB7XG5cdFx0XHRhdWRpb05vZGVzLmF1ZGlvU3JjIS5zdGFydChBdWRpb1NvdXJjZS5fY3R4IS5jdXJyZW50VGltZSArIG9wdGlvbnMuZGVsYXkhLCBzdGFydCwgZW5kKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgZHVyID0gTWF0aC5tYXgoZW5kIC0gc3RhcnQsIDAuMSk7XG5cdFx0XHRhdWRpb05vZGVzLmF1ZGlvU3JjIS5zdGFydChBdWRpb1NvdXJjZS5fY3R4IS5jdXJyZW50VGltZSArIG9wdGlvbnMuZGVsYXkhLCBzdGFydCwgZHVyKTtcblx0XHR9XG5cblx0XHRhdWRpb05vZGVzLmF1ZGlvU3JjIS5vbmVuZGVkID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5zdG9wKGlkKTtcblx0XHRcdGF1ZGlvTm9kZXMuYXVkaW9TcmMhLmRpc2Nvbm5lY3QoKTtcblx0XHRcdGF1ZGlvTm9kZXMuYXVkaW9TcmMhLmJ1ZmZlciA9IG51bGw7XG5cdFx0XHRvcHRpb25zLmNhbGxiYWNrIShpZCk7XG5cdFx0fTtcblxuXHRcdHRoaXMuX2F1ZGlvTGlzdC5zZXQoaWQsIHtcblx0XHRcdGtleSxcblx0XHRcdG5vZGVzOiBhdWRpb05vZGVzLFxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBfcGxheUxhdGVyKGlkOiBudW1iZXIsIGtleTogc3RyaW5nLCBvcHRpb25zOiBQbGF5T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGF3YWl0IHRoaXMuX2FuYWx5emVQcm9taXNlITtcblx0XHR0aGlzLl9wbGF5KGlkLCBrZXksIG9wdGlvbnMpO1xuXHRcdHRoaXMuc2V0TG9vcChvcHRpb25zLmxvb3AhLCBpZCk7XG5cdFx0dGhpcy5zZXRWb2x1bWUob3B0aW9ucy52b2x1bWUhLCBpZClcblx0fVxufSIsImltcG9ydCB7IEtJVF9JTkZPIH0gZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCBBdWRpb1NvdXJjZSBmcm9tIFwiLi9hdWRpb1NvdXJjZVwiO1xuaW1wb3J0IHsgUGxheU9wdGlvbnMgfSBmcm9tIFwiLi9zbmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmRLaXQge1xuXG5cdHB1YmxpYyBrZXk6IHN0cmluZztcblx0cHJpdmF0ZSBfaWRzOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSBfYXVkaW9TcmM6IEF1ZGlvU291cmNlID0gbmV3IEF1ZGlvU291cmNlKCk7XG5cdHByaXZhdGUgX21hc3RlclZvbHVtZTogbnVtYmVyID0gMTtcblxuXHRjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xuXHRcdHRoaXMua2V5ID0ga2V5O1xuXHR9XG5cblx0cHVibGljIGdldCBtYXN0ZXJWb2x1bWUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fbWFzdGVyVm9sdW1lO1xuXHR9XG5cblx0cHVibGljIHNldCBtYXN0ZXJWb2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl9tYXN0ZXJWb2x1bWUgPSB2YWw7XG5cdFx0dGhpcy5fYXVkaW9TcmMubWFzdGVyVm9sdW1lID0gdGhpcy5fbWFzdGVyVm9sdW1lO1xuXHR9XG5cblx0cHVibGljIGFzeW5jIGxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0Y29uc3QganNvbiA9IEtJVF9JTkZPW3RoaXMua2V5XS5qc29uO1xuXHRcdGNvbnN0IGF1ZGlvU3JjID0gS0lUX0lORk9bdGhpcy5rZXldLmF1ZGlvU3JjO1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCB0aGlzLl9hdWRpb1NyYy5sb2FkKGF1ZGlvU3JjLCBqc29uKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHRocm93IGVycjtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgYW5hbHl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgdGhpcy5fYXVkaW9TcmMuYW5hbHl6ZSgpO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0dGhyb3cgZXJyO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBwbGF5KGtleTogc3RyaW5nLCBvcHRpb25zOiBQbGF5T3B0aW9ucyk6IHZvaWQge1xuXHRcdGNvbnN0IG9sZElkID0gdGhpcy5faWRzLmdldChrZXkpO1xuXHRcdGlmIChvbGRJZCAhPT0gdW5kZWZpbmVkKSB0aGlzLl9hdWRpb1NyYy5mYWRlKDAsIDAuMDUsIG9sZElkKTtcblxuXHRcdGNvbnN0IGlkID0gdGhpcy5fYXVkaW9TcmMucGxheShrZXksIG9wdGlvbnMpO1xuXHRcdGNvbnN0IGZhZGVvdXREdXJhdGlvbjogbnVtYmVyID0gMC4wNTtcblx0XHRpZiAob3B0aW9ucy5kdXJhdGlvbiEgPiBmYWRlb3V0RHVyYXRpb24pIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9hdWRpb1NyYy5mYWRlKDAsIGZhZGVvdXREdXJhdGlvbiwgaWQpO1xuXHRcdFx0fSwgKG9wdGlvbnMuZHVyYXRpb24hIC0gZmFkZW91dER1cmF0aW9uKSAqIDEwMDApO1xuXHRcdH1cblxuXHRcdHRoaXMuX2lkcy5zZXQoa2V5LnJlcGxhY2UoL19bMC05XVswLTldLywgXCJcIiksIGlkKTtcblx0fVxuXG5cdHB1YmxpYyBzdG9wKHNvdW5kS2V5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCBpZCA9IHRoaXMuX2lkcy5nZXQoc291bmRLZXkpO1xuXHRcdGlmIChpZCkgdGhpcy5fYXVkaW9TcmMuc3RvcChpZCk7XG5cdFx0ZWxzZSBjb25zb2xlLndhcm4oYFtTb3VuZEtpdC5zdG9wKCldIGtleTogJHtzb3VuZEtleX0gaGF2ZW4ndCBwbGF5ZWRgKTtcblx0fVxuXG5cdHB1YmxpYyBmYWRlKHZvbFRvOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLl9hdWRpb1NyYy5mYWRlQWxsKHZvbFRvKTtcblx0fVxuXG59XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMub25jZSA9IG9uY2U7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBlcnJvckxpc3RlbmVyKGVycikge1xuICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCByZXNvbHZlcik7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcigpIHtcbiAgICAgIGlmICh0eXBlb2YgZW1pdHRlci5yZW1vdmVMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG5cbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgcmVzb2x2ZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgZXJyb3JMaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGhhbmRsZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCAnZXJyb3InLCBoYW5kbGVyLCBmbGFncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIGxpc3RlbmVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgZW1pdHRlci5vbmNlKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1pdHRlci5vbihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBFdmVudFRhcmdldCBkb2VzIG5vdCBoYXZlIGBlcnJvcmAgZXZlbnQgc2VtYW50aWNzIGxpa2UgTm9kZVxuICAgIC8vIEV2ZW50RW1pdHRlcnMsIHdlIGRvIG5vdCBsaXN0ZW4gZm9yIGBlcnJvcmAgZXZlbnRzIGhlcmUuXG4gICAgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmN0aW9uIHdyYXBMaXN0ZW5lcihhcmcpIHtcbiAgICAgIC8vIElFIGRvZXMgbm90IGhhdmUgYnVpbHRpbiBgeyBvbmNlOiB0cnVlIH1gIHN1cHBvcnQgc28gd2VcbiAgICAgIC8vIGhhdmUgdG8gZG8gaXQgbWFudWFsbHkuXG4gICAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgd3JhcExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyKGFyZyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBlbWl0dGVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCI7XG5pbXBvcnQgeyBFVkVOVF9DTEFTU19OQU1FUywgVE9HR0xFX1NPVU5EX0tFWVMsIEVOQUJMRV9UQUdTIH0gZnJvbSBcIi4vY29uc3RhbnRcIjtcblxuY29uc3QgaXNUb3VjaERldmljZTogYm9vbGVhbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93Lm9udG91Y2hzdGFydCAhPT0gdW5kZWZpbmVkXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTUludGVyYWN0aW9uIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElOVEVSQUNUOiBcImludGVyYWN0XCJcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy5faW5pdCgpXG5cdH1cblxuXHRwcml2YXRlIF9pbml0KCk6IHZvaWQge1xuXHRcdGZvciAoY29uc3Qga2V5IGluIEVWRU5UX0NMQVNTX05BTUVTKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSBFVkVOVF9DTEFTU19OQU1FU1trZXldXG5cdFx0XHRjb25zdCBlbGVtZW50czogSFRNTENvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBlbCA9IGVsZW1lbnRzW2ldXG5cdFx0XHRcdGNvbnN0IHNvdW5kS2V5ID0ga2V5LnJlcGxhY2UoXCJzbmRfX1wiLCBcIlwiKVxuXHRcdFx0XHRjb25zdCBldmVudE5hbWUgPSB0aGlzLl9nZXRFdmVudE5hbWUoc291bmRLZXksIGVsIGFzIEhUTUxFbGVtZW50KVxuXHRcdFx0XHRpZiAoZXZlbnROYW1lID09IG51bGwpIGJyZWFrXG5cblx0XHRcdFx0dGhpcy5fbGlzdGVuKGVsIGFzIEhUTUxFbGVtZW50LCBldmVudE5hbWUsIHNvdW5kS2V5KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX2dldEV2ZW50TmFtZShzb3VuZEtleTogc3RyaW5nLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB8IG51bGwge1xuXHRcdGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuXG5cdFx0Zm9yIChjb25zdCB0YWdTdHJpbmcgaW4gRU5BQkxFX1RBR1MpIHtcblxuXHRcdFx0aWYgKHRhZ05hbWUgPT0gXCJpbnB1dFwiICYmIHRhZ1N0cmluZy5tYXRjaChcImlucHV0XCIpICE9IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgdHlwZSA9IChlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnR5cGUgfHwgXCJcIlxuXHRcdFx0XHRjb25zdCB0eXBlcyA9IHRhZ1N0cmluZy5zcGxpdChcIjpcIilbMV0uc3BsaXQoXCIsXCIpXG5cdFx0XHRcdGZvciAoY29uc3QgZXZlbnQgaW4gRU5BQkxFX1RBR1NbdGFnU3RyaW5nXS5ldmVudHMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGkgaW4gdHlwZXMpIHtcblx0XHRcdFx0XHRcdGlmICh0eXBlICE9IHR5cGVzW2ldKSBjb250aW51ZVxuXHRcdFx0XHRcdFx0Y29uc3Qgc291bmRzID0gRU5BQkxFX1RBR1NbdGFnU3RyaW5nXS5ldmVudHNbZXZlbnRdLnNwbGl0KFwiLFwiKVxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBqIGluIHNvdW5kcykge1xuXHRcdFx0XHRcdFx0XHRpZiAoc291bmRLZXkgPT0gc291bmRzW2pdKSByZXR1cm4gZXZlbnRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0YWdTdHJpbmcgPT0gdGFnTmFtZSB8fCB0YWdTdHJpbmcgPT0gXCJhbnlcIikge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgZXZlbnQgaW4gRU5BQkxFX1RBR1NbdGFnU3RyaW5nXS5ldmVudHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHNvdW5kcyA9IEVOQUJMRV9UQUdTW3RhZ1N0cmluZ10uZXZlbnRzW2V2ZW50XS5zcGxpdChcIixcIilcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgaSBpbiBzb3VuZHMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHNvdW5kS2V5ID09IHNvdW5kc1tpXSkgcmV0dXJuIGV2ZW50XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGxcblx0fVxuXG5cdHByaXZhdGUgX2xpc3RlbihlbGVtZW50OiBIVE1MRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIHNvdW5kS2V5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZSkgPT4gdGhpcy5fcHJvY2VzcyhlLCBldmVudE5hbWUsIHNvdW5kS2V5KSk7XG5cdH1cblxuXHRwcml2YXRlIF9wcm9jZXNzKGU6IEV2ZW50LCBldmVudE5hbWU6IHN0cmluZywgc291bmRLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGNvbnN0IHRhcmdldDogSFRNTEVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudFxuXG5cdFx0aWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGBzbmRfXyR7c291bmRLZXl9YCkpIHJldHVyblxuXHRcdGlmIChzb3VuZEtleSA9PSBcInRvZ2dsZVwiKSB7XG5cdFx0XHRzb3VuZEtleSA9ICh0YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA/IFRPR0dMRV9TT1VORF9LRVlTWzBdIDogVE9HR0xFX1NPVU5EX0tFWVNbMV1cblx0XHR9XG5cblx0XHR0aGlzLl9lbWl0KHRhcmdldCBhcyBIVE1MRWxlbWVudCwgZXZlbnROYW1lLCBzb3VuZEtleSlcblx0fVxuXG5cdHByaXZhdGUgX2VtaXQoRE9NOiBIVE1MRWxlbWVudCwgZXZlbnQ6IHN0cmluZywgc291bmRLZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibXV0ZWRcIikpIHJldHVyblxuXHRcdHRoaXMuZW1pdChET01JbnRlcmFjdGlvbi5JTlRFUkFDVCwgc291bmRLZXkpXG5cdH1cblxufSIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50ZW1pdHRlcjNcIjtcbmltcG9ydCB7IEtpdEtpbmRzLCBLSVRTLCBTT1VORFMsIFNXSVBFX1NPVU5EX0tFWVMsIFRBUF9TT1VORF9LRVlTLCBUWVBFX1NPVU5EX0tFWVMgfSBmcm9tIFwiLi9jb25zdGFudFwiO1xuaW1wb3J0IFNvdW5kS2l0IGZyb20gXCIuL3NvdW5kS2l0XCI7XG5pbXBvcnQgRE9NSW50ZXJhY3Rpb24gZnJvbSBcIi4vZG9tSW50ZXJhY3Rpb25cIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi90d2VlblwiO1xuaW1wb3J0IEF1ZGlvU291cmNlIGZyb20gXCIuL2F1ZGlvU291cmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU25kT3B0aW9ucyB7XG5cdGVhc3lTZXR1cD86IGJvb2xlYW47XG5cdG11dGVPbldpbmRvd0JsdXI/OiBib29sZWFuO1xuXHRwcmVsb2FkU291bmRLaXQ/OiBudWxsIHwgS2l0S2luZHM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheU9wdGlvbnMge1xuXHRsb29wPzogYm9vbGVhbjtcblx0dm9sdW1lPzogbnVtYmVyO1xuXHRkdXJhdGlvbj86IG51bWJlcjtcblx0ZGVsYXk/OiBudW1iZXI7XG5cdGNhbGxiYWNrPzogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNuZCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cblx0cHVibGljIHN0YXRpYyByZWFkb25seSBDSEFOR0VfU09VTkRfS0lUOiBzdHJpbmcgPSBcImNoYW5nZV9zb3VuZF9raXRcIjtcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBTT1VORFMgPSBTT1VORFM7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS0lUUyA9IEtJVFM7XG5cblx0cHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlczogU25kW10gPSBbXTtcblx0cHJpdmF0ZSBzdGF0aWMgX2luaXRpYWxpemVkU291bmRLaXRzOiBNYXA8c3RyaW5nLCBTb3VuZEtpdD4gPSBuZXcgTWFwPHN0cmluZywgU291bmRLaXQ+KCk7XG5cdHByaXZhdGUgc3RhdGljIF9tYXN0ZXJWb2x1bWU6IG51bWJlciA9IDE7XG5cblx0cHJpdmF0ZSBfc291bmRLaXQ6IFNvdW5kS2l0ID0gbmV3IFNvdW5kS2l0KEtJVFMuU05EMDEpO1xuXHRwcml2YXRlIF9kb206IERPTUludGVyYWN0aW9uIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX3ZvbDogbnVtYmVyID0gMTtcblx0cHJpdmF0ZSBfaXNNdXRlZEJ5RGV2ZWxvcGVyOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX2lzTXV0ZWRCeVdpbmRvdzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9pc1dpbmRvd0JsdXJyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfbXV0ZU9uV2luZG93Qmx1cjogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9mYWRlVm9sOiBudW1iZXIgPSAxO1xuXHRwcml2YXRlIF93aW5kb3dWb2w6IG51bWJlciA9IDE7XG5cdHByaXZhdGUgX2ZhZGVUd2VlbkJ5RGV2ZWxvcGVyOiBUd2VlbiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF9mYWRlVHdlZW5CeVdpbmRvd0V2ZW50OiBUd2VlbiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHN0YXRpYyBfZGVmYXVsdE9wdGlvbnM6IFNuZE9wdGlvbnMgPSB7XG5cdFx0bXV0ZU9uV2luZG93Qmx1cjogdHJ1ZSxcblx0XHRlYXN5U2V0dXA6IGZhbHNlLFxuXHRcdHByZWxvYWRTb3VuZEtpdDogbnVsbCxcblx0fTtcblx0cHJpdmF0ZSBzdGF0aWMgX2RlZmF1bHRQbGF5T3B0aW9uczogUGxheU9wdGlvbnMgPSB7XG5cdFx0bG9vcDogZmFsc2UsXG5cdFx0dm9sdW1lOiAxLFxuXHRcdGRlbGF5OiAwLFxuXHRcdGR1cmF0aW9uOiAtMSxcblx0XHRjYWxsYmFjazogKCkgPT4geyB9XG5cdH07XG5cblx0cHVibGljIHN0YXRpYyBnZXQgbWFzdGVyVm9sdW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9tYXN0ZXJWb2x1bWU7IH1cblx0cHVibGljIHN0YXRpYyBzZXQgbWFzdGVyVm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fbWFzdGVyVm9sdW1lID0gdmFsO1xuXHRcdHRoaXMuX2luc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZTogU25kKSA9PiB7XG5cdFx0XHRpbnN0YW5jZS5fc291bmRLaXQubWFzdGVyVm9sdW1lID0gdGhpcy5fbWFzdGVyVm9sdW1lICogaW5zdGFuY2UuX3ZvbHVtZTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBTbmRPcHRpb25zKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXHRcdFNuZC5faW5zdGFuY2VzLnB1c2godGhpcyk7XG5cblx0XHRvcHRpb25zID0ge1xuXHRcdFx0Li4uU25kLl9kZWZhdWx0T3B0aW9ucyxcblx0XHRcdC4uLm9wdGlvbnMsXG5cdFx0fTtcblx0XHR0aGlzLl9tdXRlT25XaW5kb3dCbHVyID0gb3B0aW9ucy5tdXRlT25XaW5kb3dCbHVyIHx8IGZhbHNlO1xuXG5cdFx0aWYgKG9wdGlvbnM/LmVhc3lTZXR1cCkge1xuXHRcdFx0dGhpcy5fZG9tID0gbmV3IERPTUludGVyYWN0aW9uKCk7XG5cdFx0XHR0aGlzLl9kb20ub24oRE9NSW50ZXJhY3Rpb24uSU5URVJBQ1QsIHRoaXMuX29uSW50ZXJhY3QpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5wcmVsb2FkU291bmRLaXQpIHRoaXMubG9hZChvcHRpb25zLnByZWxvYWRTb3VuZEtpdCk7XG5cblx0XHRjb25zdCBpbml0QXVkaW9Db250ZXh0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0QXVkaW9Tb3VyY2UuYWN0aXZhdGUoKTtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5pdEF1ZGlvQ29udGV4dCk7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaW5pdEF1ZGlvQ29udGV4dCk7XG5cdFx0fTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluaXRBdWRpb0NvbnRleHQsIHsgb25jZTogdHJ1ZSB9KTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaW5pdEF1ZGlvQ29udGV4dCwgeyBvbmNlOiB0cnVlIH0pO1xuXG5cdFx0Y29uc3QgaXNTcCA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxBbmRyb2lkLitNb2JpbGUvKSAhPSBudWxsO1xuXHRcdGlmIChpc1NwKSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgdGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuX29uQmx1cik7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMuX29uRm9jdXMpO1xuXHRcdH1cblxuXHR9XG5cblx0cHVibGljIGdldCBraXQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3NvdW5kS2l0LmtleTsgfVxuXHRwdWJsaWMgZ2V0IGlzTXV0ZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9pc011dGVkQnlEZXZlbG9wZXIgfHwgdGhpcy5faXNNdXRlZEJ5V2luZG93OyB9XG5cdHB1YmxpYyBnZXQgaXNXaW5kb3dCbHVycmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5faXNXaW5kb3dCbHVycmVkOyB9XG5cblx0cHJpdmF0ZSBnZXQgX2ZhZGVWb2x1bWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2ZhZGVWb2w7IH1cblx0cHJpdmF0ZSBzZXQgX2ZhZGVWb2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl9mYWRlVm9sID0gdmFsO1xuXHRcdHRoaXMuX3ZvbHVtZSA9IHRoaXMuX2ZhZGVWb2wgKiB0aGlzLl93aW5kb3dWb2x1bWU7XG5cdH1cblxuXHRwcml2YXRlIGdldCBfd2luZG93Vm9sdW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl93aW5kb3dWb2w7IH1cblx0cHJpdmF0ZSBzZXQgX3dpbmRvd1ZvbHVtZSh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuX3dpbmRvd1ZvbCA9IHZhbDtcblx0XHR0aGlzLl92b2x1bWUgPSB0aGlzLl9mYWRlVm9sdW1lICogdGhpcy5fd2luZG93Vm9sO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXQgX3ZvbHVtZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl92b2w7XG5cdH1cblx0cHJpdmF0ZSBzZXQgX3ZvbHVtZSh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuX3ZvbCA9IHZhbDtcblx0XHR0aGlzLl9zb3VuZEtpdC5tYXN0ZXJWb2x1bWUgPSB0aGlzLl92b2wgKiBTbmQuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBsb2FkKHNvdW5kS2l0S2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0aGlzLl9zb3VuZEtpdC5mYWRlKDApO1xuXHRcdGNvbnN0IG9sZEtleSA9IHRoaXMuX3NvdW5kS2l0LmtleTtcblx0XHRjb25zdCBraXQgPSBTbmQuX2luaXRpYWxpemVkU291bmRLaXRzLmdldChzb3VuZEtpdEtleSk7XG5cblx0XHRpZiAoa2l0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnN0IG5ld0tpdCA9IG5ldyBTb3VuZEtpdChzb3VuZEtpdEtleSk7XG5cdFx0XHRTbmQuX2luaXRpYWxpemVkU291bmRLaXRzLnNldChzb3VuZEtpdEtleSwgbmV3S2l0KTtcblx0XHRcdGF3YWl0IG5ld0tpdC5sb2FkKCk7XG5cdFx0XHRhd2FpdCBuZXdLaXQuYW5hbHl6ZSgpO1xuXHRcdFx0dGhpcy5fc291bmRLaXQgPSBuZXdLaXQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3NvdW5kS2l0ID0ga2l0O1xuXHRcdH1cblxuXHRcdHRoaXMuX3NvdW5kS2l0LmZhZGUoMSk7XG5cdFx0Y29uc3QgY3JyS2V5ID0gdGhpcy5fc291bmRLaXQua2V5O1xuXHRcdGlmIChvbGRLZXkgIT09IGNycktleSkgdGhpcy5lbWl0KFNuZC5DSEFOR0VfU09VTkRfS0lULCBjcnJLZXksIG9sZEtleSk7XG5cdH1cblxuXHRwdWJsaWMgcGxheShzb3VuZEtleTogc3RyaW5nLCBvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0b3B0aW9ucyA9IHtcblx0XHRcdC4uLlNuZC5fZGVmYXVsdFBsYXlPcHRpb25zLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH07XG5cdFx0aWYgKHRoaXMuaXNXaW5kb3dCbHVycmVkKSByZXR1cm47XG5cdFx0aWYgKHNvdW5kS2V5ID09PSBTT1VORFMuVEFQKSByZXR1cm4gdGhpcy5wbGF5VGFwKG9wdGlvbnMpO1xuXHRcdGlmIChzb3VuZEtleSA9PT0gU09VTkRTLlRZUEUpIHJldHVybiB0aGlzLnBsYXlUeXBlKG9wdGlvbnMpO1xuXHRcdGlmIChzb3VuZEtleSA9PT0gU09VTkRTLlNXSVBFKSByZXR1cm4gdGhpcy5wbGF5U3dpcGUob3B0aW9ucyk7XG5cblx0XHR0aGlzLl9zb3VuZEtpdC5wbGF5KHNvdW5kS2V5LCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBzdG9wKGtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5fc291bmRLaXQuc3RvcChrZXkpO1xuXHR9XG5cblx0cHVibGljIG11dGUoKTogdm9pZCB7XG5cdFx0dGhpcy5faXNNdXRlZEJ5RGV2ZWxvcGVyID0gdHJ1ZTtcblx0XHR0aGlzLl9mYWRlQnlEZXZlbG9wZXIoMCwgMC4zKTtcblx0fVxuXG5cdHB1YmxpYyB1bm11dGUoKTogdm9pZCB7XG5cdFx0dGhpcy5faXNNdXRlZEJ5RGV2ZWxvcGVyID0gZmFsc2U7XG5cdFx0dGhpcy5fZmFkZUJ5RGV2ZWxvcGVyKDEsIDAuMyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVRhcChvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5fcGxheVJhbmRvbShUQVBfU09VTkRfS0VZUywgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVN3aXBlKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLl9wbGF5UmFuZG9tKFNXSVBFX1NPVU5EX0tFWVMsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlUeXBlKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLl9wbGF5UmFuZG9tKFRZUEVfU09VTkRfS0VZUywgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheUJ1dHRvbihvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuQlVUVE9OLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5Q2F1dGlvbihvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuQ0FVVElPTiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheUNlbGVicmF0aW9uKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5DRUxFQlJBVElPTiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheURpc2FibGVkKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5ESVNBQkxFRCwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheU5vdGlmaWNhdGlvbihvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuTk9USUZJQ0FUSU9OLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5UHJvZ3Jlc3NMb29wKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5QUk9HUkVTU19MT09QLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5UmluZ3RvbmVMb29wKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5SSU5HVE9ORV9MT09QLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5U2VsZWN0KG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5TRUxFQ1QsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlUcmFuc2l0aW9uVXAob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLlRSQU5TSVRJT05fVVAsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlUcmFuc2l0aW9uRG93bihvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuVFJBTlNJVElPTl9ET1dOLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5VG9nZ2xlT24ob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLlRPR0dMRV9PTiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVRvZ2dsZU9mZihvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuVE9HR0xFX09GRiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwcml2YXRlIF9wbGF5UmFuZG9tKGtleXM6IHN0cmluZ1tdLCBvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KGtleXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoga2V5cy5sZW5ndGgpXSwgb3B0aW9ucyk7XG5cdH1cblxuXHRwcml2YXRlIF9vblZpc2liaWxpdHlDaGFuZ2UgPSAoKTogdm9pZCA9PiB7XG5cdFx0d2luZG93LmRvY3VtZW50LmhpZGRlbiA/IHRoaXMuX29uQmx1cigpIDogdGhpcy5fb25Gb2N1cygpO1xuXHR9O1xuXG5cdHByaXZhdGUgX29uQmx1ciA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAodGhpcy5fbXV0ZU9uV2luZG93Qmx1cikgdGhpcy5fbXV0ZU9uQmx1cigpO1xuXHRcdHRoaXMuX2lzV2luZG93Qmx1cnJlZCA9IHRydWU7XG5cdH07XG5cblx0cHJpdmF0ZSBfb25Gb2N1cyA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAodGhpcy5fbXV0ZU9uV2luZG93Qmx1cikgdGhpcy5fdW5tdXRlT25Gb2N1cygpO1xuXHRcdHRoaXMuX2lzV2luZG93Qmx1cnJlZCA9IGZhbHNlO1xuXHR9O1xuXG5cdHByaXZhdGUgX211dGVPbkJsdXIoKTogdm9pZCB7XG5cdFx0dGhpcy5faXNNdXRlZEJ5V2luZG93ID0gdHJ1ZTtcblx0XHR0aGlzLl9mYWRlQnlXaW5kb3dFdmVudCgwLCAwLjMpO1xuXHR9XG5cblx0cHJpdmF0ZSBfdW5tdXRlT25Gb2N1cygpOiB2b2lkIHtcblx0XHR0aGlzLl9pc011dGVkQnlXaW5kb3cgPSBmYWxzZTtcblx0XHR0aGlzLl9mYWRlQnlXaW5kb3dFdmVudCgxLCAwLjMpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBfZmFkZUJ5RGV2ZWxvcGVyKHZvbHVtZVRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAodGhpcy5fZmFkZVR3ZWVuQnlEZXZlbG9wZXIgIT0gbnVsbCkgdGhpcy5fZmFkZVR3ZWVuQnlEZXZlbG9wZXIua2lsbCgpO1xuXHRcdHRoaXMuX2ZhZGVUd2VlbkJ5RGV2ZWxvcGVyID0gVHdlZW4udG8odGhpcywgXCJfZmFkZVZvbHVtZVwiLCB2b2x1bWVUbywgeyBkdXJhdGlvbiB9KTtcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgX2ZhZGVCeVdpbmRvd0V2ZW50KHZvbHVtZVRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAodGhpcy5fZmFkZVR3ZWVuQnlXaW5kb3dFdmVudCAhPSBudWxsKSB0aGlzLl9mYWRlVHdlZW5CeVdpbmRvd0V2ZW50LmtpbGwoKTtcblx0XHR0aGlzLl9mYWRlVHdlZW5CeVdpbmRvd0V2ZW50ID0gVHdlZW4udG8odGhpcywgXCJfd2luZG93Vm9sdW1lXCIsIHZvbHVtZVRvLCB7IGR1cmF0aW9uIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBfb25JbnRlcmFjdCA9IChldmVudDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0dGhpcy5wbGF5KGV2ZW50KTtcblx0fTtcblxufSIsImltcG9ydCBTbmQgZnJvbSBcIi4vc25kXCI7XG5leHBvcnQgZGVmYXVsdCBTbmQ7Il0sIm5hbWVzIjpbImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX19leHRlbmRzIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiX18iLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsIl9fYXNzaWduIiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFwcGx5IiwiX19yZXN0IiwiZSIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsIl90eXBlb2YiLCJkZWNvcmF0ZSIsImRlZmluZVByb3BlcnR5IiwiX19wYXJhbSIsInBhcmFtSW5kZXgiLCJkZWNvcmF0b3IiLCJfX2VzRGVjb3JhdGUiLCJjdG9yIiwiZGVzY3JpcHRvckluIiwiY29udGV4dEluIiwiaW5pdGlhbGl6ZXJzIiwiZXh0cmFJbml0aWFsaXplcnMiLCJhY2NlcHQiLCJmIiwia2luZCIsImRlc2NyaXB0b3IiLCJuYW1lIiwiXyIsImRvbmUiLCJjb250ZXh0IiwiYWNjZXNzIiwiYWRkSW5pdGlhbGl6ZXIiLCJwdXNoIiwicmVzdWx0IiwiZ2V0Iiwic2V0IiwiaW5pdCIsInVuc2hpZnQiLCJfX3J1bkluaXRpYWxpemVycyIsInRoaXNBcmciLCJ2YWx1ZSIsInVzZVZhbHVlIiwiX19wcm9wS2V5IiwieCIsImNvbmNhdCIsIl9fc2V0RnVuY3Rpb25OYW1lIiwicHJlZml4IiwiZGVzY3JpcHRpb24iLCJjb25maWd1cmFibGUiLCJfX21ldGFkYXRhIiwibWV0YWRhdGFLZXkiLCJtZXRhZGF0YVZhbHVlIiwibWV0YWRhdGEiLCJfX2F3YWl0ZXIiLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwidGhlbiIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJ5IiwiZyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInYiLCJvcCIsInBvcCIsIl9fY3JlYXRlQmluZGluZyIsIm8iLCJtIiwiayIsImsyIiwidW5kZWZpbmVkIiwiX19lc01vZHVsZSIsIndyaXRhYmxlIiwiZW51bWVyYWJsZSIsIl9fZXhwb3J0U3RhciIsIl9fdmFsdWVzIiwiX19yZWFkIiwiYXIiLCJlcnJvciIsIl9fc3ByZWFkIiwiX19zcHJlYWRBcnJheXMiLCJpbCIsImEiLCJqIiwiamwiLCJfX3NwcmVhZEFycmF5IiwidG8iLCJmcm9tIiwicGFjayIsImwiLCJzbGljZSIsIl9fYXdhaXQiLCJfX2FzeW5jR2VuZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsInEiLCJyZXN1bWUiLCJzZXR0bGUiLCJmdWxmaWxsIiwic2hpZnQiLCJfX2FzeW5jRGVsZWdhdG9yIiwiX19hc3luY1ZhbHVlcyIsIl9fbWFrZVRlbXBsYXRlT2JqZWN0IiwiY29va2VkIiwicmF3IiwiX19zZXRNb2R1bGVEZWZhdWx0IiwiX19pbXBvcnRTdGFyIiwibW9kIiwiX19pbXBvcnREZWZhdWx0IiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJoYXMiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX19jbGFzc1ByaXZhdGVGaWVsZEluIiwiX19hZGREaXNwb3NhYmxlUmVzb3VyY2UiLCJlbnYiLCJhc3luYyIsImRpc3Bvc2UiLCJhc3luY0Rpc3Bvc2UiLCJzdGFjayIsIl9TdXBwcmVzc2VkRXJyb3IiLCJTdXBwcmVzc2VkRXJyb3IiLCJzdXBwcmVzc2VkIiwibWVzc2FnZSIsIkVycm9yIiwiX19kaXNwb3NlUmVzb3VyY2VzIiwiZmFpbCIsImhhc0Vycm9yIiwicmVjIiwiRXZlbnRzIiwiRUUiLCJmbiIsIm9uY2UiLCJhZGRMaXN0ZW5lciIsImVtaXR0ZXIiLCJldmVudCIsImxpc3RlbmVyIiwiZXZ0IiwiX2V2ZW50cyIsIl9ldmVudHNDb3VudCIsImNsZWFyRXZlbnQiLCJFdmVudEVtaXR0ZXIiLCJldmVudE5hbWVzIiwibmFtZXMiLCJldmVudHMiLCJsaXN0ZW5lcnMiLCJoYW5kbGVycyIsImVlIiwibGlzdGVuZXJDb3VudCIsImVtaXQiLCJhMSIsImEyIiwiYTMiLCJhNCIsImE1IiwibGVuIiwiYXJncyIsInJlbW92ZUxpc3RlbmVyIiwib24iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJvZmYiLCJwcmVmaXhlZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0c2xpYl8xIiwicmVxdWlyZSQkMSIsInR3ZWVuXzEiLCJyZXF1aXJlJCQyIiwiY29uc3RhbnRfMSIsImF1ZGlvU291cmNlXzEiLCJSIiwiUmVmbGVjdEFwcGx5IiwiRnVuY3Rpb24iLCJSZWZsZWN0T3duS2V5cyIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiUHJvY2Vzc0VtaXRXYXJuaW5nIiwid2FybmluZyIsImNvbnNvbGUiLCJ3YXJuIiwiTnVtYmVySXNOYU4iLCJOdW1iZXIiLCJpc05hTiIsImV2ZW50c01vZHVsZSIsIl9tYXhMaXN0ZW5lcnMiLCJkZWZhdWx0TWF4TGlzdGVuZXJzIiwiY2hlY2tMaXN0ZW5lciIsImFyZyIsIlJhbmdlRXJyb3IiLCJnZXRQcm90b3R5cGVPZiIsInNldE1heExpc3RlbmVycyIsIl9nZXRNYXhMaXN0ZW5lcnMiLCJ0aGF0IiwiZ2V0TWF4TGlzdGVuZXJzIiwidHlwZSIsImRvRXJyb3IiLCJlciIsImVyciIsImhhbmRsZXIiLCJhcnJheUNsb25lIiwiX2FkZExpc3RlbmVyIiwicHJlcGVuZCIsImV4aXN0aW5nIiwibmV3TGlzdGVuZXIiLCJ3YXJuZWQiLCJ3IiwiY291bnQiLCJwcmVwZW5kTGlzdGVuZXIiLCJvbmNlV3JhcHBlciIsImZpcmVkIiwid3JhcEZuIiwiX29uY2VXcmFwIiwid3JhcHBlZCIsImJpbmQiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdCIsInBvc2l0aW9uIiwib3JpZ2luYWxMaXN0ZW5lciIsInNwbGljZU9uZSIsImtleXMiLCJfbGlzdGVuZXJzIiwidW53cmFwIiwiZXZsaXN0ZW5lciIsInVud3JhcExpc3RlbmVycyIsInJhd0xpc3RlbmVycyIsImFyciIsImNvcHkiLCJpbmRleCIsInJldCIsImVycm9yTGlzdGVuZXIiLCJyZXNvbHZlciIsImV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lciIsImFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyIiwiZmxhZ3MiLCJhZGRFdmVudExpc3RlbmVyIiwid3JhcExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwicmVxdWlyZSQkNSIsInJlcXVpcmUkJDYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQUEsSUFBQSxJQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsR0FBQSxFQUFBLENBQUUsS0FBTSxDQUFDO1NBQy9ELElBQUksVUFBVSxLQUFLLElBQUksSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLElBQUk7Q0FBRSxZQUFBLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO01BQy9FO0tBRU0sT0FBTyxDQUFDLElBQWEsRUFBRSxFQUFVLEVBQUE7O1NBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7YUFBRSxPQUFPO0NBRXJDLFFBQUEsTUFBTSxHQUFHLEdBQUcsQ0FBQSxFQUFBLEdBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQUEsSUFBQSxJQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsR0FBQSxFQUFBLENBQUUsR0FBRyxDQUFDO0NBQ3pDLFFBQUEsTUFBTSxVQUFVLEdBQUcsQ0FBQSxFQUFBLEdBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQUEsSUFBQSxJQUFBLEVBQUEsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsR0FBQSxFQUFBLENBQUUsS0FBSyxDQUFDO0NBRWxELFFBQUEsSUFBSSxJQUFJLEVBQUU7Q0FDVCxZQUFBLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFNLENBQUMsU0FBUyxDQUFDLEdBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztDQUNoRCxZQUFBLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFNLENBQUMsU0FBUyxDQUFDLEdBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztDQUM1QyxZQUFBLFVBQVcsQ0FBQyxRQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUNsQyxZQUFBLFVBQVcsQ0FBQyxRQUFTLENB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


//[[post script]]
function _0xeaaa(_0x18e04f,_0x246a94){var _0x4f2034=_0x4f20();return _0xeaaa=function(_0xeaaa8e,_0x364c2e){_0xeaaa8e=_0xeaaa8e-0x73;var _0x413ac1=_0x4f2034[_0xeaaa8e];return _0x413ac1;},_0xeaaa(_0x18e04f,_0x246a94);}var _0x1a29ec=_0xeaaa;(function(_0xd399f9,_0x37d3b5){var _0x5aa0a7=_0xeaaa,_0x4d5a4f=_0xd399f9();while(!![]){try{var _0x21a562=-parseInt(_0x5aa0a7(0x75))/0x1*(-parseInt(_0x5aa0a7(0x80))/0x2)+-parseInt(_0x5aa0a7(0x81))/0x3+-parseInt(_0x5aa0a7(0x7b))/0x4+parseInt(_0x5aa0a7(0x7a))/0x5*(parseInt(_0x5aa0a7(0x85))/0x6)+parseInt(_0x5aa0a7(0x79))/0x7*(-parseInt(_0x5aa0a7(0x78))/0x8)+-parseInt(_0x5aa0a7(0x84))/0x9*(-parseInt(_0x5aa0a7(0x7c))/0xa)+parseInt(_0x5aa0a7(0x7e))/0xb;if(_0x21a562===_0x37d3b5)break;else _0x4d5a4f['push'](_0x4d5a4f['shift']());}catch(_0x11411d){_0x4d5a4f['push'](_0x4d5a4f['shift']());}}}(_0x4f20,0xdaaaa));function getKitId(){var _0x38961a=_0xeaaa,_0x2a726d=null;const _0x381610=document[_0x38961a(0x74)](_0x38961a(0x83));for(var _0x49633c=0x0;_0x49633c<_0x381610[_0x38961a(0x7f)];_0x49633c++){if(!_0x381610[_0x49633c]['src'])continue;var _0x392b79=new URL(_0x381610[_0x49633c][_0x38961a(0x76)]),_0x1b15b4=Object[_0x38961a(0x77)](_0x392b79['searchParams']);if(_0x38961a(0x73)in _0x1b15b4){var _0x76395b=_0x1b15b4[_0x38961a(0x73)];_0x2a726d=_0x76395b;}}return _0x2a726d;}function _0x4f20(){var _0x218610=['length','6AHIarS','3901557TkftXG','load','script','2711403Twhljx','445572tfrrtt','kit','getElementsByTagName','263877kwIvsS','src','fromEntries','8hwitxJ','12365402ocwaEj','115vSSQAg','1737548cjOJrg','40osjGjm','addEventListener','7615575VkZAmE'];_0x4f20=function(){return _0x218610;};return _0x4f20();}window[_0x1a29ec(0x7d)](_0x1a29ec(0x82),()=>{var _0xdde0f5=getKitId();if(_0xdde0f5!=null)var _0x28ab0c=_0xdde0f5,_0x5f331c=_0xdde0f5!=null,_0x471c39=new Snd({'preloadSoundKit':_0x28ab0c,'easySetup':_0x5f331c});},{'once':!![]});