"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INVALID_DATE = void 0;
exports.formatDistance = formatDistance;
exports.formatDistanceUnixTS = formatDistanceUnixTS;
exports.nowUnixTS = nowUnixTS;
exports.setLocaleDateFns = setLocaleDateFns;
exports.timeSinceUnixTS = timeSinceUnixTS;
exports.toDate = toDate;
exports.toUnixTS = toUnixTS;
var _dateFns = require("date-fns");
var _locale = require("date-fns/locale");
var _config = _interopRequireDefault(require("../../config"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var INVALID_DATE = exports.INVALID_DATE = new Date(NaN);
var LOCALES = {
  'en': _locale.enUS,
  'en-US': _locale.enUS,
  'es': _locale.es
};
var locale = LOCALES[_config["default"].default_locale];
function setLocaleDateFns(newlocale) {
  if (newlocale !== locale.code && newlocale in LOCALES) {
    locale = LOCALES[newlocale];
  }
}
function toUnixTS(timestamp) {
  return parseInt(timestamp / 1000);
}
function nowUnixTS() {
  return toUnixTS(Date.now());
}
function timeSinceUnixTS(datefrom) {
  var dateto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nowUnixTS();
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    addSuffix: true
  };
  return formatDistanceUnixTS(datefrom, dateto, options);
}
function formatDistanceUnixTS(datefrom) {
  var dateto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nowUnixTS();
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  datefrom = datefrom * 1000;
  dateto = dateto * 1000;
  var distance = formatDistance(datefrom, dateto, options);
  if (options !== null && options !== void 0 && options["short"]) {
    var _distance;
    var _distance$split = (_distance = distance) === null || _distance === void 0 ? void 0 : _distance.split(' '),
      _distance$split2 = _slicedToArray(_distance$split, 2),
      value = _distance$split2[0],
      units = _distance$split2[1];
    distance = [value, units === null || units === void 0 ? void 0 : units[0]].join(' ');
  }
  return distance;
}
function formatDistance(datefrom) {
  var dateto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  datefrom = toDate(datefrom);
  dateto = toDate(dateto);
  if (_isEqual(datefrom, INVALID_DATE) || _isEqual(dateto, INVALID_DATE)) {
    return '';
  }
  return (0, _dateFns.formatDistanceStrict)(datefrom, dateto, _objectSpread(_objectSpread({}, options), {}, {
    locale: locale
  }));
}
function toDate(date) {
  // parameters validaton
  if (!date instanceof Date && !(typeof date === 'string') && !(typeof date === 'number')) return INVALID_DATE;
  var datetime = new Date(date);
  // validate datetime
  if (isNaN(datetime.getTime())) return INVALID_DATE;
  return datetime;
}
var _isEqual = function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if ((first === undefined || second === undefined || first === null || second === null) && (first || second)) {
    return false;
  }
  var firstType = first === null || first === void 0 ? void 0 : first.constructor.name;
  var secondType = second === null || second === void 0 ? void 0 : second.constructor.name;
  if (firstType !== secondType) {
    return false;
  }
  if (firstType === 'Array') {
    if (first.length !== second.length) {
      return false;
    }
    var equal = true;
    for (var i in first) {
      if (!_isEqual(first[i], second[i])) {
        equal = false;
        break;
      }
    }
    return equal;
  }
  if (firstType === 'Object') {
    var _equal = true;
    var fKeys = Object.keys(first);
    var sKeys = Object.keys(second);
    if (fKeys.length !== sKeys.length) {
      return false;
    }
    for (var _i in fKeys) {
      if (first[fKeys[_i]] && second[fKeys[_i]]) {
        if (first[fKeys[_i]] === second[fKeys[_i]]) {
          continue; // eslint-disable-line
        }
        if (first[fKeys[_i]] && (first[fKeys[_i]].constructor.name === 'Array' || first[fKeys[_i]].constructor.name === 'Object')) {
          _equal = _isEqual(first[fKeys[_i]], second[fKeys[_i]]);
          if (!_equal) {
            break;
          }
        } else if (first[fKeys[_i]] !== second[fKeys[_i]]) {
          _equal = false;
          break;
        }
      } else if (first[fKeys[_i]] && !second[fKeys[_i]] || !first[fKeys[_i]] && second[fKeys[_i]]) {
        _equal = false;
        break;
      }
    }
    return _equal;
  }
  return first === second;
};
//# sourceMappingURL=index.js.map