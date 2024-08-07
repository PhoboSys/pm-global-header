"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Connector = _interopRequireDefault(require("../Connector"));
var _AuthModalModule = _interopRequireDefault(require("./AuthModal.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var AuthModal = function AuthModal(_ref) {
  var close = _ref.close,
    isConnected = _ref.isConnected,
    connectors = _ref.connectors,
    onConnectorClick = _ref.onConnectorClick;
  (0, _react.useEffect)(function () {
    if (isConnected) close();
  }, [isConnected]);
  var onClick = (0, _react.useCallback)(function (connectorId) {
    console.log(connectorId);
    close();
    onConnectorClick(connectorId);
  }, [onConnectorClick]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _AuthModalModule["default"].container
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _AuthModalModule["default"].title
  }, "Connect to Wallet"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: _AuthModalModule["default"].connectors
  }, connectors.map(function (connectorId) {
    return /*#__PURE__*/_react["default"].createElement(_Connector["default"], {
      key: connectorId,
      id: connectorId,
      onClick: onClick
    }, connectorId);
  })));
};
AuthModal.propTypes = {
  close: _propTypes["default"].func.isRequired,
  connectors: _propTypes["default"].array,
  isConnected: _propTypes["default"].bool,
  onConnectorClick: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = AuthModal;
//# sourceMappingURL=AuthModal.js.map