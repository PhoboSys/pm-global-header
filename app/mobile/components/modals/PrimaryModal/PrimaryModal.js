"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactModal = _interopRequireDefault(require("react-modal"));
var _CloseIcon = _interopRequireDefault(require("../../SVG/CloseIcon"));
var _Button = _interopRequireDefault(require("../../common/Button"));
var _PrimaryModalModule = _interopRequireDefault(require("./PrimaryModal.module.scss"));
var _excluded = ["children", "close", "hideClose"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var modalClasses = {
  base: _PrimaryModalModule["default"].base,
  afterOpen: _PrimaryModalModule["default"].afterOpen,
  beforeClose: _PrimaryModalModule["default"].beforeClose
};
var modalOverlayClasses = {
  base: _PrimaryModalModule["default"].overlayBase,
  afterOpen: _PrimaryModalModule["default"].afterOpenOverlay,
  beforeClose: _PrimaryModalModule["default"].beforeCloseOverlay
};
var PrimaryModal = function PrimaryModal(_ref) {
  var children = _ref.children,
    close = _ref.close,
    hideClose = _ref.hideClose,
    modalProps = _objectWithoutProperties(_ref, _excluded);
  var parentSelector = (0, _react.useCallback)(function () {
    return document.getElementById(config.modal_id);
  }, []);
  var appEl = useMemo(function () {
    return document.getElementById(config.react_mount_element_id);
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_reactModal["default"], _extends({
    appElement: appEl,
    closeTimeoutMS: 300,
    className: modalClasses,
    overlayClassName: modalOverlayClasses,
    onRequestClose: close,
    parentSelector: parentSelector
  }, modalProps), !hideClose && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: close,
    className: _PrimaryModalModule["default"].close
  }, /*#__PURE__*/_react["default"].createElement(_CloseIcon["default"], null)), children);
};
var _default = PrimaryModal;
exports["default"] = _default;
//# sourceMappingURL=PrimaryModal.js.map