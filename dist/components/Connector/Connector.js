"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _MetaMask = _interopRequireDefault(require("../SVG/MetaMask"));
var _WalletConnect = _interopRequireDefault(require("../SVG/WalletConnect"));
var _CoinbaseWallet = _interopRequireDefault(require("../SVG/CoinbaseWallet"));
var _ConnectorModule = _interopRequireDefault(require("./Connector.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var connectorsUIData = {
  injected: {
    name: 'MetaMask',
    icon: /*#__PURE__*/_react["default"].createElement(_MetaMask["default"], null)
  },
  walletconnect: {
    name: 'WalletConnect',
    icon: /*#__PURE__*/_react["default"].createElement(_WalletConnect["default"], null)
  },
  coinbase: {
    name: 'CoinbaseWallet',
    icon: /*#__PURE__*/_react["default"].createElement(_CoinbaseWallet["default"], null)
  }
};
var Connector = function Connector(_ref) {
  var id = _ref.id,
    onClick = _ref.onClick;
  var _connectorsUIData$id = connectorsUIData[id],
    icon = _connectorsUIData$id.icon,
    name = _connectorsUIData$id.name;
  var handleClick = (0, _react.useCallback)(function () {
    if (onClick) onClick(id);
  }, [id, onClick]);
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: _ConnectorModule["default"].container,
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _ConnectorModule["default"].icon
  }, icon), /*#__PURE__*/_react["default"].createElement("span", {
    className: _ConnectorModule["default"].name
  }, name));
};
Connector.propTypes = {
  id: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};
var _default = /*#__PURE__*/_react["default"].memo(Connector);
exports["default"] = _default;
//# sourceMappingURL=Connector.js.map