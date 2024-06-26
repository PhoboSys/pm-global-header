"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _PMGlobalHeaderProviderContext = _interopRequireDefault(require("./PMGlobalHeaderProviderContext"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var useGHProvider = function useGHProvider() {
  var data = (0, _react.useContext)(_PMGlobalHeaderProviderContext["default"]);
  return data;
};
var _default = exports["default"] = useGHProvider;
//# sourceMappingURL=useGHProvider.js.map