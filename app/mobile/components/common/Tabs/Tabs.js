"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var TabContext = /*#__PURE__*/(0, _react.createContext)({});
exports.TabContext = TabContext;
var Tabs = function Tabs(_ref) {
  var className = _ref.className,
    activeTabClassName = _ref.activeTabClassName,
    controlledTab = _ref.tab,
    onTabChange = _ref.onTabChange,
    _ref$initialTab = _ref.initialTab,
    initialTab = _ref$initialTab === void 0 ? 0 : _ref$initialTab,
    children = _ref.children;
  var isTabControlled = controlledTab !== undefined;
  var _useState = (0, _react.useState)(initialTab),
    _useState2 = _slicedToArray(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];
  var tabsRef = (0, _react.useRef)([]);
  var handleSetTab = (0, _react.useCallback)(function (tab) {
    if (!isTabControlled) setTab(tab);
    if (onTabChange) onTabChange(tab);
  }, [isTabControlled]);
  var registerHead = (0, _react.useCallback)(function () {
    var tabIndex = tabsRef.current.push(1) - 1;
    return tabIndex;
  }, []);
  var registerBody = (0, _react.useCallback)(function () {
    var tabIndex = tabsRef.current.findIndex(function (value) {
      return value === 1;
    });
    tabsRef.current[tabIndex] = 0;
    return tabIndex;
  }, []);
  var value = (0, _react.useMemo)(function () {
    return {
      activeTabClassName: activeTabClassName,
      tab: isTabControlled ? controlledTab : tab,
      setTab: handleSetTab,
      registerHead: registerHead,
      registerBody: registerBody
    };
  }, [isTabControlled, tab, controlledTab]);
  return /*#__PURE__*/_react["default"].createElement(TabContext.Provider, {
    value: value
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, children));
};
Tabs.propTypes = {
  className: _propTypes["default"].string,
  activeTabClassName: _propTypes["default"].string,
  tab: _propTypes["default"].string,
  onTabChange: _propTypes["default"].func,
  initialTab: _propTypes["default"].number,
  children: _propTypes["default"].node
};
var _default = /*#__PURE__*/_react["default"].memo(Tabs);
exports["default"] = _default;
//# sourceMappingURL=Tabs.js.map