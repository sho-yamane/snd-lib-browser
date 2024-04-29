
  /**
   * @license
   * Snd.js v1.0.1
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

	Object.defineProperty(domInteraction, "__esModule", { value: true });
	const tslib_1$2 = require$$0;
	const eventemitter3_1$1 = tslib_1$2.__importDefault(eventemitter3.exports);
	const constant_1$1 = constant;
	class DOMInteraction extends eventemitter3_1$1.default {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25kLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiLCIuLi8uLi9zcmMvY29uc3RhbnQudHMiLCIuLi8uLi9zcmMvYXVkaW9Ob2RlLnRzIiwiLi4vLi4vc3JjL3R3ZWVuLnRzIiwiLi4vLi4vc3JjL2F1ZGlvU291cmNlLnRzIiwiLi4vLi4vc3JjL3NvdW5kS2l0LnRzIiwiLi4vLi4vc3JjL2RvbUludGVyYWN0aW9uLnRzIiwiLi4vLi4vc3JjL3NuZC50cyIsIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcclxuICAgIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxyXG4gICAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcclxuICAgIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xyXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XHJcbiAgICB2YXIgXywgZG9uZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xyXG4gICAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XHJcbiAgICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xyXG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcclxuICAgICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcclxuICAgIGRvbmUgPSB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcclxuICAgIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xyXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xyXG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xyXG4gICAgICAgIHZhciBkaXNwb3NlO1xyXG4gICAgICAgIGlmIChhc3luYykge1xyXG4gICAgICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcclxuICAgICAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXN5bmMpIHtcclxuICAgICAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xyXG4gICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcclxuICAgIGZ1bmN0aW9uIGZhaWwoZSkge1xyXG4gICAgICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcclxuICAgICAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjID0gZW52LnN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlYy5kaXNwb3NlICYmIHJlYy5kaXNwb3NlLmNhbGwocmVjLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGZhaWwoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgX19leHRlbmRzOiBfX2V4dGVuZHMsXHJcbiAgICBfX2Fzc2lnbjogX19hc3NpZ24sXHJcbiAgICBfX3Jlc3Q6IF9fcmVzdCxcclxuICAgIF9fZGVjb3JhdGU6IF9fZGVjb3JhdGUsXHJcbiAgICBfX3BhcmFtOiBfX3BhcmFtLFxyXG4gICAgX19tZXRhZGF0YTogX19tZXRhZGF0YSxcclxuICAgIF9fYXdhaXRlcjogX19hd2FpdGVyLFxyXG4gICAgX19nZW5lcmF0b3I6IF9fZ2VuZXJhdG9yLFxyXG4gICAgX19jcmVhdGVCaW5kaW5nOiBfX2NyZWF0ZUJpbmRpbmcsXHJcbiAgICBfX2V4cG9ydFN0YXI6IF9fZXhwb3J0U3RhcixcclxuICAgIF9fdmFsdWVzOiBfX3ZhbHVlcyxcclxuICAgIF9fcmVhZDogX19yZWFkLFxyXG4gICAgX19zcHJlYWQ6IF9fc3ByZWFkLFxyXG4gICAgX19zcHJlYWRBcnJheXM6IF9fc3ByZWFkQXJyYXlzLFxyXG4gICAgX19zcHJlYWRBcnJheTogX19zcHJlYWRBcnJheSxcclxuICAgIF9fYXdhaXQ6IF9fYXdhaXQsXHJcbiAgICBfX2FzeW5jR2VuZXJhdG9yOiBfX2FzeW5jR2VuZXJhdG9yLFxyXG4gICAgX19hc3luY0RlbGVnYXRvcjogX19hc3luY0RlbGVnYXRvcixcclxuICAgIF9fYXN5bmNWYWx1ZXM6IF9fYXN5bmNWYWx1ZXMsXHJcbiAgICBfX21ha2VUZW1wbGF0ZU9iamVjdDogX19tYWtlVGVtcGxhdGVPYmplY3QsXHJcbiAgICBfX2ltcG9ydFN0YXI6IF9faW1wb3J0U3RhcixcclxuICAgIF9faW1wb3J0RGVmYXVsdDogX19pbXBvcnREZWZhdWx0LFxyXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCxcclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQ6IF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW46IF9fY2xhc3NQcml2YXRlRmllbGRJbixcclxuICAgIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlOiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZSxcclxuICAgIF9fZGlzcG9zZVJlc291cmNlczogX19kaXNwb3NlUmVzb3VyY2VzLFxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgcHJlZml4ID0gJ34nO1xuXG4vKipcbiAqIENvbnN0cnVjdG9yIHRvIGNyZWF0ZSBhIHN0b3JhZ2UgZm9yIG91ciBgRUVgIG9iamVjdHMuXG4gKiBBbiBgRXZlbnRzYCBpbnN0YW5jZSBpcyBhIHBsYWluIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIGFyZSBldmVudCBuYW1lcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEV2ZW50cygpIHt9XG5cbi8vXG4vLyBXZSB0cnkgdG8gbm90IGluaGVyaXQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAuIEluIHNvbWUgZW5naW5lcyBjcmVhdGluZyBhblxuLy8gaW5zdGFuY2UgaW4gdGhpcyB3YXkgaXMgZmFzdGVyIHRoYW4gY2FsbGluZyBgT2JqZWN0LmNyZWF0ZShudWxsKWAgZGlyZWN0bHkuXG4vLyBJZiBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaXMgbm90IHN1cHBvcnRlZCB3ZSBwcmVmaXggdGhlIGV2ZW50IG5hbWVzIHdpdGggYVxuLy8gY2hhcmFjdGVyIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBidWlsdC1pbiBvYmplY3QgcHJvcGVydGllcyBhcmUgbm90XG4vLyBvdmVycmlkZGVuIG9yIHVzZWQgYXMgYW4gYXR0YWNrIHZlY3Rvci5cbi8vXG5pZiAoT2JqZWN0LmNyZWF0ZSkge1xuICBFdmVudHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAvL1xuICAvLyBUaGlzIGhhY2sgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGBfX3Byb3RvX19gIHByb3BlcnR5IGlzIHN0aWxsIGluaGVyaXRlZCBpblxuICAvLyBzb21lIG9sZCBicm93c2VycyBsaWtlIEFuZHJvaWQgNCwgaVBob25lIDUuMSwgT3BlcmEgMTEgYW5kIFNhZmFyaSA1LlxuICAvL1xuICBpZiAoIW5ldyBFdmVudHMoKS5fX3Byb3RvX18pIHByZWZpeCA9IGZhbHNlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIGV2ZW50IGxpc3RlbmVyLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvbmNlPWZhbHNlXSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFRShmbiwgY29udGV4dCwgb25jZSkge1xuICB0aGlzLmZuID0gZm47XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMub25jZSA9IG9uY2UgfHwgZmFsc2U7XG59XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihlbWl0dGVyLCBldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCBlbWl0dGVyLCBvbmNlKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdKSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyLCBlbWl0dGVyLl9ldmVudHNDb3VudCsrO1xuICBlbHNlIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0uZm4pIGVtaXR0ZXIuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gW2VtaXR0ZXIuX2V2ZW50c1tldnRdLCBsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIGVtaXR0ZXI7XG59XG5cbi8qKlxuICogQ2xlYXIgZXZlbnQgYnkgbmFtZS5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2dCBUaGUgRXZlbnQgbmFtZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNsZWFyRXZlbnQoZW1pdHRlciwgZXZ0KSB7XG4gIGlmICgtLWVtaXR0ZXIuX2V2ZW50c0NvdW50ID09PSAwKSBlbWl0dGVyLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIGVsc2UgZGVsZXRlIGVtaXR0ZXIuX2V2ZW50c1tldnRdO1xufVxuXG4vKipcbiAqIE1pbmltYWwgYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlIHRoYXQgaXMgbW9sZGVkIGFnYWluc3QgdGhlIE5vZGUuanNcbiAqIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgbGlzdGluZyB0aGUgZXZlbnRzIGZvciB3aGljaCB0aGUgZW1pdHRlciBoYXMgcmVnaXN0ZXJlZFxuICogbGlzdGVuZXJzLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgdmFyIG5hbWVzID0gW11cbiAgICAsIGV2ZW50c1xuICAgICwgbmFtZTtcblxuICBpZiAodGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHJldHVybiBuYW1lcztcblxuICBmb3IgKG5hbWUgaW4gKGV2ZW50cyA9IHRoaXMuX2V2ZW50cykpIHtcbiAgICBpZiAoaGFzLmNhbGwoZXZlbnRzLCBuYW1lKSkgbmFtZXMucHVzaChwcmVmaXggPyBuYW1lLnNsaWNlKDEpIDogbmFtZSk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHJldHVybiBuYW1lcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhldmVudHMpKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lcztcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSByZWdpc3RlcmVkIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGhhbmRsZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFoYW5kbGVycykgcmV0dXJuIFtdO1xuICBpZiAoaGFuZGxlcnMuZm4pIHJldHVybiBbaGFuZGxlcnMuZm5dO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoLCBlZSA9IG5ldyBBcnJheShsKTsgaSA8IGw7IGkrKykge1xuICAgIGVlW2ldID0gaGFuZGxlcnNbaV0uZm47XG4gIH1cblxuICByZXR1cm4gZWU7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbnVtYmVyIG9mIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtYmVyIG9mIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24gbGlzdGVuZXJDb3VudChldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybiAwO1xuICBpZiAobGlzdGVuZXJzLmZuKSByZXR1cm4gMTtcbiAgcmV0dXJuIGxpc3RlbmVycy5sZW5ndGg7XG59O1xuXG4vKipcbiAqIENhbGxzIGVhY2ggb2YgdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGV2ZW50IGhhZCBsaXN0ZW5lcnMsIGVsc2UgYGZhbHNlYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiBmYWxzZTtcblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF1cbiAgICAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGFyZ3NcbiAgICAsIGk7XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChsaXN0ZW5lcnMub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgc3dpdGNoIChsZW4pIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSksIHRydWU7XG4gICAgICBjYXNlIDM6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCksIHRydWU7XG4gICAgICBjYXNlIDY6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZuLmFwcGx5KGxpc3RlbmVycy5jb250ZXh0LCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgLCBqO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyc1tpXS5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgc3dpdGNoIChsZW4pIHtcbiAgICAgICAgY2FzZSAxOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCk7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSk7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIpOyBicmVhaztcbiAgICAgICAgY2FzZSA0OiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyLCBhMyk7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghYXJncykgZm9yIChqID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaiAtIDFdID0gYXJndW1lbnRzW2pdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbi5hcHBseShsaXN0ZW5lcnNbaV0uY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIGZhbHNlKTtcbn07XG5cbi8qKlxuICogQWRkIGEgb25lLXRpbWUgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIHRydWUpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGxpc3RlbmVycyBvZiBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBoYXZlIHRoaXMgY29udGV4dC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBPbmx5IHJlbW92ZSBvbmUtdGltZSBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIHRoaXM7XG4gIGlmICghZm4pIHtcbiAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChcbiAgICAgIGxpc3RlbmVycy5mbiA9PT0gZm4gJiZcbiAgICAgICghb25jZSB8fCBsaXN0ZW5lcnMub25jZSkgJiZcbiAgICAgICghY29udGV4dCB8fCBsaXN0ZW5lcnMuY29udGV4dCA9PT0gY29udGV4dClcbiAgICApIHtcbiAgICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGV2ZW50cyA9IFtdLCBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgbGlzdGVuZXJzW2ldLmZuICE9PSBmbiB8fFxuICAgICAgICAob25jZSAmJiAhbGlzdGVuZXJzW2ldLm9uY2UpIHx8XG4gICAgICAgIChjb250ZXh0ICYmIGxpc3RlbmVyc1tpXS5jb250ZXh0ICE9PSBjb250ZXh0KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBSZXNldCB0aGUgYXJyYXksIG9yIHJlbW92ZSBpdCBjb21wbGV0ZWx5IGlmIHdlIGhhdmUgbm8gbW9yZSBsaXN0ZW5lcnMuXG4gICAgLy9cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCkgdGhpcy5fZXZlbnRzW2V2dF0gPSBldmVudHMubGVuZ3RoID09PSAxID8gZXZlbnRzWzBdIDogZXZlbnRzO1xuICAgIGVsc2UgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzLCBvciB0aG9zZSBvZiB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBbZXZlbnRdIFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0O1xuXG4gIGlmIChldmVudCkge1xuICAgIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG4gICAgaWYgKHRoaXMuX2V2ZW50c1tldnRdKSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEFsaWFzIG1ldGhvZHMgbmFtZXMgYmVjYXVzZSBwZW9wbGUgcm9sbCBsaWtlIHRoYXQuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUub247XG5cbi8vXG4vLyBFeHBvc2UgdGhlIHByZWZpeC5cbi8vXG5FdmVudEVtaXR0ZXIucHJlZml4ZWQgPSBwcmVmaXg7XG5cbi8vXG4vLyBBbGxvdyBgRXZlbnRFbWl0dGVyYCB0byBiZSBpbXBvcnRlZCBhcyBtb2R1bGUgbmFtZXNwYWNlLlxuLy9cbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5pZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBtb2R1bGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG59XG4iLCJpbXBvcnQgeyBTb3VuZEtleXMsIERPTUV2ZW50U291bmQgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IFNPVU5EX0tJVF8wMSBmcm9tIFwiLi9qc29uLzAxLmpzb25cIjtcbmltcG9ydCBTT1VORF9LSVRfMDIgZnJvbSBcIi4vanNvbi8wMi5qc29uXCI7XG5pbXBvcnQgU09VTkRfS0lUXzAzIGZyb20gXCIuL2pzb24vMDMuanNvblwiO1xuXG5jb25zdCBCVVRUT04gPSBcImJ1dHRvblwiO1xuY29uc3QgQ0FVVElPTiA9IFwiY2F1dGlvblwiO1xuY29uc3QgQ0VMRUJSQVRJT04gPSBcImNlbGVicmF0aW9uXCI7XG5jb25zdCBESVNBQkxFRCA9IFwiZGlzYWJsZWRcIjtcbmNvbnN0IE5PVElGSUNBVElPTiA9IFwibm90aWZpY2F0aW9uXCI7XG5jb25zdCBQUk9HUkVTU19MT09QID0gXCJwcm9ncmVzc19sb29wXCI7XG5jb25zdCBSSU5HVE9ORV9MT09QID0gXCJyaW5ndG9uZV9sb29wXCI7XG5jb25zdCBTRUxFQ1QgPSBcInNlbGVjdFwiO1xuY29uc3QgU1dJUEUgPSBcInN3aXBlXCI7XG5jb25zdCBTV0lQRV8wMSA9IFwic3dpcGVfMDFcIjtcbmNvbnN0IFNXSVBFXzAyID0gXCJzd2lwZV8wMlwiO1xuY29uc3QgU1dJUEVfMDMgPSBcInN3aXBlXzAzXCI7XG5jb25zdCBTV0lQRV8wNCA9IFwic3dpcGVfMDRcIjtcbmNvbnN0IFNXSVBFXzA1ID0gXCJzd2lwZV8wNVwiO1xuY29uc3QgVEFQID0gXCJ0YXBcIjtcbmNvbnN0IFRBUF8wMSA9IFwidGFwXzAxXCI7XG5jb25zdCBUQVBfMDIgPSBcInRhcF8wMlwiO1xuY29uc3QgVEFQXzAzID0gXCJ0YXBfMDNcIjtcbmNvbnN0IFRBUF8wNCA9IFwidGFwXzA0XCI7XG5jb25zdCBUQVBfMDUgPSBcInRhcF8wNVwiO1xuY29uc3QgVE9HR0xFID0gXCJ0b2dnbGVcIjtcbmNvbnN0IFRPR0dMRV9PRkYgPSBcInRvZ2dsZV9vZmZcIjtcbmNvbnN0IFRPR0dMRV9PTiA9IFwidG9nZ2xlX29uXCI7XG5jb25zdCBUUkFOU0lUSU9OX0RPV04gPSBcInRyYW5zaXRpb25fZG93blwiO1xuY29uc3QgVFJBTlNJVElPTl9VUCA9IFwidHJhbnNpdGlvbl91cFwiO1xuY29uc3QgVFlQRSA9IFwidHlwZVwiO1xuY29uc3QgVFlQRV8wMSA9IFwidHlwZV8wMVwiO1xuY29uc3QgVFlQRV8wMiA9IFwidHlwZV8wMlwiO1xuY29uc3QgVFlQRV8wMyA9IFwidHlwZV8wM1wiO1xuY29uc3QgVFlQRV8wNCA9IFwidHlwZV8wNFwiO1xuY29uc3QgVFlQRV8wNSA9IFwidHlwZV8wNVwiO1xuXG5jb25zdCBUQVBfU09VTkRfS0VZUzogc3RyaW5nW10gPSBbXG5cdFRBUF8wMSxcblx0VEFQXzAyLFxuXHRUQVBfMDMsXG5cdFRBUF8wNCxcblx0VEFQXzA1XG5dO1xuXG5jb25zdCBTV0lQRV9TT1VORF9LRVlTOiBzdHJpbmdbXSA9IFtcblx0U1dJUEVfMDEsXG5cdFNXSVBFXzAyLFxuXHRTV0lQRV8wMyxcblx0U1dJUEVfMDQsXG5cdFNXSVBFXzA1XG5dO1xuXG5jb25zdCBUWVBFX1NPVU5EX0tFWVM6IHN0cmluZ1tdID0gW1xuXHRUWVBFXzAxLFxuXHRUWVBFXzAyLFxuXHRUWVBFXzAzLFxuXHRUWVBFXzA0LFxuXHRUWVBFXzA1XG5dO1xuXG5jb25zdCBUT0dHTEVfU09VTkRfS0VZUzogc3RyaW5nW10gPSBbXG5cdFRPR0dMRV9PTixcblx0VE9HR0xFX09GRlxuXTtcblxuY29uc3QgX1NPVU5EX0tFWVM6IFNvdW5kS2V5cyA9IHtcblx0QlVUVE9OLFxuXHRDQVVUSU9OLFxuXHRDRUxFQlJBVElPTixcblx0RElTQUJMRUQsXG5cdE5PVElGSUNBVElPTixcblx0UFJPR1JFU1NfTE9PUCxcblx0UklOR1RPTkVfTE9PUCxcblx0U0VMRUNULFxuXHRTV0lQRSxcblx0VEFQLFxuXHRUT0dHTEVfT04sXG5cdFRPR0dMRV9PRkYsXG5cdFRSQU5TSVRJT05fRE9XTixcblx0VFJBTlNJVElPTl9VUCxcblx0VFlQRVxufTtcblxuY29uc3QgX0VWRU5UX0NMQVNTX05BTUVTOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSA9IHtcblx0W0JVVFRPTl06IGBzbmRfXyR7QlVUVE9OfWAsXG5cdFtDQVVUSU9OXTogYHNuZF9fJHtDQVVUSU9OfWAsXG5cdFtDRUxFQlJBVElPTl06IGBzbmRfXyR7Q0VMRUJSQVRJT059YCxcblx0W0RJU0FCTEVEXTogYHNuZF9fJHtESVNBQkxFRH1gLFxuXHRbTk9USUZJQ0FUSU9OXTogYHNuZF9fJHtOT1RJRklDQVRJT059YCxcblx0W1BST0dSRVNTX0xPT1BdOiBgc25kX18ke1BST0dSRVNTX0xPT1B9YCxcblx0W1JJTkdUT05FX0xPT1BdOiBgc25kX18ke1JJTkdUT05FX0xPT1B9YCxcblx0W1NFTEVDVF06IGBzbmRfXyR7U0VMRUNUfWAsXG5cdFtTV0lQRV06IGBzbmRfXyR7U1dJUEV9YCxcblx0W1RBUF06IGBzbmRfXyR7VEFQfWAsXG5cdFtUT0dHTEVdOiBgc25kX18ke1RPR0dMRX1gLFxuXHRbVFJBTlNJVElPTl9ET1dOXTogYHNuZF9fJHtUUkFOU0lUSU9OX0RPV059YCxcblx0W1RSQU5TSVRJT05fVVBdOiBgc25kX18ke1RSQU5TSVRJT05fVVB9YCxcblx0W1RZUEVdOiBgc25kX18ke1RZUEV9YCxcbn07XG5cblxuXG5jb25zdCBTT1VORFMgPSBPYmplY3QuZnJlZXplKF9TT1VORF9LRVlTKTtcbmNvbnN0IEVWRU5UX0NMQVNTX05BTUVTID0gT2JqZWN0LmZyZWV6ZShfRVZFTlRfQ0xBU1NfTkFNRVMpO1xuXG5jb25zdCBUQUdfRVZFTlRfU09VTkQ6IERPTUV2ZW50U291bmQgPSB7XG5cdFwiaW5wdXQ6dGV4dCxlbWFpbCxudW1iZXIscGFzc3dvcmQsc2VhcmNoLHVybCx0ZWxcIjoge1xuXHRcdGV2ZW50czoge1xuXG5cdFx0XHRcImlucHV0XCI6IFwidHlwZVwiXG5cdFx0fVxuXHR9LFxuXHRcImlucHV0OmNoZWNrYm94XCI6IHtcblx0XHRldmVudHM6IHtcblx0XHRcdFwiY2hhbmdlXCI6IFwidG9nZ2xlXCJcblx0XHR9XG5cdH0sXG5cdFwiaW5wdXQ6cmFkaW9cIjoge1xuXHRcdGV2ZW50czoge1xuXHRcdFx0XCJjaGFuZ2VcIjogXCJzZWxlY3RcIlxuXHRcdH1cblx0fSxcblx0XCJpbnB1dDpidXR0b24scmVzZXQsc3VibWl0XCI6IHtcblx0XHRldmVudHM6IHtcblx0XHRcdFwiY2xpY2tcIjogXCJidXR0b24sY2F1dGlvbixjZWxlYnJhdGlvbixkaXNhYmxlZCxub3RpZmljYXRpb24sdGFwLHRyYW5zaXRpb25fZG93bix0cmFuc2l0aW9uX3VwXCJcblx0XHR9XG5cdH0sXG5cdFwic2VsZWN0XCI6IHtcblx0XHRldmVudHM6IHtcblx0XHRcdFwiY2hhbmdlXCI6IFwic2VsZWN0XCJcblx0XHR9XG5cdH0sXG5cdFwiYW55XCI6IHtcblx0XHRldmVudHM6IHtcblx0XHRcdFwiY2xpY2tcIjogXCJidXR0b24sY2F1dGlvbixjZWxlYnJhdGlvbixkaXNhYmxlZCxub3RpZmljYXRpb24sdGFwLHRyYW5zaXRpb25fZG93bix0cmFuc2l0aW9uX3VwXCJcblx0XHR9XG5cdH1cbn07XG5cblxuZXhwb3J0IHR5cGUgS2l0S2luZHMgPSBcIjAxXCIgfCBcIjAyXCIgfCBcIjAzXCI7XG5jb25zdCBfS0lUUzogeyBba2V5OiBzdHJpbmddOiBLaXRLaW5kczsgfSA9IHtcblx0U05EMDE6IFwiMDFcIixcblx0U05EMDI6IFwiMDJcIixcblx0U05EMDM6IFwiMDNcIixcbn07XG5jb25zdCBLSVRTID0gT2JqZWN0LmZyZWV6ZShfS0lUUyk7XG5cbmNvbnN0IF9LSVRfSU5GTzogeyBba2V5OiBzdHJpbmddOiB7IGpzb246IGFueSwgYXVkaW9TcmM6IHN0cmluZzsgfTsgfSA9IHtcblx0W0tJVFMuU05EMDFdOiB7XG5cdFx0anNvbjogU09VTkRfS0lUXzAxLFxuXHRcdGF1ZGlvU3JjOiBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9zbmQtbGliL3NuZC1saWJAdjEuMS4yL2Fzc2V0cy9zb3VuZHMvc3ByaXRlLzAxL2F1ZGlvU3ByaXRlLm1wM1wiLFxuXG5cdH0sXG5cdFtLSVRTLlNORDAyXToge1xuXHRcdGpzb246IFNPVU5EX0tJVF8wMixcblx0XHRhdWRpb1NyYzogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvc25kLWxpYi9zbmQtbGliQHYxLjEuMi9hc3NldHMvc291bmRzL3Nwcml0ZS8wMi9hdWRpb1Nwcml0ZS5tcDNcIixcblxuXHR9LFxuXHRbS0lUUy5TTkQwM106IHtcblx0XHRqc29uOiBTT1VORF9LSVRfMDMsXG5cdFx0YXVkaW9TcmM6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3NuZC1saWIvc25kLWxpYkB2MS4xLjIvYXNzZXRzL3NvdW5kcy9zcHJpdGUvLzAzL2F1ZGlvU3ByaXRlLm1wM1wiLFxuXG5cdH0sXG59O1xuY29uc3QgS0lUX0lORk8gPSBPYmplY3QuZnJlZXplKF9LSVRfSU5GTyk7XG5cbmV4cG9ydCB7XG5cdEtJVFMsXG5cdEtJVF9JTkZPLFxuXHRUQUdfRVZFTlRfU09VTkQgYXMgRU5BQkxFX1RBR1MsXG5cdFNPVU5EUyxcblx0RVZFTlRfQ0xBU1NfTkFNRVMsXG5cdFRBUF9TT1VORF9LRVlTLFxuXHRTV0lQRV9TT1VORF9LRVlTLFxuXHRUWVBFX1NPVU5EX0tFWVMsXG5cdFRPR0dMRV9TT1VORF9LRVlTXG59OyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9Ob2RlcyB7XG5cblx0cHVibGljIGF1ZGlvU3JjOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGUgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfZ2FpbjogR2Fpbk5vZGUgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfdGFpbDogQXVkaW9Ob2RlIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX3ZvbHVtZTogbnVtYmVyID0gMTtcblx0cHJpdmF0ZSBfbWFzdGVyVm9sdW1lOiBudW1iZXIgPSAxO1xuXG5cdGNvbnN0cnVjdG9yKGF1ZGlvQnVmZmVyU291cmNlTm9kZTogQXVkaW9CdWZmZXJTb3VyY2VOb2RlLCBnYWluTm9kZTogR2Fpbk5vZGUpIHtcblx0XHR0aGlzLmF1ZGlvU3JjID0gYXVkaW9CdWZmZXJTb3VyY2VOb2RlO1xuXHRcdHRoaXMuX2dhaW4gPSBnYWluTm9kZTtcblx0XHR0aGlzLl90YWlsID0gdGhpcy5hdWRpb1NyYztcblx0fVxuXG5cdHB1YmxpYyBzZXQgdm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fdm9sdW1lID0gdmFsO1xuXHRcdHRoaXMuX3NldFZvbHVtZSgpO1xuXHR9XG5cblx0cHVibGljIGdldCB2b2x1bWUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fdm9sdW1lO1xuXHR9XG5cblx0cHVibGljIHNldCBtYXN0ZXJWb2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl9tYXN0ZXJWb2x1bWUgPSB2YWw7XG5cdFx0dGhpcy5fc2V0Vm9sdW1lKCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IG1hc3RlclZvbHVtZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9tYXN0ZXJWb2x1bWU7XG5cdH1cblxuXHRwcml2YXRlIF9zZXRWb2x1bWUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuX2dhaW4gIT09IG51bGwpIHRoaXMuX2dhaW4uZ2Fpbi52YWx1ZSA9IHRoaXMudm9sdW1lICogdGhpcy5tYXN0ZXJWb2x1bWU7XG5cdH1cblxuXHRwdWJsaWMgY29ubmVjdChhdWRpb05vZGU6IEF1ZGlvTm9kZSk6IEF1ZGlvTm9kZXMge1xuXHRcdHRoaXMuX3RhaWw/LmNvbm5lY3QoYXVkaW9Ob2RlKTtcblx0XHR0aGlzLl90YWlsID0gYXVkaW9Ob2RlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cbn0iLCJpbnRlcmZhY2UgT3B0aW9ucyB7XG5cdGR1cmF0aW9uPzogbnVtYmVyO1xuXHRkZWxheT86IG51bWJlcjtcblx0b25Db21wbGV0ZT86ICgpID0+IHZvaWQ7XG5cdG9uVXBkYXRlPzogKCkgPT4gdm9pZDtcbn1cblxudHlwZSBUd2VlblR5cGUgPSBcInRvXCIgfCBcImZyb21cIiB8IFwiZnJvbVRvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuIHtcblxuXHRwcml2YXRlIHN0YXRpYyBfZGVmYXVsdE9wdGlvbnM6IE9wdGlvbnMgPSB7XG5cdFx0ZHVyYXRpb246IDAuNSxcblx0XHRkZWxheTogMCxcblx0XHRvbkNvbXBsZXRlOiAoKSA9PiB7IH0sXG5cdFx0b25VcGRhdGU6ICgpID0+IHsgfVxuXHR9O1xuXG5cdHByaXZhdGUgX3RhcmdldDogYW55O1xuXHRwcml2YXRlIF9wcm9wTmFtZTogc3RyaW5nID0gXCJcIjtcblx0cHJpdmF0ZSBfdG86IG51bWJlciA9IDA7XG5cdHByaXZhdGUgX2Zyb206IG51bWJlciA9IDA7XG5cdHByaXZhdGUgX2R1cmF0aW9uOiBudW1iZXIgPSAwLjU7XG5cdHByaXZhdGUgX2RlbGF5OiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIF9vbkNvbXBsZXRlOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xuXHRwcml2YXRlIF9vblVwZGF0ZTogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblx0cHJpdmF0ZSBfdXBkYXRlcjogbnVtYmVyID0gMDtcblxuXHRwdWJsaWMgc3RhdGljIHRvKHRhcmdldDogYW55LCBwcm9wTmFtZTogc3RyaW5nLCB0bzogbnVtYmVyLCBvcHRpb25zPzogT3B0aW9ucyk6IFR3ZWVuIHtcblx0XHRpZiAodGFyZ2V0W3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoYHByb3A6ICR7cHJvcE5hbWV9IGRvZXMgbm90IGV4aXN0cyBpbiAke3RhcmdldH1gKTtcblx0XHRlbHNlIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0LCBwcm9wTmFtZSwgMCwgdG8sIFwidG9cIiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGZyb20odGFyZ2V0OiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIGZyb206IG51bWJlciwgb3B0aW9ucz86IE9wdGlvbnMpOiBUd2VlbiB7XG5cdFx0aWYgKHRhcmdldFtwcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKGBwcm9wOiAke3Byb3BOYW1lfSBkb2VzIG5vdCBleGlzdHMgaW4gJHt0YXJnZXR9YCk7XG5cdFx0cmV0dXJuIG5ldyBUd2Vlbih0YXJnZXQsIHByb3BOYW1lLCBmcm9tLCAwLCBcImZyb21cIiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGZyb21Ubyh0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCBvcHRpb25zPzogT3B0aW9ucyk6IFR3ZWVuIHtcblx0XHRpZiAodGFyZ2V0W3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoYHByb3A6ICR7cHJvcE5hbWV9IGRvZXMgbm90IGV4aXN0cyBpbiAke3RhcmdldH1gKTtcblx0XHRyZXR1cm4gbmV3IFR3ZWVuKHRhcmdldCwgcHJvcE5hbWUsIGZyb20sIHRvLCBcImZyb21Ub1wiLCBvcHRpb25zKTtcblx0fVxuXG5cdHByaXZhdGUgY29uc3RydWN0b3IodGFyZ2V0OiBhbnksIHByb3BOYW1lOiBzdHJpbmcsIGZyb206IG51bWJlciwgdG86IG51bWJlciwgdHlwZTogVHdlZW5UeXBlLCBvcHRpb25zPzogT3B0aW9ucykge1xuXHRcdHRoaXMuX3RhcmdldCA9IHRhcmdldDtcblx0XHR0aGlzLl9wcm9wTmFtZSA9IHByb3BOYW1lO1xuXHRcdHRoaXMuX2Zyb20gPSBmcm9tO1xuXHRcdHRoaXMuX3RvID0gdG87XG5cdFx0b3B0aW9ucyA9IHtcblx0XHRcdC4uLlR3ZWVuLl9kZWZhdWx0T3B0aW9ucyxcblx0XHRcdC4uLm9wdGlvbnNcblx0XHR9O1xuXHRcdHRoaXMuX2R1cmF0aW9uID0gb3B0aW9ucz8uZHVyYXRpb24hO1xuXHRcdHRoaXMuX2RlbGF5ID0gb3B0aW9ucz8uZGVsYXkhO1xuXHRcdHRoaXMuX29uQ29tcGxldGUgPSBvcHRpb25zPy5vbkNvbXBsZXRlITtcblx0XHR0aGlzLl9vblVwZGF0ZSA9IG9wdGlvbnM/Lm9uVXBkYXRlITtcblxuXHRcdGlmICh0aGlzLl90YXJnZXRbdGhpcy5fcHJvcE5hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRjYXNlIFwidG9cIjpcblx0XHRcdFx0XHR0aGlzLl90d2VlblRvKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJmcm9tXCI6XG5cdFx0XHRcdFx0dGhpcy5fdHdlZW5Gcm9tKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJmcm9tVG9cIjpcblx0XHRcdFx0XHR0aGlzLl90d2VlbkZyb21UbygpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYHByb3A6ICR7dGhpcy5fcHJvcE5hbWV9IGRvZXMgbm90IGV4aXN0cyBpbiAke3RoaXMuX3RhcmdldH1gKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldCBfdGltZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiBEYXRlLm5vdygpIC8gMTAwMDtcblx0fVxuXG5cdHByaXZhdGUgX3R3ZWVuVG8oKTogdm9pZCB7XG5cdFx0Y29uc3QgZnJvbSA9IHRoaXMuX3RhcmdldFt0aGlzLl9wcm9wTmFtZV07XG5cdFx0Y29uc3QgdG8gPSB0aGlzLl90bztcblx0XHR0aGlzLl90d2Vlbihmcm9tLCB0byk7XG5cdH1cblxuXHRwcml2YXRlIF90d2VlbkZyb20oKTogdm9pZCB7XG5cdFx0Y29uc3QgZnJvbSA9IHRoaXMuX2Zyb207XG5cdFx0Y29uc3QgdG8gPSB0aGlzLl90YXJnZXRbdGhpcy5fcHJvcE5hbWVdO1xuXHRcdHRoaXMuX3R3ZWVuKGZyb20sIHRvKTtcblx0fVxuXG5cdHByaXZhdGUgX3R3ZWVuRnJvbVRvKCk6IHZvaWQge1xuXHRcdGNvbnN0IGZyb20gPSB0aGlzLl9mcm9tO1xuXHRcdGNvbnN0IHRvID0gdGhpcy5fdG87XG5cdFx0dGhpcy5fdHdlZW4oZnJvbSwgdG8pO1xuXHR9XG5cblx0cHJpdmF0ZSBfdHdlZW4gPSBhc3luYyAoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0aWYgKHRoaXMuX3RhcmdldFt0aGlzLl9wcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5raWxsKCk7XG5cblx0XHRjb25zdCBzdGFydFRpbWUgPSB0aGlzLl90aW1lO1xuXHRcdGNvbnN0IGR1ciA9IHRoaXMuX2R1cmF0aW9uO1xuXHRcdGNvbnN0IGRlbCA9IHRoaXMuX2RlbGF5O1xuXHRcdGNvbnN0IGVuZFRpbWUgPSBzdGFydFRpbWUgKyBkdXIgKyBkZWw7XG5cblx0XHR3aGlsZSAodGhpcy5fdGltZSA8IGVuZFRpbWUpIHtcblx0XHRcdGlmICh0aGlzLl90aW1lIDwgc3RhcnRUaW1lICsgZGVsKSBjb250aW51ZTtcblxuXHRcdFx0Y29uc3QgY3JyVGltZSA9IHRoaXMuX3RpbWU7XG5cdFx0XHRjb25zdCBwZXJjZW50YWdlID0gKGNyclRpbWUgLSBzdGFydFRpbWUpIC8gKGVuZFRpbWUgLSBzdGFydFRpbWUpO1xuXHRcdFx0Y29uc3QgdmFsID0gKHRvIC0gZnJvbSkgKiBwZXJjZW50YWdlICsgZnJvbTtcblxuXHRcdFx0dGhpcy5fdGFyZ2V0W3RoaXMuX3Byb3BOYW1lXSA9IHZhbDtcblx0XHRcdHRoaXMuX29uVXBkYXRlKCk7XG5cdFx0XHRhd2FpdCBuZXcgUHJvbWlzZShyZXMgPT4ge1xuXHRcdFx0XHR0aGlzLl91cGRhdGVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy5raWxsKCk7XG5cdFx0dGhpcy5fdGFyZ2V0W3RoaXMuX3Byb3BOYW1lXSA9IHRvO1xuXHRcdHRoaXMuX29uVXBkYXRlKCk7XG5cdFx0dGhpcy5fb25Db21wbGV0ZSgpO1xuXHR9O1xuXG5cdHB1YmxpYyBraWxsID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX3VwZGF0ZXIpO1xuXHR9O1xuXG59IiwiaW1wb3J0IEF1ZGlvTm9kZXMgZnJvbSBcIi4vYXVkaW9Ob2RlXCI7XG5pbXBvcnQgeyBQbGF5T3B0aW9ucyB9IGZyb20gXCIuL3NuZFwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuL3R3ZWVuXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ByaXRlSlNPTiB7XG5cdHJlc291cmNlczogc3RyaW5nW107XG5cdHNwcml0ZW1hcDoge1xuXHRcdFtrZXk6IHN0cmluZ106IHtcblx0XHRcdHN0YXJ0OiBudW1iZXI7XG5cdFx0XHRlbmQ6IG51bWJlcjtcblx0XHRcdGxvb3A6IGJvb2xlYW47XG5cdFx0fTtcblx0fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdWRpb0RhdGEge1xuXHRrZXk6IHN0cmluZztcblx0bm9kZXM6IEF1ZGlvTm9kZXM7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0dmFyIHdlYmtpdEF1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb1NvdXJjZSB7XG5cblx0cHVibGljIHN0YXRpYyByZWFkb25seSBFTkQ6IHN0cmluZyA9IFwiZW5kXCI7XG5cdHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZXM6IEF1ZGlvU291cmNlW10gPSBbXTtcblx0cHJpdmF0ZSBzdGF0aWMgX2N0eDogQXVkaW9Db250ZXh0IHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgc3RhdGljIF9pc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgX2F1ZGlvQXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX2F1ZGlvQnVmZmVyOiBBdWRpb0J1ZmZlciB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF9hdWRpb0xpc3Q6IE1hcDxudW1iZXIsIEF1ZGlvRGF0YT4gPSBuZXcgTWFwPG51bWJlciwgQXVkaW9EYXRhPigpO1xuXHRwcml2YXRlIF9jbnQ6IG51bWJlciA9IDEwMDA7XG5cdHByaXZhdGUgX2pzb246IFNwcml0ZUpTT04gfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfaGFzU3RhcnRlZExvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfaGFzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX2hhc1N0YXJ0ZWRBbmFseXNpczogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9oYXNBbmFseXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9tYXN0ZXJWb2x1bWU6IG51bWJlciA9IDE7XG5cdHByaXZhdGUgX2FuYWx5emVQcm9taXNlOiBQcm9taXNlPEF1ZGlvQnVmZmVyPiB8IG51bGwgPSBudWxsO1xuXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgYWN0aXZhdGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuX2lzQWN0aXZlKSByZXR1cm47XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuXHRcdFx0dGhpcy5fY3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG5cdFx0XHRjb25zdCBlbXB0eVNyYyA9IHRoaXMuX2N0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcblx0XHRcdGVtcHR5U3JjLnN0YXJ0KCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRlbXB0eVNyYy5zdG9wKCk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKGUpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuXG5cdFx0XHR0aGlzLl9hbmFseXplQWxsSW5zdGFuY2VzKCk7XG5cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgYW4gZXJyIG9jY3VycmVkIHdoaWxlIEF1ZGlvU291cmNlLnNldHVwICR7ZXJyfWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIF9hbmFseXplQWxsSW5zdGFuY2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuX2luc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZTogQXVkaW9Tb3VyY2UpID0+IHtcblx0XHRcdGlmIChpbnN0YW5jZS5faGFzTG9hZGVkICYmICFpbnN0YW5jZS5faGFzU3RhcnRlZEFuYWx5c2lzKSB7XG5cdFx0XHRcdGluc3RhbmNlLmFuYWx5emUoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGFzeW5jIF9jcmVhdGVBdWRpb0J1ZmZlcihidWZmZXI6IEFycmF5QnVmZmVyKTogUHJvbWlzZTxBdWRpb0J1ZmZlcj4ge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuX2N0eCEuZGVjb2RlQXVkaW9EYXRhLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gYXdhaXQgdGhpcy5fY3R4IS5kZWNvZGVBdWRpb0RhdGEoYnVmZmVyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZTxBdWRpb0J1ZmZlcj4oKHJlcywgcmVqKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fY3R4IS5kZWNvZGVBdWRpb0RhdGEoYnVmZmVyLFxuXHRcdFx0XHRcdFx0KGRhdGE6IEF1ZGlvQnVmZmVyKSA9PiByZXMoZGF0YSksXG5cdFx0XHRcdFx0XHQoZXJyOiBFcnJvcikgPT4gcmVqKGVycilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgYW4gZXJyIG9jY3VyZWQgd2hpbGUgQXVkaW9Tb3VyY2UuX2NyZWF0ZUF1ZGlvQnVmZmVyICR7ZXJyfWApO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGFzeW5jIF9jcmVhdGVBdWRpb0FycmF5QnVmZmVyKGF1ZGlvU3JjOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGF1ZGlvU3JjKTtcblx0XHRcdGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgcmVzLmFycmF5QnVmZmVyKCk7XG5cdFx0XHRyZXR1cm4gYXJyYXlCdWZmZXI7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYGFuIGVyciBvY2N1cnJlZCB3aGlsZSBBdWRpb1NvdXJjZS5fY3JlYXRlQXVkaW9BcnJheUJ1ZmZlciAke2Vycn1gKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRBdWRpb1NvdXJjZS5faW5zdGFuY2VzLnB1c2godGhpcyk7XG5cdH1cblxuXHRwcml2YXRlIGdldCBfdW5pcXVlS2V5KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX2NudCsrO1xuXHR9XG5cblx0cHVibGljIHNldCBtYXN0ZXJWb2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl9tYXN0ZXJWb2x1bWUgPSB2YWw7XG5cdFx0dGhpcy5fYXVkaW9MaXN0LmZvckVhY2goKGF1ZGlvOiBBdWRpb0RhdGEpID0+IHtcblx0XHRcdGF1ZGlvLm5vZGVzLm1hc3RlclZvbHVtZSA9IHRoaXMuX21hc3RlclZvbHVtZTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgbWFzdGVyVm9sdW1lKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBsb2FkKGF1ZGlvU3JjOiBzdHJpbmcsIGpzb246IFNwcml0ZUpTT04pOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAodGhpcy5faGFzU3RhcnRlZExvYWRpbmcpIHtcblx0XHRcdGNvbnNvbGUud2FybihcIlRoZSBmaWxlIGhhcyBhbHJlYWR5IHN0YXJ0ZWQgbG9hZGluZy5cIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX2pzb24gPSBqc29uO1xuXHRcdHRoaXMuX2hhc1N0YXJ0ZWRMb2FkaW5nID0gdHJ1ZTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5fYXVkaW9BcnJheUJ1ZmZlciA9IGF3YWl0IEF1ZGlvU291cmNlLl9jcmVhdGVBdWRpb0FycmF5QnVmZmVyKGF1ZGlvU3JjKTtcblx0XHRcdHRoaXMuX2hhc0xvYWRlZCA9IHRydWU7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHRocm93IGVycjtcblx0XHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBlcnJvclwiKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgYW5hbHl6ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAoIUF1ZGlvU291cmNlLmlzQWN0aXZlKSByZXR1cm47XG5cdFx0aWYgKHRoaXMuX2hhc1N0YXJ0ZWRBbmFseXNpcykge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiYW5hbHl6ZSgpOiBBdWRpb0J1ZmZlciBoYXMgYWxyZWFkeSBzdGFydGVkIGFuYWx5c2lzXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuX2hhc0xvYWRlZCB8fCB0aGlzLl9hdWRpb0FycmF5QnVmZmVyID09IG51bGwpIHtcblx0XHRcdGNvbnNvbGUud2FybihcImFuYWx5emUoKTogVGhlIGZpbGUgaGFzbid0IGxvYWRlZCB5ZXQuXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2hhc1N0YXJ0ZWRBbmFseXNpcyA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuX2FuYWx5emVQcm9taXNlID0gQXVkaW9Tb3VyY2UuX2NyZWF0ZUF1ZGlvQnVmZmVyKHRoaXMuX2F1ZGlvQXJyYXlCdWZmZXIhKTtcblx0XHRcdHRoaXMuX2F1ZGlvQnVmZmVyID0gYXdhaXQgdGhpcy5fYW5hbHl6ZVByb21pc2U7XG5cdFx0XHR0aGlzLl9hbmFseXplUHJvbWlzZSA9IG51bGw7XG5cdFx0XHR0aGlzLl9oYXNBbmFseXplZCA9IHRydWU7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHRocm93IGVycjtcblx0XHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBlcnJvclwiKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcGxheShrZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMpOiBudW1iZXIge1xuXHRcdGlmICghdGhpcy5faGFzTG9hZGVkKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJwbGF5KCk6IFRoZSBmaWxlIGhhc24ndCBsb2FkZWQgeWV0LlwiKTtcblx0XHRcdHJldHVybiAtOTk5O1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuX2hhc0FuYWx5emVkKSB7XG5cdFx0XHRpZiAoIXRoaXMuX2hhc1N0YXJ0ZWRBbmFseXNpcykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdEF1ZGlvU291cmNlLmFjdGl2YXRlKCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybihcInBsYXkoKTogQ2FuIG5vdCBwbGF5IGF1ZGlvIGJlZm9yZSBpbml0aWFsaXphdGlvbiAoQXVkaW9Db250ZXh0IG11c3QgYmUgaW5pdGlhbGl6YXRpb24gYnkgcG9pbnRlciBldmVudCkuXCIpO1xuXHRcdFx0XHRcdHJldHVybiAtOTk5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9hbmFseXplUHJvbWlzZSAhPSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IGlkID0gdGhpcy5fdW5pcXVlS2V5O1xuXHRcdFx0XHR0aGlzLl9wbGF5TGF0ZXIoaWQsIGtleSwgb3B0aW9ucyk7XG5cdFx0XHRcdHJldHVybiBpZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybigoXCJfYW5hbHl6ZVByb21pc2UgaXMgbnVsbFwiKSk7XG5cdFx0XHRcdHJldHVybiAtOTk5O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9qc29uID09PSBudWxsIHx8ICF0aGlzLl9qc29uLnNwcml0ZW1hcCB8fCAhKGtleSBpbiB0aGlzLl9qc29uLnNwcml0ZW1hcCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihganNvbiBlcnJvcjogJHt0aGlzLl9qc29ufWApO1xuXHRcdH1cblxuXHRcdGlmICgoQXVkaW9Tb3VyY2UuX2N0eD8uc3RhdGUgYXMgc3RyaW5nKSA9PSBcImludGVycnVwdGVkXCIpIHtcblx0XHRcdGNvbnN0IGlkID0gdGhpcy5fdW5pcXVlS2V5O1xuXHRcdFx0QXVkaW9Tb3VyY2UuX2N0eD8ucmVzdW1lKCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRoaXMucGxheShrZXksIG9wdGlvbnMpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gaWQ7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWQgPSB0aGlzLl91bmlxdWVLZXk7XG5cdFx0dGhpcy5fcGxheShpZCwga2V5LCBvcHRpb25zKTtcblx0XHR0aGlzLnNldExvb3Aob3B0aW9ucy5sb29wISwgaWQpO1xuXHRcdHRoaXMuc2V0Vm9sdW1lKG9wdGlvbnMudm9sdW1lISwgaWQpXG5cblx0XHRyZXR1cm4gaWQ7XG5cdH1cblxuXHRwdWJsaWMgc3RvcChpZDogbnVtYmVyLCBkZWxheTogbnVtYmVyID0gMCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5fYXVkaW9MaXN0LmhhcyhpZCkpIHJldHVybjtcblxuXHRcdHRoaXMuX2F1ZGlvTGlzdC5nZXQoaWQpPy5ub2Rlcy5hdWRpb1NyYyEuc3RvcChBdWRpb1NvdXJjZS5fY3R4IS5jdXJyZW50VGltZSArIGRlbGF5KTtcblx0XHR0aGlzLl9hdWRpb0xpc3QuZGVsZXRlKGlkKTtcblx0fVxuXG5cdHB1YmxpYyBzZXRWb2x1bWUodm9sOiBudW1iZXIsIGlkOiBudW1iZXIpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuX2F1ZGlvTGlzdC5oYXMoaWQpKSByZXR1cm47XG5cblx0XHRjb25zdCBhdWRpb05vZGVzOiBBdWRpb05vZGVzID0gdGhpcy5fYXVkaW9MaXN0LmdldChpZCk/Lm5vZGVzITtcblx0XHRpZiAoYXVkaW9Ob2RlcyAhPT0gbnVsbCAmJiBhdWRpb05vZGVzLnZvbHVtZSAhPT0gbnVsbCkgYXVkaW9Ob2Rlcy52b2x1bWUgPSB2b2w7XG5cdH1cblxuXHRwdWJsaWMgc2V0TG9vcChsb29wOiBib29sZWFuLCBpZDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLl9hdWRpb0xpc3QuaGFzKGlkKSkgcmV0dXJuO1xuXG5cdFx0Y29uc3Qga2V5ID0gdGhpcy5fYXVkaW9MaXN0LmdldChpZCk/LmtleTtcblx0XHRjb25zdCBhdWRpb05vZGVzID0gdGhpcy5fYXVkaW9MaXN0LmdldChpZCk/Lm5vZGVzO1xuXG5cdFx0aWYgKGxvb3ApIHtcblx0XHRcdGNvbnN0IHN0YXJ0ID0gdGhpcy5fanNvbiEuc3ByaXRlbWFwW2tleSFdLnN0YXJ0O1xuXHRcdFx0Y29uc3QgZW5kID0gdGhpcy5fanNvbiEuc3ByaXRlbWFwW2tleSFdLmVuZDtcblx0XHRcdGF1ZGlvTm9kZXMhLmF1ZGlvU3JjIS5sb29wID0gdHJ1ZTtcblx0XHRcdGF1ZGlvTm9kZXMhLmF1ZGlvU3JjIS5sb29wU3RhcnQgPSBzdGFydDtcblx0XHRcdGF1ZGlvTm9kZXMhLmF1ZGlvU3JjIS5sb29wRW5kID0gZW5kO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhdWRpb05vZGVzIS5hdWRpb1NyYyEubG9vcCA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBhc3luYyBmYWRlKHZvbFRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAoIXRoaXMuX2F1ZGlvTGlzdC5oYXMoaWQpKSByZXR1cm47XG5cdFx0Y29uc3QgYXVkaW9Ob2RlcyA9IHRoaXMuX2F1ZGlvTGlzdC5nZXQoaWQpPy5ub2RlcztcblxuXHRcdGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXM6ICgpID0+IHZvaWQpID0+IHtcblx0XHRcdFR3ZWVuLnRvKGF1ZGlvTm9kZXMsIFwidm9sdW1lXCIsIHZvbFRvLCB7XG5cdFx0XHRcdGR1cmF0aW9uOiBkdXJhdGlvbixcblx0XHRcdFx0b25Db21wbGV0ZTogcmVzXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHR9XG5cblx0cHVibGljIGZhZGVBbGwodm9sVG86IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuX2F1ZGlvTGlzdC5mb3JFYWNoKChfOiBBdWRpb0RhdGEsIGlkOiBudW1iZXIpID0+IHtcblx0XHRcdHRoaXMuZmFkZSh2b2xUbywgMC41LCBpZCkudGhlbihfID0+IHRoaXMuc3RvcChpZCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBfcGxheShpZDogbnVtYmVyLCBrZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMpOiB2b2lkIHtcblx0XHRjb25zdCBhdWRpb1NyYzogQXVkaW9CdWZmZXJTb3VyY2VOb2RlID0gQXVkaW9Tb3VyY2UuX2N0eCEuY3JlYXRlQnVmZmVyU291cmNlKCk7XG5cdFx0YXVkaW9TcmMhLmJ1ZmZlciA9IHRoaXMuX2F1ZGlvQnVmZmVyO1xuXG5cdFx0Y29uc3QgZ2Fpbk5vZGUgPSBBdWRpb1NvdXJjZS5fY3R4IS5jcmVhdGVHYWluKCk7XG5cdFx0Y29uc3QgYXVkaW9Ob2RlczogQXVkaW9Ob2RlcyA9IG5ldyBBdWRpb05vZGVzKGF1ZGlvU3JjLCBnYWluTm9kZSk7XG5cdFx0YXVkaW9Ob2Rlcy5tYXN0ZXJWb2x1bWUgPSB0aGlzLm1hc3RlclZvbHVtZTtcblx0XHRhdWRpb05vZGVzLmNvbm5lY3QoZ2Fpbk5vZGUpLmNvbm5lY3QoQXVkaW9Tb3VyY2UuX2N0eCEuZGVzdGluYXRpb24pO1xuXG5cdFx0Y29uc3Qgc3RhcnQgPSB0aGlzLl9qc29uIS5zcHJpdGVtYXBba2V5XS5zdGFydDtcblx0XHRjb25zdCBlbmQgPSB0aGlzLl9qc29uIS5zcHJpdGVtYXBba2V5XS5lbmQ7XG5cblx0XHRpZiAob3B0aW9ucy5sb29wISkge1xuXHRcdFx0YXVkaW9Ob2Rlcy5hdWRpb1NyYyEuc3RhcnQoQXVkaW9Tb3VyY2UuX2N0eCEuY3VycmVudFRpbWUgKyBvcHRpb25zLmRlbGF5ISwgc3RhcnQsIGVuZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGR1ciA9IE1hdGgubWF4KGVuZCAtIHN0YXJ0LCAwLjEpO1xuXHRcdFx0YXVkaW9Ob2Rlcy5hdWRpb1NyYyEuc3RhcnQoQXVkaW9Tb3VyY2UuX2N0eCEuY3VycmVudFRpbWUgKyBvcHRpb25zLmRlbGF5ISwgc3RhcnQsIGR1cik7XG5cdFx0fVxuXG5cdFx0YXVkaW9Ob2Rlcy5hdWRpb1NyYyEub25lbmRlZCA9ICgpID0+IHtcblx0XHRcdHRoaXMuc3RvcChpZCk7XG5cdFx0XHRhdWRpb05vZGVzLmF1ZGlvU3JjIS5kaXNjb25uZWN0KCk7XG5cdFx0XHRhdWRpb05vZGVzLmF1ZGlvU3JjIS5idWZmZXIgPSBudWxsO1xuXHRcdFx0b3B0aW9ucy5jYWxsYmFjayEoaWQpO1xuXHRcdH07XG5cblx0XHR0aGlzLl9hdWRpb0xpc3Quc2V0KGlkLCB7XG5cdFx0XHRrZXksXG5cdFx0XHRub2RlczogYXVkaW9Ob2Rlcyxcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgX3BsYXlMYXRlcihpZDogbnVtYmVyLCBrZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRhd2FpdCB0aGlzLl9hbmFseXplUHJvbWlzZSE7XG5cdFx0dGhpcy5fcGxheShpZCwga2V5LCBvcHRpb25zKTtcblx0XHR0aGlzLnNldExvb3Aob3B0aW9ucy5sb29wISwgaWQpO1xuXHRcdHRoaXMuc2V0Vm9sdW1lKG9wdGlvbnMudm9sdW1lISwgaWQpXG5cdH1cbn0iLCJpbXBvcnQgeyBLSVRfSU5GTyB9IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgQXVkaW9Tb3VyY2UgZnJvbSBcIi4vYXVkaW9Tb3VyY2VcIjtcbmltcG9ydCB7IFBsYXlPcHRpb25zIH0gZnJvbSBcIi4vc25kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kS2l0IHtcblxuXHRwdWJsaWMga2V5OiBzdHJpbmc7XG5cdHByaXZhdGUgX2lkczogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgX2F1ZGlvU3JjOiBBdWRpb1NvdXJjZSA9IG5ldyBBdWRpb1NvdXJjZSgpO1xuXHRwcml2YXRlIF9tYXN0ZXJWb2x1bWU6IG51bWJlciA9IDE7XG5cblx0Y29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcblx0XHR0aGlzLmtleSA9IGtleTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgbWFzdGVyVm9sdW1lKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBzZXQgbWFzdGVyVm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fbWFzdGVyVm9sdW1lID0gdmFsO1xuXHRcdHRoaXMuX2F1ZGlvU3JjLm1hc3RlclZvbHVtZSA9IHRoaXMuX21hc3RlclZvbHVtZTtcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGNvbnN0IGpzb24gPSBLSVRfSU5GT1t0aGlzLmtleV0uanNvbjtcblx0XHRjb25zdCBhdWRpb1NyYyA9IEtJVF9JTkZPW3RoaXMua2V5XS5hdWRpb1NyYztcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgdGhpcy5fYXVkaW9TcmMubG9hZChhdWRpb1NyYywganNvbik7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR0aHJvdyBlcnI7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGFzeW5jIGFuYWx5emUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHRoaXMuX2F1ZGlvU3JjLmFuYWx5emUoKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHRocm93IGVycjtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcGxheShrZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMpOiB2b2lkIHtcblx0XHRjb25zdCBvbGRJZCA9IHRoaXMuX2lkcy5nZXQoa2V5KTtcblx0XHRpZiAob2xkSWQgIT09IHVuZGVmaW5lZCkgdGhpcy5fYXVkaW9TcmMuZmFkZSgwLCAwLjA1LCBvbGRJZCk7XG5cblx0XHRjb25zdCBpZCA9IHRoaXMuX2F1ZGlvU3JjLnBsYXkoa2V5LCBvcHRpb25zKTtcblx0XHRjb25zdCBmYWRlb3V0RHVyYXRpb246IG51bWJlciA9IDAuMDU7XG5cdFx0aWYgKG9wdGlvbnMuZHVyYXRpb24hID4gZmFkZW91dER1cmF0aW9uKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5fYXVkaW9TcmMuZmFkZSgwLCBmYWRlb3V0RHVyYXRpb24sIGlkKTtcblx0XHRcdH0sIChvcHRpb25zLmR1cmF0aW9uISAtIGZhZGVvdXREdXJhdGlvbikgKiAxMDAwKTtcblx0XHR9XG5cblx0XHR0aGlzLl9pZHMuc2V0KGtleS5yZXBsYWNlKC9fWzAtOV1bMC05XS8sIFwiXCIpLCBpZCk7XG5cdH1cblxuXHRwdWJsaWMgc3RvcChzb3VuZEtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Y29uc3QgaWQgPSB0aGlzLl9pZHMuZ2V0KHNvdW5kS2V5KTtcblx0XHRpZiAoaWQpIHRoaXMuX2F1ZGlvU3JjLnN0b3AoaWQpO1xuXHRcdGVsc2UgY29uc29sZS53YXJuKGBbU291bmRLaXQuc3RvcCgpXSBrZXk6ICR7c291bmRLZXl9IGhhdmVuJ3QgcGxheWVkYCk7XG5cdH1cblxuXHRwdWJsaWMgZmFkZSh2b2xUbzogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5fYXVkaW9TcmMuZmFkZUFsbCh2b2xUbyk7XG5cdH1cblxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRlbWl0dGVyM1wiO1xuaW1wb3J0IHsgRVZFTlRfQ0xBU1NfTkFNRVMsIFRPR0dMRV9TT1VORF9LRVlTLCBFTkFCTEVfVEFHUyB9IGZyb20gXCIuL2NvbnN0YW50XCI7XG5cbmNvbnN0IGlzVG91Y2hEZXZpY2U6IGJvb2xlYW4gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09IHVuZGVmaW5lZFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET01JbnRlcmFjdGlvbiBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cblx0cHVibGljIHN0YXRpYyByZWFkb25seSBJTlRFUkFDVDogXCJpbnRlcmFjdFwiXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuX2luaXQoKVxuXHR9XG5cblx0cHJpdmF0ZSBfaW5pdCgpOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBFVkVOVF9DTEFTU19OQU1FUykge1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gRVZFTlRfQ0xBU1NfTkFNRVNba2V5XVxuXHRcdFx0Y29uc3QgZWxlbWVudHM6IEhUTUxDb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpXG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgZWwgPSBlbGVtZW50c1tpXVxuXHRcdFx0XHRjb25zdCBzb3VuZEtleSA9IGtleS5yZXBsYWNlKFwic25kX19cIiwgXCJcIilcblx0XHRcdFx0Y29uc3QgZXZlbnROYW1lID0gdGhpcy5fZ2V0RXZlbnROYW1lKHNvdW5kS2V5LCBlbCBhcyBIVE1MRWxlbWVudClcblx0XHRcdFx0aWYgKGV2ZW50TmFtZSA9PSBudWxsKSBicmVha1xuXG5cdFx0XHRcdHRoaXMuX2xpc3RlbihlbCBhcyBIVE1MRWxlbWVudCwgZXZlbnROYW1lLCBzb3VuZEtleSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIF9nZXRFdmVudE5hbWUoc291bmRLZXk6IHN0cmluZywgZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcgfCBudWxsIHtcblx0XHRjb25zdCB0YWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKClcblxuXHRcdGZvciAoY29uc3QgdGFnU3RyaW5nIGluIEVOQUJMRV9UQUdTKSB7XG5cblx0XHRcdGlmICh0YWdOYW1lID09IFwiaW5wdXRcIiAmJiB0YWdTdHJpbmcubWF0Y2goXCJpbnB1dFwiKSAhPSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IHR5cGUgPSAoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS50eXBlIHx8IFwiXCJcblx0XHRcdFx0Y29uc3QgdHlwZXMgPSB0YWdTdHJpbmcuc3BsaXQoXCI6XCIpWzFdLnNwbGl0KFwiLFwiKVxuXHRcdFx0XHRmb3IgKGNvbnN0IGV2ZW50IGluIEVOQUJMRV9UQUdTW3RhZ1N0cmluZ10uZXZlbnRzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBpIGluIHR5cGVzKSB7XG5cdFx0XHRcdFx0XHRpZiAodHlwZSAhPSB0eXBlc1tpXSkgY29udGludWVcblx0XHRcdFx0XHRcdGNvbnN0IHNvdW5kcyA9IEVOQUJMRV9UQUdTW3RhZ1N0cmluZ10uZXZlbnRzW2V2ZW50XS5zcGxpdChcIixcIilcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgaiBpbiBzb3VuZHMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHNvdW5kS2V5ID09IHNvdW5kc1tqXSkgcmV0dXJuIGV2ZW50XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGFnU3RyaW5nID09IHRhZ05hbWUgfHwgdGFnU3RyaW5nID09IFwiYW55XCIpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGV2ZW50IGluIEVOQUJMRV9UQUdTW3RhZ1N0cmluZ10uZXZlbnRzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBzb3VuZHMgPSBFTkFCTEVfVEFHU1t0YWdTdHJpbmddLmV2ZW50c1tldmVudF0uc3BsaXQoXCIsXCIpXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGkgaW4gc291bmRzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChzb3VuZEtleSA9PSBzb3VuZHNbaV0pIHJldHVybiBldmVudFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsXG5cdH1cblxuXHRwcml2YXRlIF9saXN0ZW4oZWxlbWVudDogSFRNTEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nLCBzb3VuZEtleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKGUpID0+IHRoaXMuX3Byb2Nlc3MoZSwgZXZlbnROYW1lLCBzb3VuZEtleSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBfcHJvY2VzcyhlOiBFdmVudCwgZXZlbnROYW1lOiBzdHJpbmcsIHNvdW5kS2V5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRjb25zdCB0YXJnZXQ6IEhUTUxFbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblxuXHRcdGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhgc25kX18ke3NvdW5kS2V5fWApKSByZXR1cm5cblx0XHRpZiAoc291bmRLZXkgPT0gXCJ0b2dnbGVcIikge1xuXHRcdFx0c291bmRLZXkgPSAodGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQgPyBUT0dHTEVfU09VTkRfS0VZU1swXSA6IFRPR0dMRV9TT1VORF9LRVlTWzFdXG5cdFx0fVxuXG5cdFx0dGhpcy5fZW1pdCh0YXJnZXQgYXMgSFRNTEVsZW1lbnQsIGV2ZW50TmFtZSwgc291bmRLZXkpXG5cdH1cblxuXHRwcml2YXRlIF9lbWl0KERPTTogSFRNTEVsZW1lbnQsIGV2ZW50OiBzdHJpbmcsIHNvdW5kS2V5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm11dGVkXCIpKSByZXR1cm5cblx0XHR0aGlzLmVtaXQoRE9NSW50ZXJhY3Rpb24uSU5URVJBQ1QsIHNvdW5kS2V5KVxuXHR9XG5cbn0iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudGVtaXR0ZXIzXCI7XG5pbXBvcnQgeyBLaXRLaW5kcywgS0lUUywgU09VTkRTLCBTV0lQRV9TT1VORF9LRVlTLCBUQVBfU09VTkRfS0VZUywgVFlQRV9TT1VORF9LRVlTIH0gZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCBTb3VuZEtpdCBmcm9tIFwiLi9zb3VuZEtpdFwiO1xuaW1wb3J0IERPTUludGVyYWN0aW9uIGZyb20gXCIuL2RvbUludGVyYWN0aW9uXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4vdHdlZW5cIjtcbmltcG9ydCBBdWRpb1NvdXJjZSBmcm9tIFwiLi9hdWRpb1NvdXJjZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNuZE9wdGlvbnMge1xuXHRlYXN5U2V0dXA/OiBib29sZWFuO1xuXHRtdXRlT25XaW5kb3dCbHVyPzogYm9vbGVhbjtcblx0cHJlbG9hZFNvdW5kS2l0PzogbnVsbCB8IEtpdEtpbmRzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXlPcHRpb25zIHtcblx0bG9vcD86IGJvb2xlYW47XG5cdHZvbHVtZT86IG51bWJlcjtcblx0ZHVyYXRpb24/OiBudW1iZXI7XG5cdGRlbGF5PzogbnVtYmVyO1xuXHRjYWxsYmFjaz86IChpZDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbmQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX1NPVU5EX0tJVDogc3RyaW5nID0gXCJjaGFuZ2Vfc291bmRfa2l0XCI7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU09VTkRTID0gU09VTkRTO1xuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtJVFMgPSBLSVRTO1xuXG5cdHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZXM6IFNuZFtdID0gW107XG5cdHByaXZhdGUgc3RhdGljIF9pbml0aWFsaXplZFNvdW5kS2l0czogTWFwPHN0cmluZywgU291bmRLaXQ+ID0gbmV3IE1hcDxzdHJpbmcsIFNvdW5kS2l0PigpO1xuXHRwcml2YXRlIHN0YXRpYyBfbWFzdGVyVm9sdW1lOiBudW1iZXIgPSAxO1xuXG5cdHByaXZhdGUgX3NvdW5kS2l0OiBTb3VuZEtpdCA9IG5ldyBTb3VuZEtpdChLSVRTLlNORDAxKTtcblx0cHJpdmF0ZSBfZG9tOiBET01JbnRlcmFjdGlvbiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF92b2w6IG51bWJlciA9IDE7XG5cdHByaXZhdGUgX2lzTXV0ZWRCeURldmVsb3BlcjogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIF9pc011dGVkQnlXaW5kb3c6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfaXNXaW5kb3dCbHVycmVkOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgX211dGVPbldpbmRvd0JsdXI6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBfZmFkZVZvbDogbnVtYmVyID0gMTtcblx0cHJpdmF0ZSBfd2luZG93Vm9sOiBudW1iZXIgPSAxO1xuXHRwcml2YXRlIF9mYWRlVHdlZW5CeURldmVsb3BlcjogVHdlZW4gfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfZmFkZVR3ZWVuQnlXaW5kb3dFdmVudDogVHdlZW4gfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBzdGF0aWMgX2RlZmF1bHRPcHRpb25zOiBTbmRPcHRpb25zID0ge1xuXHRcdG11dGVPbldpbmRvd0JsdXI6IHRydWUsXG5cdFx0ZWFzeVNldHVwOiBmYWxzZSxcblx0XHRwcmVsb2FkU291bmRLaXQ6IG51bGwsXG5cdH07XG5cdHByaXZhdGUgc3RhdGljIF9kZWZhdWx0UGxheU9wdGlvbnM6IFBsYXlPcHRpb25zID0ge1xuXHRcdGxvb3A6IGZhbHNlLFxuXHRcdHZvbHVtZTogMSxcblx0XHRkZWxheTogMCxcblx0XHRkdXJhdGlvbjogLTEsXG5cdFx0Y2FsbGJhY2s6ICgpID0+IHsgfVxuXHR9O1xuXG5cdHB1YmxpYyBzdGF0aWMgZ2V0IG1hc3RlclZvbHVtZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fbWFzdGVyVm9sdW1lOyB9XG5cdHB1YmxpYyBzdGF0aWMgc2V0IG1hc3RlclZvbHVtZSh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuX21hc3RlclZvbHVtZSA9IHZhbDtcblx0XHR0aGlzLl9pbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2U6IFNuZCkgPT4ge1xuXHRcdFx0aW5zdGFuY2UuX3NvdW5kS2l0Lm1hc3RlclZvbHVtZSA9IHRoaXMuX21hc3RlclZvbHVtZSAqIGluc3RhbmNlLl92b2x1bWU7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogU25kT3B0aW9ucykge1xuXHRcdHN1cGVyKCk7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblx0XHRTbmQuX2luc3RhbmNlcy5wdXNoKHRoaXMpO1xuXG5cdFx0b3B0aW9ucyA9IHtcblx0XHRcdC4uLlNuZC5fZGVmYXVsdE9wdGlvbnMsXG5cdFx0XHQuLi5vcHRpb25zLFxuXHRcdH07XG5cdFx0dGhpcy5fbXV0ZU9uV2luZG93Qmx1ciA9IG9wdGlvbnMubXV0ZU9uV2luZG93Qmx1ciB8fCBmYWxzZTtcblxuXHRcdGlmIChvcHRpb25zPy5lYXN5U2V0dXApIHtcblx0XHRcdHRoaXMuX2RvbSA9IG5ldyBET01JbnRlcmFjdGlvbigpO1xuXHRcdFx0dGhpcy5fZG9tLm9uKERPTUludGVyYWN0aW9uLklOVEVSQUNULCB0aGlzLl9vbkludGVyYWN0KTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMucHJlbG9hZFNvdW5kS2l0KSB0aGlzLmxvYWQob3B0aW9ucy5wcmVsb2FkU291bmRLaXQpO1xuXG5cdFx0Y29uc3QgaW5pdEF1ZGlvQ29udGV4dCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdEF1ZGlvU291cmNlLmFjdGl2YXRlKCk7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluaXRBdWRpb0NvbnRleHQpO1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGluaXRBdWRpb0NvbnRleHQpO1xuXHRcdH07XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbml0QXVkaW9Db250ZXh0LCB7IG9uY2U6IHRydWUgfSk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGluaXRBdWRpb0NvbnRleHQsIHsgb25jZTogdHJ1ZSB9KTtcblxuXHRcdGNvbnN0IGlzU3AgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8QW5kcm9pZC4rTW9iaWxlLykgIT0gbnVsbDtcblx0XHRpZiAoaXNTcCkge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLl9vbkJsdXIpO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0aGlzLl9vbkZvY3VzKTtcblx0XHR9XG5cblx0fVxuXG5cdHB1YmxpYyBnZXQga2l0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zb3VuZEtpdC5rZXk7IH1cblx0cHVibGljIGdldCBpc011dGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5faXNNdXRlZEJ5RGV2ZWxvcGVyIHx8IHRoaXMuX2lzTXV0ZWRCeVdpbmRvdzsgfVxuXHRwdWJsaWMgZ2V0IGlzV2luZG93Qmx1cnJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2lzV2luZG93Qmx1cnJlZDsgfVxuXG5cdHByaXZhdGUgZ2V0IF9mYWRlVm9sdW1lKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9mYWRlVm9sOyB9XG5cdHByaXZhdGUgc2V0IF9mYWRlVm9sdW1lKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fZmFkZVZvbCA9IHZhbDtcblx0XHR0aGlzLl92b2x1bWUgPSB0aGlzLl9mYWRlVm9sICogdGhpcy5fd2luZG93Vm9sdW1lO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXQgX3dpbmRvd1ZvbHVtZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fd2luZG93Vm9sOyB9XG5cdHByaXZhdGUgc2V0IF93aW5kb3dWb2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl93aW5kb3dWb2wgPSB2YWw7XG5cdFx0dGhpcy5fdm9sdW1lID0gdGhpcy5fZmFkZVZvbHVtZSAqIHRoaXMuX3dpbmRvd1ZvbDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0IF92b2x1bWUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fdm9sO1xuXHR9XG5cdHByaXZhdGUgc2V0IF92b2x1bWUodmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl92b2wgPSB2YWw7XG5cdFx0dGhpcy5fc291bmRLaXQubWFzdGVyVm9sdW1lID0gdGhpcy5fdm9sICogU25kLl9tYXN0ZXJWb2x1bWU7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgbG9hZChzb3VuZEtpdEtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dGhpcy5fc291bmRLaXQuZmFkZSgwKTtcblx0XHRjb25zdCBvbGRLZXkgPSB0aGlzLl9zb3VuZEtpdC5rZXk7XG5cdFx0Y29uc3Qga2l0ID0gU25kLl9pbml0aWFsaXplZFNvdW5kS2l0cy5nZXQoc291bmRLaXRLZXkpO1xuXG5cdFx0aWYgKGtpdCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zdCBuZXdLaXQgPSBuZXcgU291bmRLaXQoc291bmRLaXRLZXkpO1xuXHRcdFx0U25kLl9pbml0aWFsaXplZFNvdW5kS2l0cy5zZXQoc291bmRLaXRLZXksIG5ld0tpdCk7XG5cdFx0XHRhd2FpdCBuZXdLaXQubG9hZCgpO1xuXHRcdFx0YXdhaXQgbmV3S2l0LmFuYWx5emUoKTtcblx0XHRcdHRoaXMuX3NvdW5kS2l0ID0gbmV3S2l0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9zb3VuZEtpdCA9IGtpdDtcblx0XHR9XG5cblx0XHR0aGlzLl9zb3VuZEtpdC5mYWRlKDEpO1xuXHRcdGNvbnN0IGNycktleSA9IHRoaXMuX3NvdW5kS2l0LmtleTtcblx0XHRpZiAob2xkS2V5ICE9PSBjcnJLZXkpIHRoaXMuZW1pdChTbmQuQ0hBTkdFX1NPVU5EX0tJVCwgY3JyS2V5LCBvbGRLZXkpO1xuXHR9XG5cblx0cHVibGljIHBsYXkoc291bmRLZXk6IHN0cmluZywgb3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdG9wdGlvbnMgPSB7XG5cdFx0XHQuLi5TbmQuX2RlZmF1bHRQbGF5T3B0aW9ucyxcblx0XHRcdC4uLm9wdGlvbnNcblx0XHR9O1xuXHRcdGlmICh0aGlzLmlzV2luZG93Qmx1cnJlZCkgcmV0dXJuO1xuXHRcdGlmIChzb3VuZEtleSA9PT0gU09VTkRTLlRBUCkgcmV0dXJuIHRoaXMucGxheVRhcChvcHRpb25zKTtcblx0XHRpZiAoc291bmRLZXkgPT09IFNPVU5EUy5UWVBFKSByZXR1cm4gdGhpcy5wbGF5VHlwZShvcHRpb25zKTtcblx0XHRpZiAoc291bmRLZXkgPT09IFNPVU5EUy5TV0lQRSkgcmV0dXJuIHRoaXMucGxheVN3aXBlKG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5fc291bmRLaXQucGxheShzb3VuZEtleSwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgc3RvcChrZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuX3NvdW5kS2l0LnN0b3Aoa2V5KTtcblx0fVxuXG5cdHB1YmxpYyBtdXRlKCk6IHZvaWQge1xuXHRcdHRoaXMuX2lzTXV0ZWRCeURldmVsb3BlciA9IHRydWU7XG5cdFx0dGhpcy5fZmFkZUJ5RGV2ZWxvcGVyKDAsIDAuMyk7XG5cdH1cblxuXHRwdWJsaWMgdW5tdXRlKCk6IHZvaWQge1xuXHRcdHRoaXMuX2lzTXV0ZWRCeURldmVsb3BlciA9IGZhbHNlO1xuXHRcdHRoaXMuX2ZhZGVCeURldmVsb3BlcigxLCAwLjMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlUYXAob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMuX3BsYXlSYW5kb20oVEFQX1NPVU5EX0tFWVMsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlTd2lwZShvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5fcGxheVJhbmRvbShTV0lQRV9TT1VORF9LRVlTLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5VHlwZShvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5fcGxheVJhbmRvbShUWVBFX1NPVU5EX0tFWVMsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlCdXR0b24ob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLkJVVFRPTiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheUNhdXRpb24ob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLkNBVVRJT04sIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlDZWxlYnJhdGlvbihvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuQ0VMRUJSQVRJT04sIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlEaXNhYmxlZChvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuRElTQUJMRUQsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlOb3RpZmljYXRpb24ob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLk5PVElGSUNBVElPTiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVByb2dyZXNzTG9vcChvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuUFJPR1JFU1NfTE9PUCwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVJpbmd0b25lTG9vcChvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuUklOR1RPTkVfTE9PUCwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVNlbGVjdChvcHRpb25zOiBQbGF5T3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdFx0dGhpcy5wbGF5KFNuZC5TT1VORFMuU0VMRUNULCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5VHJhbnNpdGlvblVwKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5UUkFOU0lUSU9OX1VQLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBwbGF5VHJhbnNpdGlvbkRvd24ob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLlRSQU5TSVRJT05fRE9XTiwgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgcGxheVRvZ2dsZU9uKG9wdGlvbnM6IFBsYXlPcHRpb25zID0ge30pOiB2b2lkIHtcblx0XHR0aGlzLnBsYXkoU25kLlNPVU5EUy5UT0dHTEVfT04sIG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHBsYXlUb2dnbGVPZmYob3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShTbmQuU09VTkRTLlRPR0dMRV9PRkYsIG9wdGlvbnMpO1xuXHR9XG5cblx0cHJpdmF0ZSBfcGxheVJhbmRvbShrZXlzOiBzdHJpbmdbXSwgb3B0aW9uczogUGxheU9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRcdHRoaXMucGxheShrZXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGtleXMubGVuZ3RoKV0sIG9wdGlvbnMpO1xuXHR9XG5cblx0cHJpdmF0ZSBfb25WaXNpYmlsaXR5Q2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuXHRcdHdpbmRvdy5kb2N1bWVudC5oaWRkZW4gPyB0aGlzLl9vbkJsdXIoKSA6IHRoaXMuX29uRm9jdXMoKTtcblx0fTtcblxuXHRwcml2YXRlIF9vbkJsdXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKHRoaXMuX211dGVPbldpbmRvd0JsdXIpIHRoaXMuX211dGVPbkJsdXIoKTtcblx0XHR0aGlzLl9pc1dpbmRvd0JsdXJyZWQgPSB0cnVlO1xuXHR9O1xuXG5cdHByaXZhdGUgX29uRm9jdXMgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKHRoaXMuX211dGVPbldpbmRvd0JsdXIpIHRoaXMuX3VubXV0ZU9uRm9jdXMoKTtcblx0XHR0aGlzLl9pc1dpbmRvd0JsdXJyZWQgPSBmYWxzZTtcblx0fTtcblxuXHRwcml2YXRlIF9tdXRlT25CbHVyKCk6IHZvaWQge1xuXHRcdHRoaXMuX2lzTXV0ZWRCeVdpbmRvdyA9IHRydWU7XG5cdFx0dGhpcy5fZmFkZUJ5V2luZG93RXZlbnQoMCwgMC4zKTtcblx0fVxuXG5cdHByaXZhdGUgX3VubXV0ZU9uRm9jdXMoKTogdm9pZCB7XG5cdFx0dGhpcy5faXNNdXRlZEJ5V2luZG93ID0gZmFsc2U7XG5cdFx0dGhpcy5fZmFkZUJ5V2luZG93RXZlbnQoMSwgMC4zKTtcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgX2ZhZGVCeURldmVsb3Blcih2b2x1bWVUbzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0aWYgKHRoaXMuX2ZhZGVUd2VlbkJ5RGV2ZWxvcGVyICE9IG51bGwpIHRoaXMuX2ZhZGVUd2VlbkJ5RGV2ZWxvcGVyLmtpbGwoKTtcblx0XHR0aGlzLl9mYWRlVHdlZW5CeURldmVsb3BlciA9IFR3ZWVuLnRvKHRoaXMsIFwiX2ZhZGVWb2x1bWVcIiwgdm9sdW1lVG8sIHsgZHVyYXRpb24gfSk7XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIF9mYWRlQnlXaW5kb3dFdmVudCh2b2x1bWVUbzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0aWYgKHRoaXMuX2ZhZGVUd2VlbkJ5V2luZG93RXZlbnQgIT0gbnVsbCkgdGhpcy5fZmFkZVR3ZWVuQnlXaW5kb3dFdmVudC5raWxsKCk7XG5cdFx0dGhpcy5fZmFkZVR3ZWVuQnlXaW5kb3dFdmVudCA9IFR3ZWVuLnRvKHRoaXMsIFwiX3dpbmRvd1ZvbHVtZVwiLCB2b2x1bWVUbywgeyBkdXJhdGlvbiB9KTtcblx0fVxuXG5cdHByaXZhdGUgX29uSW50ZXJhY3QgPSAoZXZlbnQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdHRoaXMucGxheShldmVudCk7XG5cdH07XG5cbn0iLCJpbXBvcnQgU25kIGZyb20gXCIuL3NuZFwiO1xuZXhwb3J0IGRlZmF1bHQgU25kOyJdLCJuYW1lcyI6WyJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9fZXh0ZW5kcyIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcHBseSIsIl9fcmVzdCIsImUiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJfdHlwZW9mIiwiZGVjb3JhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fcGFyYW0iLCJwYXJhbUluZGV4IiwiZGVjb3JhdG9yIiwiX19lc0RlY29yYXRlIiwiY3RvciIsImRlc2NyaXB0b3JJbiIsImNvbnRleHRJbiIsImluaXRpYWxpemVycyIsImV4dHJhSW5pdGlhbGl6ZXJzIiwiYWNjZXB0IiwiZiIsImtpbmQiLCJkZXNjcmlwdG9yIiwibmFtZSIsIl8iLCJkb25lIiwiY29udGV4dCIsImFjY2VzcyIsImFkZEluaXRpYWxpemVyIiwicHVzaCIsInJlc3VsdCIsImdldCIsInNldCIsImluaXQiLCJ1bnNoaWZ0IiwiX19ydW5Jbml0aWFsaXplcnMiLCJ0aGlzQXJnIiwidmFsdWUiLCJ1c2VWYWx1ZSIsIl9fcHJvcEtleSIsIngiLCJjb25jYXQiLCJfX3NldEZ1bmN0aW9uTmFtZSIsInByZWZpeCIsImRlc2NyaXB0aW9uIiwiY29uZmlndXJhYmxlIiwiX19tZXRhZGF0YSIsIm1ldGFkYXRhS2V5IiwibWV0YWRhdGFWYWx1ZSIsIm1ldGFkYXRhIiwiX19hd2FpdGVyIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJyZWplY3RlZCIsInRoZW4iLCJfX2dlbmVyYXRvciIsImJvZHkiLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJwb3AiLCJfX2NyZWF0ZUJpbmRpbmciLCJvIiwibSIsImsiLCJrMiIsInVuZGVmaW5lZCIsIl9fZXNNb2R1bGUiLCJ3cml0YWJsZSIsImVudW1lcmFibGUiLCJfX2V4cG9ydFN0YXIiLCJfX3ZhbHVlcyIsIl9fcmVhZCIsImFyIiwiZXJyb3IiLCJfX3NwcmVhZCIsIl9fc3ByZWFkQXJyYXlzIiwiaWwiLCJhIiwiaiIsImpsIiwiX19zcHJlYWRBcnJheSIsInRvIiwiZnJvbSIsInBhY2siLCJsIiwic2xpY2UiLCJfX2F3YWl0IiwiX19hc3luY0dlbmVyYXRvciIsImFzeW5jSXRlcmF0b3IiLCJxIiwicmVzdW1lIiwic2V0dGxlIiwiZnVsZmlsbCIsInNoaWZ0IiwiX19hc3luY0RlbGVnYXRvciIsIl9fYXN5bmNWYWx1ZXMiLCJfX21ha2VUZW1wbGF0ZU9iamVjdCIsImNvb2tlZCIsInJhdyIsIl9fc2V0TW9kdWxlRGVmYXVsdCIsIl9faW1wb3J0U3RhciIsIm1vZCIsIl9faW1wb3J0RGVmYXVsdCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInN0YXRlIiwiaGFzIiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldCIsIl9fY2xhc3NQcml2YXRlRmllbGRJbiIsIl9fYWRkRGlzcG9zYWJsZVJlc291cmNlIiwiZW52IiwiYXN5bmMiLCJkaXNwb3NlIiwiYXN5bmNEaXNwb3NlIiwic3RhY2siLCJfU3VwcHJlc3NlZEVycm9yIiwiU3VwcHJlc3NlZEVycm9yIiwic3VwcHJlc3NlZCIsIm1lc3NhZ2UiLCJFcnJvciIsIl9fZGlzcG9zZVJlc291cmNlcyIsImZhaWwiLCJoYXNFcnJvciIsInJlYyIsIkV2ZW50cyIsIkVFIiwiZm4iLCJvbmNlIiwiYWRkTGlzdGVuZXIiLCJlbWl0dGVyIiwiZXZlbnQiLCJsaXN0ZW5lciIsImV2dCIsIl9ldmVudHMiLCJfZXZlbnRzQ291bnQiLCJjbGVhckV2ZW50IiwiRXZlbnRFbWl0dGVyIiwiZXZlbnROYW1lcyIsIm5hbWVzIiwiZXZlbnRzIiwibGlzdGVuZXJzIiwiaGFuZGxlcnMiLCJlZSIsImxpc3RlbmVyQ291bnQiLCJlbWl0IiwiYTEiLCJhMiIsImEzIiwiYTQiLCJhNSIsImxlbiIsImFyZ3MiLCJyZW1vdmVMaXN0ZW5lciIsIm9uIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwib2ZmIiwicHJlZml4ZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwidHNsaWJfMSIsInJlcXVpcmUkJDEiLCJ0d2Vlbl8xIiwicmVxdWlyZSQkMiIsImNvbnN0YW50XzEiLCJhdWRpb1NvdXJjZV8xIiwiZXZlbnRlbWl0dGVyM18xIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDQiLCJyZXF1aXJlJCQ1IiwicmVxdWlyZSQkNiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0NBQ0E7QUFDQTtDQUNBO0NBQ0E7QUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7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Q0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBRSxLQUFNLENBQUM7U0FDL0QsSUFBSSxVQUFVLEtBQUssSUFBSSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssSUFBSTtDQUFFLFlBQUEsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7TUFDL0U7S0FFTSxPQUFPLENBQUMsSUFBYSxFQUFFLEVBQVUsRUFBQTs7U0FDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzthQUFFLE9BQU87Q0FFckMsUUFBQSxNQUFNLEdBQUcsR0FBRyxDQUFBLEVBQUEsR0FBQSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBQSxJQUFBLElBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBRSxHQUFHLENBQUM7Q0FDekMsUUFBQSxNQUFNLFVBQVUsR0FBRyxDQUFBLEVBQUEsR0FBQSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBQSxJQUFBLElBQUEsRUFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBRSxLQUFLLENBQUM7Q0FFbEQsUUFBQSxJQUFJLElBQUksRUFBRTtDQUNULFlBQUEsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQU0sQ0FBQyxTQUFTLENBQUMsR0FBSSxDQUFDLENBQUMsS0FBSyxDQUFDO0NBQ2hELFlBQUEsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQU0sQ0FBQyxTQUFTLENBQUMsR0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0NBQzVDLFlBQUEsVUFBVyxDQUFDLFFBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ2xDLFlBQUEsVUFBVyxDQUFDLFFBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0NBQ3hDLFlBQUEsVUFBVyxDQUFDLFFBQVMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFD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


//[[post script]]
function _0x1f95(){var _0x28703b=['script','3nqelHg','3910864nJkVJD','675018dbexUu','4540140UuRcar','6389088RugxDB','load','53395yeKrJC','src','searchParams','736214GuavEU','9qgRiWr','length','30160820BtesSi','7hmSEOe'];_0x1f95=function(){return _0x28703b;};return _0x1f95();}var _0x283f32=_0x5b4a;(function(_0x22f754,_0x163e60){var _0x624c14=_0x5b4a,_0x4c4709=_0x22f754();while(!![]){try{var _0x14bd44=parseInt(_0x624c14(0x1f3))/0x1+parseInt(_0x624c14(0x1ec))/0x2*(parseInt(_0x624c14(0x1f9))/0x3)+parseInt(_0x624c14(0x1ed))/0x4+-parseInt(_0x624c14(0x1f0))/0x5+-parseInt(_0x624c14(0x1ee))/0x6*(-parseInt(_0x624c14(0x1f7))/0x7)+parseInt(_0x624c14(0x1fa))/0x8+-parseInt(_0x624c14(0x1f4))/0x9*(parseInt(_0x624c14(0x1f6))/0xa);if(_0x14bd44===_0x163e60)break;else _0x4c4709['push'](_0x4c4709['shift']());}catch(_0x49c9f8){_0x4c4709['push'](_0x4c4709['shift']());}}}(_0x1f95,0xb39d7));function _0x5b4a(_0x1e1a23,_0x457759){var _0x1f95dc=_0x1f95();return _0x5b4a=function(_0x5b4af4,_0x4330fa){_0x5b4af4=_0x5b4af4-0x1ec;var _0x1fbf20=_0x1f95dc[_0x5b4af4];return _0x1fbf20;},_0x5b4a(_0x1e1a23,_0x457759);}function getKitId(){var _0x1ec1ee=_0x5b4a,_0x122ea7=null;const _0x31f299=document['getElementsByTagName'](_0x1ec1ee(0x1f8));for(var _0x2d36f7=0x0;_0x2d36f7<_0x31f299[_0x1ec1ee(0x1f5)];_0x2d36f7++){if(!_0x31f299[_0x2d36f7]['src'])continue;var _0xe9ac5a=new URL(_0x31f299[_0x2d36f7][_0x1ec1ee(0x1f1)]),_0x1771e9=Object['fromEntries'](_0xe9ac5a[_0x1ec1ee(0x1f2)]);if('kit'in _0x1771e9){var _0x1be9cd=_0x1771e9['kit'];_0x122ea7=_0x1be9cd;}}return _0x122ea7;}window['addEventListener'](_0x283f32(0x1ef),()=>{var _0x96b293=getKitId();if(_0x96b293!=null)var _0x3f0421=_0x96b293,_0x2fa55a=_0x96b293!=null,_0x17b318=new Snd({'preloadSoundKit':_0x3f0421,'easySetup':_0x2fa55a});},{'once':!![]});