'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Iframe = function (_a) {
    var className = _a.className, src = _a.src;
    return (React__default["default"].createElement("div", { className: "h-100 w-100 mt-4 " + className },
        React__default["default"].createElement("iframe", { src: src, className: "w-100 h-100" })));
};

exports.Iframe = Iframe;
