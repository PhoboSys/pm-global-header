"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PARI = function PARI(_ref) {
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
    d: "M13.1948 7.95668C13.1948 6.29071 12.6548 4.8913 11.5682 3.75177C10.6949 2.83882 9.64161 2.29904 8.42833 2.11912V0.533111C8.42833 0.266556 8.22834 0.0666389 7.89502 0H6.90174C6.63508 0 6.43509 0.199917 6.36843 0.533111V2.05248H3.70855C3.21524 2.05248 2.80859 2.45231 2.80859 2.9521V12.9679C2.80859 13.4677 3.21524 13.8742 3.71522 13.8742H6.41509H6.42842V15.4669C6.42842 15.7334 6.62841 15.9334 6.96173 16H7.95502C8.22167 16 8.42166 15.8001 8.48833 15.4669V13.8742C8.48833 13.8742 8.48833 13.8342 8.48833 13.7876C9.67494 13.601 10.7016 13.0612 11.5615 12.1683C12.6481 11.0287 13.1881 9.62932 13.1881 7.96335L13.1948 7.95668ZM10.0016 10.6156C9.36162 11.2953 8.52833 11.6352 7.50171 11.6352H5.57513C5.33514 11.6352 5.14182 11.4419 5.14182 11.202V4.67805C5.14182 4.45814 5.32181 4.27822 5.5418 4.27822H7.50837C8.53499 4.27822 9.36162 4.61808 10.0083 5.29779C10.6482 5.97751 10.9682 6.86381 10.9682 7.95668C10.9682 9.04956 10.6482 9.93586 10.0083 10.6156H10.0016Z",
    fill: fill
  }));
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(PARI);
//# sourceMappingURL=PARI.DARK.js.map