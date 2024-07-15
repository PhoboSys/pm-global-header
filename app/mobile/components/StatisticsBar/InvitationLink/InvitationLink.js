"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _utils = require("../../../../utils");
var _AnimatedButton = _interopRequireDefault(require("../../common/AnimatedButton"));
var _NewUser = _interopRequireDefault(require("../../SVG/NewUser"));
var _Copy = _interopRequireDefault(require("../../common/Copy"));
var _InvitationLinkModule = _interopRequireDefault(require("./InvitationLink.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var InvitationLink = function InvitationLink(_ref) {
  var className = _ref.className,
    address = _ref.address;
  var link = (0, _utils.getInvitationLink)(address);
  var containerRef = (0, _react.useRef)();
  var timeoutRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    showPopper = _useState2[0],
    setShowPopper = _useState2[1];
  var handleClick = (0, _react.useCallback)(function () {
    navigator.clipboard.writeText(link);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(function () {
      return setShowPopper(false);
    }, 1000);
    setShowPopper(true);
  }, [link]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: containerRef,
    className: (0, _clsx["default"])(_InvitationLinkModule["default"].container, className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_InvitationLinkModule["default"].popper, _defineProperty({}, _InvitationLinkModule["default"].show, showPopper))
  }, "The link is copied to the clipboard"), /*#__PURE__*/_react["default"].createElement(_AnimatedButton["default"], {
    className: _InvitationLinkModule["default"].btn,
    onClick: handleClick,
    borderWidth: "1px"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _InvitationLinkModule["default"].icon
  }, /*#__PURE__*/_react["default"].createElement(_NewUser["default"], null)), /*#__PURE__*/_react["default"].createElement("span", {
    className: _InvitationLinkModule["default"].title
  }, "Invitation link"), /*#__PURE__*/_react["default"].createElement(_Copy["default"], {
    text: link,
    className: _InvitationLinkModule["default"].copy,
    iconClassName: _InvitationLinkModule["default"].copyIcon,
    target: containerRef.current
  })));
};
InvitationLink.propTypes = {
  className: _propTypes["default"].string,
  address: _propTypes["default"].string.isRequired
};
var _default = exports["default"] = InvitationLink;
//# sourceMappingURL=InvitationLink.js.map