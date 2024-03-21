/*! For license information please see custom-ngsw-worker.js.LICENSE.txt */
!
function(e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n),
    r.l = !0,
    r.exports
  }
  n.m = e,
  n.c = t,
  n.d = function(e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    })
  },
  n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }),
    Object.defineProperty(e, "__esModule", {
      value: !0
    })
  },
  n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) n.d(i, r,
    function(t) {
      return e[t]
    }.bind(null, r));
    return i
  },
  n.n = function(e) {
    var t = e && e.__esModule ?
    function() {
      return e.
    default
    }:
    function() {
      return e
    };
    return n.d(t, "a", t),
    t
  },
  n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  },
  n.p = "",
  n(n.s = 9)
} ([function(e, t, n) {
  "use strict";
  n.r(t),
  n.d(t, "getStatusCode", (function() {
    return ae
  })),
  n.d(t, "getReasonPhrase", (function() {
    return oe
  })),
  n.d(t, "getStatusText", (function() {
    return le
  })),
  n.d(t, "StatusCodes", (function() {
    return ue
  })),
  n.d(t, "ReasonPhrases", (function() {
    return ce
  })),
  n.d(t, "ACCEPTED", (function() {
    return i
  })),
  n.d(t, "BAD_GATEWAY", (function() {
    return r
  })),
  n.d(t, "BAD_REQUEST", (function() {
    return s
  })),
  n.d(t, "CONFLICT", (function() {
    return o
  })),
  n.d(t, "CONTINUE", (function() {
    return a
  })),
  n.d(t, "CREATED", (function() {
    return u
  })),
  n.d(t, "EXPECTATION_FAILED", (function() {
    return c
  })),
  n.d(t, "FAILED_DEPENDENCY", (function() {
    return l
  })),
  n.d(t, "FORBIDDEN", (function() {
    return h
  })),
  n.d(t, "GATEWAY_TIMEOUT", (function() {
    return d
  })),
  n.d(t, "GONE", (function() {
    return f
  })),
  n.d(t, "HTTP_VERSION_NOT_SUPPORTED", (function() {
    return p
  })),
  n.d(t, "IM_A_TEAPOT", (function() {
    return E
  })),
  n.d(t, "INSUFFICIENT_SPACE_ON_RESOURCE", (function() {
    return v
  })),
  n.d(t, "INSUFFICIENT_STORAGE", (function() {
    return T
  })),
  n.d(t, "INTERNAL_SERVER_ERROR", (function() {
    return y
  })),
  n.d(t, "LENGTH_REQUIRED", (function() {
    return R
  })),
  n.d(t, "LOCKED", (function() {
    return O
  })),
  n.d(t, "METHOD_FAILURE", (function() {
    return _
  })),
  n.d(t, "METHOD_NOT_ALLOWED", (function() {
    return A
  })),
  n.d(t, "MOVED_PERMANENTLY", (function() {
    return g
  })),
  n.d(t, "MOVED_TEMPORARILY", (function() {
    return N
  })),
  n.d(t, "MULTI_STATUS", (function() {
    return m
  })),
  n.d(t, "MULTIPLE_CHOICES", (function() {
    return I
  })),
  n.d(t, "NETWORK_AUTHENTICATION_REQUIRED", (function() {
    return C
  })),
  n.d(t, "NO_CONTENT", (function() {
    return b
  })),
  n.d(t, "NON_AUTHORITATIVE_INFORMATION", (function() {
    return S
  })),
  n.d(t, "NOT_ACCEPTABLE", (function() {
    return w
  })),
  n.d(t, "NOT_FOUND", (function() {
    return D
  })),
  n.d(t, "NOT_IMPLEMENTED", (function() {
    return L
  })),
  n.d(t, "NOT_MODIFIED", (function() {
    return U
  })),
  n.d(t, "OK", (function() {
    return P
  })),
  n.d(t, "PARTIAL_CONTENT", (function() {
    return M
  })),
  n.d(t, "PAYMENT_REQUIRED", (function() {
    return F
  })),
  n.d(t, "PERMANENT_REDIRECT", (function() {
    return H
  })),
  n.d(t, "PRECONDITION_FAILED", (function() {
    return x
  })),
  n.d(t, "PRECONDITION_REQUIRED", (function() {
    return k
  })),
  n.d(t, "PROCESSING", (function() {
    return q
  })),
  n.d(t, "PROXY_AUTHENTICATION_REQUIRED", (function() {
    return B
  })),
  n.d(t, "REQUEST_HEADER_FIELDS_TOO_LARGE", (function() {
    return G
  })),
  n.d(t, "REQUEST_TIMEOUT", (function() {
    return V
  })),
  n.d(t, "REQUEST_TOO_LONG", (function() {
    return Q
  })),
  n.d(t, "REQUEST_URI_TOO_LONG", (function() {
    return $
  })),
  n.d(t, "REQUESTED_RANGE_NOT_SATISFIABLE", (function() {
    return W
  })),
  n.d(t, "RESET_CONTENT", (function() {
    return j
  })),
  n.d(t, "SEE_OTHER", (function() {
    return Y
  })),
  n.d(t, "SERVICE_UNAVAILABLE", (function() {
    return z
  })),
  n.d(t, "SWITCHING_PROTOCOLS", (function() {
    return K
  })),
  n.d(t, "TEMPORARY_REDIRECT", (function() {
    return X
  })),
  n.d(t, "TOO_MANY_REQUESTS", (function() {
    return Z
  })),
  n.d(t, "UNAUTHORIZED", (function() {
    return J
  })),
  n.d(t, "UNPROCESSABLE_ENTITY", (function() {
    return ee
  })),
  n.d(t, "UNSUPPORTED_MEDIA_TYPE", (function() {
    return te
  })),
  n.d(t, "USE_PROXY", (function() {
    return ne
  }));
  var i = 202,
  r = 502,
  s = 400,
  o = 409,
  a = 100,
  u = 201,
  c = 417,
  l = 424,
  h = 403,
  d = 504,
  f = 410,
  p = 505,
  E = 418,
  v = 419,
  T = 507,
  y = 500,
  R = 411,
  O = 423,
  _ = 420,
  A = 405,
  g = 301,
  N = 302,
  m = 207,
  I = 300,
  C = 511,
  b = 204,
  S = 203,
  w = 406,
  D = 404,
  L = 501,
  U = 304,
  P = 200,
  M = 206,
  F = 402,
  H = 308,
  x = 412,
  k = 428,
  q = 102,
  B = 407,
  G = 431,
  V = 408,
  Q = 413,
  $ = 414,
  W = 416,
  j = 205,
  Y = 303,
  z = 503,
  K = 101,
  X = 307,
  Z = 429,
  J = 401,
  ee = 422,
  te = 415,
  ne = 305,
  ie = {
    ACCEPTED: i,
    BAD_GATEWAY: r,
    BAD_REQUEST: s,
    CONFLICT: o,
    CONTINUE: a,
    CREATED: u,
    EXPECTATION_FAILED: c,
    FORBIDDEN: h,
    GATEWAY_TIMEOUT: d,
    GONE: f,
    HTTP_VERSION_NOT_SUPPORTED: p,
    IM_A_TEAPOT: E,
    INSUFFICIENT_SPACE_ON_RESOURCE: v,
    INSUFFICIENT_STORAGE: T,
    INTERNAL_SERVER_ERROR: y,
    LENGTH_REQUIRED: R,
    LOCKED: O,
    METHOD_FAILURE: _,
    METHOD_NOT_ALLOWED: A,
    MOVED_PERMANENTLY: g,
    MOVED_TEMPORARILY: N,
    MULTI_STATUS: m,
    MULTIPLE_CHOICES: I,
    NETWORK_AUTHENTICATION_REQUIRED: C,
    NO_CONTENT: b,
    NON_AUTHORITATIVE_INFORMATION: S,
    NOT_ACCEPTABLE: w,
    NOT_FOUND: D,
    NOT_IMPLEMENTED: L,
    NOT_MODIFIED: U,
    OK: P,
    PARTIAL_CONTENT: M,
    PAYMENT_REQUIRED: F,
    PERMANENT_REDIRECT: H,
    PRECONDITION_FAILED: x,
    PRECONDITION_REQUIRED: k,
    PROCESSING: q,
    PROXY_AUTHENTICATION_REQUIRED: B,
    REQUEST_HEADER_FIELDS_TOO_LARGE: G,
    REQUEST_TIMEOUT: V,
    REQUEST_TOO_LONG: Q,
    REQUEST_URI_TOO_LONG: $,
    REQUESTED_RANGE_NOT_SATISFIABLE: W,
    RESET_CONTENT: j,
    SEE_OTHER: Y,
    SERVICE_UNAVAILABLE: z,
    SWITCHING_PROTOCOLS: K,
    TEMPORARY_REDIRECT: X,
    TOO_MANY_REQUESTS: Z,
    UNAUTHORIZED: J,
    UNPROCESSABLE_ENTITY: ee,
    UNSUPPORTED_MEDIA_TYPE: te,
    USE_PROXY: ne
  },
  re = {
    202 : "Accepted",
    502 : "Bad Gateway",
    400 : "Bad Request",
    409 : "Conflict",
    100 : "Continue",
    201 : "Created",
    417 : "Expectation Failed",
    424 : "Failed Dependency",
    403 : "Forbidden",
    504 : "Gateway Timeout",
    410 : "Gone",
    505 : "HTTP Version Not Supported",
    418 : "I'm a teapot",
    419 : "Insufficient Space on Resource",
    507 : "Insufficient Storage",
    500 : "Internal Server Error",
    411 : "Length Required",
    423 : "Locked",
    420 : "Method Failure",
    405 : "Method Not Allowed",
    301 : "Moved Permanently",
    302 : "Moved Temporarily",
    207 : "Multi-Status",
    300 : "Multiple Choices",
    511 : "Network Authentication Required",
    204 : "No Content",
    203 : "Non Authoritative Information",
    406 : "Not Acceptable",
    404 : "Not Found",
    501 : "Not Implemented",
    304 : "Not Modified",
    200 : "OK",
    206 : "Partial Content",
    402 : "Payment Required",
    308 : "Permanent Redirect",
    412 : "Precondition Failed",
    428 : "Precondition Required",
    102 : "Processing",
    407 : "Proxy Authentication Required",
    431 : "Request Header Fields Too Large",
    408 : "Request Timeout",
    413 : "Request Entity Too Large",
    414 : "Request-URI Too Long",
    416 : "Requested Range Not Satisfiable",
    205 : "Reset Content",
    303 : "See Other",
    503 : "Service Unavailable",
    101 : "Switching Protocols",
    307 : "Temporary Redirect",
    429 : "Too Many Requests",
    401 : "Unauthorized",
    451 : "Unavailable For Legal Reasons",
    422 : "Unprocessable Entity",
    415 : "Unsupported Media Type",
    305 : "Use Proxy"
  },
  se = {
    Accepted: 202,
    "Bad Gateway": 502,
    "Bad Request": 400,
    Conflict: 409,
    Continue: 100,
    Created: 201,
    "Expectation Failed": 417,
    "Failed Dependency": 424,
    Forbidden: 403,
    "Gateway Timeout": 504,
    Gone: 410,
    "HTTP Version Not Supported": 505,
    "I'm a teapot": 418,
    "Insufficient Space on Resource": 419,
    "Insufficient Storage": 507,
    "Internal Server Error": 500,
    "Length Required": 411,
    Locked: 423,
    "Method Failure": 420,
    "Method Not Allowed": 405,
    "Moved Permanently": 301,
    "Moved Temporarily": 302,
    "Multi-Status": 207,
    "Multiple Choices": 300,
    "Network Authentication Required": 511,
    "No Content": 204,
    "Non Authoritative Information": 203,
    "Not Acceptable": 406,
    "Not Found": 404,
    "Not Implemented": 501,
    "Not Modified": 304,
    OK: 200,
    "Partial Content": 206,
    "Payment Required": 402,
    "Permanent Redirect": 308,
    "Precondition Failed": 412,
    "Precondition Required": 428,
    Processing: 102,
    "Proxy Authentication Required": 407,
    "Request Header Fields Too Large": 431,
    "Request Timeout": 408,
    "Request Entity Too Large": 413,
    "Request-URI Too Long": 414,
    "Requested Range Not Satisfiable": 416,
    "Reset Content": 205,
    "See Other": 303,
    "Service Unavailable": 503,
    "Switching Protocols": 101,
    "Temporary Redirect": 307,
    "Too Many Requests": 429,
    Unauthorized: 401,
    "Unavailable For Legal Reasons": 451,
    "Unprocessable Entity": 422,
    "Unsupported Media Type": 415,
    "Use Proxy": 305
  };
  function oe(e) {
    var t = re[e.toString()];
    if (!t) throw new Error("Status code does not exist: " + e);
    return t
  }
  function ae(e) {
    var t = se[e];
    if (!t) throw new Error("Reason phrase does not exist: " + e);
    return t
  }
  var ue, ce, le = oe; !
  function(e) {
    e[e.ACCEPTED = 202] = "ACCEPTED",
    e[e.BAD_GATEWAY = 502] = "BAD_GATEWAY",
    e[e.BAD_REQUEST = 400] = "BAD_REQUEST",
    e[e.CONFLICT = 409] = "CONFLICT",
    e[e.CONTINUE = 100] = "CONTINUE",
    e[e.CREATED = 201] = "CREATED",
    e[e.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED",
    e[e.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY",
    e[e.FORBIDDEN = 403] = "FORBIDDEN",
    e[e.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT",
    e[e.GONE = 410] = "GONE",
    e[e.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED",
    e[e.IM_A_TEAPOT = 418] = "IM_A_TEAPOT",
    e[e.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE",
    e[e.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE",
    e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR",
    e[e.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED",
    e[e.LOCKED = 423] = "LOCKED",
    e[e.METHOD_FAILURE = 420] = "METHOD_FAILURE",
    e[e.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED",
    e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY",
    e[e.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY",
    e[e.MULTI_STATUS = 207] = "MULTI_STATUS",
    e[e.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES",
    e[e.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED",
    e[e.NO_CONTENT = 204] = "NO_CONTENT",
    e[e.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION",
    e[e.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE",
    e[e.NOT_FOUND = 404] = "NOT_FOUND",
    e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED",
    e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED",
    e[e.OK = 200] = "OK",
    e[e.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT",
    e[e.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED",
    e[e.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT",
    e[e.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED",
    e[e.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED",
    e[e.PROCESSING = 102] = "PROCESSING",
    e[e.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED",
    e[e.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE",
    e[e.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT",
    e[e.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG",
    e[e.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG",
    e[e.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE",
    e[e.RESET_CONTENT = 205] = "RESET_CONTENT",
    e[e.SEE_OTHER = 303] = "SEE_OTHER",
    e[e.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE",
    e[e.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS",
    e[e.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT",
    e[e.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS",
    e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED",
    e[e.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS",
    e[e.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY",
    e[e.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE",
    e[e.USE_PROXY = 305] = "USE_PROXY"
  } (ue || (ue = {})),
  function(e) {
    e.ACCEPTED = "Accepted",
    e.BAD_GATEWAY = "Bad Gateway",
    e.BAD_REQUEST = "Bad Request",
    e.CONFLICT = "Conflict",
    e.CONTINUE = "Continue",
    e.CREATED = "Created",
    e.EXPECTATION_FAILED = "Expectation Failed",
    e.FAILED_DEPENDENCY = "Failed Dependency",
    e.FORBIDDEN = "Forbidden",
    e.GATEWAY_TIMEOUT = "Gateway Timeout",
    e.GONE = "Gone",
    e.HTTP_VERSION_NOT_SUPPORTED = "HTTP Version Not Supported",
    e.IM_A_TEAPOT = "I'm a teapot",
    e.INSUFFICIENT_SPACE_ON_RESOURCE = "Insufficient Space on Resource",
    e.INSUFFICIENT_STORAGE = "Insufficient Storage",
    e.INTERNAL_SERVER_ERROR = "Internal Server Error",
    e.LENGTH_REQUIRED = "Length Required",
    e.LOCKED = "Locked",
    e.METHOD_FAILURE = "Method Failure",
    e.METHOD_NOT_ALLOWED = "Method Not Allowed",
    e.MOVED_PERMANENTLY = "Moved Permanently",
    e.MOVED_TEMPORARILY = "Moved Temporarily",
    e.MULTI_STATUS = "Multi-Status",
    e.MULTIPLE_CHOICES = "Multiple Choices",
    e.NETWORK_AUTHENTICATION_REQUIRED = "Network Authentication Required",
    e.NO_CONTENT = "No Content",
    e.NON_AUTHORITATIVE_INFORMATION = "Non Authoritative Information",
    e.NOT_ACCEPTABLE = "Not Acceptable",
    e.NOT_FOUND = "Not Found",
    e.NOT_IMPLEMENTED = "Not Implemented",
    e.NOT_MODIFIED = "Not Modified",
    e.OK = "OK",
    e.PARTIAL_CONTENT = "Partial Content",
    e.PAYMENT_REQUIRED = "Payment Required",
    e.PERMANENT_REDIRECT = "Permanent Redirect",
    e.PRECONDITION_FAILED = "Precondition Failed",
    e.PRECONDITION_REQUIRED = "Precondition Required",
    e.PROCESSING = "Processing",
    e.PROXY_AUTHENTICATION_REQUIRED = "Proxy Authentication Required",
    e.REQUEST_HEADER_FIELDS_TOO_LARGE = "Request Header Fields Too Large",
    e.REQUEST_TIMEOUT = "Request Timeout",
    e.REQUEST_TOO_LONG = "Request Entity Too Large",
    e.REQUEST_URI_TOO_LONG = "Request-URI Too Long",
    e.REQUESTED_RANGE_NOT_SATISFIABLE = "Requested Range Not Satisfiable",
    e.RESET_CONTENT = "Reset Content",
    e.SEE_OTHER = "See Other",
    e.SERVICE_UNAVAILABLE = "Service Unavailable",
    e.SWITCHING_PROTOCOLS = "Switching Protocols",
    e.TEMPORARY_REDIRECT = "Temporary Redirect",
    e.TOO_MANY_REQUESTS = "Too Many Requests",
    e.UNAUTHORIZED = "Unauthorized",
    e.UNAVAILABLE_FOR_LEGAL_REASONS = "Unavailable For Legal Reasons",
    e.UNPROCESSABLE_ENTITY = "Unprocessable Entity",
    e.UNSUPPORTED_MEDIA_TYPE = "Unsupported Media Type",
    e.USE_PROXY = "Use Proxy"
  } (ce || (ce = {}));
  var he = function() {
    return (he = Object.assign ||
    function(e) {
      for (var t, n = 1,
      i = arguments.length; n < i; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e
    }).apply(this, arguments)
  };
  t.
default = he(he({},
  ie), {
    getStatusCode: ae,
    getStatusText: le
  })
},
function(e, t, n) {
  var i;
  void 0 === (i = function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.NAMED_PIPE_URL_PATH_PREFIX = t.IDBDOMException = t.SKIP_MANUAL_REHYDRATION_HEADER = t.PROMISE_TIMEOUT_LENGTH = t.DEFAULT_CACHE_CONTROL_HEADER = t.RANGE_HEADER_REGEXP = t.LOCAL_CACHE_URL_PATH_PREFIX = t.LOCAL_HANDLES_VERSION = t.LOCAL_HANDLES_NAME = t.LOCAL_CACHE_VERSION = t.LOCAL_CACHE_NAME = t.IDBLocalCacheStore = void 0; !
    function(e) {
      e.ASSETS_TABLE = "assets",
      e.HANDLES_TABLE = "handles"
    } (t.IDBLocalCacheStore || (t.IDBLocalCacheStore = {})),
    t.LOCAL_CACHE_NAME = "local-cache",
    t.LOCAL_CACHE_VERSION = 1,
    t.LOCAL_HANDLES_NAME = "local-handles",
    t.LOCAL_HANDLES_VERSION = 1,
    t.LOCAL_CACHE_URL_PATH_PREFIX = "/" + t.LOCAL_CACHE_NAME + "/",
    t.RANGE_HEADER_REGEXP = /^bytes=(?<fromByte>[\d]+)\-(?<toByte>[\d]+)?$/,
    t.DEFAULT_CACHE_CONTROL_HEADER = "public, immutable, max-age=31536000",
    t.PROMISE_TIMEOUT_LENGTH = 6e4,
    t.SKIP_MANUAL_REHYDRATION_HEADER = "X-Clipchamp-SkipManualRehydration",
    function(e) {
      e.AbortError = "AbortError",
      e.ConstraintError = "ConstraintError",
      e.DataCloneError = "DataCloneError",
      e.DataError = "DataError",
      e.InvalidAccessError = "InvalidAccessError",
      e.InvalidStateError = "InvalidStateError",
      e.NotFoundError = "NotFoundError",
      e.QuotaExceededError = "QuotaExceededError",
      e.SyntaxError = "SyntaxError",
      e.ReadOnlyError = "ReadOnlyError",
      e.TransactionInactiveError = "TransactionInactiveError",
      e.UnknownError = "UnknownError",
      e.VersionError = "VersionError"
    } (t.IDBDOMException || (t.IDBDOMException = {})),
    t.NAMED_PIPE_URL_PATH_PREFIX = "/named-pipe/"
  }.apply(t, [n, t])) || (e.exports = i)
},
function(e, t, n) {
  var i, r;
  i = [n, t, n(1), n(0)],
  void 0 === (r = function(e, t, n, i) {
    "use strict";
    var r, s;
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.idbErrorToStatusCode = t.serveValidByteRange = t.parseRangeHeader = t.cacheFileHandle = t.deleteCacheFileHandle = t.getCachedFileHandle = t.getOpenHandleDatabase = t.getOpenAssetDatabase = void 0;
    var o = {};
    function a(e, t, n, i) {
      return new Promise((function(r, s) {
        var o = self.indexedDB.open(e, t);
        o.onupgradeneeded = function(e) {
          return n(o, e)
        },
        o.onsuccess = function() {
          r(function(e, t) {
            return e.onclose = function(e) {
              console.warn("Database was unexpectedly closed, trashing it", e),
              t()
            },
            e.onerror = function(n) {
              console.warn("Transaction error has bubbled up to database, trashing it", n),
              e.close(),
              t()
            },
            e.onabort = function(n) {
              console.warn("Transaction abort has bubbled up to database, trashing it", n),
              e.close(),
              t()
            },
            e.onversionchange = function(n) {
              console.error("Database '" + e.name + "' new version(" + n.newVersion + ") opened in new tab, tashing it.", n),
              e.close(),
              t()
            },
            e
          } (o.result, i))
        },
        o.onerror = function(e) {
          console.error("Cannot open database", e),
          s(new Error("Cannot open database"))
        }
      }))
    }
    function u(e, t, r, s) {
      return new self.Response(e, {
        status: i.StatusCodes.PARTIAL_CONTENT,
        headers: {
          "Cache-Control": n.DEFAULT_CACHE_CONTROL_HEADER,
          "Accept-Ranges": "bytes",
          "Content-Range": "bytes " + t + "-" + r + "/" + s
        }
      })
    }
    t.getOpenAssetDatabase = function() {
      return r = r || a(n.LOCAL_CACHE_NAME, n.LOCAL_CACHE_VERSION, (function(e, t) {
        t.oldVersion < 1 && e.result.createObjectStore(n.IDBLocalCacheStore.ASSETS_TABLE, {
          keyPath: "permanentUrl"
        })
      }), (function() {
        return r = void 0
      }))
    },
    t.getOpenHandleDatabase = function() {
      return s = s || a(n.LOCAL_HANDLES_NAME, n.LOCAL_HANDLES_VERSION, (function(e, t) {
        t.oldVersion < 1 && e.result.createObjectStore(n.IDBLocalCacheStore.HANDLES_TABLE, {
          keyPath: "permanentUrl"
        })
      }), (function() {
        return s = void 0
      }))
    },
    t.getCachedFileHandle = function(e) {
      var t = o[e];
      if (t) {
        if (t.size > 0) return t;
        delete o[e]
      }
    },
    t.deleteCacheFileHandle = function(e) {
      delete o[e]
    },
    t.cacheFileHandle = function(e, t) {
      o[e] = t instanceof File ? new Blob([t], {
        type: t.type
      }) : t
    },
    t.parseRangeHeader = function(e) {
      var t, i, r, s, o = n.RANGE_HEADER_REGEXP.exec(e);
      return o ? {
        fromByte: parseInt(null !== (i = null === (t = o.groups) || void 0 === t ? void 0 : t.fromByte) && void 0 !== i ? i: ""),
        toByte: parseInt(null !== (s = null === (r = o.groups) || void 0 === r ? void 0 : r.toByte) && void 0 !== s ? s: "")
      }: null
    },
    t.serveValidByteRange = function(e, t, n) {
      if (Number.isNaN(n) && (n = e.size - 1), t > 0 || n < e.size - 1) {
        if (t < e.size) {
          var r = e.slice(t, n + 1, e.type || "application/octet-stream");
          return r.size,
          u(r, t, t + r.size - 1, e.size)
        }
        return new self.Response(null, {
          status: i.StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE
        })
      }
      return u(new Blob([e], {
        type: e.type
      }), 0, e.size - 1, e.size)
    },
    t.idbErrorToStatusCode = function(e) {
      switch (e) {
      case n.IDBDOMException.SyntaxError:
      case n.IDBDOMException.DataError:
        return i.StatusCodes.BAD_REQUEST;
      case n.IDBDOMException.NotFoundError:
        return i.StatusCodes.NOT_FOUND;
      case n.IDBDOMException.QuotaExceededError:
        return i.StatusCodes.INSUFFICIENT_STORAGE;
      default:
        return i.StatusCodes.SERVICE_UNAVAILABLE
      }
    }
  }.apply(t, i)) || (e.exports = r)
},
function(e, t, n) {
  var i;
  void 0 === (i = function(e, t) {
    "use strict";
    function n(e) {
      return e && "number" == typeof e.statusCode && (void 0 === e.responseHeaders || e.responseHeaders instanceof Map)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.isQueryFeatureResponse = t.isFileHandleResponse = t.isLocalResponse = t.ResponseHeaderKey = t.RequestHeaderKey = t.MessageChannelOperation = void 0,
    function(e) {
      e.HydrationLookup = "lookup",
      e.FileSystemPermission = "fs-permission",
      e.QueryFeatureFlag = "query-feature"
    } (t.MessageChannelOperation || (t.MessageChannelOperation = {})),
    function(e) {
      e.RANGE = "Range"
    } (t.RequestHeaderKey || (t.RequestHeaderKey = {})),
    function(e) {
      e.CONTENT_RANGE = "Content-Range",
      e.CONTENT_LENGTH = "Content-Length",
      e.CONTENT_TYPE = "Content-Type",
      e.CACHE_CONTROL = "Cache-Control",
      e.ACCEPT_RANGES = "Accept-Ranges",
      e.CLIPCHAMP_CHUNK_ID = "X-Clipchamp-Chunk",
      e.CLIPCHAMP_BLOB_SIZE = "X-Clipchamp-Size",
      e.LAST_MODIFIED = "Last-Modified"
    } (t.ResponseHeaderKey || (t.ResponseHeaderKey = {})),
    t.isLocalResponse = function(e) {
      return e && (null === e.responseContent || e.responseContent instanceof Blob) && n(e)
    },
    t.isFileHandleResponse = function(e) {
      return e && "string" == typeof e.permission && n(e)
    },
    t.isQueryFeatureResponse = function(e) {
      return e && "string" == typeof e.feature && "boolean" == typeof e.enabled
    }
  }.apply(t, [n, t])) || (e.exports = i)
},
function(e, t, n) {
  var i, r = this && this.__awaiter ||
  function(e, t, n, i) {
    return new(n || (n = Promise))((function(r, s) {
      function o(e) {
        try {
          u(i.next(e))
        } catch(e) {
          s(e)
        }
      }
      function a(e) {
        try {
          u(i.
          throw (e))
        } catch(e) {
          s(e)
        }
      }
      function u(e) {
        var t;
        e.done ? r(e.value) : (t = e.value, t instanceof n ? t: new n((function(e) {
          e(t)
        }))).then(o, a)
      }
      u((i = i.apply(e, t || [])).next())
    }))
  },
  s = this && this.__generator ||
  function(e, t) {
    var n, i, r, s, o = {
      label: 0,
      sent: function() {
        if (1 & r[0]) throw r[1];
        return r[1]
      },
      trys: [],
      ops: []
    };
    return s = {
      next: a(0),
      throw: a(1),
      return: a(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
      return this
    }),
    s;
    function a(s) {
      return function(a) {
        return function(s) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o;) try {
            if (n = 1, i && (r = 2 & s[0] ? i.
            return: s[0] ? i.
            throw || ((r = i.
            return) && r.call(i), 0) : i.next) && !(r = r.call(i, s[1])).done) return r;
            switch (i = 0, r && (s = [2 & s[0], r.value]), s[0]) {
            case 0:
            case 1:
              r = s;
              break;
            case 4:
              return o.label++,
              {
                value: s[1],
                done: !1
              };
            case 5:
              o.label++,
              i = s[1],
              s = [0];
              continue;
            case 7:
              s = o.ops.pop(),
              o.trys.pop();
              continue;
            default:
              if (! (r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                o = 0;
                continue
              }
              if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                o.label = s[1];
                break
              }
              if (6 === s[0] && o.label < r[1]) {
                o.label = r[1],
                r = s;
                break
              }
              if (r && o.label < r[2]) {
                o.label = r[2],
                o.ops.push(s);
                break
              }
              r[2] && o.ops.pop(),
              o.trys.pop();
              continue
            }
            s = t.call(e, o)
          } catch(e) {
            s = [6, e],
            i = 0
          } finally {
            n = r = 0
          }
          if (5 & s[0]) throw s[1];
          return {
            value: s[0] ? s[1] : void 0,
            done: !0
          }
        } ([s, a])
      }
    }
  };
  void 0 === (i = function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.sendMessage = void 0,
    t.sendMessage = function(e, t) {
      return r(this, void 0, void 0, (function() {
        var n, i;
        return s(this, (function(r) {
          switch (r.label) {
          case 0:
            return [4, self.clients.get(e)];
          case 1:
            return n = r.sent(),
            i = new self.MessageChannel,
            [2, new Promise((function(e) {
              i.port1.onmessage = function(n) {
                n.data && n.data.operation === t.operation && e(n)
              },
              n && n.postMessage(t, [i.port2])
            }))]
          }
        }))
      }))
    }
  }.apply(t, [n, t])) || (e.exports = i)
},
function(e, t, n) {
  var i, r, s = this && this.__awaiter ||
  function(e, t, n, i) {
    return new(n || (n = Promise))((function(r, s) {
      function o(e) {
        try {
          u(i.next(e))
        } catch(e) {
          s(e)
        }
      }
      function a(e) {
        try {
          u(i.
          throw (e))
        } catch(e) {
          s(e)
        }
      }
      function u(e) {
        var t;
        e.done ? r(e.value) : (t = e.value, t instanceof n ? t: new n((function(e) {
          e(t)
        }))).then(o, a)
      }
      u((i = i.apply(e, t || [])).next())
    }))
  },
  o = this && this.__generator ||
  function(e, t) {
    var n, i, r, s, o = {
      label: 0,
      sent: function() {
        if (1 & r[0]) throw r[1];
        return r[1]
      },
      trys: [],
      ops: []
    };
    return s = {
      next: a(0),
      throw: a(1),
      return: a(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
      return this
    }),
    s;
    function a(s) {
      return function(a) {
        return function(s) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o;) try {
            if (n = 1, i && (r = 2 & s[0] ? i.
            return: s[0] ? i.
            throw || ((r = i.
            return) && r.call(i), 0) : i.next) && !(r = r.call(i, s[1])).done) return r;
            switch (i = 0, r && (s = [2 & s[0], r.value]), s[0]) {
            case 0:
            case 1:
              r = s;
              break;
            case 4:
              return o.label++,
              {
                value: s[1],
                done: !1
              };
            case 5:
              o.label++,
              i = s[1],
              s = [0];
              continue;
            case 7:
              s = o.ops.pop(),
              o.trys.pop();
              continue;
            default:
              if (! (r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                o = 0;
                continue
              }
              if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                o.label = s[1];
                break
              }
              if (6 === s[0] && o.label < r[1]) {
                o.label = r[1],
                r = s;
                break
              }
              if (r && o.label < r[2]) {
                o.label = r[2],
                o.ops.push(s);
                break
              }
              r[2] && o.ops.pop(),
              o.trys.pop();
              continue
            }
            s = t.call(e, o)
          } catch(e) {
            s = [6, e],
            i = 0
          } finally {
            n = r = 0
          }
          if (5 & s[0]) throw s[1];
          return {
            value: s[0] ? s[1] : void 0,
            done: !0
          }
        } ([s, a])
      }
    }
  };
  i = [n, t, n(1), n(2), n(6), n(7)],
  void 0 === (r = function(e, t, n, i, r, a) {
    "use strict";
    function u(e, t, i, u) {
      return void 0 === u && (u = n.PROMISE_TIMEOUT_LENGTH),
      s(this, void 0, void 0, (function() {
        return o(this, (function(s) {
          return n.LOCAL_CACHE_NAME,
          [2, a.createTimedPromise((function(s, o) {
            var a = e.transaction([t], "readonly"),
            u = a.objectStore(t).get(i);
            u.onsuccess = function() {
              u.result ? s(u.result) : o(new Error("Unable to find '" + t + "' store object for " + i))
            },
            a.onerror = function() {
              console.error("Error performing database lookup for " + i + " in '" + t + "' database ObjectStore"),
              o(new r.IDBTransactionError("Error performing '" + t + "' database get for " + i, a.error.name))
            },
            a.onabort = function() {
              var e;
              o(new r.IDBTransactionError("Abort performing '" + t + "' database get for " + i, null !== (e = a.error.name) && void 0 !== e ? e: n.IDBDOMException.AbortError))
            }
          }), u, "Timeout performing database lookup")]
        }))
      }))
    }
    function c(e, t, i, u) {
      return void 0 === u && (u = n.PROMISE_TIMEOUT_LENGTH),
      s(this, void 0, void 0, (function() {
        return o(this, (function(s) {
          return n.LOCAL_CACHE_NAME,
          [2, a.createTimedPromise((function(s, o) {
            var a = e.transaction([t], "readwrite"),
            u = a.objectStore(t).add(i);
            u.onsuccess = function() {
              u.result && "string" == typeof u.result ? (u.result, s(u.result)) : (console.error("Unexpected store key " + u.result + " in '" + t + "' database store"), o(new Error("An error occurred determining the added store key")))
            },
            a.onerror = function() {
              console.error("Error performing database add for " + i.permanentUrl + " in '" + t + "' database ObjectStore"),
              o(new r.IDBTransactionError("Error performing '" + t + "' database add for " + i.permanentUrl, a.error.name))
            },
            a.onabort = function() {
              var e;
              o(new r.IDBTransactionError("Abort performing '" + t + "' database add for " + i.permanentUrl, null !== (e = a.error.name) && void 0 !== e ? e: n.IDBDOMException.AbortError))
            }
          }), u, "Timeout performing database add")]
        }))
      }))
    }
    function l(e, t, i, u) {
      return void 0 === u && (u = n.PROMISE_TIMEOUT_LENGTH),
      s(this, void 0, void 0, (function() {
        return o(this, (function(s) {
          return n.LOCAL_CACHE_NAME,
          [2, a.createTimedPromise((function(s, o) {
            var a = e.transaction([t], "readwrite", {
              durability: "relaxed"
            });
            a.objectStore(t).delete(i),
            a.oncomplete = function() {
              s()
            },
            a.onerror = function() {
              console.error("Error performing database delete for " + i + " in '" + t + "' database store", a.error.name),
              o(new r.IDBTransactionError("Error performing '" + t + "' database delete for " + i, a.error.name))
            },
            a.onabort = function() {
              var e;
              o(new r.IDBTransactionError("Aborted performing '" + t + "' database delete for " + i, null !== (e = a.error.name) && void 0 !== e ? e: n.IDBDOMException.AbortError))
            }
          }), u, "Timeout performing database delete")]
        }))
      }))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.deleteHandleObject = t.deleteAssetObject = t.addAssetObject = t.retrieveHandleObject = t.retrieveAssetObject = void 0,
    t.retrieveAssetObject = function(e) {
      return s(this, void 0, void 0, (function() {
        var t, r, s;
        return o(this, (function(o) {
          switch (o.label) {
          case 0:
            return (t = i.getCachedFileHandle(e)) ? [2, {
              permanentUrl: e,
              blob: t
            }] : (s = u, [4, i.getOpenAssetDatabase()]);
          case 1:
            return [4, s.apply(void 0, [o.sent(), n.IDBLocalCacheStore.ASSETS_TABLE, e])];
          case 2:
            return r = o.sent(),
            i.cacheFileHandle(e, r.blob),
            [2, r]
          }
        }))
      }))
    },
    t.retrieveHandleObject = function(e) {
      return s(this, void 0, void 0, (function() {
        var t;
        return o(this, (function(r) {
          switch (r.label) {
          case 0:
            return t = u,
            [4, i.getOpenHandleDatabase()];
          case 1:
            return [4, t.apply(void 0, [r.sent(), n.IDBLocalCacheStore.HANDLES_TABLE, e])];
          case 2:
            return [2, r.sent()]
          }
        }))
      }))
    },
    t.addAssetObject = function(e) {
      return s(this, void 0, void 0, (function() {
        var t;
        return o(this, (function(r) {
          switch (r.label) {
          case 0:
            return t = c,
            [4, i.getOpenAssetDatabase()];
          case 1:
            return [4, t.apply(void 0, [r.sent(), n.IDBLocalCacheStore.ASSETS_TABLE, e])];
          case 2:
            return [2, r.sent()]
          }
        }))
      }))
    },
    t.deleteAssetObject = function(e) {
      return s(this, void 0, void 0, (function() {
        var t;
        return o(this, (function(r) {
          switch (r.label) {
          case 0:
            return t = l,
            [4, i.getOpenAssetDatabase()];
          case 1:
            return [4, t.apply(void 0, [r.sent(), n.IDBLocalCacheStore.ASSETS_TABLE, e])];
          case 2:
            return r.sent(),
            [2, i.deleteCacheFileHandle(e)]
          }
        }))
      }))
    },
    t.deleteHandleObject = function(e) {
      return s(this, void 0, void 0, (function() {
        var t;
        return o(this, (function(r) {
          switch (r.label) {
          case 0:
            return t = l,
            [4, i.getOpenHandleDatabase()];
          case 1:
            return [4, t.apply(void 0, [r.sent(), n.IDBLocalCacheStore.HANDLES_TABLE, e])];
          case 2:
            return [2, r.sent()]
          }
        }))
      }))
    }
  }.apply(t, i)) || (e.exports = r)
},
function(e, t, n) {
  var i, r, s, o = this && this.__extends || (s = function(e, t) {
    return (s = Object.setPrototypeOf || {
      __proto__: []
    }
    instanceof Array &&
    function(e, t) {
      e.__proto__ = t
    } ||
    function(e, t) {
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
    })(e, t)
  },
  function(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    function n() {
      this.constructor = e
    }
    s(e, t),
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  });
  i = [n, t, n(2)],
  void 0 === (r = function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.IDBTransactionError = void 0;
    var i = function(e) {
      function t(t, n) {
        var i = e.call(this, t) || this;
        return i.name = n,
        i
      }
      return o(t, e),
      t.prototype.asFetchResponse = function() {
        return new self.Response(null, {
          status: n.idbErrorToStatusCode(this.name),
          statusText: this.message
        })
      },
      t
    } (Error);
    t.IDBTransactionError = i
  }.apply(t, i)) || (e.exports = r)
},
function(e, t, n) {
  var i;
  void 0 === (i = function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.createTimedPromise = void 0,
    t.createTimedPromise = function(e, t, n) {
      var i, r = new Promise((function(e, r) {
        i = self.setTimeout((function() {
          r(new Error(n || "Promise timed out after " + t + " millis"))
        }), t)
      }));
      return Promise.race([new Promise(e), r]).
      finally((function() {
        i && self.clearTimeout(i)
      }))
    }
  }.apply(t, [n, t])) || (e.exports = i)
},
function(e, t, n) {
  var i, r;
  i = [n, t, n(1), n(0), n(10), n(14)],
  void 0 === (r = function(e, t, n, i, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.
  default = function() {
      var e, t;
      e = "fetch",
      t = function(e) {
        try {
          var t = new URL(e.request.url);
          if (0 === t.pathname.indexOf(n.LOCAL_CACHE_URL_PATH_PREFIX)) switch (e.request.method, e.clientId, e.request.url, e.request.method) {
          case "GET":
            e.respondWith(r.serveGetRequest(e));
            break;
          case "DELETE":
            e.respondWith(r.serveDeleteRequest(e));
            break;
          default:
            e.respondWith(Promise.resolve(new self.Response(null, {
              status: i.StatusCodes.METHOD_NOT_ALLOWED,
              statusText: "invalid method"
            })))
          } else if (t.pathname.startsWith(n.NAMED_PIPE_URL_PATH_PREFIX)) {
            var o = t.search.indexOf("nonblock") < 0,
            a = decodeURIComponent(t.pathname.substring(n.NAMED_PIPE_URL_PATH_PREFIX.length));
            switch (e.request.method) {
            case "GET":
              s.readFile(a, e, o);
              break;
            case "PUT":
              s.writeFile(a, e);
              break;
            case "DELETE":
              s.closeFile(a, e);
              break;
            default:
              e.respondWith(Promise.resolve(new self.Response(null, {
                status: i.StatusCodes.METHOD_NOT_ALLOWED,
                statusText: "invalid method"
              })))
            }
          }
        } catch(e) {
          console.error("ServiceWorker Error: " + e)
        }
      },
      self.addEventListener(e, t)
    }
  }.apply(t, i)) || (e.exports = r)
},
function(e, t, n) {
  "use strict";
  n.r(t);
  var i = n(8),
  r = n.n(i);
  self.addEventListener("install", (function() {
    self.skipWaiting()
  })),
  r.a(),
  n(17)
},
function(e, t, n) {
  var i, r, s = this && this.__awaiter ||
  function(e, t, n, i) {
    return new(n || (n = Promise))((function(r, s) {
      function o(e) {
        try {
          u(i.next(e))
        } catch(e) {
          s(e)
        }
      }
      function a(e) {
        try {
          u(i.
          throw (e))
        } catch(e) {
          s(e)
        }
      }
      function u(e) {
        var t;
        e.done ? r(e.value) : (t = e.value, t instanceof n ? t: new n((function(e) {
          e(t)
        }))).then(o, a)
      }
      u((i = i.apply(e, t || [])).next())
    }))
  },
  o = this && this.__generator ||
  function(e, t) {
    var n, i, r, s, o = {
      label: 0,
      sent: function() {
        if (1 & r[0]) throw r[1];
        return r[1]
      },
      trys: [],
      ops: []
    };
    return s = {
      next: a(0),
      throw: a(1),
      return: a(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
      return this
    }),
    s;
    function a(s) {
      return function(a) {
        return function(s) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o;) try {
            if (n = 1, i && (r = 2 & s[0] ? i.
            return: s[0] ? i.
            throw || ((r = i.
            return) && r.call(i), 0) : i.next) && !(r = r.call(i, s[1])).done) return r;
            switch (i = 0, r && (s = [2 & s[0], r.value]), s[0]) {
            case 0:
            case 1:
              r = s;
              break;
            case 4:
              return o.label++,
              {
                value: s[1],
                done: !1
              };
            case 5:
              o.label++,
              i = s[1],
              s = [0];
              continue;
            case 7:
              s = o.ops.pop(),
              o.trys.pop();
              continue;
            default:
              if (! (r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                o = 0;
                continue
              }
              if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                o.label = s[1];
                break
              }
              if (6 === s[0] && o.label < r[1]) {
                o.label = r[1],
                r = s;
                break
              }
              if (r && o.label < r[2]) {
                o.label = r[2],
                o.ops.push(s);
                break
              }
              r[2] && o.ops.pop(),
              o.trys.pop();
              continue
            }
            s = t.call(e, o)
          } catch(e) {
            s = [6, e],
            i = 0
          } finally {
            n = r = 0
          }
          if (5 & s[0]) throw s[1];
          return {
            value: s[0] ? s[1] : void 0,
            done: !0
          }
        } ([s, a])
      }
    }
  };
  i = [n, t, n(11), n(13), n(5), n(6), n(0)],
  void 0 === (r = function(e, t, n, i, r, a, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.serveDeleteRequest = t.serveGetRequest = void 0,
    t.serveGetRequest = function e(t) {
      return s(this, void 0, void 0, (function() {
        var r;
        return o(this, (function(s) {
          switch (s.label) {
          case 0:
            return s.trys.push([0, 2, , 11]),
            [4, n.serveAssetCacheResponse(t)];
          case 1:
            return [2, s.sent()];
          case 2:
            s.sent(),
            s.label = 3;
          case 3:
            return s.trys.push([3, 5, , 10]),
            [4, n.serveHandleCacheResponse(t)];
          case 4:
            return [2, s.sent()];
          case 5:
            s.sent(),
            s.label = 6;
          case 6:
            return s.trys.push([6, 8, , 9]),
            [4, i.serveRequest(t, e)];
          case 7:
            return [2, s.sent()];
          case 8:
            return r = s.sent(),
            [2, (o = t.request.url, a = r, console.warn("Permanently failed to serve resource " + o, a), new self.Response(null, {
              status: u.StatusCodes.GONE,
              statusText: "failed to rehydrate"
            }))];
          case 9:
            return [3, 10];
          case 10:
            return [3, 11];
          case 11:
            return [2]
          }
          var o, a
        }))
      }))
    }, t.serveDeleteRequest = function(e) {
      return s(this, void 0, void 0, (function() {
        var t;
        return o(this, (function(n) {
          switch (n.label) {
          case 0:
            return n.trys.push([0, 2, , 3]),
            [4, r.deleteAssetObject(e.request.url)];
          case 1:
            return n.sent(),
            [2, new self.Response(null, {
              status: u.StatusCodes.OK
            })];
          case 2:
            return t = n.sent(),
            console.error("An error occurred removing " + e.request.url + " from the cache", t),
            t instanceof a.IDBTransactionError ? [2, t.asFetchResponse()] : [2, new self.Response(null, {
              status: u.StatusCodes.SERVICE_UNAVAILABLE,
              statusText: t.message
            })];
          case 3:
            return [2]
          }
        }))
      }))
    }
  }.apply(t, i)) || (e.exports = r)
},
function(e, t, n) {
  var i, r, s = this && this.__awaiter ||
  function(e, t, n, i) {
    return new(n || (n = Promise))((function(r, s) {
      function o(e) {
        try {
          u(i.next(e))
        } catch(e) {
          s(e)
        }
      }
      function a(e) {
        try {
          u(i.
          throw (e))
        } catch(e) {
          s(e)
        }
      }
      function u(e) {
        var t;
        e.done ? r(e.value) : (t = e.value, t instanceof n ? t: new n((function(e) {
          e(t)
        }))).then(o, a)
      }
      u((i = i.apply(e, t || [])).next())
    }))
  },
  o = this && this.__generator ||
  function(e, t) {
    var n, i, r, s, o = {
      label: 0,
      sent: function() {
        if (1 & r[0]) throw r[1];
        return r[1]
      },
      trys: [],
      ops: []
    };
    return s = {
      next: a(0),
      throw: a(1),
      return: a(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
      return this
    }),
    s;
    function a(s) {
      return function(a) {
        return function(s) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o;) try {
            if (n = 1, i && (r = 2 & s[0] ? i.
            return: s[0] ? i.
            throw || ((r = i.
            return) && r.call(i), 0) : i.next) && !(r = r.call(i, s[1])).done) return r;
            switch (i = 0, r && (s = [2 & s[0], r.value]), s[0]) {
            case 0:
            case 1:
              r = s;
              break;
            case 4:
              return o.label++,
              {
                value: s[1],
                done: !1
              };
            case 5:
              o.label++,
              i = s[1],
              s = [0];
              continue;
            case 7:
              s = o.ops.pop(),
              o.trys.pop();
              continue;
            default:
              if (! (r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                o = 0;
                continue
              }
              if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                o.label = s[1];
                break
              }
              if (6 === s[0] && o.label < r[1]) {
                o.label = r[1],
                r = s;
                break
              }
              if (r && o.label < r[2]) {
                o.label = r[2],
                o.ops.push(s);
                break
              }
              r[2] && o.ops.pop(),
              o.trys.pop();
              continue
            }
            s = t.call(e, o)
          } catch(e) {
            s = [6, e],
            i = 0
          } finally {
            n = r = 0
          }
          if (5 & s[0]) throw s[1];
          return {
            value: s[0] ? s[1] : void 0,
            done: !0
          }
        } ([s, a])
      }
    }
  };
  i = [n, t, n(1), n(5), n(2), n(3), n(4), n(0), n(12)],
  void 0 === (r = function(e, t, n, i, r, a, u, c, l) {
    "use strict";
    function h(e, t) {
      var i = e.request.headers.get("Range");
      if (i) {
        var s = r.parseRangeHeader(i);
        if (s) return r.serveValidByteRange(t, s.fromByte, s.toByte)
      }
      return new self.Response(new Blob([t], {
        type: t.type
      }), {
        status: c.StatusCodes.OK,
        headers: {
          "Cache-Control": n.DEFAULT_CACHE_CONTROL_HEADER,
          "Accept-Ranges": "bytes"
        }
      })
    }
    function d(e, t) {
      return s(this, void 0, void 0, (function() {
        var n, r, s;
        return o(this, (function(o) {
          switch (o.label) {
          case 0:
            return [4, u.sendMessage(e.clientId, {
              operation: a.MessageChannelOperation.FileSystemPermission,
              request: {
                permanentUrl: e.request.url,
                handle: t.handle
              }
            })];
          case 1:
            if (! (n = o.sent()).data || !a.isFileHandleResponse(n.data.response)) return [3, 6];
            switch (r = n.data.response, r.statusCode) {
            case c.StatusCodes.ACCEPTED:
              return [3, 2]
            }
            return [3, 4];
          case 2:
            return [4, t.handle.getFile()];
          case 3:
            if (s = o.sent(), t.fileSize === s.size) return [2, h(e, s)];
            throw new Error("Resolved file handle doesn't match original cached media");
          case 4:
            return r.permission,
            [4, i.deleteHandleObject(e.request.url)];
          case 5:
            o.sent(),
            o.label = 6;
          case 6:
            throw new Error("Failed to re-hydrate from FileSystem handle")
          }
        }))
      }))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.serveHandleCacheResponse = t.serveAssetCacheResponse = void 0,
    t.serveAssetCacheResponse = function(e) {
      return s(this, void 0, void 0, (function() {
        var t;
        return o(this, (function(n) {
          switch (n.label) {
          case 0:
            return e.request.url,
            [4, i.retrieveAssetObject(e.request.url)];
          case 1:
            return t = n.sent(),
            e.request.url,
            [2, h(e, t.blob)]
          }
        }))
      }))
    },
    t.serveHandleCacheResponse = function(e) {
      return s(this, void 0, void 0, (function() {
        var t, n, r;
        return o(this, (function(s) {
          switch (s.label) {
          case 0:
            return [4, l.queryFeatureFlagEnabled(e.clientId, "iet__fs_handle_rehydration")];
          case 1:
            return s.sent() ? [4, i.retrieveHandleObject(e.request.url)] : [3, 10];
          case 2:
            return [4, (t = s.sent()).handle.queryPermission({
              mode: "read"
            })];
          case 3:
            switch (n = s.sent(), n) {
            case "granted":
              return [3, 4];
            case "prompt":
              return [3, 6]
            }
            return [3, 8];
          case 4:
            return [4, t.handle.getFile()];
          case 5:
            if (r = s.sent(), t.fileSize === r.size) return [2, h(e, r)];
            throw new Error("Resolved file handle doesn't match original cached media");
          case 6:
            return [4, d(e, t)];
          case 7:
            return [2, s.sent()];
          case 8:
            return [4, i.deleteHandleObject(e.request.url)];
          case 9:
            throw s.sent(),
            new Error("Failed to re-hydrate from FileSystem handle");
          case 10:
            throw new Error("Skipped file handle re-hydration, feature not enabled")
          }
        }))
      }))
    }
  }.apply(t, i)) || (e.exports = r)
},
function(e, t, n) {
  var i, r, s = this && this.__awaiter ||
  function(e, t, n, i) {
    return new(n || (n = Promise))((function(r, s) {
      function o(e) {
        try {
          u(i.next(e))
        } catch(e) {
          s(e)
        }
      }
      function a(e) {
        try {
          u(i.
          throw (e))
        } catch(e) {
          s(e)
        }
      }
      function u(e) {
        var t;
        e.done ? r(e.value) : (t = e.value, t instanceof n ? t: new n((function(e) {
          e(t)
        }))).then(o, a)
      }
      u((i = i.apply(e, t || [])).next())
    }))
  },
  o = this && this.__generator ||
  function(e, t) {
    var n, i, r, s, o = {
      label: 0,
      sent: function() {
        if (1 & r[0]) throw r[1];
        return r[1]
      },
      trys: [],
      ops: []
    };
    return s = {
      next: a(0),
      throw: a(1),
      return: a(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
      return this
    }),
    s;
    function a(s) {
      return function(a) {
        return function(s) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o;) try {
            if (n = 1, i && (r = 2 & s[0] ? i.
            return: s[0] ? i.
            throw || ((r = i.
            return) && r.call(i), 0) : i.next) && !(r = r.call(i, s[1])).done) return r;
            switch (i = 0, r && (s = [2 & s[0], r.value]), s[0]) {
            case 0:
            case 1:
              r = s;
              break;
            case 4:
              return o.label++,
              {
                value: s[1],
                done: !1
              };
            case 5:
              o.label++,
              i = s[1],
              s = [0];
              continue;
            case 7:
              s = o.ops.pop(),
              o.trys.pop();
              continue;
            default:
              if (! (r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                o = 0;
                continue
              }
              if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                o.label = s[1];
                break
              }
              if (6 === s[0] && o.label < r[1]) {
                o.label = r[1],
                r = s;
                break
              }
              if (r && o.label < r[2]) {
                o.label = r[2],
                o.ops.push(s);
                break
              }
              r[2] && o.ops.pop(),
              o.trys.pop();
              continue
            }
            s = t.call(e, o)
          } catch(e) {
            s = [6, e],
            i = 0
          } finally {
            n = r = 0
          }
          if (5 & s[0]) throw s[1];
          return {
            value: s[0] ? s[1] : void 0,
            done: !0
          }
        } ([s, a])
      }
    }
  };
  i = [n, t, n(3), n(4), n(7)],
  void 0 === (r = function(e, t, n, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.queryFeatureFlagEnabled = void 0,
    t.queryFeatureFlagEnabled = function(e, t) {
      return s(this, void 0, void 0, (function() {
        var a, u = this;
        return o(this, (function(c) {
          switch (c.label) {
          case 0:
            return c.trys.push([0, 2, , 3]),
            [4, r.createTimedPromise((function(r, a) {
              return s(u, void 0, void 0, (function() {
                var s;
                return o(this, (function(o) {
                  switch (o.label) {
                  case 0:
                    return [4, i.sendMessage(e, {
                      operation: n.MessageChannelOperation.QueryFeatureFlag,
                      request: {
                        feature: t
                      }
                    })];
                  case 1:
                    return (s = o.sent()).data && n.isQueryFeatureResponse(s.data.response) && s.data.response.feature === t && r(s.data.response.enabled),
                    a(new Error("Invalid QueryFeatureResponse value or object structure")),
                    [2]
                  }
                }))
              }))
            }), 2e3)];
          case 1:
            return [2, c.sent()];
          case 2:
            return a = c.sent(),
            console.warn(a.message),
            [2, !1];
          case 3:
            return [2]
          }
        }))
      }))
    }
  }.apply(t, i)) || (e.exports = r)
},
function(e, t, n) {
  var i, r, s = this && this.__awaiter ||
  function(e, t, n, i) {
    return new(n || (n = Promise))((function(r, s) {
      function o(e) {
        try {
          u(i.next(e))
        } catch(e) {
          s(e)
        }
      }
      function a(e) {
        try {
          u(i.
          throw (e))
        } catch(e) {
          s(e)
        }
      }
      function u(e) {
        var t;
        e.done ? r(e.value) : (t = e.value, t instanceof n ? t: new n((function(e) {
          e(t)
        }))).then(o, a)
      }
      u((i = i.apply(e, t || [])).next())
    }))
  },
  o = this && this.__generator ||
  function(e, t) {
    var n, i, r, s, o = {
      label: 0,
      sent: function() {
        if (1 & r[0]) throw r[1];
        return r[1]
      },
      trys: [],
      ops: []
    };
    return s = {
      next: a(0),
      throw: a(1),
      return: a(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
      return this
    }),
    s;
    function a(s) {
      return function(a) {
        return function(s) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o;) try {
            if (n = 1, i && (r = 2 & s[0] ? i.
            return: s[0] ? i.
            throw || ((r = i.
            return) && r.call(i), 0) : i.next) && !(r = r.call(i, s[1])).done) return r;
            switch (i = 0, r && (s = [2 & s[0], r.value]), s[0]) {
            case 0:
            case 1:
              r = s;
              break;
            case 4:
              return o.label++,
              {
                value: s[1],
                done: !1
              };
            case 5:
              o.label++,
              i = s[1],
              s = [0];
              continue;
            case 7:
              s = o.ops.pop(),
              o.trys.pop();
              continue;
            default:
              if (! (r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                o = 0;
                continue
              }
              if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                o.label = s[1];
                break
              }
              if (6 === s[0] && o.label < r[1]) {
                o.label = r[1],
                r = s;
                break
              }
              if (r && o.label < r[2]) {
                o.label = r[2],
                o.ops.push(s);
                break
              }
              r[2] && o.ops.pop(),
              o.trys.pop();
              continue
            }
            s = t.call(e, o)
          } catch(e) {
            s = [6, e],
            i = 0
          } finally {
            n = r = 0
          }
          if (5 & s[0]) throw s[1];
          return {
            value: s[0] ? s[1] : void 0,
            done: !0
          }
        } ([s, a])
      }
    }
  };
  i = [n, t, n(1), n(4), n(3), n(0)],
  void 0 === (r = function(e, t, n, i, r, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.serveRequest = void 0,
    t.serveRequest = function(e, t) {
      var u;
      return s(this, void 0, void 0, (function() {
        var s, c;
        return o(this, (function(o) {
          switch (o.label) {
          case 0:
            return e.request.url,
            [4, i.sendMessage(e.clientId, {
              operation: r.MessageChannelOperation.HydrationLookup,
              request: {
                permanentUrl: e.request.url,
                skipManualRehydration: e.request.headers.has(n.SKIP_MANUAL_REHYDRATION_HEADER),
                requestHeaders: e.request.headers.has("Range") ? new Map([["Range", e.request.headers.get("Range")]]) : new Map
              }
            })];
          case 1:
            if ((s = o.sent()).data && r.isLocalResponse(s.data.response)) return (c = s.data.response).statusCode === a.StatusCodes.ACCEPTED ? [2, t(e)] : [2, new self.Response(c.responseContent, {
              status: c.statusCode,
              headers: Array.from(null !== (u = c.responseHeaders) && void 0 !== u ? u: new Map)
            })];
            throw console.warn("Client " + e.clientId + " permanently failed to re-hydrate resource " + e.request.url),
            new Error("Failed to re-hydrate resource")
          }
        }))
      }))
    }
  }.apply(t, i)) || (e.exports = r)
},
function(e, t, n) {
  var i, r;
  i = [n, t, n(15)],
  void 0 === (r = function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.closeFile = t.writeFile = t.readFile = void 0,
    t.readFile = function(e, t, i) {
      void 0 === i && (i = !0);
      var r = n.FileQueue.lookup(e, t);
      t.respondWith(r.read(i))
    },
    t.writeFile = function(e, t) {
      var i = n.FileQueue.lookup(e, t);
      t.respondWith(i.write(t.request))
    },
    t.closeFile = function(e, t) {
      var i = n.FileQueue.lookup(e, t);
      t.respondWith(i.close())
    }
  }.apply(t, i)) || (e.exports = r)
},
function(e, t, n) {
  var i, r, s = this && this.__awaiter ||
  function(e, t, n, i) {
    return new(n || (n = Promise))((function(r, s) {
      function o(e) {
        try {
          u(i.next(e))
        } catch(e) {
          s(e)
        }
      }
      function a(e) {
        try {
          u(i.
          throw (e))
        } catch(e) {
          s(e)
        }
      }
      function u(e) {
        var t;
        e.done ? r(e.value) : (t = e.value, t instanceof n ? t: new n((function(e) {
          e(t)
        }))).then(o, a)
      }
      u((i = i.apply(e, t || [])).next())
    }))
  },
  o = this && this.__generator ||
  function(e, t) {
    var n, i, r, s, o = {
      label: 0,
      sent: function() {
        if (1 & r[0]) throw r[1];
        return r[1]
      },
      trys: [],
      ops: []
    };
    return s = {
      next: a(0),
      throw: a(1),
      return: a(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
      return this
    }),
    s;
    function a(s) {
      return function(a) {
        return function(s) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o;) try {
            if (n = 1, i && (r = 2 & s[0] ? i.
            return: s[0] ? i.
            throw || ((r = i.
            return) && r.call(i), 0) : i.next) && !(r = r.call(i, s[1])).done) return r;
            switch (i = 0, r && (s = [2 & s[0], r.value]), s[0]) {
            case 0:
            case 1:
              r = s;
              break;
            case 4:
              return o.label++,
              {
                value: s[1],
                done: !1
              };
            case 5:
              o.label++,
              i = s[1],
              s = [0];
              continue;
            case 7:
              s = o.ops.pop(),
              o.trys.pop();
              continue;
            default:
              if (! (r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                o = 0;
                continue
              }
              if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                o.label = s[1];
                break
              }
              if (6 === s[0] && o.label < r[1]) {
                o.label = r[1],
                r = s;
                break
              }
              if (r && o.label < r[2]) {
                o.label = r[2],
                o.ops.push(s);
                break
              }
              r[2] && o.ops.pop(),
              o.trys.pop();
              continue
            }
            s = t.call(e, o)
          } catch(e) {
            s = [6, e],
            i = 0
          } finally {
            n = r = 0
          }
          if (5 & s[0]) throw s[1];
          return {
            value: s[0] ? s[1] : void 0,
            done: !0
          }
        } ([s, a])
      }
    }
  };
  i = [n, t, n(0), n(16)],
  void 0 === (r = function(e, t, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.FileQueue = void 0;
    var r = {},
    a = function() {
      function e(e) {
        this.fileName = e,
        this.chunks = [],
        this.resident = new i.RevertedPromise,
        this.fileOpen = !0
      }
      return e.prototype.createReadResponse = function(e) {
        return void 0 === e ? new Response(null, {
          status: n.StatusCodes.NOT_FOUND
        }) : new Response(e.body, {
          status: n.StatusCodes.OK
        })
      },
      e.prototype.write = function(e) {
        return s(this, void 0, void 0, (function() {
          return o(this, (function(t) {
            return this.enqueueWriteRequest(e),
            this.blockedReader && (this.blockedReader.resolve(this.createReadResponse(this.dequeueWriteRequest())), this.blockedReader = void 0),
            this.chunks.length > 10 ? (this.blockedWriter = new i.RevertedPromise, [2, this.blockedWriter.promise]) : [2, new Response(null, {
              status: n.StatusCodes.OK
            })]
          }))
        }))
      },
      e.prototype.read = function(e) {
        return s(this, void 0, void 0, (function() {
          var t;
          return o(this, (function(r) {
            return (t = this.dequeueWriteRequest()) ? (this.blockedWriter && (this.blockedWriter.resolve(new Response(null, {
              status: n.StatusCodes.OK
            })), this.blockedWriter = void 0), [2, this.createReadResponse(t)]) : this.fileOpen ? e ? (this.blockedReader = new i.RevertedPromise, [2, this.blockedReader.promise]) : [2, new Response(null, {
              status: n.StatusCodes.NOT_FOUND
            })] : (this.terminateQueue(), [2, new Response(null, {
              status: n.StatusCodes.GONE
            })])
          }))
        }))
      },
      e.prototype.close = function() {
        return s(this, void 0, void 0, (function() {
          return o(this, (function(e) {
            return this.fileOpen = !1,
            this.blockedReader && (this.blockedReader.resolve(new Response(null, {
              status: n.StatusCodes.GONE
            })), this.blockedReader = void 0, this.terminateQueue()),
            [2, new Response(null, {
              status: n.StatusCodes.OK
            })]
          }))
        }))
      },
      e.prototype.dequeueWriteRequest = function() {
        return this.chunks.shift()
      },
      e.prototype.enqueueWriteRequest = function(e) {
        this.chunks.push(e)
      },
      e.prototype.terminateQueue = function() {
        this.resident.resolve(),
        delete r[this.fileName]
      },
      e.lookup = function(t, n) {
        if (t in r) return r[t];
        var i = new e(t);
        return r[t] = i,
        n.waitUntil(i.resident.promise),
        i
      },
      e
    } ();
    t.FileQueue = a
  }.apply(t, i)) || (e.exports = r)
},
function(e, t, n) {
  var i;
  void 0 === (i = function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
    t.RevertedPromise = void 0;
    var n = function() {
      function e() {
        var e = this;
        this.state = {
          stage: "pending"
        },
        this.promise = new Promise((function(t, n) {
          switch (e.state.stage) {
          case "resolved":
            t(e.state.result);
            break;
          case "rejected":
            n(e.state.error);
            break;
          default:
            e.state = {
              stage: "ready",
              resolve: t,
              reject: n
            }
          }
        }))
      }
      return Object.defineProperty(e.prototype, "finished", {
        get: function() {
          switch (this.state.stage) {
          case "resolved":
          case "rejected":
            return ! 0;
          default:
            return ! 1
          }
        },
        enumerable: !1,
        configurable: !0
      }),
      e.prototype.resolve = function(e) {
        "ready" === this.state.stage && this.state.resolve(e),
        this.state = {
          stage: "resolved",
          result: e
        }
      },
      e.prototype.reject = function(e) {
        "ready" === this.state.stage && this.state.reject(e),
        this.state = {
          stage: "rejected",
          error: e
        }
      },
      e
    } ();
    t.RevertedPromise = n
  }.apply(t, [n, t])) || (e.exports = i)
},
function(e, t) { !
  function() {
    "use strict";
    class e {
      constructor(e, t) {
        this.table = e,
        this.key = t
      }
    }
    class t {
      constructor(e, t, n, i) {
        this.table = e,
        this.cache = t,
        this.adapter = n,
        this.cacheQueryOptions = i
      }
      request(e) {
        return this.adapter.newRequest("/" + e)
      }
      delete(e) {
        return this.cache.delete(this.request(e), this.cacheQueryOptions)
      }
      keys() {
        return this.cache.keys().then(e = >e.map(e = >e.url.substr(1)))
      }
      read(t) {
        return this.cache.match(this.request(t), this.cacheQueryOptions).then(n = >void 0 === n ? Promise.reject(new e(this.table, t)) : n.json())
      }
      write(e, t) {
        return this.cache.put(this.request(e), this.adapter.newResponse(JSON.stringify(t)))
      }
    }
    function n(e, t, n, i) {
      return new(n || (n = Promise))((function(r, s) {
        function o(e) {
          try {
            u(i.next(e))
          } catch(e) {
            s(e)
          }
        }
        function a(e) {
          try {
            u(i.
            throw (e))
          } catch(e) {
            s(e)
          }
        }
        function u(e) {
          var t;
          e.done ? r(e.value) : (t = e.value, t instanceof n ? t: new n((function(e) {
            e(t)
          }))).then(o, a)
        }
        u((i = i.apply(e, t || [])).next())
      }))
    }
    var i = function(e) {
      return e[e.NOT_CACHED = 0] = "NOT_CACHED",
      e[e.CACHED_BUT_UNUSED = 1] = "CACHED_BUT_UNUSED",
      e[e.CACHED = 2] = "CACHED",
      e
    } ({});
    class r extends Error {
      constructor() {
        super(...arguments),
        this.isCritical = !0
      }
    }
    function s(e) {
      return e instanceof Error ? `$ {
        e.message
      }\n$ {
        e.stack
      }`: "" + e
    }
    class o extends r {
      constructor() {
        super(...arguments),
        this.isUnrecoverableState = !0
      }
    }
    function a(e) {
      const t = e;
      return c(function(e, t) {
        const n = e.length + 3 >>> 2,
        i = [];
        for (let r = 0; r < n; r++) i[r] = E(e, 4 * r, t);
        return i
      } (t, d.Big), 8 * t.length)
    }
    function u(e) {
      return c(function(e, t) {
        const n = e.byteLength + 3 >>> 2,
        i = [],
        r = new Uint8Array(e);
        for (let e = 0; e < n; e++) i[e] = E(r, 4 * e, t);
        return i
      } (e, d.Big), 8 * e.byteLength)
    }
    function c(e, t) {
      const n = [];
      let[i, r, s, o, a] = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      e[t >> 5] |= 128 << 24 - t % 32,
      e[15 + (t + 64 >> 9 << 4)] = t;
      for (let t = 0; t < e.length; t += 16) {
        const[u, c, d, p, E] = [i, r, s, o, a];
        for (let u = 0; u < 80; u++) {
          n[u] = u < 16 ? e[t + u] : h(n[u - 3] ^ n[u - 8] ^ n[u - 14] ^ n[u - 16], 1);
          const[c, d] = f(u, r, s, o),
          p = [h(i, 5), c, a, d, n[u]].reduce(l); [a, o, s, r, i] = [o, s, h(r, 30), i, p]
        } [i, r, s, o, a] = [l(i, u), l(r, c), l(s, d), l(o, p), l(a, E)]
      }
      return function(e) {
        let t = "";
        for (let n = 0; n < e.length; n++) {
          const i = p(e, n);
          t += (i >>> 4).toString(16) + (15 & i).toString(16)
        }
        return t.toLowerCase()
      } (function(e) {
        return e.reduce((e, t) = >e +
        function(e) {
          let t = "";
          for (let n = 0; n < 4; n++) t += String.fromCharCode(e >>> 8 * (3 - n) & 255);
          return t
        } (t), "")
      } ([i, r, s, o, a]))
    }
    function l(e, t) {
      return function(e, t) {
        const n = (65535 & e) + (65535 & t),
        i = (e >>> 16) + (t >>> 16) + (n >>> 16);
        return [i >>> 16, i << 16 | 65535 & n]
      } (e, t)[1]
    }
    function h(e, t) {
      return e << t | e >>> 32 - t
    }
    var d = function(e) {
      return e[e.Little = 0] = "Little",
      e[e.Big = 1] = "Big",
      e
    } ({});
    function f(e, t, n, i) {
      return e < 20 ? [t & n | ~t & i, 1518500249] : e < 40 ? [t ^ n ^ i, 1859775393] : e < 60 ? [t & n | t & i | n & i, 2400959708] : [t ^ n ^ i, 3395469782]
    }
    function p(e, t) {
      return "string" == typeof e ? t >= e.length ? 0 : 255 & e.charCodeAt(t) : t >= e.byteLength ? 0 : 255 & e[t]
    }
    function E(e, t, n) {
      let i = 0;
      if (n === d.Big) for (let n = 0; n < 4; n++) i += p(e, t + n) << 24 - 8 * n;
      else for (let n = 0; n < 4; n++) i += p(e, t + n) << 8 * n;
      return i
    }
    class v {
      constructor(e, t, n, i, r, s, o) {
        this.scope = e,
        this.adapter = t,
        this.idle = n,
        this.config = i,
        this.hashes = r,
        this.db = s,
        this.prefix = o,
        this.inFlightRequests = new Map,
        this.urls = [],
        this.patterns = [],
        this.name = i.name,
        this.urls = i.urls.map(e = >t.normalizeUrl(e)),
        this.patterns = i.patterns.map(e = >new RegExp(e)),
        this.cache = e.caches.open(`$ {
          this.prefix
        }: $ {
          i.name
        }: cache`),
        this.metadata = this.db.open(`$ {
          this.prefix
        }: $ {
          i.name
        }: meta`, i.cacheQueryOptions)
      }
      cacheStatus(e) {
        return n(this, void 0, void 0, (function * () {
          const t = yield this.cache,
          n = yield this.metadata,
          r = this.adapter.newRequest(e);
          if (void 0 === (yield t.match(r, this.config.cacheQueryOptions))) return i.NOT_CACHED;
          try {
            if (! (yield n.read(r.url)).used) return i.CACHED_BUT_UNUSED
          } catch(e) {}
          return i.CACHED
        }))
      }
      cleanup() {
        return n(this, void 0, void 0, (function * () {
          yield this.scope.caches.delete(`$ {
            this.prefix
          }: $ {
            this.config.name
          }: cache`),
          yield this.db.delete(`$ {
            this.prefix
          }: $ {
            this.config.name
          }: meta`)
        }))
      }
      handleFetch(e, t) {
        return n(this, void 0, void 0, (function * () {
          const t = this.adapter.normalizeUrl(e.url);
          if ( - 1 !== this.urls.indexOf(t) || this.patterns.some(e = >e.test(t))) {
            const i = yield this.cache,
            r = yield i.match(e, this.config.cacheQueryOptions);
            if (void 0 !== r) return this.hashes.has(t) || (yield this.needToRevalidate(e, r)) && this.idle.schedule(`revalidate($ {
              this.prefix
            },
            $ {
              this.config.name
            }) : $ {
              e.url
            }`, () = >n(this, void 0, void 0, (function * () {
              yield this.fetchAndCacheOnce(e)
            }))),
            r;
            return (yield this.fetchAndCacheOnce(this.adapter.newRequest(e.url))).clone()
          }
          return null
        }))
      }
      needToRevalidate(e, t) {
        return n(this, void 0, void 0, (function * () {
          if (t.headers.has("Cache-Control")) {
            const n = t.headers.get("Cache-Control").split(",").map(e = >e.trim()).map(e = >e.split("="));
            n.forEach(e = >e[0] = e[0].toLowerCase());
            const i = n.find(e = >"max-age" === e[0]),
            r = i ? i[1] : void 0;
            if (!r) return ! 0;
            try {
              const n = 1e3 * parseInt(r);
              let i;
              try {
                const t = yield this.metadata;
                i = (yield t.read(e.url)).ts
              } catch(e) {
                const n = t.headers.get("Date");
                if (null === n) return ! 0;
                i = Date.parse(n)
              }
              const s = this.adapter.time - i;
              return s < 0 || s > n
            } catch(e) {
              return ! 0
            }
          } else {
            if (!t.headers.has("Expires")) return ! 0; {
              const e = t.headers.get("Expires");
              try {
                return this.adapter.time > Date.parse(e)
              } catch(e) {
                return ! 0
              }
            }
          }
        }))
      }
      fetchFromCacheOnly(e) {
        return n(this, void 0, void 0, (function * () {
          const t = yield this.cache,
          n = yield this.metadata,
          i = this.adapter.newRequest(e),
          r = yield t.match(i, this.config.cacheQueryOptions);
          if (void 0 === r) return null;
          let s = void 0;
          try {
            s = yield n.read(i.url)
          } catch(e) {}
          return {
            response: r,
            metadata: s
          }
        }))
      }
      unhashedResources() {
        return n(this, void 0, void 0, (function * () {
          const e = yield this.cache;
          return (yield e.keys()).map(e = >this.adapter.normalizeUrl(e.url)).filter(e = >!this.hashes.has(e))
        }))
      }
      fetchAndCacheOnce(e, t = !0) {
        return n(this, void 0, void 0, (function * () {
          if (this.inFlightRequests.has(e.url)) return this.inFlightRequests.get(e.url);
          const n = this.fetchFromNetwork(e);
          this.inFlightRequests.set(e.url, n);
          try {
            const i = yield n;
            if (!i.ok) throw new Error(`Response not Ok(fetchAndCacheOnce) : request
            for $ {
              e.url
            }
            returned response $ {
              i.status
            }
            $ {
              i.statusText
            }`);
            try {
              const n = yield this.scope.caches.open(`$ {
                this.prefix
              }: $ {
                this.config.name
              }: cache`);
              if (yield n.put(e, i.clone()), !this.hashes.has(this.adapter.normalizeUrl(e.url))) {
                const n = {
                  ts: this.adapter.time,
                  used: t
                },
                i = yield this.metadata;
                yield i.write(e.url, n)
              }
              return i
            } catch(t) {
              throw new r(`Failed to update the caches
              for request to '${e.url}' (fetchAndCacheOnce) : $ {
                s(t)
              }`)
            }
          } finally {
            this.inFlightRequests.delete(e.url)
          }
        }))
      }
      fetchFromNetwork(e, t = 3) {
        return n(this, void 0, void 0, (function * () {
          const n = yield this.cacheBustedFetchFromNetwork(e);
          if (n.redirected && n.url) {
            if (0 === t) throw new r("Response hit redirect limit (fetchFromNetwork): request redirected too many times, next is " + n.url);
            return this.fetchFromNetwork(this.adapter.newRequest(n.url), t - 1)
          }
          return n
        }))
      }
      cacheBustedFetchFromNetwork(e) {
        return n(this, void 0, void 0, (function * () {
          const t = this.adapter.normalizeUrl(e.url);
          if (this.hashes.has(t)) {
            const n = this.hashes.get(t);
            let i = yield this.safeFetch(e),
            s = i.ok;
            if (s) {
              s = u(yield i.clone().arrayBuffer()) !== n
            }
            if (s) {
              const t = this.adapter.newRequest(this.cacheBust(e.url));
              if (i = yield this.safeFetch(t), i.ok) {
                const t = u(yield i.clone().arrayBuffer());
                if (n !== t) throw new r(`Hash mismatch(cacheBustedFetchFromNetwork) : $ {
                  e.url
                }: expected $ {
                  n
                },
                got $ {
                  t
                } (after cache busting)`)
              }
            }
            if (!i.ok && 404 === i.status) throw new o(`Failed to retrieve hashed resource from the server. (AssetGroup: $ {
              this.config.name
            } | URL: $ {
              t
            })`);
            return i
          }
          return this.safeFetch(e)
        }))
      }
      maybeUpdate(e, t, i) {
        return n(this, void 0, void 0, (function * () {
          const n = this.adapter.normalizeUrl(t.url),
          r = yield this.metadata;
          if (this.hashes.has(n)) {
            const s = this.hashes.get(n),
            o = yield e.lookupResourceWithHash(n, s);
            if (null !== o) return yield i.put(t, o),
            yield r.write(t.url, {
              ts: this.adapter.time,
              used: !1
            }),
            !0
          }
          return ! 1
        }))
      }
      cacheBust(e) {
        return e + ( - 1 === e.indexOf("?") ? "?": "&") + "ngsw-cache-bust=" + Math.random()
      }
      safeFetch(e) {
        return n(this, void 0, void 0, (function * () {
          try {
            return yield this.scope.fetch(e)
          } catch(e) {
            return this.adapter.newResponse("", {
              status: 504,
              statusText: "Gateway Timeout"
            })
          }
        }))
      }
    }
    class T extends v {
      initializeFully(e) {
        return n(this, void 0, void 0, (function * () {
          const t = yield this.cache;
          if (yield this.urls.reduce((i, r) = >n(this, void 0, void 0, (function * () {
            yield i;
            const n = this.adapter.newRequest(r);
            void 0 !== (yield t.match(n, this.config.cacheQueryOptions)) || void 0 !== e && (yield this.maybeUpdate(e, n, t)) || (yield this.fetchAndCacheOnce(n, !1))
          })), Promise.resolve()), void 0 !== e) {
            const i = yield this.metadata;
            yield(yield e.previouslyCachedResources()).filter(e = >-1 !== this.urls.indexOf(e) || this.patterns.some(t = >t.test(e))).reduce((r, s) = >n(this, void 0, void 0, (function * () {
              yield r;
              const n = this.adapter.newRequest(s);
              if (void 0 !== (yield t.match(n, this.config.cacheQueryOptions))) return;
              const o = yield e.lookupResourceWithoutHash(s);
              null !== o && void 0 !== o.metadata && (yield t.put(n, o.response), yield i.write(n.url, Object.assign(Object.assign({},
              o.metadata), {
                used: !1
              })))
            })), Promise.resolve())
          }
        }))
      }
    }
    class y extends v {
      initializeFully(e) {
        return n(this, void 0, void 0, (function * () {
          if (void 0 === e) return;
          const t = yield this.cache;
          yield this.urls.reduce((r, s) = >n(this, void 0, void 0, (function * () {
            yield r;
            const n = this.adapter.newRequest(s);
            if (void 0 !== (yield t.match(n, this.config.cacheQueryOptions))) return;
            const o = yield this.maybeUpdate(e, n, t);
            if ("prefetch" === this.config.updateMode && !o) {
              if ((yield e.recentCacheStatus(s)) !== i.CACHED) return;
              yield this.fetchAndCacheOnce(n, !1)
            }
          })), Promise.resolve())
        }))
      }
    }
    class R {
      constructor(e) {
        void 0 === e && (e = {
          head: null,
          tail: null,
          map: {},
          count: 0
        }),
        this.state = e
      }
      get size() {
        return this.state.count
      }
      pop() {
        if (null === this.state.tail) return null;
        const e = this.state.tail;
        return this.remove(e),
        e
      }
      remove(e) {
        const t = this.state.map[e];
        if (void 0 === t) return ! 1;
        if (this.state.head === e) {
          if (null === t.next) return this.state.head = null,
          this.state.tail = null,
          this.state.map = {},
          this.state.count = 0,
          !0;
          const n = this.state.map[t.next];
          return n.previous = null,
          this.state.head = n.url,
          t.next = null,
          delete this.state.map[e],
          this.state.count--,
          !0
        }
        return this.state.map[t.previous].next = t.next,
        null !== t.next ? this.state.map[t.next].previous = t.previous: this.state.tail = t.previous,
        t.next = null,
        t.previous = null,
        delete this.state.map[e],
        this.state.count--,
        !0
      }
      accessed(e) {
        if (this.state.head === e) return;
        const t = this.state.map[e] || {
          url: e,
          next: null,
          previous: null
        };
        void 0 !== this.state.map[e] && this.remove(e),
        null !== this.state.head && (this.state.map[this.state.head].previous = e),
        t.next = this.state.head,
        this.state.head = e,
        null === this.state.tail && (this.state.tail = e),
        this.state.map[e] = t,
        this.state.count++
      }
    }
    class O {
      constructor(e, t, n, i, r, s) {
        this.scope = e,
        this.adapter = t,
        this.config = n,
        this.db = i,
        this.debugHandler = r,
        this.prefix = s,
        this._lru = null,
        this.patterns = this.config.patterns.map(e = >new RegExp(e)),
        this.cache = this.scope.caches.open(`$ {
          this.prefix
        }: dynamic: $ {
          this.config.name
        }: cache`),
        this.lruTable = this.db.open(`$ {
          this.prefix
        }: dynamic: $ {
          this.config.name
        }: lru`, this.config.cacheQueryOptions),
        this.ageTable = this.db.open(`$ {
          this.prefix
        }: dynamic: $ {
          this.config.name
        }: age`, this.config.cacheQueryOptions)
      }
      lru() {
        return n(this, void 0, void 0, (function * () {
          if (null === this._lru) {
            const e = yield this.lruTable;
            try {
              this._lru = new R(yield e.read("lru"))
            } catch(e) {
              this._lru = new R
            }
          }
          return this._lru
        }))
      }
      syncLru() {
        return n(this, void 0, void 0, (function * () {
          if (null === this._lru) return;
          const e = yield this.lruTable;
          try {
            return e.write("lru", this._lru.state)
          } catch(e) {
            this.debugHandler.log(e, `DataGroup($ {
              this.config.name
            }@$ {
              this.config.version
            }).syncLru()`)
          }
        }))
      }
      handleFetch(e, t) {
        return n(this, void 0, void 0, (function * () {
          if (!this.patterns.some(t = >t.test(e.url))) return null;
          const n = yield this.lru();
          switch (e.method) {
          case "OPTIONS":
            return null;
          case "GET":
          case "HEAD":
            switch (this.config.strategy) {
            case "freshness":
              return this.handleFetchWithFreshness(e, t, n);
            case "performance":
              return this.handleFetchWithPerformance(e, t, n);
            default:
              throw new Error("Unknown strategy: " + this.config.strategy)
            }
          default:
            return n.remove(e.url) && (yield this.clearCacheForUrl(e.url)),
            yield this.syncLru(),
            this.safeFetch(e)
          }
        }))
      }
      handleFetchWithPerformance(e, t, i) {
        return n(this, void 0, void 0, (function * () {
          let n = null;
          const r = yield this.loadFromCache(e, i);
          if (null !== r && (n = r.res, void 0 !== this.config.refreshAheadMs && r.age >= this.config.refreshAheadMs && t.waitUntil(this.safeCacheResponse(e, this.safeFetch(e), i))), null !== n) return n;
          const[s, o] = this.networkFetchWithTimeout(e);
          return n = yield s,
          void 0 === n ? (n = this.adapter.newResponse(null, {
            status: 504,
            statusText: "Gateway Timeout"
          }), t.waitUntil(this.safeCacheResponse(e, o, i))) : yield this.safeCacheResponse(e, n, i),
          n
        }))
      }
      handleFetchWithFreshness(e, t, i) {
        return n(this, void 0, void 0, (function * () {
          const[n, r] = this.networkFetchWithTimeout(e);
          let s;
          try {
            s = yield n
          } catch(e) {
            s = void 0
          }
          if (void 0 === s) {
            t.waitUntil(this.safeCacheResponse(e, r, i, !0));
            const n = yield this.loadFromCache(e, i);
            s = null !== n ? n.res: null
          } else yield this.safeCacheResponse(e, s, i, !0);
          return null !== s ? s: r
        }))
      }
      networkFetchWithTimeout(e) {
        if (void 0 !== this.config.timeoutMs) {
          const t = this.scope.fetch(e),
          i = (() = >n(this, void 0, void 0, (function * () {
            try {
              return yield t
            } catch(e) {
              return this.adapter.newResponse(null, {
                status: 504,
                statusText: "Gateway Timeout"
              })
            }
          })))(),
          r = (() = >n(this, void 0, void 0, (function * () {
            try {
              return yield t
            } catch(e) {
              return
            }
          })))(),
          s = this.adapter.timeout(this.config.timeoutMs);
          return [Promise.race([r, s]), i]
        } {
          const t = this.safeFetch(e);
          return [t, t]
        }
      }
      safeCacheResponse(e, t, i, r) {
        return n(this, void 0, void 0, (function * () {
          try {
            const n = yield t;
            try {
              yield this.cacheResponse(e, n, i, r)
            } catch(t) {
              this.debugHandler.log(t, `DataGroup($ {
                this.config.name
              }@$ {
                this.config.version
              }).safeCacheResponse($ {
                e.url
              },
              status: $ {
                n.status
              })`)
            }
          } catch(e) {}
        }))
      }
      loadFromCache(e, t) {
        return n(this, void 0, void 0, (function * () {
          const n = yield this.cache;
          let i = yield n.match(e, this.config.cacheQueryOptions);
          if (void 0 !== i) {
            try {
              const n = yield this.ageTable,
              r = this.adapter.time - (yield n.read(e.url)).age;
              if (r <= this.config.maxAge) return t.accessed(e.url),
              {
                res: i,
                age: r
              }
            } catch(e) {}
            t.remove(e.url),
            yield this.clearCacheForUrl(e.url),
            yield this.syncLru()
          }
          return null
        }))
      }
      cacheResponse(e, t, i, r = !1) {
        return n(this, void 0, void 0, (function * () {
          if (! (t.ok || r && "opaque" === t.type)) return;
          if (i.size >= this.config.maxSize) {
            const e = i.pop();
            null !== e && (yield this.clearCacheForUrl(e))
          }
          i.accessed(e.url),
          yield(yield this.cache).put(e, t.clone());
          const n = yield this.ageTable;
          yield n.write(e.url, {
            age: this.adapter.time
          }),
          yield this.syncLru()
        }))
      }
      cleanup() {
        return n(this, void 0, void 0, (function * () {
          yield Promise.all([this.scope.caches.delete(`$ {
            this.prefix
          }: dynamic: $ {
            this.config.name
          }: cache`), this.db.delete(`$ {
            this.prefix
          }: dynamic: $ {
            this.config.name
          }: age`), this.db.delete(`$ {
            this.prefix
          }: dynamic: $ {
            this.config.name
          }: lru`)])
        }))
      }
      clearCacheForUrl(e) {
        return n(this, void 0, void 0, (function * () {
          const[t, n] = yield Promise.all([this.cache, this.ageTable]);
          yield Promise.all([t.delete(this.adapter.newRequest(e, {
            method: "GET"
          }), this.config.cacheQueryOptions), t.delete(this.adapter.newRequest(e, {
            method: "HEAD"
          }), this.config.cacheQueryOptions), n.delete(e)])
        }))
      }
      safeFetch(e) {
        return n(this, void 0, void 0, (function * () {
          try {
            return this.scope.fetch(e)
          } catch(e) {
            return this.adapter.newResponse(null, {
              status: 504,
              statusText: "Gateway Timeout"
            })
          }
        }))
      }
    }
    const _ = [{
      positive: !0,
      regex: "^/.*$"
    },
    {
      positive: !1,
      regex: "^/.*\\.[^/]*$"
    },
    {
      positive: !1,
      regex: "^/.*__"
    }];
    class A {
      constructor(e, t, n, i, r, s, o) {
        this.scope = e,
        this.adapter = t,
        this.database = n,
        this.idle = i,
        this.debugHandler = r,
        this.manifest = s,
        this.manifestHash = o,
        this.hashTable = new Map,
        this.indexUrl = this.adapter.normalizeUrl(this.manifest.index),
        this._okay = !0,
        Object.keys(this.manifest.hashTable).forEach(e = >{
          this.hashTable.set(t.normalizeUrl(e), this.manifest.hashTable[e])
        }),
        this.assetGroups = (s.assetGroups || []).map(e = >{
          const n = `$ {
            t.cacheNamePrefix
          }: $ {
            this.manifestHash
          }: assets`;
          switch (e.installMode) {
          case "prefetch":
            return new T(this.scope, this.adapter, this.idle, e, this.hashTable, this.database, n);
          case "lazy":
            return new y(this.scope, this.adapter, this.idle, e, this.hashTable, this.database, n)
          }
        }),
        this.dataGroups = (s.dataGroups || []).map(e = >new O(this.scope, this.adapter, e, this.database, this.debugHandler, `$ {
          t.cacheNamePrefix
        }: $ {
          e.version
        }: data`)),
        s.navigationUrls = s.navigationUrls || _;
        const a = s.navigationUrls.filter(e = >e.positive),
        u = s.navigationUrls.filter(e = >!e.positive);
        this.navigationUrls = {
          include: a.map(e = >new RegExp(e.regex)),
          exclude: u.map(e = >new RegExp(e.regex))
        }
      }
      get okay() {
        return this._okay
      }
      initializeFully(e) {
        return n(this, void 0, void 0, (function * () {
          try {
            yield this.assetGroups.reduce((t, i) = >n(this, void 0, void 0, (function * () {
              return yield t,
              i.initializeFully(e)
            })), Promise.resolve())
          } catch(e) {
            throw this._okay = !1,
            e
          }
        }))
      }
      handleFetch(e, t) {
        return n(this, void 0, void 0, (function * () {
          const i = yield this.assetGroups.reduce((i, r) = >n(this, void 0, void 0, (function * () {
            const n = yield i;
            return null !== n ? n: r.handleFetch(e, t)
          })), Promise.resolve(null));
          if (null !== i) return i;
          const r = yield this.dataGroups.reduce((i, r) = >n(this, void 0, void 0, (function * () {
            const n = yield i;
            return null !== n ? n: r.handleFetch(e, t)
          })), Promise.resolve(null));
          if (null !== r) return r;
          if (this.adapter.normalizeUrl(e.url) !== this.indexUrl && this.isNavigationRequest(e)) {
            if ("freshness" === this.manifest.navigationRequestStrategy) try {
              return yield this.scope.fetch(e)
            } catch(e) {}
            return this.handleFetch(this.adapter.newRequest(this.indexUrl), t)
          }
          return null
        }))
      }
      isNavigationRequest(e) {
        if ("navigate" !== e.mode) return ! 1;
        if (!this.acceptsTextHtml(e)) return ! 1;
        const t = this.scope.registration.scope.replace(/\/$/, ""),
        n = (e.url.startsWith(t) ? e.url.substr(t.length) : e.url).replace(/[?#].*$/, "");
        return this.navigationUrls.include.some(e = >e.test(n)) && !this.navigationUrls.exclude.some(e = >e.test(n))
      }
      lookupResourceWithHash(e, t) {
        return n(this, void 0, void 0, (function * () {
          if (!this.hashTable.has(e)) return null;
          if (this.hashTable.get(e) !== t) return null;
          const n = yield this.lookupResourceWithoutHash(e);
          return n && n.response
        }))
      }
      lookupResourceWithoutHash(e) {
        return this.assetGroups.reduce((t, i) = >n(this, void 0, void 0, (function * () {
          const n = yield t;
          return null !== n ? n: i.fetchFromCacheOnly(e)
        })), Promise.resolve(null))
      }
      previouslyCachedResources() {
        return this.assetGroups.reduce((e, t) = >n(this, void 0, void 0, (function * () {
          return (yield e).concat(yield t.unhashedResources())
        })), Promise.resolve([]))
      }
      recentCacheStatus(e) {
        return n(this, void 0, void 0, (function * () {
          return this.assetGroups.reduce((t, r) = >n(this, void 0, void 0, (function * () {
            const n = yield t;
            if (n === i.CACHED) return n;
            const s = yield r.cacheStatus(e);
            return s === i.NOT_CACHED ? n: s
          })), Promise.resolve(i.NOT_CACHED))
        }))
      }
      cleanup() {
        return n(this, void 0, void 0, (function * () {
          yield Promise.all(this.assetGroups.map(e = >e.cleanup())),
          yield Promise.all(this.dataGroups.map(e = >e.cleanup()))
        }))
      }
      get appData() {
        return this.manifest.appData || null
      }
      acceptsTextHtml(e) {
        const t = e.headers.get("Accept");
        if (null === t) return ! 1;
        return t.split(",").some(e = >"text/html" === e.trim().toLowerCase())
      }
    }
    class g {
      constructor(e, t) {
        this.driver = e,
        this.adapter = t,
        this.debugLogA = [],
        this.debugLogB = []
      }
      handleFetch(e) {
        return n(this, void 0, void 0, (function * () {
          const[e, t, n] = yield Promise.all([this.driver.debugState(), this.driver.debugVersions(), this.driver.debugIdleState()]),
          i = `NGSW Debug Info: \n\nDriver state: $ {
            e.state
          } ($ {
            e.why
          })\nLatest manifest hash: $ {
            e.latestHash || "none"
          }\nLast update check: $ {
            this.since(e.lastUpdateCheck)
          }`,
          r = t.map(e = >` === Version $ {
            e.hash
          } === \n\nClients: $ {
            e.clients.join(", ")
          }`).join("\n\n"),
          s = ` === Idle Task Queue === \nLast update tick: $ {
            this.since(n.lastTrigger)
          }\nLast update run: $ {
            this.since(n.lastRun)
          }\nTask queue: \n$ {
            n.queue.map(e = >" * " + e).join("\n")
          }\n\nDebug log: \n$ {
            this.formatDebugLog(this.debugLogB)
          }\n$ {
            this.formatDebugLog(this.debugLogA)
          }\n`;
          return this.adapter.newResponse(`$ {
            i
          }\n\n$ {
            r
          }\n\n$ {
            s
          }`, {
            headers: this.adapter.newHeaders({
              "Content-Type": "text/plain"
            })
          })
        }))
      }
      since(e) {
        if (null === e) return "never";
        let t = this.adapter.time - e;
        const n = Math.floor(t / 864e5);
        t %= 864e5;
        const i = Math.floor(t / 36e5);
        t %= 36e5;
        const r = Math.floor(t / 6e4);
        t %= 6e4;
        const s = Math.floor(t / 1e3),
        o = t % 1e3;
        return (n > 0 ? n + "d": "") + (i > 0 ? i + "h": "") + (r > 0 ? r + "m": "") + (s > 0 ? s + "s": "") + (o > 0 ? o + "u": "")
      }
      log(e, t = "") {
        100 === this.debugLogA.length && (this.debugLogB = this.debugLogA, this.debugLogA = []),
        "string" != typeof e && (e = this.errorToString(e)),
        this.debugLogA.push({
          value: e,
          time: this.adapter.time,
          context: t
        })
      }
      errorToString(e) {
        return`$ {
          e.name
        } ($ {
          e.message
        },
        $ {
          e.stack
        })`
      }
      formatDebugLog(e) {
        return e.map(e = >` [$ {
          this.since(e.time)
        }] $ {
          e.value
        }
        $ {
          e.context
        }`).join("\n")
      }
    }
    class N {
      constructor(e, t, n, i) {
        this.adapter = e,
        this.delay = t,
        this.maxDelay = n,
        this.debug = i,
        this.queue = [],
        this.scheduled = null,
        this.empty = Promise.resolve(),
        this.emptyResolve = null,
        this.lastTrigger = null,
        this.lastRun = null,
        this.oldestScheduledAt = null
      }
      trigger() {
        var e;
        return n(this, void 0, void 0, (function * () {
          if (this.lastTrigger = this.adapter.time, 0 === this.queue.length) return;
          null !== this.scheduled && (this.scheduled.cancel = !0);
          const t = {
            cancel: !1
          };
          this.scheduled = t;
          const n = this.adapter.time,
          i = Math.max(0, (null !== (e = this.oldestScheduledAt) && void 0 !== e ? e: n) + this.maxDelay - n),
          r = Math.min(i, this.delay);
          yield this.adapter.timeout(r),
          t.cancel || (this.scheduled = null, yield this.execute())
        }))
      }
      execute() {
        return n(this, void 0, void 0, (function * () {
          for (this.lastRun = this.adapter.time; this.queue.length > 0;) {
            const e = this.queue;
            this.queue = [],
            yield e.reduce((e, t) = >n(this, void 0, void 0, (function * () {
              yield e;
              try {
                yield t.run()
              } catch(e) {
                this.debug.log(e, "while running idle task " + t.desc)
              }
            })), Promise.resolve())
          }
          null !== this.emptyResolve && (this.emptyResolve(), this.emptyResolve = null),
          this.empty = Promise.resolve(),
          this.oldestScheduledAt = null
        }))
      }
      schedule(e, t) {
        this.queue.push({
          desc: e,
          run: t
        }),
        null === this.emptyResolve && (this.empty = new Promise(e = >{
          this.emptyResolve = e
        })),
        null === this.oldestScheduledAt && (this.oldestScheduledAt = this.adapter.time)
      }
      get size() {
        return this.queue.length
      }
      get taskDescriptions() {
        return this.queue.map(e = >e.desc)
      }
    }
    function m(e) {
      return a(JSON.stringify(e))
    }
    const I = ["actions", "badge", "body", "data", "dir", "icon", "image", "lang", "renotify", "requireInteraction", "silent", "tag", "timestamp", "title", "vibrate"];
    var C = function(e) {
      return e[e.NORMAL = 0] = "NORMAL",
      e[e.EXISTING_CLIENTS_ONLY = 1] = "EXISTING_CLIENTS_ONLY",
      e[e.SAFE_MODE = 2] = "SAFE_MODE",
      e
    } ({});
    const b = self,
    S = new class {
      constructor(e) {
        this.scopeUrl = e;
        const t = this.parseUrl(this.scopeUrl);
        this.origin = t.origin,
        this.cacheNamePrefix = "ngsw:" + t.path
      }
      newRequest(e, t) {
        return new Request(e, t)
      }
      newResponse(e, t) {
        return new Response(e, t)
      }
      newHeaders(e) {
        return new Headers(e)
      }
      isClient(e) {
        return e instanceof Client
      }
      get time() {
        return Date.now()
      }
      normalizeUrl(e) {
        const t = this.parseUrl(e, this.scopeUrl);
        return t.origin === this.origin ? t.path: e
      }
      parseUrl(e, t) {
        const n = t ? new URL(e, t) : new URL(e);
        return {
          origin: n.origin,
          path: n.pathname,
          search: n.search
        }
      }
      timeout(e) {
        return new Promise(t = >{
          setTimeout(() = >t(), e)
        })
      }
    } (b.registration.scope);
    new class {
      constructor(e, t, i) {
        this.scope = e,
        this.adapter = t,
        this.db = i,
        this.state = C.NORMAL,
        this.stateMessage = "(nominal)",
        this.initialized = null,
        this.clientVersionMap = new Map,
        this.versions = new Map,
        this.latestHash = null,
        this.lastUpdateCheck = null,
        this.scheduledNavUpdateCheck = !1,
        this.loggedInvalidOnlyIfCachedRequest = !1,
        this.ngswStatePath = this.adapter.parseUrl("ngsw/state", this.scope.registration.scope).path,
        this.scope.addEventListener("install", e = >{
          e.waitUntil(this.scope.skipWaiting())
        }),
        this.scope.addEventListener("activate", e = >{
          e.waitUntil((() = >n(this, void 0, void 0, (function * () {
            yield this.scope.clients.claim(),
            this.idle.schedule("activate: cleanup-old-sw-caches", () = >n(this, void 0, void 0, (function * () {
              try {
                yield this.cleanupOldSwCaches()
              } catch(e) {
                this.debugger.log(e, "cleanupOldSwCaches @ activate: cleanup-old-sw-caches")
              }
            })))
          })))()),
          null !== this.scope.registration.active && this.scope.registration.active.postMessage({
            action: "INITIALIZE"
          })
        }),
        this.scope.addEventListener("fetch", e = >this.onFetch(e)),
        this.scope.addEventListener("message", e = >this.onMessage(e)),
        this.scope.addEventListener("push", e = >this.onPush(e)),
        this.scope.addEventListener("notificationclick", e = >this.onClick(e)),
        this.debugger = new g(this, this.adapter),
        this.idle = new N(this.adapter, 5e3, 3e4, this.debugger)
      }
      onFetch(e) {
        const t = e.request,
        n = this.scope.registration.scope,
        i = this.adapter.parseUrl(t.url, n);
        t.headers.has("ngsw-bypass") || /[?&]ngsw-bypass(?:[=&]|$)/i.test(i.search) || (i.path !== this.ngswStatePath ? this.state !== C.SAFE_MODE ? i.origin.startsWith("http:") && n.startsWith("https:") ? this.debugger.log(`Ignoring passive mixed content request: Driver.fetch($ {
          t.url
        })`) : "only-if-cached" !== t.cache || "same-origin" === t.mode ? e.respondWith(this.handleFetch(e)) : this.loggedInvalidOnlyIfCachedRequest || (this.loggedInvalidOnlyIfCachedRequest = !0, this.debugger.log("Ignoring invalid request: 'only-if-cached' can be set only with 'same-origin' mode", `Driver.fetch($ {
          t.url
        },
        cache: $ {
          t.cache
        },
        mode: $ {
          t.mode
        })`)) : e.waitUntil(this.idle.trigger()) : e.respondWith(this.debugger.handleFetch(t)))
      }
      onMessage(e) {
        if (this.state === C.SAFE_MODE) return;
        const t = e.data;
        t && t.action && e.waitUntil((() = >n(this, void 0, void 0, (function * () {
          if ("INITIALIZE" === t.action) return this.ensureInitialized(e);
          this.adapter.isClient(e.source) && (yield this.ensureInitialized(e), yield this.handleMessage(t, e.source))
        })))())
      }
      onPush(e) {
        e.data && e.waitUntil(this.handlePush(e.data.json()))
      }
      onClick(e) {
        e.waitUntil(this.handleClick(e.notification, e.action))
      }
      ensureInitialized(e) {
        return n(this, void 0, void 0, (function * () {
          if (null !== this.initialized) return this.initialized;
          try {
            this.initialized = this.initialize(),
            yield this.initialized
          } catch(e) {
            throw this.state = C.SAFE_MODE,
            this.stateMessage = "Initialization failed due to error: " + s(e),
            e
          } finally {
            e.waitUntil(this.idle.trigger())
          }
        }))
      }
      handleMessage(e, t) {
        return n(this, void 0, void 0, (function * () {
          if (function(e) {
            return "CHECK_FOR_UPDATES" === e.action
          } (e)) {
            const i = (() = >n(this, void 0, void 0, (function * () {
              yield this.checkForUpdate()
            })))();
            yield this.reportStatus(t, i, e.statusNonce)
          } else(function(e) {
            return "ACTIVATE_UPDATE" === e.action
          })(e) && (yield this.reportStatus(t, this.updateClient(t), e.statusNonce))
        }))
      }
      handlePush(e) {
        return n(this, void 0, void 0, (function * () {
          if (yield this.broadcast({
            type: "PUSH",
            data: e
          }), !e.notification || !e.notification.title) return;
          const t = e.notification;
          let n = {};
          I.filter(e = >t.hasOwnProperty(e)).forEach(e = >n[e] = t[e]),
          yield this.scope.registration.showNotification(t.title, n)
        }))
      }
      handleClick(e, t) {
        return n(this, void 0, void 0, (function * () {
          e.close();
          const n = {};
          I.filter(t = >t in e).forEach(t = >n[t] = e[t]),
          yield this.broadcast({
            type: "NOTIFICATION_CLICK",
            data: {
              action: t,
              notification: n
            }
          })
        }))
      }
      reportStatus(e, t, i) {
        return n(this, void 0, void 0, (function * () {
          const n = {
            type: "STATUS",
            nonce: i,
            status: !0
          };
          try {
            yield t,
            e.postMessage(n)
          } catch(t) {
            e.postMessage(Object.assign(Object.assign({},
            n), {
              status: !1,
              error: t.toString()
            }))
          }
        }))
      }
      updateClient(e) {
        return n(this, void 0, void 0, (function * () {
          const t = this.clientVersionMap.get(e.id);
          if (t === this.latestHash) return;
          let n = void 0;
          if (void 0 !== t) {
            const e = this.versions.get(t);
            n = this.mergeHashWithAppData(e.manifest, t)
          }
          this.clientVersionMap.set(e.id, this.latestHash),
          yield this.sync();
          const i = this.versions.get(this.latestHash),
          r = {
            type: "UPDATE_ACTIVATED",
            previous: n,
            current: this.mergeHashWithAppData(i.manifest, this.latestHash)
          };
          e.postMessage(r)
        }))
      }
      handleFetch(e) {
        return n(this, void 0, void 0, (function * () {
          try {
            yield this.ensureInitialized(e)
          } catch(t) {
            return this.safeFetch(e.request)
          }
          "navigate" !== e.request.mode || this.scheduledNavUpdateCheck || (this.scheduledNavUpdateCheck = !0, this.idle.schedule("check-updates-on-navigation", () = >n(this, void 0, void 0, (function * () {
            this.scheduledNavUpdateCheck = !1,
            yield this.checkForUpdate()
          }))));
          const t = yield this.assignVersion(e);
          let i = null;
          try {
            if (null !== t) try {
              i = yield t.handleFetch(e.request, e)
            } catch(n) {
              if (n.isUnrecoverableState && (yield this.notifyClientsAboutUnrecoverableState(t, n.message)), n.isCritical) return yield this.versionFailed(t, n),
              this.safeFetch(e.request);
              throw n
            }
            return null === i ? this.safeFetch(e.request) : i
          } finally {
            e.waitUntil(this.idle.trigger())
          }
        }))
      }
      initialize() {
        return n(this, void 0, void 0, (function * () {
          const e = yield this.db.open("control");
          let t,
          i,
          r;
          try {
            if ([t, i, r] = yield Promise.all([e.read("manifests"), e.read("assignments"), e.read("latest")]), !this.versions.has(r.latest) && !t.hasOwnProperty(r.latest)) throw this.debugger.log("Missing manifest for latest version hash " + r.latest, "initialize: read from DB"),
            new Error("Missing manifest for latest hash " + r.latest);
            this.idle.schedule("init post-load (update, cleanup)", () = >n(this, void 0, void 0, (function * () {
              yield this.checkForUpdate();
              try {
                yield this.cleanupCaches()
              } catch(e) {
                this.debugger.log(e, "cleanupCaches @ init post-load")
              }
            })))
          } catch(n) {
            const s = yield this.fetchLatestManifest(),
            o = m(s);
            t = {},
            t[o] = s,
            i = {},
            r = {
              latest: o
            },
            yield Promise.all([e.write("manifests", t), e.write("assignments", i), e.write("latest", r)])
          }
          if (Object.keys(t).forEach(e = >{
            const n = t[e];
            this.versions.has(e) || this.versions.set(e, new A(this.scope, this.adapter, this.db, this.idle, this.debugger, n, e))
          }), Object.keys(i).forEach(e = >{
            const t = i[e];
            this.versions.has(t) ? this.clientVersionMap.set(e, t) : (this.clientVersionMap.set(e, r.latest), this.debugger.log(`Unknown version $ {
              t
            }
            mapped
            for client $ {
              e
            },
            using latest instead`, "initialize: map assignments"))
          }), this.latestHash = r.latest, !this.versions.has(r.latest)) throw new Error(`Invariant violated(initialize) : latest hash $ {
            r.latest
          }
          has no known manifest`);
          yield Promise.all(Object.keys(t).map(e = >n(this, void 0, void 0, (function * () {
            try {
              yield this.scheduleInitialization(this.versions.get(e))
            } catch(t) {
              return this.debugger.log(t, "initialize: schedule init of " + e),
              !1
            }
          }))))
        }))
      }
      lookupVersionByHash(e, t = "lookupVersionByHash") {
        if (!this.versions.has(e)) throw new Error(`Invariant violated($ {
          t
        }) : want AppVersion
        for $ {
          e
        }
        but not loaded`);
        return this.versions.get(e)
      }
      assignVersion(e) {
        return n(this, void 0, void 0, (function * () {
          const t = e.clientId;
          if (t) {
            if (this.clientVersionMap.has(t)) {
              const n = this.clientVersionMap.get(t);
              let i = this.lookupVersionByHash(n, "assignVersion");
              if (this.state === C.NORMAL && n !== this.latestHash && i.isNavigationRequest(e.request)) {
                if (null === this.latestHash) throw new Error("Invariant violated (assignVersion): latestHash was null");
                const e = yield this.scope.clients.get(t);
                yield this.updateClient(e),
                i = this.lookupVersionByHash(this.latestHash, "assignVersion")
              }
              return i
            }
            if (this.state !== C.NORMAL) return null;
            if (null === this.latestHash) throw new Error("Invariant violated (assignVersion): latestHash was null");
            return this.clientVersionMap.set(t, this.latestHash),
            yield this.sync(),
            this.lookupVersionByHash(this.latestHash, "assignVersion")
          }
          if (this.state !== C.NORMAL) return null;
          if (null === this.latestHash) throw new Error("Invariant violated (assignVersion): latestHash was null");
          return this.lookupVersionByHash(this.latestHash, "assignVersion")
        }))
      }
      fetchLatestManifest(e = !1) {
        return n(this, void 0, void 0, (function * () {
          const t = yield this.safeFetch(this.adapter.newRequest("ngsw.json?ngsw-cache-bust=" + Math.random()));
          if (!t.ok) {
            if (404 === t.status) yield this.deleteAllCaches(),
            yield this.scope.registration.unregister();
            else if ((503 === t.status || 504 === t.status) && e) return null;
            throw new Error(`Manifest fetch failed ! (status: $ {
              t.status
            })`)
          }
          return this.lastUpdateCheck = this.adapter.time,
          t.json()
        }))
      }
      deleteAllCaches() {
        return n(this, void 0, void 0, (function * () {
          const e = (yield this.scope.caches.keys()).filter(e = >e.startsWith(this.adapter.cacheNamePrefix + ":"));
          yield Promise.all(e.map(e = >this.scope.caches.delete(e)))
        }))
      }
      scheduleInitialization(e) {
        return n(this, void 0, void 0, (function * () {
          const t = () = >n(this, void 0, void 0, (function * () {
            try {
              yield e.initializeFully()
            } catch(t) {
              this.debugger.log(t, "initializeFully for " + e.manifestHash),
              yield this.versionFailed(e, t)
            }
          }));
          if (this.scope.registration.scope.indexOf("://localhost") > -1) return t();
          this.idle.schedule(`initialization($ {
            e.manifestHash
          })`, t)
        }))
      }
      versionFailed(e, t) {
        return n(this, void 0, void 0, (function * () {
          const n = Array.from(this.versions.entries()).find(([t, n]) = >n === e);
          if (void 0 === n) return;
          const i = n[0],
          r = Array.from(this.clientVersionMap.entries()).filter(([e, t]) = >t === i).map(([e]) = >e);
          this.latestHash === i ? (this.state = C.EXISTING_CLIENTS_ONLY, this.stateMessage = "Degraded due to: " + s(t), r.forEach(e = >this.clientVersionMap.delete(e))) : r.forEach(e = >this.clientVersionMap.set(e, this.latestHash));
          try {
            yield this.sync()
          } catch(e) {
            this.debugger.log(e, `Driver.versionFailed($ {
              t.message || t
            })`)
          }
        }))
      }
      setupUpdate(e, t) {
        return n(this, void 0, void 0, (function * () {
          const n = new A(this.scope, this.adapter, this.db, this.idle, this.debugger, e, t);
          if (1 !== e.configVersion) throw yield this.deleteAllCaches(),
          yield this.scope.registration.unregister(),
          new Error(`Invalid config version: expected 1, got $ {
            e.configVersion
          }.`);
          yield n.initializeFully(this),
          this.versions.set(t, n),
          this.latestHash = t,
          this.state === C.EXISTING_CLIENTS_ONLY && (this.state = C.NORMAL, this.stateMessage = "(nominal)"),
          yield this.sync(),
          yield this.notifyClientsAboutUpdate(n)
        }))
      }
      checkForUpdate() {
        return n(this, void 0, void 0, (function * () {
          let e = "(unknown)";
          try {
            const t = yield this.fetchLatestManifest(!0);
            return null === t ? (this.debugger.log("Check for update aborted. (Client or server offline.)"), !1) : (e = m(t), !this.versions.has(e) && (yield this.setupUpdate(t, e), !0))
          } catch(t) {
            return this.debugger.log(t, "Error occurred while updating to manifest " + e),
            this.state = C.EXISTING_CLIENTS_ONLY,
            this.stateMessage = "Degraded due to failed initialization: " + s(t),
            !1
          }
        }))
      }
      sync() {
        return n(this, void 0, void 0, (function * () {
          const e = yield this.db.open("control"),
          t = {};
          this.versions.forEach((e, n) = >{
            t[n] = e.manifest
          });
          const n = {};
          this.clientVersionMap.forEach((e, t) = >{
            n[t] = e
          });
          const i = {
            latest: this.latestHash
          };
          yield Promise.all([e.write("manifests", t), e.write("assignments", n), e.write("latest", i)])
        }))
      }
      cleanupCaches() {
        return n(this, void 0, void 0, (function * () {
          const e = (yield this.scope.clients.matchAll()).map(e = >e.id);
          Array.from(this.clientVersionMap.keys()).filter(t = >-1 === e.indexOf(t)).forEach(e = >this.clientVersionMap.delete(e));
          const t = new Set;
          this.clientVersionMap.forEach((e, n) = >t.add(e));
          const i = Array.from(this.versions.keys()).filter(e = >!t.has(e) && e !== this.latestHash);
          yield i.reduce((e, t) = >n(this, void 0, void 0, (function * () {
            yield e;
            try {
              const e = this.versions.get(t);
              this.versions.delete(t),
              yield e.cleanup()
            } catch(e) {
              this.debugger.log(e, "cleanupCaches - cleanup " + t)
            }
          })), Promise.resolve()),
          yield this.sync()
        }))
      }
      cleanupOldSwCaches() {
        return n(this, void 0, void 0, (function * () {
          const e = (yield this.scope.caches.keys()).filter(e = >/^ngsw:(?!\/)/.test(e));
          yield Promise.all(e.map(e = >this.scope.caches.delete(e)))
        }))
      }
      lookupResourceWithHash(e, t) {
        return Array.from(this.versions.values()).reduce((i, r) = >n(this, void 0, void 0, (function * () {
          return null !== (yield i) ? i: r.lookupResourceWithHash(e, t)
        })), Promise.resolve(null))
      }
      lookupResourceWithoutHash(e) {
        return n(this, void 0, void 0, (function * () {
          yield this.initialized;
          const t = this.versions.get(this.latestHash);
          return t ? t.lookupResourceWithoutHash(e) : null
        }))
      }
      previouslyCachedResources() {
        return n(this, void 0, void 0, (function * () {
          yield this.initialized;
          const e = this.versions.get(this.latestHash);
          return e ? e.previouslyCachedResources() : []
        }))
      }
      recentCacheStatus(e) {
        return n(this, void 0, void 0, (function * () {
          const t = this.versions.get(this.latestHash);
          return t ? t.recentCacheStatus(e) : i.NOT_CACHED
        }))
      }
      mergeHashWithAppData(e, t) {
        return {
          hash: t,
          appData: e.appData
        }
      }
      notifyClientsAboutUnrecoverableState(e, t) {
        return n(this, void 0, void 0, (function * () {
          const i = Array.from(this.versions.entries()).find(([t, n]) = >n === e);
          if (void 0 === i) return;
          const r = i[0],
          s = Array.from(this.clientVersionMap.entries()).filter(([e, t]) = >t === r).map(([e]) = >e);
          yield Promise.all(s.map(e = >n(this, void 0, void 0, (function * () { (yield this.scope.clients.get(e)).postMessage({
              type: "UNRECOVERABLE_STATE",
              reason: t
            })
          }))))
        }))
      }
      notifyClientsAboutUpdate(e) {
        return n(this, void 0, void 0, (function * () {
          yield this.initialized;
          const t = yield this.scope.clients.matchAll();
          yield Promise.all(t.map(t = >n(this, void 0, void 0, (function * () {
            const n = this.clientVersionMap.get(t.id);
            if (void 0 === n) return;
            if (n === this.latestHash) return;
            const i = this.versions.get(n),
            r = {
              type: "UPDATE_AVAILABLE",
              current: this.mergeHashWithAppData(i.manifest, n),
              available: this.mergeHashWithAppData(e.manifest, this.latestHash)
            };
            t.postMessage(r)
          }))))
        }))
      }
      broadcast(e) {
        return n(this, void 0, void 0, (function * () { (yield this.scope.clients.matchAll()).forEach(t = >{
            t.postMessage(e)
          })
        }))
      }
      debugState() {
        return n(this, void 0, void 0, (function * () {
          return {
            state: C[this.state],
            why: this.stateMessage,
            latestHash: this.latestHash,
            lastUpdateCheck: this.lastUpdateCheck
          }
        }))
      }
      debugVersions() {
        return n(this, void 0, void 0, (function * () {
          return Array.from(this.versions.keys()).map(e = >{
            const t = this.versions.get(e),
            n = Array.from(this.clientVersionMap.entries()).filter(([t, n]) = >n === e).map(([e, t]) = >e);
            return {
              hash: e,
              manifest: t.manifest,
              clients: n,
              status: ""
            }
          })
        }))
      }
      debugIdleState() {
        return n(this, void 0, void 0, (function * () {
          return {
            queue: this.idle.taskDescriptions,
            lastTrigger: this.idle.lastTrigger,
            lastRun: this.idle.lastRun
          }
        }))
      }
      safeFetch(e) {
        return n(this, void 0, void 0, (function * () {
          try {
            return yield this.scope.fetch(e)
          } catch(t) {
            return this.debugger.log(t, `Driver.fetch($ {
              e.url
            })`),
            this.adapter.newResponse(null, {
              status: 504,
              statusText: "Gateway Timeout"
            })
          }
        }))
      }
    } (b, S, new class {
      constructor(e, t) {
        this.scope = e,
        this.adapter = t,
        this.tables = new Map
      }
      delete(e) {
        return this.tables.has(e) && this.tables.delete(e),
        this.scope.caches.delete(`$ {
          this.adapter.cacheNamePrefix
        }: db: $ {
          e
        }`)
      }
      list() {
        return this.scope.caches.keys().then(e = >e.filter(e = >e.startsWith(this.adapter.cacheNamePrefix + ":db:")))
      }
      open(e, n) {
        if (!this.tables.has(e)) {
          const i = this.scope.caches.open(`$ {
            this.adapter.cacheNamePrefix
          }: db: $ {
            e
          }`).then(i = >new t(e, i, this.adapter, n));
          this.tables.set(e, i)
        }
        return this.tables.get(e)
      }
    } (b, S))
  } ()
}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0dHAtc3RhdHVzLWNvZGVzL2J1aWxkL2VzL2xlZ2FjeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHR0cC1zdGF0dXMtY29kZXMvYnVpbGQvZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0dHAtc3RhdHVzLWNvZGVzL2J1aWxkL2VzL3V0aWxzLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHR0cC1zdGF0dXMtY29kZXMvYnVpbGQvZXMvc3RhdHVzLWNvZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odHRwLXN0YXR1cy1jb2Rlcy9idWlsZC9lcy9yZWFzb24tcGhyYXNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHR0cC1zdGF0dXMtY29kZXMvYnVpbGQvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jcmVhdGUvc3JjL2Jhc2Uvc3cvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL2FwcHMvY3JlYXRlL3NyYy9iYXNlL3N3L2RhdGFiYXNlLXV0aWxzLnRzIiwid2VicGFjazovLy8uL2FwcHMvY3JlYXRlL3NyYy9iYXNlL2NhY2hpbmctaW50ZXJmYWNlcy50cyIsIndlYnBhY2s6Ly8vLi9hcHBzL2NyZWF0ZS9zcmMvYmFzZS9zdy9tZXNzYWdlLWNoYW5uZWwtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jcmVhdGUvc3JjL2Jhc2Uvc3cvZGF0YWJhc2UtYWNjZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jcmVhdGUvc3JjL2Jhc2Uvc3cvZXJyb3JzLnRzIiwid2VicGFjazovLy8uL2FwcHMvY3JlYXRlL3NyYy9iYXNlL3N3L3RpbWVkLXByb21pc2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jcmVhdGUvc3JjL2Jhc2Uvc3cvcHJveGllZC1jYWNoZS13b3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbGlicy9zZXJ2aWNlLXdvcmtlci9zcmMvd29ya2VyLmpzIiwid2VicGFjazovLy8uL2FwcHMvY3JlYXRlL3NyYy9iYXNlL3N3L3Jvb3QtcmV0cnktaGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9hcHBzL2NyZWF0ZS9zcmMvYmFzZS9zdy9kYXRhYmFzZS1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL2FwcHMvY3JlYXRlL3NyYy9iYXNlL3N3L2ZlYXR1cmVmbGFnLXV0aWxzLnRzIiwid2VicGFjazovLy8uL2FwcHMvY3JlYXRlL3NyYy9iYXNlL3N3L2Zyb250ZW5kLWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9jcmVhdGUvc3JjL2Jhc2Uvc3cvbmFtZWQtcGlwZS50cyIsIndlYnBhY2s6Ly8vLi9hcHBzL2NyZWF0ZS9zcmMvYmFzZS9zdy9maWxlLXF1ZXVlLnRzIiwid2VicGFjazovLy8uL2FwcHMvY3JlYXRlL3NyYy9iYXNlL3V0aWwvcmV2ZXJ0ZWQtcHJvbWlzZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvc2VydmljZS13b3JrZXIvbmdzdy13b3JrZXIuanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJBQ0NFUFRFRCIsIkJBRF9HQVRFV0FZIiwiQkFEX1JFUVVFU1QiLCJDT05GTElDVCIsIkNPTlRJTlVFIiwiQ1JFQVRFRCIsIkVYUEVDVEFUSU9OX0ZBSUxFRCIsIkZBSUxFRF9ERVBFTkRFTkNZIiwiRk9SQklEREVOIiwiR0FURVdBWV9USU1FT1VUIiwiR09ORSIsIkhUVFBfVkVSU0lPTl9OT1RfU1VQUE9SVEVEIiwiSU1fQV9URUFQT1QiLCJJTlNVRkZJQ0lFTlRfU1BBQ0VfT05fUkVTT1VSQ0UiLCJJTlNVRkZJQ0lFTlRfU1RPUkFHRSIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsIkxFTkdUSF9SRVFVSVJFRCIsIkxPQ0tFRCIsIk1FVEhPRF9GQUlMVVJFIiwiTUVUSE9EX05PVF9BTExPV0VEIiwiTU9WRURfUEVSTUFORU5UTFkiLCJNT1ZFRF9URU1QT1JBUklMWSIsIk1VTFRJX1NUQVRVUyIsIk1VTFRJUExFX0NIT0lDRVMiLCJORVRXT1JLX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEIiwiTk9fQ09OVEVOVCIsIk5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OIiwiTk9UX0FDQ0VQVEFCTEUiLCJOT1RfRk9VTkQiLCJOT1RfSU1QTEVNRU5URUQiLCJOT1RfTU9ESUZJRUQiLCJPSyIsIlBBUlRJQUxfQ09OVEVOVCIsIlBBWU1FTlRfUkVRVUlSRUQiLCJQRVJNQU5FTlRfUkVESVJFQ1QiLCJQUkVDT05ESVRJT05fRkFJTEVEIiwiUFJFQ09ORElUSU9OX1JFUVVJUkVEIiwiUFJPQ0VTU0lORyIsIlBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEIiwiUkVRVUVTVF9IRUFERVJfRklFTERTX1RPT19MQVJHRSIsIlJFUVVFU1RfVElNRU9VVCIsIlJFUVVFU1RfVE9PX0xPTkciLCJSRVFVRVNUX1VSSV9UT09fTE9ORyIsIlJFUVVFU1RFRF9SQU5HRV9OT1RfU0FUSVNGSUFCTEUiLCJSRVNFVF9DT05URU5UIiwiU0VFX09USEVSIiwiU0VSVklDRV9VTkFWQUlMQUJMRSIsIlNXSVRDSElOR19QUk9UT0NPTFMiLCJURU1QT1JBUllfUkVESVJFQ1QiLCJUT09fTUFOWV9SRVFVRVNUUyIsIlVOQVVUSE9SSVpFRCIsIlVOUFJPQ0VTU0FCTEVfRU5USVRZIiwiVU5TVVBQT1JURURfTUVESUFfVFlQRSIsIlVTRV9QUk9YWSIsInN0YXR1c0NvZGVUb1JlYXNvblBocmFzZSIsInJlYXNvblBocmFzZVRvU3RhdHVzQ29kZSIsImdldFJlYXNvblBocmFzZSIsInN0YXR1c0NvZGUiLCJyZXN1bHQiLCJ0b1N0cmluZyIsIkVycm9yIiwiZ2V0U3RhdHVzQ29kZSIsInJlYXNvblBocmFzZSIsIlN0YXR1c0NvZGVzIiwiUmVhc29uUGhyYXNlcyIsImdldFN0YXR1c1RleHQiLCJfX2Fzc2lnbiIsImFzc2lnbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFwcGx5IiwidGhpcyIsImxlZ2FjeSIsIklEQkxvY2FsQ2FjaGVTdG9yZSIsIkxPQ0FMX0NBQ0hFX05BTUUiLCJMT0NBTF9DQUNIRV9WRVJTSU9OIiwiTE9DQUxfSEFORExFU19OQU1FIiwiTE9DQUxfSEFORExFU19WRVJTSU9OIiwiTE9DQUxfQ0FDSEVfVVJMX1BBVEhfUFJFRklYIiwiUkFOR0VfSEVBREVSX1JFR0VYUCIsIkRFRkFVTFRfQ0FDSEVfQ09OVFJPTF9IRUFERVIiLCJQUk9NSVNFX1RJTUVPVVRfTEVOR1RIIiwiU0tJUF9NQU5VQUxfUkVIWURSQVRJT05fSEVBREVSIiwiSURCRE9NRXhjZXB0aW9uIiwiTkFNRURfUElQRV9VUkxfUEFUSF9QUkVGSVgiLCJjYWNoZWRPcGVuRGF0YWJhc2UiLCJjYWNoZWRIYW5kbGVEYXRhYmFzZSIsImNhY2hlZEZpbGVIYW5kbGVzIiwib3BlbkRhdGFiYXNlIiwiZGJOYW1lIiwiZGJWZXJzaW9uIiwib251cGdyYWRlQ2FsbGJhY2siLCJjbGVhckRCQ2FsbGJhY2siLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9wZW5SZXF1ZXN0Iiwic2VsZiIsImluZGV4ZWREQiIsIm9wZW4iLCJvbnVwZ3JhZGVuZWVkZWQiLCJldmVudCIsIm9uc3VjY2VzcyIsImRhdGFiYXNlIiwib25jbG9zZSIsImNvbnNvbGUiLCJ3YXJuIiwib25lcnJvciIsImNsb3NlIiwib25hYm9ydCIsIm9udmVyc2lvbmNoYW5nZSIsImVycm9yIiwibmV3VmVyc2lvbiIsImxpc3RlblRvV2hlbkRhdGFiYXNlTmVlZHNUcmFzaGluZyIsImNvbnRlbnRSYW5nZVJlc3BvbnNlIiwiYmxvYlNsaWNlIiwiZnJvbUJ5dGUiLCJ0b0J5dGUiLCJvcmlnaW5hbFNpemUiLCJSZXNwb25zZSIsInN0YXR1cyIsImhlYWRlcnMiLCJyZXF1ZXN0Iiwib2xkVmVyc2lvbiIsImNyZWF0ZU9iamVjdFN0b3JlIiwiQVNTRVRTX1RBQkxFIiwia2V5UGF0aCIsInVuZGVmaW5lZCIsIkhBTkRMRVNfVEFCTEUiLCJwZXJtYW5lbnRVcmwiLCJmaWxlIiwic2l6ZSIsImJsb2IiLCJGaWxlIiwiQmxvYiIsInR5cGUiLCJyYW5nZUhlYWRlciIsInJhbmdlSGVhZGVyTWF0Y2giLCJleGVjIiwicGFyc2VJbnQiLCJncm91cHMiLCJOdW1iZXIiLCJpc05hTiIsInNsaWNlIiwiZXJyb3JOYW1lIiwiU3ludGF4RXJyb3IiLCJEYXRhRXJyb3IiLCJOb3RGb3VuZEVycm9yIiwiUXVvdGFFeGNlZWRlZEVycm9yIiwiaXNNZXNzYWdlT3BlcmF0aW9uUmVzcG9uc2UiLCJyZXNwb25zZSIsInJlc3BvbnNlSGVhZGVycyIsIk1hcCIsIk1lc3NhZ2VDaGFubmVsT3BlcmF0aW9uIiwiUmVxdWVzdEhlYWRlcktleSIsIlJlc3BvbnNlSGVhZGVyS2V5IiwicmVzcG9uc2VDb250ZW50IiwicGVybWlzc2lvbiIsImZlYXR1cmUiLCJlbmFibGVkIiwiY2xpZW50SWQiLCJtZXNzYWdlIiwiY2xpZW50cyIsImNsaWVudCIsIm1lc3NhZ2VDaGFubmVsIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsIm9ubWVzc2FnZSIsImRhdGEiLCJvcGVyYXRpb24iLCJwb3N0TWVzc2FnZSIsInBvcnQyIiwiZ2V0U3RvcmVWYWx1ZSIsInN0b3JlTmFtZSIsInByb21pc2VUaW1lb3V0IiwiY3JlYXRlVGltZWRQcm9taXNlIiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsIklEQlRyYW5zYWN0aW9uRXJyb3IiLCJBYm9ydEVycm9yIiwiYWRkU3RvcmVWYWx1ZSIsImNhY2hlT2JqZWN0IiwiYWRkIiwiZGVsZXRlU3RvcmVWYWx1ZSIsImR1cmFiaWxpdHkiLCJkZWxldGUiLCJvbmNvbXBsZXRlIiwiZ2V0Q2FjaGVkRmlsZUhhbmRsZSIsImdldE9wZW5Bc3NldERhdGFiYXNlIiwiY2FjaGVGaWxlSGFuZGxlIiwiZ2V0T3BlbkhhbmRsZURhdGFiYXNlIiwiYXNzZXRPYmplY3QiLCJkZWxldGVDYWNoZUZpbGVIYW5kbGUiLCJhc0ZldGNoUmVzcG9uc2UiLCJpZGJFcnJvclRvU3RhdHVzQ29kZSIsInN0YXR1c1RleHQiLCJwcm9taXNlQ2FsbGJhY2siLCJ0aW1lb3V0TXMiLCJlcnJvck1zZyIsImlkIiwidGltZW91dFByb21pc2UiLCJzZXRUaW1lb3V0IiwicmFjZSIsImZpbmFsbHkiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVyIiwiZmV0Y2hFdmVudCIsInBhcnNlZFVybCIsIlVSTCIsInVybCIsInBhdGhuYW1lIiwiaW5kZXhPZiIsIm1ldGhvZCIsInJlc3BvbmRXaXRoIiwic2VydmVHZXRSZXF1ZXN0Iiwic2VydmVEZWxldGVSZXF1ZXN0Iiwic3RhcnRzV2l0aCIsImJsb2NraW5nIiwic2VhcmNoIiwiZmlsZU5hbWUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzdWJzdHJpbmciLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImNsb3NlRmlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJza2lwV2FpdGluZyIsInNlcnZlQXNzZXRDYWNoZVJlc3BvbnNlIiwic2VydmVIYW5kbGVDYWNoZVJlc3BvbnNlIiwiZSIsImRlbGV0ZUFzc2V0T2JqZWN0Iiwic2VydmVSZXF1ZXN0IiwiYXNzZXRCbG9iIiwicGFyc2VSYW5nZUhlYWRlciIsInNlcnZlVmFsaWRCeXRlUmFuZ2UiLCJwcm9tcHRIYW5kbGVQZXJtaXNzaW9uIiwicmVjb3JkIiwic2VuZE1lc3NhZ2UiLCJGaWxlU3lzdGVtUGVybWlzc2lvbiIsImhhbmRsZSIsImlzRmlsZUhhbmRsZVJlc3BvbnNlIiwiZmlsZUhhbmRsZVJlc3BvbnNlIiwiZ2V0RmlsZSIsImZpbGVTaXplIiwiZGVsZXRlSGFuZGxlT2JqZWN0IiwicmV0cmlldmVBc3NldE9iamVjdCIsInF1ZXJ5RmVhdHVyZUZsYWdFbmFibGVkIiwicmV0cmlldmVIYW5kbGVPYmplY3QiLCJxdWVyeVBlcm1pc3Npb24iLCJRdWVyeUZlYXR1cmVGbGFnIiwiaXNRdWVyeUZlYXR1cmVSZXNwb25zZSIsInJldHJ5Q2FsbGJhY2siLCJIeWRyYXRpb25Mb29rdXAiLCJza2lwTWFudWFsUmVoeWRyYXRpb24iLCJoYXMiLCJyZXF1ZXN0SGVhZGVycyIsImlzTG9jYWxSZXNwb25zZSIsImxvY2FsUmVzcG9uc2UiLCJBcnJheSIsImZyb20iLCJyZWFkRnJvbUZpbGUiLCJyZWFkUXVldWUiLCJGaWxlUXVldWUiLCJsb29rdXAiLCJyZWFkIiwid3JpdGVUb0ZpbGUiLCJ3cml0ZVF1ZXVlIiwid3JpdGUiLCJyZXNpZGVudEZpbGVRdWV1ZXMiLCJjaHVua3MiLCJyZXNpZGVudCIsIlJldmVydGVkUHJvbWlzZSIsImZpbGVPcGVuIiwiY3JlYXRlUmVhZFJlc3BvbnNlIiwid3JpdGVSZXF1ZXN0IiwiYm9keSIsImVucXVldWVXcml0ZVJlcXVlc3QiLCJibG9ja2VkUmVhZGVyIiwiZGVxdWV1ZVdyaXRlUmVxdWVzdCIsImJsb2NrZWRXcml0ZXIiLCJwcm9taXNlIiwidGVybWluYXRlUXVldWUiLCJzaGlmdCIsInB1c2giLCJxdWV1ZSIsIndhaXRVbnRpbCIsInN0YXRlIiwic3RhZ2UiLCJOb3RGb3VuZCIsInRhYmxlIiwiQ2FjaGVUYWJsZSIsImNhY2hlIiwiYWRhcHRlciIsImNhY2hlUXVlcnlPcHRpb25zIiwibmV3UmVxdWVzdCIsImtleXMiLCJ0aGVuIiwicmVxdWVzdHMiLCJtYXAiLCJyZXEiLCJzdWJzdHIiLCJtYXRjaCIsInJlcyIsImpzb24iLCJwdXQiLCJuZXdSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwiZG9uZSIsIlVwZGF0ZUNhY2hlU3RhdHVzIiwiU3dDcml0aWNhbEVycm9yIiwic3VwZXIiLCJpc0NyaXRpY2FsIiwiZXJyb3JUb1N0cmluZyIsInN0YWNrIiwiU3dVbnJlY292ZXJhYmxlU3RhdGVFcnJvciIsImlzVW5yZWNvdmVyYWJsZVN0YXRlIiwic2hhMSIsInN0ciIsInV0ZjgiLCJfc2hhMSIsImVuZGlhbiIsIndvcmRzMzIiLCJ3b3JkQXQiLCJzdHJpbmdUb1dvcmRzMzIiLCJFbmRpYW4iLCJCaWciLCJzaGExQmluYXJ5IiwiYnVmZmVyIiwiYnl0ZUxlbmd0aCIsInZpZXciLCJVaW50OEFycmF5IiwiYXJyYXlCdWZmZXJUb1dvcmRzMzIiLCJsZW4iLCJ3IiwiYSIsImIiLCJoMCIsImgxIiwiaDIiLCJoMyIsImg0IiwiaiIsInJvbDMyIiwiZiIsImsiLCJmayIsInRlbXAiLCJyZWR1Y2UiLCJhZGQzMiIsImhleCIsImJ5dGVBdCIsInRvTG93ZXJDYXNlIiwiYnl0ZVN0cmluZ1RvSGV4U3RyaW5nIiwid29yZCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIndvcmQzMlRvQnl0ZVN0cmluZyIsIndvcmRzMzJUb0J5dGVTdHJpbmciLCJsb3ciLCJoaWdoIiwiYWRkMzJ0bzY0IiwiY291bnQiLCJpbmRleCIsImNoYXJDb2RlQXQiLCJBc3NldEdyb3VwIiwic2NvcGUiLCJpZGxlIiwiY29uZmlnIiwiaGFzaGVzIiwiZGIiLCJwcmVmaXgiLCJpbkZsaWdodFJlcXVlc3RzIiwidXJscyIsInBhdHRlcm5zIiwibm9ybWFsaXplVXJsIiwicGF0dGVybiIsIlJlZ0V4cCIsImNhY2hlcyIsIm1ldGFkYXRhIiwibWV0YSIsIk5PVF9DQUNIRUQiLCJ1c2VkIiwiQ0FDSEVEX0JVVF9VTlVTRUQiLCJfIiwiQ0FDSEVEIiwiY3R4Iiwic29tZSIsInRlc3QiLCJjYWNoZWRSZXNwb25zZSIsIm5lZWRUb1JldmFsaWRhdGUiLCJzY2hlZHVsZSIsImZldGNoQW5kQ2FjaGVPbmNlIiwiY2xvbmUiLCJjYWNoZURpcmVjdGl2ZXMiLCJzcGxpdCIsInYiLCJ0cmltIiwiZm9yRWFjaCIsIm1heEFnZURpcmVjdGl2ZSIsImZpbmQiLCJjYWNoZUFnZSIsIm1heEFnZSIsInRzIiwibWV0YVRhYmxlIiwiX2EiLCJkYXRlIiwiRGF0ZSIsInBhcnNlIiwiYWdlIiwidGltZSIsIl9iIiwiZXhwaXJlc1N0ciIsIl9jIiwiZmlsdGVyIiwiZmV0Y2hPcCIsImZldGNoRnJvbU5ldHdvcmsiLCJzZXQiLCJvayIsImVyciIsInJlZGlyZWN0TGltaXQiLCJjYWNoZUJ1c3RlZEZldGNoRnJvbU5ldHdvcmsiLCJjYW5vbmljYWxIYXNoIiwic2FmZUZldGNoIiwibWFrZUNhY2hlQnVzdGVkUmVxdWVzdCIsImFycmF5QnVmZmVyIiwiY2FjaGVCdXN0UmVxIiwiY2FjaGVCdXN0IiwiY2FjaGVCdXN0ZWRIYXNoIiwidXBkYXRlRnJvbSIsImhhc2giLCJsb29rdXBSZXNvdXJjZVdpdGhIYXNoIiwiTWF0aCIsInJhbmRvbSIsImZldGNoIiwiUHJlZmV0Y2hBc3NldEdyb3VwIiwicHJldmlvdXMiLCJtYXliZVVwZGF0ZSIsInByZXZpb3VzbHlDYWNoZWRSZXNvdXJjZXMiLCJsb29rdXBSZXNvdXJjZVdpdGhvdXRIYXNoIiwiTGF6eUFzc2V0R3JvdXAiLCJ1cGRhdGVkIiwidXBkYXRlTW9kZSIsInJlY2VudENhY2hlU3RhdHVzIiwiTHJ1TGlzdCIsImhlYWQiLCJ0YWlsIiwicmVtb3ZlIiwibm9kZSIsIkRhdGFHcm91cCIsImRlYnVnSGFuZGxlciIsIl9scnUiLCJscnVUYWJsZSIsImFnZVRhYmxlIiwibG9nIiwidmVyc2lvbiIsImxydSIsInN0cmF0ZWd5IiwiaGFuZGxlRmV0Y2hXaXRoRnJlc2huZXNzIiwiaGFuZGxlRmV0Y2hXaXRoUGVyZm9ybWFuY2UiLCJjbGVhckNhY2hlRm9yVXJsIiwic3luY0xydSIsImZyb21DYWNoZSIsImxvYWRGcm9tQ2FjaGUiLCJyZWZyZXNoQWhlYWRNcyIsInNhZmVDYWNoZVJlc3BvbnNlIiwidGltZW91dEZldGNoIiwibmV0d29ya0ZldGNoIiwibmV0d29ya0ZldGNoV2l0aFRpbWVvdXQiLCJzYWZlTmV0d29ya0ZldGNoIiwibmV0d29ya0ZldGNoVW5kZWZpbmVkRXJyb3IiLCJ0aW1lb3V0IiwicmVzT3JQcm9taXNlIiwib2tUb0NhY2hlT3BhcXVlIiwiY2FjaGVSZXNwb25zZSIsImFjY2Vzc2VkIiwibWF4U2l6ZSIsImV2aWN0ZWRVcmwiLCJwb3AiLCJhbGwiLCJCQUNLV0FSRFNfQ09NUEFUSUJJTElUWV9OQVZJR0FUSU9OX1VSTFMiLCJwb3NpdGl2ZSIsInJlZ2V4IiwiQXBwVmVyc2lvbiIsIm1hbmlmZXN0IiwibWFuaWZlc3RIYXNoIiwiaGFzaFRhYmxlIiwiaW5kZXhVcmwiLCJfb2theSIsImFzc2V0R3JvdXBzIiwiY2FjaGVOYW1lUHJlZml4IiwiaW5zdGFsbE1vZGUiLCJkYXRhR3JvdXBzIiwibmF2aWdhdGlvblVybHMiLCJpbmNsdWRlVXJscyIsInNwZWMiLCJleGNsdWRlVXJscyIsImluY2x1ZGUiLCJleGNsdWRlIiwiZ3JvdXAiLCJpbml0aWFsaXplRnVsbHkiLCJjb250ZXh0IiwiYXNzZXQiLCJwb3RlbnRpYWxSZXNwb25zZSIsInJlc3AiLCJoYW5kbGVGZXRjaCIsImlzTmF2aWdhdGlvblJlcXVlc3QiLCJuYXZpZ2F0aW9uUmVxdWVzdFN0cmF0ZWd5IiwiYWNjZXB0c1RleHRIdG1sIiwidXJsUHJlZml4IiwicmVnaXN0cmF0aW9uIiwicmVwbGFjZSIsInVybFdpdGhvdXRRdWVyeU9ySGFzaCIsImNhY2hlU3RhdGUiLCJmZXRjaEZyb21DYWNoZU9ubHkiLCJyZXNvdXJjZXMiLCJjb25jYXQiLCJ1bmhhc2hlZFJlc291cmNlcyIsImN1cnJlbnQiLCJncm91cFN0YXR1cyIsImNhY2hlU3RhdHVzIiwiY2xlYW51cCIsImFwcERhdGEiLCJhY2NlcHQiLCJEZWJ1Z0hhbmRsZXIiLCJkcml2ZXIiLCJkZWJ1Z0xvZ0EiLCJkZWJ1Z0xvZ0IiLCJ2ZXJzaW9ucyIsImRlYnVnU3RhdGUiLCJkZWJ1Z1ZlcnNpb25zIiwiZGVidWdJZGxlU3RhdGUiLCJtc2dTdGF0ZSIsIndoeSIsImxhdGVzdEhhc2giLCJzaW5jZSIsImxhc3RVcGRhdGVDaGVjayIsIm1zZ1ZlcnNpb25zIiwiam9pbiIsIm1zZ0lkbGUiLCJsYXN0VHJpZ2dlciIsImxhc3RSdW4iLCJmb3JtYXREZWJ1Z0xvZyIsIm5ld0hlYWRlcnMiLCJkYXlzIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzIiwiZW50cnkiLCJJZGxlU2NoZWR1bGVyIiwiZGVsYXkiLCJtYXhEZWxheSIsImRlYnVnIiwic2NoZWR1bGVkIiwiZW1wdHkiLCJlbXB0eVJlc29sdmUiLCJvbGRlc3RTY2hlZHVsZWRBdCIsImNhbmNlbCIsIm5vdyIsIm1heCIsIm1pbiIsImV4ZWN1dGUiLCJ0YXNrIiwicnVuIiwiZGVzYyIsImhhc2hNYW5pZmVzdCIsIk5PVElGSUNBVElPTl9PUFRJT05fTkFNRVMiLCJEcml2ZXJSZWFkeVN0YXRlIiwic2NvcGVVcmwiLCJwYXJzZWRTY29wZVVybCIsInBhcnNlVXJsIiwib3JpZ2luIiwicGF0aCIsImlucHV0IiwiaW5pdCIsIlJlcXVlc3QiLCJIZWFkZXJzIiwic291cmNlIiwiQ2xpZW50IiwicGFyc2VkIiwicmVsYXRpdmVUbyIsIm1zIiwiTk9STUFMIiwic3RhdGVNZXNzYWdlIiwiaW5pdGlhbGl6ZWQiLCJjbGllbnRWZXJzaW9uTWFwIiwic2NoZWR1bGVkTmF2VXBkYXRlQ2hlY2siLCJsb2dnZWRJbnZhbGlkT25seUlmQ2FjaGVkUmVxdWVzdCIsIm5nc3dTdGF0ZVBhdGgiLCJjbGFpbSIsImNsZWFudXBPbGRTd0NhY2hlcyIsImRlYnVnZ2VyIiwiYWN0aXZlIiwiYWN0aW9uIiwib25GZXRjaCIsIm9uTWVzc2FnZSIsIm9uUHVzaCIsIm9uQ2xpY2siLCJyZXF1ZXN0VXJsT2JqIiwiU0FGRV9NT0RFIiwidHJpZ2dlciIsImVuc3VyZUluaXRpYWxpemVkIiwiaXNDbGllbnQiLCJoYW5kbGVNZXNzYWdlIiwibXNnIiwiaGFuZGxlUHVzaCIsImhhbmRsZUNsaWNrIiwibm90aWZpY2F0aW9uIiwiaW5pdGlhbGl6ZSIsImlzTXNnQ2hlY2tGb3JVcGRhdGVzIiwiY2hlY2tGb3JVcGRhdGUiLCJyZXBvcnRTdGF0dXMiLCJzdGF0dXNOb25jZSIsImlzTXNnQWN0aXZhdGVVcGRhdGUiLCJ1cGRhdGVDbGllbnQiLCJicm9hZGNhc3QiLCJ0aXRsZSIsIm9wdGlvbnMiLCJzaG93Tm90aWZpY2F0aW9uIiwibm9uY2UiLCJleGlzdGluZyIsImV4aXN0aW5nVmVyc2lvbiIsIm1lcmdlSGFzaFdpdGhBcHBEYXRhIiwic3luYyIsIm5vdGljZSIsImFwcFZlcnNpb24iLCJhc3NpZ25WZXJzaW9uIiwibm90aWZ5Q2xpZW50c0Fib3V0VW5yZWNvdmVyYWJsZVN0YXRlIiwidmVyc2lvbkZhaWxlZCIsIm1hbmlmZXN0cyIsImFzc2lnbm1lbnRzIiwibGF0ZXN0IiwiY2xlYW51cENhY2hlcyIsImZldGNoTGF0ZXN0TWFuaWZlc3QiLCJzY2hlZHVsZUluaXRpYWxpemF0aW9uIiwiZGVidWdOYW1lIiwibG9va3VwVmVyc2lvbkJ5SGFzaCIsImlnbm9yZU9mZmxpbmVFcnJvciIsImRlbGV0ZUFsbENhY2hlcyIsInVucmVnaXN0ZXIiLCJvd25DYWNoZU5hbWVzIiwiYnJva2VuIiwiZW50cmllcyIsImJyb2tlbkhhc2giLCJhZmZlY3RlZENsaWVudHMiLCJFWElTVElOR19DTElFTlRTX09OTFkiLCJlcnIyIiwiY29uZmlnVmVyc2lvbiIsIm5vdGlmeUNsaWVudHNBYm91dFVwZGF0ZSIsInNldHVwVXBkYXRlIiwiYWN0aXZlQ2xpZW50cyIsIm1hdGNoQWxsIiwidXNlZFZlcnNpb25zIiwiU2V0Iiwib2Jzb2xldGVWZXJzaW9ucyIsImluc3RhbmNlIiwib2xkU3dDYWNoZU5hbWVzIiwidmFsdWVzIiwicHJldiIsInJlYXNvbiIsImF2YWlsYWJsZSIsInRhc2tEZXNjcmlwdGlvbnMiLCJ0YWJsZXMiXSwibWFwcGluZ3MiOiI7YUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFF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QUFPZ0csS0FBS2dULE1BQU1ZLE9BQU81RixPQUFPQyxLQUFLRCxHQUFRQSxFQUFLZ0ksT0FBT2hiLEdBQU9BLEVBQUlpTyxXQUFjakosS0FBSzZOLFFBQVErTSxnQkFBaEIsVUFFbkYsS0FBSzVnQixFQUFNOFQsR0FDUCxJQUFLOU4sS0FBSzBsQixPQUFPbmEsSUFBSXZSLEdBQU8sQ0FDeEIsTUFBTTBULEVBQVExTixLQUFLZ1QsTUFBTVksT0FBT2hTLEtBQUssR0FBRzVCLEtBQUs2TixRQUFRK00sc0JBQXNCNWdCLEtBQ3RFaVUsS0FBS0wsR0FBUyxJQUFJRCxFQUFXM1QsRUFBTTRULEVBQU81TixLQUFLNk4sUUFBU0MsSUFDN0Q5TixLQUFLMGxCLE9BQU92UCxJQUFJbmMsRUFBTTBULEdBRTFCLE9BQU8xTixLQUFLMGxCLE9BQU9wckIsSUFBSU4sS0E0cEY2QmdaLEVBQU9uRixJQTF5RnZFIiwiZmlsZSI6ImN1c3RvbS1uZ3N3LXdvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcbiIsIi8vIEV4cG9ydGluZyBjb25zdGFudHMgZGlyZWN0bHkgdG8gbWFpbnRhaW4gY29tcGF0YWJpbGl0eSB3aXRoIHYxXG4vLyBUaGVzZSBhcmUgZGVwcmVjYXRlZC4gUGxlYXNlIGRvbid0IGFkZCBhbnkgbmV3IGNvZGVzIGhlcmUuXG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuQUNDRVBURURcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBBQ0NFUFRFRCA9IDIwMjtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5CQURfR0FURVdBWVxuICpcbiAqICovXG5leHBvcnQgdmFyIEJBRF9HQVRFV0FZID0gNTAyO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgQkFEX1JFUVVFU1QgPSA0MDA7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuQ09ORkxJQ1RcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBDT05GTElDVCA9IDQwOTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5DT05USU5VRVxuICpcbiAqICovXG5leHBvcnQgdmFyIENPTlRJTlVFID0gMTAwO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLkNSRUFURURcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBDUkVBVEVEID0gMjAxO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLkVYUEVDVEFUSU9OX0ZBSUxFRFxuICpcbiAqICovXG5leHBvcnQgdmFyIEVYUEVDVEFUSU9OX0ZBSUxFRCA9IDQxNztcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5GQUlMRURfREVQRU5ERU5DWVxuICpcbiAqICovXG5leHBvcnQgdmFyIEZBSUxFRF9ERVBFTkRFTkNZID0gNDI0O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLkZPUkJJRERFTlxuICpcbiAqICovXG5leHBvcnQgdmFyIEZPUkJJRERFTiA9IDQwMztcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5HQVRFV0FZX1RJTUVPVVRcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBHQVRFV0FZX1RJTUVPVVQgPSA1MDQ7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuR09ORVxuICpcbiAqICovXG5leHBvcnQgdmFyIEdPTkUgPSA0MTA7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURURcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRCA9IDUwNTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5JTV9BX1RFQVBPVFxuICpcbiAqICovXG5leHBvcnQgdmFyIElNX0FfVEVBUE9UID0gNDE4O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLklOU1VGRklDSUVOVF9TUEFDRV9PTl9SRVNPVVJDRVxuICpcbiAqICovXG5leHBvcnQgdmFyIElOU1VGRklDSUVOVF9TUEFDRV9PTl9SRVNPVVJDRSA9IDQxOTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5JTlNVRkZJQ0lFTlRfU1RPUkFHRVxuICpcbiAqICovXG5leHBvcnQgdmFyIElOU1VGRklDSUVOVF9TVE9SQUdFID0gNTA3O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUlxuICpcbiAqICovXG5leHBvcnQgdmFyIElOVEVSTkFMX1NFUlZFUl9FUlJPUiA9IDUwMDtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5MRU5HVEhfUkVRVUlSRURcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBMRU5HVEhfUkVRVUlSRUQgPSA0MTE7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuTE9DS0VEXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgTE9DS0VEID0gNDIzO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLk1FVEhPRF9GQUlMVVJFXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgTUVUSE9EX0ZBSUxVUkUgPSA0MjA7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuTUVUSE9EX05PVF9BTExPV0VEXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgTUVUSE9EX05PVF9BTExPV0VEID0gNDA1O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLk1PVkVEX1BFUk1BTkVOVExZXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgTU9WRURfUEVSTUFORU5UTFkgPSAzMDE7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuTU9WRURfVEVNUE9SQVJJTFlcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBNT1ZFRF9URU1QT1JBUklMWSA9IDMwMjtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5NVUxUSV9TVEFUVVNcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBNVUxUSV9TVEFUVVMgPSAyMDc7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuTVVMVElQTEVfQ0hPSUNFU1xuICpcbiAqICovXG5leHBvcnQgdmFyIE1VTFRJUExFX0NIT0lDRVMgPSAzMDA7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuTkVUV09SS19BVVRIRU5USUNBVElPTl9SRVFVSVJFRFxuICpcbiAqICovXG5leHBvcnQgdmFyIE5FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQgPSA1MTE7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuTk9fQ09OVEVOVFxuICpcbiAqICovXG5leHBvcnQgdmFyIE5PX0NPTlRFTlQgPSAyMDQ7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuTk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT05cbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBOT05fQVVUSE9SSVRBVElWRV9JTkZPUk1BVElPTiA9IDIwMztcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5OT1RfQUNDRVBUQUJMRVxuICpcbiAqICovXG5leHBvcnQgdmFyIE5PVF9BQ0NFUFRBQkxFID0gNDA2O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLk5PVF9GT1VORFxuICpcbiAqICovXG5leHBvcnQgdmFyIE5PVF9GT1VORCA9IDQwNDtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5OT1RfSU1QTEVNRU5URURcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBOT1RfSU1QTEVNRU5URUQgPSA1MDE7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuTk9UX01PRElGSUVEXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgTk9UX01PRElGSUVEID0gMzA0O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLk9LXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgT0sgPSAyMDA7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuUEFSVElBTF9DT05URU5UXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgUEFSVElBTF9DT05URU5UID0gMjA2O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLlBBWU1FTlRfUkVRVUlSRURcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBQQVlNRU5UX1JFUVVJUkVEID0gNDAyO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLlBFUk1BTkVOVF9SRURJUkVDVFxuICpcbiAqICovXG5leHBvcnQgdmFyIFBFUk1BTkVOVF9SRURJUkVDVCA9IDMwODtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5QUkVDT05ESVRJT05fRkFJTEVEXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgUFJFQ09ORElUSU9OX0ZBSUxFRCA9IDQxMjtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5QUkVDT05ESVRJT05fUkVRVUlSRURcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBQUkVDT05ESVRJT05fUkVRVUlSRUQgPSA0Mjg7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuUFJPQ0VTU0lOR1xuICpcbiAqICovXG5leHBvcnQgdmFyIFBST0NFU1NJTkcgPSAxMDI7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuUFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRURcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRCA9IDQwNztcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5SRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgUkVRVUVTVF9IRUFERVJfRklFTERTX1RPT19MQVJHRSA9IDQzMTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5SRVFVRVNUX1RJTUVPVVRcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBSRVFVRVNUX1RJTUVPVVQgPSA0MDg7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuUkVRVUVTVF9UT09fTE9OR1xuICpcbiAqICovXG5leHBvcnQgdmFyIFJFUVVFU1RfVE9PX0xPTkcgPSA0MTM7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuUkVRVUVTVF9VUklfVE9PX0xPTkdcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBSRVFVRVNUX1VSSV9UT09fTE9ORyA9IDQxNDtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5SRVFVRVNURURfUkFOR0VfTk9UX1NBVElTRklBQkxFXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgUkVRVUVTVEVEX1JBTkdFX05PVF9TQVRJU0ZJQUJMRSA9IDQxNjtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5SRVNFVF9DT05URU5UXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgUkVTRVRfQ09OVEVOVCA9IDIwNTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgUGxlYXNlIHVzZSBTdGF0dXNDb2Rlcy5TRUVfT1RIRVJcbiAqXG4gKiAqL1xuZXhwb3J0IHZhciBTRUVfT1RIRVIgPSAzMDM7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuU0VSVklDRV9VTkFWQUlMQUJMRVxuICpcbiAqICovXG5leHBvcnQgdmFyIFNFUlZJQ0VfVU5BVkFJTEFCTEUgPSA1MDM7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuU1dJVENISU5HX1BST1RPQ09MU1xuICpcbiAqICovXG5leHBvcnQgdmFyIFNXSVRDSElOR19QUk9UT0NPTFMgPSAxMDE7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuVEVNUE9SQVJZX1JFRElSRUNUXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgVEVNUE9SQVJZX1JFRElSRUNUID0gMzA3O1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLlRPT19NQU5ZX1JFUVVFU1RTXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgVE9PX01BTllfUkVRVUVTVFMgPSA0Mjk7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuVU5BVVRIT1JJWkVEXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgVU5BVVRIT1JJWkVEID0gNDAxO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBQbGVhc2UgdXNlIFN0YXR1c0NvZGVzLlVOUFJPQ0VTU0FCTEVfRU5USVRZXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgVU5QUk9DRVNTQUJMRV9FTlRJVFkgPSA0MjI7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuVU5TVVBQT1JURURfTUVESUFfVFlQRVxuICpcbiAqICovXG5leHBvcnQgdmFyIFVOU1VQUE9SVEVEX01FRElBX1RZUEUgPSA0MTU7XG4vKipcbiAqIEBkZXByZWNhdGVkIFBsZWFzZSB1c2UgU3RhdHVzQ29kZXMuVVNFX1BST1hZXG4gKlxuICogKi9cbmV4cG9ydCB2YXIgVVNFX1BST1hZID0gMzA1O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIEFDQ0VQVEVEOiBBQ0NFUFRFRCxcbiAgICBCQURfR0FURVdBWTogQkFEX0dBVEVXQVksXG4gICAgQkFEX1JFUVVFU1Q6IEJBRF9SRVFVRVNULFxuICAgIENPTkZMSUNUOiBDT05GTElDVCxcbiAgICBDT05USU5VRTogQ09OVElOVUUsXG4gICAgQ1JFQVRFRDogQ1JFQVRFRCxcbiAgICBFWFBFQ1RBVElPTl9GQUlMRUQ6IEVYUEVDVEFUSU9OX0ZBSUxFRCxcbiAgICBGT1JCSURERU46IEZPUkJJRERFTixcbiAgICBHQVRFV0FZX1RJTUVPVVQ6IEdBVEVXQVlfVElNRU9VVCxcbiAgICBHT05FOiBHT05FLFxuICAgIEhUVFBfVkVSU0lPTl9OT1RfU1VQUE9SVEVEOiBIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRCxcbiAgICBJTV9BX1RFQVBPVDogSU1fQV9URUFQT1QsXG4gICAgSU5TVUZGSUNJRU5UX1NQQUNFX09OX1JFU09VUkNFOiBJTlNVRkZJQ0lFTlRfU1BBQ0VfT05fUkVTT1VSQ0UsXG4gICAgSU5TVUZGSUNJRU5UX1NUT1JBR0U6IElOU1VGRklDSUVOVF9TVE9SQUdFLFxuICAgIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgIExFTkdUSF9SRVFVSVJFRDogTEVOR1RIX1JFUVVJUkVELFxuICAgIExPQ0tFRDogTE9DS0VELFxuICAgIE1FVEhPRF9GQUlMVVJFOiBNRVRIT0RfRkFJTFVSRSxcbiAgICBNRVRIT0RfTk9UX0FMTE9XRUQ6IE1FVEhPRF9OT1RfQUxMT1dFRCxcbiAgICBNT1ZFRF9QRVJNQU5FTlRMWTogTU9WRURfUEVSTUFORU5UTFksXG4gICAgTU9WRURfVEVNUE9SQVJJTFk6IE1PVkVEX1RFTVBPUkFSSUxZLFxuICAgIE1VTFRJX1NUQVRVUzogTVVMVElfU1RBVFVTLFxuICAgIE1VTFRJUExFX0NIT0lDRVM6IE1VTFRJUExFX0NIT0lDRVMsXG4gICAgTkVUV09SS19BVVRIRU5USUNBVElPTl9SRVFVSVJFRDogTkVUV09SS19BVVRIRU5USUNBVElPTl9SRVFVSVJFRCxcbiAgICBOT19DT05URU5UOiBOT19DT05URU5ULFxuICAgIE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OOiBOT05fQVVUSE9SSVRBVElWRV9JTkZPUk1BVElPTixcbiAgICBOT1RfQUNDRVBUQUJMRTogTk9UX0FDQ0VQVEFCTEUsXG4gICAgTk9UX0ZPVU5EOiBOT1RfRk9VTkQsXG4gICAgTk9UX0lNUExFTUVOVEVEOiBOT1RfSU1QTEVNRU5URUQsXG4gICAgTk9UX01PRElGSUVEOiBOT1RfTU9ESUZJRUQsXG4gICAgT0s6IE9LLFxuICAgIFBBUlRJQUxfQ09OVEVOVDogUEFSVElBTF9DT05URU5ULFxuICAgIFBBWU1FTlRfUkVRVUlSRUQ6IFBBWU1FTlRfUkVRVUlSRUQsXG4gICAgUEVSTUFORU5UX1JFRElSRUNUOiBQRVJNQU5FTlRfUkVESVJFQ1QsXG4gICAgUFJFQ09ORElUSU9OX0ZBSUxFRDogUFJFQ09ORElUSU9OX0ZBSUxFRCxcbiAgICBQUkVDT05ESVRJT05fUkVRVUlSRUQ6IFBSRUNPTkRJVElPTl9SRVFVSVJFRCxcbiAgICBQUk9DRVNTSU5HOiBQUk9DRVNTSU5HLFxuICAgIFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEOiBQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRCxcbiAgICBSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFOiBSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFLFxuICAgIFJFUVVFU1RfVElNRU9VVDogUkVRVUVTVF9USU1FT1VULFxuICAgIFJFUVVFU1RfVE9PX0xPTkc6IFJFUVVFU1RfVE9PX0xPTkcsXG4gICAgUkVRVUVTVF9VUklfVE9PX0xPTkc6IFJFUVVFU1RfVVJJX1RPT19MT05HLFxuICAgIFJFUVVFU1RFRF9SQU5HRV9OT1RfU0FUSVNGSUFCTEU6IFJFUVVFU1RFRF9SQU5HRV9OT1RfU0FUSVNGSUFCTEUsXG4gICAgUkVTRVRfQ09OVEVOVDogUkVTRVRfQ09OVEVOVCxcbiAgICBTRUVfT1RIRVI6IFNFRV9PVEhFUixcbiAgICBTRVJWSUNFX1VOQVZBSUxBQkxFOiBTRVJWSUNFX1VOQVZBSUxBQkxFLFxuICAgIFNXSVRDSElOR19QUk9UT0NPTFM6IFNXSVRDSElOR19QUk9UT0NPTFMsXG4gICAgVEVNUE9SQVJZX1JFRElSRUNUOiBURU1QT1JBUllfUkVESVJFQ1QsXG4gICAgVE9PX01BTllfUkVRVUVTVFM6IFRPT19NQU5ZX1JFUVVFU1RTLFxuICAgIFVOQVVUSE9SSVpFRDogVU5BVVRIT1JJWkVELFxuICAgIFVOUFJPQ0VTU0FCTEVfRU5USVRZOiBVTlBST0NFU1NBQkxFX0VOVElUWSxcbiAgICBVTlNVUFBPUlRFRF9NRURJQV9UWVBFOiBVTlNVUFBPUlRFRF9NRURJQV9UWVBFLFxuICAgIFVTRV9QUk9YWTogVVNFX1BST1hZLFxufTtcbiIsIi8vIEdlbmVyYXRlZCBmaWxlLiBEbyBub3QgZWRpdFxuZXhwb3J0IHZhciBzdGF0dXNDb2RlVG9SZWFzb25QaHJhc2UgPSB7XG4gICAgXCIyMDJcIjogXCJBY2NlcHRlZFwiLFxuICAgIFwiNTAyXCI6IFwiQmFkIEdhdGV3YXlcIixcbiAgICBcIjQwMFwiOiBcIkJhZCBSZXF1ZXN0XCIsXG4gICAgXCI0MDlcIjogXCJDb25mbGljdFwiLFxuICAgIFwiMTAwXCI6IFwiQ29udGludWVcIixcbiAgICBcIjIwMVwiOiBcIkNyZWF0ZWRcIixcbiAgICBcIjQxN1wiOiBcIkV4cGVjdGF0aW9uIEZhaWxlZFwiLFxuICAgIFwiNDI0XCI6IFwiRmFpbGVkIERlcGVuZGVuY3lcIixcbiAgICBcIjQwM1wiOiBcIkZvcmJpZGRlblwiLFxuICAgIFwiNTA0XCI6IFwiR2F0ZXdheSBUaW1lb3V0XCIsXG4gICAgXCI0MTBcIjogXCJHb25lXCIsXG4gICAgXCI1MDVcIjogXCJIVFRQIFZlcnNpb24gTm90IFN1cHBvcnRlZFwiLFxuICAgIFwiNDE4XCI6IFwiSSdtIGEgdGVhcG90XCIsXG4gICAgXCI0MTlcIjogXCJJbnN1ZmZpY2llbnQgU3BhY2Ugb24gUmVzb3VyY2VcIixcbiAgICBcIjUwN1wiOiBcIkluc3VmZmljaWVudCBTdG9yYWdlXCIsXG4gICAgXCI1MDBcIjogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIixcbiAgICBcIjQxMVwiOiBcIkxlbmd0aCBSZXF1aXJlZFwiLFxuICAgIFwiNDIzXCI6IFwiTG9ja2VkXCIsXG4gICAgXCI0MjBcIjogXCJNZXRob2QgRmFpbHVyZVwiLFxuICAgIFwiNDA1XCI6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIsXG4gICAgXCIzMDFcIjogXCJNb3ZlZCBQZXJtYW5lbnRseVwiLFxuICAgIFwiMzAyXCI6IFwiTW92ZWQgVGVtcG9yYXJpbHlcIixcbiAgICBcIjIwN1wiOiBcIk11bHRpLVN0YXR1c1wiLFxuICAgIFwiMzAwXCI6IFwiTXVsdGlwbGUgQ2hvaWNlc1wiLFxuICAgIFwiNTExXCI6IFwiTmV0d29yayBBdXRoZW50aWNhdGlvbiBSZXF1aXJlZFwiLFxuICAgIFwiMjA0XCI6IFwiTm8gQ29udGVudFwiLFxuICAgIFwiMjAzXCI6IFwiTm9uIEF1dGhvcml0YXRpdmUgSW5mb3JtYXRpb25cIixcbiAgICBcIjQwNlwiOiBcIk5vdCBBY2NlcHRhYmxlXCIsXG4gICAgXCI0MDRcIjogXCJOb3QgRm91bmRcIixcbiAgICBcIjUwMVwiOiBcIk5vdCBJbXBsZW1lbnRlZFwiLFxuICAgIFwiMzA0XCI6IFwiTm90IE1vZGlmaWVkXCIsXG4gICAgXCIyMDBcIjogXCJPS1wiLFxuICAgIFwiMjA2XCI6IFwiUGFydGlhbCBDb250ZW50XCIsXG4gICAgXCI0MDJcIjogXCJQYXltZW50IFJlcXVpcmVkXCIsXG4gICAgXCIzMDhcIjogXCJQZXJtYW5lbnQgUmVkaXJlY3RcIixcbiAgICBcIjQxMlwiOiBcIlByZWNvbmRpdGlvbiBGYWlsZWRcIixcbiAgICBcIjQyOFwiOiBcIlByZWNvbmRpdGlvbiBSZXF1aXJlZFwiLFxuICAgIFwiMTAyXCI6IFwiUHJvY2Vzc2luZ1wiLFxuICAgIFwiNDA3XCI6IFwiUHJveHkgQXV0aGVudGljYXRpb24gUmVxdWlyZWRcIixcbiAgICBcIjQzMVwiOiBcIlJlcXVlc3QgSGVhZGVyIEZpZWxkcyBUb28gTGFyZ2VcIixcbiAgICBcIjQwOFwiOiBcIlJlcXVlc3QgVGltZW91dFwiLFxuICAgIFwiNDEzXCI6IFwiUmVxdWVzdCBFbnRpdHkgVG9vIExhcmdlXCIsXG4gICAgXCI0MTRcIjogXCJSZXF1ZXN0LVVSSSBUb28gTG9uZ1wiLFxuICAgIFwiNDE2XCI6IFwiUmVxdWVzdGVkIFJhbmdlIE5vdCBTYXRpc2ZpYWJsZVwiLFxuICAgIFwiMjA1XCI6IFwiUmVzZXQgQ29udGVudFwiLFxuICAgIFwiMzAzXCI6IFwiU2VlIE90aGVyXCIsXG4gICAgXCI1MDNcIjogXCJTZXJ2aWNlIFVuYXZhaWxhYmxlXCIsXG4gICAgXCIxMDFcIjogXCJTd2l0Y2hpbmcgUHJvdG9jb2xzXCIsXG4gICAgXCIzMDdcIjogXCJUZW1wb3JhcnkgUmVkaXJlY3RcIixcbiAgICBcIjQyOVwiOiBcIlRvbyBNYW55IFJlcXVlc3RzXCIsXG4gICAgXCI0MDFcIjogXCJVbmF1dGhvcml6ZWRcIixcbiAgICBcIjQ1MVwiOiBcIlVuYXZhaWxhYmxlIEZvciBMZWdhbCBSZWFzb25zXCIsXG4gICAgXCI0MjJcIjogXCJVbnByb2Nlc3NhYmxlIEVudGl0eVwiLFxuICAgIFwiNDE1XCI6IFwiVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZVwiLFxuICAgIFwiMzA1XCI6IFwiVXNlIFByb3h5XCJcbn07XG5leHBvcnQgdmFyIHJlYXNvblBocmFzZVRvU3RhdHVzQ29kZSA9IHtcbiAgICBcIkFjY2VwdGVkXCI6IDIwMixcbiAgICBcIkJhZCBHYXRld2F5XCI6IDUwMixcbiAgICBcIkJhZCBSZXF1ZXN0XCI6IDQwMCxcbiAgICBcIkNvbmZsaWN0XCI6IDQwOSxcbiAgICBcIkNvbnRpbnVlXCI6IDEwMCxcbiAgICBcIkNyZWF0ZWRcIjogMjAxLFxuICAgIFwiRXhwZWN0YXRpb24gRmFpbGVkXCI6IDQxNyxcbiAgICBcIkZhaWxlZCBEZXBlbmRlbmN5XCI6IDQyNCxcbiAgICBcIkZvcmJpZGRlblwiOiA0MDMsXG4gICAgXCJHYXRld2F5IFRpbWVvdXRcIjogNTA0LFxuICAgIFwiR29uZVwiOiA0MTAsXG4gICAgXCJIVFRQIFZlcnNpb24gTm90IFN1cHBvcnRlZFwiOiA1MDUsXG4gICAgXCJJJ20gYSB0ZWFwb3RcIjogNDE4LFxuICAgIFwiSW5zdWZmaWNpZW50IFNwYWNlIG9uIFJlc291cmNlXCI6IDQxOSxcbiAgICBcIkluc3VmZmljaWVudCBTdG9yYWdlXCI6IDUwNyxcbiAgICBcIkludGVybmFsIFNlcnZlciBFcnJvclwiOiA1MDAsXG4gICAgXCJMZW5ndGggUmVxdWlyZWRcIjogNDExLFxuICAgIFwiTG9ja2VkXCI6IDQyMyxcbiAgICBcIk1ldGhvZCBGYWlsdXJlXCI6IDQyMCxcbiAgICBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiOiA0MDUsXG4gICAgXCJNb3ZlZCBQZXJtYW5lbnRseVwiOiAzMDEsXG4gICAgXCJNb3ZlZCBUZW1wb3JhcmlseVwiOiAzMDIsXG4gICAgXCJNdWx0aS1TdGF0dXNcIjogMjA3LFxuICAgIFwiTXVsdGlwbGUgQ2hvaWNlc1wiOiAzMDAsXG4gICAgXCJOZXR3b3JrIEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkXCI6IDUxMSxcbiAgICBcIk5vIENvbnRlbnRcIjogMjA0LFxuICAgIFwiTm9uIEF1dGhvcml0YXRpdmUgSW5mb3JtYXRpb25cIjogMjAzLFxuICAgIFwiTm90IEFjY2VwdGFibGVcIjogNDA2LFxuICAgIFwiTm90IEZvdW5kXCI6IDQwNCxcbiAgICBcIk5vdCBJbXBsZW1lbnRlZFwiOiA1MDEsXG4gICAgXCJOb3QgTW9kaWZpZWRcIjogMzA0LFxuICAgIFwiT0tcIjogMjAwLFxuICAgIFwiUGFydGlhbCBDb250ZW50XCI6IDIwNixcbiAgICBcIlBheW1lbnQgUmVxdWlyZWRcIjogNDAyLFxuICAgIFwiUGVybWFuZW50IFJlZGlyZWN0XCI6IDMwOCxcbiAgICBcIlByZWNvbmRpdGlvbiBGYWlsZWRcIjogNDEyLFxuICAgIFwiUHJlY29uZGl0aW9uIFJlcXVpcmVkXCI6IDQyOCxcbiAgICBcIlByb2Nlc3NpbmdcIjogMTAyLFxuICAgIFwiUHJveHkgQXV0aGVudGljYXRpb24gUmVxdWlyZWRcIjogNDA3LFxuICAgIFwiUmVxdWVzdCBIZWFkZXIgRmllbGRzIFRvbyBMYXJnZVwiOiA0MzEsXG4gICAgXCJSZXF1ZXN0IFRpbWVvdXRcIjogNDA4LFxuICAgIFwiUmVxdWVzdCBFbnRpdHkgVG9vIExhcmdlXCI6IDQxMyxcbiAgICBcIlJlcXVlc3QtVVJJIFRvbyBMb25nXCI6IDQxNCxcbiAgICBcIlJlcXVlc3RlZCBSYW5nZSBOb3QgU2F0aXNmaWFibGVcIjogNDE2LFxuICAgIFwiUmVzZXQgQ29udGVudFwiOiAyMDUsXG4gICAgXCJTZWUgT3RoZXJcIjogMzAzLFxuICAgIFwiU2VydmljZSBVbmF2YWlsYWJsZVwiOiA1MDMsXG4gICAgXCJTd2l0Y2hpbmcgUHJvdG9jb2xzXCI6IDEwMSxcbiAgICBcIlRlbXBvcmFyeSBSZWRpcmVjdFwiOiAzMDcsXG4gICAgXCJUb28gTWFueSBSZXF1ZXN0c1wiOiA0MjksXG4gICAgXCJVbmF1dGhvcml6ZWRcIjogNDAxLFxuICAgIFwiVW5hdmFpbGFibGUgRm9yIExlZ2FsIFJlYXNvbnNcIjogNDUxLFxuICAgIFwiVW5wcm9jZXNzYWJsZSBFbnRpdHlcIjogNDIyLFxuICAgIFwiVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZVwiOiA0MTUsXG4gICAgXCJVc2UgUHJveHlcIjogMzA1XG59O1xuIiwiaW1wb3J0IHsgc3RhdHVzQ29kZVRvUmVhc29uUGhyYXNlLCByZWFzb25QaHJhc2VUb1N0YXR1c0NvZGUsIH0gZnJvbSAnLi91dGlscyc7XG4vKipcbiAqIFJldHVybnMgdGhlIHJlYXNvbiBwaHJhc2UgZm9yIHRoZSBnaXZlbiBzdGF0dXMgY29kZS5cbiAqIElmIHRoZSBnaXZlbiBzdGF0dXMgY29kZSBkb2VzIG5vdCBleGlzdCwgYW4gZXJyb3IgaXMgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gc3RhdHVzQ29kZSBUaGUgSFRUUCBzdGF0dXMgY29kZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGFzc29jaWF0ZWQgcmVhc29uIHBocmFzZSAoZS5nLiBcIkJhZCBSZXF1ZXN0XCIsIFwiT0tcIilcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVhc29uUGhyYXNlKHN0YXR1c0NvZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gc3RhdHVzQ29kZVRvUmVhc29uUGhyYXNlW3N0YXR1c0NvZGUudG9TdHJpbmcoKV07XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhdHVzIGNvZGUgZG9lcyBub3QgZXhpc3Q6IFwiICsgc3RhdHVzQ29kZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIHN0YXR1cyBjb2RlIGZvciB0aGUgZ2l2ZW4gcmVhc29uIHBocmFzZS5cbiAqIElmIHRoZSBnaXZlbiByZWFzb24gcGhyYXNlIGRvZXMgbm90IGV4aXN0LCB1bmRlZmluZWQgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvblBocmFzZSBUaGUgSFRUUCByZWFzb24gcGhyYXNlIChlLmcuIFwiQmFkIFJlcXVlc3RcIiwgXCJPS1wiKVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGFzc29jaWF0ZWQgc3RhdHVzIGNvZGVcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzQ29kZShyZWFzb25QaHJhc2UpIHtcbiAgICB2YXIgcmVzdWx0ID0gcmVhc29uUGhyYXNlVG9TdGF0dXNDb2RlW3JlYXNvblBocmFzZV07XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhc29uIHBocmFzZSBkb2VzIG5vdCBleGlzdDogXCIgKyByZWFzb25QaHJhc2UpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICpcbiAqIFJldHVybnMgdGhlIHJlYXNvbiBwaHJhc2UgZm9yIHRoZSBnaXZlbiBzdGF0dXMgY29kZS5cbiAqIElmIHRoZSBnaXZlbiBzdGF0dXMgY29kZSBkb2VzIG5vdCBleGlzdCwgdW5kZWZpbmVkIGlzIHJldHVybmVkLlxuICpcbiAqIERlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgZ2V0UmVhc29uUGhyYXNlXG4gKlxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBzdGF0dXNDb2RlIFRoZSBIVFRQIHN0YXR1cyBjb2RlXG4gKiBAcmV0dXJucyB7c3RyaW5nfHVuZGVmaW5lZH0gVGhlIGFzc29jaWF0ZWQgcmVhc29uIHBocmFzZSAoZS5nLiBcIkJhZCBSZXF1ZXN0XCIsIFwiT0tcIilcbiAqICovXG5leHBvcnQgdmFyIGdldFN0YXR1c1RleHQgPSBnZXRSZWFzb25QaHJhc2U7XG4iLCIvLyBHZW5lcmF0ZWQgZmlsZS4gRG8gbm90IGVkaXRcbmV4cG9ydCB2YXIgU3RhdHVzQ29kZXM7XG4oZnVuY3Rpb24gKFN0YXR1c0NvZGVzKSB7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjNcbiAgICAgKlxuICAgICAqIFRoZSByZXF1ZXN0IGhhcyBiZWVuIHJlY2VpdmVkIGJ1dCBub3QgeWV0IGFjdGVkIHVwb24uIEl0IGlzIG5vbi1jb21taXR0YWwsIG1lYW5pbmcgdGhhdCB0aGVyZSBpcyBubyB3YXkgaW4gSFRUUCB0byBsYXRlciBzZW5kIGFuIGFzeW5jaHJvbm91cyByZXNwb25zZSBpbmRpY2F0aW5nIHRoZSBvdXRjb21lIG9mIHByb2Nlc3NpbmcgdGhlIHJlcXVlc3QuIEl0IGlzIGludGVuZGVkIGZvciBjYXNlcyB3aGVyZSBhbm90aGVyIHByb2Nlc3Mgb3Igc2VydmVyIGhhbmRsZXMgdGhlIHJlcXVlc3QsIG9yIGZvciBiYXRjaCBwcm9jZXNzaW5nLlxuICAgICAqL1xuICAgIFN0YXR1c0NvZGVzW1N0YXR1c0NvZGVzW1wiQUNDRVBURURcIl0gPSAyMDJdID0gXCJBQ0NFUFRFRFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4zXG4gICAgICpcbiAgICAgKiBUaGlzIGVycm9yIHJlc3BvbnNlIG1lYW5zIHRoYXQgdGhlIHNlcnZlciwgd2hpbGUgd29ya2luZyBhcyBhIGdhdGV3YXkgdG8gZ2V0IGEgcmVzcG9uc2UgbmVlZGVkIHRvIGhhbmRsZSB0aGUgcmVxdWVzdCwgZ290IGFuIGludmFsaWQgcmVzcG9uc2UuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJCQURfR0FURVdBWVwiXSA9IDUwMl0gPSBcIkJBRF9HQVRFV0FZXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjFcbiAgICAgKlxuICAgICAqIFRoaXMgcmVzcG9uc2UgbWVhbnMgdGhhdCBzZXJ2ZXIgY291bGQgbm90IHVuZGVyc3RhbmQgdGhlIHJlcXVlc3QgZHVlIHRvIGludmFsaWQgc3ludGF4LlxuICAgICAqL1xuICAgIFN0YXR1c0NvZGVzW1N0YXR1c0NvZGVzW1wiQkFEX1JFUVVFU1RcIl0gPSA0MDBdID0gXCJCQURfUkVRVUVTVFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS44XG4gICAgICpcbiAgICAgKiBUaGlzIHJlc3BvbnNlIGlzIHNlbnQgd2hlbiBhIHJlcXVlc3QgY29uZmxpY3RzIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNlcnZlci5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIkNPTkZMSUNUXCJdID0gNDA5XSA9IFwiQ09ORkxJQ1RcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjIuMVxuICAgICAqXG4gICAgICogVGhpcyBpbnRlcmltIHJlc3BvbnNlIGluZGljYXRlcyB0aGF0IGV2ZXJ5dGhpbmcgc28gZmFyIGlzIE9LIGFuZCB0aGF0IHRoZSBjbGllbnQgc2hvdWxkIGNvbnRpbnVlIHdpdGggdGhlIHJlcXVlc3Qgb3IgaWdub3JlIGl0IGlmIGl0IGlzIGFscmVhZHkgZmluaXNoZWQuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJDT05USU5VRVwiXSA9IDEwMF0gPSBcIkNPTlRJTlVFXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjJcbiAgICAgKlxuICAgICAqIFRoZSByZXF1ZXN0IGhhcyBzdWNjZWVkZWQgYW5kIGEgbmV3IHJlc291cmNlIGhhcyBiZWVuIGNyZWF0ZWQgYXMgYSByZXN1bHQgb2YgaXQuIFRoaXMgaXMgdHlwaWNhbGx5IHRoZSByZXNwb25zZSBzZW50IGFmdGVyIGEgUFVUIHJlcXVlc3QuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJDUkVBVEVEXCJdID0gMjAxXSA9IFwiQ1JFQVRFRFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xNFxuICAgICAqXG4gICAgICogVGhpcyByZXNwb25zZSBjb2RlIG1lYW5zIHRoZSBleHBlY3RhdGlvbiBpbmRpY2F0ZWQgYnkgdGhlIEV4cGVjdCByZXF1ZXN0IGhlYWRlciBmaWVsZCBjYW4ndCBiZSBtZXQgYnkgdGhlIHNlcnZlci5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIkVYUEVDVEFUSU9OX0ZBSUxFRFwiXSA9IDQxN10gPSBcIkVYUEVDVEFUSU9OX0ZBSUxFRFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjVcbiAgICAgKlxuICAgICAqIFRoZSByZXF1ZXN0IGZhaWxlZCBkdWUgdG8gZmFpbHVyZSBvZiBhIHByZXZpb3VzIHJlcXVlc3QuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJGQUlMRURfREVQRU5ERU5DWVwiXSA9IDQyNF0gPSBcIkZBSUxFRF9ERVBFTkRFTkNZXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjNcbiAgICAgKlxuICAgICAqIFRoZSBjbGllbnQgZG9lcyBub3QgaGF2ZSBhY2Nlc3MgcmlnaHRzIHRvIHRoZSBjb250ZW50LCBpLmUuIHRoZXkgYXJlIHVuYXV0aG9yaXplZCwgc28gc2VydmVyIGlzIHJlamVjdGluZyB0byBnaXZlIHByb3BlciByZXNwb25zZS4gVW5saWtlIDQwMSwgdGhlIGNsaWVudCdzIGlkZW50aXR5IGlzIGtub3duIHRvIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJGT1JCSURERU5cIl0gPSA0MDNdID0gXCJGT1JCSURERU5cIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNVxuICAgICAqXG4gICAgICogVGhpcyBlcnJvciByZXNwb25zZSBpcyBnaXZlbiB3aGVuIHRoZSBzZXJ2ZXIgaXMgYWN0aW5nIGFzIGEgZ2F0ZXdheSBhbmQgY2Fubm90IGdldCBhIHJlc3BvbnNlIGluIHRpbWUuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJHQVRFV0FZX1RJTUVPVVRcIl0gPSA1MDRdID0gXCJHQVRFV0FZX1RJTUVPVVRcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuOVxuICAgICAqXG4gICAgICogVGhpcyByZXNwb25zZSB3b3VsZCBiZSBzZW50IHdoZW4gdGhlIHJlcXVlc3RlZCBjb250ZW50IGhhcyBiZWVuIHBlcm1lbmFudGx5IGRlbGV0ZWQgZnJvbSBzZXJ2ZXIsIHdpdGggbm8gZm9yd2FyZGluZyBhZGRyZXNzLiBDbGllbnRzIGFyZSBleHBlY3RlZCB0byByZW1vdmUgdGhlaXIgY2FjaGVzIGFuZCBsaW5rcyB0byB0aGUgcmVzb3VyY2UuIFRoZSBIVFRQIHNwZWNpZmljYXRpb24gaW50ZW5kcyB0aGlzIHN0YXR1cyBjb2RlIHRvIGJlIHVzZWQgZm9yIFwibGltaXRlZC10aW1lLCBwcm9tb3Rpb25hbCBzZXJ2aWNlc1wiLiBBUElzIHNob3VsZCBub3QgZmVlbCBjb21wZWxsZWQgdG8gaW5kaWNhdGUgcmVzb3VyY2VzIHRoYXQgaGF2ZSBiZWVuIGRlbGV0ZWQgd2l0aCB0aGlzIHN0YXR1cyBjb2RlLlxuICAgICAqL1xuICAgIFN0YXR1c0NvZGVzW1N0YXR1c0NvZGVzW1wiR09ORVwiXSA9IDQxMF0gPSBcIkdPTkVcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNlxuICAgICAqXG4gICAgICogVGhlIEhUVFAgdmVyc2lvbiB1c2VkIGluIHRoZSByZXF1ZXN0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHNlcnZlci5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIkhUVFBfVkVSU0lPTl9OT1RfU1VQUE9SVEVEXCJdID0gNTA1XSA9IFwiSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURURcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzIzMjQjc2VjdGlvbi0yLjMuMlxuICAgICAqXG4gICAgICogQW55IGF0dGVtcHQgdG8gYnJldyBjb2ZmZWUgd2l0aCBhIHRlYXBvdCBzaG91bGQgcmVzdWx0IGluIHRoZSBlcnJvciBjb2RlIFwiNDE4IEknbSBhIHRlYXBvdFwiLiBUaGUgcmVzdWx0aW5nIGVudGl0eSBib2R5IE1BWSBiZSBzaG9ydCBhbmQgc3RvdXQuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJJTV9BX1RFQVBPVFwiXSA9IDQxOF0gPSBcIklNX0FfVEVBUE9UXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNlxuICAgICAqXG4gICAgICogVGhlIDUwNyAoSW5zdWZmaWNpZW50IFN0b3JhZ2UpIHN0YXR1cyBjb2RlIG1lYW5zIHRoZSBtZXRob2QgY291bGQgbm90IGJlIHBlcmZvcm1lZCBvbiB0aGUgcmVzb3VyY2UgYmVjYXVzZSB0aGUgc2VydmVyIGlzIHVuYWJsZSB0byBzdG9yZSB0aGUgcmVwcmVzZW50YXRpb24gbmVlZGVkIHRvIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZSB0aGUgcmVxdWVzdC4gVGhpcyBjb25kaXRpb24gaXMgY29uc2lkZXJlZCB0byBiZSB0ZW1wb3JhcnkuIElmIHRoZSByZXF1ZXN0IHdoaWNoIHJlY2VpdmVkIHRoaXMgc3RhdHVzIGNvZGUgd2FzIHRoZSByZXN1bHQgb2YgYSB1c2VyIGFjdGlvbiwgdGhlIHJlcXVlc3QgTVVTVCBOT1QgYmUgcmVwZWF0ZWQgdW50aWwgaXQgaXMgcmVxdWVzdGVkIGJ5IGEgc2VwYXJhdGUgdXNlciBhY3Rpb24uXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJJTlNVRkZJQ0lFTlRfU1BBQ0VfT05fUkVTT1VSQ0VcIl0gPSA0MTldID0gXCJJTlNVRkZJQ0lFTlRfU1BBQ0VfT05fUkVTT1VSQ0VcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC42XG4gICAgICpcbiAgICAgKiBUaGUgc2VydmVyIGhhcyBhbiBpbnRlcm5hbCBjb25maWd1cmF0aW9uIGVycm9yOiB0aGUgY2hvc2VuIHZhcmlhbnQgcmVzb3VyY2UgaXMgY29uZmlndXJlZCB0byBlbmdhZ2UgaW4gdHJhbnNwYXJlbnQgY29udGVudCBuZWdvdGlhdGlvbiBpdHNlbGYsIGFuZCBpcyB0aGVyZWZvcmUgbm90IGEgcHJvcGVyIGVuZCBwb2ludCBpbiB0aGUgbmVnb3RpYXRpb24gcHJvY2Vzcy5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIklOU1VGRklDSUVOVF9TVE9SQUdFXCJdID0gNTA3XSA9IFwiSU5TVUZGSUNJRU5UX1NUT1JBR0VcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMVxuICAgICAqXG4gICAgICogVGhlIHNlcnZlciBlbmNvdW50ZXJlZCBhbiB1bmV4cGVjdGVkIGNvbmRpdGlvbiB0aGF0IHByZXZlbnRlZCBpdCBmcm9tIGZ1bGZpbGxpbmcgdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJJTlRFUk5BTF9TRVJWRVJfRVJST1JcIl0gPSA1MDBdID0gXCJJTlRFUk5BTF9TRVJWRVJfRVJST1JcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTBcbiAgICAgKlxuICAgICAqIFRoZSBzZXJ2ZXIgcmVqZWN0ZWQgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgQ29udGVudC1MZW5ndGggaGVhZGVyIGZpZWxkIGlzIG5vdCBkZWZpbmVkIGFuZCB0aGUgc2VydmVyIHJlcXVpcmVzIGl0LlxuICAgICAqL1xuICAgIFN0YXR1c0NvZGVzW1N0YXR1c0NvZGVzW1wiTEVOR1RIX1JFUVVJUkVEXCJdID0gNDExXSA9IFwiTEVOR1RIX1JFUVVJUkVEXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNFxuICAgICAqXG4gICAgICogVGhlIHJlc291cmNlIHRoYXQgaXMgYmVpbmcgYWNjZXNzZWQgaXMgbG9ja2VkLlxuICAgICAqL1xuICAgIFN0YXR1c0NvZGVzW1N0YXR1c0NvZGVzW1wiTE9DS0VEXCJdID0gNDIzXSA9IFwiTE9DS0VEXCI7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9yZmNkaWZmP2RpZmZ0eXBlPS0taHdkaWZmJnVybDI9ZHJhZnQtaWV0Zi13ZWJkYXYtcHJvdG9jb2wtMDYudHh0XG4gICAgICpcbiAgICAgKiBBIGRlcHJlY2F0ZWQgcmVzcG9uc2UgdXNlZCBieSB0aGUgU3ByaW5nIEZyYW1ld29yayB3aGVuIGEgbWV0aG9kIGhhcyBmYWlsZWQuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJNRVRIT0RfRkFJTFVSRVwiXSA9IDQyMF0gPSBcIk1FVEhPRF9GQUlMVVJFXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjVcbiAgICAgKlxuICAgICAqIFRoZSByZXF1ZXN0IG1ldGhvZCBpcyBrbm93biBieSB0aGUgc2VydmVyIGJ1dCBoYXMgYmVlbiBkaXNhYmxlZCBhbmQgY2Fubm90IGJlIHVzZWQuIEZvciBleGFtcGxlLCBhbiBBUEkgbWF5IGZvcmJpZCBERUxFVEUtaW5nIGEgcmVzb3VyY2UuIFRoZSB0d28gbWFuZGF0b3J5IG1ldGhvZHMsIEdFVCBhbmQgSEVBRCwgbXVzdCBuZXZlciBiZSBkaXNhYmxlZCBhbmQgc2hvdWxkIG5vdCByZXR1cm4gdGhpcyBlcnJvciBjb2RlLlxuICAgICAqL1xuICAgIFN0YXR1c0NvZGVzW1N0YXR1c0NvZGVzW1wiTUVUSE9EX05PVF9BTExPV0VEXCJdID0gNDA1XSA9IFwiTUVUSE9EX05PVF9BTExPV0VEXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjJcbiAgICAgKlxuICAgICAqIFRoaXMgcmVzcG9uc2UgY29kZSBtZWFucyB0aGF0IFVSSSBvZiByZXF1ZXN0ZWQgcmVzb3VyY2UgaGFzIGJlZW4gY2hhbmdlZC4gUHJvYmFibHksIG5ldyBVUkkgd291bGQgYmUgZ2l2ZW4gaW4gdGhlIHJlc3BvbnNlLlxuICAgICAqL1xuICAgIFN0YXR1c0NvZGVzW1N0YXR1c0NvZGVzW1wiTU9WRURfUEVSTUFORU5UTFlcIl0gPSAzMDFdID0gXCJNT1ZFRF9QRVJNQU5FTlRMWVwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4zXG4gICAgICpcbiAgICAgKiBUaGlzIHJlc3BvbnNlIGNvZGUgbWVhbnMgdGhhdCBVUkkgb2YgcmVxdWVzdGVkIHJlc291cmNlIGhhcyBiZWVuIGNoYW5nZWQgdGVtcG9yYXJpbHkuIE5ldyBjaGFuZ2VzIGluIHRoZSBVUkkgbWlnaHQgYmUgbWFkZSBpbiB0aGUgZnV0dXJlLiBUaGVyZWZvcmUsIHRoaXMgc2FtZSBVUkkgc2hvdWxkIGJlIHVzZWQgYnkgdGhlIGNsaWVudCBpbiBmdXR1cmUgcmVxdWVzdHMuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJNT1ZFRF9URU1QT1JBUklMWVwiXSA9IDMwMl0gPSBcIk1PVkVEX1RFTVBPUkFSSUxZXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMlxuICAgICAqXG4gICAgICogQSBNdWx0aS1TdGF0dXMgcmVzcG9uc2UgY29udmV5cyBpbmZvcm1hdGlvbiBhYm91dCBtdWx0aXBsZSByZXNvdXJjZXMgaW4gc2l0dWF0aW9ucyB3aGVyZSBtdWx0aXBsZSBzdGF0dXMgY29kZXMgbWlnaHQgYmUgYXBwcm9wcmlhdGUuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJNVUxUSV9TVEFUVVNcIl0gPSAyMDddID0gXCJNVUxUSV9TVEFUVVNcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuMVxuICAgICAqXG4gICAgICogVGhlIHJlcXVlc3QgaGFzIG1vcmUgdGhhbiBvbmUgcG9zc2libGUgcmVzcG9uc2VzLiBVc2VyLWFnZW50IG9yIHVzZXIgc2hvdWxkIGNob29zZSBvbmUgb2YgdGhlbS4gVGhlcmUgaXMgbm8gc3RhbmRhcmRpemVkIHdheSB0byBjaG9vc2Ugb25lIG9mIHRoZSByZXNwb25zZXMuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJNVUxUSVBMRV9DSE9JQ0VTXCJdID0gMzAwXSA9IFwiTVVMVElQTEVfQ0hPSUNFU1wiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTZcbiAgICAgKlxuICAgICAqIFRoZSA1MTEgc3RhdHVzIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIGNsaWVudCBuZWVkcyB0byBhdXRoZW50aWNhdGUgdG8gZ2FpbiBuZXR3b3JrIGFjY2Vzcy5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIk5FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRURcIl0gPSA1MTFdID0gXCJORVRXT1JLX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjVcbiAgICAgKlxuICAgICAqIFRoZXJlIGlzIG5vIGNvbnRlbnQgdG8gc2VuZCBmb3IgdGhpcyByZXF1ZXN0LCBidXQgdGhlIGhlYWRlcnMgbWF5IGJlIHVzZWZ1bC4gVGhlIHVzZXItYWdlbnQgbWF5IHVwZGF0ZSBpdHMgY2FjaGVkIGhlYWRlcnMgZm9yIHRoaXMgcmVzb3VyY2Ugd2l0aCB0aGUgbmV3IG9uZXMuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJOT19DT05URU5UXCJdID0gMjA0XSA9IFwiTk9fQ09OVEVOVFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy40XG4gICAgICpcbiAgICAgKiBUaGlzIHJlc3BvbnNlIGNvZGUgbWVhbnMgcmV0dXJuZWQgbWV0YS1pbmZvcm1hdGlvbiBzZXQgaXMgbm90IGV4YWN0IHNldCBhcyBhdmFpbGFibGUgZnJvbSB0aGUgb3JpZ2luIHNlcnZlciwgYnV0IGNvbGxlY3RlZCBmcm9tIGEgbG9jYWwgb3IgYSB0aGlyZCBwYXJ0eSBjb3B5LiBFeGNlcHQgdGhpcyBjb25kaXRpb24sIDIwMCBPSyByZXNwb25zZSBzaG91bGQgYmUgcHJlZmVycmVkIGluc3RlYWQgb2YgdGhpcyByZXNwb25zZS5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIk5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OXCJdID0gMjAzXSA9IFwiTk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT05cIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNlxuICAgICAqXG4gICAgICogVGhpcyByZXNwb25zZSBpcyBzZW50IHdoZW4gdGhlIHdlYiBzZXJ2ZXIsIGFmdGVyIHBlcmZvcm1pbmcgc2VydmVyLWRyaXZlbiBjb250ZW50IG5lZ290aWF0aW9uLCBkb2Vzbid0IGZpbmQgYW55IGNvbnRlbnQgZm9sbG93aW5nIHRoZSBjcml0ZXJpYSBnaXZlbiBieSB0aGUgdXNlciBhZ2VudC5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIk5PVF9BQ0NFUFRBQkxFXCJdID0gNDA2XSA9IFwiTk9UX0FDQ0VQVEFCTEVcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNFxuICAgICAqXG4gICAgICogVGhlIHNlcnZlciBjYW4gbm90IGZpbmQgcmVxdWVzdGVkIHJlc291cmNlLiBJbiB0aGUgYnJvd3NlciwgdGhpcyBtZWFucyB0aGUgVVJMIGlzIG5vdCByZWNvZ25pemVkLiBJbiBhbiBBUEksIHRoaXMgY2FuIGFsc28gbWVhbiB0aGF0IHRoZSBlbmRwb2ludCBpcyB2YWxpZCBidXQgdGhlIHJlc291cmNlIGl0c2VsZiBkb2VzIG5vdCBleGlzdC4gU2VydmVycyBtYXkgYWxzbyBzZW5kIHRoaXMgcmVzcG9uc2UgaW5zdGVhZCBvZiA0MDMgdG8gaGlkZSB0aGUgZXhpc3RlbmNlIG9mIGEgcmVzb3VyY2UgZnJvbSBhbiB1bmF1dGhvcml6ZWQgY2xpZW50LiBUaGlzIHJlc3BvbnNlIGNvZGUgaXMgcHJvYmFibHkgdGhlIG1vc3QgZmFtb3VzIG9uZSBkdWUgdG8gaXRzIGZyZXF1ZW50IG9jY3VyZW5jZSBvbiB0aGUgd2ViLlxuICAgICAqL1xuICAgIFN0YXR1c0NvZGVzW1N0YXR1c0NvZGVzW1wiTk9UX0ZPVU5EXCJdID0gNDA0XSA9IFwiTk9UX0ZPVU5EXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjJcbiAgICAgKlxuICAgICAqIFRoZSByZXF1ZXN0IG1ldGhvZCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBzZXJ2ZXIgYW5kIGNhbm5vdCBiZSBoYW5kbGVkLiBUaGUgb25seSBtZXRob2RzIHRoYXQgc2VydmVycyBhcmUgcmVxdWlyZWQgdG8gc3VwcG9ydCAoYW5kIHRoZXJlZm9yZSB0aGF0IG11c3Qgbm90IHJldHVybiB0aGlzIGNvZGUpIGFyZSBHRVQgYW5kIEhFQUQuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJOT1RfSU1QTEVNRU5URURcIl0gPSA1MDFdID0gXCJOT1RfSU1QTEVNRU5URURcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzIjc2VjdGlvbi00LjFcbiAgICAgKlxuICAgICAqIFRoaXMgaXMgdXNlZCBmb3IgY2FjaGluZyBwdXJwb3Nlcy4gSXQgaXMgdGVsbGluZyB0byBjbGllbnQgdGhhdCByZXNwb25zZSBoYXMgbm90IGJlZW4gbW9kaWZpZWQuIFNvLCBjbGllbnQgY2FuIGNvbnRpbnVlIHRvIHVzZSBzYW1lIGNhY2hlZCB2ZXJzaW9uIG9mIHJlc3BvbnNlLlxuICAgICAqL1xuICAgIFN0YXR1c0NvZGVzW1N0YXR1c0NvZGVzW1wiTk9UX01PRElGSUVEXCJdID0gMzA0XSA9IFwiTk9UX01PRElGSUVEXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjFcbiAgICAgKlxuICAgICAqIFRoZSByZXF1ZXN0IGhhcyBzdWNjZWVkZWQuIFRoZSBtZWFuaW5nIG9mIGEgc3VjY2VzcyB2YXJpZXMgZGVwZW5kaW5nIG9uIHRoZSBIVFRQIG1ldGhvZDpcbiAgICAgKiBHRVQ6IFRoZSByZXNvdXJjZSBoYXMgYmVlbiBmZXRjaGVkIGFuZCBpcyB0cmFuc21pdHRlZCBpbiB0aGUgbWVzc2FnZSBib2R5LlxuICAgICAqIEhFQUQ6IFRoZSBlbnRpdHkgaGVhZGVycyBhcmUgaW4gdGhlIG1lc3NhZ2UgYm9keS5cbiAgICAgKiBQT1NUOiBUaGUgcmVzb3VyY2UgZGVzY3JpYmluZyB0aGUgcmVzdWx0IG9mIHRoZSBhY3Rpb24gaXMgdHJhbnNtaXR0ZWQgaW4gdGhlIG1lc3NhZ2UgYm9keS5cbiAgICAgKiBUUkFDRTogVGhlIG1lc3NhZ2UgYm9keSBjb250YWlucyB0aGUgcmVxdWVzdCBtZXNzYWdlIGFzIHJlY2VpdmVkIGJ5IHRoZSBzZXJ2ZXJcbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIk9LXCJdID0gMjAwXSA9IFwiT0tcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzMjc2VjdGlvbi00LjFcbiAgICAgKlxuICAgICAqIFRoaXMgcmVzcG9uc2UgY29kZSBpcyB1c2VkIGJlY2F1c2Ugb2YgcmFuZ2UgaGVhZGVyIHNlbnQgYnkgdGhlIGNsaWVudCB0byBzZXBhcmF0ZSBkb3dubG9hZCBpbnRvIG11bHRpcGxlIHN0cmVhbXMuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJQQVJUSUFMX0NPTlRFTlRcIl0gPSAyMDZdID0gXCJQQVJUSUFMX0NPTlRFTlRcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMlxuICAgICAqXG4gICAgICogVGhpcyByZXNwb25zZSBjb2RlIGlzIHJlc2VydmVkIGZvciBmdXR1cmUgdXNlLiBJbml0aWFsIGFpbSBmb3IgY3JlYXRpbmcgdGhpcyBjb2RlIHdhcyB1c2luZyBpdCBmb3IgZGlnaXRhbCBwYXltZW50IHN5c3RlbXMgaG93ZXZlciB0aGlzIGlzIG5vdCB1c2VkIGN1cnJlbnRseS5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIlBBWU1FTlRfUkVRVUlSRURcIl0gPSA0MDJdID0gXCJQQVlNRU5UX1JFUVVJUkVEXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3NTM4I3NlY3Rpb24tM1xuICAgICAqXG4gICAgICogVGhpcyBtZWFucyB0aGF0IHRoZSByZXNvdXJjZSBpcyBub3cgcGVybWFuZW50bHkgbG9jYXRlZCBhdCBhbm90aGVyIFVSSSwgc3BlY2lmaWVkIGJ5IHRoZSBMb2NhdGlvbjogSFRUUCBSZXNwb25zZSBoZWFkZXIuIFRoaXMgaGFzIHRoZSBzYW1lIHNlbWFudGljcyBhcyB0aGUgMzAxIE1vdmVkIFBlcm1hbmVudGx5IEhUVFAgcmVzcG9uc2UgY29kZSwgd2l0aCB0aGUgZXhjZXB0aW9uIHRoYXQgdGhlIHVzZXIgYWdlbnQgbXVzdCBub3QgY2hhbmdlIHRoZSBIVFRQIG1ldGhvZCB1c2VkOiBpZiBhIFBPU1Qgd2FzIHVzZWQgaW4gdGhlIGZpcnN0IHJlcXVlc3QsIGEgUE9TVCBtdXN0IGJlIHVzZWQgaW4gdGhlIHNlY29uZCByZXF1ZXN0LlxuICAgICAqL1xuICAgIFN0YXR1c0NvZGVzW1N0YXR1c0NvZGVzW1wiUEVSTUFORU5UX1JFRElSRUNUXCJdID0gMzA4XSA9IFwiUEVSTUFORU5UX1JFRElSRUNUXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMyI3NlY3Rpb24tNC4yXG4gICAgICpcbiAgICAgKiBUaGUgY2xpZW50IGhhcyBpbmRpY2F0ZWQgcHJlY29uZGl0aW9ucyBpbiBpdHMgaGVhZGVycyB3aGljaCB0aGUgc2VydmVyIGRvZXMgbm90IG1lZXQuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJQUkVDT05ESVRJT05fRkFJTEVEXCJdID0gNDEyXSA9IFwiUFJFQ09ORElUSU9OX0ZBSUxFRFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTNcbiAgICAgKlxuICAgICAqIFRoZSBvcmlnaW4gc2VydmVyIHJlcXVpcmVzIHRoZSByZXF1ZXN0IHRvIGJlIGNvbmRpdGlvbmFsLiBJbnRlbmRlZCB0byBwcmV2ZW50IHRoZSAnbG9zdCB1cGRhdGUnIHByb2JsZW0sIHdoZXJlIGEgY2xpZW50IEdFVHMgYSByZXNvdXJjZSdzIHN0YXRlLCBtb2RpZmllcyBpdCwgYW5kIFBVVHMgaXQgYmFjayB0byB0aGUgc2VydmVyLCB3aGVuIG1lYW53aGlsZSBhIHRoaXJkIHBhcnR5IGhhcyBtb2RpZmllZCB0aGUgc3RhdGUgb24gdGhlIHNlcnZlciwgbGVhZGluZyB0byBhIGNvbmZsaWN0LlxuICAgICAqL1xuICAgIFN0YXR1c0NvZGVzW1N0YXR1c0NvZGVzW1wiUFJFQ09ORElUSU9OX1JFUVVJUkVEXCJdID0gNDI4XSA9IFwiUFJFQ09ORElUSU9OX1JFUVVJUkVEXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMVxuICAgICAqXG4gICAgICogVGhpcyBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBzZXJ2ZXIgaGFzIHJlY2VpdmVkIGFuZCBpcyBwcm9jZXNzaW5nIHRoZSByZXF1ZXN0LCBidXQgbm8gcmVzcG9uc2UgaXMgYXZhaWxhYmxlIHlldC5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIlBST0NFU1NJTkdcIl0gPSAxMDJdID0gXCJQUk9DRVNTSU5HXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjM1I3NlY3Rpb24tMy4yXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHNpbWlsYXIgdG8gNDAxIGJ1dCBhdXRoZW50aWNhdGlvbiBpcyBuZWVkZWQgdG8gYmUgZG9uZSBieSBhIHByb3h5LlxuICAgICAqL1xuICAgIFN0YXR1c0NvZGVzW1N0YXR1c0NvZGVzW1wiUFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRURcIl0gPSA0MDddID0gXCJQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTVcbiAgICAgKlxuICAgICAqIFRoZSBzZXJ2ZXIgaXMgdW53aWxsaW5nIHRvIHByb2Nlc3MgdGhlIHJlcXVlc3QgYmVjYXVzZSBpdHMgaGVhZGVyIGZpZWxkcyBhcmUgdG9vIGxhcmdlLiBUaGUgcmVxdWVzdCBNQVkgYmUgcmVzdWJtaXR0ZWQgYWZ0ZXIgcmVkdWNpbmcgdGhlIHNpemUgb2YgdGhlIHJlcXVlc3QgaGVhZGVyIGZpZWxkcy5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIlJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0VcIl0gPSA0MzFdID0gXCJSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjdcbiAgICAgKlxuICAgICAqIFRoaXMgcmVzcG9uc2UgaXMgc2VudCBvbiBhbiBpZGxlIGNvbm5lY3Rpb24gYnkgc29tZSBzZXJ2ZXJzLCBldmVuIHdpdGhvdXQgYW55IHByZXZpb3VzIHJlcXVlc3QgYnkgdGhlIGNsaWVudC4gSXQgbWVhbnMgdGhhdCB0aGUgc2VydmVyIHdvdWxkIGxpa2UgdG8gc2h1dCBkb3duIHRoaXMgdW51c2VkIGNvbm5lY3Rpb24uIFRoaXMgcmVzcG9uc2UgaXMgdXNlZCBtdWNoIG1vcmUgc2luY2Ugc29tZSBicm93c2VycywgbGlrZSBDaHJvbWUsIEZpcmVmb3ggMjcrLCBvciBJRTksIHVzZSBIVFRQIHByZS1jb25uZWN0aW9uIG1lY2hhbmlzbXMgdG8gc3BlZWQgdXAgc3VyZmluZy4gQWxzbyBub3RlIHRoYXQgc29tZSBzZXJ2ZXJzIG1lcmVseSBzaHV0IGRvd24gdGhlIGNvbm5lY3Rpb24gd2l0aG91dCBzZW5kaW5nIHRoaXMgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIlJFUVVFU1RfVElNRU9VVFwiXSA9IDQwOF0gPSBcIlJFUVVFU1RfVElNRU9VVFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMVxuICAgICAqXG4gICAgICogUmVxdWVzdCBlbnRpdHkgaXMgbGFyZ2VyIHRoYW4gbGltaXRzIGRlZmluZWQgYnkgc2VydmVyOyB0aGUgc2VydmVyIG1pZ2h0IGNsb3NlIHRoZSBjb25uZWN0aW9uIG9yIHJldHVybiBhbiBSZXRyeS1BZnRlciBoZWFkZXIgZmllbGQuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJSRVFVRVNUX1RPT19MT05HXCJdID0gNDEzXSA9IFwiUkVRVUVTVF9UT09fTE9OR1wiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMlxuICAgICAqXG4gICAgICogVGhlIFVSSSByZXF1ZXN0ZWQgYnkgdGhlIGNsaWVudCBpcyBsb25nZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgdG8gaW50ZXJwcmV0LlxuICAgICAqL1xuICAgIFN0YXR1c0NvZGVzW1N0YXR1c0NvZGVzW1wiUkVRVUVTVF9VUklfVE9PX0xPTkdcIl0gPSA0MTRdID0gXCJSRVFVRVNUX1VSSV9UT09fTE9OR1wiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMyNzZWN0aW9uLTQuNFxuICAgICAqXG4gICAgICogVGhlIHJhbmdlIHNwZWNpZmllZCBieSB0aGUgUmFuZ2UgaGVhZGVyIGZpZWxkIGluIHRoZSByZXF1ZXN0IGNhbid0IGJlIGZ1bGZpbGxlZDsgaXQncyBwb3NzaWJsZSB0aGF0IHRoZSByYW5nZSBpcyBvdXRzaWRlIHRoZSBzaXplIG9mIHRoZSB0YXJnZXQgVVJJJ3MgZGF0YS5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIlJFUVVFU1RFRF9SQU5HRV9OT1RfU0FUSVNGSUFCTEVcIl0gPSA0MTZdID0gXCJSRVFVRVNURURfUkFOR0VfTk9UX1NBVElTRklBQkxFXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjZcbiAgICAgKlxuICAgICAqIFRoaXMgcmVzcG9uc2UgY29kZSBpcyBzZW50IGFmdGVyIGFjY29tcGxpc2hpbmcgcmVxdWVzdCB0byB0ZWxsIHVzZXIgYWdlbnQgcmVzZXQgZG9jdW1lbnQgdmlldyB3aGljaCBzZW50IHRoaXMgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIlJFU0VUX0NPTlRFTlRcIl0gPSAyMDVdID0gXCJSRVNFVF9DT05URU5UXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjRcbiAgICAgKlxuICAgICAqIFNlcnZlciBzZW50IHRoaXMgcmVzcG9uc2UgdG8gZGlyZWN0aW5nIGNsaWVudCB0byBnZXQgcmVxdWVzdGVkIHJlc291cmNlIHRvIGFub3RoZXIgVVJJIHdpdGggYW4gR0VUIHJlcXVlc3QuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJTRUVfT1RIRVJcIl0gPSAzMDNdID0gXCJTRUVfT1RIRVJcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNFxuICAgICAqXG4gICAgICogVGhlIHNlcnZlciBpcyBub3QgcmVhZHkgdG8gaGFuZGxlIHRoZSByZXF1ZXN0LiBDb21tb24gY2F1c2VzIGFyZSBhIHNlcnZlciB0aGF0IGlzIGRvd24gZm9yIG1haW50ZW5hbmNlIG9yIHRoYXQgaXMgb3ZlcmxvYWRlZC4gTm90ZSB0aGF0IHRvZ2V0aGVyIHdpdGggdGhpcyByZXNwb25zZSwgYSB1c2VyLWZyaWVuZGx5IHBhZ2UgZXhwbGFpbmluZyB0aGUgcHJvYmxlbSBzaG91bGQgYmUgc2VudC4gVGhpcyByZXNwb25zZXMgc2hvdWxkIGJlIHVzZWQgZm9yIHRlbXBvcmFyeSBjb25kaXRpb25zIGFuZCB0aGUgUmV0cnktQWZ0ZXI6IEhUVFAgaGVhZGVyIHNob3VsZCwgaWYgcG9zc2libGUsIGNvbnRhaW4gdGhlIGVzdGltYXRlZCB0aW1lIGJlZm9yZSB0aGUgcmVjb3Zlcnkgb2YgdGhlIHNlcnZpY2UuIFRoZSB3ZWJtYXN0ZXIgbXVzdCBhbHNvIHRha2UgY2FyZSBhYm91dCB0aGUgY2FjaGluZy1yZWxhdGVkIGhlYWRlcnMgdGhhdCBhcmUgc2VudCBhbG9uZyB3aXRoIHRoaXMgcmVzcG9uc2UsIGFzIHRoZXNlIHRlbXBvcmFyeSBjb25kaXRpb24gcmVzcG9uc2VzIHNob3VsZCB1c3VhbGx5IG5vdCBiZSBjYWNoZWQuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJTRVJWSUNFX1VOQVZBSUxBQkxFXCJdID0gNTAzXSA9IFwiU0VSVklDRV9VTkFWQUlMQUJMRVwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4yXG4gICAgICpcbiAgICAgKiBUaGlzIGNvZGUgaXMgc2VudCBpbiByZXNwb25zZSB0byBhbiBVcGdyYWRlIHJlcXVlc3QgaGVhZGVyIGJ5IHRoZSBjbGllbnQsIGFuZCBpbmRpY2F0ZXMgdGhlIHByb3RvY29sIHRoZSBzZXJ2ZXIgaXMgc3dpdGNoaW5nIHRvby5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIlNXSVRDSElOR19QUk9UT0NPTFNcIl0gPSAxMDFdID0gXCJTV0lUQ0hJTkdfUFJPVE9DT0xTXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjdcbiAgICAgKlxuICAgICAqIFNlcnZlciBzZW50IHRoaXMgcmVzcG9uc2UgdG8gZGlyZWN0aW5nIGNsaWVudCB0byBnZXQgcmVxdWVzdGVkIHJlc291cmNlIHRvIGFub3RoZXIgVVJJIHdpdGggc2FtZSBtZXRob2QgdGhhdCB1c2VkIHByaW9yIHJlcXVlc3QuIFRoaXMgaGFzIHRoZSBzYW1lIHNlbWFudGljIHRoYW4gdGhlIDMwMiBGb3VuZCBIVFRQIHJlc3BvbnNlIGNvZGUsIHdpdGggdGhlIGV4Y2VwdGlvbiB0aGF0IHRoZSB1c2VyIGFnZW50IG11c3Qgbm90IGNoYW5nZSB0aGUgSFRUUCBtZXRob2QgdXNlZDogaWYgYSBQT1NUIHdhcyB1c2VkIGluIHRoZSBmaXJzdCByZXF1ZXN0LCBhIFBPU1QgbXVzdCBiZSB1c2VkIGluIHRoZSBzZWNvbmQgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIlRFTVBPUkFSWV9SRURJUkVDVFwiXSA9IDMwN10gPSBcIlRFTVBPUkFSWV9SRURJUkVDVFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTRcbiAgICAgKlxuICAgICAqIFRoZSB1c2VyIGhhcyBzZW50IHRvbyBtYW55IHJlcXVlc3RzIGluIGEgZ2l2ZW4gYW1vdW50IG9mIHRpbWUgKFwicmF0ZSBsaW1pdGluZ1wiKS5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIlRPT19NQU5ZX1JFUVVFU1RTXCJdID0gNDI5XSA9IFwiVE9PX01BTllfUkVRVUVTVFNcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzUjc2VjdGlvbi0zLjFcbiAgICAgKlxuICAgICAqIEFsdGhvdWdoIHRoZSBIVFRQIHN0YW5kYXJkIHNwZWNpZmllcyBcInVuYXV0aG9yaXplZFwiLCBzZW1hbnRpY2FsbHkgdGhpcyByZXNwb25zZSBtZWFucyBcInVuYXV0aGVudGljYXRlZFwiLiBUaGF0IGlzLCB0aGUgY2xpZW50IG11c3QgYXV0aGVudGljYXRlIGl0c2VsZiB0byBnZXQgdGhlIHJlcXVlc3RlZCByZXNwb25zZS5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIlVOQVVUSE9SSVpFRFwiXSA9IDQwMV0gPSBcIlVOQVVUSE9SSVpFRFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzcyNVxuICAgICAqXG4gICAgICogVGhlIHVzZXItYWdlbnQgcmVxdWVzdGVkIGEgcmVzb3VyY2UgdGhhdCBjYW5ub3QgbGVnYWxseSBiZSBwcm92aWRlZCwgc3VjaCBhcyBhIHdlYiBwYWdlIGNlbnNvcmVkIGJ5IGEgZ292ZXJubWVudC5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIlVOQVZBSUxBQkxFX0ZPUl9MRUdBTF9SRUFTT05TXCJdID0gNDUxXSA9IFwiVU5BVkFJTEFCTEVfRk9SX0xFR0FMX1JFQVNPTlNcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4zXG4gICAgICpcbiAgICAgKiBUaGUgcmVxdWVzdCB3YXMgd2VsbC1mb3JtZWQgYnV0IHdhcyB1bmFibGUgdG8gYmUgZm9sbG93ZWQgZHVlIHRvIHNlbWFudGljIGVycm9ycy5cbiAgICAgKi9cbiAgICBTdGF0dXNDb2Rlc1tTdGF0dXNDb2Rlc1tcIlVOUFJPQ0VTU0FCTEVfRU5USVRZXCJdID0gNDIyXSA9IFwiVU5QUk9DRVNTQUJMRV9FTlRJVFlcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTNcbiAgICAgKlxuICAgICAqIFRoZSBtZWRpYSBmb3JtYXQgb2YgdGhlIHJlcXVlc3RlZCBkYXRhIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHNlcnZlciwgc28gdGhlIHNlcnZlciBpcyByZWplY3RpbmcgdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJVTlNVUFBPUlRFRF9NRURJQV9UWVBFXCJdID0gNDE1XSA9IFwiVU5TVVBQT1JURURfTUVESUFfVFlQRVwiO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjZcbiAgICAgKlxuICAgICAqIFdhcyBkZWZpbmVkIGluIGEgcHJldmlvdXMgdmVyc2lvbiBvZiB0aGUgSFRUUCBzcGVjaWZpY2F0aW9uIHRvIGluZGljYXRlIHRoYXQgYSByZXF1ZXN0ZWQgcmVzcG9uc2UgbXVzdCBiZSBhY2Nlc3NlZCBieSBhIHByb3h5LiBJdCBoYXMgYmVlbiBkZXByZWNhdGVkIGR1ZSB0byBzZWN1cml0eSBjb25jZXJucyByZWdhcmRpbmcgaW4tYmFuZCBjb25maWd1cmF0aW9uIG9mIGEgcHJveHkuXG4gICAgICovXG4gICAgU3RhdHVzQ29kZXNbU3RhdHVzQ29kZXNbXCJVU0VfUFJPWFlcIl0gPSAzMDVdID0gXCJVU0VfUFJPWFlcIjtcbn0pKFN0YXR1c0NvZGVzIHx8IChTdGF0dXNDb2RlcyA9IHt9KSk7XG4iLCIvLyBHZW5lcmF0ZWQgZmlsZS4gRG8gbm90IGVkaXRcbmV4cG9ydCB2YXIgUmVhc29uUGhyYXNlcztcbihmdW5jdGlvbiAoUmVhc29uUGhyYXNlcykge1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4zXG4gICAgICpcbiAgICAgKiBUaGUgcmVxdWVzdCBoYXMgYmVlbiByZWNlaXZlZCBidXQgbm90IHlldCBhY3RlZCB1cG9uLiBJdCBpcyBub24tY29tbWl0dGFsLCBtZWFuaW5nIHRoYXQgdGhlcmUgaXMgbm8gd2F5IGluIEhUVFAgdG8gbGF0ZXIgc2VuZCBhbiBhc3luY2hyb25vdXMgcmVzcG9uc2UgaW5kaWNhdGluZyB0aGUgb3V0Y29tZSBvZiBwcm9jZXNzaW5nIHRoZSByZXF1ZXN0LiBJdCBpcyBpbnRlbmRlZCBmb3IgY2FzZXMgd2hlcmUgYW5vdGhlciBwcm9jZXNzIG9yIHNlcnZlciBoYW5kbGVzIHRoZSByZXF1ZXN0LCBvciBmb3IgYmF0Y2ggcHJvY2Vzc2luZy5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiQUNDRVBURURcIl0gPSBcIkFjY2VwdGVkXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjNcbiAgICAgKlxuICAgICAqIFRoaXMgZXJyb3IgcmVzcG9uc2UgbWVhbnMgdGhhdCB0aGUgc2VydmVyLCB3aGlsZSB3b3JraW5nIGFzIGEgZ2F0ZXdheSB0byBnZXQgYSByZXNwb25zZSBuZWVkZWQgdG8gaGFuZGxlIHRoZSByZXF1ZXN0LCBnb3QgYW4gaW52YWxpZCByZXNwb25zZS5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiQkFEX0dBVEVXQVlcIl0gPSBcIkJhZCBHYXRld2F5XCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjFcbiAgICAgKlxuICAgICAqIFRoaXMgcmVzcG9uc2UgbWVhbnMgdGhhdCBzZXJ2ZXIgY291bGQgbm90IHVuZGVyc3RhbmQgdGhlIHJlcXVlc3QgZHVlIHRvIGludmFsaWQgc3ludGF4LlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJCQURfUkVRVUVTVFwiXSA9IFwiQmFkIFJlcXVlc3RcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuOFxuICAgICAqXG4gICAgICogVGhpcyByZXNwb25zZSBpcyBzZW50IHdoZW4gYSByZXF1ZXN0IGNvbmZsaWN0cyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIkNPTkZMSUNUXCJdID0gXCJDb25mbGljdFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4xXG4gICAgICpcbiAgICAgKiBUaGlzIGludGVyaW0gcmVzcG9uc2UgaW5kaWNhdGVzIHRoYXQgZXZlcnl0aGluZyBzbyBmYXIgaXMgT0sgYW5kIHRoYXQgdGhlIGNsaWVudCBzaG91bGQgY29udGludWUgd2l0aCB0aGUgcmVxdWVzdCBvciBpZ25vcmUgaXQgaWYgaXQgaXMgYWxyZWFkeSBmaW5pc2hlZC5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiQ09OVElOVUVcIl0gPSBcIkNvbnRpbnVlXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjJcbiAgICAgKlxuICAgICAqIFRoZSByZXF1ZXN0IGhhcyBzdWNjZWVkZWQgYW5kIGEgbmV3IHJlc291cmNlIGhhcyBiZWVuIGNyZWF0ZWQgYXMgYSByZXN1bHQgb2YgaXQuIFRoaXMgaXMgdHlwaWNhbGx5IHRoZSByZXNwb25zZSBzZW50IGFmdGVyIGEgUFVUIHJlcXVlc3QuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIkNSRUFURURcIl0gPSBcIkNyZWF0ZWRcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTRcbiAgICAgKlxuICAgICAqIFRoaXMgcmVzcG9uc2UgY29kZSBtZWFucyB0aGUgZXhwZWN0YXRpb24gaW5kaWNhdGVkIGJ5IHRoZSBFeHBlY3QgcmVxdWVzdCBoZWFkZXIgZmllbGQgY2FuJ3QgYmUgbWV0IGJ5IHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIkVYUEVDVEFUSU9OX0ZBSUxFRFwiXSA9IFwiRXhwZWN0YXRpb24gRmFpbGVkXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNVxuICAgICAqXG4gICAgICogVGhlIHJlcXVlc3QgZmFpbGVkIGR1ZSB0byBmYWlsdXJlIG9mIGEgcHJldmlvdXMgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiRkFJTEVEX0RFUEVOREVOQ1lcIl0gPSBcIkZhaWxlZCBEZXBlbmRlbmN5XCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjNcbiAgICAgKlxuICAgICAqIFRoZSBjbGllbnQgZG9lcyBub3QgaGF2ZSBhY2Nlc3MgcmlnaHRzIHRvIHRoZSBjb250ZW50LCBpLmUuIHRoZXkgYXJlIHVuYXV0aG9yaXplZCwgc28gc2VydmVyIGlzIHJlamVjdGluZyB0byBnaXZlIHByb3BlciByZXNwb25zZS4gVW5saWtlIDQwMSwgdGhlIGNsaWVudCdzIGlkZW50aXR5IGlzIGtub3duIHRvIHRoZSBzZXJ2ZXIuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIkZPUkJJRERFTlwiXSA9IFwiRm9yYmlkZGVuXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjVcbiAgICAgKlxuICAgICAqIFRoaXMgZXJyb3IgcmVzcG9uc2UgaXMgZ2l2ZW4gd2hlbiB0aGUgc2VydmVyIGlzIGFjdGluZyBhcyBhIGdhdGV3YXkgYW5kIGNhbm5vdCBnZXQgYSByZXNwb25zZSBpbiB0aW1lLlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJHQVRFV0FZX1RJTUVPVVRcIl0gPSBcIkdhdGV3YXkgVGltZW91dFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS45XG4gICAgICpcbiAgICAgKiBUaGlzIHJlc3BvbnNlIHdvdWxkIGJlIHNlbnQgd2hlbiB0aGUgcmVxdWVzdGVkIGNvbnRlbnQgaGFzIGJlZW4gcGVybWVuYW50bHkgZGVsZXRlZCBmcm9tIHNlcnZlciwgd2l0aCBubyBmb3J3YXJkaW5nIGFkZHJlc3MuIENsaWVudHMgYXJlIGV4cGVjdGVkIHRvIHJlbW92ZSB0aGVpciBjYWNoZXMgYW5kIGxpbmtzIHRvIHRoZSByZXNvdXJjZS4gVGhlIEhUVFAgc3BlY2lmaWNhdGlvbiBpbnRlbmRzIHRoaXMgc3RhdHVzIGNvZGUgdG8gYmUgdXNlZCBmb3IgXCJsaW1pdGVkLXRpbWUsIHByb21vdGlvbmFsIHNlcnZpY2VzXCIuIEFQSXMgc2hvdWxkIG5vdCBmZWVsIGNvbXBlbGxlZCB0byBpbmRpY2F0ZSByZXNvdXJjZXMgdGhhdCBoYXZlIGJlZW4gZGVsZXRlZCB3aXRoIHRoaXMgc3RhdHVzIGNvZGUuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIkdPTkVcIl0gPSBcIkdvbmVcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNlxuICAgICAqXG4gICAgICogVGhlIEhUVFAgdmVyc2lvbiB1c2VkIGluIHRoZSByZXF1ZXN0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHNlcnZlci5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURURcIl0gPSBcIkhUVFAgVmVyc2lvbiBOb3QgU3VwcG9ydGVkXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyMzI0I3NlY3Rpb24tMi4zLjJcbiAgICAgKlxuICAgICAqIEFueSBhdHRlbXB0IHRvIGJyZXcgY29mZmVlIHdpdGggYSB0ZWFwb3Qgc2hvdWxkIHJlc3VsdCBpbiB0aGUgZXJyb3IgY29kZSBcIjQxOCBJJ20gYSB0ZWFwb3RcIi4gVGhlIHJlc3VsdGluZyBlbnRpdHkgYm9keSBNQVkgYmUgc2hvcnQgYW5kIHN0b3V0LlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJJTV9BX1RFQVBPVFwiXSA9IFwiSSdtIGEgdGVhcG90XCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNlxuICAgICAqXG4gICAgICogVGhlIDUwNyAoSW5zdWZmaWNpZW50IFN0b3JhZ2UpIHN0YXR1cyBjb2RlIG1lYW5zIHRoZSBtZXRob2QgY291bGQgbm90IGJlIHBlcmZvcm1lZCBvbiB0aGUgcmVzb3VyY2UgYmVjYXVzZSB0aGUgc2VydmVyIGlzIHVuYWJsZSB0byBzdG9yZSB0aGUgcmVwcmVzZW50YXRpb24gbmVlZGVkIHRvIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZSB0aGUgcmVxdWVzdC4gVGhpcyBjb25kaXRpb24gaXMgY29uc2lkZXJlZCB0byBiZSB0ZW1wb3JhcnkuIElmIHRoZSByZXF1ZXN0IHdoaWNoIHJlY2VpdmVkIHRoaXMgc3RhdHVzIGNvZGUgd2FzIHRoZSByZXN1bHQgb2YgYSB1c2VyIGFjdGlvbiwgdGhlIHJlcXVlc3QgTVVTVCBOT1QgYmUgcmVwZWF0ZWQgdW50aWwgaXQgaXMgcmVxdWVzdGVkIGJ5IGEgc2VwYXJhdGUgdXNlciBhY3Rpb24uXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIklOU1VGRklDSUVOVF9TUEFDRV9PTl9SRVNPVVJDRVwiXSA9IFwiSW5zdWZmaWNpZW50IFNwYWNlIG9uIFJlc291cmNlXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNlxuICAgICAqXG4gICAgICogVGhlIHNlcnZlciBoYXMgYW4gaW50ZXJuYWwgY29uZmlndXJhdGlvbiBlcnJvcjogdGhlIGNob3NlbiB2YXJpYW50IHJlc291cmNlIGlzIGNvbmZpZ3VyZWQgdG8gZW5nYWdlIGluIHRyYW5zcGFyZW50IGNvbnRlbnQgbmVnb3RpYXRpb24gaXRzZWxmLCBhbmQgaXMgdGhlcmVmb3JlIG5vdCBhIHByb3BlciBlbmQgcG9pbnQgaW4gdGhlIG5lZ290aWF0aW9uIHByb2Nlc3MuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIklOU1VGRklDSUVOVF9TVE9SQUdFXCJdID0gXCJJbnN1ZmZpY2llbnQgU3RvcmFnZVwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4xXG4gICAgICpcbiAgICAgKiBUaGUgc2VydmVyIGVuY291bnRlcmVkIGFuIHVuZXhwZWN0ZWQgY29uZGl0aW9uIHRoYXQgcHJldmVudGVkIGl0IGZyb20gZnVsZmlsbGluZyB0aGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiSU5URVJOQUxfU0VSVkVSX0VSUk9SXCJdID0gXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTBcbiAgICAgKlxuICAgICAqIFRoZSBzZXJ2ZXIgcmVqZWN0ZWQgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgQ29udGVudC1MZW5ndGggaGVhZGVyIGZpZWxkIGlzIG5vdCBkZWZpbmVkIGFuZCB0aGUgc2VydmVyIHJlcXVpcmVzIGl0LlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJMRU5HVEhfUkVRVUlSRURcIl0gPSBcIkxlbmd0aCBSZXF1aXJlZFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjRcbiAgICAgKlxuICAgICAqIFRoZSByZXNvdXJjZSB0aGF0IGlzIGJlaW5nIGFjY2Vzc2VkIGlzIGxvY2tlZC5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiTE9DS0VEXCJdID0gXCJMb2NrZWRcIjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL3JmY2RpZmY/ZGlmZnR5cGU9LS1od2RpZmYmdXJsMj1kcmFmdC1pZXRmLXdlYmRhdi1wcm90b2NvbC0wNi50eHRcbiAgICAgKlxuICAgICAqIEEgZGVwcmVjYXRlZCByZXNwb25zZSB1c2VkIGJ5IHRoZSBTcHJpbmcgRnJhbWV3b3JrIHdoZW4gYSBtZXRob2QgaGFzIGZhaWxlZC5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiTUVUSE9EX0ZBSUxVUkVcIl0gPSBcIk1ldGhvZCBGYWlsdXJlXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjVcbiAgICAgKlxuICAgICAqIFRoZSByZXF1ZXN0IG1ldGhvZCBpcyBrbm93biBieSB0aGUgc2VydmVyIGJ1dCBoYXMgYmVlbiBkaXNhYmxlZCBhbmQgY2Fubm90IGJlIHVzZWQuIEZvciBleGFtcGxlLCBhbiBBUEkgbWF5IGZvcmJpZCBERUxFVEUtaW5nIGEgcmVzb3VyY2UuIFRoZSB0d28gbWFuZGF0b3J5IG1ldGhvZHMsIEdFVCBhbmQgSEVBRCwgbXVzdCBuZXZlciBiZSBkaXNhYmxlZCBhbmQgc2hvdWxkIG5vdCByZXR1cm4gdGhpcyBlcnJvciBjb2RlLlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJNRVRIT0RfTk9UX0FMTE9XRURcIl0gPSBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4yXG4gICAgICpcbiAgICAgKiBUaGlzIHJlc3BvbnNlIGNvZGUgbWVhbnMgdGhhdCBVUkkgb2YgcmVxdWVzdGVkIHJlc291cmNlIGhhcyBiZWVuIGNoYW5nZWQuIFByb2JhYmx5LCBuZXcgVVJJIHdvdWxkIGJlIGdpdmVuIGluIHRoZSByZXNwb25zZS5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiTU9WRURfUEVSTUFORU5UTFlcIl0gPSBcIk1vdmVkIFBlcm1hbmVudGx5XCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjNcbiAgICAgKlxuICAgICAqIFRoaXMgcmVzcG9uc2UgY29kZSBtZWFucyB0aGF0IFVSSSBvZiByZXF1ZXN0ZWQgcmVzb3VyY2UgaGFzIGJlZW4gY2hhbmdlZCB0ZW1wb3JhcmlseS4gTmV3IGNoYW5nZXMgaW4gdGhlIFVSSSBtaWdodCBiZSBtYWRlIGluIHRoZSBmdXR1cmUuIFRoZXJlZm9yZSwgdGhpcyBzYW1lIFVSSSBzaG91bGQgYmUgdXNlZCBieSB0aGUgY2xpZW50IGluIGZ1dHVyZSByZXF1ZXN0cy5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiTU9WRURfVEVNUE9SQVJJTFlcIl0gPSBcIk1vdmVkIFRlbXBvcmFyaWx5XCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMlxuICAgICAqXG4gICAgICogQSBNdWx0aS1TdGF0dXMgcmVzcG9uc2UgY29udmV5cyBpbmZvcm1hdGlvbiBhYm91dCBtdWx0aXBsZSByZXNvdXJjZXMgaW4gc2l0dWF0aW9ucyB3aGVyZSBtdWx0aXBsZSBzdGF0dXMgY29kZXMgbWlnaHQgYmUgYXBwcm9wcmlhdGUuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIk1VTFRJX1NUQVRVU1wiXSA9IFwiTXVsdGktU3RhdHVzXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjFcbiAgICAgKlxuICAgICAqIFRoZSByZXF1ZXN0IGhhcyBtb3JlIHRoYW4gb25lIHBvc3NpYmxlIHJlc3BvbnNlcy4gVXNlci1hZ2VudCBvciB1c2VyIHNob3VsZCBjaG9vc2Ugb25lIG9mIHRoZW0uIFRoZXJlIGlzIG5vIHN0YW5kYXJkaXplZCB3YXkgdG8gY2hvb3NlIG9uZSBvZiB0aGUgcmVzcG9uc2VzLlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJNVUxUSVBMRV9DSE9JQ0VTXCJdID0gXCJNdWx0aXBsZSBDaG9pY2VzXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNlxuICAgICAqXG4gICAgICogVGhlIDUxMSBzdGF0dXMgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2xpZW50IG5lZWRzIHRvIGF1dGhlbnRpY2F0ZSB0byBnYWluIG5ldHdvcmsgYWNjZXNzLlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJORVRXT1JLX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEXCJdID0gXCJOZXR3b3JrIEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjVcbiAgICAgKlxuICAgICAqIFRoZXJlIGlzIG5vIGNvbnRlbnQgdG8gc2VuZCBmb3IgdGhpcyByZXF1ZXN0LCBidXQgdGhlIGhlYWRlcnMgbWF5IGJlIHVzZWZ1bC4gVGhlIHVzZXItYWdlbnQgbWF5IHVwZGF0ZSBpdHMgY2FjaGVkIGhlYWRlcnMgZm9yIHRoaXMgcmVzb3VyY2Ugd2l0aCB0aGUgbmV3IG9uZXMuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIk5PX0NPTlRFTlRcIl0gPSBcIk5vIENvbnRlbnRcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuNFxuICAgICAqXG4gICAgICogVGhpcyByZXNwb25zZSBjb2RlIG1lYW5zIHJldHVybmVkIG1ldGEtaW5mb3JtYXRpb24gc2V0IGlzIG5vdCBleGFjdCBzZXQgYXMgYXZhaWxhYmxlIGZyb20gdGhlIG9yaWdpbiBzZXJ2ZXIsIGJ1dCBjb2xsZWN0ZWQgZnJvbSBhIGxvY2FsIG9yIGEgdGhpcmQgcGFydHkgY29weS4gRXhjZXB0IHRoaXMgY29uZGl0aW9uLCAyMDAgT0sgcmVzcG9uc2Ugc2hvdWxkIGJlIHByZWZlcnJlZCBpbnN0ZWFkIG9mIHRoaXMgcmVzcG9uc2UuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIk5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OXCJdID0gXCJOb24gQXV0aG9yaXRhdGl2ZSBJbmZvcm1hdGlvblwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS42XG4gICAgICpcbiAgICAgKiBUaGlzIHJlc3BvbnNlIGlzIHNlbnQgd2hlbiB0aGUgd2ViIHNlcnZlciwgYWZ0ZXIgcGVyZm9ybWluZyBzZXJ2ZXItZHJpdmVuIGNvbnRlbnQgbmVnb3RpYXRpb24sIGRvZXNuJ3QgZmluZCBhbnkgY29udGVudCBmb2xsb3dpbmcgdGhlIGNyaXRlcmlhIGdpdmVuIGJ5IHRoZSB1c2VyIGFnZW50LlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJOT1RfQUNDRVBUQUJMRVwiXSA9IFwiTm90IEFjY2VwdGFibGVcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNFxuICAgICAqXG4gICAgICogVGhlIHNlcnZlciBjYW4gbm90IGZpbmQgcmVxdWVzdGVkIHJlc291cmNlLiBJbiB0aGUgYnJvd3NlciwgdGhpcyBtZWFucyB0aGUgVVJMIGlzIG5vdCByZWNvZ25pemVkLiBJbiBhbiBBUEksIHRoaXMgY2FuIGFsc28gbWVhbiB0aGF0IHRoZSBlbmRwb2ludCBpcyB2YWxpZCBidXQgdGhlIHJlc291cmNlIGl0c2VsZiBkb2VzIG5vdCBleGlzdC4gU2VydmVycyBtYXkgYWxzbyBzZW5kIHRoaXMgcmVzcG9uc2UgaW5zdGVhZCBvZiA0MDMgdG8gaGlkZSB0aGUgZXhpc3RlbmNlIG9mIGEgcmVzb3VyY2UgZnJvbSBhbiB1bmF1dGhvcml6ZWQgY2xpZW50LiBUaGlzIHJlc3BvbnNlIGNvZGUgaXMgcHJvYmFibHkgdGhlIG1vc3QgZmFtb3VzIG9uZSBkdWUgdG8gaXRzIGZyZXF1ZW50IG9jY3VyZW5jZSBvbiB0aGUgd2ViLlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJOT1RfRk9VTkRcIl0gPSBcIk5vdCBGb3VuZFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4yXG4gICAgICpcbiAgICAgKiBUaGUgcmVxdWVzdCBtZXRob2QgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgc2VydmVyIGFuZCBjYW5ub3QgYmUgaGFuZGxlZC4gVGhlIG9ubHkgbWV0aG9kcyB0aGF0IHNlcnZlcnMgYXJlIHJlcXVpcmVkIHRvIHN1cHBvcnQgKGFuZCB0aGVyZWZvcmUgdGhhdCBtdXN0IG5vdCByZXR1cm4gdGhpcyBjb2RlKSBhcmUgR0VUIGFuZCBIRUFELlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJOT1RfSU1QTEVNRU5URURcIl0gPSBcIk5vdCBJbXBsZW1lbnRlZFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMiNzZWN0aW9uLTQuMVxuICAgICAqXG4gICAgICogVGhpcyBpcyB1c2VkIGZvciBjYWNoaW5nIHB1cnBvc2VzLiBJdCBpcyB0ZWxsaW5nIHRvIGNsaWVudCB0aGF0IHJlc3BvbnNlIGhhcyBub3QgYmVlbiBtb2RpZmllZC4gU28sIGNsaWVudCBjYW4gY29udGludWUgdG8gdXNlIHNhbWUgY2FjaGVkIHZlcnNpb24gb2YgcmVzcG9uc2UuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIk5PVF9NT0RJRklFRFwiXSA9IFwiTm90IE1vZGlmaWVkXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjFcbiAgICAgKlxuICAgICAqIFRoZSByZXF1ZXN0IGhhcyBzdWNjZWVkZWQuIFRoZSBtZWFuaW5nIG9mIGEgc3VjY2VzcyB2YXJpZXMgZGVwZW5kaW5nIG9uIHRoZSBIVFRQIG1ldGhvZDpcbiAgICAgKiBHRVQ6IFRoZSByZXNvdXJjZSBoYXMgYmVlbiBmZXRjaGVkIGFuZCBpcyB0cmFuc21pdHRlZCBpbiB0aGUgbWVzc2FnZSBib2R5LlxuICAgICAqIEhFQUQ6IFRoZSBlbnRpdHkgaGVhZGVycyBhcmUgaW4gdGhlIG1lc3NhZ2UgYm9keS5cbiAgICAgKiBQT1NUOiBUaGUgcmVzb3VyY2UgZGVzY3JpYmluZyB0aGUgcmVzdWx0IG9mIHRoZSBhY3Rpb24gaXMgdHJhbnNtaXR0ZWQgaW4gdGhlIG1lc3NhZ2UgYm9keS5cbiAgICAgKiBUUkFDRTogVGhlIG1lc3NhZ2UgYm9keSBjb250YWlucyB0aGUgcmVxdWVzdCBtZXNzYWdlIGFzIHJlY2VpdmVkIGJ5IHRoZSBzZXJ2ZXJcbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiT0tcIl0gPSBcIk9LXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMzI3NlY3Rpb24tNC4xXG4gICAgICpcbiAgICAgKiBUaGlzIHJlc3BvbnNlIGNvZGUgaXMgdXNlZCBiZWNhdXNlIG9mIHJhbmdlIGhlYWRlciBzZW50IGJ5IHRoZSBjbGllbnQgdG8gc2VwYXJhdGUgZG93bmxvYWQgaW50byBtdWx0aXBsZSBzdHJlYW1zLlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJQQVJUSUFMX0NPTlRFTlRcIl0gPSBcIlBhcnRpYWwgQ29udGVudFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4yXG4gICAgICpcbiAgICAgKiBUaGlzIHJlc3BvbnNlIGNvZGUgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSB1c2UuIEluaXRpYWwgYWltIGZvciBjcmVhdGluZyB0aGlzIGNvZGUgd2FzIHVzaW5nIGl0IGZvciBkaWdpdGFsIHBheW1lbnQgc3lzdGVtcyBob3dldmVyIHRoaXMgaXMgbm90IHVzZWQgY3VycmVudGx5LlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJQQVlNRU5UX1JFUVVJUkVEXCJdID0gXCJQYXltZW50IFJlcXVpcmVkXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3NTM4I3NlY3Rpb24tM1xuICAgICAqXG4gICAgICogVGhpcyBtZWFucyB0aGF0IHRoZSByZXNvdXJjZSBpcyBub3cgcGVybWFuZW50bHkgbG9jYXRlZCBhdCBhbm90aGVyIFVSSSwgc3BlY2lmaWVkIGJ5IHRoZSBMb2NhdGlvbjogSFRUUCBSZXNwb25zZSBoZWFkZXIuIFRoaXMgaGFzIHRoZSBzYW1lIHNlbWFudGljcyBhcyB0aGUgMzAxIE1vdmVkIFBlcm1hbmVudGx5IEhUVFAgcmVzcG9uc2UgY29kZSwgd2l0aCB0aGUgZXhjZXB0aW9uIHRoYXQgdGhlIHVzZXIgYWdlbnQgbXVzdCBub3QgY2hhbmdlIHRoZSBIVFRQIG1ldGhvZCB1c2VkOiBpZiBhIFBPU1Qgd2FzIHVzZWQgaW4gdGhlIGZpcnN0IHJlcXVlc3QsIGEgUE9TVCBtdXN0IGJlIHVzZWQgaW4gdGhlIHNlY29uZCByZXF1ZXN0LlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJQRVJNQU5FTlRfUkVESVJFQ1RcIl0gPSBcIlBlcm1hbmVudCBSZWRpcmVjdFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMiNzZWN0aW9uLTQuMlxuICAgICAqXG4gICAgICogVGhlIGNsaWVudCBoYXMgaW5kaWNhdGVkIHByZWNvbmRpdGlvbnMgaW4gaXRzIGhlYWRlcnMgd2hpY2ggdGhlIHNlcnZlciBkb2VzIG5vdCBtZWV0LlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJQUkVDT05ESVRJT05fRkFJTEVEXCJdID0gXCJQcmVjb25kaXRpb24gRmFpbGVkXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tM1xuICAgICAqXG4gICAgICogVGhlIG9yaWdpbiBzZXJ2ZXIgcmVxdWlyZXMgdGhlIHJlcXVlc3QgdG8gYmUgY29uZGl0aW9uYWwuIEludGVuZGVkIHRvIHByZXZlbnQgdGhlICdsb3N0IHVwZGF0ZScgcHJvYmxlbSwgd2hlcmUgYSBjbGllbnQgR0VUcyBhIHJlc291cmNlJ3Mgc3RhdGUsIG1vZGlmaWVzIGl0LCBhbmQgUFVUcyBpdCBiYWNrIHRvIHRoZSBzZXJ2ZXIsIHdoZW4gbWVhbndoaWxlIGEgdGhpcmQgcGFydHkgaGFzIG1vZGlmaWVkIHRoZSBzdGF0ZSBvbiB0aGUgc2VydmVyLCBsZWFkaW5nIHRvIGEgY29uZmxpY3QuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIlBSRUNPTkRJVElPTl9SRVFVSVJFRFwiXSA9IFwiUHJlY29uZGl0aW9uIFJlcXVpcmVkXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMVxuICAgICAqXG4gICAgICogVGhpcyBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBzZXJ2ZXIgaGFzIHJlY2VpdmVkIGFuZCBpcyBwcm9jZXNzaW5nIHRoZSByZXF1ZXN0LCBidXQgbm8gcmVzcG9uc2UgaXMgYXZhaWxhYmxlIHlldC5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiUFJPQ0VTU0lOR1wiXSA9IFwiUHJvY2Vzc2luZ1wiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzNSNzZWN0aW9uLTMuMlxuICAgICAqXG4gICAgICogVGhpcyBpcyBzaW1pbGFyIHRvIDQwMSBidXQgYXV0aGVudGljYXRpb24gaXMgbmVlZGVkIHRvIGJlIGRvbmUgYnkgYSBwcm94eS5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiUFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRURcIl0gPSBcIlByb3h5IEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNVxuICAgICAqXG4gICAgICogVGhlIHNlcnZlciBpcyB1bndpbGxpbmcgdG8gcHJvY2VzcyB0aGUgcmVxdWVzdCBiZWNhdXNlIGl0cyBoZWFkZXIgZmllbGRzIGFyZSB0b28gbGFyZ2UuIFRoZSByZXF1ZXN0IE1BWSBiZSByZXN1Ym1pdHRlZCBhZnRlciByZWR1Y2luZyB0aGUgc2l6ZSBvZiB0aGUgcmVxdWVzdCBoZWFkZXIgZmllbGRzLlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFXCJdID0gXCJSZXF1ZXN0IEhlYWRlciBGaWVsZHMgVG9vIExhcmdlXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjdcbiAgICAgKlxuICAgICAqIFRoaXMgcmVzcG9uc2UgaXMgc2VudCBvbiBhbiBpZGxlIGNvbm5lY3Rpb24gYnkgc29tZSBzZXJ2ZXJzLCBldmVuIHdpdGhvdXQgYW55IHByZXZpb3VzIHJlcXVlc3QgYnkgdGhlIGNsaWVudC4gSXQgbWVhbnMgdGhhdCB0aGUgc2VydmVyIHdvdWxkIGxpa2UgdG8gc2h1dCBkb3duIHRoaXMgdW51c2VkIGNvbm5lY3Rpb24uIFRoaXMgcmVzcG9uc2UgaXMgdXNlZCBtdWNoIG1vcmUgc2luY2Ugc29tZSBicm93c2VycywgbGlrZSBDaHJvbWUsIEZpcmVmb3ggMjcrLCBvciBJRTksIHVzZSBIVFRQIHByZS1jb25uZWN0aW9uIG1lY2hhbmlzbXMgdG8gc3BlZWQgdXAgc3VyZmluZy4gQWxzbyBub3RlIHRoYXQgc29tZSBzZXJ2ZXJzIG1lcmVseSBzaHV0IGRvd24gdGhlIGNvbm5lY3Rpb24gd2l0aG91dCBzZW5kaW5nIHRoaXMgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiUkVRVUVTVF9USU1FT1VUXCJdID0gXCJSZXF1ZXN0IFRpbWVvdXRcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTFcbiAgICAgKlxuICAgICAqIFJlcXVlc3QgZW50aXR5IGlzIGxhcmdlciB0aGFuIGxpbWl0cyBkZWZpbmVkIGJ5IHNlcnZlcjsgdGhlIHNlcnZlciBtaWdodCBjbG9zZSB0aGUgY29ubmVjdGlvbiBvciByZXR1cm4gYW4gUmV0cnktQWZ0ZXIgaGVhZGVyIGZpZWxkLlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJSRVFVRVNUX1RPT19MT05HXCJdID0gXCJSZXF1ZXN0IEVudGl0eSBUb28gTGFyZ2VcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTJcbiAgICAgKlxuICAgICAqIFRoZSBVUkkgcmVxdWVzdGVkIGJ5IHRoZSBjbGllbnQgaXMgbG9uZ2VyIHRoYW4gdGhlIHNlcnZlciBpcyB3aWxsaW5nIHRvIGludGVycHJldC5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiUkVRVUVTVF9VUklfVE9PX0xPTkdcIl0gPSBcIlJlcXVlc3QtVVJJIFRvbyBMb25nXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMzI3NlY3Rpb24tNC40XG4gICAgICpcbiAgICAgKiBUaGUgcmFuZ2Ugc3BlY2lmaWVkIGJ5IHRoZSBSYW5nZSBoZWFkZXIgZmllbGQgaW4gdGhlIHJlcXVlc3QgY2FuJ3QgYmUgZnVsZmlsbGVkOyBpdCdzIHBvc3NpYmxlIHRoYXQgdGhlIHJhbmdlIGlzIG91dHNpZGUgdGhlIHNpemUgb2YgdGhlIHRhcmdldCBVUkkncyBkYXRhLlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJSRVFVRVNURURfUkFOR0VfTk9UX1NBVElTRklBQkxFXCJdID0gXCJSZXF1ZXN0ZWQgUmFuZ2UgTm90IFNhdGlzZmlhYmxlXCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjZcbiAgICAgKlxuICAgICAqIFRoaXMgcmVzcG9uc2UgY29kZSBpcyBzZW50IGFmdGVyIGFjY29tcGxpc2hpbmcgcmVxdWVzdCB0byB0ZWxsIHVzZXIgYWdlbnQgcmVzZXQgZG9jdW1lbnQgdmlldyB3aGljaCBzZW50IHRoaXMgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiUkVTRVRfQ09OVEVOVFwiXSA9IFwiUmVzZXQgQ29udGVudFwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC40XG4gICAgICpcbiAgICAgKiBTZXJ2ZXIgc2VudCB0aGlzIHJlc3BvbnNlIHRvIGRpcmVjdGluZyBjbGllbnQgdG8gZ2V0IHJlcXVlc3RlZCByZXNvdXJjZSB0byBhbm90aGVyIFVSSSB3aXRoIGFuIEdFVCByZXF1ZXN0LlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJTRUVfT1RIRVJcIl0gPSBcIlNlZSBPdGhlclwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi40XG4gICAgICpcbiAgICAgKiBUaGUgc2VydmVyIGlzIG5vdCByZWFkeSB0byBoYW5kbGUgdGhlIHJlcXVlc3QuIENvbW1vbiBjYXVzZXMgYXJlIGEgc2VydmVyIHRoYXQgaXMgZG93biBmb3IgbWFpbnRlbmFuY2Ugb3IgdGhhdCBpcyBvdmVybG9hZGVkLiBOb3RlIHRoYXQgdG9nZXRoZXIgd2l0aCB0aGlzIHJlc3BvbnNlLCBhIHVzZXItZnJpZW5kbHkgcGFnZSBleHBsYWluaW5nIHRoZSBwcm9ibGVtIHNob3VsZCBiZSBzZW50LiBUaGlzIHJlc3BvbnNlcyBzaG91bGQgYmUgdXNlZCBmb3IgdGVtcG9yYXJ5IGNvbmRpdGlvbnMgYW5kIHRoZSBSZXRyeS1BZnRlcjogSFRUUCBoZWFkZXIgc2hvdWxkLCBpZiBwb3NzaWJsZSwgY29udGFpbiB0aGUgZXN0aW1hdGVkIHRpbWUgYmVmb3JlIHRoZSByZWNvdmVyeSBvZiB0aGUgc2VydmljZS4gVGhlIHdlYm1hc3RlciBtdXN0IGFsc28gdGFrZSBjYXJlIGFib3V0IHRoZSBjYWNoaW5nLXJlbGF0ZWQgaGVhZGVycyB0aGF0IGFyZSBzZW50IGFsb25nIHdpdGggdGhpcyByZXNwb25zZSwgYXMgdGhlc2UgdGVtcG9yYXJ5IGNvbmRpdGlvbiByZXNwb25zZXMgc2hvdWxkIHVzdWFsbHkgbm90IGJlIGNhY2hlZC5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiU0VSVklDRV9VTkFWQUlMQUJMRVwiXSA9IFwiU2VydmljZSBVbmF2YWlsYWJsZVwiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4yXG4gICAgICpcbiAgICAgKiBUaGlzIGNvZGUgaXMgc2VudCBpbiByZXNwb25zZSB0byBhbiBVcGdyYWRlIHJlcXVlc3QgaGVhZGVyIGJ5IHRoZSBjbGllbnQsIGFuZCBpbmRpY2F0ZXMgdGhlIHByb3RvY29sIHRoZSBzZXJ2ZXIgaXMgc3dpdGNoaW5nIHRvby5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiU1dJVENISU5HX1BST1RPQ09MU1wiXSA9IFwiU3dpdGNoaW5nIFByb3RvY29sc1wiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC43XG4gICAgICpcbiAgICAgKiBTZXJ2ZXIgc2VudCB0aGlzIHJlc3BvbnNlIHRvIGRpcmVjdGluZyBjbGllbnQgdG8gZ2V0IHJlcXVlc3RlZCByZXNvdXJjZSB0byBhbm90aGVyIFVSSSB3aXRoIHNhbWUgbWV0aG9kIHRoYXQgdXNlZCBwcmlvciByZXF1ZXN0LiBUaGlzIGhhcyB0aGUgc2FtZSBzZW1hbnRpYyB0aGFuIHRoZSAzMDIgRm91bmQgSFRUUCByZXNwb25zZSBjb2RlLCB3aXRoIHRoZSBleGNlcHRpb24gdGhhdCB0aGUgdXNlciBhZ2VudCBtdXN0IG5vdCBjaGFuZ2UgdGhlIEhUVFAgbWV0aG9kIHVzZWQ6IGlmIGEgUE9TVCB3YXMgdXNlZCBpbiB0aGUgZmlyc3QgcmVxdWVzdCwgYSBQT1NUIG11c3QgYmUgdXNlZCBpbiB0aGUgc2Vjb25kIHJlcXVlc3QuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIlRFTVBPUkFSWV9SRURJUkVDVFwiXSA9IFwiVGVtcG9yYXJ5IFJlZGlyZWN0XCI7XG4gICAgLyoqXG4gICAgICogT2ZmaWNpYWwgRG9jdW1lbnRhdGlvbiBAIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNFxuICAgICAqXG4gICAgICogVGhlIHVzZXIgaGFzIHNlbnQgdG9vIG1hbnkgcmVxdWVzdHMgaW4gYSBnaXZlbiBhbW91bnQgb2YgdGltZSAoXCJyYXRlIGxpbWl0aW5nXCIpLlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJUT09fTUFOWV9SRVFVRVNUU1wiXSA9IFwiVG9vIE1hbnkgUmVxdWVzdHNcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzUjc2VjdGlvbi0zLjFcbiAgICAgKlxuICAgICAqIEFsdGhvdWdoIHRoZSBIVFRQIHN0YW5kYXJkIHNwZWNpZmllcyBcInVuYXV0aG9yaXplZFwiLCBzZW1hbnRpY2FsbHkgdGhpcyByZXNwb25zZSBtZWFucyBcInVuYXV0aGVudGljYXRlZFwiLiBUaGF0IGlzLCB0aGUgY2xpZW50IG11c3QgYXV0aGVudGljYXRlIGl0c2VsZiB0byBnZXQgdGhlIHJlcXVlc3RlZCByZXNwb25zZS5cbiAgICAgKi9cbiAgICBSZWFzb25QaHJhc2VzW1wiVU5BVVRIT1JJWkVEXCJdID0gXCJVbmF1dGhvcml6ZWRcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzc3MjVcbiAgICAgKlxuICAgICAqIFRoZSB1c2VyLWFnZW50IHJlcXVlc3RlZCBhIHJlc291cmNlIHRoYXQgY2Fubm90IGxlZ2FsbHkgYmUgcHJvdmlkZWQsIHN1Y2ggYXMgYSB3ZWIgcGFnZSBjZW5zb3JlZCBieSBhIGdvdmVybm1lbnQuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIlVOQVZBSUxBQkxFX0ZPUl9MRUdBTF9SRUFTT05TXCJdID0gXCJVbmF2YWlsYWJsZSBGb3IgTGVnYWwgUmVhc29uc1wiO1xuICAgIC8qKlxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjNcbiAgICAgKlxuICAgICAqIFRoZSByZXF1ZXN0IHdhcyB3ZWxsLWZvcm1lZCBidXQgd2FzIHVuYWJsZSB0byBiZSBmb2xsb3dlZCBkdWUgdG8gc2VtYW50aWMgZXJyb3JzLlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJVTlBST0NFU1NBQkxFX0VOVElUWVwiXSA9IFwiVW5wcm9jZXNzYWJsZSBFbnRpdHlcIjtcbiAgICAvKipcbiAgICAgKiBPZmZpY2lhbCBEb2N1bWVudGF0aW9uIEAgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTNcbiAgICAgKlxuICAgICAqIFRoZSBtZWRpYSBmb3JtYXQgb2YgdGhlIHJlcXVlc3RlZCBkYXRhIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHNlcnZlciwgc28gdGhlIHNlcnZlciBpcyByZWplY3RpbmcgdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgUmVhc29uUGhyYXNlc1tcIlVOU1VQUE9SVEVEX01FRElBX1RZUEVcIl0gPSBcIlVuc3VwcG9ydGVkIE1lZGlhIFR5cGVcIjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIE9mZmljaWFsIERvY3VtZW50YXRpb24gQCBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC42XG4gICAgICpcbiAgICAgKiBXYXMgZGVmaW5lZCBpbiBhIHByZXZpb3VzIHZlcnNpb24gb2YgdGhlIEhUVFAgc3BlY2lmaWNhdGlvbiB0byBpbmRpY2F0ZSB0aGF0IGEgcmVxdWVzdGVkIHJlc3BvbnNlIG11c3QgYmUgYWNjZXNzZWQgYnkgYSBwcm94eS4gSXQgaGFzIGJlZW4gZGVwcmVjYXRlZCBkdWUgdG8gc2VjdXJpdHkgY29uY2VybnMgcmVnYXJkaW5nIGluLWJhbmQgY29uZmlndXJhdGlvbiBvZiBhIHByb3h5LlxuICAgICAqL1xuICAgIFJlYXNvblBocmFzZXNbXCJVU0VfUFJPWFlcIl0gPSBcIlVzZSBQcm94eVwiO1xufSkoUmVhc29uUGhyYXNlcyB8fCAoUmVhc29uUGhyYXNlcyA9IHt9KSk7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IGxlZ2FjeUNvZGVzIGZyb20gJy4vbGVnYWN5JztcbmltcG9ydCB7IGdldFN0YXR1c0NvZGUsIGdldFN0YXR1c1RleHQsIH0gZnJvbSAnLi91dGlscy1mdW5jdGlvbnMnO1xuZXhwb3J0IHsgZ2V0U3RhdHVzQ29kZSwgZ2V0UmVhc29uUGhyYXNlLCBnZXRTdGF0dXNUZXh0LCB9IGZyb20gJy4vdXRpbHMtZnVuY3Rpb25zJztcbmV4cG9ydCB7IFN0YXR1c0NvZGVzLCB9IGZyb20gJy4vc3RhdHVzLWNvZGVzJztcbmV4cG9ydCB7IFJlYXNvblBocmFzZXMsIH0gZnJvbSAnLi9yZWFzb24tcGhyYXNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2xlZ2FjeSc7XG5leHBvcnQgZGVmYXVsdCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbGVnYWN5Q29kZXMpLCB7IGdldFN0YXR1c0NvZGU6IGdldFN0YXR1c0NvZGUsXG4gICAgZ2V0U3RhdHVzVGV4dDogZ2V0U3RhdHVzVGV4dCB9KTtcbiIsImNvbnN0IE9ORV9ZRUFSX0lOX1NFQ09ORFMgPSAzNjUgKiAyNCAqIDYwICogNjA7XG5cbmV4cG9ydCBlbnVtIElEQkxvY2FsQ2FjaGVTdG9yZSB7XG4gICAgQVNTRVRTX1RBQkxFID0gJ2Fzc2V0cycsXG4gICAgSEFORExFU19UQUJMRSA9ICdoYW5kbGVzJyxcbn1cblxuZXhwb3J0IGNvbnN0IExPQ0FMX0NBQ0hFX05BTUUgPSAnbG9jYWwtY2FjaGUnO1xuZXhwb3J0IGNvbnN0IExPQ0FMX0NBQ0hFX1ZFUlNJT04gPSAxO1xuZXhwb3J0IGNvbnN0IExPQ0FMX0hBTkRMRVNfTkFNRSA9ICdsb2NhbC1oYW5kbGVzJztcbmV4cG9ydCBjb25zdCBMT0NBTF9IQU5ETEVTX1ZFUlNJT04gPSAxO1xuZXhwb3J0IGNvbnN0IExPQ0FMX0NBQ0hFX1VSTF9QQVRIX1BSRUZJWCA9IGAvJHtMT0NBTF9DQUNIRV9OQU1FfS9gO1xuZXhwb3J0IGNvbnN0IFJBTkdFX0hFQURFUl9SRUdFWFAgPSAvXmJ5dGVzPSg/PGZyb21CeXRlPltcXGRdKylcXC0oPzx0b0J5dGU+W1xcZF0rKT8kLztcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NBQ0hFX0NPTlRST0xfSEVBREVSID0gYHB1YmxpYywgaW1tdXRhYmxlLCBtYXgtYWdlPSR7T05FX1lFQVJfSU5fU0VDT05EU31gO1xuXG5leHBvcnQgY29uc3QgUFJPTUlTRV9USU1FT1VUX0xFTkdUSCA9IDYwMDAwO1xuXG4vKiogQ3VzdG9tIGxvY2FsLWNhY2hlIEdFVCByZXF1ZXN0IGhlYWRlciB0byBza2lwIG1hbnVhbCByZWh5ZHJhdGlvbiBzdGVwICovXG5leHBvcnQgY29uc3QgU0tJUF9NQU5VQUxfUkVIWURSQVRJT05fSEVBREVSID0gJ1gtQ2xpcGNoYW1wLVNraXBNYW51YWxSZWh5ZHJhdGlvbic7XG5cbmV4cG9ydCBlbnVtIElEQkRPTUV4Y2VwdGlvbiB7XG4gICAgQWJvcnRFcnJvciA9ICdBYm9ydEVycm9yJyxcbiAgICBDb25zdHJhaW50RXJyb3IgPSAnQ29uc3RyYWludEVycm9yJyxcbiAgICBEYXRhQ2xvbmVFcnJvciA9ICdEYXRhQ2xvbmVFcnJvcicsXG4gICAgRGF0YUVycm9yID0gJ0RhdGFFcnJvcicsXG4gICAgSW52YWxpZEFjY2Vzc0Vycm9yID0gJ0ludmFsaWRBY2Nlc3NFcnJvcicsXG4gICAgSW52YWxpZFN0YXRlRXJyb3IgPSAnSW52YWxpZFN0YXRlRXJyb3InLFxuICAgIE5vdEZvdW5kRXJyb3IgPSAnTm90Rm91bmRFcnJvcicsXG4gICAgUXVvdGFFeGNlZWRlZEVycm9yID0gJ1F1b3RhRXhjZWVkZWRFcnJvcicsXG4gICAgU3ludGF4RXJyb3IgPSAnU3ludGF4RXJyb3InLFxuICAgIFJlYWRPbmx5RXJyb3IgPSAnUmVhZE9ubHlFcnJvcicsXG4gICAgVHJhbnNhY3Rpb25JbmFjdGl2ZUVycm9yID0gJ1RyYW5zYWN0aW9uSW5hY3RpdmVFcnJvcicsXG4gICAgVW5rbm93bkVycm9yID0gJ1Vua25vd25FcnJvcicsXG4gICAgVmVyc2lvbkVycm9yID0gJ1ZlcnNpb25FcnJvcicsXG59XG5cbmV4cG9ydCBjb25zdCBOQU1FRF9QSVBFX1VSTF9QQVRIX1BSRUZJWCA9ICcvbmFtZWQtcGlwZS8nO1xuIiwiaW1wb3J0IHtcbiAgICBERUZBVUxUX0NBQ0hFX0NPTlRST0xfSEVBREVSLFxuICAgIElEQkRPTUV4Y2VwdGlvbixcbiAgICBJREJMb2NhbENhY2hlU3RvcmUsXG4gICAgTE9DQUxfQ0FDSEVfTkFNRSxcbiAgICBMT0NBTF9DQUNIRV9WRVJTSU9OLFxuICAgIExPQ0FMX0hBTkRMRVNfTkFNRSxcbiAgICBMT0NBTF9IQU5ETEVTX1ZFUlNJT04sXG4gICAgUkFOR0VfSEVBREVSX1JFR0VYUCxcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbi8vIEluLW1lbW9yeSBjYWNoaW5nIHN0cmF0ZWd5IGludHJvZHVjZWQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuIFNlcnZpY2Ugd29ya2VycyBjYW4gYmUgdW5sb2FkZWQgZnJvbSBtZW1vcnkgYXQgYW55dGltZSxcbi8vIGhvd2V2ZXIgdGhpcyBzaG91bGQgd29yayBmb3IgYXMgbG9uZyBhcyB0aGUgYnJvd3NlciBkb2Vzbid0IHVubG9hZCB0aGUgc2VydmljZSB3b3JrZXIuXG5sZXQgY2FjaGVkT3BlbkRhdGFiYXNlOiBQcm9taXNlPElEQkRhdGFiYXNlPiB8IHVuZGVmaW5lZDtcbmxldCBjYWNoZWRIYW5kbGVEYXRhYmFzZTogUHJvbWlzZTxJREJEYXRhYmFzZT4gfCB1bmRlZmluZWQ7XG5jb25zdCBjYWNoZWRGaWxlSGFuZGxlczogeyBba2V5OiBzdHJpbmddOiBCbG9iIH0gPSB7fTtcblxuZnVuY3Rpb24gbGlzdGVuVG9XaGVuRGF0YWJhc2VOZWVkc1RyYXNoaW5nKFxuICAgIGRhdGFiYXNlOiBJREJEYXRhYmFzZSxcbiAgICBjbGVhckRCQ2FsbGJhY2s6ICgpID0+IHZvaWRcbik6IElEQkRhdGFiYXNlIHtcbiAgICBkYXRhYmFzZS5vbmNsb3NlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0RhdGFiYXNlIHdhcyB1bmV4cGVjdGVkbHkgY2xvc2VkLCB0cmFzaGluZyBpdCcsIGV2ZW50KTtcbiAgICAgICAgY2xlYXJEQkNhbGxiYWNrKCk7XG4gICAgfTtcbiAgICBkYXRhYmFzZS5vbmVycm9yID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RyYW5zYWN0aW9uIGVycm9yIGhhcyBidWJibGVkIHVwIHRvIGRhdGFiYXNlLCB0cmFzaGluZyBpdCcsIGV2ZW50KTtcbiAgICAgICAgZGF0YWJhc2UuY2xvc2UoKTtcbiAgICAgICAgY2xlYXJEQkNhbGxiYWNrKCk7XG4gICAgfTtcbiAgICBkYXRhYmFzZS5vbmFib3J0ID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RyYW5zYWN0aW9uIGFib3J0IGhhcyBidWJibGVkIHVwIHRvIGRhdGFiYXNlLCB0cmFzaGluZyBpdCcsIGV2ZW50KTtcbiAgICAgICAgZGF0YWJhc2UuY2xvc2UoKTtcbiAgICAgICAgY2xlYXJEQkNhbGxiYWNrKCk7XG4gICAgfTtcbiAgICBkYXRhYmFzZS5vbnZlcnNpb25jaGFuZ2UgPSAoZXZlbnQ6IElEQlZlcnNpb25DaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAvLyBOb3RlOiAoSmFtZXMpIFRoaXMgZXZlbnQgc2hvdWxkbid0IGZpcmUgYXMgd2UgZG9uJ3QgY3VycmVudGx5IHVwZ3JhZGUgYSBkYiBiZXlvbmQgdjEuIEFkZGVkIGhhbmRsZXIganVzdCBpbmNhc2VcbiAgICAgICAgLy8gdG8gcHJldmVudCBibG9ja2luZyBpbiBhIG5ldyB0YWIuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgRGF0YWJhc2UgJyR7ZGF0YWJhc2UubmFtZX0nIG5ldyB2ZXJzaW9uKCR7ZXZlbnQubmV3VmVyc2lvbn0pIG9wZW5lZCBpbiBuZXcgdGFiLCB0YXNoaW5nIGl0LmAsXG4gICAgICAgICAgICBldmVudFxuICAgICAgICApO1xuICAgICAgICBkYXRhYmFzZS5jbG9zZSgpO1xuICAgICAgICBjbGVhckRCQ2FsbGJhY2soKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRhdGFiYXNlO1xufVxuXG5mdW5jdGlvbiBvcGVuRGF0YWJhc2UoXG4gICAgZGJOYW1lOiBzdHJpbmcsXG4gICAgZGJWZXJzaW9uOiBudW1iZXIsXG4gICAgb251cGdyYWRlQ2FsbGJhY2s6IChyZXF1ZXN0OiBJREJPcGVuREJSZXF1ZXN0LCBldmVudDogSURCVmVyc2lvbkNoYW5nZUV2ZW50KSA9PiB2b2lkLFxuICAgIGNsZWFyREJDYWxsYmFjazogKCkgPT4gdm9pZFxuKTogUHJvbWlzZTxJREJEYXRhYmFzZT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHZhbHVlOiBJREJEYXRhYmFzZSkgPT4gdm9pZCwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wZW5SZXF1ZXN0OiBJREJPcGVuREJSZXF1ZXN0ID0gc2VsZi5pbmRleGVkREIub3BlbihkYk5hbWUsIGRiVmVyc2lvbik7XG5cbiAgICAgICAgb3BlblJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gZXZlbnQgPT4gb251cGdyYWRlQ2FsbGJhY2sob3BlblJlcXVlc3QsIGV2ZW50KTtcbiAgICAgICAgb3BlblJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShsaXN0ZW5Ub1doZW5EYXRhYmFzZU5lZWRzVHJhc2hpbmcob3BlblJlcXVlc3QucmVzdWx0LCBjbGVhckRCQ2FsbGJhY2spKTtcbiAgICAgICAgfTtcbiAgICAgICAgb3BlblJlcXVlc3Qub25lcnJvciA9IChlcnJvcjogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCBvcGVuIGRhdGFiYXNlJywgZXJyb3IpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQ2Fubm90IG9wZW4gZGF0YWJhc2UnKSk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbi8qKlxuICogR2V0IGNhY2hlZCBpbi1tZW1vcnkgb3Igb3BlbiB0aGUgbG9jYWwgY2FjaGUgYXNzZXQgSW5kZXhlZERCXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcGVuQXNzZXREYXRhYmFzZSgpOiBQcm9taXNlPElEQkRhdGFiYXNlPiB7XG4gICAgcmV0dXJuIChjYWNoZWRPcGVuRGF0YWJhc2UgPVxuICAgICAgICBjYWNoZWRPcGVuRGF0YWJhc2UgfHxcbiAgICAgICAgb3BlbkRhdGFiYXNlKFxuICAgICAgICAgICAgTE9DQUxfQ0FDSEVfTkFNRSxcbiAgICAgICAgICAgIExPQ0FMX0NBQ0hFX1ZFUlNJT04sXG4gICAgICAgICAgICAocmVxdWVzdCwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBVc2luZyBvbGQgdmVyc2lvbiBjb25kaXRpb25hbCB0byBhbGxvdyBmb3IgdXBncmFkaW5nIG9mIG9sZCBkYiB2ZXJzaW9uIHNjaGVtYXMuXG4gICAgICAgICAgICAgICAgLy8gTm8gcHJlLWV4aXN0aW5nIGRiIGV2ZW50cyB3aWxsIHByb3ZpZGUgb2xkVmVyc2lvbiAwLlxuICAgICAgICAgICAgICAgIGlmIChldmVudC5vbGRWZXJzaW9uIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnJlc3VsdC5jcmVhdGVPYmplY3RTdG9yZShJREJMb2NhbENhY2hlU3RvcmUuQVNTRVRTX1RBQkxFLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlQYXRoOiAncGVybWFuZW50VXJsJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IChjYWNoZWRPcGVuRGF0YWJhc2UgPSB1bmRlZmluZWQpXG4gICAgICAgICkpO1xufVxuXG4vKipcbiAqIEdldCBjYWNoZWQgaW4tbWVtb3J5IG9yIG9wZW4gdGhlIGxvY2FsIGNhY2hlIGZpbGVoYW5kbGUgSW5kZXhlZERCXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcGVuSGFuZGxlRGF0YWJhc2UoKTogUHJvbWlzZTxJREJEYXRhYmFzZT4ge1xuICAgIHJldHVybiAoY2FjaGVkSGFuZGxlRGF0YWJhc2UgPVxuICAgICAgICBjYWNoZWRIYW5kbGVEYXRhYmFzZSB8fFxuICAgICAgICBvcGVuRGF0YWJhc2UoXG4gICAgICAgICAgICBMT0NBTF9IQU5ETEVTX05BTUUsXG4gICAgICAgICAgICBMT0NBTF9IQU5ETEVTX1ZFUlNJT04sXG4gICAgICAgICAgICAocmVxdWVzdCwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBVc2luZyBvbGQgdmVyc2lvbiBjb25kaXRpb25hbCB0byBhbGxvdyBmb3IgdXBncmFkaW5nIG9mIG9sZCBkYiB2ZXJzaW9uIHNjaGVtYXMuXG4gICAgICAgICAgICAgICAgLy8gTm8gcHJlLWV4aXN0aW5nIGRiIGV2ZW50cyB3aWxsIHByb3ZpZGUgb2xkVmVyc2lvbiAwLlxuICAgICAgICAgICAgICAgIGlmIChldmVudC5vbGRWZXJzaW9uIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnJlc3VsdC5jcmVhdGVPYmplY3RTdG9yZShJREJMb2NhbENhY2hlU3RvcmUuSEFORExFU19UQUJMRSwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5UGF0aDogJ3Blcm1hbmVudFVybCcsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiAoY2FjaGVkSGFuZGxlRGF0YWJhc2UgPSB1bmRlZmluZWQpXG4gICAgICAgICkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGVkRmlsZUhhbmRsZShwZXJtYW5lbnRVcmw6IHN0cmluZyk6IEJsb2IgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGZpbGUgPSBjYWNoZWRGaWxlSGFuZGxlc1twZXJtYW5lbnRVcmxdO1xuXG4gICAgaWYgKGZpbGUpIHtcbiAgICAgICAgLy8gV2Uga25vdyB0aGF0IEZpbGUgb3IgQmxvYiBpbnN0YW5jZXMgY2FuIGdvIFwic3RhbGVcIiwgd2hlcmUgdGhlIG9ubHkgd2F5IHRvXG4gICAgICAgIC8vIGRldGVjdCB0aGlzIHNlZW1zIHRvIGJlIGNoZWNraW5nIHRoYXQgZmlsZSdzIHNpemUgaXMgbm90IDAuXG4gICAgICAgIGlmIChmaWxlLnNpemUgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBjYWNoZWRGaWxlSGFuZGxlc1twZXJtYW5lbnRVcmxdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZ2l2ZW4gVVJMIGZyb20gaW4tbWVtb3J5IGZpbGUgaGFuZGxlcyBtYXBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNhY2hlRmlsZUhhbmRsZShwZXJtYW5lbnRVcmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGRlbGV0ZSBjYWNoZWRGaWxlSGFuZGxlc1twZXJtYW5lbnRVcmxdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVGaWxlSGFuZGxlKHBlcm1hbmVudFVybDogc3RyaW5nLCBibG9iOiBCbG9iKTogdm9pZCB7XG4gICAgY2FjaGVkRmlsZUhhbmRsZXNbcGVybWFuZW50VXJsXSA9XG4gICAgICAgIGJsb2IgaW5zdGFuY2VvZiBGaWxlXG4gICAgICAgICAgICA/IG5ldyBCbG9iKFtibG9iXSwge1xuICAgICAgICAgICAgICAgICAgdHlwZTogYmxvYi50eXBlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBibG9iO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSYW5nZUhlYWRlcihyYW5nZUhlYWRlcjogc3RyaW5nKTogeyBmcm9tQnl0ZTogbnVtYmVyOyB0b0J5dGU6IG51bWJlciB9IHwgbnVsbCB7XG4gICAgY29uc3QgcmFuZ2VIZWFkZXJNYXRjaCA9IFJBTkdFX0hFQURFUl9SRUdFWFAuZXhlYyhyYW5nZUhlYWRlcik7XG4gICAgaWYgKHJhbmdlSGVhZGVyTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZyb21CeXRlOiBwYXJzZUludChyYW5nZUhlYWRlck1hdGNoLmdyb3Vwcz8uZnJvbUJ5dGUgPz8gJycpLFxuICAgICAgICAgICAgdG9CeXRlOiBwYXJzZUludChyYW5nZUhlYWRlck1hdGNoLmdyb3Vwcz8udG9CeXRlID8/ICcnKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRSYW5nZVJlc3BvbnNlKFxuICAgIGJsb2JTbGljZTogQmxvYixcbiAgICBmcm9tQnl0ZTogbnVtYmVyLFxuICAgIHRvQnl0ZTogbnVtYmVyLFxuICAgIG9yaWdpbmFsU2l6ZTogbnVtYmVyXG4pIHtcbiAgICByZXR1cm4gbmV3IHNlbGYuUmVzcG9uc2UoYmxvYlNsaWNlLCB7XG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuUEFSVElBTF9DT05URU5ULFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ2FjaGUtQ29udHJvbCc6IERFRkFVTFRfQ0FDSEVfQ09OVFJPTF9IRUFERVIsXG4gICAgICAgICAgICAnQWNjZXB0LVJhbmdlcyc6ICdieXRlcycsXG4gICAgICAgICAgICAnQ29udGVudC1SYW5nZSc6IGBieXRlcyAke2Zyb21CeXRlfS0ke3RvQnl0ZX0vJHtvcmlnaW5hbFNpemV9YCxcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZlVmFsaWRCeXRlUmFuZ2UoYmxvYjogQmxvYiwgZnJvbUJ5dGU6IG51bWJlciwgdG9CeXRlOiBudW1iZXIpIHtcbiAgICAvLyBSZWdyZXNzaW9uOiB3ZSBoYWQgYW4gaXNzdWUgY29ycmVjdGx5IHJlc3BvbmRpbmcgdG8gYSBcIlJhbmdlOiBieXRlcz0wLTBcIiBoZWFkZXIsXG4gICAgLy8gd2hpY2ggaXMgc3VwcG9zZWQgdG8gcmV0dXJuIGEgb25lLWJ5dGUgcmVzcG9uc2UuIEhvd2V2ZXIsIHdlIHVzZWQgdG8gaW5jb3JyZWN0bHlcbiAgICAvLyBkZXRlcm1pbmUgdGhpcyB0byByZXF1ZXN0IHRoZSBmdWxsIHJlc291cmNlLCBjYXVzaW5nIE9PTXMgKHBhZ2UgY3Jhc2hlcykuXG4gICAgaWYgKE51bWJlci5pc05hTih0b0J5dGUpKSB7XG4gICAgICAgIHRvQnl0ZSA9IGJsb2Iuc2l6ZSAtIDE7XG4gICAgfVxuXG4gICAgaWYgKGZyb21CeXRlID4gMCB8fCB0b0J5dGUgPCBibG9iLnNpemUgLSAxKSB7XG4gICAgICAgIGlmIChmcm9tQnl0ZSA8IGJsb2Iuc2l6ZSkge1xuICAgICAgICAgICAgY29uc3QgYmxvYlNsaWNlID0gYmxvYi5zbGljZShcbiAgICAgICAgICAgICAgICBmcm9tQnl0ZSxcbiAgICAgICAgICAgICAgICB0b0J5dGUgKyAxLFxuICAgICAgICAgICAgICAgIGJsb2IudHlwZSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYFJhbmdlIHJlcXVlc3QgcmVzdWx0cyBpbiAke2Jsb2JTbGljZS5zaXplfS1ieXRlIGJ5dGUgcmFuZ2VgKTtcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50UmFuZ2VSZXNwb25zZShcbiAgICAgICAgICAgICAgICBibG9iU2xpY2UsXG4gICAgICAgICAgICAgICAgZnJvbUJ5dGUsXG4gICAgICAgICAgICAgICAgZnJvbUJ5dGUgKyBibG9iU2xpY2Uuc2l6ZSAtIDEsXG4gICAgICAgICAgICAgICAgYmxvYi5zaXplXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWVraW5nIG91dHNpZGUgcmVzb3VyY2Ugc2l6ZScpO1xuICAgICAgICByZXR1cm4gbmV3IHNlbGYuUmVzcG9uc2UobnVsbCwge1xuICAgICAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5SRVFVRVNURURfUkFOR0VfTk9UX1NBVElTRklBQkxFLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ1JhbmdlIGhlYWRlciByZXF1ZXN0cyBmdWxsIHJlc291cmNlLCB3aGljaCB3ZSByZXR1cm4gYXMgSFRUUC8yMDYnKTtcbiAgICBjb25zdCByZXR1cm5CbG9iID0gbmV3IEJsb2IoW2Jsb2JdLCB7XG4gICAgICAgIHR5cGU6IGJsb2IudHlwZSxcbiAgICB9KTtcbiAgICByZXR1cm4gY29udGVudFJhbmdlUmVzcG9uc2UocmV0dXJuQmxvYiwgMCwgYmxvYi5zaXplIC0gMSwgYmxvYi5zaXplKTtcbn1cblxuLyoqXG4gKiBNYXBzIEluZGV4ZWREQiBET01FeGNlcHRpb24gZXJyb3IgdG8gSHR0cCBTdGF0dXNDb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGJFcnJvclRvU3RhdHVzQ29kZShlcnJvck5hbWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgc3dpdGNoIChlcnJvck5hbWUpIHtcbiAgICAgICAgY2FzZSBJREJET01FeGNlcHRpb24uU3ludGF4RXJyb3I6IC8vIFRoZSBrZXlQYXRoIGFyZ3VtZW50IGlzIGFuIGludmFsaWQgZm9ybWF0XG4gICAgICAgIGNhc2UgSURCRE9NRXhjZXB0aW9uLkRhdGFFcnJvcjogLy8gRGF0YSBwcm92aWRlZCBkb2Vzbid0IG1lZXQgcmVxdWlyZW1lbnRzXG4gICAgICAgICAgICByZXR1cm4gU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1Q7XG4gICAgICAgIGNhc2UgSURCRE9NRXhjZXB0aW9uLk5vdEZvdW5kRXJyb3I6XG4gICAgICAgICAgICByZXR1cm4gU3RhdHVzQ29kZXMuTk9UX0ZPVU5EO1xuICAgICAgICBjYXNlIElEQkRPTUV4Y2VwdGlvbi5RdW90YUV4Y2VlZGVkRXJyb3I6XG4gICAgICAgICAgICByZXR1cm4gU3RhdHVzQ29kZXMuSU5TVUZGSUNJRU5UX1NUT1JBR0U7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gU3RhdHVzQ29kZXMuU0VSVklDRV9VTkFWQUlMQUJMRTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gJ2h0dHAtc3RhdHVzLWNvZGVzJztcbmltcG9ydCB7IFBlcm1hbmVudFVybCB9IGZyb20gJy4vc3ctaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLi91dGlsL2ZlYXR1cmUtZmxhZ3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlT2JqZWN0IHtcbiAgICBwZXJtYW5lbnRVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBc3NldE9iamVjdCBleHRlbmRzIENhY2hlT2JqZWN0IHtcbiAgICBibG9iOiBCbG9iO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhhbmRsZU9iamVjdCBleHRlbmRzIENhY2hlT2JqZWN0IHtcbiAgICBoYW5kbGU6IEZpbGVTeXN0ZW1GaWxlSGFuZGxlO1xuICAgIGZpbGVTaXplOiBudW1iZXI7XG59XG5cbmV4cG9ydCBlbnVtIE1lc3NhZ2VDaGFubmVsT3BlcmF0aW9uIHtcbiAgICBIeWRyYXRpb25Mb29rdXAgPSAnbG9va3VwJyxcbiAgICBGaWxlU3lzdGVtUGVybWlzc2lvbiA9ICdmcy1wZXJtaXNzaW9uJyxcbiAgICBRdWVyeUZlYXR1cmVGbGFnID0gJ3F1ZXJ5LWZlYXR1cmUnLFxufVxuXG5leHBvcnQgZW51bSBSZXF1ZXN0SGVhZGVyS2V5IHtcbiAgICBSQU5HRSA9ICdSYW5nZScsXG59XG5cbmV4cG9ydCBlbnVtIFJlc3BvbnNlSGVhZGVyS2V5IHtcbiAgICBDT05URU5UX1JBTkdFID0gJ0NvbnRlbnQtUmFuZ2UnLFxuICAgIENPTlRFTlRfTEVOR1RIID0gJ0NvbnRlbnQtTGVuZ3RoJyxcbiAgICBDT05URU5UX1RZUEUgPSAnQ29udGVudC1UeXBlJyxcbiAgICBDQUNIRV9DT05UUk9MID0gJ0NhY2hlLUNvbnRyb2wnLFxuICAgIEFDQ0VQVF9SQU5HRVMgPSAnQWNjZXB0LVJhbmdlcycsXG4gICAgQ0xJUENIQU1QX0NIVU5LX0lEID0gJ1gtQ2xpcGNoYW1wLUNodW5rJyxcbiAgICBDTElQQ0hBTVBfQkxPQl9TSVpFID0gJ1gtQ2xpcGNoYW1wLVNpemUnLFxuICAgIExBU1RfTU9ESUZJRUQgPSAnTGFzdC1Nb2RpZmllZCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZVJlcXVlc3Q8Uj4ge1xuICAgIG9wZXJhdGlvbjogTWVzc2FnZUNoYW5uZWxPcGVyYXRpb247XG4gICAgcmVxdWVzdDogUjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhbFJlcXVlc3Qge1xuICAgIHBlcm1hbmVudFVybDogUGVybWFuZW50VXJsO1xuICAgIHJlcXVlc3RIZWFkZXJzOiBNYXA8UmVxdWVzdEhlYWRlcktleSwgc3RyaW5nPjtcbiAgICBza2lwTWFudWFsUmVoeWRyYXRpb246IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUhhbmRsZVJlcXVlc3Qge1xuICAgIHBlcm1hbmVudFVybDogUGVybWFuZW50VXJsO1xuICAgIGhhbmRsZTogRmlsZVN5c3RlbUZpbGVIYW5kbGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlGZWF0dXJlUmVxdWVzdCB7XG4gICAgZmVhdHVyZTogRmVhdHVyZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlT3BlcmF0aW9uUmVzcG9uc2Uge1xuICAgIHN0YXR1c0NvZGU6IFN0YXR1c0NvZGVzO1xuICAgIHN0YXR1c1RleHQ/OiBzdHJpbmc7XG4gICAgcmVzcG9uc2VIZWFkZXJzPzogTWFwPFJlc3BvbnNlSGVhZGVyS2V5LCBzdHJpbmc+O1xufVxuXG5mdW5jdGlvbiBpc01lc3NhZ2VPcGVyYXRpb25SZXNwb25zZShyZXNwb25zZTogYW55KTogcmVzcG9uc2UgaXMgTWVzc2FnZU9wZXJhdGlvblJlc3BvbnNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgICByZXNwb25zZSAmJlxuICAgICAgICB0eXBlb2YgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgKHJlc3BvbnNlLnJlc3BvbnNlSGVhZGVycyA9PT0gdW5kZWZpbmVkIHx8IHJlc3BvbnNlLnJlc3BvbnNlSGVhZGVycyBpbnN0YW5jZW9mIE1hcClcbiAgICApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsUmVzcG9uc2UgZXh0ZW5kcyBNZXNzYWdlT3BlcmF0aW9uUmVzcG9uc2Uge1xuICAgIHJlc3BvbnNlQ29udGVudDogQmxvYiB8IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsUmVzcG9uc2UocmVzcG9uc2U6IGFueSk6IHJlc3BvbnNlIGlzIExvY2FsUmVzcG9uc2Uge1xuICAgIHJldHVybiAoXG4gICAgICAgIHJlc3BvbnNlICYmXG4gICAgICAgIChyZXNwb25zZS5yZXNwb25zZUNvbnRlbnQgPT09IG51bGwgfHwgcmVzcG9uc2UucmVzcG9uc2VDb250ZW50IGluc3RhbmNlb2YgQmxvYikgJiZcbiAgICAgICAgaXNNZXNzYWdlT3BlcmF0aW9uUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWxlSGFuZGxlUmVzcG9uc2UgZXh0ZW5kcyBNZXNzYWdlT3BlcmF0aW9uUmVzcG9uc2Uge1xuICAgIHBlcm1pc3Npb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpbGVIYW5kbGVSZXNwb25zZShyZXNwb25zZTogYW55KTogcmVzcG9uc2UgaXMgRmlsZUhhbmRsZVJlc3BvbnNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgICByZXNwb25zZSAmJlxuICAgICAgICB0eXBlb2YgcmVzcG9uc2UucGVybWlzc2lvbiA9PT0gKCdzdHJpbmcnIHx8ICd1bmRlZmluZWQnKSAmJlxuICAgICAgICBpc01lc3NhZ2VPcGVyYXRpb25SZXNwb25zZShyZXNwb25zZSlcbiAgICApO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUZlYXR1cmVSZXNwb25zZSB7XG4gICAgZmVhdHVyZTogRmVhdHVyZTtcbiAgICBlbmFibGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNRdWVyeUZlYXR1cmVSZXNwb25zZShyZXNwb25zZTogYW55KTogcmVzcG9uc2UgaXMgUXVlcnlGZWF0dXJlUmVzcG9uc2Uge1xuICAgIHJldHVybiAoXG4gICAgICAgIHJlc3BvbnNlICYmIHR5cGVvZiByZXNwb25zZS5mZWF0dXJlID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgcmVzcG9uc2UuZW5hYmxlZCA9PT0gJ2Jvb2xlYW4nXG4gICAgKTtcbn1cbiIsImltcG9ydCB7IE1lc3NhZ2VSZXF1ZXN0IH0gZnJvbSAnLi4vY2FjaGluZy1pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSB9IGZyb20gJy4uL3N3LWludGVyZmFjZXMnO1xuXG5kZWNsYXJlIGxldCBzZWxmOiBXaW5kb3cgJiB0eXBlb2YgZ2xvYmFsVGhpcyAmIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZTtcblxuLyoqXG4gKiBTZW5kIG1lc3NhZ2Ugb24gTWVzc2FnZUNoYW5uZWwgcG9ydCAxIHRvIHRoZSBwcm92aWRlZCBjbGllbnRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlPFJlcXVlc3Q+KFxuICAgIGNsaWVudElkOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogTWVzc2FnZVJlcXVlc3Q8UmVxdWVzdD5cbik6IFByb21pc2U8TWVzc2FnZUV2ZW50PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgc2VsZi5jbGllbnRzLmdldChjbGllbnRJZCk7XG4gICAgY29uc3QgbWVzc2FnZUNoYW5uZWwgPSBuZXcgc2VsZi5NZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxNZXNzYWdlRXZlbnQ8UmVzcG9uc2U+PihyZXNvbHZlID0+IHtcbiAgICAgICAgbWVzc2FnZUNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhICYmIGV2ZW50LmRhdGEub3BlcmF0aW9uID09PSBtZXNzYWdlLm9wZXJhdGlvbikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoY2xpZW50KSB7XG4gICAgICAgICAgICBjbGllbnQucG9zdE1lc3NhZ2UobWVzc2FnZSwgW21lc3NhZ2VDaGFubmVsLnBvcnQyXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCB7XG4gICAgSURCRE9NRXhjZXB0aW9uLFxuICAgIElEQkxvY2FsQ2FjaGVTdG9yZSxcbiAgICBMT0NBTF9DQUNIRV9OQU1FLFxuICAgIFBST01JU0VfVElNRU9VVF9MRU5HVEgsXG59IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gICAgZ2V0Q2FjaGVkRmlsZUhhbmRsZSxcbiAgICBjYWNoZUZpbGVIYW5kbGUsXG4gICAgZGVsZXRlQ2FjaGVGaWxlSGFuZGxlLFxuICAgIGdldE9wZW5Bc3NldERhdGFiYXNlLFxuICAgIGdldE9wZW5IYW5kbGVEYXRhYmFzZSxcbn0gZnJvbSAnLi9kYXRhYmFzZS11dGlscyc7XG5pbXBvcnQgeyBBc3NldE9iamVjdCwgQ2FjaGVPYmplY3QsIEhhbmRsZU9iamVjdCB9IGZyb20gJy4uL2NhY2hpbmctaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJREJUcmFuc2FjdGlvbkVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgUGVybWFuZW50VXJsIH0gZnJvbSAnLi4vc3ctaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBjcmVhdGVUaW1lZFByb21pc2UgfSBmcm9tICcuL3RpbWVkLXByb21pc2UnO1xuXG4vKipcbiAqIEdlbmVyaWMgaW5kZXhlZERCIGhlbHBlciB0byBnZXQgc3RvcmUgb2JqZWN0cyBmcm9tIHRoZSBwcm92aWRlZCBzdG9yZSBmb3IgdGhlIGdpdmVuIFVSTFxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRTdG9yZVZhbHVlPFQgZXh0ZW5kcyBDYWNoZU9iamVjdD4oXG4gICAgZGF0YWJhc2U6IElEQkRhdGFiYXNlLFxuICAgIHN0b3JlTmFtZTogSURCTG9jYWxDYWNoZVN0b3JlLFxuICAgIHBlcm1hbmVudFVybDogc3RyaW5nLFxuICAgIHByb21pc2VUaW1lb3V0ID0gUFJPTUlTRV9USU1FT1VUX0xFTkdUSFxuKTogUHJvbWlzZTxUPiB7XG4gICAgY29uc29sZS5sb2coYERhdGFiYXNlICR7TE9DQUxfQ0FDSEVfTkFNRX0gc3VjY2Vzc2Z1bGx5IG9wZW5lZGApO1xuXG4gICAgcmV0dXJuIGNyZWF0ZVRpbWVkUHJvbWlzZTxUPihcbiAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYXRhYmFzZS50cmFuc2FjdGlvbihbc3RvcmVOYW1lXSwgJ3JlYWRvbmx5Jyk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmVOYW1lKS5nZXQocGVybWFuZW50VXJsKTtcblxuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvdW5kIHJlc291cmNlIGZvciAke3Blcm1hbmVudFVybH0gaW4gJyR7c3RvcmVOYW1lfScgZGF0YWJhc2UgT2JqZWN0U3RvcmVcbiAgICAgICAgICAgICAgICAgICAgYCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgYENvdWxkIG5vdCBmaW5kICR7cGVybWFuZW50VXJsfSBpbiAnJHtzdG9yZU5hbWV9JyBkYXRhYmFzZSBPYmplY3RTdG9yZWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCAnJHtzdG9yZU5hbWV9JyBzdG9yZSBvYmplY3QgZm9yICR7cGVybWFuZW50VXJsfWApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgRXJyb3IgcGVyZm9ybWluZyBkYXRhYmFzZSBsb29rdXAgZm9yICR7cGVybWFuZW50VXJsfSBpbiAnJHtzdG9yZU5hbWV9JyBkYXRhYmFzZSBPYmplY3RTdG9yZWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJlamVjdChcbiAgICAgICAgICAgICAgICAgICAgbmV3IElEQlRyYW5zYWN0aW9uRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgcGVyZm9ybWluZyAnJHtzdG9yZU5hbWV9JyBkYXRhYmFzZSBnZXQgZm9yICR7cGVybWFuZW50VXJsfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5lcnJvci5uYW1lXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICBuZXcgSURCVHJhbnNhY3Rpb25FcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBBYm9ydCBwZXJmb3JtaW5nICcke3N0b3JlTmFtZX0nIGRhdGFiYXNlIGdldCBmb3IgJHtwZXJtYW5lbnRVcmx9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmVycm9yLm5hbWUgPz8gSURCRE9NRXhjZXB0aW9uLkFib3J0RXJyb3JcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBwcm9taXNlVGltZW91dCxcbiAgICAgICAgJ1RpbWVvdXQgcGVyZm9ybWluZyBkYXRhYmFzZSBsb29rdXAnXG4gICAgKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIEFzc2V0T2JqZWN0IGZyb20gdGhlIGFzc2V0cyBzdG9yZSBmb3IgdGhlIGdpdmVuIFVSTFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmV0cmlldmVBc3NldE9iamVjdChwZXJtYW5lbnRVcmw6IHN0cmluZyk6IFByb21pc2U8QXNzZXRPYmplY3Q+IHtcbiAgICBjb25zdCBibG9iID0gZ2V0Q2FjaGVkRmlsZUhhbmRsZShwZXJtYW5lbnRVcmwpO1xuICAgIGlmIChibG9iKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBGaWxlIGhhbmRsZSBmb3IgJHtwZXJtYW5lbnRVcmx9IHdhcyBwcmV2aW91c2x5IGNhY2hlZGAsIGJsb2IpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGVybWFuZW50VXJsLFxuICAgICAgICAgICAgYmxvYixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgRmlsZSBoYW5kbGUgZm9yICR7cGVybWFuZW50VXJsfSB3YXMgbm90IHByZXZpb3VzbHkgY2FjaGVkYCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0U3RvcmVWYWx1ZTxBc3NldE9iamVjdD4oXG4gICAgICAgIGF3YWl0IGdldE9wZW5Bc3NldERhdGFiYXNlKCksXG4gICAgICAgIElEQkxvY2FsQ2FjaGVTdG9yZS5BU1NFVFNfVEFCTEUsXG4gICAgICAgIHBlcm1hbmVudFVybFxuICAgICk7XG4gICAgY2FjaGVGaWxlSGFuZGxlKHBlcm1hbmVudFVybCwgcmVzdWx0LmJsb2IpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSBIYW5kbGVPYmplY3QgZnJvbSB0aGUgaGFuZGxlcyBzdG9yZSBmb3IgdGhlIGdpdmVuIFVSTFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmV0cmlldmVIYW5kbGVPYmplY3QocGVybWFuZW50VXJsOiBzdHJpbmcpOiBQcm9taXNlPEhhbmRsZU9iamVjdD4ge1xuICAgIHJldHVybiBhd2FpdCBnZXRTdG9yZVZhbHVlPEhhbmRsZU9iamVjdD4oXG4gICAgICAgIGF3YWl0IGdldE9wZW5IYW5kbGVEYXRhYmFzZSgpLFxuICAgICAgICBJREJMb2NhbENhY2hlU3RvcmUuSEFORExFU19UQUJMRSxcbiAgICAgICAgcGVybWFuZW50VXJsXG4gICAgKTtcbn1cblxuLyoqXG4gKiBHZW5lcmljIGluZGV4ZWREQiBoZWxwZXIgdG8gYWRkIHN0b3JlIG9iamVjdHMgdG8gdGhlIHByb3ZpZGVkIHN0b3JlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFkZFN0b3JlVmFsdWU8VCBleHRlbmRzIENhY2hlT2JqZWN0PihcbiAgICBkYXRhYmFzZTogSURCRGF0YWJhc2UsXG4gICAgc3RvcmVOYW1lOiBJREJMb2NhbENhY2hlU3RvcmUsXG4gICAgY2FjaGVPYmplY3Q6IFQsXG4gICAgcHJvbWlzZVRpbWVvdXQgPSBQUk9NSVNFX1RJTUVPVVRfTEVOR1RIXG4pOiBQcm9taXNlPFBlcm1hbmVudFVybD4ge1xuICAgIGNvbnNvbGUubG9nKGBEYXRhYmFzZSAke0xPQ0FMX0NBQ0hFX05BTUV9IHN1Y2Nlc3NmdWxseSBvcGVuZWRgKTtcblxuICAgIHJldHVybiBjcmVhdGVUaW1lZFByb21pc2U8UGVybWFuZW50VXJsPihcbiAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYXRhYmFzZS50cmFuc2FjdGlvbihbc3RvcmVOYW1lXSwgJ3JlYWR3cml0ZScpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlTmFtZSkuYWRkKGNhY2hlT2JqZWN0KTtcblxuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVzdWx0ICYmIHR5cGVvZiByZXF1ZXN0LnJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICBgU3VjY2Vzc2Z1bGx5IGFkZGVkICR7cmVxdWVzdC5yZXN1bHR9IGluICcke3N0b3JlTmFtZX0nIGRhdGFiYXNlIHN0b3JlYFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzdWx0IGFzIFBlcm1hbmVudFVybCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBVbmV4cGVjdGVkIHN0b3JlIGtleSAke3JlcXVlc3QucmVzdWx0fSBpbiAnJHtzdG9yZU5hbWV9JyBkYXRhYmFzZSBzdG9yZWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQW4gZXJyb3Igb2NjdXJyZWQgZGV0ZXJtaW5pbmcgdGhlIGFkZGVkIHN0b3JlIGtleScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBFcnJvciBwZXJmb3JtaW5nIGRhdGFiYXNlIGFkZCBmb3IgJHtjYWNoZU9iamVjdC5wZXJtYW5lbnRVcmx9IGluICcke3N0b3JlTmFtZX0nIGRhdGFiYXNlIE9iamVjdFN0b3JlYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICBuZXcgSURCVHJhbnNhY3Rpb25FcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciBwZXJmb3JtaW5nICcke3N0b3JlTmFtZX0nIGRhdGFiYXNlIGFkZCBmb3IgJHtjYWNoZU9iamVjdC5wZXJtYW5lbnRVcmx9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmVycm9yLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBJREJUcmFuc2FjdGlvbkVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEFib3J0IHBlcmZvcm1pbmcgJyR7c3RvcmVOYW1lfScgZGF0YWJhc2UgYWRkIGZvciAke2NhY2hlT2JqZWN0LnBlcm1hbmVudFVybH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24uZXJyb3IubmFtZSA/PyBJREJET01FeGNlcHRpb24uQWJvcnRFcnJvclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHByb21pc2VUaW1lb3V0LFxuICAgICAgICAnVGltZW91dCBwZXJmb3JtaW5nIGRhdGFiYXNlIGFkZCdcbiAgICApO1xufVxuXG4vKipcbiAqIEFkZCBBc3NldE9iamVjdCB0byB0aGUgYXNzZXRzIHN0b3JlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRBc3NldE9iamVjdChhc3NldE9iamVjdDogQXNzZXRPYmplY3QpOiBQcm9taXNlPFBlcm1hbmVudFVybD4ge1xuICAgIHJldHVybiBhd2FpdCBhZGRTdG9yZVZhbHVlPEFzc2V0T2JqZWN0PihcbiAgICAgICAgYXdhaXQgZ2V0T3BlbkFzc2V0RGF0YWJhc2UoKSxcbiAgICAgICAgSURCTG9jYWxDYWNoZVN0b3JlLkFTU0VUU19UQUJMRSxcbiAgICAgICAgYXNzZXRPYmplY3RcbiAgICApO1xufVxuXG4vKipcbiAqIEdlbmVyaWMgaW5kZXhlZERCIGhlbHBlciB0byBkZWxldGUgc3RvcmUgb2JqZWN0cyBmcm9tIHRoZSBwcm92aWRlZCBzdG9yZSBmb3IgdGhlIGdpdmVuIGtleVxuICovXG5hc3luYyBmdW5jdGlvbiBkZWxldGVTdG9yZVZhbHVlKFxuICAgIGRhdGFiYXNlOiBJREJEYXRhYmFzZSxcbiAgICBzdG9yZU5hbWU6IElEQkxvY2FsQ2FjaGVTdG9yZSxcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHByb21pc2VUaW1lb3V0ID0gUFJPTUlTRV9USU1FT1VUX0xFTkdUSFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc29sZS5sb2coYERhdGFiYXNlICR7TE9DQUxfQ0FDSEVfTkFNRX0gc3VjY2Vzc2Z1bGx5IG9wZW5lZGApO1xuXG4gICAgcmV0dXJuIGNyZWF0ZVRpbWVkUHJvbWlzZTx2b2lkPihcbiAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYXRhYmFzZS50cmFuc2FjdGlvbihbc3RvcmVOYW1lXSwgJ3JlYWR3cml0ZScsIHtcbiAgICAgICAgICAgICAgICBkdXJhYmlsaXR5OiAncmVsYXhlZCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlTmFtZSkuZGVsZXRlKGtleSk7XG5cbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBkZWxldGVkICR7a2V5fSBpbiAnJHtzdG9yZU5hbWV9JyBkYXRhYmFzZSBPYmplY3RTdG9yZWApO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBFcnJvciBwZXJmb3JtaW5nIGRhdGFiYXNlIGRlbGV0ZSBmb3IgJHtrZXl9IGluICcke3N0b3JlTmFtZX0nIGRhdGFiYXNlIHN0b3JlYCxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24uZXJyb3IubmFtZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICBuZXcgSURCVHJhbnNhY3Rpb25FcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciBwZXJmb3JtaW5nICcke3N0b3JlTmFtZX0nIGRhdGFiYXNlIGRlbGV0ZSBmb3IgJHtrZXl9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmVycm9yLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBJREJUcmFuc2FjdGlvbkVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEFib3J0ZWQgcGVyZm9ybWluZyAnJHtzdG9yZU5hbWV9JyBkYXRhYmFzZSBkZWxldGUgZm9yICR7a2V5fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5lcnJvci5uYW1lID8/IElEQkRPTUV4Y2VwdGlvbi5BYm9ydEVycm9yXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJvbWlzZVRpbWVvdXQsXG4gICAgICAgICdUaW1lb3V0IHBlcmZvcm1pbmcgZGF0YWJhc2UgZGVsZXRlJ1xuICAgICk7XG59XG5cbi8qKlxuICogRGVsZXRlIG9iamVjdCBmcm9tIHRoZSBhc3NldHMgc3RvcmUgZm9yIHRoZSBnaXZlbiBVUkxcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFzc2V0T2JqZWN0KHBlcm1hbmVudFVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgZGVsZXRlU3RvcmVWYWx1ZShcbiAgICAgICAgYXdhaXQgZ2V0T3BlbkFzc2V0RGF0YWJhc2UoKSxcbiAgICAgICAgSURCTG9jYWxDYWNoZVN0b3JlLkFTU0VUU19UQUJMRSxcbiAgICAgICAgcGVybWFuZW50VXJsXG4gICAgKTtcbiAgICByZXR1cm4gZGVsZXRlQ2FjaGVGaWxlSGFuZGxlKHBlcm1hbmVudFVybCk7XG59XG5cbi8qKlxuICogRGVsZXRlIG9iamVjdCBmcm9tIHRoZSBoYW5kbGVzIHN0b3JlIGZvciB0aGUgZ2l2ZW4gVVJsXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVIYW5kbGVPYmplY3QocGVybWFuZW50VXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYXdhaXQgZGVsZXRlU3RvcmVWYWx1ZShcbiAgICAgICAgYXdhaXQgZ2V0T3BlbkhhbmRsZURhdGFiYXNlKCksXG4gICAgICAgIElEQkxvY2FsQ2FjaGVTdG9yZS5IQU5ETEVTX1RBQkxFLFxuICAgICAgICBwZXJtYW5lbnRVcmxcbiAgICApO1xufVxuIiwiaW1wb3J0IHsgaWRiRXJyb3JUb1N0YXR1c0NvZGUgfSBmcm9tICcuL2RhdGFiYXNlLXV0aWxzJztcblxuZXhwb3J0IGNsYXNzIElEQlRyYW5zYWN0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICAgICAgLy8gUHJldHRpZXIgMi4zLjEgd2FudHMgdG8gc3RyaXAgb3V0IHRoZSBvdmVycmlkZSBoZXJlIHdoaWNoIGJyZWFrcyB0aGUgVFMgYnVpbGQuXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgbmFtZTogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGFzRmV0Y2hSZXNwb25zZSgpOiBSZXNwb25zZSB7XG4gICAgICAgIHJldHVybiBuZXcgc2VsZi5SZXNwb25zZShudWxsLCB7XG4gICAgICAgICAgICBzdGF0dXM6IGlkYkVycm9yVG9TdGF0dXNDb2RlKHRoaXMubmFtZSksXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiB0aGlzLm1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUaW1lZFByb21pc2U8VD4oXG4gICAgcHJvbWlzZUNhbGxiYWNrOiAocmVzb2x2ZTogKHJlc3VsdDogVCkgPT4gdm9pZCwgcmVqZWN0OiAoZXJyb3I6IEVycm9yKSA9PiB2b2lkKSA9PiB2b2lkLFxuICAgIHRpbWVvdXRNczogbnVtYmVyLFxuICAgIGVycm9yTXNnPzogc3RyaW5nXG4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgaWQ6IG51bWJlcjtcbiAgICBjb25zdCB0aW1lb3V0UHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWQgPSBzZWxmLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnJvck1zZyB8fCBgUHJvbWlzZSB0aW1lZCBvdXQgYWZ0ZXIgJHt0aW1lb3V0TXN9IG1pbGxpc2ApKTtcbiAgICAgICAgfSwgdGltZW91dE1zKTtcbiAgICB9KTtcbiAgICAvLyBSZXR1cm5zIGEgcmFjZSBiZXR3ZWVuIHRoZSB0aW1lb3V0IHByb21pc2UgYW5kIHRoZSBwcm92aWRlZCBwcm9taXNlXG4gICAgcmV0dXJuIFByb21pc2UucmFjZShbbmV3IFByb21pc2U8VD4ocHJvbWlzZUNhbGxiYWNrKSwgdGltZW91dFByb21pc2VdKS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBzZWxmLmNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IEZldGNoRXZlbnQgfSBmcm9tICcuLi9zdy1pbnRlcmZhY2VzJztcbmltcG9ydCB7IExPQ0FMX0NBQ0hFX1VSTF9QQVRIX1BSRUZJWCwgTkFNRURfUElQRV9VUkxfUEFUSF9QUkVGSVggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gJ2h0dHAtc3RhdHVzLWNvZGVzJztcbmltcG9ydCB7IHNlcnZlRGVsZXRlUmVxdWVzdCwgc2VydmVHZXRSZXF1ZXN0IH0gZnJvbSAnLi9yb290LXJldHJ5LWhhbmRsZXInO1xuaW1wb3J0IHsgY2xvc2VGaWxlLCByZWFkRmlsZSwgd3JpdGVGaWxlIH0gZnJvbSAnLi9uYW1lZC1waXBlJztcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcjxFIGV4dGVuZHMgRXZlbnQ+KHR5cGU6IHN0cmluZywgaGFuZGxlcjogKGV2dDogRSkgPT4gdm9pZCkge1xuICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyIGFzIChldnQ6IEV2ZW50KSA9PiB2b2lkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXJFdmVudExpc3RlbmVyKCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgKGZldGNoRXZlbnQ6IEZldGNoRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFVybDogVVJMID0gbmV3IFVSTChmZXRjaEV2ZW50LnJlcXVlc3QudXJsKTtcblxuICAgICAgICAgICAgaWYgKHBhcnNlZFVybC5wYXRobmFtZS5pbmRleE9mKExPQ0FMX0NBQ0hFX1VSTF9QQVRIX1BSRUZJWCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgYFJlY2VpdmVkICR7ZmV0Y2hFdmVudC5yZXF1ZXN0Lm1ldGhvZH0gY2FjaGluZyByZXF1ZXN0IGZyb20gY2xpZW50ICR7ZmV0Y2hFdmVudC5jbGllbnRJZH0gZm9yIFVSTDogJHtmZXRjaEV2ZW50LnJlcXVlc3QudXJsfWBcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChmZXRjaEV2ZW50LnJlcXVlc3QubWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0dFVCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEV2ZW50LnJlc3BvbmRXaXRoKHNlcnZlR2V0UmVxdWVzdChmZXRjaEV2ZW50KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnREVMRVRFJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoRXZlbnQucmVzcG9uZFdpdGgoc2VydmVEZWxldGVSZXF1ZXN0KGZldGNoRXZlbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hFdmVudC5yZXNwb25kV2l0aChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBzZWxmLlJlc3BvbnNlKG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuTUVUSE9EX05PVF9BTExPV0VELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogJ2ludmFsaWQgbWV0aG9kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VkVXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoTkFNRURfUElQRV9VUkxfUEFUSF9QUkVGSVgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2tpbmcgPSBwYXJzZWRVcmwuc2VhcmNoLmluZGV4T2YoJ25vbmJsb2NrJykgPCAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRVcmwucGF0aG5hbWUuc3Vic3RyaW5nKE5BTUVEX1BJUEVfVVJMX1BBVEhfUFJFRklYLmxlbmd0aClcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChmZXRjaEV2ZW50LnJlcXVlc3QubWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0dFVCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGRm1wZWcgcmVhZGluZyBmcm9tIEguMjY0IGJpdHN0cmVhbSBvciB4MjY0IHJlYWRpbmcgWVVWNDIwcCBmcmFtZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRGaWxlKGZpbGVOYW1lLCBmZXRjaEV2ZW50LCBibG9ja2luZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUFVUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZGbXBlZyB3cml0aW5nIFlVVjQyMHAgZnJhbWUgb3IgeDI2NCB3cml0aW5nIHRvIEguMjY0IGJpdHN0cmVhbS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlRmlsZShmaWxlTmFtZSwgZmV0Y2hFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnREVMRVRFJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdyaXRlciBzaWduYWxzIEVPRiB0byByZWFkZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUZpbGUoZmlsZU5hbWUsIGZldGNoRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEV2ZW50LnJlc3BvbmRXaXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IHNlbGYuUmVzcG9uc2UobnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5NRVRIT0RfTk9UX0FMTE9XRUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiAnaW52YWxpZCBtZXRob2QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgU2VydmljZVdvcmtlciBFcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIC8vIFRPRE8oc29lcmVuKTogc2hvdWxkIHdlIGV4cGxpY2l0bHkgc2VuZCBiYWNrIGFuIEhUVFAvNTAwIGhlcmUsIHBlcmhhcHMgcHV0dGluZyB0aGVcbiAgICAgICAgICAgIC8vIGVycm9yIGludG8gdGhlIHJlc3BvbnNlIGJvZHkgZm9yIGFuYWx5dGljcy90ZWxlbWV0cnk/XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCAqIGFzIFByb3hpZWRDYWNoZVdvcmtlciBmcm9tICdiYXNlL3N3L3Byb3hpZWQtY2FjaGUtd29ya2VyJztcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gQWNjb3JkaW5nIHRvIHRoZSBnb29nbGUgc2VydmljZSB3b3JrZXIgZG9jcyB0aGUgd2FpdGluZyBwaGFzZSBlbnN1cmVzXG4gICAgLy8geW91J3JlIG9ubHkgcnVubmluZyBvbmUgdmVyc2lvbiBvZiB5b3VyIHNpdGUgLyBzZXJ2aWNlIHdvcmtlciBwZXIgc2Vzc2lvbi5cbiAgICAvLyBCeSBza2lwcGluZyB0aGUgd2FpdGluZyBwaGFzZSwgeW91IHN3YXAgb3V0IHRoZSBzZXJ2aWNlIHdvcmtlciBtaWQtc2Vzc2lvbixcbiAgICAvLyB3aGljaCBtZWFucyB0aGF0IGFueSBzdGF0ZSBpbiB0aGUgc2VydmljZSB3b3JrZXIgbWF5IGJlIGxvc3QuIEFzIGxvbmcgYXNcbiAgICAvLyB0aGUgc2VydmljZSB3b3JrZXIgcmVtYWlucyBzdGF0ZWxlc3MgYW5kIGRvZXNuJ3QgcGVyc2lzdCBtdWNoIGluIG1lbW9yeSB0aGVyZVxuICAgIC8vIHNob3VsZCBiZSBubyBjYXNlIHdoZXJlIGl0IG5lZWRzIHRvIHdhaXQuXG4gICAgLy9cbiAgICAvLyBUaGUgbWFpbiBhZHZhbnRhZ2Ugb2Ygc2tpcCB3YWl0aW5nIGlzIHRoYXQgYSB1c2VyIGRvZXNuJ3QgaGF2ZSB0byByZWZyZXNoIHRoZVxuICAgIC8vIHBhZ2UgdGhlIGZpcnN0IHRpbWUgdGhleSBhcnJpdmUgKGVmZmVjdGl2ZWx5IGhhbHZpbmcgdGhlIHBlcmNlaXZlZCBsb2FkIHRpbWUpLlxuICAgIHNlbGYuc2tpcFdhaXRpbmcoKTtcbn0pO1xuXG5Qcm94aWVkQ2FjaGVXb3JrZXIuZGVmYXVsdCgpO1xuXG4vLyBJbmNsdWRlIHRoZSBBbmd1bGFyIHNlcnZpY2Ugd29ya2VyIGNvZGUgb25seSBhZnRlciBvdXJcbi8vIGNhY2hlIHByb3h5LiBUaGUgQW5ndWxhciBzZXJ2aWNlIHdvcmtlciBsaWtlcyB0byBoaWphY2sgZmV0Y2ggZXZlbnRzXG4vLyB0aGF0IGl0IGlzIG5vdCByZXNwb25zaWJsZSBmb3IsIHN1Y2ggdGhhdCB3ZSBuZWVkIHRvIGFkZCBvdXJcbi8vIG93biBmZXRjaCBoYW5kbGVyIChmb3IgdGhlIGNhY2hlIFVSTHMpICpiZWZvcmUqIHRoZSBBbmd1bGFyIHNlcnZpY2Ugd29ya2VyXG4vLyBkb2VzIHNvLlxucmVxdWlyZSgnQGFuZ3VsYXIvc2VydmljZS13b3JrZXIvbmdzdy13b3JrZXInKTtcbiIsImltcG9ydCB7IEZldGNoRXZlbnQgfSBmcm9tICcuLi9zdy1pbnRlcmZhY2VzJztcbmltcG9ydCB7IHNlcnZlQXNzZXRDYWNoZVJlc3BvbnNlLCBzZXJ2ZUhhbmRsZUNhY2hlUmVzcG9uc2UgfSBmcm9tICcuL2RhdGFiYXNlLWhhbmRsZXInO1xuaW1wb3J0IHsgc2VydmVSZXF1ZXN0IGFzIHNlcnZlRnJvbnRlbmRSZXF1ZXN0IH0gZnJvbSAnLi9mcm9udGVuZC1oYW5kbGVyJztcbmltcG9ydCB7IGRlbGV0ZUFzc2V0T2JqZWN0IH0gZnJvbSAnLi9kYXRhYmFzZS1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBJREJUcmFuc2FjdGlvbkVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbmZ1bmN0aW9uIHVuYXZhaWxhYmxlUmVzcG9uc2UodXJsOiBzdHJpbmcsIGU6IEVycm9yKTogUmVzcG9uc2Uge1xuICAgIGNvbnNvbGUud2FybihgUGVybWFuZW50bHkgZmFpbGVkIHRvIHNlcnZlIHJlc291cmNlICR7dXJsfWAsIGUpO1xuICAgIHJldHVybiBuZXcgc2VsZi5SZXNwb25zZShudWxsLCB7XG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuR09ORSxcbiAgICAgICAgc3RhdHVzVGV4dDogJ2ZhaWxlZCB0byByZWh5ZHJhdGUnLFxuICAgIH0pO1xufVxuXG4vKipcbiAqIFNlcnZlIGZldGNoIEdFVCBtZXRob2QgcmVxdWVzdCB1c2luZyBsb2NhbCBjYWNoZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VydmVHZXRSZXF1ZXN0KGZldGNoRXZlbnQ6IEZldGNoRXZlbnQpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHNlcnZlQXNzZXRDYWNoZVJlc3BvbnNlKGZldGNoRXZlbnQpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHNlcnZlSGFuZGxlQ2FjaGVSZXNwb25zZShmZXRjaEV2ZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHNlcnZlRnJvbnRlbmRSZXF1ZXN0KGZldGNoRXZlbnQsIHNlcnZlR2V0UmVxdWVzdCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmF2YWlsYWJsZVJlc3BvbnNlKGZldGNoRXZlbnQucmVxdWVzdC51cmwsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBQZXJmb3JtIGZldGNoIERFTEVURSBtZXRob2QgcmVxdWVzdCBvbiBsb2NhbCBjYWNoZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VydmVEZWxldGVSZXF1ZXN0KGZldGNoRXZlbnQ6IEZldGNoRXZlbnQpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsZXRlQXNzZXRPYmplY3QoZmV0Y2hFdmVudC5yZXF1ZXN0LnVybCk7XG4gICAgICAgIHJldHVybiBuZXcgc2VsZi5SZXNwb25zZShudWxsLCB7XG4gICAgICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBBbiBlcnJvciBvY2N1cnJlZCByZW1vdmluZyAke2ZldGNoRXZlbnQucmVxdWVzdC51cmx9IGZyb20gdGhlIGNhY2hlYCwgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbkVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IuYXNGZXRjaFJlc3BvbnNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBzZWxmLlJlc3BvbnNlKG51bGwsIHtcbiAgICAgICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuU0VSVklDRV9VTkFWQUlMQUJMRSxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERFRkFVTFRfQ0FDSEVfQ09OVFJPTF9IRUFERVIgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyByZXRyaWV2ZUFzc2V0T2JqZWN0LCByZXRyaWV2ZUhhbmRsZU9iamVjdCwgZGVsZXRlSGFuZGxlT2JqZWN0IH0gZnJvbSAnLi9kYXRhYmFzZS1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBGZXRjaEV2ZW50LCBQZXJtYW5lbnRVcmwgfSBmcm9tICcuLi9zdy1pbnRlcmZhY2VzJztcbmltcG9ydCB7IHBhcnNlUmFuZ2VIZWFkZXIsIHNlcnZlVmFsaWRCeXRlUmFuZ2UgfSBmcm9tICcuL2RhdGFiYXNlLXV0aWxzJztcbmltcG9ydCB7XG4gICAgRmlsZUhhbmRsZVJlcXVlc3QsXG4gICAgRmlsZUhhbmRsZVJlc3BvbnNlLFxuICAgIEhhbmRsZU9iamVjdCxcbiAgICBpc0ZpbGVIYW5kbGVSZXNwb25zZSxcbiAgICBNZXNzYWdlQ2hhbm5lbE9wZXJhdGlvbixcbn0gZnJvbSAnLi4vY2FjaGluZy1pbnRlcmZhY2VzJztcbmltcG9ydCB7IHNlbmRNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlLWNoYW5uZWwtdXRpbHMnO1xuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5pbXBvcnQgeyBxdWVyeUZlYXR1cmVGbGFnRW5hYmxlZCB9IGZyb20gJy4vZmVhdHVyZWZsYWctdXRpbHMnO1xuXG5mdW5jdGlvbiBzZXJ2ZVJlcXVlc3QoZmV0Y2hFdmVudDogRmV0Y2hFdmVudCwgYXNzZXRCbG9iOiBCbG9iKTogUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJhbmdlSGVhZGVyID0gZmV0Y2hFdmVudC5yZXF1ZXN0LmhlYWRlcnMuZ2V0KCdSYW5nZScpO1xuXG4gICAgaWYgKHJhbmdlSGVhZGVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBIHJhbmdlIGhlYWRlciB3YXMgcHJlc2VudCwgcGVyZm9ybWluZyBieXRlIHNlcnZpbmcgcmVxdWVzdCAoJHtyYW5nZUhlYWRlcn0pYCk7XG4gICAgICAgIGNvbnN0IHJhbmdlSGVhZGVyTWF0Y2ggPSBwYXJzZVJhbmdlSGVhZGVyKHJhbmdlSGVhZGVyKTtcblxuICAgICAgICBpZiAocmFuZ2VIZWFkZXJNYXRjaCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFJhbmdlIGhlYWRlciB3YXMgd2VsbC1mb3JtZWQsIHdlIG5lZWQgYnl0ZSBzZXJ2aW5nIGZvciAke3JhbmdlSGVhZGVyfWApO1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZlVmFsaWRCeXRlUmFuZ2UoXG4gICAgICAgICAgICAgICAgYXNzZXRCbG9iLFxuICAgICAgICAgICAgICAgIHJhbmdlSGVhZGVyTWF0Y2guZnJvbUJ5dGUsXG4gICAgICAgICAgICAgICAgcmFuZ2VIZWFkZXJNYXRjaC50b0J5dGVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnU2VydmluZyBmdWxsIHJlc291cmNlIGFzIEhUVFAvMjAwJyk7XG4gICAgcmV0dXJuIG5ldyBzZWxmLlJlc3BvbnNlKFxuICAgICAgICBuZXcgQmxvYihbYXNzZXRCbG9iXSwge1xuICAgICAgICAgICAgdHlwZTogYXNzZXRCbG9iLnR5cGUsXG4gICAgICAgIH0pLFxuICAgICAgICB7XG4gICAgICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDYWNoZS1Db250cm9sJzogREVGQVVMVF9DQUNIRV9DT05UUk9MX0hFQURFUixcbiAgICAgICAgICAgICAgICAnQWNjZXB0LVJhbmdlcyc6ICdieXRlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgKTtcbn1cblxuLyoqXG4gKiBSZXNwb25kIHdpdGggcmVxdWVzdGVkIGFzc2V0IGRhdGEgdXNpbmcgYmxvYiByZWNvcmQgaWYgb25lIGV4aXN0cyBpbiB0aGUgbG9jYWwtY2FjaGUgc3RvcmUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXJ2ZUFzc2V0Q2FjaGVSZXNwb25zZShmZXRjaEV2ZW50OiBGZXRjaEV2ZW50KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnNvbGUubG9nKGBOb3cgcmV0cmlldmluZyBkYXRhIGZvciAke2ZldGNoRXZlbnQucmVxdWVzdC51cmx9IGZyb20gbG9jYWwtY2FjaGUgZGF0YWJhc2VgKTtcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCByZXRyaWV2ZUFzc2V0T2JqZWN0KGZldGNoRXZlbnQucmVxdWVzdC51cmwpO1xuXG4gICAgY29uc29sZS5sb2coYFN1Y2Nlc3NmdWxseSBsb29rZWQgdXAgbG9jYWwtY2FjaGUgcmVjb3JkIGZvciAke2ZldGNoRXZlbnQucmVxdWVzdC51cmx9YCk7XG4gICAgcmV0dXJuIHNlcnZlUmVxdWVzdChmZXRjaEV2ZW50LCByZWNvcmQuYmxvYik7XG59XG5cbi8qKlxuICogTWVzc2FnZSBVSSB0aHJlYWQgdG8gcmVxdWVzdCBGaWxlU3lzdGVtIGhhbmRsZSBwZXJtaXNzaW9ucyB1c2luZyBGaWxlU3lzdGVtUGVybWlzc2lvblxuICogTWVzc2FnZUNoYW5uZWxPcGVyYXRpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHByb21wdEhhbmRsZVBlcm1pc3Npb24oZmV0Y2hFdmVudDogRmV0Y2hFdmVudCwgcmVjb3JkOiBIYW5kbGVPYmplY3QpIHtcbiAgICBjb25zdCBldmVudCA9IGF3YWl0IHNlbmRNZXNzYWdlPEZpbGVIYW5kbGVSZXF1ZXN0PihmZXRjaEV2ZW50LmNsaWVudElkLCB7XG4gICAgICAgIG9wZXJhdGlvbjogTWVzc2FnZUNoYW5uZWxPcGVyYXRpb24uRmlsZVN5c3RlbVBlcm1pc3Npb24sXG4gICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICAgIHBlcm1hbmVudFVybDogZmV0Y2hFdmVudC5yZXF1ZXN0LnVybCBhcyBQZXJtYW5lbnRVcmwsXG4gICAgICAgICAgICBoYW5kbGU6IHJlY29yZC5oYW5kbGUsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKGV2ZW50LmRhdGEgJiYgaXNGaWxlSGFuZGxlUmVzcG9uc2UoZXZlbnQuZGF0YS5yZXNwb25zZSkpIHtcbiAgICAgICAgY29uc3QgZmlsZUhhbmRsZVJlc3BvbnNlOiBGaWxlSGFuZGxlUmVzcG9uc2UgPSBldmVudC5kYXRhLnJlc3BvbnNlO1xuXG4gICAgICAgIHN3aXRjaCAoZmlsZUhhbmRsZVJlc3BvbnNlLnN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzQ29kZXMuQUNDRVBURUQ6IHtcbiAgICAgICAgICAgICAgICAvLyBVc2VyIGdyYW50ZWQgcGVybWlzc2lvblxuICAgICAgICAgICAgICAgIC8vIE9ubHkgc2VydmUgYmxvYiBpZiB0aGUgZmlsZSBzaXplIG1hdGNoZXMgb3JpZ2luYWwgY2FjaGVkIG1lZGlhIGJ5dGVzIGxlbmd0aFxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCByZWNvcmQuaGFuZGxlLmdldEZpbGUoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmZpbGVTaXplID09PSBmaWxlLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZlUmVxdWVzdChmZXRjaEV2ZW50LCBmaWxlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXNvbHZlZCBmaWxlIGhhbmRsZSBkb2Vzbid0IG1hdGNoIG9yaWdpbmFsIGNhY2hlZCBtZWRpYVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBgSGFuZGxlIGZldGNoIGRlbmllZCwgcGVybWlzc2lvbiByZXF1ZXN0IHJldHVybmVkICR7ZmlsZUhhbmRsZVJlc3BvbnNlLnBlcm1pc3Npb259YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsZXRlSGFuZGxlT2JqZWN0KGZldGNoRXZlbnQucmVxdWVzdC51cmwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHJlLWh5ZHJhdGUgZnJvbSBGaWxlU3lzdGVtIGhhbmRsZScpO1xufVxuXG4vKipcbiAqIFJlc3BvbmQgd2l0aCByZXF1ZXN0ZWQgYXNzZXQgZGF0YSB1c2luZyBGaWxlU3lzdGVtIGhhbmRsZSByZWNvcmQgaWYgb25lIGV4aXN0cyBpbiB0aGUgbG9jYWwtaGFuZGxlc1xuICogZGF0YWJhc2UuIE1ldGhvZCB3aWxsIHJlcXVlc3QgcGVybWlzc2lvbnMgcHJvbXB0IHRvIFVJIHRocmVhZCB1c2luZyBNZXNzYWdlQ2hhbm5lbCBldmVudCBpZiByZXF1aXJlZC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlcnZlSGFuZGxlQ2FjaGVSZXNwb25zZShmZXRjaEV2ZW50OiBGZXRjaEV2ZW50KTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGlmIChhd2FpdCBxdWVyeUZlYXR1cmVGbGFnRW5hYmxlZChmZXRjaEV2ZW50LmNsaWVudElkLCAnaWV0X19mc19oYW5kbGVfcmVoeWRyYXRpb24nKSkge1xuICAgICAgICBjb25zdCByZWNvcmQgPSBhd2FpdCByZXRyaWV2ZUhhbmRsZU9iamVjdChmZXRjaEV2ZW50LnJlcXVlc3QudXJsKTtcbiAgICAgICAgY29uc3QgcGVybWlzc2lvbiA9IGF3YWl0IHJlY29yZC5oYW5kbGUucXVlcnlQZXJtaXNzaW9uKHsgbW9kZTogJ3JlYWQnIH0pO1xuXG4gICAgICAgIHN3aXRjaCAocGVybWlzc2lvbikge1xuICAgICAgICAgICAgY2FzZSAnZ3JhbnRlZCc6IHtcbiAgICAgICAgICAgICAgICAvLyBBbHJlYWR5IGhhdmUgaGFuZGxlIHJlYWQgcGVybWlzc2lvblxuICAgICAgICAgICAgICAgIC8vIE9ubHkgc2VydmUgYmxvYiBpZiB0aGUgZmlsZSBzaXplIG1hdGNoZXMgb3JpZ2luYWwgY2FjaGVkIG1lZGlhIGJ5dGVzIGxlbmd0aFxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCByZWNvcmQuaGFuZGxlLmdldEZpbGUoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmZpbGVTaXplID09PSBmaWxlLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZlUmVxdWVzdChmZXRjaEV2ZW50LCBmaWxlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXNvbHZlZCBmaWxlIGhhbmRsZSBkb2Vzbid0IG1hdGNoIG9yaWdpbmFsIGNhY2hlZCBtZWRpYVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdwcm9tcHQnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHByb21wdEhhbmRsZVBlcm1pc3Npb24oZmV0Y2hFdmVudCwgcmVjb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsZXRlSGFuZGxlT2JqZWN0KGZldGNoRXZlbnQucmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHJlLWh5ZHJhdGUgZnJvbSBGaWxlU3lzdGVtIGhhbmRsZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignU2tpcHBlZCBmaWxlIGhhbmRsZSByZS1oeWRyYXRpb24sIGZlYXR1cmUgbm90IGVuYWJsZWQnKTtcbn1cbiIsImltcG9ydCB7XG4gICAgaXNRdWVyeUZlYXR1cmVSZXNwb25zZSxcbiAgICBNZXNzYWdlQ2hhbm5lbE9wZXJhdGlvbixcbiAgICBRdWVyeUZlYXR1cmVSZXF1ZXN0LFxufSBmcm9tICcuLi9jYWNoaW5nLWludGVyZmFjZXMnO1xuaW1wb3J0IHsgc2VuZE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UtY2hhbm5lbC11dGlscyc7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLi4vdXRpbC9mZWF0dXJlLWZsYWdzJztcbmltcG9ydCB7IGNyZWF0ZVRpbWVkUHJvbWlzZSB9IGZyb20gJy4vdGltZWQtcHJvbWlzZSc7XG5cbi8qKlxuICogQ3JlYXRlIEEgMnNlYyB0aW1lZCBwcm9taXNlIHRvIHF1ZXJ5IHRoZSByZXF1ZXN0aW5nIGNsaWVudCBmb3IgZmVhdHVyZWZsYWcgZW5hYmxlZCB2YWx1ZSB1c2luZ1xuICogYSBNZXNzYWdlQ2hhbm5lbCBvcGVyYXRpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5RmVhdHVyZUZsYWdFbmFibGVkKFxuICAgIGNsaWVudElkOiBzdHJpbmcsXG4gICAgZmVhdHVyZTogRmVhdHVyZVxuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNyZWF0ZVRpbWVkUHJvbWlzZTxib29sZWFuPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGF3YWl0IHNlbmRNZXNzYWdlPFF1ZXJ5RmVhdHVyZVJlcXVlc3Q+KGNsaWVudElkLCB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBNZXNzYWdlQ2hhbm5lbE9wZXJhdGlvbi5RdWVyeUZlYXR1cmVGbGFnLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YSAmJlxuICAgICAgICAgICAgICAgIGlzUXVlcnlGZWF0dXJlUmVzcG9uc2UoZXZlbnQuZGF0YS5yZXNwb25zZSkgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLnJlc3BvbnNlLmZlYXR1cmUgPT09IGZlYXR1cmVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZXZlbnQuZGF0YS5yZXNwb25zZS5lbmFibGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludmFsaWQgUXVlcnlGZWF0dXJlUmVzcG9uc2UgdmFsdWUgb3Igb2JqZWN0IHN0cnVjdHVyZScpKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUGVybWFuZW50VXJsLCBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgfSBmcm9tICcuLi9zdy1pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNLSVBfTUFOVUFMX1JFSFlEUkFUSU9OX0hFQURFUiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEZldGNoRXZlbnQgfSBmcm9tICcuLi9zdy1pbnRlcmZhY2VzJztcbmltcG9ydCB7IHNlbmRNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlLWNoYW5uZWwtdXRpbHMnO1xuaW1wb3J0IHtcbiAgICBNZXNzYWdlQ2hhbm5lbE9wZXJhdGlvbixcbiAgICBMb2NhbFJlcXVlc3QsXG4gICAgaXNMb2NhbFJlc3BvbnNlLFxuICAgIExvY2FsUmVzcG9uc2UsXG59IGZyb20gJy4uL2NhY2hpbmctaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gJ2h0dHAtc3RhdHVzLWNvZGVzJztcblxuZGVjbGFyZSBsZXQgc2VsZjogV2luZG93ICYgdHlwZW9mIGdsb2JhbFRoaXMgJiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGU7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXJ2ZVJlcXVlc3QoXG4gICAgZmV0Y2hFdmVudDogRmV0Y2hFdmVudCxcbiAgICByZXRyeUNhbGxiYWNrOiAoZmV0Y2hFdmVudDogRmV0Y2hFdmVudCkgPT4gUHJvbWlzZTxSZXNwb25zZT5cbikge1xuICAgIGNvbnNvbGUubG9nKGBOb3cgdHJ5aW5nIHRvIHNlcnZlIHJlcXVlc3QgdG8gJHtmZXRjaEV2ZW50LnJlcXVlc3QudXJsfSB0aHJvdWdoIHJlLWh5ZHJhdGlvbmApO1xuXG4gICAgY29uc3QgZXZlbnQgPSBhd2FpdCBzZW5kTWVzc2FnZTxMb2NhbFJlcXVlc3Q+KGZldGNoRXZlbnQuY2xpZW50SWQsIHtcbiAgICAgICAgb3BlcmF0aW9uOiBNZXNzYWdlQ2hhbm5lbE9wZXJhdGlvbi5IeWRyYXRpb25Mb29rdXAsXG4gICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICAgIHBlcm1hbmVudFVybDogZmV0Y2hFdmVudC5yZXF1ZXN0LnVybCBhcyBQZXJtYW5lbnRVcmwsXG4gICAgICAgICAgICBza2lwTWFudWFsUmVoeWRyYXRpb246IGZldGNoRXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcyhTS0lQX01BTlVBTF9SRUhZRFJBVElPTl9IRUFERVIpLFxuICAgICAgICAgICAgcmVxdWVzdEhlYWRlcnM6IGZldGNoRXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygnUmFuZ2UnKVxuICAgICAgICAgICAgICAgID8gbmV3IE1hcChbWydSYW5nZScsIGZldGNoRXZlbnQucmVxdWVzdC5oZWFkZXJzLmdldCgnUmFuZ2UnKV1dKVxuICAgICAgICAgICAgICAgIDogbmV3IE1hcCgpLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGlmIChldmVudC5kYXRhICYmIGlzTG9jYWxSZXNwb25zZShldmVudC5kYXRhLnJlc3BvbnNlKSkge1xuICAgICAgICBjb25zdCBsb2NhbFJlc3BvbnNlOiBMb2NhbFJlc3BvbnNlID0gZXZlbnQuZGF0YS5yZXNwb25zZTtcbiAgICAgICAgaWYgKGxvY2FsUmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gU3RhdHVzQ29kZXMuQUNDRVBURUQpIHtcbiAgICAgICAgICAgIC8vIG1hbnVhbCByZS1oeWRyYXRpb24gc3VjY2VlZGVkLCBidXQgd2Ugc3RpbGwgbmVlZCB0byBmZXRjaCB0aGUgZGF0YVxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJ01hbnVhbCByZS1oeWRyYXRpb24gc3VjY2VlZGVkIChIVFRQLzIwMiksIHdlIHN0aWxsIG5lZWQgdG8gc2F0aXNmeSB0aGUgYWN0dWFsIHJlcXVlc3QnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHJldHJ5Q2FsbGJhY2soZmV0Y2hFdmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHNlbGYuUmVzcG9uc2UobG9jYWxSZXNwb25zZS5yZXNwb25zZUNvbnRlbnQsIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGxvY2FsUmVzcG9uc2Uuc3RhdHVzQ29kZSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBBcnJheS5mcm9tKGxvY2FsUmVzcG9uc2UucmVzcG9uc2VIZWFkZXJzID8/IG5ldyBNYXAoKSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBDbGllbnQgJHtmZXRjaEV2ZW50LmNsaWVudElkfSBwZXJtYW5lbnRseSBmYWlsZWQgdG8gcmUtaHlkcmF0ZSByZXNvdXJjZSAke2ZldGNoRXZlbnQucmVxdWVzdC51cmx9YFxuICAgICAgICApO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byByZS1oeWRyYXRlIHJlc291cmNlJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRmV0Y2hFdmVudCB9IGZyb20gJy4uL3N3LWludGVyZmFjZXMnO1xuaW1wb3J0IHsgRmlsZVF1ZXVlIH0gZnJvbSAnLi9maWxlLXF1ZXVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKHJlYWRGcm9tRmlsZTogc3RyaW5nLCBmZXRjaEV2ZW50OiBGZXRjaEV2ZW50LCBibG9ja2luZyA9IHRydWUpOiB2b2lkIHtcbiAgICBjb25zdCByZWFkUXVldWUgPSBGaWxlUXVldWUubG9va3VwKHJlYWRGcm9tRmlsZSwgZmV0Y2hFdmVudCk7XG4gICAgZmV0Y2hFdmVudC5yZXNwb25kV2l0aChyZWFkUXVldWUucmVhZChibG9ja2luZykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVGaWxlKHdyaXRlVG9GaWxlOiBzdHJpbmcsIGZldGNoRXZlbnQ6IEZldGNoRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB3cml0ZVF1ZXVlID0gRmlsZVF1ZXVlLmxvb2t1cCh3cml0ZVRvRmlsZSwgZmV0Y2hFdmVudCk7XG4gICAgZmV0Y2hFdmVudC5yZXNwb25kV2l0aCh3cml0ZVF1ZXVlLndyaXRlKGZldGNoRXZlbnQucmVxdWVzdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VGaWxlKHdyaXRlVG9GaWxlOiBzdHJpbmcsIGZldGNoRXZlbnQ6IEZldGNoRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB3cml0ZVF1ZXVlID0gRmlsZVF1ZXVlLmxvb2t1cCh3cml0ZVRvRmlsZSwgZmV0Y2hFdmVudCk7XG4gICAgZmV0Y2hFdmVudC5yZXNwb25kV2l0aCh3cml0ZVF1ZXVlLmNsb3NlKCkpO1xufVxuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5pbXBvcnQgeyBGZXRjaEV2ZW50IH0gZnJvbSAnLi4vc3ctaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBSZXZlcnRlZFByb21pc2UgfSBmcm9tICcuLi91dGlsL3JldmVydGVkLXByb21pc2UnO1xuXG5jb25zdCBNQVhfTlVNX0NIVU5LUyA9IDEwO1xuXG5jb25zdCByZXNpZGVudEZpbGVRdWV1ZXM6IHsgW2ZpbGVOYW1lOiBzdHJpbmddOiBGaWxlUXVldWUgfSA9IHt9O1xuXG5leHBvcnQgY2xhc3MgRmlsZVF1ZXVlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNodW5rczogUmVxdWVzdFtdID0gW107XG4gICAgcHJpdmF0ZSByZWFkb25seSByZXNpZGVudCA9IG5ldyBSZXZlcnRlZFByb21pc2U8dm9pZD4oKTtcblxuICAgIC8qKlxuICAgICAqIEJsb2NrZWQgKHN5bmNocm9ub3VzKSByZWFkIHJlcXVlc3QsIGF3YWl0aW5nIGEgbWF0Y2hpbmcgd3JpdGUgcmVxdWVzdCAob3IgdGhlIGZpbGUgYmVpbmdcbiAgICAgKiBjbG9zZWQpIHRvIGJlIHNlcnZlZCAodW5ibG9ja2VkKS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGJsb2NrZWRSZWFkZXI/OiBSZXZlcnRlZFByb21pc2U8UmVzcG9uc2U+O1xuXG4gICAgLyoqXG4gICAgICogQmxvY2tlZCAoc3luY2hyb25vdXMpIHdyaXRlIHJlcXVlc3QsIGF3YWl0aW5nIGEgbWF0Y2hpbmcgcmVhZCByZXF1ZXN0IHRoYXQgZnJlZXMgdXAgc29tZVxuICAgICAqIGJ1ZmZlciBzcGFjZSwgc3VjaCB0aGF0IHRoZSB3cml0ZSByZXF1ZXN0IGNhbiBvZmZsb2FkIGl0cyBkYXRhIGFuZCBiZSB1bmJsb2NrZWQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBibG9ja2VkV3JpdGVyPzogUmV2ZXJ0ZWRQcm9taXNlPFJlc3BvbnNlPjtcblxuICAgIC8qKlxuICAgICAqIE1hcmtlciB3aGV0aGVyIHRoZSBmaWxlIHdhcyBjbG9zZWQgKGJ5IGhhdmluZyBhIHJlY2VpdmVkIGEgY2FsbCB0byBgRmlsZVF1ZXVlLmNsb3NlYCkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBmaWxlT3BlbiA9IHRydWU7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBmaWxlTmFtZTogc3RyaW5nKSB7fVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZWFkUmVzcG9uc2Uod3JpdGVSZXF1ZXN0OiBSZXF1ZXN0IHwgdW5kZWZpbmVkKTogUmVzcG9uc2Uge1xuICAgICAgICBpZiAod3JpdGVSZXF1ZXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwgeyBzdGF0dXM6IFN0YXR1c0NvZGVzLk5PVF9GT1VORCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2Uod3JpdGVSZXF1ZXN0LmJvZHksIHsgc3RhdHVzOiBTdGF0dXNDb2Rlcy5PSyB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgZGF0YSB0byB0aGUgcGlwZSwgd2hlcmUgd2UgcmV0dXJuIGltbWVkaWF0ZWx5IGlmIHRoZXJlIGlzIHNvbWUgaW4tbWVtb3J5XG4gICAgICogYnVmZmVyIGNhcGFjaXR5IGxlZnQgdG8gaG9sZCB0aGUgd3JpdHRlbiBwYXlsb2FkLiBPdGhlcndpc2Ugd2UgYmxvY2sgdW50aWwgYVxuICAgICAqIG1hdGNoaW5nIHJlYWQgcmVxdWVzdCBmcmVlcyB1cCBzb21lIGNhcGFjaXR5IGZyb20gdGhlIGluLW1lbW9yeSBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBIVFRQLzIwMCAoT0spIHdoZW4gdGhlIHdyaXRlIHJlcXVlc3QgaXMgdW5ibG9ja2VkLlxuICAgICAqL1xuICAgIGFzeW5jIHdyaXRlKHdyaXRlUmVxdWVzdDogUmVxdWVzdCk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgdGhpcy5lbnF1ZXVlV3JpdGVSZXF1ZXN0KHdyaXRlUmVxdWVzdCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYmxvY2tlZFJlYWRlcikge1xuICAgICAgICAgICAgLy8gVGhlcmUgaXMgY3VycmVudGx5IGEgc3luY2hyb25vdXMgcmVhZCByZXF1ZXN0LCBhd2FpdGluZyB0byBiZSBzZXJ2ZWQuXG4gICAgICAgICAgICAvLyBEbyBzbyB3aXRoIHRoZSBkYXRhIHRoYXQgd2FzIHF1ZXVlZCBmaXJzdCAoTk9UIHdoYXQgY2FtZSBpbiB3aXRoIHRoaXMgd3JpdGUpLlxuICAgICAgICAgICAgdGhpcy5ibG9ja2VkUmVhZGVyLnJlc29sdmUodGhpcy5jcmVhdGVSZWFkUmVzcG9uc2UodGhpcy5kZXF1ZXVlV3JpdGVSZXF1ZXN0KCkpKTtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tlZFJlYWRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNodW5rcy5sZW5ndGggPiBNQVhfTlVNX0NIVU5LUykge1xuICAgICAgICAgICAgLy8gVGhlIGluLW1lbW9yeSBidWZmZXIgaXMgXCJhdCBjYXBhY2l0eVwiIGFuZCB3ZSBuZWVkIHRvIGJsb2NrIHRoaXMgd3JpdGUgcmVxdWVzdCxcbiAgICAgICAgICAgIC8vICh0aHVzIHByZXZlbnRpbmcgZnVydGhlciB3cml0ZXMpIHVudGlsIGEgbWF0Y2hpbmcgcmVhZCByZXF1ZXN0IHJlbW92ZXMgcHJldmlvdXNcbiAgICAgICAgICAgIC8vIHdyaXRlcycgZGF0YSBmcm9tIHRoZSBpbi1tZW1vcnkgYnVmZmVyLlxuICAgICAgICAgICAgdGhpcy5ibG9ja2VkV3JpdGVyID0gbmV3IFJldmVydGVkUHJvbWlzZTxSZXNwb25zZT4oKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJsb2NrZWRXcml0ZXIucHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwgeyBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN5bmNocm9ub3VzbHkgb3IgYXN5bmNocm9ub3VzbHkgcmVhZCBmcm9tIHRoZSBxdWV1ZS4gSW4gZWl0aGVyIGNhc2UsIHdlIHdpbGwgcmVzcG9uZCB3aXRoXG4gICAgICogcHJldmlvdXNseSBlbnF1ZXVlZCBkYXRhIGZyb20gYSB3cml0aW5nIHBhcnR5LlxuICAgICAqXG4gICAgICogQHJldHVybnMgSFRUUC8yMDAgKE9LKSB3aGVuIHRoZSByZWFkIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bCwgcmV0dXJuaW5nIHRoZSBkYXRhIGluIGl0cyByZXNwb25zZSBib2R5LlxuICAgICAqIEByZXR1cm5zIEhUVFAvNDA0IChub3QgZm91bmQpIGZvciBfYXN5bmNocm9ub3VzXyByZWFkIHJlcXVlc3RzIHRoYXQgY2Fubm90IGN1cnJlbnRseSBiZSBzZXJ2ZWQuXG4gICAgICogQHJldHVybnMgSFRUUC80MTAgKGdvbmUpIHRvIHNpZ25hbCB0aGF0IGEgZmlsZSB3YXMgY2xvc2VkIChFT0YpIGFuZCBubyBtb3JlIGRhdGEgY2FuIGJlIHJlYWQuXG4gICAgICovXG4gICAgYXN5bmMgcmVhZChibG9ja2luZzogYm9vbGVhbik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3Qgd3JpdGVSZXF1ZXN0ID0gdGhpcy5kZXF1ZXVlV3JpdGVSZXF1ZXN0KCk7XG5cbiAgICAgICAgaWYgKHdyaXRlUmVxdWVzdCkge1xuICAgICAgICAgICAgLy8gVGhlcmUgaXMgZGF0YSBiZWluZyBxdWV1ZWQgZm9yIHJlYWQgcmVxdWVzdHMsIHVzZSBpdCB0byBhbnN3ZXIgdGhlIHJlYWQgcmVxdWVzdC5cblxuICAgICAgICAgICAgaWYgKHRoaXMuYmxvY2tlZFdyaXRlcikge1xuICAgICAgICAgICAgICAgIC8vIFRoZXJlIGlzIGEgYmxvY2tlZCB3cml0ZXIgdGhhdCBjYW4gYmUgdW5ibG9ja2VkIHRoYW5rcyB0byB0aGUgcmVhZCByZXF1ZXN0LlxuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tlZFdyaXRlci5yZXNvbHZlKG5ldyBSZXNwb25zZShudWxsLCB7IHN0YXR1czogU3RhdHVzQ29kZXMuT0sgfSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tlZFdyaXRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVhZFJlc3BvbnNlKHdyaXRlUmVxdWVzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZmlsZU9wZW4pIHtcbiAgICAgICAgICAgIC8vIFdlIGNhbiBlbmQgdGhlIFwid2FpdCB1bnRpbFwiIGhlcmUgdGhhdCB3b3VsZCBndWFyYW50ZWUgdGhhdCB0aGUgc2VydmljZSB3b3JrZXJcbiAgICAgICAgICAgIC8vIGlzIG5vdCB1bmxvYWRlZCBmcm9tIG1lbW9yeS4gTm8gZnVydGhlciByZWFkIHJlcXVlc3RzIHNob3VsZCBhcnJpdmUgYWZ0ZXIgYW4gRU9GXG4gICAgICAgICAgICAvLyB3YXMgc2lnbmFsbGVkIGJhY2sgdG8gdGhlIHJlYWRpbmcgcGFydHkuIEFuZCBubyBmdXJ0aGVyIHdyaXRlIHJlcXVlc3RzIHNob3VsZFxuICAgICAgICAgICAgLy8gYXJyaXZlIGFmdGVyIHRoZSB3cml0ZXIgaGFzIGNsb3NlZCB0aGUgZmlsZS5cbiAgICAgICAgICAgIHRoaXMudGVybWluYXRlUXVldWUoKTtcblxuICAgICAgICAgICAgLy8gTm8gZGF0YSBpcyBxdWV1ZWQgYW5kIHRoZSBmaWxlIGlzIGNsb3NlZCwgc2lnbmFsIGFuIEVPRiB0byB0aGUgcmVhZGVyIGhlcmUuIFdlIGRvXG4gICAgICAgICAgICAvLyBzbyBmb3Igc3luY2hyb25vdXMgYW5kIGFzeW5jaHJvbm91cyByZWFkIHJlcXVlc3RzIGFsaWtlLlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7IHN0YXR1czogU3RhdHVzQ29kZXMuR09ORSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChibG9ja2luZykge1xuICAgICAgICAgICAgLy8gTm8gZGF0YSBpcyBxdWV1ZWQsIHNvIHRoZSByZWFkIHJlcXVlc3QgbXVzdCBiZSBibG9ja2VkIHVudGlsIGEgbWF0Y2hpbmcgd3JpdGUgb2NjdXJzXG4gICAgICAgICAgICAvLyBvciB0aGUgZmlsZSBpcyBjbG9zZWQuXG4gICAgICAgICAgICB0aGlzLmJsb2NrZWRSZWFkZXIgPSBuZXcgUmV2ZXJ0ZWRQcm9taXNlPFJlc3BvbnNlPigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tlZFJlYWRlci5wcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm9uLWJsb2NraW5nIHJlYWQgcmVxdWVzdCBmaW5kcyBubyBkYXRhLCBzaWduYWwgYW4gRUFHQUlOIHRvIHRoZSByZWFkZXIgdG8gYXNrIGl0IHRvXG4gICAgICAgIC8vIGxhdGVyIHJlLXRyeSB0aGUgcmVhZC5cbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7IHN0YXR1czogU3RhdHVzQ29kZXMuTk9UX0ZPVU5EIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgdGhpcy5maWxlT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmJsb2NrZWRSZWFkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tlZFJlYWRlci5yZXNvbHZlKFxuICAgICAgICAgICAgICAgIG5ldyBSZXNwb25zZShudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuR09ORSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tlZFJlYWRlciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgLy8gV2UgY2FuIGVuZCB0aGUgXCJ3YWl0IHVudGlsXCIgaGVyZSB0aGF0IHdvdWxkIGd1YXJhbnRlZSB0aGF0IHRoZSBzZXJ2aWNlIHdvcmtlclxuICAgICAgICAgICAgLy8gaXMgbm90IHVubG9hZGVkIGZyb20gbWVtb3J5LiBObyBmdXJ0aGVyIHJlYWQgcmVxdWVzdHMgc2hvdWxkIGFycml2ZSBhZnRlciBhbiBFT0ZcbiAgICAgICAgICAgIC8vIHdhcyBzaWduYWxsZWQgYmFjayB0byB0aGUgcmVhZGluZyBwYXJ0eS4gQW5kIG5vIGZ1cnRoZXIgd3JpdGUgcmVxdWVzdHMgc2hvdWxkXG4gICAgICAgICAgICAvLyBhcnJpdmUgYWZ0ZXIgdGhlIHdyaXRlciBoYXMgY2xvc2VkIHRoZSBmaWxlLlxuICAgICAgICAgICAgdGhpcy50ZXJtaW5hdGVRdWV1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7IHN0YXR1czogU3RhdHVzQ29kZXMuT0sgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXF1ZXVlV3JpdGVSZXF1ZXN0KCk6IFJlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5jaHVua3Muc2hpZnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVucXVldWVXcml0ZVJlcXVlc3QocmVxdWVzdDogUmVxdWVzdCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNodW5rcy5wdXNoKHJlcXVlc3QpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdGVybWluYXRlUXVldWUoKTogdm9pZCB7XG4gICAgICAgIC8vIERvIG5vIGxvbmdlciBsZXQgdGhpcyBxdWV1ZSBibG9jayB0aGUgc2VydmljZSB3b3JrZXIgZnJvbSBiZWluZyB1bmxvYWRlZCBmcm9tIG1lbW9yeS5cbiAgICAgICAgLy8gVGhpcyB3aWxsIHJlc29sdmUgdGhlIHByb21pc2UgcGFzc2VkIGEgcHJlY2VkaW5nIGZldGNoIGV2ZW50J3MgYHdhaXRVbnRpbGAgbWV0aG9kLlxuICAgICAgICB0aGlzLnJlc2lkZW50LnJlc29sdmUoKTtcblxuICAgICAgICAvLyBEZWxldGUgdGhlIHF1ZXVlIGZyb20gc2VydmljZSB3b3JrZXIgbWVtb3J5LlxuICAgICAgICBkZWxldGUgcmVzaWRlbnRGaWxlUXVldWVzW3RoaXMuZmlsZU5hbWVdO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb29rdXAoZmlsZU5hbWU6IHN0cmluZywgZmV0Y2hFdmVudDogRmV0Y2hFdmVudCk6IEZpbGVRdWV1ZSB7XG4gICAgICAgIGlmIChmaWxlTmFtZSBpbiByZXNpZGVudEZpbGVRdWV1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNpZGVudEZpbGVRdWV1ZXNbZmlsZU5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcXVldWUgPSBuZXcgRmlsZVF1ZXVlKGZpbGVOYW1lKTtcbiAgICAgICAgcmVzaWRlbnRGaWxlUXVldWVzW2ZpbGVOYW1lXSA9IHF1ZXVlO1xuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHNlcnZpY2Ugd29ya2VyIGRvZXMgbm90IHVubG9hZCBmcm9tIG1lbW9yeSB3aGlsZVxuICAgICAgICAvLyB0aGUgcXVldWUgZXhpc3RzLlxuICAgICAgICBmZXRjaEV2ZW50LndhaXRVbnRpbChxdWV1ZS5yZXNpZGVudC5wcm9taXNlKTtcblxuICAgICAgICByZXR1cm4gcXVldWU7XG4gICAgfVxufVxuIiwidHlwZSBQcm9taXNlU3RhdGU8VD4gPVxuICAgIHwge1xuICAgICAgICAgIHN0YWdlOiAncGVuZGluZyc7XG4gICAgICB9XG4gICAgfCB7XG4gICAgICAgICAgc3RhZ2U6ICdyZWFkeSc7XG4gICAgICAgICAgcmVqZWN0OiAoZXJyb3I6IEVycm9yKSA9PiB2b2lkO1xuICAgICAgICAgIHJlc29sdmU6ICh2YWx1ZTogVCkgPT4gdm9pZDtcbiAgICAgIH1cbiAgICB8IHtcbiAgICAgICAgICBzdGFnZTogJ3Jlc29sdmVkJztcbiAgICAgICAgICByZXN1bHQ6IFQ7XG4gICAgICB9XG4gICAgfCB7XG4gICAgICAgICAgc3RhZ2U6ICdyZWplY3RlZCc7XG4gICAgICAgICAgZXJyb3I6IEVycm9yO1xuICAgICAgfTtcblxuLyoqXG4gKiBTdHJpcHBlZC1kb3duIHZlcnNpb24gb2YgYENvbnRyb2xsYWJsZVByb21pc2VgIChTdXBlcmZpbGwpLiBNYWtlcyB0aGlzIHVzZWZ1bCB1dGlsaXR5IGF2YWlsYWJsZVxuICogaW5zaWRlIHNoYXJlZC1qcy9iYXNlLiBBbHNvIGFkZHJlc3NlcyBhIHBvc3NpYmxlIHJhY2UgY29uZGl0aW9uIGluIGBDb250cm9sbGFibGVQcm9taXNlYCBpZiB0aGVcbiAqIHByb21pc2UgY2FsbGJhY2sgd2Fzbid0IGNhbGxlZCBzeW5jaHJvbm91c2x5IGluc2lkZSB0aGUgY29uc3RydWN0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXZlcnRlZFByb21pc2U8VD4ge1xuICAgIHJlYWRvbmx5IHByb21pc2U6IFByb21pc2U8VD47XG5cbiAgICBwcml2YXRlIHN0YXRlOiBQcm9taXNlU3RhdGU8VD4gPSB7IHN0YWdlOiAncGVuZGluZycgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuc3RhZ2UpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdyZXNvbHZlZCc6XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdGF0ZS5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdyZWplY3RlZCc6XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnN0YXRlLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc3RhZ2U6ICdyZWFkeScsIHJlc29sdmUsIHJlamVjdCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgZmluaXNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5zdGFnZSkge1xuICAgICAgICAgICAgY2FzZSAncmVzb2x2ZWQnOlxuICAgICAgICAgICAgY2FzZSAncmVqZWN0ZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNvbHZlKHJlc3VsdDogVCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zdGFnZSA9PT0gJ3JlYWR5Jykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3RhZ2U6ICdyZXNvbHZlZCcsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVqZWN0KGVycm9yOiBFcnJvcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zdGFnZSA9PT0gJ3JlYWR5Jykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0YWdlOiAncmVqZWN0ZWQnLFxuICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBBZGFwdHMgdGhlIHNlcnZpY2Ugd29ya2VyIHRvIGl0cyBydW50aW1lIGVudmlyb25tZW50LlxuICAgICAqXG4gICAgICogTW9zdGx5LCB0aGlzIGlzIHVzZWQgdG8gbW9jayBvdXQgaWRlbnRpZmllcnMgd2hpY2ggYXJlIG90aGVyd2lzZSByZWFkXG4gICAgICogZnJvbSB0aGUgZ2xvYmFsIHNjb3BlLlxuICAgICAqL1xuICAgIGNsYXNzIEFkYXB0ZXIge1xuICAgICAgICBjb25zdHJ1Y3RvcihzY29wZVVybCkge1xuICAgICAgICAgICAgdGhpcy5zY29wZVVybCA9IHNjb3BlVXJsO1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkU2NvcGVVcmwgPSB0aGlzLnBhcnNlVXJsKHRoaXMuc2NvcGVVcmwpO1xuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBvcmlnaW4gZnJvbSB0aGUgcmVnaXN0cmF0aW9uIHNjb3BlLiBUaGlzIGlzIHVzZWQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuXG4gICAgICAgICAgICAvLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgVVJMcy5cbiAgICAgICAgICAgIHRoaXMub3JpZ2luID0gcGFyc2VkU2NvcGVVcmwub3JpZ2luO1xuICAgICAgICAgICAgLy8gU3VmZml4aW5nIGBuZ3N3YCB3aXRoIHRoZSBiYXNlSHJlZiB0byBhdm9pZCBjbGFzaCBvZiBjYWNoZSBuYW1lcyBmb3IgU1dzIHdpdGggZGlmZmVyZW50XG4gICAgICAgICAgICAvLyBzY29wZXMgb24gdGhlIHNhbWUgZG9tYWluLlxuICAgICAgICAgICAgdGhpcy5jYWNoZU5hbWVQcmVmaXggPSAnbmdzdzonICsgcGFyc2VkU2NvcGVVcmwucGF0aDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHBlciBhcm91bmQgdGhlIGBSZXF1ZXN0YCBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICovXG4gICAgICAgIG5ld1JlcXVlc3QoaW5wdXQsIGluaXQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBwZXIgYXJvdW5kIHRoZSBgUmVzcG9uc2VgIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgbmV3UmVzcG9uc2UoYm9keSwgaW5pdCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShib2R5LCBpbml0KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHBlciBhcm91bmQgdGhlIGBIZWFkZXJzYCBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICovXG4gICAgICAgIG5ld0hlYWRlcnMoaGVhZGVycykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBIZWFkZXJzKGhlYWRlcnMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUZXN0IGlmIGEgZ2l2ZW4gb2JqZWN0IGlzIGFuIGluc3RhbmNlIG9mIGBDbGllbnRgLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNDbGllbnQoc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gKHNvdXJjZSBpbnN0YW5jZW9mIENsaWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlYWQgdGhlIGN1cnJlbnQgVU5JWCB0aW1lIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldCB0aW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIG5vcm1hbGl6ZWQgcmVwcmVzZW50YXRpb24gb2YgYSBVUkwgc3VjaCBhcyB0aG9zZSBmb3VuZCBpbiB0aGUgU2VydmljZVdvcmtlcidzIGBuZ3N3Lmpzb25gXG4gICAgICAgICAqIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIE1vcmUgc3BlY2lmaWNhbGx5OlxuICAgICAgICAgKiAxLiBSZXNvbHZlIHRoZSBVUkwgcmVsYXRpdmUgdG8gdGhlIFNlcnZpY2VXb3JrZXIncyBzY29wZS5cbiAgICAgICAgICogMi4gSWYgdGhlIFVSTCBpcyByZWxhdGl2ZSB0byB0aGUgU2VydmljZVdvcmtlcidzIG93biBvcmlnaW4sIHRoZW4gb25seSByZXR1cm4gdGhlIHBhdGggcGFydC5cbiAgICAgICAgICogICAgT3RoZXJ3aXNlLCByZXR1cm4gdGhlIGZ1bGwgVVJMLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gdXJsIFRoZSByYXcgcmVxdWVzdCBVUkwuXG4gICAgICAgICAqIEByZXR1cm4gQSBub3JtYWxpemVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBVUkwuXG4gICAgICAgICAqL1xuICAgICAgICBub3JtYWxpemVVcmwodXJsKSB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGUgVVJMJ3Mgb3JpZ2luIGFnYWluc3QgdGhlIFNlcnZpY2VXb3JrZXIncy5cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMucGFyc2VVcmwodXJsLCB0aGlzLnNjb3BlVXJsKTtcbiAgICAgICAgICAgIHJldHVybiAocGFyc2VkLm9yaWdpbiA9PT0gdGhpcy5vcmlnaW4gPyBwYXJzZWQucGF0aCA6IHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcnNlIGEgVVJMIGludG8gaXRzIGRpZmZlcmVudCBwYXJ0cywgc3VjaCBhcyBgb3JpZ2luYCwgYHBhdGhgIGFuZCBgc2VhcmNoYC5cbiAgICAgICAgICovXG4gICAgICAgIHBhcnNlVXJsKHVybCwgcmVsYXRpdmVUbykge1xuICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBhIFNhZmFyaSBidWcsIHNlZVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzEwNjEjaXNzdWVjb21tZW50LTUwMzYzNzk3OFxuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gIXJlbGF0aXZlVG8gPyBuZXcgVVJMKHVybCkgOiBuZXcgVVJMKHVybCwgcmVsYXRpdmVUbyk7XG4gICAgICAgICAgICByZXR1cm4geyBvcmlnaW46IHBhcnNlZC5vcmlnaW4sIHBhdGg6IHBhcnNlZC5wYXRobmFtZSwgc2VhcmNoOiBwYXJzZWQuc2VhcmNoIH07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdhaXQgZm9yIGEgZ2l2ZW4gYW1vdW50IG9mIHRpbWUgYmVmb3JlIGNvbXBsZXRpbmcgYSBQcm9taXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGltZW91dChtcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCBtcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEFuIGVycm9yIHJldHVybmVkIGluIHJlamVjdGVkIHByb21pc2VzIGlmIHRoZSBnaXZlbiBrZXkgaXMgbm90IGZvdW5kIGluIHRoZSB0YWJsZS5cbiAgICAgKi9cbiAgICBjbGFzcyBOb3RGb3VuZCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRhYmxlLCBrZXkpIHtcbiAgICAgICAgICAgIHRoaXMudGFibGUgPSB0YWJsZTtcbiAgICAgICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQW4gaW1wbGVtZW50YXRpb24gb2YgYSBgRGF0YWJhc2VgIHRoYXQgdXNlcyB0aGUgYENhY2hlU3RvcmFnZWAgQVBJIHRvIHNlcmlhbGl6ZVxuICAgICAqIHN0YXRlIHdpdGhpbiBtb2NrIGBSZXNwb25zZWAgb2JqZWN0cy5cbiAgICAgKi9cbiAgICBjbGFzcyBDYWNoZURhdGFiYXNlIHtcbiAgICAgICAgY29uc3RydWN0b3Ioc2NvcGUsIGFkYXB0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgICAgICAgICB0aGlzLnRhYmxlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgfVxuICAgICAgICAnZGVsZXRlJyhuYW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YWJsZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZXMuZGVsZXRlKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuY2FjaGVzLmRlbGV0ZShgJHt0aGlzLmFkYXB0ZXIuY2FjaGVOYW1lUHJlZml4fTpkYjoke25hbWV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3BlLmNhY2hlcy5rZXlzKCkudGhlbihrZXlzID0+IGtleXMuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aChgJHt0aGlzLmFkYXB0ZXIuY2FjaGVOYW1lUHJlZml4fTpkYjpgKSkpO1xuICAgICAgICB9XG4gICAgICAgIG9wZW4obmFtZSwgY2FjaGVRdWVyeU9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50YWJsZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGUgPSB0aGlzLnNjb3BlLmNhY2hlcy5vcGVuKGAke3RoaXMuYWRhcHRlci5jYWNoZU5hbWVQcmVmaXh9OmRiOiR7bmFtZX1gKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihjYWNoZSA9PiBuZXcgQ2FjaGVUYWJsZShuYW1lLCBjYWNoZSwgdGhpcy5hZGFwdGVyLCBjYWNoZVF1ZXJ5T3B0aW9ucykpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFibGVzLnNldChuYW1lLCB0YWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWJsZXMuZ2V0KG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEEgYFRhYmxlYCBiYWNrZWQgYnkgYSBgQ2FjaGVgLlxuICAgICAqL1xuICAgIGNsYXNzIENhY2hlVGFibGUge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0YWJsZSwgY2FjaGUsIGFkYXB0ZXIsIGNhY2hlUXVlcnlPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlID0gdGFibGU7XG4gICAgICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIgPSBhZGFwdGVyO1xuICAgICAgICAgICAgdGhpcy5jYWNoZVF1ZXJ5T3B0aW9ucyA9IGNhY2hlUXVlcnlPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3Qoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLm5ld1JlcXVlc3QoJy8nICsga2V5KTtcbiAgICAgICAgfVxuICAgICAgICAnZGVsZXRlJyhrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlLmRlbGV0ZSh0aGlzLnJlcXVlc3Qoa2V5KSwgdGhpcy5jYWNoZVF1ZXJ5T3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAga2V5cygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlLmtleXMoKS50aGVuKHJlcXVlc3RzID0+IHJlcXVlc3RzLm1hcChyZXEgPT4gcmVxLnVybC5zdWJzdHIoMSkpKTtcbiAgICAgICAgfVxuICAgICAgICByZWFkKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUubWF0Y2godGhpcy5yZXF1ZXN0KGtleSksIHRoaXMuY2FjaGVRdWVyeU9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBOb3RGb3VuZCh0aGlzLnRhYmxlLCBrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB3cml0ZShrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5wdXQodGhpcy5yZXF1ZXN0KGtleSksIHRoaXMuYWRhcHRlci5uZXdSZXNwb25zZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG4gICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4gICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG4gICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuICAgIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuICAgIEFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbiAgICBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbiAgICBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuICAgIE9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcbiAgICBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4gICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIFVwZGF0ZUNhY2hlU3RhdHVzID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKFVwZGF0ZUNhY2hlU3RhdHVzKSB7XG4gICAgICAgIFVwZGF0ZUNhY2hlU3RhdHVzW1VwZGF0ZUNhY2hlU3RhdHVzW1wiTk9UX0NBQ0hFRFwiXSA9IDBdID0gXCJOT1RfQ0FDSEVEXCI7XG4gICAgICAgIFVwZGF0ZUNhY2hlU3RhdHVzW1VwZGF0ZUNhY2hlU3RhdHVzW1wiQ0FDSEVEX0JVVF9VTlVTRURcIl0gPSAxXSA9IFwiQ0FDSEVEX0JVVF9VTlVTRURcIjtcbiAgICAgICAgVXBkYXRlQ2FjaGVTdGF0dXNbVXBkYXRlQ2FjaGVTdGF0dXNbXCJDQUNIRURcIl0gPSAyXSA9IFwiQ0FDSEVEXCI7XG4gICAgICAgIHJldHVybiBVcGRhdGVDYWNoZVN0YXR1cztcbiAgICB9KSh7fSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBjbGFzcyBTd0NyaXRpY2FsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMuaXNDcml0aWNhbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZXJyb3JUb1N0cmluZyhlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGAke2Vycm9yLm1lc3NhZ2V9XFxuJHtlcnJvci5zdGFja31gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAke2Vycm9yfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xhc3MgU3dVbnJlY292ZXJhYmxlU3RhdGVFcnJvciBleHRlbmRzIFN3Q3JpdGljYWxFcnJvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMuaXNVbnJlY292ZXJhYmxlU3RhdGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgU0hBMSBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gICAgICpcbiAgICAgKiBzZWUgaHR0cHM6Ly9jc3JjLm5pc3QuZ292L3B1YmxpY2F0aW9ucy9maXBzL2ZpcHMxODAtNC9maXBzLTE4MC00LnBkZlxuICAgICAqXG4gICAgICogV0FSTklORzogdGhpcyBmdW5jdGlvbiBoYXMgbm90IGJlZW4gZGVzaWduZWQgbm90IHRlc3RlZCB3aXRoIHNlY3VyaXR5IGluIG1pbmQuXG4gICAgICogICAgICAgICAgRE8gTk9UIFVTRSBJVCBJTiBBIFNFQ1VSSVRZIFNFTlNJVElWRSBDT05URVhULlxuICAgICAqXG4gICAgICogQm9ycm93ZWQgZnJvbSBAYW5ndWxhci9jb21waWxlci9zcmMvaTE4bi9kaWdlc3QudHNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzaGExKHN0cikge1xuICAgICAgICBjb25zdCB1dGY4ID0gc3RyO1xuICAgICAgICBjb25zdCB3b3JkczMyID0gc3RyaW5nVG9Xb3JkczMyKHV0ZjgsIEVuZGlhbi5CaWcpO1xuICAgICAgICByZXR1cm4gX3NoYTEod29yZHMzMiwgdXRmOC5sZW5ndGggKiA4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2hhMUJpbmFyeShidWZmZXIpIHtcbiAgICAgICAgY29uc3Qgd29yZHMzMiA9IGFycmF5QnVmZmVyVG9Xb3JkczMyKGJ1ZmZlciwgRW5kaWFuLkJpZyk7XG4gICAgICAgIHJldHVybiBfc2hhMSh3b3JkczMyLCBidWZmZXIuYnl0ZUxlbmd0aCAqIDgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBfc2hhMSh3b3JkczMyLCBsZW4pIHtcbiAgICAgICAgY29uc3QgdyA9IFtdO1xuICAgICAgICBsZXQgW2EsIGIsIGMsIGQsIGVdID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuICAgICAgICB3b3JkczMyW2xlbiA+PiA1XSB8PSAweDgwIDw8ICgyNCAtIGxlbiAlIDMyKTtcbiAgICAgICAgd29yZHMzMlsoKGxlbiArIDY0ID4+IDkpIDw8IDQpICsgMTVdID0gbGVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzMzIubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgICAgICAgICBjb25zdCBbaDAsIGgxLCBoMiwgaDMsIGg0XSA9IFthLCBiLCBjLCBkLCBlXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChqIDwgMTYpIHtcbiAgICAgICAgICAgICAgICAgICAgd1tqXSA9IHdvcmRzMzJbaSArIGpdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd1tqXSA9IHJvbDMyKHdbaiAtIDNdIF4gd1tqIC0gOF0gXiB3W2ogLSAxNF0gXiB3W2ogLSAxNl0sIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBbZiwga10gPSBmayhqLCBiLCBjLCBkKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gW3JvbDMyKGEsIDUpLCBmLCBlLCBrLCB3W2pdXS5yZWR1Y2UoYWRkMzIpO1xuICAgICAgICAgICAgICAgIFtlLCBkLCBjLCBiLCBhXSA9IFtkLCBjLCByb2wzMihiLCAzMCksIGEsIHRlbXBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW2EsIGIsIGMsIGQsIGVdID0gW2FkZDMyKGEsIGgwKSwgYWRkMzIoYiwgaDEpLCBhZGQzMihjLCBoMiksIGFkZDMyKGQsIGgzKSwgYWRkMzIoZSwgaDQpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnl0ZVN0cmluZ1RvSGV4U3RyaW5nKHdvcmRzMzJUb0J5dGVTdHJpbmcoW2EsIGIsIGMsIGQsIGVdKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZDMyKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFkZDMydG82NChhLCBiKVsxXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkMzJ0bzY0KGEsIGIpIHtcbiAgICAgICAgY29uc3QgbG93ID0gKGEgJiAweGZmZmYpICsgKGIgJiAweGZmZmYpO1xuICAgICAgICBjb25zdCBoaWdoID0gKGEgPj4+IDE2KSArIChiID4+PiAxNikgKyAobG93ID4+PiAxNik7XG4gICAgICAgIHJldHVybiBbaGlnaCA+Pj4gMTYsIChoaWdoIDw8IDE2KSB8IChsb3cgJiAweGZmZmYpXTtcbiAgICB9XG4gICAgLy8gUm90YXRlIGEgMzJiIG51bWJlciBsZWZ0IGBjb3VudGAgcG9zaXRpb25cbiAgICBmdW5jdGlvbiByb2wzMihhLCBjb3VudCkge1xuICAgICAgICByZXR1cm4gKGEgPDwgY291bnQpIHwgKGEgPj4+ICgzMiAtIGNvdW50KSk7XG4gICAgfVxuICAgIHZhciBFbmRpYW4gPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoRW5kaWFuKSB7XG4gICAgICAgIEVuZGlhbltFbmRpYW5bXCJMaXR0bGVcIl0gPSAwXSA9IFwiTGl0dGxlXCI7XG4gICAgICAgIEVuZGlhbltFbmRpYW5bXCJCaWdcIl0gPSAxXSA9IFwiQmlnXCI7XG4gICAgICAgIHJldHVybiBFbmRpYW47XG4gICAgfSkoe30pO1xuICAgIGZ1bmN0aW9uIGZrKGluZGV4LCBiLCBjLCBkKSB7XG4gICAgICAgIGlmIChpbmRleCA8IDIwKSB7XG4gICAgICAgICAgICByZXR1cm4gWyhiICYgYykgfCAofmIgJiBkKSwgMHg1YTgyNzk5OV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgNDApIHtcbiAgICAgICAgICAgIHJldHVybiBbYiBeIGMgXiBkLCAweDZlZDllYmExXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPCA2MCkge1xuICAgICAgICAgICAgcmV0dXJuIFsoYiAmIGMpIHwgKGIgJiBkKSB8IChjICYgZCksIDB4OGYxYmJjZGNdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbYiBeIGMgXiBkLCAweGNhNjJjMWQ2XTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RyaW5nVG9Xb3JkczMyKHN0ciwgZW5kaWFuKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSAoc3RyLmxlbmd0aCArIDMpID4+PiAyO1xuICAgICAgICBjb25zdCB3b3JkczMyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB3b3JkczMyW2ldID0gd29yZEF0KHN0ciwgaSAqIDQsIGVuZGlhbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdvcmRzMzI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFycmF5QnVmZmVyVG9Xb3JkczMyKGJ1ZmZlciwgZW5kaWFuKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSAoYnVmZmVyLmJ5dGVMZW5ndGggKyAzKSA+Pj4gMjtcbiAgICAgICAgY29uc3Qgd29yZHMzMiA9IFtdO1xuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHdvcmRzMzJbaV0gPSB3b3JkQXQodmlldywgaSAqIDQsIGVuZGlhbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdvcmRzMzI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ5dGVBdChzdHIsIGluZGV4KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ID49IHN0ci5sZW5ndGggPyAwIDogc3RyLmNoYXJDb2RlQXQoaW5kZXgpICYgMHhmZjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCA+PSBzdHIuYnl0ZUxlbmd0aCA/IDAgOiBzdHJbaW5kZXhdICYgMHhmZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB3b3JkQXQoc3RyLCBpbmRleCwgZW5kaWFuKSB7XG4gICAgICAgIGxldCB3b3JkID0gMDtcbiAgICAgICAgaWYgKGVuZGlhbiA9PT0gRW5kaWFuLkJpZykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB3b3JkICs9IGJ5dGVBdChzdHIsIGluZGV4ICsgaSkgPDwgKDI0IC0gOCAqIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB3b3JkICs9IGJ5dGVBdChzdHIsIGluZGV4ICsgaSkgPDwgOCAqIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdvcmQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdvcmRzMzJUb0J5dGVTdHJpbmcod29yZHMzMikge1xuICAgICAgICByZXR1cm4gd29yZHMzMi5yZWR1Y2UoKHN0ciwgd29yZCkgPT4gc3RyICsgd29yZDMyVG9CeXRlU3RyaW5nKHdvcmQpLCAnJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdvcmQzMlRvQnl0ZVN0cmluZyh3b3JkKSB7XG4gICAgICAgIGxldCBzdHIgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCh3b3JkID4+PiA4ICogKDMgLSBpKSkgJiAweGZmKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBieXRlU3RyaW5nVG9IZXhTdHJpbmcoc3RyKSB7XG4gICAgICAgIGxldCBoZXggPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBieXRlQXQoc3RyLCBpKTtcbiAgICAgICAgICAgIGhleCArPSAoYiA+Pj4gNCkudG9TdHJpbmcoMTYpICsgKGIgJiAweDBmKS50b1N0cmluZygxNik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhleC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEEgZ3JvdXAgb2YgYXNzZXRzIHRoYXQgYXJlIGNhY2hlZCBpbiBhIGBDYWNoZWAgYW5kIG1hbmFnZWQgYnkgYSBnaXZlbiBwb2xpY3kuXG4gICAgICpcbiAgICAgKiBDb25jcmV0ZSBjbGFzc2VzIGRlcml2ZSBmcm9tIHRoaXMgYmFzZSBhbmQgc3BlY2lmeSB0aGUgZXhhY3QgY2FjaGluZyBwb2xpY3kuXG4gICAgICovXG4gICAgY2xhc3MgQXNzZXRHcm91cCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHNjb3BlLCBhZGFwdGVyLCBpZGxlLCBjb25maWcsIGhhc2hlcywgZGIsIHByZWZpeCkge1xuICAgICAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyID0gYWRhcHRlcjtcbiAgICAgICAgICAgIHRoaXMuaWRsZSA9IGlkbGU7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgICAgIHRoaXMuaGFzaGVzID0gaGFzaGVzO1xuICAgICAgICAgICAgdGhpcy5kYiA9IGRiO1xuICAgICAgICAgICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgZGVkdXBsaWNhdGlvbiBjYWNoZSwgdG8gbWFrZSBzdXJlIHRoZSBTVyBuZXZlciBtYWtlcyB0d28gbmV0d29yayByZXF1ZXN0c1xuICAgICAgICAgICAgICogZm9yIHRoZSBzYW1lIHJlc291cmNlIGF0IG9uY2UuIE1hbmFnZWQgYnkgYGZldGNoQW5kQ2FjaGVPbmNlYC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5pbkZsaWdodFJlcXVlc3RzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBOb3JtYWxpemVkIHJlc291cmNlIFVSTHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMudXJscyA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybnMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMucGF0dGVybnMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgICAgICAgICAgLy8gTm9ybWFsaXplIHRoZSBjb25maWcncyBVUkxzIHRvIHRha2UgdGhlIFNlcnZpY2VXb3JrZXIncyBzY29wZSBpbnRvIGFjY291bnQuXG4gICAgICAgICAgICB0aGlzLnVybHMgPSBjb25maWcudXJscy5tYXAodXJsID0+IGFkYXB0ZXIubm9ybWFsaXplVXJsKHVybCkpO1xuICAgICAgICAgICAgLy8gUGF0dGVybnMgaW4gdGhlIGNvbmZpZyBhcmUgcmVndWxhciBleHByZXNzaW9ucyBkaXNndWlzZWQgYXMgc3RyaW5ncy4gQnJlYXRoZSBsaWZlIGludG8gdGhlbS5cbiAgICAgICAgICAgIHRoaXMucGF0dGVybnMgPSBjb25maWcucGF0dGVybnMubWFwKHBhdHRlcm4gPT4gbmV3IFJlZ0V4cChwYXR0ZXJuKSk7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBwcmltYXJ5IGNhY2hlLCB3aGljaCBob2xkcyBhbGwgb2YgdGhlIGNhY2hlZCByZXF1ZXN0cyBmb3IgdGhpcyBncm91cC4gSWYgYVxuICAgICAgICAgICAgLy8gcmVzb3VyY2VcbiAgICAgICAgICAgIC8vIGlzbid0IGluIHRoaXMgY2FjaGUsIGl0IGhhc24ndCBiZWVuIGZldGNoZWQgeWV0LlxuICAgICAgICAgICAgdGhpcy5jYWNoZSA9IHNjb3BlLmNhY2hlcy5vcGVuKGAke3RoaXMucHJlZml4fToke2NvbmZpZy5uYW1lfTpjYWNoZWApO1xuICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgbWV0YWRhdGEgdGFibGUsIHdoaWNoIGhvbGRzIHNwZWNpZmljIGluZm9ybWF0aW9uIGZvciBlYWNoIGNhY2hlZCBVUkwsIHN1Y2ggYXNcbiAgICAgICAgICAgIC8vIHRoZSB0aW1lc3RhbXAgb2Ygd2hlbiBpdCB3YXMgYWRkZWQgdG8gdGhlIGNhY2hlLlxuICAgICAgICAgICAgdGhpcy5tZXRhZGF0YSA9IHRoaXMuZGIub3BlbihgJHt0aGlzLnByZWZpeH06JHtjb25maWcubmFtZX06bWV0YWAsIGNvbmZpZy5jYWNoZVF1ZXJ5T3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgY2FjaGVTdGF0dXModXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlID0geWllbGQgdGhpcy5jYWNoZTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRhID0geWllbGQgdGhpcy5tZXRhZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXEgPSB0aGlzLmFkYXB0ZXIubmV3UmVxdWVzdCh1cmwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhY2hlLm1hdGNoKHJlcSwgdGhpcy5jb25maWcuY2FjaGVRdWVyeU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVXBkYXRlQ2FjaGVTdGF0dXMuTk9UX0NBQ0hFRDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIG1ldGEucmVhZChyZXEudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLnVzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBVcGRhdGVDYWNoZVN0YXR1cy5DQUNIRURfQlVUX1VOVVNFRDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAvLyBFcnJvciBvbiB0aGUgc2lkZSBvZiBzYWZldHkgYW5kIGFzc3VtZSBjYWNoZWQuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBVcGRhdGVDYWNoZVN0YXR1cy5DQUNIRUQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYW4gdXAgYWxsIHRoZSBjYWNoZWQgZGF0YSBmb3IgdGhpcyBncm91cC5cbiAgICAgICAgICovXG4gICAgICAgIGNsZWFudXAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuc2NvcGUuY2FjaGVzLmRlbGV0ZShgJHt0aGlzLnByZWZpeH06JHt0aGlzLmNvbmZpZy5uYW1lfTpjYWNoZWApO1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuZGIuZGVsZXRlKGAke3RoaXMucHJlZml4fToke3RoaXMuY29uZmlnLm5hbWV9Om1ldGFgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9jZXNzIGEgcmVxdWVzdCBmb3IgYSBnaXZlbiByZXNvdXJjZSBhbmQgcmV0dXJuIGl0LCBvciByZXR1cm4gbnVsbCBpZiBpdCdzIG5vdCBhdmFpbGFibGUuXG4gICAgICAgICAqL1xuICAgICAgICBoYW5kbGVGZXRjaChyZXEsIGN0eCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmFkYXB0ZXIubm9ybWFsaXplVXJsKHJlcS51cmwpO1xuICAgICAgICAgICAgICAgIC8vIEVpdGhlciB0aGUgcmVxdWVzdCBtYXRjaGVzIG9uZSBvZiB0aGUga25vd24gcmVzb3VyY2UgVVJMcywgb25lIG9mIHRoZSBwYXR0ZXJucyBmb3JcbiAgICAgICAgICAgICAgICAvLyBkeW5hbWljYWxseSBtYXRjaGVkIFVSTHMsIG9yIG5laXRoZXIuIERldGVybWluZSB3aGljaCBpcyB0aGUgY2FzZSBmb3IgdGhpcyByZXF1ZXN0IGluXG4gICAgICAgICAgICAgICAgLy8gb3JkZXIgdG8gZGVjaWRlIGhvdyB0byBoYW5kbGUgaXQuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXJscy5pbmRleE9mKHVybCkgIT09IC0xIHx8IHRoaXMucGF0dGVybnMuc29tZShwYXR0ZXJuID0+IHBhdHRlcm4udGVzdCh1cmwpKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIFVSTCBtYXRjaGVzIGEga25vd24gcmVzb3VyY2UuIEVpdGhlciBpdCdzIGJlZW4gY2FjaGVkIGFscmVhZHkgb3IgaXQncyBtaXNzaW5nLCBpblxuICAgICAgICAgICAgICAgICAgICAvLyB3aGljaCBjYXNlIGl0IG5lZWRzIHRvIGJlIGxvYWRlZCBmcm9tIHRoZSBuZXR3b3JrLlxuICAgICAgICAgICAgICAgICAgICAvLyBPcGVuIHRoZSBjYWNoZSB0byBjaGVjayB3aGV0aGVyIHRoaXMgcmVzb3VyY2UgaXMgcHJlc2VudC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB5aWVsZCB0aGlzLmNhY2hlO1xuICAgICAgICAgICAgICAgICAgICAvLyBMb29rIGZvciBhIGNhY2hlZCByZXNwb25zZS4gSWYgb25lIGV4aXN0cywgaXQgY2FuIGJlIHVzZWQgdG8gcmVzb2x2ZSB0aGUgZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgLy8gb3BlcmF0aW9uLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWRSZXNwb25zZSA9IHlpZWxkIGNhY2hlLm1hdGNoKHJlcSwgdGhpcy5jb25maWcuY2FjaGVRdWVyeU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVkUmVzcG9uc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQSByZXNwb25zZSBoYXMgYWxyZWFkeSBiZWVuIGNhY2hlZCAod2hpY2ggcHJlc3VtYWJseSBtYXRjaGVzIHRoZSBoYXNoIGZvciB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNvdXJjZSkuIENoZWNrIHdoZXRoZXIgaXQncyBzYWZlIHRvIHNlcnZlIHRoaXMgcmVzb3VyY2UgZnJvbSBjYWNoZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc2hlcy5oYXModXJsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgcmVzb3VyY2UgaGFzIGEgaGFzaCwgYW5kIHRodXMgaXMgdmVyc2lvbmVkIGJ5IHRoZSBtYW5pZmVzdC4gSXQncyBzYWZlIHRvIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVkUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHJlc291cmNlIGhhcyBubyBoYXNoLCBhbmQgeWV0IGV4aXN0cyBpbiB0aGUgY2FjaGUuIENoZWNrIGhvdyBvbGQgdGhpcyByZXF1ZXN0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gbWFrZSBzdXJlIGl0J3Mgc3RpbGwgdXNhYmxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5aWVsZCB0aGlzLm5lZWRUb1JldmFsaWRhdGUocmVxLCBjYWNoZWRSZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZGxlLnNjaGVkdWxlKGByZXZhbGlkYXRlKCR7dGhpcy5wcmVmaXh9LCAke3RoaXMuY29uZmlnLm5hbWV9KTogJHtyZXEudXJsfWAsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuZmV0Y2hBbmRDYWNoZU9uY2UocmVxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbiBlaXRoZXIgY2FzZSAocmV2YWxpZGF0aW9uIG9yIG5vdCksIHRoZSBjYWNoZWQgcmVzcG9uc2UgbXVzdCBiZSBnb29kLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZWRSZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBObyBhbHJlYWR5LWNhY2hlZCByZXNwb25zZSBleGlzdHMsIHNvIGF0dGVtcHQgYSBmZXRjaC9jYWNoZSBvcGVyYXRpb24uIFRoZSBvcmlnaW5hbCByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIG1heSBzcGVjaWZ5IHRoaW5ncyBsaWtlIGNyZWRlbnRpYWwgaW5jbHVzaW9uLCBidXQgZm9yIGFzc2V0cyB0aGVzZSBhcmUgbm90IGhvbm9yZWQgaW4gb3JkZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYXZvaWQgaXNzdWVzIHdpdGggb3BhcXVlIHJlc3BvbnNlcy4gVGhlIFNXIHJlcXVlc3RzIHRoZSBkYXRhIGl0c2VsZi5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgdGhpcy5mZXRjaEFuZENhY2hlT25jZSh0aGlzLmFkYXB0ZXIubmV3UmVxdWVzdChyZXEudXJsKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgc3VjY2Vzc2Z1bCwgdGhlIHJlc3BvbnNlIG5lZWRzIHRvIGJlIGNsb25lZCBhcyBpdCBtaWdodCBiZSB1c2VkIHRvIHJlc3BvbmQgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGlwbGUgZmV0Y2ggb3BlcmF0aW9ucyBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU29tZSByZXNvdXJjZXMgYXJlIGNhY2hlZCB3aXRob3V0IGEgaGFzaCwgbWVhbmluZyB0aGF0IHRoZWlyIGV4cGlyYXRpb24gaXMgY29udHJvbGxlZFxuICAgICAgICAgKiBieSBIVFRQIGNhY2hpbmcgaGVhZGVycy4gQ2hlY2sgd2hldGhlciB0aGUgZ2l2ZW4gcmVxdWVzdC9yZXNwb25zZSBwYWlyIGlzIHN0aWxsIHZhbGlkXG4gICAgICAgICAqIHBlciB0aGUgY2FjaGluZyBoZWFkZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgbmVlZFRvUmV2YWxpZGF0ZShyZXEsIHJlcykge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAvLyBUaHJlZSBkaWZmZXJlbnQgc3RyYXRlZ2llcyBhcHBseSBoZXJlOlxuICAgICAgICAgICAgICAgIC8vIDEpIFRoZSByZXF1ZXN0IGhhcyBhIENhY2hlLUNvbnRyb2wgaGVhZGVyLCBhbmQgdGh1cyBleHBpcmF0aW9uIG5lZWRzIHRvIGJlIGJhc2VkIG9uIGl0cyBhZ2UuXG4gICAgICAgICAgICAgICAgLy8gMikgVGhlIHJlcXVlc3QgaGFzIGFuIEV4cGlyZXMgaGVhZGVyLCBhbmQgZXhwaXJhdGlvbiBpcyBiYXNlZCBvbiB0aGUgY3VycmVudCB0aW1lc3RhbXAuXG4gICAgICAgICAgICAgICAgLy8gMykgVGhlIHJlcXVlc3QgaGFzIG5vIGFwcGxpY2FibGUgY2FjaGluZyBoZWFkZXJzLCBhbmQgbXVzdCBiZSByZXZhbGlkYXRlZC5cbiAgICAgICAgICAgICAgICBpZiAocmVzLmhlYWRlcnMuaGFzKCdDYWNoZS1Db250cm9sJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlndXJlIG91dCBpZiB0aGVyZSBpcyBhIG1heC1hZ2UgZGlyZWN0aXZlIGluIHRoZSBDYWNoZS1Db250cm9sIGhlYWRlci5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FjaGVDb250cm9sID0gcmVzLmhlYWRlcnMuZ2V0KCdDYWNoZS1Db250cm9sJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlRGlyZWN0aXZlcyA9IGNhY2hlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlyZWN0aXZlcyBhcmUgY29tbWEtc2VwYXJhdGVkIHdpdGhpbiB0aGUgQ2FjaGUtQ29udHJvbCBoZWFkZXIgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGVhY2ggZGlyZWN0aXZlIGRvZXNuJ3QgaGF2ZSBleHRyYW5lb3VzIHdoaXRlc3BhY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHYgPT4gdi50cmltKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTb21lIGRpcmVjdGl2ZXMgaGF2ZSB2YWx1ZXMgKGxpa2UgbWF4YWdlIGFuZCBzLW1heGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodiA9PiB2LnNwbGl0KCc9JykpO1xuICAgICAgICAgICAgICAgICAgICAvLyBMb3dlcmNhc2UgYWxsIHRoZSBkaXJlY3RpdmUgbmFtZXMuXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlRGlyZWN0aXZlcy5mb3JFYWNoKHYgPT4gdlswXSA9IHZbMF0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIG1heC1hZ2UgZGlyZWN0aXZlLCBpZiBvbmUgZXhpc3RzLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhBZ2VEaXJlY3RpdmUgPSBjYWNoZURpcmVjdGl2ZXMuZmluZCh2ID0+IHZbMF0gPT09ICdtYXgtYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlQWdlID0gbWF4QWdlRGlyZWN0aXZlID8gbWF4QWdlRGlyZWN0aXZlWzFdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhY2hlQWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBObyB1c2FibGUgVFRMIGRlZmluZWQuIE11c3QgYXNzdW1lIHRoYXQgdGhlIHJlc3BvbnNlIGlzIHN0YWxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heEFnZSA9IDEwMDAgKiBwYXJzZUludChjYWNoZUFnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIG9yaWdpbiB0aW1lIG9mIHRoaXMgcmVxdWVzdC4gSWYgdGhlIFNXIGhhcyBtZXRhZGF0YSBvbiB0aGUgcmVxdWVzdCAod2hpY2hcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQpLCBpdCB3aWxsIGhhdmUgdGhlIHRpbWUgdGhlIHJlcXVlc3Qgd2FzIGFkZGVkIHRvIHRoZSBjYWNoZS4gSWYgaXQgZG9lc24ndCBmb3Igc29tZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVhc29uLCB0aGUgcmVxdWVzdCBtYXkgaGF2ZSBhIERhdGUgaGVhZGVyIHdoaWNoIHdpbGwgc2VydmUgdGhlIHNhbWUgcHVycG9zZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIG1ldGFkYXRhIHRhYmxlLiBJZiBhIHRpbWVzdGFtcCBpcyB0aGVyZSwgdXNlIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFUYWJsZSA9IHlpZWxkIHRoaXMubWV0YWRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHMgPSAoeWllbGQgbWV0YVRhYmxlLnJlYWQocmVxLnVybCkpLnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBsb29rIGZvciBhIERhdGUgaGVhZGVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSByZXMuaGVhZGVycy5nZXQoJ0RhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVbmFibGUgdG8gZGV0ZXJtaW5lIHdoZW4gdGhpcyByZXNwb25zZSB3YXMgY3JlYXRlZC4gQXNzdW1lIHRoYXQgaXQncyBzdGFsZSwgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldmFsaWRhdGUgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cyA9IERhdGUucGFyc2UoZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZ2UgPSB0aGlzLmFkYXB0ZXIudGltZSAtIHRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFnZSA8IDAgfHwgYWdlID4gbWF4QWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChfYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXNzdW1lIHN0YWxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLmhlYWRlcnMuaGFzKCdFeHBpcmVzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBleHBpcmF0aW9uIHRpbWUgaGFzIHBhc3NlZC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJlc1N0ciA9IHJlcy5oZWFkZXJzLmdldCgnRXhwaXJlcycpO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3QgbmVlZHMgdG8gYmUgcmV2YWxpZGF0ZWQgaWYgdGhlIGN1cnJlbnQgdGltZSBpcyBsYXRlciB0aGFuIHRoZSBleHBpcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aW1lLCBpZiBpdCBwYXJzZXMgY29ycmVjdGx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci50aW1lID4gRGF0ZS5wYXJzZShleHBpcmVzU3RyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoX2MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBleHBpcmF0aW9uIGRhdGUgZmFpbGVkIHRvIHBhcnNlLCBzbyByZXZhbGlkYXRlIGFzIGEgcHJlY2F1dGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBObyB3YXkgdG8gZXZhbHVhdGUgc3RhbGVuZXNzLCBzbyBhc3N1bWUgdGhlIHJlc3BvbnNlIGlzIGFscmVhZHkgc3RhbGUuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGZXRjaCB0aGUgY29tcGxldGUgc3RhdGUgb2YgYSBjYWNoZWQgcmVzb3VyY2UsIG9yIHJldHVybiBudWxsIGlmIGl0J3Mgbm90IGZvdW5kLlxuICAgICAgICAgKi9cbiAgICAgICAgZmV0Y2hGcm9tQ2FjaGVPbmx5KHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZSA9IHlpZWxkIHRoaXMuY2FjaGU7XG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YVRhYmxlID0geWllbGQgdGhpcy5tZXRhZGF0YTtcbiAgICAgICAgICAgICAgICAvLyBMb29rdXAgdGhlIHJlc3BvbnNlIGluIHRoZSBjYWNoZS5cbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5hZGFwdGVyLm5ld1JlcXVlc3QodXJsKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhY2hlLm1hdGNoKHJlcXVlc3QsIHRoaXMuY29uZmlnLmNhY2hlUXVlcnlPcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIG5vdCBmb3VuZCwgcmV0dXJuIG51bGwuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBOZXh0LCBsb29rdXAgdGhlIGNhY2hlZCBtZXRhZGF0YS5cbiAgICAgICAgICAgICAgICBsZXQgbWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEgPSB5aWVsZCBtZXRhVGFibGUucmVhZChyZXF1ZXN0LnVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nLCBub3QgZm91bmQuIFRoaXMgc2hvdWxkbid0IGhhcHBlbiwgYnV0IGl0IGNhbiBiZSBoYW5kbGVkLlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gYm90aCB0aGUgcmVzcG9uc2UgYW5kIGFueSBhdmFpbGFibGUgbWV0YWRhdGEuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzcG9uc2UsIG1ldGFkYXRhIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTG9va3VwIGFsbCByZXNvdXJjZXMgY3VycmVudGx5IHN0b3JlZCBpbiB0aGUgY2FjaGUgd2hpY2ggaGF2ZSBubyBhc3NvY2lhdGVkIGhhc2guXG4gICAgICAgICAqL1xuICAgICAgICB1bmhhc2hlZFJlc291cmNlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB5aWVsZCB0aGlzLmNhY2hlO1xuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggdGhlIHNldCBvZiBhbGwgY2FjaGVkIHJlcXVlc3RzLlxuICAgICAgICAgICAgICAgIHJldHVybiAoeWllbGQgY2FjaGUua2V5cygpKVxuICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgdGhlaXIgVVJMcy5cbiAgICAgICAgICAgICAgICAgICAgLm1hcChyZXF1ZXN0ID0+IHRoaXMuYWRhcHRlci5ub3JtYWxpemVVcmwocmVxdWVzdC51cmwpKVxuICAgICAgICAgICAgICAgICAgICAvLyBFeGNsdWRlIHRoZSBVUkxzIHdoaWNoIGhhdmUgaGFzaGVzLlxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHVybCA9PiAhdGhpcy5oYXNoZXMuaGFzKHVybCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZldGNoIHRoZSBnaXZlbiByZXNvdXJjZSBmcm9tIHRoZSBuZXR3b3JrLCBhbmQgY2FjaGUgaXQgaWYgYWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIGZldGNoQW5kQ2FjaGVPbmNlKHJlcSwgdXNlZCA9IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGBpbkZsaWdodFJlcXVlc3RzYCBtYXAgaG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgd2hpY2ggY2FjaGluZyBvcGVyYXRpb25zIGFyZSBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAvLyB1bmRlcndheSBmb3Iga25vd24gcmVzb3VyY2VzLiBJZiB0aGlzIHJlcXVlc3QgYXBwZWFycyB0aGVyZSwgYW5vdGhlciBcInRocmVhZFwiIGlzIGFscmVhZHlcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgcHJvY2VzcyBvZiBjYWNoaW5nIGl0LCBhbmQgdGhpcyB3b3JrIHNob3VsZCBub3QgYmUgZHVwbGljYXRlZC5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbkZsaWdodFJlcXVlc3RzLmhhcyhyZXEudXJsKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGVyZSBpcyBhIGNhY2hpbmcgb3BlcmF0aW9uIGFscmVhZHkgaW4gcHJvZ3Jlc3MgZm9yIHRoaXMgcmVxdWVzdC4gV2FpdCBmb3IgaXQgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gY29tcGxldGUsIGFuZCBob3BlZnVsbHkgaXQgd2lsbCBoYXZlIHlpZWxkZWQgYSB1c2VmdWwgcmVzcG9uc2UuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluRmxpZ2h0UmVxdWVzdHMuZ2V0KHJlcS51cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBvdGhlciBjYWNoaW5nIG9wZXJhdGlvbiBpcyBiZWluZyBhdHRlbXB0ZWQgZm9yIHRoaXMgcmVzb3VyY2UsIHNvIGl0IHdpbGwgYmUgb3duZWQgaGVyZS5cbiAgICAgICAgICAgICAgICAvLyBHbyB0byB0aGUgbmV0d29yayBhbmQgZ2V0IHRoZSBjb3JyZWN0IHZlcnNpb24uXG4gICAgICAgICAgICAgICAgY29uc3QgZmV0Y2hPcCA9IHRoaXMuZmV0Y2hGcm9tTmV0d29yayhyZXEpO1xuICAgICAgICAgICAgICAgIC8vIFNhdmUgdGhpcyBvcGVyYXRpb24gaW4gYGluRmxpZ2h0UmVxdWVzdHNgIHNvIGFueSBvdGhlciBcInRocmVhZFwiIGF0dGVtcHRpbmcgdG8gY2FjaGUgaXRcbiAgICAgICAgICAgICAgICAvLyB3aWxsIGJsb2NrIG9uIHRoaXMgY2hhaW4gaW5zdGVhZCBvZiBkdXBsaWNhdGluZyBlZmZvcnQuXG4gICAgICAgICAgICAgICAgdGhpcy5pbkZsaWdodFJlcXVlc3RzLnNldChyZXEudXJsLCBmZXRjaE9wKTtcbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhpcyBhdHRlbXB0IGlzIGNsZWFuZWQgdXAgcHJvcGVybHkgb24gZmFpbHVyZS5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXYWl0IGZvciBhIHJlc3BvbnNlLiBJZiB0aGlzIGZhaWxzLCB0aGUgcmVxdWVzdCB3aWxsIHJlbWFpbiBpbiBgaW5GbGlnaHRSZXF1ZXN0c2BcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5kZWZpbml0ZWx5LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaE9wO1xuICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHZlcnkgaW1wb3J0YW50IHRoYXQgb25seSBzdWNjZXNzZnVsIHJlc3BvbnNlcyBhcmUgY2FjaGVkLiBVbnN1Y2Nlc3NmdWwgcmVzcG9uc2VzXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBuZXZlciBiZSBjYWNoZWQgYXMgdGhpcyBjYW4gY29tcGxldGVseSBicmVhayBhcHBsaWNhdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlc3BvbnNlIG5vdCBPayAoZmV0Y2hBbmRDYWNoZU9uY2UpOiByZXF1ZXN0IGZvciAke3JlcS51cmx9IHJldHVybmVkIHJlc3BvbnNlICR7cmVzLnN0YXR1c30gJHtyZXMuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyByZXNwb25zZSBpcyBzYWZlIHRvIGNhY2hlIChhcyBsb25nIGFzIGl0J3MgY2xvbmVkKS4gV2FpdCB1bnRpbCB0aGUgY2FjaGUgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpcyBjb21wbGV0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlID0geWllbGQgdGhpcy5zY29wZS5jYWNoZXMub3BlbihgJHt0aGlzLnByZWZpeH06JHt0aGlzLmNvbmZpZy5uYW1lfTpjYWNoZWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgY2FjaGUucHV0KHJlcSwgcmVzLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgaXMgbm90IGhhc2hlZCwgdXBkYXRlIGl0cyBtZXRhZGF0YSwgZXNwZWNpYWxseSB0aGUgdGltZXN0YW1wLiBUaGlzIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuZWVkZWQgZm9yIGZ1dHVyZSBkZXRlcm1pbmF0aW9uIG9mIHdoZXRoZXIgdGhpcyBjYWNoZWQgcmVzcG9uc2UgaXMgc3RhbGUgb3Igbm90LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhhc2hlcy5oYXModGhpcy5hZGFwdGVyLm5vcm1hbGl6ZVVybChyZXEudXJsKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNZXRhZGF0YSBpcyB0cmFja2VkIGZvciByZXF1ZXN0cyB0aGF0IGFyZSB1bmhhc2hlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhID0geyB0czogdGhpcy5hZGFwdGVyLnRpbWUsIHVzZWQgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhVGFibGUgPSB5aWVsZCB0aGlzLm1ldGFkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIG1ldGFUYWJsZS53cml0ZShyZXEudXJsLCBtZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQW1vbmcgb3RoZXIgY2FzZXMsIHRoaXMgY2FuIGhhcHBlbiB3aGVuIHRoZSB1c2VyIGNsZWFycyBhbGwgZGF0YSB0aHJvdWdoIHRoZSBEZXZUb29scyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB0aGUgU1cgaXMgc3RpbGwgcnVubmluZyBhbmQgc2VydmluZyBhbm90aGVyIHRhYi4gSW4gdGhhdCBjYXNlLCB0cnlpbmcgdG8gd3JpdGUgdG8gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYWNoZXMgdGhyb3dzIGFuIGBFbnRyeSB3YXMgbm90IGZvdW5kYCBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaGFwcGVucyB0aGUgU1cgY2FuIG5vIGxvbmdlciB3b3JrIGNvcnJlY3RseS4gVGhpcyBzaXR1YXRpb24gaXMgdW5yZWNvdmVyYWJsZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBTd0NyaXRpY2FsRXJyb3IoYEZhaWxlZCB0byB1cGRhdGUgdGhlIGNhY2hlcyBmb3IgcmVxdWVzdCB0byAnJHtyZXEudXJsfScgKGZldGNoQW5kQ2FjaGVPbmNlKTogJHtlcnJvclRvU3RyaW5nKGVycil9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbmFsbHksIGl0IGNhbiBiZSByZW1vdmVkIGZyb20gYGluRmxpZ2h0UmVxdWVzdHNgLiBUaGlzIG1pZ2h0IHJlc3VsdCBpbiBhIGRvdWJsZS1yZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgc29tZSBvdGhlciBjaGFpbiB3YXMgYWxyZWFkeSBtYWtpbmcgdGhpcyByZXF1ZXN0IHRvbywgYnV0IHRoYXQgd29uJ3QgaHVydCBhbnl0aGluZy5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbkZsaWdodFJlcXVlc3RzLmRlbGV0ZShyZXEudXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaEZyb21OZXR3b3JrKHJlcSwgcmVkaXJlY3RMaW1pdCA9IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gTWFrZSBhIGNhY2hlLWJ1c3RlZCByZXF1ZXN0IGZvciB0aGUgcmVzb3VyY2UuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgdGhpcy5jYWNoZUJ1c3RlZEZldGNoRnJvbU5ldHdvcmsocmVxKTtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgcmVkaXJlY3RlZCByZXNwb25zZXMsIGFuZCBmb2xsb3cgdGhlIHJlZGlyZWN0cy5cbiAgICAgICAgICAgICAgICBpZiAocmVzWydyZWRpcmVjdGVkJ10gJiYgISFyZXMudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZWRpcmVjdCBsaW1pdCBpcyBleGhhdXN0ZWQsIGZhaWwgd2l0aCBhbiBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0TGltaXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBTd0NyaXRpY2FsRXJyb3IoYFJlc3BvbnNlIGhpdCByZWRpcmVjdCBsaW1pdCAoZmV0Y2hGcm9tTmV0d29yayk6IHJlcXVlc3QgcmVkaXJlY3RlZCB0b28gbWFueSB0aW1lcywgbmV4dCBpcyAke3Jlcy51cmx9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVW53cmFwIHRoZSByZWRpcmVjdCBkaXJlY3RseS5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hGcm9tTmV0d29yayh0aGlzLmFkYXB0ZXIubmV3UmVxdWVzdChyZXMudXJsKSwgcmVkaXJlY3RMaW1pdCAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvYWQgYSBwYXJ0aWN1bGFyIGFzc2V0IGZyb20gdGhlIG5ldHdvcmssIGFjY291bnRpbmcgZm9yIGhhc2ggdmFsaWRhdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIGNhY2hlQnVzdGVkRmV0Y2hGcm9tTmV0d29yayhyZXEpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5hZGFwdGVyLm5vcm1hbGl6ZVVybChyZXEudXJsKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIGhhc2ggaXMgYXZhaWxhYmxlIGZvciB0aGlzIHJlc291cmNlLCB0aGVuIGNvbXBhcmUgdGhlIGZldGNoZWQgdmVyc2lvbiB3aXRoIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNhbm9uaWNhbCBoYXNoLiBPdGhlcndpc2UsIHRoZSBuZXR3b3JrIHZlcnNpb24gd2lsbCBoYXZlIHRvIGJlIHRydXN0ZWQuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzaGVzLmhhcyh1cmwpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEl0IHR1cm5zIG91dCB0aGlzIHJlc291cmNlIGRvZXMgaGF2ZSBhIGhhc2guIExvb2sgaXQgdXAuIFVubGVzcyB0aGUgZmV0Y2hlZCB2ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoZXMgdGhpcyBoYXNoLCBpdCdzIGludmFsaWQgYW5kIHRoZSB3aG9sZSBtYW5pZmVzdCBtYXkgbmVlZCB0byBiZSB0aHJvd24gb3V0LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW5vbmljYWxIYXNoID0gdGhpcy5oYXNoZXMuZ2V0KHVybCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElkZWFsbHksIHRoZSByZXNvdXJjZSB3b3VsZCBiZSByZXF1ZXN0ZWQgd2l0aCBjYWNoZS1idXN0aW5nIHRvIGd1YXJhbnRlZSB0aGUgU1cgZ2V0c1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZnJlc2hlc3QgdmVyc2lvbi4gSG93ZXZlciwgZG9pbmcgdGhpcyB3b3VsZCBlbGltaW5hdGUgYW55IGNoYW5jZSBvZiB0aGUgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgLy8gYmVpbmcgaW4gdGhlIEhUVFAgY2FjaGUuIEdpdmVuIHRoYXQgdGhlIGJyb3dzZXIgaGFzIHJlY2VudGx5IGFjdGl2ZWx5IGxvYWRlZCB0aGUgcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBsaWtlbHkgdGhhdCBtYW55IG9mIHRoZSByZXNwb25zZXMgdGhlIFNXIG5lZWRzIHRvIGNhY2hlIGFyZSBpbiB0aGUgSFRUUCBjYWNoZSBhbmRcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJlIGZyZXNoIGVub3VnaCB0byB1c2UuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYmUgZG9uZSBieSBzZXR0aW5nIGNhY2hlTW9kZSB0b1xuICAgICAgICAgICAgICAgICAgICAvLyAqb25seSogY2hlY2sgdGhlIGJyb3dzZXIgY2FjaGUgZm9yIGEgY2FjaGVkIHZlcnNpb24gb2YgdGhlIHJlc291cmNlLCB3aGVuIGNhY2hlTW9kZSBpc1xuICAgICAgICAgICAgICAgICAgICAvLyBmdWxseSBzdXBwb3J0ZWQuIEZvciBub3csIHRoZSByZXNvdXJjZSBpcyBmZXRjaGVkIGRpcmVjdGx5LCB3aXRob3V0IGNhY2hlLWJ1c3RpbmcsIGFuZFxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgaGFzaCB0ZXN0IGZhaWxzIGEgY2FjaGUtYnVzdGVkIHJlcXVlc3QgaXMgdHJpZWQgYmVmb3JlIGNvbmNsdWRpbmcgdGhhdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzb3VyY2UgaXNuJ3QgY29ycmVjdC4gVGhpcyBnaXZlcyB0aGUgYmVuZWZpdCBvZiBhY2NlbGVyYXRpb24gdmlhIHRoZSBIVFRQIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpdGhvdXQgdGhlIHJpc2sgb2Ygc3RhbGUgZGF0YSwgYXQgdGhlIGV4cGVuc2Ugb2YgYSBkdXBsaWNhdGUgcmVxdWVzdCBpbiB0aGUgZXZlbnQgb2ZcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBzdGFsZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gRmV0Y2ggdGhlIHJlc291cmNlIGZyb20gdGhlIG5ldHdvcmsgKHBvc3NpYmx5IGhpdHRpbmcgdGhlIEhUVFAgY2FjaGUpLlxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB5aWVsZCB0aGlzLnNhZmVGZXRjaChyZXEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEZWNpZGUgd2hldGhlciBhIGNhY2hlLWJ1c3RlZCByZXF1ZXN0IGlzIG5lY2Vzc2FyeS4gQSBjYWNoZS1idXN0ZWQgcmVxdWVzdCBpcyBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBpZiB0aGUgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bCBidXQgdGhlIGhhc2ggb2YgdGhlIHJldHJpZXZlZCBjb250ZW50cyBkb2VzIG5vdCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY2Fub25pY2FsIGhhc2ggZnJvbSB0aGUgbWFuaWZlc3QuXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYWtlQ2FjaGVCdXN0ZWRSZXF1ZXN0ID0gcmVzcG9uc2Uub2s7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYWtlQ2FjaGVCdXN0ZWRSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bC4gQSBjYWNoZS1idXN0ZWQgcmVxdWVzdCBpcyBvbmx5IG5lY2Vzc2FyeSBpZiB0aGUgaGFzaGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCBtYXRjaC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIChNYWtlIHN1cmUgdG8gY2xvbmUgdGhlIHJlc3BvbnNlIHNvIGl0IGNhbiBiZSB1c2VkIGxhdGVyIGlmIGl0IHByb3ZlcyB0byBiZSB2YWxpZC4pXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmZXRjaGVkSGFzaCA9IHNoYTFCaW5hcnkoeWllbGQgcmVzcG9uc2UuY2xvbmUoKS5hcnJheUJ1ZmZlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VDYWNoZUJ1c3RlZFJlcXVlc3QgPSAoZmV0Y2hlZEhhc2ggIT09IGNhbm9uaWNhbEhhc2gpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2UgYSBjYWNoZSBidXN0ZWQgcmVxdWVzdCB0byB0aGUgbmV0d29yaywgaWYgbmVjZXNzYXJ5LlxuICAgICAgICAgICAgICAgICAgICBpZiAobWFrZUNhY2hlQnVzdGVkUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFzaCBmYWlsdXJlLCB0aGUgdmVyc2lvbiB0aGF0IHdhcyByZXRyaWV2ZWQgdW5kZXIgdGhlIGRlZmF1bHQgVVJMIGRpZCBub3QgaGF2ZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhc2ggZXhwZWN0ZWQuIFRoaXMgY291bGQgYmUgYmVjYXVzZSB0aGUgSFRUUCBjYWNoZSBnb3QgaW4gdGhlIHdheSBhbmQgcmV0dXJuZWQgc3RhbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRhdGEsIG9yIGJlY2F1c2UgdGhlIHZlcnNpb24gb24gdGhlIHNlcnZlciByZWFsbHkgZG9lc24ndCBtYXRjaC4gQSBjYWNoZS1idXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1ZXN0IHdpbGwgZGlmZmVyZW50aWF0ZSB0aGVzZSB0d28gc2l0dWF0aW9ucy5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGhhbmRsZSBjYXNlIHdoZXJlIHRoZSBVUkwgaGFzIHBhcmFtZXRlcnMgYWxyZWFkeSAodW5saWtlbHkgZm9yIGFzc2V0cykuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWNoZUJ1c3RSZXEgPSB0aGlzLmFkYXB0ZXIubmV3UmVxdWVzdCh0aGlzLmNhY2hlQnVzdChyZXEudXJsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHlpZWxkIHRoaXMuc2FmZUZldGNoKGNhY2hlQnVzdFJlcSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVzcG9uc2Ugd2FzIHN1Y2Nlc3NmdWwsIGNoZWNrIHRoZSBjb250ZW50cyBhZ2FpbnN0IHRoZSBjYW5vbmljYWwgaGFzaC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhc2ggdGhlIGNvbnRlbnRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIChNYWtlIHN1cmUgdG8gY2xvbmUgdGhlIHJlc3BvbnNlIHNvIGl0IGNhbiBiZSB1c2VkIGxhdGVyIGlmIGl0IHByb3ZlcyB0byBiZSB2YWxpZC4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FjaGVCdXN0ZWRIYXNoID0gc2hhMUJpbmFyeSh5aWVsZCByZXNwb25zZS5jbG9uZSgpLmFycmF5QnVmZmVyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjYWNoZS1idXN0ZWQgdmVyc2lvbiBkb2Vzbid0IG1hdGNoLCB0aGVuIHRoZSBtYW5pZmVzdCBpcyBub3QgYW4gYWNjdXJhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXByZXNlbnRhdGlvbiBvZiB0aGUgc2VydmVyJ3MgY3VycmVudCBzZXQgb2YgZmlsZXMsIGFuZCB0aGUgU1cgc2hvdWxkIGdpdmUgdXAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbm9uaWNhbEhhc2ggIT09IGNhY2hlQnVzdGVkSGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3dDcml0aWNhbEVycm9yKGBIYXNoIG1pc21hdGNoIChjYWNoZUJ1c3RlZEZldGNoRnJvbU5ldHdvcmspOiAke3JlcS51cmx9OiBleHBlY3RlZCAke2Nhbm9uaWNhbEhhc2h9LCBnb3QgJHtjYWNoZUJ1c3RlZEhhc2h9IChhZnRlciBjYWNoZSBidXN0aW5nKWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCBgcmVzcG9uc2VgIGlzIGVpdGhlciBzdWNjZXNzZnVsIHdpdGggYSBtYXRjaGluZyBoYXNoIG9yIGlzIHVuc3VjY2Vzc2Z1bC5cbiAgICAgICAgICAgICAgICAgICAgLy8gQmVmb3JlIHJldHVybmluZyBpdCwgY2hlY2sgd2hldGhlciBpdCBmYWlsZWQgd2l0aCBhIDQwNCBzdGF0dXMuIFRoaXMgd291bGQgc2lnbmlmeSBhblxuICAgICAgICAgICAgICAgICAgICAvLyB1bnJlY292ZXJhYmxlIHN0YXRlLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rICYmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBTd1VucmVjb3ZlcmFibGVTdGF0ZUVycm9yKGBGYWlsZWQgdG8gcmV0cmlldmUgaGFzaGVkIHJlc291cmNlIGZyb20gdGhlIHNlcnZlci4gKEFzc2V0R3JvdXA6ICR7dGhpcy5jb25maWcubmFtZX0gfCBVUkw6ICR7dXJsfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHJlc3BvbnNlIChzdWNjZXNzZnVsIG9yIHVuc3VjY2Vzc2Z1bCkuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgVVJMIGRvZXNuJ3QgZXhpc3QgaW4gb3VyIGhhc2ggZGF0YWJhc2UsIHNvIGl0IG11c3QgYmUgcmVxdWVzdGVkIGRpcmVjdGx5LlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zYWZlRmV0Y2gocmVxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUG9zc2libHkgdXBkYXRlIGEgcmVzb3VyY2UsIGlmIGl0J3MgZXhwaXJlZCBhbmQgbmVlZHMgdG8gYmUgdXBkYXRlZC4gQSBuby1vcCBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuICAgICAgICBtYXliZVVwZGF0ZSh1cGRhdGVGcm9tLCByZXEsIGNhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHRoaXMuYWRhcHRlci5ub3JtYWxpemVVcmwocmVxLnVybCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YSA9IHlpZWxkIHRoaXMubWV0YWRhdGE7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyByZXNvdXJjZSBpcyBoYXNoZWQgYW5kIGFscmVhZHkgZXhpc3RzIGluIHRoZSBjYWNoZSBvZiBhIHByaW9yIHZlcnNpb24uXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzaGVzLmhhcyh1cmwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc2ggPSB0aGlzLmhhc2hlcy5nZXQodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIGNhY2hlcyBvZiBwcmlvciB2ZXJzaW9ucywgdXNpbmcgdGhlIGhhc2ggdG8gZW5zdXJlIHRoZSBjb3JyZWN0IHZlcnNpb24gb2ZcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHJlc291cmNlIGlzIGxvYWRlZC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgdXBkYXRlRnJvbS5sb29rdXBSZXNvdXJjZVdpdGhIYXNoKHVybCwgaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGEgcHJldmlvdXNseSBjYWNoZWQgdmVyc2lvbiB3YXMgYXZhaWxhYmxlLCBjb3B5IGl0IG92ZXIgdG8gdGhpcyBjYWNoZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29weSB0byB0aGlzIGNhY2hlLlxuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgY2FjaGUucHV0KHJlcSwgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIG1ldGEud3JpdGUocmVxLnVybCwgeyB0czogdGhpcy5hZGFwdGVyLnRpbWUsIHVzZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBkbyBhbnl0aGluZyBmdXJ0aGVyIHdpdGggdGhpcyByZXNvdXJjZSwgaXQncyBub3cgY2FjaGVkIHByb3Blcmx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gdXAtdG8tZGF0ZSB2ZXJzaW9uIG9mIHRoaXMgcmVzb3VyY2UgY291bGQgYmUgZm91bmQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdCBhIGNhY2hlLWJ1c3RpbmcgVVJMIGZvciBhIGdpdmVuIFVSTC5cbiAgICAgICAgICovXG4gICAgICAgIGNhY2hlQnVzdCh1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmwgKyAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgJ25nc3ctY2FjaGUtYnVzdD0nICsgTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBzYWZlRmV0Y2gocmVxKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCB0aGlzLnNjb3BlLmZldGNoKHJlcSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLm5ld1Jlc3BvbnNlKCcnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6ICdHYXRld2F5IFRpbWVvdXQnLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbiBgQXNzZXRHcm91cGAgdGhhdCBwcmVmZXRjaGVzIGFsbCBvZiBpdHMgcmVzb3VyY2VzIGR1cmluZyBpbml0aWFsaXphdGlvbi5cbiAgICAgKi9cbiAgICBjbGFzcyBQcmVmZXRjaEFzc2V0R3JvdXAgZXh0ZW5kcyBBc3NldEdyb3VwIHtcbiAgICAgICAgaW5pdGlhbGl6ZUZ1bGx5KHVwZGF0ZUZyb20pIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gT3BlbiB0aGUgY2FjaGUgd2hpY2ggYWN0dWFsbHkgaG9sZHMgcmVxdWVzdHMuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB5aWVsZCB0aGlzLmNhY2hlO1xuICAgICAgICAgICAgICAgIC8vIENhY2hlIGFsbCBrbm93biByZXNvdXJjZXMgc2VyaWFsbHkuIEFzIHRoaXMgcmVkdWNlIHByb2NlZWRzLCBlYWNoIFByb21pc2Ugd2FpdHNcbiAgICAgICAgICAgICAgICAvLyBvbiB0aGUgbGFzdCBiZWZvcmUgc3RhcnRpbmcgdGhlIGZldGNoL2NhY2hlIG9wZXJhdGlvbiBmb3IgdGhlIG5leHQgcmVxdWVzdC4gQW55XG4gICAgICAgICAgICAgICAgLy8gZXJyb3JzIGNhdXNlIGZhbGwtdGhyb3VnaCB0byB0aGUgZmluYWwgUHJvbWlzZSB3aGljaCByZWplY3RzLlxuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMudXJscy5yZWR1Y2UoKHByZXZpb3VzLCB1cmwpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FpdCBvbiBhbGwgcHJldmlvdXMgb3BlcmF0aW9ucyB0byBjb21wbGV0ZS5cbiAgICAgICAgICAgICAgICAgICAgeWllbGQgcHJldmlvdXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnN0cnVjdCB0aGUgUmVxdWVzdCBmb3IgdGhpcyB1cmwuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcSA9IHRoaXMuYWRhcHRlci5uZXdSZXF1ZXN0KHVybCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0LCBjaGVjayB0aGUgY2FjaGUgdG8gc2VlIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBjb3B5IG9mIHRoaXMgcmVzb3VyY2UuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFscmVhZHlDYWNoZWQgPSAoeWllbGQgY2FjaGUubWF0Y2gocmVxLCB0aGlzLmNvbmZpZy5jYWNoZVF1ZXJ5T3B0aW9ucykpICE9PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXNvdXJjZSBpcyBpbiB0aGUgY2FjaGUgYWxyZWFkeSwgaXQgY2FuIGJlIHNraXBwZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbHJlYWR5Q2FjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYW4gdXBkYXRlIHNvdXJjZSBpcyBhdmFpbGFibGUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVGcm9tICE9PSB1bmRlZmluZWQgJiYgKHlpZWxkIHRoaXMubWF5YmVVcGRhdGUodXBkYXRlRnJvbSwgcmVxLCBjYWNoZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBnbyB0byB0aGUgbmV0d29yayBhbmQgaG9wZWZ1bGx5IGNhY2hlIHRoZSByZXNwb25zZSAoaWYgc3VjY2Vzc2Z1bCkuXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuZmV0Y2hBbmRDYWNoZU9uY2UocmVxLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSksIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgdXBkYXRpbmcgb2YgdW5rbm93biAodW5oYXNoZWQpIHJlc291cmNlcy4gVGhpcyBpcyBvbmx5IHBvc3NpYmxlIGlmIHRoZXJlJ3NcbiAgICAgICAgICAgICAgICAvLyBhIHNvdXJjZSB0byB1cGRhdGUgZnJvbS5cbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlRnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFUYWJsZSA9IHlpZWxkIHRoaXMubWV0YWRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdCBhbGwgb2YgdGhlIHByZXZpb3VzbHkgY2FjaGVkIHJlc291cmNlcy4gVGhlc2UgYXJlIGNhY2hlZCB1bmhhc2hlZCByZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gZnJvbSBwcmV2aW91cyB2ZXJzaW9ucyBvZiB0aGUgYXBwLCBpbiBhbnkgYXNzZXQgZ3JvdXAuXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkICh5aWVsZCB1cGRhdGVGcm9tLnByZXZpb3VzbHlDYWNoZWRSZXNvdXJjZXMoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0LCBuYXJyb3cgZG93biB0aGUgc2V0IG9mIHJlc291cmNlcyB0byB0aG9zZSB3aGljaCBhcmUgaGFuZGxlZCBieSB0aGlzIGdyb3VwLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWl0aGVyIGl0J3MgYSBrbm93biBVUkwsIG9yIGl0IG1hdGNoZXMgYSBnaXZlbiBwYXR0ZXJuLlxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcih1cmwgPT4gdGhpcy51cmxzLmluZGV4T2YodXJsKSAhPT0gLTEgfHwgdGhpcy5wYXR0ZXJucy5zb21lKHBhdHRlcm4gPT4gcGF0dGVybi50ZXN0KHVybCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluYWxseSwgcHJvY2VzcyBlYWNoIHJlc291cmNlIGluIHR1cm4uXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChwcmV2aW91cywgdXJsKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBwcmV2aW91cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcSA9IHRoaXMuYWRhcHRlci5uZXdSZXF1ZXN0KHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhlIHJlc291cmNlIGluIHF1ZXN0aW9uIGlzIGFscmVhZHkgY2FjaGVkLiBJZiBzbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRpbnVlIHRvIHRoZSBuZXh0IG9uZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFscmVhZHlDYWNoZWQgPSAoKHlpZWxkIGNhY2hlLm1hdGNoKHJlcSwgdGhpcy5jb25maWcuY2FjaGVRdWVyeU9wdGlvbnMpKSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbHJlYWR5Q2FjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBtb3N0IHJlY2VudCBvbGQgdmVyc2lvbiBvZiB0aGUgcmVzb3VyY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCB1cGRhdGVGcm9tLmxvb2t1cFJlc291cmNlV2l0aG91dEhhc2godXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMgPT09IG51bGwgfHwgcmVzLm1ldGFkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVbmV4cGVjdGVkLCBidXQgbm90IGhhcm1mdWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV3JpdGUgaXQgaW50byB0aGUgY2FjaGUuIEl0IG1heSBhbHJlYWR5IGJlIGV4cGlyZWQsIGJ1dCBpdCBjYW4gc3RpbGwgc2VydmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYWZmaWMgdW50aWwgaXQncyB1cGRhdGVkIChzdGFsZS13aGlsZS1yZXZhbGlkYXRlIGFwcHJvYWNoKS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGNhY2hlLnB1dChyZXEsIHJlcy5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBtZXRhVGFibGUud3JpdGUocmVxLnVybCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXMubWV0YWRhdGEpLCB7IHVzZWQ6IGZhbHNlIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSksIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGFzcyBMYXp5QXNzZXRHcm91cCBleHRlbmRzIEFzc2V0R3JvdXAge1xuICAgICAgICBpbml0aWFsaXplRnVsbHkodXBkYXRlRnJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAvLyBObyBhY3Rpb24gbmVjZXNzYXJ5IGlmIG5vIHVwZGF0ZSBzb3VyY2UgaXMgYXZhaWxhYmxlIC0gcmVzb3VyY2VzIG1hbmFnZWQgaW4gdGhpcyBncm91cFxuICAgICAgICAgICAgICAgIC8vIGFyZSBhbGwgbGF6aWx5IGxvYWRlZCwgc28gdGhlcmUncyBub3RoaW5nIHRvIGluaXRpYWxpemUuXG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZUZyb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE9wZW4gdGhlIGNhY2hlIHdoaWNoIGFjdHVhbGx5IGhvbGRzIHJlcXVlc3RzLlxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlID0geWllbGQgdGhpcy5jYWNoZTtcbiAgICAgICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIGxpc3RlZCByZXNvdXJjZXMsIGNhY2hpbmcgYW55IHdoaWNoIGFyZSBhdmFpbGFibGUuXG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy51cmxzLnJlZHVjZSgocHJldmlvdXMsIHVybCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXYWl0IG9uIGFsbCBwcmV2aW91cyBvcGVyYXRpb25zIHRvIGNvbXBsZXRlLlxuICAgICAgICAgICAgICAgICAgICB5aWVsZCBwcmV2aW91cztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29uc3RydWN0IHRoZSBSZXF1ZXN0IGZvciB0aGlzIHVybC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxID0gdGhpcy5hZGFwdGVyLm5ld1JlcXVlc3QodXJsKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyc3QsIGNoZWNrIHRoZSBjYWNoZSB0byBzZWUgaWYgdGhlcmUgaXMgYWxyZWFkeSBhIGNvcHkgb2YgdGhpcyByZXNvdXJjZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxyZWFkeUNhY2hlZCA9ICh5aWVsZCBjYWNoZS5tYXRjaChyZXEsIHRoaXMuY29uZmlnLmNhY2hlUXVlcnlPcHRpb25zKSkgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJlc291cmNlIGlzIGluIHRoZSBjYWNoZSBhbHJlYWR5LCBpdCBjYW4gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFscmVhZHlDYWNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkID0geWllbGQgdGhpcy5tYXliZVVwZGF0ZSh1cGRhdGVGcm9tLCByZXEsIGNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnVwZGF0ZU1vZGUgPT09ICdwcmVmZXRjaCcgJiYgIXVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXNvdXJjZSB3YXMgbm90IHVwZGF0ZWQsIGVpdGhlciBpdCB3YXMgbm90IGNhY2hlZCBiZWZvcmUgb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBwcmV2aW91c2x5IGNhY2hlZCB2ZXJzaW9uIGRpZG4ndCBtYXRjaCB0aGUgdXBkYXRlZCBoYXNoLiBJbiB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlLCBwcmVmZXRjaCB1cGRhdGUgbW9kZSBkaWN0YXRlcyB0aGF0IHRoZSByZXNvdXJjZSB3aWxsIGJlIHVwZGF0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleGNlcHQgaWYgaXQgd2FzIG5vdCBwcmV2aW91c2x5IHV0aWxpemVkLiBDaGVjayB0aGUgc3RhdHVzIG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FjaGVkIHJlc291cmNlIHRvIHNlZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlU3RhdHVzID0geWllbGQgdXBkYXRlRnJvbS5yZWNlbnRDYWNoZVN0YXR1cyh1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJlc291cmNlIGlzIG5vdCBjYWNoZWQsIG9yIHdhcyBjYWNoZWQgYnV0IHVudXNlZCwgdGhlbiBpdCB3aWxsIGJlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2FkZWQgbGF6aWx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlU3RhdHVzICE9PSBVcGRhdGVDYWNoZVN0YXR1cy5DQUNIRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZnJvbSB0aGUgbmV0d29yay5cbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuZmV0Y2hBbmRDYWNoZU9uY2UocmVxLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBNYW5hZ2VzIGFuIGluc3RhbmNlIG9mIGBMcnVTdGF0ZWAgYW5kIG1vdmVzIFVSTHMgdG8gdGhlIGhlYWQgb2YgdGhlXG4gICAgICogY2hhaW4gd2hlbiByZXF1ZXN0ZWQuXG4gICAgICovXG4gICAgY2xhc3MgTHJ1TGlzdCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICBoZWFkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0YWlsOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IHt9LFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3VycmVudCBjb3VudCBvZiBVUkxzIGluIHRoZSBsaXN0LlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0IHNpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb3VudDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSB0YWlsLlxuICAgICAgICAgKi9cbiAgICAgICAgcG9wKCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gdGFpbCwgcmV0dXJuIG51bGwuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWlsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnN0YXRlLnRhaWw7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSh1cmwpO1xuICAgICAgICAgICAgLy8gVGhpcyBVUkwgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGV2aWN0ZWQuXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZSh1cmwpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YXRlLm1hcFt1cmxdO1xuICAgICAgICAgICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNwZWNpYWwgY2FzZSBpZiByZW1vdmluZyB0aGUgY3VycmVudCBoZWFkLlxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGVhZCA9PT0gdXJsKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIG5vZGUgaXMgdGhlIGN1cnJlbnQgaGVhZC4gU3BlY2lhbCBjYXNlIHRoZSByZW1vdmFsLlxuICAgICAgICAgICAgICAgIGlmIChub2RlLm5leHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgb25seSBub2RlLiBSZXNldCB0aGUgY2FjaGUgdG8gYmUgZW1wdHkuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGVhZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGFpbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWFwID0ge307XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgaXMgYXQgbGVhc3Qgb25lIG90aGVyIG5vZGUuIE1ha2UgdGhlIG5leHQgbm9kZSB0aGUgbmV3IGhlYWQuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IHRoaXMuc3RhdGUubWFwW25vZGUubmV4dF07XG4gICAgICAgICAgICAgICAgbmV4dC5wcmV2aW91cyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oZWFkID0gbmV4dC51cmw7XG4gICAgICAgICAgICAgICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zdGF0ZS5tYXBbdXJsXTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvdW50LS07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgbm9kZSBpcyBub3QgdGhlIGhlYWQsIHNvIGl0IGhhcyBhIHByZXZpb3VzLiBJdCBtYXkgb3IgbWF5IG5vdCBiZSB0aGUgdGFpbC5cbiAgICAgICAgICAgIC8vIElmIGl0IGlzIG5vdCwgdGhlbiBpdCBoYXMgYSBuZXh0LiBGaXJzdCwgZ3JhYiB0aGUgcHJldmlvdXMgbm9kZS5cbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5zdGF0ZS5tYXBbbm9kZS5wcmV2aW91c107XG4gICAgICAgICAgICAvLyBGaXggdGhlIGZvcndhcmQgcG9pbnRlciB0byBza2lwIG92ZXIgbm9kZSBhbmQgZ28gZGlyZWN0bHkgdG8gbm9kZS5uZXh0LlxuICAgICAgICAgICAgcHJldmlvdXMubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgIC8vIG5vZGUubmV4dCBtYXkgb3IgbWF5IG5vdCBiZSBzZXQuIElmIGl0IGlzLCBmaXggdGhlIGJhY2sgcG9pbnRlciB0byBza2lwIG92ZXIgbm9kZS5cbiAgICAgICAgICAgIC8vIElmIGl0J3Mgbm90IHNldCwgdGhlbiB0aGlzIG5vZGUgaGFwcGVuZWQgdG8gYmUgdGhlIHRhaWwsIGFuZCB0aGUgdGFpbCBuZWVkcyB0byBiZVxuICAgICAgICAgICAgLy8gdXBkYXRlZCB0byBwb2ludCB0byB0aGUgcHJldmlvdXMgbm9kZSAocmVtb3ZpbmcgdGhlIHRhaWwpLlxuICAgICAgICAgICAgaWYgKG5vZGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXJlIGlzIGEgbmV4dCBub2RlLCBmaXggaXRzIGJhY2sgcG9pbnRlciB0byBza2lwIHRoaXMgbm9kZS5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1hcFtub2RlLm5leHRdLnByZXZpb3VzID0gbm9kZS5wcmV2aW91cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoZXJlIGlzIG5vIG5leHQgbm9kZSAtIHRoZSBhY2Nlc3NlZCBub2RlIG11c3QgYmUgdGhlIHRhaWwuIE1vdmUgdGhlIHRhaWwgcG9pbnRlci5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRhaWwgPSBub2RlLnByZXZpb3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5uZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIG5vZGUucHJldmlvdXMgPSBudWxsO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhdGUubWFwW3VybF07XG4gICAgICAgICAgICAvLyBDb3VudCB0aGUgcmVtb3ZhbC5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY291bnQtLTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGFjY2Vzc2VkKHVybCkge1xuICAgICAgICAgICAgLy8gV2hlbiBhIFVSTCBpcyBhY2Nlc3NlZCwgaXRzIG5vZGUgbmVlZHMgdG8gYmUgbW92ZWQgdG8gdGhlIGhlYWQgb2YgdGhlIGNoYWluLlxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhY2NvbXBsaXNoZWQgaW4gdHdvIHN0ZXBzOlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIDEpIHJlbW92ZSB0aGUgbm9kZSBmcm9tIGl0cyBwb3NpdGlvbiB3aXRoaW4gdGhlIGNoYWluLlxuICAgICAgICAgICAgLy8gMikgaW5zZXJ0IHRoZSBub2RlIGFzIHRoZSBuZXcgaGVhZC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBTb21ldGltZXMsIGEgVVJMIGlzIGFjY2Vzc2VkIHdoaWNoIGhhcyBub3QgYmVlbiBzZWVuIGJlZm9yZS4gSW4gdGhpcyBjYXNlLCBzdGVwIDEgY2FuXG4gICAgICAgICAgICAvLyBiZSBza2lwcGVkIGNvbXBsZXRlbHkgKHdoaWNoIHdpbGwgZ3JvdyB0aGUgY2hhaW4gYnkgb25lKS4gT2YgY291cnNlLCBpZiB0aGUgbm9kZSBpc1xuICAgICAgICAgICAgLy8gYWxyZWFkeSB0aGUgaGVhZCwgdGhpcyB3aG9sZSBvcGVyYXRpb24gY2FuIGJlIHNraXBwZWQuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5oZWFkID09PSB1cmwpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgVVJMIGlzIGFscmVhZHkgaW4gdGhlIGhlYWQgcG9zaXRpb24sIGFjY2Vzc2luZyBpdCBpcyBhIG5vLW9wLlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvb2sgdXAgdGhlIG5vZGUgaW4gdGhlIG1hcCwgYW5kIGNvbnN0cnVjdCBhIG5ldyBlbnRyeSBpZiBpdCdzXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5zdGF0ZS5tYXBbdXJsXSB8fCB7IHVybCwgbmV4dDogbnVsbCwgcHJldmlvdXM6IG51bGwgfTtcbiAgICAgICAgICAgIC8vIFN0ZXAgMTogcmVtb3ZlIHRoZSBub2RlIGZyb20gaXRzIHBvc2l0aW9uIHdpdGhpbiB0aGUgY2hhaW4sIGlmIGl0IGlzIGluIHRoZSBjaGFpbi5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1hcFt1cmxdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RlcCAyOiBpbnNlcnQgdGhlIG5vZGUgYXQgdGhlIGhlYWQgb2YgdGhlIGNoYWluLlxuICAgICAgICAgICAgLy8gRmlyc3QsIGNoZWNrIGlmIHRoZXJlJ3MgYW4gZXhpc3RpbmcgaGVhZCBub2RlLiBJZiB0aGVyZSBpcywgaXQgaGFzIHByZXZpb3VzOiBudWxsLlxuICAgICAgICAgICAgLy8gSXRzIHByZXZpb3VzIHBvaW50ZXIgc2hvdWxkIGJlIHNldCB0byB0aGUgbm9kZSB3ZSdyZSBpbnNlcnRpbmcuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5oZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tYXBbdGhpcy5zdGF0ZS5oZWFkXS5wcmV2aW91cyA9IHVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBuZXh0IHBvaW50ZXIgb2YgdGhlIG5vZGUgYmVpbmcgaW5zZXJ0ZWQgZ2V0cyBzZXQgdG8gdGhlIG9sZCBoZWFkLCBiZWZvcmUgdGhlIGhlYWRcbiAgICAgICAgICAgIC8vIHBvaW50ZXIgaXMgdXBkYXRlZCB0byB0aGlzIG5vZGUuXG4gICAgICAgICAgICBub2RlLm5leHQgPSB0aGlzLnN0YXRlLmhlYWQ7XG4gICAgICAgICAgICAvLyBUaGUgbmV3IGhlYWQgaXMgdGhlIG5ldyBub2RlLlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5oZWFkID0gdXJsO1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gdGFpbCwgdGhlbiB0aGlzIGlzIHRoZSBmaXJzdCBub2RlLCBhbmQgaXMgYm90aCB0aGUgaGVhZCBhbmQgdGhlIHRhaWwuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWlsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50YWlsID0gdXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2V0IHRoZSBub2RlIGluIHRoZSBtYXAgb2Ygbm9kZXMgKGlmIHRoZSBVUkwgaGFzIGJlZW4gc2VlbiBiZWZvcmUsIHRoaXMgaXMgYSBuby1vcClcbiAgICAgICAgICAgIC8vIGFuZCBjb3VudCB0aGUgaW5zZXJ0aW9uLlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tYXBbdXJsXSA9IG5vZGU7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBncm91cCBvZiBjYWNoZWQgcmVzb3VyY2VzIGRldGVybWluZWQgYnkgYSBzZXQgb2YgVVJMIHBhdHRlcm5zIHdoaWNoIGZvbGxvdyBhIExSVSBwb2xpY3lcbiAgICAgKiBmb3IgY2FjaGluZy5cbiAgICAgKi9cbiAgICBjbGFzcyBEYXRhR3JvdXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihzY29wZSwgYWRhcHRlciwgY29uZmlnLCBkYiwgZGVidWdIYW5kbGVyLCBwcmVmaXgpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgICAgIHRoaXMuZGIgPSBkYjtcbiAgICAgICAgICAgIHRoaXMuZGVidWdIYW5kbGVyID0gZGVidWdIYW5kbGVyO1xuICAgICAgICAgICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRyYWNrcyB0aGUgTFJVIHN0YXRlIG9mIHJlc291cmNlcyBpbiB0aGlzIGNhY2hlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLl9scnUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wYXR0ZXJucyA9IHRoaXMuY29uZmlnLnBhdHRlcm5zLm1hcChwYXR0ZXJuID0+IG5ldyBSZWdFeHAocGF0dGVybikpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZSA9IHRoaXMuc2NvcGUuY2FjaGVzLm9wZW4oYCR7dGhpcy5wcmVmaXh9OmR5bmFtaWM6JHt0aGlzLmNvbmZpZy5uYW1lfTpjYWNoZWApO1xuICAgICAgICAgICAgdGhpcy5scnVUYWJsZSA9IHRoaXMuZGIub3BlbihgJHt0aGlzLnByZWZpeH06ZHluYW1pYzoke3RoaXMuY29uZmlnLm5hbWV9OmxydWAsIHRoaXMuY29uZmlnLmNhY2hlUXVlcnlPcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuYWdlVGFibGUgPSB0aGlzLmRiLm9wZW4oYCR7dGhpcy5wcmVmaXh9OmR5bmFtaWM6JHt0aGlzLmNvbmZpZy5uYW1lfTphZ2VgLCB0aGlzLmNvbmZpZy5jYWNoZVF1ZXJ5T3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExhemlseSBpbml0aWFsaXplL2xvYWQgdGhlIExSVSBjaGFpbi5cbiAgICAgICAgICovXG4gICAgICAgIGxydSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xydSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IHlpZWxkIHRoaXMubHJ1VGFibGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9scnUgPSBuZXcgTHJ1TGlzdCh5aWVsZCB0YWJsZS5yZWFkKCdscnUnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9scnUgPSBuZXcgTHJ1TGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9scnU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3luYyB0aGUgTFJVIGNoYWluIHRvIG5vbi12b2xhdGlsZSBzdG9yYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgc3luY0xydSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xydSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0geWllbGQgdGhpcy5scnVUYWJsZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUud3JpdGUoJ2xydScsIHRoaXMuX2xydS5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV3JpdGluZyBscnUgY2FjaGUgdGFibGUgZmFpbGVkLiBUaGlzIGNvdWxkIGJlIGEgcmVzdWx0IG9mIGEgZnVsbCBzdG9yYWdlLlxuICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSBzZXJ2aW5nIGNsaWVudHMgYXMgdXN1YWwuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWdIYW5kbGVyLmxvZyhlcnIsIGBEYXRhR3JvdXAoJHt0aGlzLmNvbmZpZy5uYW1lfUAke3RoaXMuY29uZmlnLnZlcnNpb259KS5zeW5jTHJ1KClgKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQmV0dGVyIGRldGVjdC9oYW5kbGUgZnVsbCBzdG9yYWdlOyBlLmcuIHVzaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIFtuYXZpZ2F0b3Iuc3RvcmFnZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05hdmlnYXRvclN0b3JhZ2Uvc3RvcmFnZSkuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb2Nlc3MgYSBmZXRjaCBldmVudCBhbmQgcmV0dXJuIGEgYFJlc3BvbnNlYCBpZiB0aGUgcmVzb3VyY2UgaXMgY292ZXJlZCBieSB0aGlzIGdyb3VwLFxuICAgICAgICAgKiBvciBgbnVsbGAgb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgaGFuZGxlRmV0Y2gocmVxLCBjdHgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYXR0ZXJucy5zb21lKHBhdHRlcm4gPT4gcGF0dGVybi50ZXN0KHJlcS51cmwpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTGF6aWx5IGluaXRpYWxpemUgdGhlIExSVSBjYWNoZS5cbiAgICAgICAgICAgICAgICBjb25zdCBscnUgPSB5aWVsZCB0aGlzLmxydSgpO1xuICAgICAgICAgICAgICAgIC8vIFRoZSBVUkwgbWF0Y2hlcyB0aGlzIGNhY2hlLiBGaXJzdCwgY2hlY2sgd2hldGhlciB0aGlzIGlzIGEgbXV0YXRpbmcgcmVxdWVzdCBvciBub3QuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ09QVElPTlMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgdHJ5IHRvIGNhY2hlIHRoaXMgLSBpdCdzIG5vbi1tdXRhdGluZywgYnV0IGlzIHBhcnQgb2YgYSBtdXRhdGluZyByZXF1ZXN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW9zdCBsaWtlbHkgU1dzIGRvbid0IGV2ZW4gc2VlIHRoaXMsIGJ1dCB0aGlzIGd1YXJkIGlzIGhlcmUganVzdCBpbiBjYXNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0dFVCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0hFQUQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSByZXF1ZXN0IHdpdGggd2hhdGV2ZXIgc3RyYXRlZ3kgd2FzIHNlbGVjdGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmNvbmZpZy5zdHJhdGVneSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZyZXNobmVzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUZldGNoV2l0aEZyZXNobmVzcyhyZXEsIGN0eCwgbHJ1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwZXJmb3JtYW5jZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUZldGNoV2l0aFBlcmZvcm1hbmNlKHJlcSwgY3R4LCBscnUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBzdHJhdGVneTogJHt0aGlzLmNvbmZpZy5zdHJhdGVneX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2FzIGEgbXV0YXRpbmcgcmVxdWVzdC4gQXNzdW1lIHRoZSBjYWNoZSBmb3IgdGhpcyBVUkwgaXMgbm8gbG9uZ2VyIHZhbGlkLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2FzQ2FjaGVkID0gbHJ1LnJlbW92ZShyZXEudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIHdhcyBhIGNhY2hlZCBlbnRyeSwgcmVtb3ZlIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhc0NhY2hlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuY2xlYXJDYWNoZUZvclVybChyZXEudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN5bmMgdGhlIExSVSBjaGFpbiB0byBub24tdm9sYXRpbGUgc3RvcmFnZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuc3luY0xydSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluYWxseSwgZmFsbCBiYWNrIG9uIHRoZSBuZXR3b3JrLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FmZUZldGNoKHJlcSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlRmV0Y2hXaXRoUGVyZm9ybWFuY2UocmVxLCBjdHgsIGxydSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayB0aGUgY2FjaGUgZmlyc3QuIElmIHRoZSByZXNvdXJjZSBleGlzdHMgdGhlcmUgKGFuZCBpcyBub3QgZXhwaXJlZCksIHRoZSBjYWNoZWRcbiAgICAgICAgICAgICAgICAvLyB2ZXJzaW9uIGNhbiBiZSB1c2VkLlxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21DYWNoZSA9IHlpZWxkIHRoaXMubG9hZEZyb21DYWNoZShyZXEsIGxydSk7XG4gICAgICAgICAgICAgICAgaWYgKGZyb21DYWNoZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXMgPSBmcm9tQ2FjaGUucmVzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB0aGUgYWdlIG9mIHRoZSByZXNvdXJjZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJlZnJlc2hBaGVhZE1zICE9PSB1bmRlZmluZWQgJiYgZnJvbUNhY2hlLmFnZSA+PSB0aGlzLmNvbmZpZy5yZWZyZXNoQWhlYWRNcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LndhaXRVbnRpbCh0aGlzLnNhZmVDYWNoZVJlc3BvbnNlKHJlcSwgdGhpcy5zYWZlRmV0Y2gocmVxKSwgbHJ1KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBtYXRjaCBmcm9tIHRoZSBjYWNoZS4gR28gdG8gdGhlIG5ldHdvcmsuIE5vdGUgdGhhdCB0aGlzIGlzIG5vdCBhbiAnYXdhaXQnXG4gICAgICAgICAgICAgICAgLy8gY2FsbCwgbmV0d29ya0ZldGNoIGlzIHRoZSBhY3R1YWwgUHJvbWlzZS4gVGhpcyBpcyBkdWUgdG8gdGltZW91dCBoYW5kbGluZy5cbiAgICAgICAgICAgICAgICBjb25zdCBbdGltZW91dEZldGNoLCBuZXR3b3JrRmV0Y2hdID0gdGhpcy5uZXR3b3JrRmV0Y2hXaXRoVGltZW91dChyZXEpO1xuICAgICAgICAgICAgICAgIHJlcyA9IHlpZWxkIHRpbWVvdXRGZXRjaDtcbiAgICAgICAgICAgICAgICAvLyBTaW5jZSBmZXRjaCgpIHdpbGwgYWx3YXlzIHJldHVybiBhIHJlc3BvbnNlLCB1bmRlZmluZWQgaW5kaWNhdGVzIGEgdGltZW91dC5cbiAgICAgICAgICAgICAgICBpZiAocmVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3QgdGltZWQgb3V0LiBSZXR1cm4gYSBHYXRld2F5IFRpbWVvdXQgZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IHRoaXMuYWRhcHRlci5uZXdSZXNwb25zZShudWxsLCB7IHN0YXR1czogNTA0LCBzdGF0dXNUZXh0OiAnR2F0ZXdheSBUaW1lb3V0JyB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FjaGUgdGhlIG5ldHdvcmsgcmVzcG9uc2UgZXZlbnR1YWxseS5cbiAgICAgICAgICAgICAgICAgICAgY3R4LndhaXRVbnRpbCh0aGlzLnNhZmVDYWNoZVJlc3BvbnNlKHJlcSwgbmV0d29ya0ZldGNoLCBscnUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IGNvbXBsZXRlZCBpbiB0aW1lLCBzbyBjYWNoZSBpdCBpbmxpbmUgd2l0aCB0aGUgcmVzcG9uc2UgZmxvdy5cbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5zYWZlQ2FjaGVSZXNwb25zZShyZXEsIHJlcywgbHJ1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZUZldGNoV2l0aEZyZXNobmVzcyhyZXEsIGN0eCwgbHJ1KSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggYSBuZXR3b3JrIGZldGNoLlxuICAgICAgICAgICAgICAgIGNvbnN0IFt0aW1lb3V0RmV0Y2gsIG5ldHdvcmtGZXRjaF0gPSB0aGlzLm5ldHdvcmtGZXRjaFdpdGhUaW1lb3V0KHJlcSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlcztcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGF0IGZldGNoIGVycm9ycywgdHJlYXQgaXQgYXMgYSB0aW1lZCBvdXQgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXMgPSB5aWVsZCB0aW1lb3V0RmV0Y2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICByZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBuZXR3b3JrIGZldGNoIHRpbWVzIG91dCBvciBlcnJvcnMsIGZhbGwgYmFjayBvbiB0aGUgY2FjaGUuXG4gICAgICAgICAgICAgICAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC53YWl0VW50aWwodGhpcy5zYWZlQ2FjaGVSZXNwb25zZShyZXEsIG5ldHdvcmtGZXRjaCwgbHJ1LCB0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSB0aGUgYWdlLCB0aGUgbmV0d29yayByZXNwb25zZSB3aWxsIGJlIGNhY2hlZCBhbnl3YXkgZHVlIHRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBiZWhhdmlvciBvZiBmcmVzaG5lc3MuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyb21DYWNoZSA9IHlpZWxkIHRoaXMubG9hZEZyb21DYWNoZShyZXEsIGxydSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IChmcm9tQ2FjaGUgIT09IG51bGwpID8gZnJvbUNhY2hlLnJlcyA6IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnNhZmVDYWNoZVJlc3BvbnNlKHJlcSwgcmVzLCBscnUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFaXRoZXIgdGhlIG5ldHdvcmsgZmV0Y2ggZGlkbid0IHRpbWUgb3V0LCBvciB0aGUgY2FjaGUgeWllbGRlZCBhIHVzYWJsZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgICAvLyBJbiBlaXRoZXIgY2FzZSwgdXNlIGl0LlxuICAgICAgICAgICAgICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gcmVzcG9uc2UgaW4gdGhlIGNhY2hlLiBObyBjaG9pY2UgYnV0IHRvIGZhbGwgYmFjayBvbiB0aGUgZnVsbCBuZXR3b3JrIGZldGNoLlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXR3b3JrRmV0Y2g7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBuZXR3b3JrRmV0Y2hXaXRoVGltZW91dChyZXEpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGEgdGltZW91dCBjb25maWd1cmVkLCByYWNlIGEgdGltZW91dCBQcm9taXNlIHdpdGggdGhlIG5ldHdvcmsgZmV0Y2guXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIGp1c3QgZmV0Y2ggZnJvbSB0aGUgbmV0d29yayBkaXJlY3RseS5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy50aW1lb3V0TXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtGZXRjaCA9IHRoaXMuc2NvcGUuZmV0Y2gocmVxKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzYWZlTmV0d29ya0ZldGNoID0gKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBuZXR3b3JrRmV0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLm5ld1Jlc3BvbnNlKG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiAnR2F0ZXdheSBUaW1lb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0ZldGNoVW5kZWZpbmVkRXJyb3IgPSAoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIG5ldHdvcmtGZXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoX2IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSkoKTtcbiAgICAgICAgICAgICAgICAvLyBDb25zdHJ1Y3QgYSBQcm9taXNlPHVuZGVmaW5lZD4gZm9yIHRoZSB0aW1lb3V0LlxuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLmFkYXB0ZXIudGltZW91dCh0aGlzLmNvbmZpZy50aW1lb3V0TXMpO1xuICAgICAgICAgICAgICAgIC8vIFJhY2UgdGhhdCB3aXRoIHRoZSBuZXR3b3JrIGZldGNoLiBUaGlzIHdpbGwgZWl0aGVyIGJlIGEgUmVzcG9uc2UsIG9yIGB1bmRlZmluZWRgXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIGV2ZW50IHRoYXQgdGhlIHJlcXVlc3QgZXJyb3JlZCBvciB0aW1lZCBvdXQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtQcm9taXNlLnJhY2UoW25ldHdvcmtGZXRjaFVuZGVmaW5lZEVycm9yLCB0aW1lb3V0XSksIHNhZmVOZXR3b3JrRmV0Y2hdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0ZldGNoID0gdGhpcy5zYWZlRmV0Y2gocmVxKTtcbiAgICAgICAgICAgICAgICAvLyBEbyBhIHBsYWluIGZldGNoLlxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV0d29ya0ZldGNoLCBuZXR3b3JrRmV0Y2hdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNhZmVDYWNoZVJlc3BvbnNlKHJlcSwgcmVzT3JQcm9taXNlLCBscnUsIG9rVG9DYWNoZU9wYXF1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCByZXNPclByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmNhY2hlUmVzcG9uc2UocmVxLCByZXMsIGxydSwgb2tUb0NhY2hlT3BhcXVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZpbmcgdGhlIEFQSSByZXNwb25zZSBmYWlsZWQuIFRoaXMgY291bGQgYmUgYSByZXN1bHQgb2YgYSBmdWxsIHN0b3JhZ2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGlzIGRhdGEgaXMgY2FjaGVkIGxhemlseSBhbmQgdGVtcG9yYXJpbHksIGNvbnRpbnVlIHNlcnZpbmcgY2xpZW50cyBhcyB1c3VhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWdIYW5kbGVyLmxvZyhlcnIsIGBEYXRhR3JvdXAoJHt0aGlzLmNvbmZpZy5uYW1lfUAke3RoaXMuY29uZmlnLnZlcnNpb259KS5zYWZlQ2FjaGVSZXNwb25zZSgke3JlcS51cmx9LCBzdGF0dXM6ICR7cmVzLnN0YXR1c30pYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBCZXR0ZXIgZGV0ZWN0L2hhbmRsZSBmdWxsIHN0b3JhZ2U7IGUuZy4gdXNpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFtuYXZpZ2F0b3Iuc3RvcmFnZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05hdmlnYXRvclN0b3JhZ2Uvc3RvcmFnZSkuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlcXVlc3QgZmFpbGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEhhbmRsZSB0aGlzIGVycm9yIHNvbWVob3c/XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZEZyb21DYWNoZShyZXEsIGxydSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAvLyBMb29rIGZvciBhIHJlc3BvbnNlIGluIHRoZSBjYWNoZS4gSWYgb25lIGV4aXN0cywgcmV0dXJuIGl0LlxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlID0geWllbGQgdGhpcy5jYWNoZTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0geWllbGQgY2FjaGUubWF0Y2gocmVxLCB0aGlzLmNvbmZpZy5jYWNoZVF1ZXJ5T3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEEgcmVzcG9uc2Ugd2FzIGZvdW5kIGluIHRoZSBjYWNoZSwgYnV0IGl0cyBhZ2UgaXMgbm90IHlldCBrbm93bi4gTG9vayBpdCB1cC5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFnZVRhYmxlID0geWllbGQgdGhpcy5hZ2VUYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFnZSA9IHRoaXMuYWRhcHRlci50aW1lIC0gKHlpZWxkIGFnZVRhYmxlLnJlYWQocmVxLnVybCkpLmFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXNwb25zZSBpcyB5b3VuZyBlbm91Z2gsIHVzZSBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZ2UgPD0gdGhpcy5jb25maWcubWF4QWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bCBtYXRjaCBmcm9tIHRoZSBjYWNoZS4gVXNlIHRoZSByZXNwb25zZSwgYWZ0ZXIgbWFya2luZyBpdCBhcyBoYXZpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiZWVuIGFjY2Vzc2VkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxydS5hY2Nlc3NlZChyZXEudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyByZXMsIGFnZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBvciBpZiB0aGVyZSB3YXMgYW4gZXJyb3IsIGFzc3VtZSB0aGUgcmVzcG9uc2UgaXMgZXhwaXJlZCwgYW5kIGV2aWN0IGl0LlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU29tZSBlcnJvciBnZXR0aW5nIHRoZSBhZ2UgZm9yIHRoZSByZXNwb25zZS4gQXNzdW1lIGl0J3MgZXhwaXJlZC5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBscnUucmVtb3ZlKHJlcS51cmwpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmNsZWFyQ2FjaGVGb3JVcmwocmVxLnVybCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGF2b2lkIGR1cGxpY2F0ZSBpbiBldmVudCBvZiBuZXR3b3JrIHRpbWVvdXQsIG1heWJlLlxuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnN5bmNMcnUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogT3BlcmF0aW9uIGZvciBjYWNoaW5nIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuIFRoaXMgaGFzIHRvIGhhcHBlbiBhbGxcbiAgICAgICAgICogYXQgb25jZSwgc28gdGhhdCB0aGUgY2FjaGUgYW5kIExSVSB0cmFja2luZyByZW1haW4gaW4gc3luYy4gSWYgdGhlIG5ldHdvcmsgcmVxdWVzdFxuICAgICAgICAgKiBjb21wbGV0ZXMgYmVmb3JlIHRoZSB0aW1lb3V0LCB0aGlzIGxvZ2ljIHdpbGwgYmUgcnVuIGlubGluZSB3aXRoIHRoZSByZXNwb25zZSBmbG93LlxuICAgICAgICAgKiBJZiB0aGUgcmVxdWVzdCB0aW1lcyBvdXQgb24gdGhlIHNlcnZlciwgYW4gZXJyb3Igd2lsbCBiZSByZXR1cm5lZCBidXQgdGhlIHJlYWwgbmV0d29ya1xuICAgICAgICAgKiByZXF1ZXN0IHdpbGwgc3RpbGwgYmUgcnVubmluZyBpbiB0aGUgYmFja2dyb3VuZCwgdG8gYmUgY2FjaGVkIHdoZW4gaXQgY29tcGxldGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgY2FjaGVSZXNwb25zZShyZXEsIHJlcywgbHJ1LCBva1RvQ2FjaGVPcGFxdWUgPSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGNhY2hlIHN1Y2Nlc3NmdWwgcmVzcG9uc2VzLlxuICAgICAgICAgICAgICAgIGlmICghKHJlcy5vayB8fCAob2tUb0NhY2hlT3BhcXVlICYmIHJlcy50eXBlID09PSAnb3BhcXVlJykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgY2FjaGluZyB0aGlzIHJlc3BvbnNlIHdvdWxkIG1ha2UgdGhlIGNhY2hlIGV4Y2VlZCBpdHMgbWF4aW11bSBzaXplLCBldmljdCBzb21ldGhpbmdcbiAgICAgICAgICAgICAgICAvLyBmaXJzdC5cbiAgICAgICAgICAgICAgICBpZiAobHJ1LnNpemUgPj0gdGhpcy5jb25maWcubWF4U2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgY2FjaGUgaXMgdG9vIGJpZywgZXZpY3Qgc29tZXRoaW5nLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmljdGVkVXJsID0gbHJ1LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZpY3RlZFVybCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5jbGVhckNhY2hlRm9yVXJsKGV2aWN0ZWRVcmwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGV2YWx1YXRlIGZvciBwb3NzaWJsZSByYWNlIGNvbmRpdGlvbnMgZHVyaW5nIGZsYWt5IG5ldHdvcmsgcGVyaW9kcy5cbiAgICAgICAgICAgICAgICAvLyBNYXJrIHRoaXMgcmVzb3VyY2UgYXMgaGF2aW5nIGJlZW4gYWNjZXNzZWQgcmVjZW50bHkuIFRoaXMgZW5zdXJlcyBpdCB3b24ndCBiZSBldmljdGVkXG4gICAgICAgICAgICAgICAgLy8gdW50aWwgZW5vdWdoIG90aGVyIHJlc291cmNlcyBhcmUgcmVxdWVzdGVkIHRoYXQgaXQgZmFsbHMgb2ZmIHRoZSBlbmQgb2YgdGhlIExSVSBjaGFpbi5cbiAgICAgICAgICAgICAgICBscnUuYWNjZXNzZWQocmVxLnVybCk7XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHJlc3BvbnNlIGluIHRoZSBjYWNoZSAoY2xvbmluZyBiZWNhdXNlIHRoZSBicm93c2VyIHdpbGwgY29uc3VtZVxuICAgICAgICAgICAgICAgIC8vIHRoZSBib2R5IGR1cmluZyB0aGUgY2FjaGluZyBvcGVyYXRpb24pLlxuICAgICAgICAgICAgICAgIHlpZWxkICh5aWVsZCB0aGlzLmNhY2hlKS5wdXQocmVxLCByZXMuY2xvbmUoKSk7XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGFnZSBvZiB0aGUgY2FjaGUuXG4gICAgICAgICAgICAgICAgY29uc3QgYWdlVGFibGUgPSB5aWVsZCB0aGlzLmFnZVRhYmxlO1xuICAgICAgICAgICAgICAgIHlpZWxkIGFnZVRhYmxlLndyaXRlKHJlcS51cmwsIHsgYWdlOiB0aGlzLmFkYXB0ZXIudGltZSB9KTtcbiAgICAgICAgICAgICAgICAvLyBTeW5jIHRoZSBMUlUgY2hhaW4gdG8gbm9uLXZvbGF0aWxlIHN0b3JhZ2UuXG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5zeW5jTHJ1KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogRGVsZXRlIGFsbCBvZiB0aGUgc2F2ZWQgc3RhdGUgd2hpY2ggdGhpcyBncm91cCB1c2VzIHRvIHRyYWNrIHJlc291cmNlcy5cbiAgICAgICAgICovXG4gICAgICAgIGNsZWFudXAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBib3RoIHRoZSBjYWNoZSBhbmQgdGhlIGRhdGFiYXNlIGVudHJpZXMgd2hpY2ggdHJhY2sgTFJVIHN0YXRzLlxuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29wZS5jYWNoZXMuZGVsZXRlKGAke3RoaXMucHJlZml4fTpkeW5hbWljOiR7dGhpcy5jb25maWcubmFtZX06Y2FjaGVgKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYi5kZWxldGUoYCR7dGhpcy5wcmVmaXh9OmR5bmFtaWM6JHt0aGlzLmNvbmZpZy5uYW1lfTphZ2VgKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYi5kZWxldGUoYCR7dGhpcy5wcmVmaXh9OmR5bmFtaWM6JHt0aGlzLmNvbmZpZy5uYW1lfTpscnVgKSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhciB0aGUgc3RhdGUgb2YgdGhlIGNhY2hlIGZvciBhIHBhcnRpY3VsYXIgcmVzb3VyY2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgZG9lc24ndCByZW1vdmUgdGhlIHJlc291cmNlIGZyb20gdGhlIExSVSB0YWJsZSwgdGhhdCBpcyBhc3N1bWVkIHRvIGhhdmVcbiAgICAgICAgICogYmVlbiBkb25lIGFscmVhZHkuIFRoaXMgY2xlYXJzIHRoZSBHRVQgYW5kIEhFQUQgdmVyc2lvbnMgb2YgdGhlIHJlcXVlc3QgZnJvbVxuICAgICAgICAgKiB0aGUgY2FjaGUgaXRzZWxmLCBhcyB3ZWxsIGFzIHRoZSBtZXRhZGF0YSBzdG9yZWQgaW4gdGhlIGFnZSB0YWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIGNsZWFyQ2FjaGVGb3JVcmwodXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtjYWNoZSwgYWdlVGFibGVdID0geWllbGQgUHJvbWlzZS5hbGwoW3RoaXMuY2FjaGUsIHRoaXMuYWdlVGFibGVdKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLmRlbGV0ZSh0aGlzLmFkYXB0ZXIubmV3UmVxdWVzdCh1cmwsIHsgbWV0aG9kOiAnR0VUJyB9KSwgdGhpcy5jb25maWcuY2FjaGVRdWVyeU9wdGlvbnMpLFxuICAgICAgICAgICAgICAgICAgICBjYWNoZS5kZWxldGUodGhpcy5hZGFwdGVyLm5ld1JlcXVlc3QodXJsLCB7IG1ldGhvZDogJ0hFQUQnIH0pLCB0aGlzLmNvbmZpZy5jYWNoZVF1ZXJ5T3B0aW9ucyksXG4gICAgICAgICAgICAgICAgICAgIGFnZVRhYmxlLmRlbGV0ZSh1cmwpLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2FmZUZldGNoKHJlcSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY29wZS5mZXRjaChyZXEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5uZXdSZXNwb25zZShudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6ICdHYXRld2F5IFRpbWVvdXQnLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGNvbnN0IEJBQ0tXQVJEU19DT01QQVRJQklMSVRZX05BVklHQVRJT05fVVJMUyA9IFtcbiAgICAgICAgeyBwb3NpdGl2ZTogdHJ1ZSwgcmVnZXg6ICdeLy4qJCcgfSxcbiAgICAgICAgeyBwb3NpdGl2ZTogZmFsc2UsIHJlZ2V4OiAnXi8uKlxcXFwuW14vXSokJyB9LFxuICAgICAgICB7IHBvc2l0aXZlOiBmYWxzZSwgcmVnZXg6ICdeLy4qX18nIH0sXG4gICAgXTtcbiAgICAvKipcbiAgICAgKiBBIHNwZWNpZmljIHZlcnNpb24gb2YgdGhlIGFwcGxpY2F0aW9uLCBpZGVudGlmaWVkIGJ5IGEgdW5pcXVlIG1hbmlmZXN0XG4gICAgICogYXMgZGV0ZXJtaW5lZCBieSBpdHMgaGFzaC5cbiAgICAgKlxuICAgICAqIEVhY2ggYEFwcFZlcnNpb25gIGNhbiBiZSB0aG91Z2h0IG9mIGFzIGEgcHVibGlzaGVkIHZlcnNpb24gb2YgdGhlIGFwcFxuICAgICAqIHRoYXQgY2FuIGJlIGluc3RhbGxlZCBhcyBhbiB1cGRhdGUgdG8gYW55IHByZXZpb3VzbHkgaW5zdGFsbGVkIHZlcnNpb25zLlxuICAgICAqL1xuICAgIGNsYXNzIEFwcFZlcnNpb24ge1xuICAgICAgICBjb25zdHJ1Y3RvcihzY29wZSwgYWRhcHRlciwgZGF0YWJhc2UsIGlkbGUsIGRlYnVnSGFuZGxlciwgbWFuaWZlc3QsIG1hbmlmZXN0SGFzaCkge1xuICAgICAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyID0gYWRhcHRlcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcbiAgICAgICAgICAgIHRoaXMuaWRsZSA9IGlkbGU7XG4gICAgICAgICAgICB0aGlzLmRlYnVnSGFuZGxlciA9IGRlYnVnSGFuZGxlcjtcbiAgICAgICAgICAgIHRoaXMubWFuaWZlc3QgPSBtYW5pZmVzdDtcbiAgICAgICAgICAgIHRoaXMubWFuaWZlc3RIYXNoID0gbWFuaWZlc3RIYXNoO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIE1hcCBvZiBhYnNvbHV0ZSBVUkwgcGF0aHMgKGAvZm9vLnR4dGApIHRvIHRoZSBrbm93biBoYXNoIG9mIHRoZWlyIGNvbnRlbnRzIChpZiBhdmFpbGFibGUpLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmhhc2hUYWJsZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIG5vcm1hbGl6ZWQgVVJMIHRvIHRoZSBmaWxlIHRoYXQgc2VydmVzIGFzIHRoZSBpbmRleCBwYWdlIHRvIHNhdGlzZnkgbmF2aWdhdGlvbiByZXF1ZXN0cy5cbiAgICAgICAgICAgICAqIFVzdWFsbHkgdGhpcyBpcyBgL2luZGV4Lmh0bWxgLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmluZGV4VXJsID0gdGhpcy5hZGFwdGVyLm5vcm1hbGl6ZVVybCh0aGlzLm1hbmlmZXN0LmluZGV4KTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHJhY2tzIHdoZXRoZXIgdGhlIG1hbmlmZXN0IGhhcyBlbmNvdW50ZXJlZCBhbnkgaW5jb25zaXN0ZW5jaWVzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLl9va2F5ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIFRoZSBoYXNoVGFibGUgd2l0aGluIHRoZSBtYW5pZmVzdCBpcyBhbiBPYmplY3QgLSBjb252ZXJ0IGl0IHRvIGEgTWFwIGZvciBlYXNpZXIgbG9va3Vwcy5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWFuaWZlc3QuaGFzaFRhYmxlKS5mb3JFYWNoKHVybCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNoVGFibGUuc2V0KGFkYXB0ZXIubm9ybWFsaXplVXJsKHVybCksIHRoaXMubWFuaWZlc3QuaGFzaFRhYmxlW3VybF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBQcm9jZXNzIGVhY2ggYEFzc2V0R3JvdXBgIGRlY2xhcmVkIGluIHRoZSBtYW5pZmVzdC4gRWFjaCBkZWNsYXJlZCBncm91cCBnZXRzIGFuIGBBc3NldEdyb3VwYFxuICAgICAgICAgICAgLy8gaW5zdGFuY2VcbiAgICAgICAgICAgIC8vIGNyZWF0ZWQgZm9yIGl0LCBvZiBhIHR5cGUgdGhhdCBkZXBlbmRzIG9uIHRoZSBjb25maWd1cmF0aW9uIG1vZGUuXG4gICAgICAgICAgICB0aGlzLmFzc2V0R3JvdXBzID0gKG1hbmlmZXN0LmFzc2V0R3JvdXBzIHx8IFtdKS5tYXAoY29uZmlnID0+IHtcbiAgICAgICAgICAgICAgICAvLyBFdmVyeSBhc3NldCBncm91cCBoYXMgYSBjYWNoZSB0aGF0J3MgcHJlZml4ZWQgYnkgdGhlIG1hbmlmZXN0IGhhc2ggYW5kIHRoZSBuYW1lIG9mIHRoZVxuICAgICAgICAgICAgICAgIC8vIGdyb3VwLlxuICAgICAgICAgICAgICAgIGNvbnN0IHByZWZpeCA9IGAke2FkYXB0ZXIuY2FjaGVOYW1lUHJlZml4fToke3RoaXMubWFuaWZlc3RIYXNofTphc3NldHNgO1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRoZSBjYWNoaW5nIG1vZGUsIHdoaWNoIGRldGVybWluZXMgd2hlbiByZXNvdXJjZXMgd2lsbCBiZSBmZXRjaGVkL3VwZGF0ZWQuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjb25maWcuaW5zdGFsbE1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJlZmV0Y2gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcmVmZXRjaEFzc2V0R3JvdXAodGhpcy5zY29wZSwgdGhpcy5hZGFwdGVyLCB0aGlzLmlkbGUsIGNvbmZpZywgdGhpcy5oYXNoVGFibGUsIHRoaXMuZGF0YWJhc2UsIHByZWZpeCk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xhenknOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMYXp5QXNzZXRHcm91cCh0aGlzLnNjb3BlLCB0aGlzLmFkYXB0ZXIsIHRoaXMuaWRsZSwgY29uZmlnLCB0aGlzLmhhc2hUYWJsZSwgdGhpcy5kYXRhYmFzZSwgcHJlZml4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFByb2Nlc3MgZWFjaCBgRGF0YUdyb3VwYCBkZWNsYXJlZCBpbiB0aGUgbWFuaWZlc3QuXG4gICAgICAgICAgICB0aGlzLmRhdGFHcm91cHMgPVxuICAgICAgICAgICAgICAgIChtYW5pZmVzdC5kYXRhR3JvdXBzIHx8IFtdKVxuICAgICAgICAgICAgICAgICAgICAubWFwKGNvbmZpZyA9PiBuZXcgRGF0YUdyb3VwKHRoaXMuc2NvcGUsIHRoaXMuYWRhcHRlciwgY29uZmlnLCB0aGlzLmRhdGFiYXNlLCB0aGlzLmRlYnVnSGFuZGxlciwgYCR7YWRhcHRlci5jYWNoZU5hbWVQcmVmaXh9OiR7Y29uZmlnLnZlcnNpb259OmRhdGFgKSk7XG4gICAgICAgICAgICAvLyBUaGlzIGtlZXBzIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggYXBwIHZlcnNpb25zIHdpdGhvdXQgbmF2aWdhdGlvbiB1cmxzLlxuICAgICAgICAgICAgLy8gRml4OiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yNzIwOVxuICAgICAgICAgICAgbWFuaWZlc3QubmF2aWdhdGlvblVybHMgPSBtYW5pZmVzdC5uYXZpZ2F0aW9uVXJscyB8fCBCQUNLV0FSRFNfQ09NUEFUSUJJTElUWV9OQVZJR0FUSU9OX1VSTFM7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYGluY2x1ZGVgL2BleGNsdWRlYCBSZWdFeHBzIGZvciB0aGUgYG5hdmlnYXRpb25VcmxzYCBkZWNsYXJlZCBpbiB0aGUgbWFuaWZlc3QuXG4gICAgICAgICAgICBjb25zdCBpbmNsdWRlVXJscyA9IG1hbmlmZXN0Lm5hdmlnYXRpb25VcmxzLmZpbHRlcihzcGVjID0+IHNwZWMucG9zaXRpdmUpO1xuICAgICAgICAgICAgY29uc3QgZXhjbHVkZVVybHMgPSBtYW5pZmVzdC5uYXZpZ2F0aW9uVXJscy5maWx0ZXIoc3BlYyA9PiAhc3BlYy5wb3NpdGl2ZSk7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25VcmxzID0ge1xuICAgICAgICAgICAgICAgIGluY2x1ZGU6IGluY2x1ZGVVcmxzLm1hcChzcGVjID0+IG5ldyBSZWdFeHAoc3BlYy5yZWdleCkpLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGU6IGV4Y2x1ZGVVcmxzLm1hcChzcGVjID0+IG5ldyBSZWdFeHAoc3BlYy5yZWdleCkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgb2theSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9va2F5O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGdWxseSBpbml0aWFsaXplIHRoaXMgdmVyc2lvbiBvZiB0aGUgYXBwbGljYXRpb24uIElmIHRoaXMgUHJvbWlzZSByZXNvbHZlcyBzdWNjZXNzZnVsbHksIGFsbFxuICAgICAgICAgKiByZXF1aXJlZFxuICAgICAgICAgKiBkYXRhIGhhcyBiZWVuIHNhZmVseSBkb3dubG9hZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdGlhbGl6ZUZ1bGx5KHVwZGF0ZUZyb20pIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRnVsbHkgaW5pdGlhbGl6ZSBlYWNoIGFzc2V0IGdyb3VwLCBpbiBzZXJpZXMuIFN0YXJ0cyB3aXRoIGFuIGVtcHR5IFByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCB3YWl0cyBmb3IgdGhlIHByZXZpb3VzIGdyb3VwcyB0byBoYXZlIGJlZW4gaW5pdGlhbGl6ZWQgYmVmb3JlIGluaXRpYWxpemluZ1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmV4dCBvbmUgaW4gdHVybi5cbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5hc3NldEdyb3Vwcy5yZWR1Y2UoKHByZXZpb3VzLCBncm91cCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2FpdCBmb3IgdGhlIHByZXZpb3VzIGdyb3VwcyB0byBjb21wbGV0ZSBpbml0aWFsaXphdGlvbi4gSWYgdGhlcmUgaXMgYVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFpbHVyZSwgdGhpcyB3aWxsIHRocm93LCBhbmQgZWFjaCBzdWJzZXF1ZW50IGdyb3VwIHdpbGwgdGhyb3csIHVudGlsIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hvbGUgc2VxdWVuY2UgZmFpbHMuXG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBwcmV2aW91cztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgdGhpcyBncm91cC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBncm91cC5pbml0aWFsaXplRnVsbHkodXBkYXRlRnJvbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCBQcm9taXNlLnJlc29sdmUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2theSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlRmV0Y2gocmVxLCBjb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRoZSByZXF1ZXN0IGFnYWluc3QgZWFjaCBgQXNzZXRHcm91cGAgaW4gc2VxdWVuY2UuIElmIGFuIGBBc3NldEdyb3VwYCBjYW4ndCBoYW5kbGUgdGhlXG4gICAgICAgICAgICAgICAgLy8gcmVxdWVzdCxcbiAgICAgICAgICAgICAgICAvLyBpdCB3aWxsIHJldHVybiBgbnVsbGAuIFRodXMsIHRoZSBmaXJzdCBub24tbnVsbCByZXNwb25zZSBpcyB0aGUgU1cncyBhbnN3ZXIgdG8gdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgLy8gU28gcmVkdWNlXG4gICAgICAgICAgICAgICAgLy8gdGhlIGdyb3VwIGxpc3QsIGtlZXBpbmcgdHJhY2sgb2YgYSBwb3NzaWJsZSByZXNwb25zZS4gSWYgdGhlcmUgaXMgb25lLCBpdCBnZXRzIHBhc3NlZFxuICAgICAgICAgICAgICAgIC8vIHRocm91Z2gsIGFuZCBpZlxuICAgICAgICAgICAgICAgIC8vIG5vdCB0aGUgbmV4dCBncm91cCBpcyBjb25zdWx0ZWQgdG8gcHJvZHVjZSBhIGNhbmRpZGF0ZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgICBjb25zdCBhc3NldCA9IHlpZWxkIHRoaXMuYXNzZXRHcm91cHMucmVkdWNlKChwb3RlbnRpYWxSZXNwb25zZSwgZ3JvdXApID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FpdCBvbiB0aGUgcHJldmlvdXMgcG90ZW50aWFsIHJlc3BvbnNlLiBJZiBpdCdzIG5vdCBudWxsLCBpdCBzaG91bGQganVzdCBiZSBwYXNzZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhyb3VnaC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIHBvdGVudGlhbFJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gcmVzcG9uc2UgaGFzIGJlZW4gZm91bmQgeWV0LiBNYXliZSB0aGlzIGdyb3VwIHdpbGwgaGF2ZSBvbmUuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncm91cC5oYW5kbGVGZXRjaChyZXEsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH0pLCBQcm9taXNlLnJlc29sdmUobnVsbCkpO1xuICAgICAgICAgICAgICAgIC8vIFRoZSByZXN1bHQgb2YgdGhlIGFib3ZlIGlzIHRoZSBhc3NldCByZXNwb25zZSwgaWYgdGhlcmUgaXMgYW55LCBvciBudWxsIG90aGVyd2lzZS4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgIC8vIGFzc2V0XG4gICAgICAgICAgICAgICAgLy8gcmVzcG9uc2UgaWYgdGhlcmUgd2FzIG9uZS4gSWYgbm90LCBjaGVjayB3aXRoIHRoZSBkYXRhIGNhY2hpbmcgZ3JvdXBzLlxuICAgICAgICAgICAgICAgIGlmIChhc3NldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gdGhlIHNhbWUgcmVkdWN0aW9uIG9wZXJhdGlvbiBhcyBhYm92ZSwgYnV0IHRoaXMgdGltZSBwcm9jZXNzaW5nXG4gICAgICAgICAgICAgICAgLy8gdGhlIGRhdGEgY2FjaGluZyBncm91cHMuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHRoaXMuZGF0YUdyb3Vwcy5yZWR1Y2UoKHBvdGVudGlhbFJlc3BvbnNlLCBncm91cCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwID0geWllbGQgcG90ZW50aWFsUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXAuaGFuZGxlRmV0Y2gocmVxLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9KSwgUHJvbWlzZS5yZXNvbHZlKG51bGwpKTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZGF0YSBjYWNoaW5nIGdyb3VwIHJldHVybmVkIGEgcmVzcG9uc2UsIGdvIHdpdGggaXQuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5leHQsIGNoZWNrIGlmIHRoaXMgaXMgYSBuYXZpZ2F0aW9uIHJlcXVlc3QgZm9yIGEgcm91dGUuIERldGVjdCBjaXJjdWxhclxuICAgICAgICAgICAgICAgIC8vIG5hdmlnYXRpb25zIGJ5IGNoZWNraW5nIGlmIHRoZSByZXF1ZXN0IFVSTCBpcyB0aGUgc2FtZSBhcyB0aGUgaW5kZXggVVJMLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0ZXIubm9ybWFsaXplVXJsKHJlcS51cmwpICE9PSB0aGlzLmluZGV4VXJsICYmIHRoaXMuaXNOYXZpZ2F0aW9uUmVxdWVzdChyZXEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hbmlmZXN0Lm5hdmlnYXRpb25SZXF1ZXN0U3RyYXRlZ3kgPT09ICdmcmVzaG5lc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgbmF2aWdhdGlvbiByZXF1ZXN0cyB0aGUgZnJlc2huZXNzIHdhcyBjb25maWd1cmVkLiBUaGUgcmVxdWVzdCB3aWxsIGFsd2F5cyBnbyB0cm91Z2hcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuZXR3b3JrIGFuZCBmYWxsYmFjayB0byBkZWZhdWx0IGBoYW5kbGVGZXRjaGAgYmVoYXZpb3IgaW4gY2FzZSBvZiBmYWlsdXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgdGhpcy5zY29wZS5mZXRjaChyZXEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmF2aWdhdGlvbiByZXF1ZXN0IGZhaWxlZCAtIGFwcGxpY2F0aW9uIGlzIGxpa2VseSBvZmZsaW5lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByb2NlZWQgZm9yd2FyZCB0byB0aGUgZGVmYXVsdCBgaGFuZGxlRmV0Y2hgIGJlaGF2aW9yLCB3aGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBpbmRleFVybGAgd2lsbCBiZSByZXF1ZXN0ZWQgYW5kIGl0IHNob3VsZCBiZSBhdmFpbGFibGUgaW4gdGhlIGNhY2hlLlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2FzIGEgbmF2aWdhdGlvbiByZXF1ZXN0LiBSZS1lbnRlciBgaGFuZGxlRmV0Y2hgIHdpdGggYSByZXF1ZXN0IGZvclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgVVJMLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVGZXRjaCh0aGlzLmFkYXB0ZXIubmV3UmVxdWVzdCh0aGlzLmluZGV4VXJsKSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERldGVybWluZSB3aGV0aGVyIHRoZSByZXF1ZXN0IGlzIGEgbmF2aWdhdGlvbiByZXF1ZXN0LlxuICAgICAgICAgKiBUYWtlcyBpbnRvIGFjY291bnQ6IFJlcXVlc3QgbW9kZSwgYEFjY2VwdGAgaGVhZGVyLCBgbmF2aWdhdGlvblVybHNgIHBhdHRlcm5zLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNOYXZpZ2F0aW9uUmVxdWVzdChyZXEpIHtcbiAgICAgICAgICAgIGlmIChyZXEubW9kZSAhPT0gJ25hdmlnYXRlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5hY2NlcHRzVGV4dEh0bWwocmVxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVybFByZWZpeCA9IHRoaXMuc2NvcGUucmVnaXN0cmF0aW9uLnNjb3BlLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSByZXEudXJsLnN0YXJ0c1dpdGgodXJsUHJlZml4KSA/IHJlcS51cmwuc3Vic3RyKHVybFByZWZpeC5sZW5ndGgpIDogcmVxLnVybDtcbiAgICAgICAgICAgIGNvbnN0IHVybFdpdGhvdXRRdWVyeU9ySGFzaCA9IHVybC5yZXBsYWNlKC9bPyNdLiokLywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvblVybHMuaW5jbHVkZS5zb21lKHJlZ2V4ID0+IHJlZ2V4LnRlc3QodXJsV2l0aG91dFF1ZXJ5T3JIYXNoKSkgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5uYXZpZ2F0aW9uVXJscy5leGNsdWRlLnNvbWUocmVnZXggPT4gcmVnZXgudGVzdCh1cmxXaXRob3V0UXVlcnlPckhhc2gpKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgdGhpcyB2ZXJzaW9uIGZvciBhIGdpdmVuIHJlc291cmNlIHdpdGggYSBwYXJ0aWN1bGFyIGhhc2guXG4gICAgICAgICAqL1xuICAgICAgICBsb29rdXBSZXNvdXJjZVdpdGhIYXNoKHVybCwgaGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAvLyBWZXJpZnkgdGhhdCB0aGlzIHZlcnNpb24gaGFzIHRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgY2FjaGVkLiBJZiBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhlcmUncyBubyBwb2ludCBpbiB0cnlpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhhc2hUYWJsZS5oYXModXJsKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTmV4dCwgY2hlY2sgd2hldGhlciB0aGUgcmVzb3VyY2UgaGFzIHRoZSBjb3JyZWN0IGhhc2guIElmIG5vdCwgYW55IGNhY2hlZFxuICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNlIGlzbid0IHVzYWJsZS5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNoVGFibGUuZ2V0KHVybCkgIT09IGhhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlU3RhdGUgPSB5aWVsZCB0aGlzLmxvb2t1cFJlc291cmNlV2l0aG91dEhhc2godXJsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVTdGF0ZSAmJiBjYWNoZVN0YXRlLnJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIHRoaXMgdmVyc2lvbiBmb3IgYSBnaXZlbiByZXNvdXJjZSByZWdhcmRsZXNzIG9mIGl0cyBoYXNoLlxuICAgICAgICAgKi9cbiAgICAgICAgbG9va3VwUmVzb3VyY2VXaXRob3V0SGFzaCh1cmwpIHtcbiAgICAgICAgICAgIC8vIExpbWl0IHRoZSBzZWFyY2ggdG8gYXNzZXQgZ3JvdXBzLCBhbmQgb25seSBzY2FuIHRoZSBjYWNoZSwgZG9uJ3RcbiAgICAgICAgICAgIC8vIGxvYWQgcmVzb3VyY2VzIGZyb20gdGhlIG5ldHdvcmsuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hc3NldEdyb3Vwcy5yZWR1Y2UoKHBvdGVudGlhbFJlc3BvbnNlLCBncm91cCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCBwb3RlbnRpYWxSZXNwb25zZTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZmV0Y2hGcm9tQ2FjaGVPbmx5KCkgYXZvaWRzIGFueSBuZXR3b3JrIGZldGNoZXMsIGFuZCByZXR1cm5zIHRoZVxuICAgICAgICAgICAgICAgIC8vIGZ1bGwgc2V0IG9mIGNhY2hlIGRhdGEsIG5vdCBqdXN0IHRoZSBSZXNwb25zZS5cbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXAuZmV0Y2hGcm9tQ2FjaGVPbmx5KHVybCk7XG4gICAgICAgICAgICB9KSwgUHJvbWlzZS5yZXNvbHZlKG51bGwpKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdCBhbGwgdW5oYXNoZWQgcmVzb3VyY2VzIGZyb20gYWxsIGFzc2V0IGdyb3Vwcy5cbiAgICAgICAgICovXG4gICAgICAgIHByZXZpb3VzbHlDYWNoZWRSZXNvdXJjZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hc3NldEdyb3Vwcy5yZWR1Y2UoKHJlc291cmNlcywgZ3JvdXApID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuICh5aWVsZCByZXNvdXJjZXMpLmNvbmNhdCh5aWVsZCBncm91cC51bmhhc2hlZFJlc291cmNlcygpKTsgfSksIFByb21pc2UucmVzb2x2ZShbXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJlY2VudENhY2hlU3RhdHVzKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hc3NldEdyb3Vwcy5yZWR1Y2UoKGN1cnJlbnQsIGdyb3VwKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHlpZWxkIGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IFVwZGF0ZUNhY2hlU3RhdHVzLkNBQ0hFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cFN0YXR1cyA9IHlpZWxkIGdyb3VwLmNhY2hlU3RhdHVzKHVybCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cFN0YXR1cyA9PT0gVXBkYXRlQ2FjaGVTdGF0dXMuTk9UX0NBQ0hFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBTdGF0dXM7XG4gICAgICAgICAgICAgICAgfSksIFByb21pc2UucmVzb2x2ZShVcGRhdGVDYWNoZVN0YXR1cy5OT1RfQ0FDSEVEKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogRXJhc2UgdGhpcyBhcHBsaWNhdGlvbiB2ZXJzaW9uLCBieSBjbGVhbmluZyB1cCBhbGwgdGhlIGNhY2hlcy5cbiAgICAgICAgICovXG4gICAgICAgIGNsZWFudXAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKHRoaXMuYXNzZXRHcm91cHMubWFwKGdyb3VwID0+IGdyb3VwLmNsZWFudXAoKSkpO1xuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKHRoaXMuZGF0YUdyb3Vwcy5tYXAoZ3JvdXAgPT4gZ3JvdXAuY2xlYW51cCgpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBvcGFxdWUgYXBwbGljYXRpb24gZGF0YSB3aGljaCB3YXMgcHJvdmlkZWQgd2l0aCB0aGUgbWFuaWZlc3QuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQgYXBwRGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hbmlmZXN0LmFwcERhdGEgfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgd2hldGhlciBhIHJlcXVlc3QgYWNjZXB0cyBgdGV4dC9odG1sYCAoYmFzZWQgb24gdGhlIGBBY2NlcHRgIGhlYWRlcikuXG4gICAgICAgICAqL1xuICAgICAgICBhY2NlcHRzVGV4dEh0bWwocmVxKSB7XG4gICAgICAgICAgICBjb25zdCBhY2NlcHQgPSByZXEuaGVhZGVycy5nZXQoJ0FjY2VwdCcpO1xuICAgICAgICAgICAgaWYgKGFjY2VwdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGFjY2VwdC5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5zb21lKHZhbHVlID0+IHZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSAndGV4dC9odG1sJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBjb25zdCBERUJVR19MT0dfQlVGRkVSX1NJWkUgPSAxMDA7XG4gICAgY2xhc3MgRGVidWdIYW5kbGVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoZHJpdmVyLCBhZGFwdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmRyaXZlciA9IGRyaXZlcjtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgICAgICAgICAvLyBUaGVyZSBhcmUgdHdvIGRlYnVnIGxvZyBtZXNzYWdlIGFycmF5cy4gZGVidWdMb2dBIHJlY29yZHMgbmV3IGRlYnVnZ2luZyBtZXNzYWdlcy5cbiAgICAgICAgICAgIC8vIE9uY2UgaXQgcmVhY2hlcyBERUJVR19MT0dfQlVGRkVSX1NJWkUsIHRoZSBhcnJheSBpcyBtb3ZlZCB0byBkZWJ1Z0xvZ0IgYW5kIGEgbmV3XG4gICAgICAgICAgICAvLyBhcnJheSBpcyBhc3NpZ25lZCB0byBkZWJ1Z0xvZ0EuIFRoaXMgZW5zdXJlcyB0aGF0IGluc2VydGlvbiB0byB0aGUgZGVidWcgbG9nIGlzXG4gICAgICAgICAgICAvLyBhbHdheXMgTygxKSBubyBtYXR0ZXIgdGhlIG51bWJlciBvZiBsb2dnZWQgbWVzc2FnZXMsIGFuZCB0aGF0IHRoZSB0b3RhbCBudW1iZXJcbiAgICAgICAgICAgIC8vIG9mIG1lc3NhZ2VzIGluIHRoZSBsb2cgbmV2ZXIgZXhjZWVkcyAyICogREVCVUdfTE9HX0JVRkZFUl9TSVpFLlxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0xvZ0EgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZGVidWdMb2dCID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlRmV0Y2gocmVxKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtzdGF0ZSwgdmVyc2lvbnMsIGlkbGVdID0geWllbGQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyaXZlci5kZWJ1Z1N0YXRlKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJpdmVyLmRlYnVnVmVyc2lvbnMoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcml2ZXIuZGVidWdJZGxlU3RhdGUoKSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtc2dTdGF0ZSA9IGBOR1NXIERlYnVnIEluZm86XG5cbkRyaXZlciBzdGF0ZTogJHtzdGF0ZS5zdGF0ZX0gKCR7c3RhdGUud2h5fSlcbkxhdGVzdCBtYW5pZmVzdCBoYXNoOiAke3N0YXRlLmxhdGVzdEhhc2ggfHwgJ25vbmUnfVxuTGFzdCB1cGRhdGUgY2hlY2s6ICR7dGhpcy5zaW5jZShzdGF0ZS5sYXN0VXBkYXRlQ2hlY2spfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgbXNnVmVyc2lvbnMgPSB2ZXJzaW9uc1xuICAgICAgICAgICAgICAgICAgICAubWFwKHZlcnNpb24gPT4gYD09PSBWZXJzaW9uICR7dmVyc2lvbi5oYXNofSA9PT1cblxuQ2xpZW50czogJHt2ZXJzaW9uLmNsaWVudHMuam9pbignLCAnKX1gKVxuICAgICAgICAgICAgICAgICAgICAuam9pbignXFxuXFxuJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbXNnSWRsZSA9IGA9PT0gSWRsZSBUYXNrIFF1ZXVlID09PVxuTGFzdCB1cGRhdGUgdGljazogJHt0aGlzLnNpbmNlKGlkbGUubGFzdFRyaWdnZXIpfVxuTGFzdCB1cGRhdGUgcnVuOiAke3RoaXMuc2luY2UoaWRsZS5sYXN0UnVuKX1cblRhc2sgcXVldWU6XG4ke2lkbGUucXVldWUubWFwKHYgPT4gJyAqICcgKyB2KS5qb2luKCdcXG4nKX1cblxuRGVidWcgbG9nOlxuJHt0aGlzLmZvcm1hdERlYnVnTG9nKHRoaXMuZGVidWdMb2dCKX1cbiR7dGhpcy5mb3JtYXREZWJ1Z0xvZyh0aGlzLmRlYnVnTG9nQSl9XG5gO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubmV3UmVzcG9uc2UoYCR7bXNnU3RhdGV9XG5cbiR7bXNnVmVyc2lvbnN9XG5cbiR7bXNnSWRsZX1gLCB7IGhlYWRlcnM6IHRoaXMuYWRhcHRlci5uZXdIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJyB9KSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNpbmNlKHRpbWUpIHtcbiAgICAgICAgICAgIGlmICh0aW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICduZXZlcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYWdlID0gdGhpcy5hZGFwdGVyLnRpbWUgLSB0aW1lO1xuICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoYWdlIC8gODY0MDAwMDApO1xuICAgICAgICAgICAgYWdlID0gYWdlICUgODY0MDAwMDA7XG4gICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoYWdlIC8gMzYwMDAwMCk7XG4gICAgICAgICAgICBhZ2UgPSBhZ2UgJSAzNjAwMDAwO1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoYWdlIC8gNjAwMDApO1xuICAgICAgICAgICAgYWdlID0gYWdlICUgNjAwMDA7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihhZ2UgLyAxMDAwKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbGxpcyA9IGFnZSAlIDEwMDA7XG4gICAgICAgICAgICByZXR1cm4gJycgKyAoZGF5cyA+IDAgPyBgJHtkYXlzfWRgIDogJycpICsgKGhvdXJzID4gMCA/IGAke2hvdXJzfWhgIDogJycpICtcbiAgICAgICAgICAgICAgICAobWludXRlcyA+IDAgPyBgJHttaW51dGVzfW1gIDogJycpICsgKHNlY29uZHMgPiAwID8gYCR7c2Vjb25kc31zYCA6ICcnKSArXG4gICAgICAgICAgICAgICAgKG1pbGxpcyA+IDAgPyBgJHttaWxsaXN9dWAgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgbG9nKHZhbHVlLCBjb250ZXh0ID0gJycpIHtcbiAgICAgICAgICAgIC8vIFJvdGF0ZSB0aGUgYnVmZmVycyBpZiBkZWJ1Z0xvZ0EgaGFzIGdyb3duIHRvbyBsYXJnZS5cbiAgICAgICAgICAgIGlmICh0aGlzLmRlYnVnTG9nQS5sZW5ndGggPT09IERFQlVHX0xPR19CVUZGRVJfU0laRSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVidWdMb2dCID0gdGhpcy5kZWJ1Z0xvZ0E7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJ1Z0xvZ0EgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENvbnZlcnQgZXJyb3JzIHRvIHN0cmluZyBmb3IgbG9nZ2luZy5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmVycm9yVG9TdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTG9nIHRoZSBtZXNzYWdlLlxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0xvZ0EucHVzaCh7IHZhbHVlLCB0aW1lOiB0aGlzLmFkYXB0ZXIudGltZSwgY29udGV4dCB9KTtcbiAgICAgICAgfVxuICAgICAgICBlcnJvclRvU3RyaW5nKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIGAke2Vyci5uYW1lfSgke2Vyci5tZXNzYWdlfSwgJHtlcnIuc3RhY2t9KWA7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0RGVidWdMb2cobG9nKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9nLm1hcChlbnRyeSA9PiBgWyR7dGhpcy5zaW5jZShlbnRyeS50aW1lKX1dICR7ZW50cnkudmFsdWV9ICR7ZW50cnkuY29udGV4dH1gKVxuICAgICAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGNsYXNzIElkbGVTY2hlZHVsZXIge1xuICAgICAgICBjb25zdHJ1Y3RvcihhZGFwdGVyLCBkZWxheSwgbWF4RGVsYXksIGRlYnVnKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIgPSBhZGFwdGVyO1xuICAgICAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICAgICAgdGhpcy5tYXhEZWxheSA9IG1heERlbGF5O1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lbXB0eSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgdGhpcy5lbXB0eVJlc29sdmUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5sYXN0VHJpZ2dlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmxhc3RSdW4gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5vbGRlc3RTY2hlZHVsZWRBdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdHJpZ2dlcigpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VHJpZ2dlciA9IHRoaXMuYWRhcHRlci50aW1lO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjaGVkdWxlZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlZC5jYW5jZWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBzY2hlZHVsZWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlZCA9IHNjaGVkdWxlZDtcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgdGhhdCBubyB0YXNrIHJlbWFpbnMgcGVuZGluZyBmb3IgbG9uZ2VyIHRoYW4gYHRoaXMubWF4RGVsYXlgIG1zLlxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IHRoaXMuYWRhcHRlci50aW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heERlbGF5ID0gTWF0aC5tYXgoMCwgKChfYSA9IHRoaXMub2xkZXN0U2NoZWR1bGVkQXQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5vdykgKyB0aGlzLm1heERlbGF5IC0gbm93KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxheSA9IE1hdGgubWluKG1heERlbGF5LCB0aGlzLmRlbGF5KTtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmFkYXB0ZXIudGltZW91dChkZWxheSk7XG4gICAgICAgICAgICAgICAgaWYgKHNjaGVkdWxlZC5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5leGVjdXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBleGVjdXRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RSdW4gPSB0aGlzLmFkYXB0ZXIudGltZTtcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5xdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXVlID0gdGhpcy5xdWV1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBxdWV1ZS5yZWR1Y2UoKHByZXZpb3VzLCB0YXNrKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBwcmV2aW91cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGFzay5ydW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYnVnLmxvZyhlcnIsIGB3aGlsZSBydW5uaW5nIGlkbGUgdGFzayAke3Rhc2suZGVzY31gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW1wdHlSZXNvbHZlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlSZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlSZXNvbHZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbXB0eSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMub2xkZXN0U2NoZWR1bGVkQXQgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NoZWR1bGUoZGVzYywgcnVuKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLnB1c2goeyBkZXNjLCBydW4gfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5lbXB0eVJlc29sdmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtcHR5ID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9sZGVzdFNjaGVkdWxlZEF0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbGRlc3RTY2hlZHVsZWRBdCA9IHRoaXMuYWRhcHRlci50aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldCBzaXplKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVldWUubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0YXNrRGVzY3JpcHRpb25zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVldWUubWFwKHRhc2sgPT4gdGFzay5kZXNjKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhc2hNYW5pZmVzdChtYW5pZmVzdCkge1xuICAgICAgICByZXR1cm4gc2hhMShKU09OLnN0cmluZ2lmeShtYW5pZmVzdCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzTXNnQ2hlY2tGb3JVcGRhdGVzKG1zZykge1xuICAgICAgICByZXR1cm4gbXNnLmFjdGlvbiA9PT0gJ0NIRUNLX0ZPUl9VUERBVEVTJztcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNNc2dBY3RpdmF0ZVVwZGF0ZShtc2cpIHtcbiAgICAgICAgcmV0dXJuIG1zZy5hY3Rpb24gPT09ICdBQ1RJVkFURV9VUERBVEUnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGNvbnN0IElETEVfREVMQVkgPSA1MDAwO1xuICAgIGNvbnN0IE1BWF9JRExFX0RFTEFZID0gMzAwMDA7XG4gICAgY29uc3QgU1VQUE9SVEVEX0NPTkZJR19WRVJTSU9OID0gMTtcbiAgICBjb25zdCBOT1RJRklDQVRJT05fT1BUSU9OX05BTUVTID0gW1xuICAgICAgICAnYWN0aW9ucycsICdiYWRnZScsICdib2R5JywgJ2RhdGEnLCAnZGlyJywgJ2ljb24nLCAnaW1hZ2UnLCAnbGFuZycsICdyZW5vdGlmeScsXG4gICAgICAgICdyZXF1aXJlSW50ZXJhY3Rpb24nLCAnc2lsZW50JywgJ3RhZycsICd0aW1lc3RhbXAnLCAndGl0bGUnLCAndmlicmF0ZSdcbiAgICBdO1xuICAgIHZhciBEcml2ZXJSZWFkeVN0YXRlID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKERyaXZlclJlYWR5U3RhdGUpIHtcbiAgICAgICAgLy8gVGhlIFNXIGlzIG9wZXJhdGluZyBpbiBhIG5vcm1hbCBtb2RlLCByZXNwb25kaW5nIHRvIGFsbCB0cmFmZmljLlxuICAgICAgICBEcml2ZXJSZWFkeVN0YXRlW0RyaXZlclJlYWR5U3RhdGVbXCJOT1JNQUxcIl0gPSAwXSA9IFwiTk9STUFMXCI7XG4gICAgICAgIC8vIFRoZSBTVyBkb2VzIG5vdCBoYXZlIGEgY2xlYW4gaW5zdGFsbGF0aW9uIG9mIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGUgYXBwLCBidXQgb2xkZXJcbiAgICAgICAgLy8gY2FjaGVkIHZlcnNpb25zIGFyZSBzYWZlIHRvIHVzZSBzbyBsb25nIGFzIHRoZXkgZG9uJ3QgdHJ5IHRvIGZldGNoIG5ldyBkZXBlbmRlbmNpZXMuXG4gICAgICAgIC8vIFRoaXMgaXMgYSBkZWdyYWRlZCBzdGF0ZS5cbiAgICAgICAgRHJpdmVyUmVhZHlTdGF0ZVtEcml2ZXJSZWFkeVN0YXRlW1wiRVhJU1RJTkdfQ0xJRU5UU19PTkxZXCJdID0gMV0gPSBcIkVYSVNUSU5HX0NMSUVOVFNfT05MWVwiO1xuICAgICAgICAvLyBUaGUgU1cgaGFzIGRlY2lkZWQgdGhhdCBjYWNoaW5nIGlzIGNvbXBsZXRlbHkgdW5yZWxpYWJsZSwgYW5kIGlzIGZvcmdvaW5nIHJlcXVlc3RcbiAgICAgICAgLy8gaGFuZGxpbmcgdW50aWwgdGhlIG5leHQgcmVzdGFydC5cbiAgICAgICAgRHJpdmVyUmVhZHlTdGF0ZVtEcml2ZXJSZWFkeVN0YXRlW1wiU0FGRV9NT0RFXCJdID0gMl0gPSBcIlNBRkVfTU9ERVwiO1xuICAgICAgICByZXR1cm4gRHJpdmVyUmVhZHlTdGF0ZTtcbiAgICB9KSh7fSk7XG4gICAgY2xhc3MgRHJpdmVyIHtcbiAgICAgICAgY29uc3RydWN0b3Ioc2NvcGUsIGFkYXB0ZXIsIGRiKSB7XG4gICAgICAgICAgICAvLyBTZXQgdXAgYWxsIHRoZSBldmVudCBoYW5kbGVycyB0aGF0IHRoZSBTVyBuZWVkcy5cbiAgICAgICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgICAgICAgICB0aGlzLmRiID0gZGI7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRyYWNrcyB0aGUgY3VycmVudCByZWFkaW5lc3MgY29uZGl0aW9uIHVuZGVyIHdoaWNoIHRoZSBTVyBpcyBvcGVyYXRpbmcuIFRoaXMgY29udHJvbHNcbiAgICAgICAgICAgICAqIHdoZXRoZXIgdGhlIFNXIGF0dGVtcHRzIHRvIHJlc3BvbmQgdG8gc29tZSBvciBhbGwgcmVxdWVzdHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBEcml2ZXJSZWFkeVN0YXRlLk5PUk1BTDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVNZXNzYWdlID0gJyhub21pbmFsKSc7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRyYWNrcyB3aGV0aGVyIHRoZSBTVyBpcyBpbiBhbiBpbml0aWFsaXplZCBzdGF0ZSBvciBub3QuIEJlZm9yZSBpbml0aWFsaXphdGlvbixcbiAgICAgICAgICAgICAqIGl0J3Mgbm90IGxlZ2FsIHRvIHJlc3BvbmQgdG8gcmVxdWVzdHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBudWxsO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBNYXBzIGNsaWVudCBJRHMgdG8gdGhlIG1hbmlmZXN0IGhhc2ggb2YgdGhlIGFwcGxpY2F0aW9uIHZlcnNpb24gYmVpbmcgdXNlZCB0byBzZXJ2ZVxuICAgICAgICAgICAgICogdGhlbS4gSWYgYSBjbGllbnQgSUQgaXMgbm90IHByZXNlbnQgaGVyZSwgaXQgaGFzIG5vdCB5ZXQgYmVlbiBhc3NpZ25lZCBhIHZlcnNpb24uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogSWYgYSBNYW5pZmVzdEhhc2ggYXBwZWFycyBoZXJlLCBpdCBpcyBhbHNvIHByZXNlbnQgaW4gdGhlIGB2ZXJzaW9uc2AgbWFwIGJlbG93LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmNsaWVudFZlcnNpb25NYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE1hcHMgbWFuaWZlc3QgaGFzaGVzIHRvIGluc3RhbmNlcyBvZiBgQXBwVmVyc2lvbmAgZm9yIHRob3NlIG1hbmlmZXN0cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy52ZXJzaW9ucyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGxhdGVzdCB2ZXJzaW9uIGZldGNoZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIFZhbGlkIGFmdGVyIGluaXRpYWxpemF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMubGF0ZXN0SGFzaCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmxhc3RVcGRhdGVDaGVjayA9IG51bGw7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdoZXRoZXIgdGhlcmUgaXMgYSBjaGVjayBmb3IgdXBkYXRlcyBjdXJyZW50bHkgc2NoZWR1bGVkIGR1ZSB0byBuYXZpZ2F0aW9uLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlZE5hdlVwZGF0ZUNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEtlZXAgdHJhY2sgb2Ygd2hldGhlciB3ZSBoYXZlIGxvZ2dlZCBhbiBpbnZhbGlkIGBvbmx5LWlmLWNhY2hlZGAgcmVxdWVzdC5cbiAgICAgICAgICAgICAqIChTZWUgYC5vbkZldGNoKClgIGZvciBkZXRhaWxzLilcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5sb2dnZWRJbnZhbGlkT25seUlmQ2FjaGVkUmVxdWVzdCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5uZ3N3U3RhdGVQYXRoID0gdGhpcy5hZGFwdGVyLnBhcnNlVXJsKCduZ3N3L3N0YXRlJywgdGhpcy5zY29wZS5yZWdpc3RyYXRpb24uc2NvcGUpLnBhdGg7XG4gICAgICAgICAgICAvLyBUaGUgaW5zdGFsbCBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgc2VydmljZSB3b3JrZXIgaXMgZmlyc3QgaW5zdGFsbGVkLlxuICAgICAgICAgICAgdGhpcy5zY29wZS5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gU1cgY29kZSB1cGRhdGVzIGFyZSBzZXBhcmF0ZSBmcm9tIGFwcGxpY2F0aW9uIHVwZGF0ZXMsIHNvIGNvZGUgdXBkYXRlcyBhcmVcbiAgICAgICAgICAgICAgICAvLyBhbG1vc3QgYXMgc3RyYWlnaHRmb3J3YXJkIGFzIHJlc3RhcnRpbmcgdGhlIFNXLiBCZWNhdXNlIG9mIHRoaXMsIGl0J3MgYWx3YXlzXG4gICAgICAgICAgICAgICAgLy8gc2FmZSB0byBza2lwIHdhaXRpbmcgdW50aWwgYXBwbGljYXRpb24gdGFicyBhcmUgY2xvc2VkLCBhbmQgYWN0aXZhdGUgdGhlIG5ld1xuICAgICAgICAgICAgICAgIC8vIFNXIHZlcnNpb24gaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICAgICAgZXZlbnQud2FpdFVudGlsKHRoaXMuc2NvcGUuc2tpcFdhaXRpbmcoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFRoZSBhY3RpdmF0ZSBldmVudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGlzIHZlcnNpb24gb2YgdGhlIHNlcnZpY2Ugd29ya2VyIGlzXG4gICAgICAgICAgICAvLyBmaXJzdCBhY3RpdmF0ZWQuXG4gICAgICAgICAgICB0aGlzLnNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQud2FpdFVudGlsKCgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFzIGFib3ZlLCBpdCdzIHNhZmUgdG8gdGFrZSBvdmVyIGZyb20gZXhpc3RpbmcgY2xpZW50cyBpbW1lZGlhdGVseSwgc2luY2UgdGhlIG5ldyBTV1xuICAgICAgICAgICAgICAgICAgICAvLyB2ZXJzaW9uIHdpbGwgY29udGludWUgdG8gc2VydmUgdGhlIG9sZCBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5zY29wZS5jbGllbnRzLmNsYWltKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9uY2UgYWxsIGNsaWVudHMgaGF2ZSBiZWVuIHRha2VuIG92ZXIsIHdlIGNhbiBkZWxldGUgY2FjaGVzIHVzZWQgYnkgb2xkIHZlcnNpb25zIG9mXG4gICAgICAgICAgICAgICAgICAgIC8vIGBAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcmAsIHdoaWNoIGFyZSBubyBsb25nZXIgbmVlZGVkLiBUaGlzIGNhbiBoYXBwZW4gaW4gdGhlIGJhY2tncm91bmQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWRsZS5zY2hlZHVsZSgnYWN0aXZhdGU6IGNsZWFudXAtb2xkLXN3LWNhY2hlcycsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5jbGVhbnVwT2xkU3dDYWNoZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRvIC0gY2xlYW51cCBmYWlsZWQuIEp1c3QgbG9nIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWdnZXIubG9nKGVyciwgJ2NsZWFudXBPbGRTd0NhY2hlcyBAIGFjdGl2YXRlOiBjbGVhbnVwLW9sZC1zdy1jYWNoZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0pKSgpKTtcbiAgICAgICAgICAgICAgICAvLyBSYXRoZXIgdGhhbiB3YWl0IGZvciB0aGUgZmlyc3QgZmV0Y2ggZXZlbnQsIHdoaWNoIG1heSBub3QgYXJyaXZlIHVudGlsXG4gICAgICAgICAgICAgICAgLy8gdGhlIG5leHQgdGltZSB0aGUgYXBwbGljYXRpb24gaXMgbG9hZGVkLCB0aGUgU1cgdGFrZXMgYWR2YW50YWdlIG9mIHRoZVxuICAgICAgICAgICAgICAgIC8vIGFjdGl2YXRpb24gZXZlbnQgdG8gc2NoZWR1bGUgaW5pdGlhbGl6YXRpb24uIEhvd2V2ZXIsIGlmIHRoaXMgd2VyZSBydW5cbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgY29udGV4dCBvZiB0aGUgJ2FjdGl2YXRlJyBldmVudCwgd2FpdFVudGlsKCkgaGVyZSB3b3VsZCBjYXVzZSBmZXRjaFxuICAgICAgICAgICAgICAgIC8vIGV2ZW50cyB0byBibG9jayB1bnRpbCBpbml0aWFsaXphdGlvbiBjb21wbGV0ZWQuIFRodXMsIHRoZSBTVyBkb2VzIGFcbiAgICAgICAgICAgICAgICAvLyBwb3N0TWVzc2FnZSgpIHRvIGl0c2VsZiwgdG8gc2NoZWR1bGUgYSBuZXcgZXZlbnQgbG9vcCBpdGVyYXRpb24gd2l0aCBhblxuICAgICAgICAgICAgICAgIC8vIGVudGlyZWx5IHNlcGFyYXRlIGV2ZW50IGNvbnRleHQuIFRoZSBTVyB3aWxsIGJlIGtlcHQgYWxpdmUgYnkgd2FpdFVudGlsKClcbiAgICAgICAgICAgICAgICAvLyB3aXRoaW4gdGhhdCBzZXBhcmF0ZSBjb250ZXh0IHdoaWxlIGluaXRpYWxpemF0aW9uIHByb2NlZWRzLCB3aGlsZSBhdCB0aGVcbiAgICAgICAgICAgICAgICAvLyBzYW1lIHRpbWUgdGhlIGFjdGl2YXRpb24gZXZlbnQgaXMgYWxsb3dlZCB0byByZXNvbHZlIGFuZCB0cmFmZmljIHN0YXJ0c1xuICAgICAgICAgICAgICAgIC8vIGJlaW5nIHNlcnZlZC5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY29wZS5yZWdpc3RyYXRpb24uYWN0aXZlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcGUucmVnaXN0cmF0aW9uLmFjdGl2ZS5wb3N0TWVzc2FnZSh7IGFjdGlvbjogJ0lOSVRJQUxJWkUnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBmZXRjaCwgbWVzc2FnZSwgYW5kIHB1c2ggZXZlbnRzLlxuICAgICAgICAgICAgdGhpcy5zY29wZS5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIChldmVudCkgPT4gdGhpcy5vbkZldGNoKGV2ZW50KSk7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHRoaXMub25NZXNzYWdlKGV2ZW50KSk7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ3B1c2gnLCAoZXZlbnQpID0+IHRoaXMub25QdXNoKGV2ZW50KSk7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbmNsaWNrJywgKGV2ZW50KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgICAgICAgICAgIC8vIFRoZSBkZWJ1Z2dlciBnZW5lcmF0ZXMgZGVidWcgcGFnZXMgaW4gcmVzcG9uc2UgdG8gZGVidWdnaW5nIHJlcXVlc3RzLlxuICAgICAgICAgICAgdGhpcy5kZWJ1Z2dlciA9IG5ldyBEZWJ1Z0hhbmRsZXIodGhpcywgdGhpcy5hZGFwdGVyKTtcbiAgICAgICAgICAgIC8vIFRoZSBJZGxlU2NoZWR1bGVyIHdpbGwgZXhlY3V0ZSBpZGxlIHRhc2tzIGFmdGVyIGEgZ2l2ZW4gZGVsYXkuXG4gICAgICAgICAgICB0aGlzLmlkbGUgPSBuZXcgSWRsZVNjaGVkdWxlcih0aGlzLmFkYXB0ZXIsIElETEVfREVMQVksIE1BWF9JRExFX0RFTEFZLCB0aGlzLmRlYnVnZ2VyKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGhhbmRsZXIgZm9yIGZldGNoIGV2ZW50cy5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBpcyB0aGUgdHJhbnNpdGlvbiBwb2ludCBiZXR3ZWVuIHRoZSBzeW5jaHJvbm91cyBldmVudCBoYW5kbGVyIGFuZCB0aGVcbiAgICAgICAgICogYXN5bmNocm9ub3VzIGV4ZWN1dGlvbiB0aGF0IGV2ZW50dWFsbHkgcmVzb2x2ZXMgZm9yIHJlc3BvbmRXaXRoKCkgYW5kIHdhaXRVbnRpbCgpLlxuICAgICAgICAgKi9cbiAgICAgICAgb25GZXRjaChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVxID0gZXZlbnQucmVxdWVzdDtcbiAgICAgICAgICAgIGNvbnN0IHNjb3BlVXJsID0gdGhpcy5zY29wZS5yZWdpc3RyYXRpb24uc2NvcGU7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0VXJsT2JqID0gdGhpcy5hZGFwdGVyLnBhcnNlVXJsKHJlcS51cmwsIHNjb3BlVXJsKTtcbiAgICAgICAgICAgIGlmIChyZXEuaGVhZGVycy5oYXMoJ25nc3ctYnlwYXNzJykgfHwgL1s/Jl1uZ3N3LWJ5cGFzcyg/Ols9Jl18JCkvaS50ZXN0KHJlcXVlc3RVcmxPYmouc2VhcmNoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBvbmx5IHRoaW5nIHRoYXQgaXMgc2VydmVkIHVuY29uZGl0aW9uYWxseSBpcyB0aGUgZGVidWcgcGFnZS5cbiAgICAgICAgICAgIGlmIChyZXF1ZXN0VXJsT2JqLnBhdGggPT09IHRoaXMubmdzd1N0YXRlUGF0aCkge1xuICAgICAgICAgICAgICAgIC8vIEFsbG93IHRoZSBkZWJ1Z2dlciB0byBoYW5kbGUgdGhlIHJlcXVlc3QsIGJ1dCBkb24ndCBhZmZlY3QgU1cgc3RhdGUgaW4gYW55IG90aGVyIHdheS5cbiAgICAgICAgICAgICAgICBldmVudC5yZXNwb25kV2l0aCh0aGlzLmRlYnVnZ2VyLmhhbmRsZUZldGNoKHJlcSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBTVyBpcyBpbiBhIGJyb2tlbiBzdGF0ZSB3aGVyZSBpdCdzIG5vdCBzYWZlIHRvIGhhbmRsZSByZXF1ZXN0cyBhdCBhbGwsXG4gICAgICAgICAgICAvLyByZXR1cm5pbmcgY2F1c2VzIHRoZSByZXF1ZXN0IHRvIGZhbGwgYmFjayBvbiB0aGUgbmV0d29yay4gVGhpcyBpcyBwcmVmZXJyZWQgb3ZlclxuICAgICAgICAgICAgLy8gYHJlc3BvbmRXaXRoKGZldGNoKHJlcSkpYCBiZWNhdXNlIHRoZSBsYXR0ZXIgc3RpbGwgc2hvd3MgaW4gRGV2VG9vbHMgdGhhdCB0aGVcbiAgICAgICAgICAgIC8vIHJlcXVlc3Qgd2FzIGhhbmRsZWQgYnkgdGhlIFNXLlxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IERyaXZlclJlYWR5U3RhdGUuU0FGRV9NT0RFKSB7XG4gICAgICAgICAgICAgICAgLy8gRXZlbiB0aG91Z2ggdGhlIHdvcmtlciBpcyBpbiBzYWZlIG1vZGUsIGlkbGUgdGFza3Mgc3RpbGwgbmVlZCB0byBoYXBwZW4gc29cbiAgICAgICAgICAgICAgICAvLyB0aGluZ3MgbGlrZSB1cGRhdGUgY2hlY2tzLCBldGMuIGNhbiB0YWtlIHBsYWNlLlxuICAgICAgICAgICAgICAgIGV2ZW50LndhaXRVbnRpbCh0aGlzLmlkbGUudHJpZ2dlcigpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBbHRob3VnaCBcInBhc3NpdmUgbWl4ZWQgY29udGVudFwiIChsaWtlIGltYWdlcykgb25seSBwcm9kdWNlcyBhIHdhcm5pbmcgd2l0aG91dCBhXG4gICAgICAgICAgICAvLyBTZXJ2aWNlV29ya2VyLCBmZXRjaGluZyBpdCB2aWEgYSBTZXJ2aWNlV29ya2VyIHJlc3VsdHMgaW4gYW4gZXJyb3IuIExldCBzdWNoIHJlcXVlc3RzIGJlXG4gICAgICAgICAgICAvLyBoYW5kbGVkIGJ5IHRoZSBicm93c2VyLCBzaW5jZSBoYW5kbGluZyB3aXRoIHRoZSBTZXJ2aWNlV29ya2VyIHdvdWxkIGZhaWwgYW55d2F5LlxuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIzMDEyI2lzc3VlY29tbWVudC0zNzY0MzAxODcgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgICAgICAgIGlmIChyZXF1ZXN0VXJsT2JqLm9yaWdpbi5zdGFydHNXaXRoKCdodHRwOicpICYmIHNjb3BlVXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOicpKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RpbGwsIGxvZyB0aGUgaW5jaWRlbnQgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlcy5cbiAgICAgICAgICAgICAgICB0aGlzLmRlYnVnZ2VyLmxvZyhgSWdub3JpbmcgcGFzc2l2ZSBtaXhlZCBjb250ZW50IHJlcXVlc3Q6IERyaXZlci5mZXRjaCgke3JlcS51cmx9KWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdoZW4gb3BlbmluZyBEZXZUb29scyBpbiBDaHJvbWUsIGEgcmVxdWVzdCBpcyBtYWRlIGZvciB0aGUgY3VycmVudCBVUkwgKGFuZCBwb3NzaWJseSByZWxhdGVkXG4gICAgICAgICAgICAvLyByZXNvdXJjZXMsIGUuZy4gc2NyaXB0cykgd2l0aCBgY2FjaGU6ICdvbmx5LWlmLWNhY2hlZCdgIGFuZCBgbW9kZTogJ25vLWNvcnMnYC4gVGhlc2UgcmVxdWVzdFxuICAgICAgICAgICAgLy8gd2lsbCBldmVudHVhbGx5IGZhaWwsIGJlY2F1c2UgYG9ubHktaWYtY2FjaGVkYCBpcyBvbmx5IGFsbG93ZWQgdG8gYmUgdXNlZCB3aXRoXG4gICAgICAgICAgICAvLyBgbW9kZTogJ3NhbWUtb3JpZ2luJ2AuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBDaHJvbWUgRGV2VG9vbHMuIEF2b2lkIGhhbmRsaW5nIHN1Y2ggcmVxdWVzdHMuXG4gICAgICAgICAgICAvLyAoU2VlIGFsc28gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjIzNjIuKVxuICAgICAgICAgICAgLy8gVE9ETyhna2FscGFrKTogUmVtb3ZlIG9uY2Ugbm8gbG9uZ2VyIG5lY2Vzc2FyeSAoaS5lLiBmaXhlZCBpbiBDaHJvbWUgRGV2VG9vbHMpLlxuICAgICAgICAgICAgaWYgKHJlcS5jYWNoZSA9PT0gJ29ubHktaWYtY2FjaGVkJyAmJiByZXEubW9kZSAhPT0gJ3NhbWUtb3JpZ2luJykge1xuICAgICAgICAgICAgICAgIC8vIExvZyB0aGUgaW5jaWRlbnQgb25seSB0aGUgZmlyc3QgdGltZSBpdCBoYXBwZW5zLCB0byBhdm9pZCBzcGFtbWluZyB0aGUgbG9ncy5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubG9nZ2VkSW52YWxpZE9ubHlJZkNhY2hlZFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRJbnZhbGlkT25seUlmQ2FjaGVkUmVxdWVzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWdnZXIubG9nKGBJZ25vcmluZyBpbnZhbGlkIHJlcXVlc3Q6ICdvbmx5LWlmLWNhY2hlZCcgY2FuIGJlIHNldCBvbmx5IHdpdGggJ3NhbWUtb3JpZ2luJyBtb2RlYCwgYERyaXZlci5mZXRjaCgke3JlcS51cmx9LCBjYWNoZTogJHtyZXEuY2FjaGV9LCBtb2RlOiAke3JlcS5tb2RlfSlgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUGFzdCB0aGlzIHBvaW50LCB0aGUgU1cgY29tbWl0cyB0byBoYW5kbGluZyB0aGUgcmVxdWVzdCBpdHNlbGYuIFRoaXMgY291bGQgc3RpbGxcbiAgICAgICAgICAgIC8vIGZhaWwgKGFuZCByZXN1bHQgaW4gYHN0YXRlYCBiZWluZyBzZXQgdG8gYFNBRkVfTU9ERWApLCBidXQgZXZlbiBpbiB0aGF0IGNhc2UgdGhlXG4gICAgICAgICAgICAvLyBTVyB3aWxsIHN0aWxsIGRlbGl2ZXIgYSByZXNwb25zZS5cbiAgICAgICAgICAgIGV2ZW50LnJlc3BvbmRXaXRoKHRoaXMuaGFuZGxlRmV0Y2goZXZlbnQpKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGhhbmRsZXIgZm9yIG1lc3NhZ2UgZXZlbnRzLlxuICAgICAgICAgKi9cbiAgICAgICAgb25NZXNzYWdlKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgbWVzc2FnZSBldmVudHMgd2hlbiB0aGUgU1cgaXMgaW4gc2FmZSBtb2RlLCBmb3Igbm93LlxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IERyaXZlclJlYWR5U3RhdGUuU0FGRV9NT0RFKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIG1lc3NhZ2UgZG9lc24ndCBoYXZlIHRoZSBleHBlY3RlZCBzaWduYXR1cmUsIGlnbm9yZSBpdC5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLmFjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LndhaXRVbnRpbCgoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemF0aW9uIGlzIHRoZSBvbmx5IGV2ZW50IHdoaWNoIGlzIHNlbnQgZGlyZWN0bHkgZnJvbSB0aGUgU1cgdG8gaXRzZWxmLCBhbmQgdGh1c1xuICAgICAgICAgICAgICAgIC8vIGBldmVudC5zb3VyY2VgIGlzIG5vdCBhIGBDbGllbnRgLiBIYW5kbGUgaXQgaGVyZSwgYmVmb3JlIHRoZSBjaGVjayBmb3IgYENsaWVudGAgc291cmNlcy5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24gPT09ICdJTklUSUFMSVpFJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbnN1cmVJbml0aWFsaXplZChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE9ubHkgbWVzc2FnZXMgZnJvbSB0cnVlIGNsaWVudHMgYXJlIGFjY2VwdGVkIHBhc3QgdGhpcyBwb2ludC5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGVzc2VudGlhbGx5IGEgdHlwZWNhc3QuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIuaXNDbGllbnQoZXZlbnQuc291cmNlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgbWVzc2FnZSBhbmQga2VlcCB0aGUgU1cgYWxpdmUgdW50aWwgaXQncyBoYW5kbGVkLlxuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuZW5zdXJlSW5pdGlhbGl6ZWQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuaGFuZGxlTWVzc2FnZShkYXRhLCBldmVudC5zb3VyY2UpO1xuICAgICAgICAgICAgfSkpKCkpO1xuICAgICAgICB9XG4gICAgICAgIG9uUHVzaChtc2cpIHtcbiAgICAgICAgICAgIC8vIFB1c2ggbm90aWZpY2F0aW9ucyB3aXRob3V0IGRhdGEgaGF2ZSBubyBlZmZlY3QuXG4gICAgICAgICAgICBpZiAoIW1zZy5kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBwdXNoIGFuZCBrZWVwIHRoZSBTVyBhbGl2ZSB1bnRpbCBpdCdzIGhhbmRsZWQuXG4gICAgICAgICAgICBtc2cud2FpdFVudGlsKHRoaXMuaGFuZGxlUHVzaChtc2cuZGF0YS5qc29uKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlIGNsaWNrIGV2ZW50IGFuZCBrZWVwIHRoZSBTVyBhbGl2ZSB1bnRpbCBpdCdzIGhhbmRsZWQuXG4gICAgICAgICAgICBldmVudC53YWl0VW50aWwodGhpcy5oYW5kbGVDbGljayhldmVudC5ub3RpZmljYXRpb24sIGV2ZW50LmFjdGlvbikpO1xuICAgICAgICB9XG4gICAgICAgIGVuc3VyZUluaXRpYWxpemVkKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBTVyBtYXkgaGF2ZSBqdXN0IGJlZW4gc3RhcnRlZCwgaXQgbWF5IG9yIG1heSBub3QgaGF2ZSBiZWVuIGluaXRpYWxpemVkIGFscmVhZHkuXG4gICAgICAgICAgICAgICAgLy8gYHRoaXMuaW5pdGlhbGl6ZWRgIHdpbGwgYmUgYG51bGxgIGlmIGluaXRpYWxpemF0aW9uIGhhcyBub3QgeWV0IGJlZW4gYXR0ZW1wdGVkLCBvciB3aWxsIGJlIGFcbiAgICAgICAgICAgICAgICAvLyBgUHJvbWlzZWAgd2hpY2ggd2lsbCByZXNvbHZlIChzdWNjZXNzZnVsbHkgb3IgdW5zdWNjZXNzZnVsbHkpIGlmIGl0IGhhcy5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsaXplZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6YXRpb24gaGFzIG5vdCB5ZXQgYmVlbiBhdHRlbXB0ZWQsIHNvIGF0dGVtcHQgaXQuIFRoaXMgc2hvdWxkIG9ubHkgZXZlciBoYXBwZW4gb25jZVxuICAgICAgICAgICAgICAgIC8vIHBlciBTVyBpbnN0YW50aWF0aW9uLlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5pbml0aWFsaXplZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGluaXRpYWxpemF0aW9uIGZhaWxzLCB0aGUgU1cgbmVlZHMgdG8gZW50ZXIgYSBzYWZlIHN0YXRlLCB3aGVyZSBpdCBkZWNsaW5lcyB0byByZXNwb25kXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIG5ldHdvcmsgcmVxdWVzdHMuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBEcml2ZXJSZWFkeVN0YXRlLlNBRkVfTU9ERTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU1lc3NhZ2UgPSBgSW5pdGlhbGl6YXRpb24gZmFpbGVkIGR1ZSB0byBlcnJvcjogJHtlcnJvclRvU3RyaW5nKGVycm9yKX1gO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZ2FyZGxlc3MgaWYgaW5pdGlhbGl6YXRpb24gc3VjY2VlZGVkLCBiYWNrZ3JvdW5kIHRhc2tzIHN0aWxsIG5lZWQgdG8gaGFwcGVuLlxuICAgICAgICAgICAgICAgICAgICBldmVudC53YWl0VW50aWwodGhpcy5pZGxlLnRyaWdnZXIoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlTWVzc2FnZShtc2csIGZyb20pIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTXNnQ2hlY2tGb3JVcGRhdGVzKG1zZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuY2hlY2tGb3JVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpKCk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMucmVwb3J0U3RhdHVzKGZyb20sIGFjdGlvbiwgbXNnLnN0YXR1c05vbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNNc2dBY3RpdmF0ZVVwZGF0ZShtc2cpKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMucmVwb3J0U3RhdHVzKGZyb20sIHRoaXMudXBkYXRlQ2xpZW50KGZyb20pLCBtc2cuc3RhdHVzTm9uY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZVB1c2goZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmJyb2FkY2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQVVNIJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEubm90aWZpY2F0aW9uIHx8ICFkYXRhLm5vdGlmaWNhdGlvbi50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBkYXRhLm5vdGlmaWNhdGlvbjtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgICAgIE5PVElGSUNBVElPTl9PUFRJT05fTkFNRVMuZmlsdGVyKG5hbWUgPT4gZGVzYy5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2gobmFtZSA9PiBvcHRpb25zW25hbWVdID0gZGVzY1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5zY29wZS5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbihkZXNjWyd0aXRsZSddLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZUNsaWNrKG5vdGlmaWNhdGlvbiwgYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZmlsdGVyIHVzZXMgYG5hbWUgaW4gbm90aWZpY2F0aW9uYCBiZWNhdXNlIHRoZSBwcm9wZXJ0aWVzIGFyZSBvbiB0aGUgcHJvdG90eXBlIHNvXG4gICAgICAgICAgICAgICAgLy8gaGFzT3duUHJvcGVydHkgZG9lcyBub3Qgd29yayBoZXJlXG4gICAgICAgICAgICAgICAgTk9USUZJQ0FUSU9OX09QVElPTl9OQU1FUy5maWx0ZXIobmFtZSA9PiBuYW1lIGluIG5vdGlmaWNhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2gobmFtZSA9PiBvcHRpb25zW25hbWVdID0gbm90aWZpY2F0aW9uW25hbWVdKTtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmJyb2FkY2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdOT1RJRklDQVRJT05fQ0xJQ0snLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjdGlvbiwgbm90aWZpY2F0aW9uOiBvcHRpb25zIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXBvcnRTdGF0dXMoY2xpZW50LCBwcm9taXNlLCBub25jZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHsgdHlwZTogJ1NUQVRVUycsIG5vbmNlLCBzdGF0dXM6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBwcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICBjbGllbnQucG9zdE1lc3NhZ2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnQucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZSksIHsgc3RhdHVzOiBmYWxzZSwgZXJyb3I6IGUudG9TdHJpbmcoKSB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQ2xpZW50KGNsaWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAvLyBGaWd1cmUgb3V0IHdoaWNoIHZlcnNpb24gdGhlIGNsaWVudCBpcyBvbi4gSWYgaXQncyBub3Qgb24gdGhlIGxhdGVzdCxcbiAgICAgICAgICAgICAgICAvLyBpdCBuZWVkcyB0byBiZSBtb3ZlZC5cbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuY2xpZW50VmVyc2lvbk1hcC5nZXQoY2xpZW50LmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmcgPT09IHRoaXMubGF0ZXN0SGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRvLCB0aGlzIGNsaWVudCBpcyBhbHJlYWR5IG9uIHRoZSBsYXRlc3QgdmVyc2lvbi5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTd2l0Y2ggdGhlIGNsaWVudCBvdmVyLlxuICAgICAgICAgICAgICAgIGxldCBwcmV2aW91cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAvLyBMb29rIHVwIHRoZSBhcHBsaWNhdGlvbiBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXhpc3RpbmcgdmVyc2lvbi4gSWYgdGhlcmVcbiAgICAgICAgICAgICAgICAvLyBpc24ndCBhbnksIGZhbGwgYmFjayBvbiB1c2luZyB0aGUgaGFzaC5cbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1ZlcnNpb24gPSB0aGlzLnZlcnNpb25zLmdldChleGlzdGluZyk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzID0gdGhpcy5tZXJnZUhhc2hXaXRoQXBwRGF0YShleGlzdGluZ1ZlcnNpb24ubWFuaWZlc3QsIGV4aXN0aW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBjdXJyZW50IHZlcnNpb24gdXNlZCBieSB0aGUgY2xpZW50LCBhbmQgc3luYyB0aGUgbWFwcGluZyB0byBkaXNrLlxuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50VmVyc2lvbk1hcC5zZXQoY2xpZW50LmlkLCB0aGlzLmxhdGVzdEhhc2gpO1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuc3luYygpO1xuICAgICAgICAgICAgICAgIC8vIE5vdGlmeSB0aGUgY2xpZW50IGFib3V0IHRoaXMgYWN0aXZhdGlvbi5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy52ZXJzaW9ucy5nZXQodGhpcy5sYXRlc3RIYXNoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3RpY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVUERBVEVfQUNUSVZBVEVEJyxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IHRoaXMubWVyZ2VIYXNoV2l0aEFwcERhdGEoY3VycmVudC5tYW5pZmVzdCwgdGhpcy5sYXRlc3RIYXNoKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNsaWVudC5wb3N0TWVzc2FnZShub3RpY2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlRmV0Y2goZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBTVyBpbnN0YW5jZSBoYXMgYmVlbiBpbml0aWFsaXplZC5cbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5lbnN1cmVJbml0aWFsaXplZChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgU1cgaXMgYWxyZWFkeSBjb21taXR0ZWQgdG8gcmVzcG9uZGluZyB0byB0aGUgY3VycmVudGx5IGFjdGl2ZSByZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICAvLyByZXNwb25kIHdpdGggYSBuZXR3b3JrIGZldGNoLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zYWZlRmV0Y2goZXZlbnQucmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE9uIG5hdmlnYXRpb24gcmVxdWVzdHMsIGNoZWNrIGZvciBuZXcgdXBkYXRlcy5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQucmVxdWVzdC5tb2RlID09PSAnbmF2aWdhdGUnICYmICF0aGlzLnNjaGVkdWxlZE5hdlVwZGF0ZUNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVkTmF2VXBkYXRlQ2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGUuc2NoZWR1bGUoJ2NoZWNrLXVwZGF0ZXMtb24tbmF2aWdhdGlvbicsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVkTmF2VXBkYXRlQ2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuY2hlY2tGb3JVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEZWNpZGUgd2hpY2ggdmVyc2lvbiBvZiB0aGUgYXBwIHRvIHVzZSB0byBzZXJ2ZSB0aGlzIHJlcXVlc3QuIFRoaXMgaXMgYXN5bmNocm9ub3VzIGFzIGluXG4gICAgICAgICAgICAgICAgLy8gc29tZSBjYXNlcywgYSByZWNvcmQgd2lsbCBuZWVkIHRvIGJlIHdyaXR0ZW4gdG8gZGlzayBhYm91dCB0aGUgYXNzaWdubWVudCB0aGF0IGlzIG1hZGUuXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwVmVyc2lvbiA9IHlpZWxkIHRoaXMuYXNzaWduVmVyc2lvbihldmVudCk7XG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwcFZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSByZXF1ZXN0LiBGaXJzdCB0cnkgdGhlIEFwcFZlcnNpb24uIElmIHRoYXQgZG9lc24ndCB3b3JrLCBmYWxsIGJhY2sgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV0d29yay5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgPSB5aWVsZCBhcHBWZXJzaW9uLmhhbmRsZUZldGNoKGV2ZW50LnJlcXVlc3QsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLmlzVW5yZWNvdmVyYWJsZVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMubm90aWZ5Q2xpZW50c0Fib3V0VW5yZWNvdmVyYWJsZVN0YXRlKGFwcFZlcnNpb24sIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5pc0NyaXRpY2FsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIGFjdGl2YXRpb24gb2YgdGhpcyB2ZXJzaW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnZlcnNpb25GYWlsZWQoYXBwVmVyc2lvbiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FmZUZldGNoKGV2ZW50LnJlcXVlc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlc3BvbnNlIHdpbGwgYmUgYG51bGxgIG9ubHkgaWYgbm8gYEFwcFZlcnNpb25gIGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgcmVxdWVzdCBvciBpZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYXNzaWduZWQgYEFwcFZlcnNpb25gJ3MgbWFuaWZlc3QgZG9lc24ndCBzcGVjaWZ5IHdoYXQgdG8gZG8gYWJvdXQgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHRoYXQgY2FzZSwganVzdCBmYWxsIGJhY2sgb24gdGhlIG5ldHdvcmsuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNhZmVGZXRjaChldmVudC5yZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYEFwcFZlcnNpb25gIHJldHVybmVkIGEgdXNhYmxlIHJlc3BvbnNlLCBzbyByZXR1cm4gaXQuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBpZGxlIHNjaGVkdWxpbmcgc3lzdGVtLiBUaGUgUHJvbWlzZSByZXR1cm5lZCBieSBgdHJpZ2dlcigpYCB3aWxsIHJlc29sdmUgYWZ0ZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBzcGVjaWZpYyBhbW91bnQgb2YgdGltZSBoYXMgcGFzc2VkLiBJZiBgdHJpZ2dlcigpYCBoYXNuJ3QgYmVlbiBjYWxsZWQgYWdhaW4gYnkgdGhlbiAoZS5nLlxuICAgICAgICAgICAgICAgICAgICAvLyBvbiBhIHN1YnNlcXVlbnQgcmVxdWVzdCksIHRoZSBpZGxlIHRhc2sgcXVldWUgd2lsbCBiZSBkcmFpbmVkIGFuZCB0aGUgYFByb21pc2VgIHdvbid0XG4gICAgICAgICAgICAgICAgICAgIC8vIGJlIHJlc29sdmVkIHVudGlsIHRoYXQgb3BlcmF0aW9uIGlzIGNvbXBsZXRlIGFzIHdlbGwuXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LndhaXRVbnRpbCh0aGlzLmlkbGUudHJpZ2dlcigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQXR0ZW1wdCB0byBxdWlja2x5IHJlYWNoIGEgc3RhdGUgd2hlcmUgaXQncyBzYWZlIHRvIHNlcnZlIHJlc3BvbnNlcy5cbiAgICAgICAgICovXG4gICAgICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIC8vIE9uIGluaXRpYWxpemF0aW9uLCBhbGwgb2YgdGhlIHNlcmlhbGl6ZWQgc3RhdGUgaXMgcmVhZCBvdXQgb2YgdGhlICdjb250cm9sJ1xuICAgICAgICAgICAgICAgIC8vIHRhYmxlLiBUaGlzIGluY2x1ZGVzOlxuICAgICAgICAgICAgICAgIC8vIC0gbWFwIG9mIGhhc2hlcyB0byBtYW5pZmVzdHMgb2YgY3VycmVudGx5IGxvYWRlZCBhcHBsaWNhdGlvbiB2ZXJzaW9uc1xuICAgICAgICAgICAgICAgIC8vIC0gbWFwIG9mIGNsaWVudCBJRHMgdG8gdGhlaXIgcGlubmVkIHZlcnNpb25zXG4gICAgICAgICAgICAgICAgLy8gLSByZWNvcmQgb2YgdGhlIG1vc3QgcmVjZW50bHkgZmV0Y2hlZCBtYW5pZmVzdCBoYXNoXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVzZSB2YWx1ZXMgZG9uJ3QgZXhpc3QgaW4gdGhlIERCLCB0aGVuIHRoaXMgaXMgdGhlIGVpdGhlciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAgICAgICAgIC8vIHRoZSBTVyBoYXMgcnVuIG9yIHRoZSBEQiBzdGF0ZSBoYXMgYmVlbiB3aXBlZCBvciBpcyBpbmNvbnNpc3RlbnQuIEluIHRoYXQgY2FzZSxcbiAgICAgICAgICAgICAgICAvLyBsb2FkIGEgZnJlc2ggY29weSBvZiB0aGUgbWFuaWZlc3QgYW5kIHJlc2V0IHRoZSBzdGF0ZSBmcm9tIHNjcmF0Y2guXG4gICAgICAgICAgICAgICAgLy8gT3BlbiB1cCB0aGUgREIgdGFibGUuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGUgPSB5aWVsZCB0aGlzLmRiLm9wZW4oJ2NvbnRyb2wnKTtcbiAgICAgICAgICAgICAgICAvLyBBdHRlbXB0IHRvIGxvYWQgdGhlIG5lZWRlZCBzdGF0ZSBmcm9tIHRoZSBEQi4gSWYgdGhpcyBmYWlscywgdGhlIGNhdGNoIHt9IGJsb2NrXG4gICAgICAgICAgICAgICAgLy8gd2lsbCBwb3B1bGF0ZSB0aGVzZSB2YXJpYWJsZXMgd2l0aCBmcmVzaGx5IGNvbnN0cnVjdGVkIHZhbHVlcy5cbiAgICAgICAgICAgICAgICBsZXQgbWFuaWZlc3RzLCBhc3NpZ25tZW50cywgbGF0ZXN0O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlYWQgdGhlbSBmcm9tIHRoZSBEQiBzaW11bHRhbmVvdXNseS5cbiAgICAgICAgICAgICAgICAgICAgW21hbmlmZXN0cywgYXNzaWdubWVudHMsIGxhdGVzdF0gPSB5aWVsZCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5yZWFkKCdtYW5pZmVzdHMnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLnJlYWQoJ2Fzc2lnbm1lbnRzJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5yZWFkKCdsYXRlc3QnKSxcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBsYXRlc3QgbWFuaWZlc3QgaXMgY29ycmVjdGx5IGluc3RhbGxlZC4gSWYgbm90IChlLmcuIGNvcnJ1cHRlZCBkYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQgY291bGQgc3RheSBsb2NrZWQgaW4gRVhJU1RJTkdfQ0xJRU5UU19PTkxZIG9yIFNBRkVfTU9ERSBzdGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZlcnNpb25zLmhhcyhsYXRlc3QubGF0ZXN0KSAmJiAhbWFuaWZlc3RzLmhhc093blByb3BlcnR5KGxhdGVzdC5sYXRlc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYnVnZ2VyLmxvZyhgTWlzc2luZyBtYW5pZmVzdCBmb3IgbGF0ZXN0IHZlcnNpb24gaGFzaCAke2xhdGVzdC5sYXRlc3R9YCwgJ2luaXRpYWxpemU6IHJlYWQgZnJvbSBEQicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIG1hbmlmZXN0IGZvciBsYXRlc3QgaGFzaCAke2xhdGVzdC5sYXRlc3R9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bGx5IGxvYWRlZCBmcm9tIHNhdmVkIHN0YXRlLiBUaGlzIGltcGxpZXMgYSBtYW5pZmVzdCBleGlzdHMsIHNvXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB1cGRhdGUgY2hlY2sgbmVlZHMgdG8gaGFwcGVuIGluIHRoZSBiYWNrZ3JvdW5kLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlkbGUuc2NoZWR1bGUoJ2luaXQgcG9zdC1sb2FkICh1cGRhdGUsIGNsZWFudXApJywgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5jaGVja0ZvclVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmNsZWFudXBDYWNoZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRvIC0gY2xlYW51cCBmYWlsZWQuIEp1c3QgbG9nIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWdnZXIubG9nKGVyciwgJ2NsZWFudXBDYWNoZXMgQCBpbml0IHBvc3QtbG9hZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyB3ZW50IHdyb25nLiBUcnkgdG8gc3RhcnQgb3ZlciBieSBmZXRjaGluZyBhIG5ldyBtYW5pZmVzdCBmcm9tIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBzZXJ2ZXIgYW5kIGJ1aWxkaW5nIHVwIGFuIGVtcHR5IGluaXRpYWwgc3RhdGUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hbmlmZXN0ID0geWllbGQgdGhpcy5mZXRjaExhdGVzdE1hbmlmZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBoYXNoTWFuaWZlc3QobWFuaWZlc3QpO1xuICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgbWFuaWZlc3RzW2hhc2hdID0gbWFuaWZlc3Q7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzID0ge307XG4gICAgICAgICAgICAgICAgICAgIGxhdGVzdCA9IHsgbGF0ZXN0OiBoYXNoIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNhdmUgdGhlIGluaXRpYWwgc3RhdGUgdG8gdGhlIERCLlxuICAgICAgICAgICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS53cml0ZSgnbWFuaWZlc3RzJywgbWFuaWZlc3RzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLndyaXRlKCdhc3NpZ25tZW50cycsIGFzc2lnbm1lbnRzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLndyaXRlKCdsYXRlc3QnLCBsYXRlc3QpLFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgZWl0aGVyIHRoZSBzdGF0ZSBoYXMgYmVlbiBsb2FkZWQgc3VjY2Vzc2Z1bGx5LCBvciBmcmVzaCBzdGF0ZVxuICAgICAgICAgICAgICAgIC8vIHdpdGggYSBuZXcgY29weSBvZiB0aGUgbWFuaWZlc3QgaGFzIGJlZW4gcHJvZHVjZWQuIEF0IHRoaXMgcG9pbnQsIHRoZSBgRHJpdmVyYFxuICAgICAgICAgICAgICAgIC8vIGNhbiBoYXZlIGl0cyBpbnRlcm5hbHMgaHlkcmF0ZWQgZnJvbSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgYHZlcnNpb25zYCBtYXAgYnkgc2V0dGluZyBlYWNoIGhhc2ggdG8gYSBuZXcgYEFwcFZlcnNpb25gIGluc3RhbmNlXG4gICAgICAgICAgICAgICAgLy8gZm9yIHRoYXQgbWFuaWZlc3QuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWFuaWZlc3RzKS5mb3JFYWNoKChoYXNoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hbmlmZXN0ID0gbWFuaWZlc3RzW2hhc2hdO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbWFuaWZlc3QgaXMgbmV3bHkgaW5pdGlhbGl6ZWQsIGFuIEFwcFZlcnNpb24gbWF5IGhhdmUgYWxyZWFkeSBiZWVuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZWQgZm9yIGl0LlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmVyc2lvbnMuaGFzKGhhc2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb25zLnNldChoYXNoLCBuZXcgQXBwVmVyc2lvbih0aGlzLnNjb3BlLCB0aGlzLmFkYXB0ZXIsIHRoaXMuZGIsIHRoaXMuaWRsZSwgdGhpcy5kZWJ1Z2dlciwgbWFuaWZlc3QsIGhhc2gpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIE1hcCBlYWNoIGNsaWVudCBJRCB0byBpdHMgYXNzb2NpYXRlZCBoYXNoLiBBbG9uZyB0aGUgd2F5LCB2ZXJpZnkgdGhhdCB0aGUgaGFzaFxuICAgICAgICAgICAgICAgIC8vIGlzIHN0aWxsIHZhbGlkIGZvciB0aGF0IGNsaWVudCBJRC4gSXQgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZSBmb3IgYSBjbGllbnQgdG9cbiAgICAgICAgICAgICAgICAvLyBzdGlsbCBiZSBhc3NvY2lhdGVkIHdpdGggYSBoYXNoIHRoYXQgd2FzIHNpbmNlIHJlbW92ZWQgZnJvbSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYXNzaWdubWVudHMpLmZvckVhY2goKGNsaWVudElkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBhc3NpZ25tZW50c1tjbGllbnRJZF07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlcnNpb25zLmhhcyhoYXNoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRWZXJzaW9uTWFwLnNldChjbGllbnRJZCwgaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudFZlcnNpb25NYXAuc2V0KGNsaWVudElkLCBsYXRlc3QubGF0ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWdnZXIubG9nKGBVbmtub3duIHZlcnNpb24gJHtoYXNofSBtYXBwZWQgZm9yIGNsaWVudCAke2NsaWVudElkfSwgdXNpbmcgbGF0ZXN0IGluc3RlYWRgLCBgaW5pdGlhbGl6ZTogbWFwIGFzc2lnbm1lbnRzYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGxhdGVzdCB2ZXJzaW9uLlxuICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0SGFzaCA9IGxhdGVzdC5sYXRlc3Q7XG4gICAgICAgICAgICAgICAgLy8gRmluYWxseSwgYXNzZXJ0IHRoYXQgdGhlIGxhdGVzdCB2ZXJzaW9uIGlzIGluIGZhY3QgbG9hZGVkLlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52ZXJzaW9ucy5oYXMobGF0ZXN0LmxhdGVzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhcmlhbnQgdmlvbGF0ZWQgKGluaXRpYWxpemUpOiBsYXRlc3QgaGFzaCAke2xhdGVzdC5sYXRlc3R9IGhhcyBubyBrbm93biBtYW5pZmVzdGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBGaW5hbGx5LCB3YWl0IGZvciB0aGUgc2NoZWR1bGluZyBvZiBpbml0aWFsaXphdGlvbiBvZiBhbGwgdmVyc2lvbnMgaW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gbWFuaWZlc3QuIE9yZGluYXJpbHkgdGhpcyBqdXN0IHNjaGVkdWxlcyB0aGUgaW5pdGlhbGl6YXRpb25zIHRvIGhhcHBlbiBkdXJpbmdcbiAgICAgICAgICAgICAgICAvLyB0aGUgbmV4dCBpZGxlIHBlcmlvZCwgYnV0IGluIGRldmVsb3BtZW50IG1vZGUgdGhpcyBtaWdodCBhY3R1YWxseSB3YWl0IGZvciB0aGVcbiAgICAgICAgICAgICAgICAvLyBmdWxsIGluaXRpYWxpemF0aW9uLlxuICAgICAgICAgICAgICAgIC8vIElmIGFueSBvZiB0aGVzZSBpbml0aWFsaXphdGlvbnMgZmFpbCwgdmVyc2lvbkZhaWxlZCgpIHdpbGwgYmUgY2FsbGVkIGVpdGhlclxuICAgICAgICAgICAgICAgIC8vIHN5bmNocm9ub3VzbHkgb3IgYXN5bmNocm9ub3VzbHkgdG8gaGFuZGxlIHRoZSBmYWlsdXJlIGFuZCByZS1tYXAgY2xpZW50cy5cbiAgICAgICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhtYW5pZmVzdHMpLm1hcCgoaGFzaCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXR0ZW1wdCB0byBzY2hlZHVsZSBvciBpbml0aWFsaXplIHRoaXMgdmVyc2lvbi4gSWYgdGhpcyBvcGVyYXRpb24gaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NmdWwsIHRoZW4gaW5pdGlhbGl6YXRpb24gZWl0aGVyIHN1Y2NlZWRlZCBvciB3YXMgc2NoZWR1bGVkLiBJZlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgZmFpbHMsIHRoZW4gZnVsbCBpbml0aWFsaXphdGlvbiB3YXMgYXR0ZW1wdGVkIGFuZCBmYWlsZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnNjaGVkdWxlSW5pdGlhbGl6YXRpb24odGhpcy52ZXJzaW9ucy5nZXQoaGFzaCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWdnZXIubG9nKGVyciwgYGluaXRpYWxpemU6IHNjaGVkdWxlIGluaXQgb2YgJHtoYXNofWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxvb2t1cFZlcnNpb25CeUhhc2goaGFzaCwgZGVidWdOYW1lID0gJ2xvb2t1cFZlcnNpb25CeUhhc2gnKSB7XG4gICAgICAgICAgICAvLyBUaGUgdmVyc2lvbiBzaG91bGQgZXhpc3QsIGJ1dCBjaGVjayBqdXN0IGluIGNhc2UuXG4gICAgICAgICAgICBpZiAoIXRoaXMudmVyc2lvbnMuaGFzKGhhc2gpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhcmlhbnQgdmlvbGF0ZWQgKCR7ZGVidWdOYW1lfSk6IHdhbnQgQXBwVmVyc2lvbiBmb3IgJHtoYXNofSBidXQgbm90IGxvYWRlZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmVyc2lvbnMuZ2V0KGhhc2gpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNpZGUgd2hpY2ggdmVyc2lvbiBvZiB0aGUgbWFuaWZlc3QgdG8gdXNlIGZvciB0aGUgZXZlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBhc3NpZ25WZXJzaW9uKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIC8vIEZpcnN0LCBjaGVjayB3aGV0aGVyIHRoZSBldmVudCBoYXMgYSAobm9uIGVtcHR5KSBjbGllbnQgSUQuIElmIGl0IGRvZXMsIHRoZSB2ZXJzaW9uIG1heVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgYmUgYXNzb2NpYXRlZC5cbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnRJZCA9IGV2ZW50LmNsaWVudElkO1xuICAgICAgICAgICAgICAgIGlmIChjbGllbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhbiBhc3NpZ25lZCBjbGllbnQgaWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaWVudFZlcnNpb25NYXAuaGFzKGNsaWVudElkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlcmUgaXMgYW4gYXNzaWdubWVudCBmb3IgdGhpcyBjbGllbnQgYWxyZWFkeS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc2ggPSB0aGlzLmNsaWVudFZlcnNpb25NYXAuZ2V0KGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcHBWZXJzaW9uID0gdGhpcy5sb29rdXBWZXJzaW9uQnlIYXNoKGhhc2gsICdhc3NpZ25WZXJzaW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPcmRpbmFyaWx5LCB0aGlzIGNsaWVudCB3b3VsZCBiZSBzZXJ2ZWQgZnJvbSBpdHMgYXNzaWduZWQgdmVyc2lvbi4gQnV0LCBpZiB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1ZXN0IGlzIGEgbmF2aWdhdGlvbiByZXF1ZXN0LCB0aGlzIGNsaWVudCBjYW4gYmUgdXBkYXRlZCB0byB0aGUgbGF0ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2ZXJzaW9uIGltbWVkaWF0ZWx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IERyaXZlclJlYWR5U3RhdGUuTk9STUFMICYmIGhhc2ggIT09IHRoaXMubGF0ZXN0SGFzaCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcFZlcnNpb24uaXNOYXZpZ2F0aW9uUmVxdWVzdChldmVudC5yZXF1ZXN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGlzIGNsaWVudCB0byB0aGUgbGF0ZXN0IHZlcnNpb24gaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGF0ZXN0SGFzaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFyaWFudCB2aW9sYXRlZCAoYXNzaWduVmVyc2lvbik6IGxhdGVzdEhhc2ggd2FzIG51bGxgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0geWllbGQgdGhpcy5zY29wZS5jbGllbnRzLmdldChjbGllbnRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy51cGRhdGVDbGllbnQoY2xpZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBWZXJzaW9uID0gdGhpcy5sb29rdXBWZXJzaW9uQnlIYXNoKHRoaXMubGF0ZXN0SGFzaCwgJ2Fzc2lnblZlcnNpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IG1ha2Ugc3VyZSB0aGUgdmVyc2lvbiBpcyB2YWxpZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcHBWZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgZmlyc3QgdGltZSB0aGlzIGNsaWVudCBJRCBoYXMgYmVlbiBzZWVuLiBXaGV0aGVyIHRoZSBTVyBpcyBpbiBhXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZSB0byBoYW5kbGUgbmV3IGNsaWVudHMgZGVwZW5kcyBvbiB0aGUgY3VycmVudCByZWFkaW5lc3Mgc3RhdGUsIHNvIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0IGZpcnN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IERyaXZlclJlYWR5U3RhdGUuTk9STUFMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXQncyBub3Qgc2FmZSB0byBzZXJ2ZSBuZXcgY2xpZW50cyBpbiB0aGUgY3VycmVudCBzdGF0ZS4gSXQncyBwb3NzaWJsZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhbiBleGlzdGluZyBjbGllbnQgd2hpY2ggaGFzIG5vdCBiZWVuIG1hcHBlZCB5ZXQgKHNlZSBiZWxvdykgYnV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXZlbiBpZiB0aGF0IGlzIHRoZSBjYXNlLCBpdCdzIGludmFsaWQgdG8gbWFrZSBhbiBhc3NpZ25tZW50IHRvIGEga25vd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnZhbGlkIHZlcnNpb24sIGV2ZW4gaWYgdGhhdCBhc3NpZ25tZW50IHdhcyBwcmV2aW91c2x5IGltcGxpY2l0LiBSZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1bmRlZmluZWQgaGVyZSB0byBsZXQgdGhlIGNhbGxlciBrbm93IHRoYXQgbm8gYXNzaWdubWVudCBpcyBwb3NzaWJsZSBhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgdGltZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0J3Mgc2FmZSB0byBoYW5kbGUgdGhpcyByZXF1ZXN0LiBUd28gY2FzZXMgYXBwbHkuIEVpdGhlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEpIHRoZSBicm93c2VyIGFzc2lnbmVkIGEgY2xpZW50IElEIGF0IHRoZSB0aW1lIG9mIHRoZSBuYXZpZ2F0aW9uIHJlcXVlc3QsIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgdGhpcyBpcyB0cnVseSB0aGUgZmlyc3QgdGltZSBzZWVpbmcgdGhpcyBjbGllbnQsIG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAyKSBhIG5hdmlnYXRpb24gcmVxdWVzdCBjYW1lIHByZXZpb3VzbHkgZnJvbSB0aGUgc2FtZSBjbGllbnQsIGJ1dCB3aXRoIG5vIGNsaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgSUQgYXR0YWNoZWQuIEJyb3dzZXJzIGRvIHRoaXMgdG8gYXZvaWQgY3JlYXRpbmcgYSBjbGllbnQgdW5kZXIgdGhlIG9yaWdpbiBpblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgdGhlIGV2ZW50IHRoZSBuYXZpZ2F0aW9uIHJlcXVlc3QgaXMganVzdCByZWRpcmVjdGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluIGNhc2UgMSwgdGhlIGxhdGVzdCB2ZXJzaW9uIGNhbiBzYWZlbHkgYmUgdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluIGNhc2UgMiwgdGhlIGxhdGVzdCB2ZXJzaW9uIGNhbiBiZSB1c2VkLCB3aXRoIHRoZSBhc3N1bXB0aW9uIHRoYXQgdGhlIHByZXZpb3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuYXZpZ2F0aW9uIHJlcXVlc3Qgd2FzIGFuc3dlcmVkIHVuZGVyIHRoZSBzYW1lIHZlcnNpb24uIFRoaXMgYXNzdW1wdGlvbiByZWxpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uIHRoZSBmYWN0IHRoYXQgaXQncyB1bmxpa2VseSBhbiB1cGRhdGUgd2lsbCBjb21lIGluIGJldHdlZW4gdGhlIG5hdmlnYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVlc3QgYW5kIHJlcXVlc3RzIGZvciBzdWJzZXF1ZW50IHJlc291cmNlcyBvbiB0aGF0IHBhZ2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJzdCB2YWxpZGF0ZSB0aGUgY3VycmVudCBzdGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhdGVzdEhhc2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFyaWFudCB2aW9sYXRlZCAoYXNzaWduVmVyc2lvbik6IGxhdGVzdEhhc2ggd2FzIG51bGxgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBpbiB0aGlzIGNsaWVudCBJRCB0byB0aGUgY3VycmVudCBsYXRlc3QgdmVyc2lvbiwgaW5kZWZpbml0ZWx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRWZXJzaW9uTWFwLnNldChjbGllbnRJZCwgdGhpcy5sYXRlc3RIYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuc3luYygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBsYXRlc3QgYEFwcFZlcnNpb25gLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9va3VwVmVyc2lvbkJ5SGFzaCh0aGlzLmxhdGVzdEhhc2gsICdhc3NpZ25WZXJzaW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGNsaWVudCBJRCB3YXMgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXF1ZXN0LiBUaGlzIG11c3QgYmUgYSBuYXZpZ2F0aW9uIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIGEgbmV3IGNsaWVudC4gRmlyc3QgY2hlY2sgdGhhdCB0aGUgU1cgaXMgYWNjZXB0aW5nIG5ldyBjbGllbnRzLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gRHJpdmVyUmVhZHlTdGF0ZS5OT1JNQUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlcnZlIGl0IHdpdGggdGhlIGxhdGVzdCB2ZXJzaW9uLCBhbmQgYXNzdW1lIHRoYXQgdGhlIGNsaWVudCB3aWxsIGFjdHVhbGx5IGdldFxuICAgICAgICAgICAgICAgICAgICAvLyBhc3NvY2lhdGVkIHdpdGggdGhhdCB2ZXJzaW9uIG9uIHRoZSBuZXh0IHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0IHZhbGlkYXRlIHRoZSBjdXJyZW50IHN0YXRlLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXRlc3RIYXNoID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFyaWFudCB2aW9sYXRlZCAoYXNzaWduVmVyc2lvbik6IGxhdGVzdEhhc2ggd2FzIG51bGxgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGxhdGVzdCBgQXBwVmVyc2lvbmAuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvb2t1cFZlcnNpb25CeUhhc2godGhpcy5sYXRlc3RIYXNoLCAnYXNzaWduVmVyc2lvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZldGNoTGF0ZXN0TWFuaWZlc3QoaWdub3JlT2ZmbGluZUVycm9yID0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgdGhpcy5zYWZlRmV0Y2godGhpcy5hZGFwdGVyLm5ld1JlcXVlc3QoJ25nc3cuanNvbj9uZ3N3LWNhY2hlLWJ1c3Q9JyArIE1hdGgucmFuZG9tKCkpKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmRlbGV0ZUFsbENhY2hlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5zY29wZS5yZWdpc3RyYXRpb24udW5yZWdpc3RlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChyZXMuc3RhdHVzID09PSA1MDMgfHwgcmVzLnN0YXR1cyA9PT0gNTA0KSAmJiBpZ25vcmVPZmZsaW5lRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWFuaWZlc3QgZmV0Y2ggZmFpbGVkISAoc3RhdHVzOiAke3Jlcy5zdGF0dXN9KWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RVcGRhdGVDaGVjayA9IHRoaXMuYWRhcHRlci50aW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlQWxsQ2FjaGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZU5hbWVzID0geWllbGQgdGhpcy5zY29wZS5jYWNoZXMua2V5cygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG93bkNhY2hlTmFtZXMgPSBjYWNoZU5hbWVzLmZpbHRlcihuYW1lID0+IG5hbWUuc3RhcnRzV2l0aChgJHt0aGlzLmFkYXB0ZXIuY2FjaGVOYW1lUHJlZml4fTpgKSk7XG4gICAgICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwob3duQ2FjaGVOYW1lcy5tYXAobmFtZSA9PiB0aGlzLnNjb3BlLmNhY2hlcy5kZWxldGUobmFtZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTY2hlZHVsZSB0aGUgU1cncyBhdHRlbXB0IHRvIHJlYWNoIGEgZnVsbHkgcHJlZmV0Y2hlZCBzdGF0ZSBmb3IgdGhlIGdpdmVuIEFwcFZlcnNpb25cbiAgICAgICAgICogd2hlbiB0aGUgU1cgaXMgbm90IGJ1c3kgYW5kIGhhcyBjb25uZWN0aXZpdHkuIFRoaXMgcmV0dXJucyBhIFByb21pc2Ugd2hpY2ggbXVzdCBiZVxuICAgICAgICAgKiBhd2FpdGVkLCBhcyB1bmRlciBzb21lIGNvbmRpdGlvbnMgdGhlIEFwcFZlcnNpb24gbWlnaHQgYmUgaW5pdGlhbGl6ZWQgaW1tZWRpYXRlbHkuXG4gICAgICAgICAqL1xuICAgICAgICBzY2hlZHVsZUluaXRpYWxpemF0aW9uKGFwcFZlcnNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGFwcFZlcnNpb24uaW5pdGlhbGl6ZUZ1bGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1Z2dlci5sb2coZXJyLCBgaW5pdGlhbGl6ZUZ1bGx5IGZvciAke2FwcFZlcnNpb24ubWFuaWZlc3RIYXNofWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy52ZXJzaW9uRmFpbGVkKGFwcFZlcnNpb24sIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBiZXR0ZXIgbG9naWMgZm9yIGRldGVjdGluZyBsb2NhbGhvc3QuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NvcGUucmVnaXN0cmF0aW9uLnNjb3BlLmluZGV4T2YoJzovL2xvY2FsaG9zdCcpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxpemUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlLnNjaGVkdWxlKGBpbml0aWFsaXphdGlvbigke2FwcFZlcnNpb24ubWFuaWZlc3RIYXNofSlgLCBpbml0aWFsaXplKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZlcnNpb25GYWlsZWQoYXBwVmVyc2lvbiwgZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgcGFydGljdWxhciBBcHBWZXJzaW9uIGlzIGJyb2tlbi4gRmlyc3QsIGZpbmQgdGhlIG1hbmlmZXN0IGhhc2guXG4gICAgICAgICAgICAgICAgY29uc3QgYnJva2VuID0gQXJyYXkuZnJvbSh0aGlzLnZlcnNpb25zLmVudHJpZXMoKSkuZmluZCgoW2hhc2gsIHZlcnNpb25dKSA9PiB2ZXJzaW9uID09PSBhcHBWZXJzaW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoYnJva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB2ZXJzaW9uIGlzIG5vIGxvbmdlciBpbiB1c2UgYW55d2F5LCBzbyBub2JvZHkgY2FyZXMuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgYnJva2VuSGFzaCA9IGJyb2tlblswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZmZlY3RlZENsaWVudHMgPSBBcnJheS5mcm9tKHRoaXMuY2xpZW50VmVyc2lvbk1hcC5lbnRyaWVzKCkpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKFtjbGllbnRJZCwgaGFzaF0pID0+IGhhc2ggPT09IGJyb2tlbkhhc2gpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKFtjbGllbnRJZF0pID0+IGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBub3RpZnkgYWZmZWN0ZWQgYXBwcy5cbiAgICAgICAgICAgICAgICAvLyBUaGUgYWN0aW9uIHRha2VuIGRlcGVuZHMgb24gd2hldGhlciB0aGUgYnJva2VuIG1hbmlmZXN0IGlzIHRoZSBhY3RpdmUgKGxhdGVzdCkgb3Igbm90LlxuICAgICAgICAgICAgICAgIC8vIElmIHNvLCB0aGUgU1cgY2Fubm90IGFjY2VwdCBuZXcgY2xpZW50cywgYnV0IGNhbiBjb250aW51ZSB0byBzZXJ2aWNlIG9sZCBvbmVzLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhdGVzdEhhc2ggPT09IGJyb2tlbkhhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGxhdGVzdCBtYW5pZmVzdCBpcyBicm9rZW4uIFRoaXMgbWVhbnMgdGhhdCBuZXcgY2xpZW50cyBhcmUgYXQgdGhlIG1lcmN5IG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBuZXR3b3JrLCBidXQgY2FjaGVzIGNvbnRpbnVlIHRvIGJlIHZhbGlkIGZvciBwcmV2aW91cyB2ZXJzaW9ucy4gVGhpcyBpc1xuICAgICAgICAgICAgICAgICAgICAvLyB1bmZvcnR1bmF0ZSBidXQgdW5hdm9pZGFibGUuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBEcml2ZXJSZWFkeVN0YXRlLkVYSVNUSU5HX0NMSUVOVFNfT05MWTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU1lc3NhZ2UgPSBgRGVncmFkZWQgZHVlIHRvOiAke2Vycm9yVG9TdHJpbmcoZXJyKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyBDYW5jZWwgdGhlIGJpbmRpbmcgZm9yIHRoZSBhZmZlY3RlZCBjbGllbnRzLlxuICAgICAgICAgICAgICAgICAgICBhZmZlY3RlZENsaWVudHMuZm9yRWFjaChjbGllbnRJZCA9PiB0aGlzLmNsaWVudFZlcnNpb25NYXAuZGVsZXRlKGNsaWVudElkKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbGF0ZXN0IHZlcnNpb24gaXMgdmlhYmxlLCBidXQgdGhpcyBvbGRlciB2ZXJzaW9uIGlzbid0LiBUaGUgb25seVxuICAgICAgICAgICAgICAgICAgICAvLyBwb3NzaWJsZSByZW1lZHkgaXMgdG8gc3RvcCBzZXJ2aW5nIHRoZSBvbGRlciB2ZXJzaW9uIGFuZCBnbyB0byB0aGUgbmV0d29yay5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHV0IHRoZSBhZmZlY3RlZCBjbGllbnRzIG9uIHRoZSBsYXRlc3QgdmVyc2lvbi5cbiAgICAgICAgICAgICAgICAgICAgYWZmZWN0ZWRDbGllbnRzLmZvckVhY2goY2xpZW50SWQgPT4gdGhpcy5jbGllbnRWZXJzaW9uTWFwLnNldChjbGllbnRJZCwgdGhpcy5sYXRlc3RIYXNoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuc3luYygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBhcmUgYWxyZWFkeSBpbiBhIGJhZCBzdGF0ZS4gTm8gbmVlZCB0byBtYWtlIHRoaW5ncyB3b3JzZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gSnVzdCBsb2cgdGhlIGVycm9yIGFuZCBtb3ZlIG9uLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYnVnZ2VyLmxvZyhlcnIyLCBgRHJpdmVyLnZlcnNpb25GYWlsZWQoJHtlcnIubWVzc2FnZSB8fCBlcnJ9KWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNldHVwVXBkYXRlKG1hbmlmZXN0LCBoYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZlcnNpb24gPSBuZXcgQXBwVmVyc2lvbih0aGlzLnNjb3BlLCB0aGlzLmFkYXB0ZXIsIHRoaXMuZGIsIHRoaXMuaWRsZSwgdGhpcy5kZWJ1Z2dlciwgbWFuaWZlc3QsIGhhc2gpO1xuICAgICAgICAgICAgICAgIC8vIEZpcnN0bHksIGNoZWNrIGlmIHRoZSBtYW5pZmVzdCB2ZXJzaW9uIGlzIGNvcnJlY3QuXG4gICAgICAgICAgICAgICAgaWYgKG1hbmlmZXN0LmNvbmZpZ1ZlcnNpb24gIT09IFNVUFBPUlRFRF9DT05GSUdfVkVSU0lPTikge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmRlbGV0ZUFsbENhY2hlcygpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnNjb3BlLnJlZ2lzdHJhdGlvbi51bnJlZ2lzdGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjb25maWcgdmVyc2lvbjogZXhwZWN0ZWQgJHtTVVBQT1JURURfQ09ORklHX1ZFUlNJT059LCBnb3QgJHttYW5pZmVzdC5jb25maWdWZXJzaW9ufS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ2F1c2UgdGhlIG5ldyB2ZXJzaW9uIHRvIGJlY29tZSBmdWxseSBpbml0aWFsaXplZC4gSWYgdGhpcyBmYWlscywgdGhlbiB0aGVcbiAgICAgICAgICAgICAgICAvLyB2ZXJzaW9uIHdpbGwgbm90IGJlIGF2YWlsYWJsZSBmb3IgdXNlLlxuICAgICAgICAgICAgICAgIHlpZWxkIG5ld1ZlcnNpb24uaW5pdGlhbGl6ZUZ1bGx5KHRoaXMpO1xuICAgICAgICAgICAgICAgIC8vIEluc3RhbGwgdGhpcyBhcyBhbiBhY3RpdmUgdmVyc2lvbiBvZiB0aGUgYXBwLlxuICAgICAgICAgICAgICAgIHRoaXMudmVyc2lvbnMuc2V0KGhhc2gsIG5ld1ZlcnNpb24pO1xuICAgICAgICAgICAgICAgIC8vIEZ1dHVyZSBuZXcgY2xpZW50cyB3aWxsIHVzZSB0aGlzIGhhc2ggYXMgdGhlIGxhdGVzdCB2ZXJzaW9uLlxuICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0SGFzaCA9IGhhc2g7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGluIGBFWElTVElOR19DTElFTlRTX09OTFlgIG1vZGUgKG1lYW5pbmcgd2UgZGlkbid0IGhhdmUgYSBjbGVhbiBjb3B5IG9mIHRoZSBsYXN0XG4gICAgICAgICAgICAgICAgLy8gbGF0ZXN0IHZlcnNpb24pLCB3ZSBjYW4gbm93IHJlY292ZXIgdG8gYE5PUk1BTGAgbW9kZSBhbmQgc3RhcnQgYWNjZXB0aW5nIG5ldyBjbGllbnRzLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBEcml2ZXJSZWFkeVN0YXRlLkVYSVNUSU5HX0NMSUVOVFNfT05MWSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gRHJpdmVyUmVhZHlTdGF0ZS5OT1JNQUw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVNZXNzYWdlID0gJyhub21pbmFsKSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuc3luYygpO1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMubm90aWZ5Q2xpZW50c0Fib3V0VXBkYXRlKG5ld1ZlcnNpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tGb3JVcGRhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGxldCBoYXNoID0gJyh1bmtub3duKSc7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFuaWZlc3QgPSB5aWVsZCB0aGlzLmZldGNoTGF0ZXN0TWFuaWZlc3QodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYW5pZmVzdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xpZW50IG9yIHNlcnZlciBvZmZsaW5lLiBVbmFibGUgdG8gY2hlY2sgZm9yIHVwZGF0ZXMgYXQgdGhpcyB0aW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgdG8gc2VydmljZSBjbGllbnRzIChleGlzdGluZyBhbmQgbmV3KS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWdnZXIubG9nKCdDaGVjayBmb3IgdXBkYXRlIGFib3J0ZWQuIChDbGllbnQgb3Igc2VydmVyIG9mZmxpbmUuKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhhc2ggPSBoYXNoTWFuaWZlc3QobWFuaWZlc3QpO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB3aGV0aGVyIHRoaXMgaXMgcmVhbGx5IGFuIHVwZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmVyc2lvbnMuaGFzKGhhc2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5zZXR1cFVwZGF0ZShtYW5pZmVzdCwgaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWdnZXIubG9nKGVyciwgYEVycm9yIG9jY3VycmVkIHdoaWxlIHVwZGF0aW5nIHRvIG1hbmlmZXN0ICR7aGFzaH1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IERyaXZlclJlYWR5U3RhdGUuRVhJU1RJTkdfQ0xJRU5UU19PTkxZO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlTWVzc2FnZSA9IGBEZWdyYWRlZCBkdWUgdG8gZmFpbGVkIGluaXRpYWxpemF0aW9uOiAke2Vycm9yVG9TdHJpbmcoZXJyKX1gO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN5bmNocm9uaXplIHRoZSBleGlzdGluZyBzdGF0ZSB0byB0aGUgdW5kZXJseWluZyBkYXRhYmFzZS5cbiAgICAgICAgICovXG4gICAgICAgIHN5bmMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIC8vIE9wZW4gdXAgdGhlIERCIHRhYmxlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0geWllbGQgdGhpcy5kYi5vcGVuKCdjb250cm9sJyk7XG4gICAgICAgICAgICAgICAgLy8gQ29uc3RydWN0IGEgc2VyaWFsaXphYmxlIG1hcCBvZiBoYXNoZXMgdG8gbWFuaWZlc3RzLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1hbmlmZXN0cyA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMudmVyc2lvbnMuZm9yRWFjaCgodmVyc2lvbiwgaGFzaCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdHNbaGFzaF0gPSB2ZXJzaW9uLm1hbmlmZXN0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIENvbnN0cnVjdCBhIHNlcmlhbGl6YWJsZSBtYXAgb2YgY2xpZW50IGlkcyB0byB2ZXJzaW9uIGhhc2hlcy5cbiAgICAgICAgICAgICAgICBjb25zdCBhc3NpZ25tZW50cyA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50VmVyc2lvbk1hcC5mb3JFYWNoKChoYXNoLCBjbGllbnRJZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50c1tjbGllbnRJZF0gPSBoYXNoO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIFJlY29yZCB0aGUgbGF0ZXN0IGVudHJ5LiBTaW5jZSB0aGlzIGlzIGEgc3luYyB3aGljaCBpcyBuZWNlc3NhcmlseSBoYXBwZW5pbmcgYWZ0ZXJcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXphdGlvbiwgbGF0ZXN0SGFzaCBzaG91bGQgYWx3YXlzIGJlIHZhbGlkLlxuICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXN0OiB0aGlzLmxhdGVzdEhhc2gsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBTeW5jaHJvbml6ZSBhbGwgb2YgdGhlc2UuXG4gICAgICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICB0YWJsZS53cml0ZSgnbWFuaWZlc3RzJywgbWFuaWZlc3RzKSxcbiAgICAgICAgICAgICAgICAgICAgdGFibGUud3JpdGUoJ2Fzc2lnbm1lbnRzJywgYXNzaWdubWVudHMpLFxuICAgICAgICAgICAgICAgICAgICB0YWJsZS53cml0ZSgnbGF0ZXN0JywgbGF0ZXN0KSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFudXBDYWNoZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIC8vIFF1ZXJ5IGZvciBhbGwgY3VycmVudGx5IGFjdGl2ZSBjbGllbnRzLCBhbmQgbGlzdCB0aGUgY2xpZW50IGlkcy4gVGhpcyBtYXkgc2tpcFxuICAgICAgICAgICAgICAgIC8vIHNvbWUgY2xpZW50cyBpbiB0aGUgYnJvd3NlciBiYWNrLWZvcndhcmQgY2FjaGUsIGJ1dCBub3QgbXVjaCBjYW4gYmUgZG9uZSBhYm91dFxuICAgICAgICAgICAgICAgIC8vIHRoYXQuXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlQ2xpZW50cyA9ICh5aWVsZCB0aGlzLnNjb3BlLmNsaWVudHMubWF0Y2hBbGwoKSkubWFwKGNsaWVudCA9PiBjbGllbnQuaWQpO1xuICAgICAgICAgICAgICAgIC8vIEEgc2ltcGxlIGxpc3Qgb2YgY2xpZW50IGlkcyB0aGF0IHRoZSBTVyBoYXMga2VwdCB0cmFjayBvZi4gU3VidHJhY3RpbmdcbiAgICAgICAgICAgICAgICAvLyBhY3RpdmVDbGllbnRzIGZyb20gdGhpcyBsaXN0IHdpbGwgcmVzdWx0IGluIHRoZSBzZXQgb2YgY2xpZW50IGlkcyB3aGljaCBhcmVcbiAgICAgICAgICAgICAgICAvLyBiZWluZyB0cmFja2VkIGJ1dCBhcmUgbm8gbG9uZ2VyIHVzZWQgaW4gdGhlIGJyb3dzZXIsIGFuZCB0aHVzIGNhbiBiZSBjbGVhbmVkIHVwLlxuICAgICAgICAgICAgICAgIGNvbnN0IGtub3duQ2xpZW50cyA9IEFycmF5LmZyb20odGhpcy5jbGllbnRWZXJzaW9uTWFwLmtleXMoKSk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNsaWVudHMgaW4gdGhlIGNsaWVudFZlcnNpb25NYXAgdGhhdCBhcmUgbm8gbG9uZ2VyIGFjdGl2ZS5cbiAgICAgICAgICAgICAgICBrbm93bkNsaWVudHMuZmlsdGVyKGlkID0+IGFjdGl2ZUNsaWVudHMuaW5kZXhPZihpZCkgPT09IC0xKVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChpZCA9PiB0aGlzLmNsaWVudFZlcnNpb25NYXAuZGVsZXRlKGlkKSk7XG4gICAgICAgICAgICAgICAgLy8gTmV4dCwgZGV0ZXJtaW5lIHRoZSBzZXQgb2YgdmVyc2lvbnMgd2hpY2ggYXJlIHN0aWxsIHVzZWQuIEFsbCBvdGhlcnMgY2FuIGJlXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlZC5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VkVmVyc2lvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRWZXJzaW9uTWFwLmZvckVhY2goKHZlcnNpb24sIF8pID0+IHVzZWRWZXJzaW9ucy5hZGQodmVyc2lvbikpO1xuICAgICAgICAgICAgICAgIC8vIENvbGxlY3QgYWxsIG9ic29sZXRlIHZlcnNpb25zIGJ5IGZpbHRlcmluZyBvdXQgdXNlZCB2ZXJzaW9ucyBmcm9tIHRoZSBzZXQgb2YgYWxsIHZlcnNpb25zLlxuICAgICAgICAgICAgICAgIGNvbnN0IG9ic29sZXRlVmVyc2lvbnMgPSBBcnJheS5mcm9tKHRoaXMudmVyc2lvbnMua2V5cygpKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHZlcnNpb24gPT4gIXVzZWRWZXJzaW9ucy5oYXModmVyc2lvbikgJiYgdmVyc2lvbiAhPT0gdGhpcy5sYXRlc3RIYXNoKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWxsIHRoZSB2ZXJzaW9ucyB3aGljaCBhcmUgbm8gbG9uZ2VyIHVzZWQuXG4gICAgICAgICAgICAgICAgeWllbGQgb2Jzb2xldGVWZXJzaW9ucy5yZWR1Y2UoKHByZXZpb3VzLCB2ZXJzaW9uKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHRoZSBvdGhlciBjbGVhbnVwIG9wZXJhdGlvbnMgdG8gY29tcGxldGUuXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHByZXZpb3VzO1xuICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdG8gZ2V0IHBhc3QgdGhlIGZhaWx1cmUgb2Ygb25lIHBhcnRpY3VsYXIgdmVyc2lvbiB0byBjbGVhbiB1cCAodGhpc1xuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGRuJ3QgaGFwcGVuLCBidXQgaGFuZGxlIGl0IGp1c3QgaW4gY2FzZSkuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgYWhvbGQgb2YgdGhlIEFwcFZlcnNpb24gZm9yIHRoaXMgcGFydGljdWxhciBoYXNoLlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLnZlcnNpb25zLmdldCh2ZXJzaW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBpdCBmcm9tIHRoZSBjYW5vbmljYWwgbWFwLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9ucy5kZWxldGUodmVyc2lvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGVhbiBpdCB1cC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGluc3RhbmNlLmNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPaCB3ZWxsPyBOb3QgbXVjaCB0aGF0IGNhbiBiZSBkb25lIGhlcmUuIFRoZXNlIGNhY2hlcyB3aWxsIGJlIHJlbW92ZWQgd2hlblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIFNXIHJldnMgaXRzIGZvcm1hdCB2ZXJzaW9uLCB3aGljaCBoYXBwZW5zIGZyb20gdGltZSB0byB0aW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1Z2dlci5sb2coZXJyLCBgY2xlYW51cENhY2hlcyAtIGNsZWFudXAgJHt2ZXJzaW9ufWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICAgICAgICAgICAgICAvLyBDb21taXQgYWxsIHRoZSBjaGFuZ2VzIHRvIHRoZSBzYXZlZCBzdGF0ZS5cbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnN5bmMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWxldGUgY2FjaGVzIHRoYXQgd2VyZSB1c2VkIGJ5IG9sZGVyIHZlcnNpb25zIG9mIGBAYW5ndWxhci9zZXJ2aWNlLXdvcmtlcmAgdG8gYXZvaWQgcnVubmluZ1xuICAgICAgICAgKiBpbnRvIHN0b3JhZ2UgcXVvdGEgbGltaXRhdGlvbnMgaW1wb3NlZCBieSBicm93c2Vycy5cbiAgICAgICAgICogKFNpbmNlIGF0IHRoaXMgcG9pbnQgdGhlIFNXIGhhcyBjbGFpbWVkIGFsbCBjbGllbnRzLCBpdCBpcyBzYWZlIHRvIHJlbW92ZSB0aG9zZSBjYWNoZXMuKVxuICAgICAgICAgKi9cbiAgICAgICAgY2xlYW51cE9sZFN3Q2FjaGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZU5hbWVzID0geWllbGQgdGhpcy5zY29wZS5jYWNoZXMua2V5cygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFN3Q2FjaGVOYW1lcyA9IGNhY2hlTmFtZXMuZmlsdGVyKG5hbWUgPT4gL15uZ3N3Oig/IVxcLykvLnRlc3QobmFtZSkpO1xuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKG9sZFN3Q2FjaGVOYW1lcy5tYXAobmFtZSA9PiB0aGlzLnNjb3BlLmNhY2hlcy5kZWxldGUobmFtZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyB2ZXJzaW9uIG9mIHRoZSBnaXZlbiByZXNvdXJjZSBpcyBjYWNoZWQgYW55d2hlcmUgd2l0aGluIHRoZSBTVyxcbiAgICAgICAgICogYW5kIGZldGNoIGl0IGlmIHNvLlxuICAgICAgICAgKi9cbiAgICAgICAgbG9va3VwUmVzb3VyY2VXaXRoSGFzaCh1cmwsIGhhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheVxuICAgICAgICAgICAgICAgIC8vIFNjYW4gdGhyb3VnaCB0aGUgc2V0IG9mIGFsbCBjYWNoZWQgdmVyc2lvbnMsIHZhbGlkIG9yIG90aGVyd2lzZS4gSXQncyBzYWZlIHRvIGRvIHN1Y2hcbiAgICAgICAgICAgICAgICAvLyBsb29rdXBzIGV2ZW4gZm9yIGludmFsaWQgdmVyc2lvbnMgYXMgdGhlIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcmVzb3VyY2Ugd2lsbCBoYXZlIHRoZVxuICAgICAgICAgICAgICAgIC8vIHNhbWUgaGFzaCByZWdhcmRsZXNzLlxuICAgICAgICAgICAgICAgIC5mcm9tKHRoaXMudmVyc2lvbnMudmFsdWVzKCkpXG4gICAgICAgICAgICAgICAgLy8gUmVkdWNlIHRoZSBzZXQgb2YgdmVyc2lvbnMgdG8gYSBzaW5nbGUgcG90ZW50aWFsIHJlc3VsdC4gQXQgYW55IHBvaW50IGFsb25nIHRoZVxuICAgICAgICAgICAgICAgIC8vIHJlZHVjdGlvbiwgaWYgYSByZXNwb25zZSBoYXMgYWxyZWFkeSBiZWVuIGlkZW50aWZpZWQsIHRoZW4gcGFzcyBpdCB0aHJvdWdoLCBhcyBub1xuICAgICAgICAgICAgICAgIC8vIGZ1dHVyZSBvcGVyYXRpb24gY291bGQgY2hhbmdlIHRoZSByZXNwb25zZS4gSWYgbm8gcmVzcG9uc2UgaGFzIGJlZW4gZm91bmQgeWV0LCBrZWVwXG4gICAgICAgICAgICAgICAgLy8gY2hlY2tpbmcgdmVyc2lvbnMgdW50aWwgb25lIGlzIG9yIHVudGlsIGFsbCB2ZXJzaW9ucyBoYXZlIGJlZW4gZXhoYXVzdGVkLlxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHByZXYsIHZlcnNpb24pID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAvLyBGaXJzdCwgY2hlY2sgdGhlIHByZXZpb3VzIHJlc3VsdC4gSWYgYSBub24tbnVsbCByZXN1bHQgaGFzIGJlZW4gZm91bmQgYWxyZWFkeSwganVzdFxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBpdC5cbiAgICAgICAgICAgICAgICBpZiAoKHlpZWxkIHByZXYpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyByZXN1bHQgaGFzIGJlZW4gZm91bmQgeWV0LiBUcnkgdGhlIG5leHQgYEFwcFZlcnNpb25gLlxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uLmxvb2t1cFJlc291cmNlV2l0aEhhc2godXJsLCBoYXNoKTtcbiAgICAgICAgICAgIH0pLCBQcm9taXNlLnJlc29sdmUobnVsbCkpO1xuICAgICAgICB9XG4gICAgICAgIGxvb2t1cFJlc291cmNlV2l0aG91dEhhc2godXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuaW5pdGlhbGl6ZWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyc2lvbiA9IHRoaXMudmVyc2lvbnMuZ2V0KHRoaXMubGF0ZXN0SGFzaCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcnNpb24gPyB2ZXJzaW9uLmxvb2t1cFJlc291cmNlV2l0aG91dEhhc2godXJsKSA6IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2aW91c2x5Q2FjaGVkUmVzb3VyY2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmluaXRpYWxpemVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb24gPSB0aGlzLnZlcnNpb25zLmdldCh0aGlzLmxhdGVzdEhhc2gpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uID8gdmVyc2lvbi5wcmV2aW91c2x5Q2FjaGVkUmVzb3VyY2VzKCkgOiBbXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlY2VudENhY2hlU3RhdHVzKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJzaW9uID0gdGhpcy52ZXJzaW9ucy5nZXQodGhpcy5sYXRlc3RIYXNoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyc2lvbiA/IHZlcnNpb24ucmVjZW50Q2FjaGVTdGF0dXModXJsKSA6IFVwZGF0ZUNhY2hlU3RhdHVzLk5PVF9DQUNIRUQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBtZXJnZUhhc2hXaXRoQXBwRGF0YShtYW5pZmVzdCwgaGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoYXNoLFxuICAgICAgICAgICAgICAgIGFwcERhdGE6IG1hbmlmZXN0LmFwcERhdGEsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG5vdGlmeUNsaWVudHNBYm91dFVucmVjb3ZlcmFibGVTdGF0ZShhcHBWZXJzaW9uLCByZWFzb24pIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnJva2VuID0gQXJyYXkuZnJvbSh0aGlzLnZlcnNpb25zLmVudHJpZXMoKSkuZmluZCgoW2hhc2gsIHZlcnNpb25dKSA9PiB2ZXJzaW9uID09PSBhcHBWZXJzaW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoYnJva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB2ZXJzaW9uIGlzIG5vIGxvbmdlciBpbiB1c2UgYW55d2F5LCBzbyBub2JvZHkgY2FyZXMuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgYnJva2VuSGFzaCA9IGJyb2tlblswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZmZlY3RlZENsaWVudHMgPSBBcnJheS5mcm9tKHRoaXMuY2xpZW50VmVyc2lvbk1hcC5lbnRyaWVzKCkpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKFtjbGllbnRJZCwgaGFzaF0pID0+IGhhc2ggPT09IGJyb2tlbkhhc2gpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKFtjbGllbnRJZF0pID0+IGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChhZmZlY3RlZENsaWVudHMubWFwKChjbGllbnRJZCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGllbnQgPSB5aWVsZCB0aGlzLnNjb3BlLmNsaWVudHMuZ2V0KGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1VOUkVDT1ZFUkFCTEVfU1RBVEUnLCByZWFzb24gfSk7XG4gICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG5vdGlmeUNsaWVudHNBYm91dFVwZGF0ZShuZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuaW5pdGlhbGl6ZWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50cyA9IHlpZWxkIHRoaXMuc2NvcGUuY2xpZW50cy5tYXRjaEFsbCgpO1xuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKGNsaWVudHMubWFwKChjbGllbnQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyc3RseSwgZGV0ZXJtaW5lIHdoaWNoIHZlcnNpb24gdGhpcyBjbGllbnQgaXMgb24uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb24gPSB0aGlzLmNsaWVudFZlcnNpb25NYXAuZ2V0KGNsaWVudC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2ZXJzaW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVubWFwcGVkIGNsaWVudCAtIGFzc3VtZSBpdCdzIHRoZSBsYXRlc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZlcnNpb24gPT09IHRoaXMubGF0ZXN0SGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xpZW50IGlzIGFscmVhZHkgb24gdGhlIGxhdGVzdCB2ZXJzaW9uLCBubyBuZWVkIGZvciBhIG5vdGlmaWNhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy52ZXJzaW9ucy5nZXQodmVyc2lvbik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgYSBub3RpY2UuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vdGljZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVUERBVEVfQVZBSUxBQkxFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IHRoaXMubWVyZ2VIYXNoV2l0aEFwcERhdGEoY3VycmVudC5tYW5pZmVzdCwgdmVyc2lvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGU6IHRoaXMubWVyZ2VIYXNoV2l0aEFwcERhdGEobmV4dC5tYW5pZmVzdCwgdGhpcy5sYXRlc3RIYXNoKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50LnBvc3RNZXNzYWdlKG5vdGljZSk7XG4gICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyb2FkY2FzdChtc2cpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50cyA9IHlpZWxkIHRoaXMuc2NvcGUuY2xpZW50cy5tYXRjaEFsbCgpO1xuICAgICAgICAgICAgICAgIGNsaWVudHMuZm9yRWFjaChjbGllbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGllbnQucG9zdE1lc3NhZ2UobXNnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnU3RhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBEcml2ZXJSZWFkeVN0YXRlW3RoaXMuc3RhdGVdLFxuICAgICAgICAgICAgICAgICAgICB3aHk6IHRoaXMuc3RhdGVNZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBsYXRlc3RIYXNoOiB0aGlzLmxhdGVzdEhhc2gsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVDaGVjazogdGhpcy5sYXN0VXBkYXRlQ2hlY2ssXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnVmVyc2lvbnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGxpc3Qgb2YgdmVyc2lvbnMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy52ZXJzaW9ucy5rZXlzKCkpLm1hcChoYXNoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVyc2lvbiA9IHRoaXMudmVyc2lvbnMuZ2V0KGhhc2gpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGllbnRzID0gQXJyYXkuZnJvbSh0aGlzLmNsaWVudFZlcnNpb25NYXAuZW50cmllcygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoW2NsaWVudElkLCB2ZXJzaW9uXSkgPT4gdmVyc2lvbiA9PT0gaGFzaClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKFtjbGllbnRJZCwgdmVyc2lvbl0pID0+IGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc2gsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdDogdmVyc2lvbi5tYW5pZmVzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICcnLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWdJZGxlU3RhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlOiB0aGlzLmlkbGUudGFza0Rlc2NyaXB0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgbGFzdFRyaWdnZXI6IHRoaXMuaWRsZS5sYXN0VHJpZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgbGFzdFJ1bjogdGhpcy5pZGxlLmxhc3RSdW4sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNhZmVGZXRjaChyZXEpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHRoaXMuc2NvcGUuZmV0Y2gocmVxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYnVnZ2VyLmxvZyhlcnIsIGBEcml2ZXIuZmV0Y2goJHtyZXEudXJsfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5uZXdSZXNwb25zZShudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6ICdHYXRld2F5IFRpbWVvdXQnLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGNvbnN0IHNjb3BlID0gc2VsZjtcbiAgICBjb25zdCBhZGFwdGVyID0gbmV3IEFkYXB0ZXIoc2NvcGUucmVnaXN0cmF0aW9uLnNjb3BlKTtcbiAgICBjb25zdCBkcml2ZXIgPSBuZXcgRHJpdmVyKHNjb3BlLCBhZGFwdGVyLCBuZXcgQ2FjaGVEYXRhYmFzZShzY29wZSwgYWRhcHRlcikpO1xuXG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==