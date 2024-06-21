"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var USDC = function USDC(_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? '#ffffff' : _ref$fill,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 1 : _ref$size;
  var width = size * 16;
  var height = size * 16;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.4581 10.3557C12.4581 8.02999 11.0587 7.23698 8.26652 6.90379C6.26735 6.63723 5.86752 6.10412 5.86752 5.17784C5.86752 4.25156 6.53391 3.65181 7.86668 3.65181C9.06618 3.65181 9.73257 4.05165 10.0658 5.04456C10.1324 5.24448 10.3323 5.37776 10.5322 5.37776H11.5985C11.865 5.37776 12.0649 5.17784 12.0649 4.91129V4.84465C11.7984 3.38526 10.5989 2.25906 9.06618 2.12578V0.533111C9.06618 0.266556 8.86627 0.0666389 8.53307 0H7.53349C7.26693 0 7.06702 0.199917 7.00038 0.533111V2.05914C5.00121 2.3257 3.73507 3.65181 3.73507 5.31112C3.73507 7.50354 5.06785 8.36318 7.86002 8.69638C9.72591 9.02957 10.3257 9.4294 10.3257 10.489C10.3257 11.5485 9.39272 12.2815 8.12658 12.2815C6.39396 12.2815 5.79421 11.5485 5.5943 10.5556C5.52766 10.289 5.32774 10.1558 5.12783 10.1558H4.00163C3.73507 10.1558 3.53516 10.3557 3.53516 10.6222V10.6889C3.80171 12.3482 4.86793 13.541 7.06702 13.8742V15.4669C7.06702 15.7334 7.26693 15.9334 7.60013 16H8.59971C8.86627 16 9.06618 15.8001 9.13282 15.4669V13.8742C11.132 13.541 12.4648 12.1483 12.4648 10.3557H12.4581Z",
    fill: fill
  }));
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(USDC);
//# sourceMappingURL=USDC.DARK.js.map