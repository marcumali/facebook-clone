'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Container = require('react-bootstrap/Container');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var router = require('next/router');
var RButton = require('react-bootstrap/Button');
var Form = require('react-bootstrap/Form');
var react = require('@iconify/react');
var Image = require('react-bootstrap/Image');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Container__default = /*#__PURE__*/_interopDefaultLegacy(Container);
var Row__default = /*#__PURE__*/_interopDefaultLegacy(Row);
var Col__default = /*#__PURE__*/_interopDefaultLegacy(Col);
var RButton__default = /*#__PURE__*/_interopDefaultLegacy(RButton);
var Form__default = /*#__PURE__*/_interopDefaultLegacy(Form);
var Image__default = /*#__PURE__*/_interopDefaultLegacy(Image);

var Layout = function (_a) {
    var children = _a.children;
    var router$1 = router.useRouter();
    return (React__default["default"].createElement(Container__default["default"], { fluid: true, className: "h-100" },
        React__default["default"].createElement(Row__default["default"], { className: "h-100" },
            React__default["default"].createElement(Col__default["default"], { lg: 7, className: "d-none d-lg-flex bg-base bg-center bg-cover", style: { backgroundImage: 'url(images/entry-1.jpg)' } }),
            React__default["default"].createElement(Col__default["default"], { lg: 5, className: "d-flex align-items-center justify-content-center " + (router$1.pathname == "/terms-and-condition" || router$1.pathname == "/privacy-policy" ? "px-0" : "") }, children))));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Button = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default["default"].createElement(RButton__default["default"], __assign({ className: "w-100 mb-4" }, props), children));
};

var Checkbox = function (_a) {
    var name = _a.name, children = _a.children;
    return (React__default["default"].createElement(Form__default["default"].Group, null,
        React__default["default"].createElement(Form__default["default"].Check, { name: name, type: "checkbox", label: children })));
};

var Input = function (_a) {
    var name = _a.name, type = _a.type, icon = _a.icon, placeholder = _a.placeholder, children = _a.children, props = __rest(_a, ["name", "type", "icon", "placeholder", "children"]);
    return (React__default["default"].createElement(Form__default["default"].Group, { className: "mb-2" },
        React__default["default"].createElement("div", { className: "position-relative" },
            React__default["default"].createElement(react.Icon, { icon: icon, className: "position-absolute left-0 top-0 bottom-0 my-auto ms-2 fs-20px" }),
            React__default["default"].createElement(Form__default["default"].Control, __assign({ name: name, type: type, placeholder: placeholder, className: "ps-6 form-control-lg" }, props))),
        children));
};
Input.defaultProps = {
    type: 'text',
    icon: 'lucide:user',
    placeholder: 'Placeholder'
};

var Select = function (_a) {
    var options = _a.options;
    return (React__default["default"].createElement(Form__default["default"].Select, { className: "form-control-lg mb-2" }, options === null || options === void 0 ? void 0 : options.map(function (item, index) { return (React__default["default"].createElement("option", { key: index, value: item.value }, item.label)); })));
};

var Logo = function (_a) {
    _a.src; var props = __rest(_a, ["src"]);
    return (React__default["default"].createElement(Image__default["default"], __assign({ src: "/images/logo.png" }, props)));
};
Logo.defaultProps = {
    src: '/images/logo.png'
};

var SocialLinks = function (_a) {
    var label = _a.label;
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement("div", { className: "text-center fs-14px text-gray-3 mb-2" }, label),
        React__default["default"].createElement("div", { className: "d-flex justify-content-center" },
            React__default["default"].createElement("div", { className: "rounded-circle w-39px h-39px bg-primary-3 text-white d-flex justify-content-center align-items-center cursor-pointer me-2" },
                React__default["default"].createElement(react.Icon, { icon: "gg:facebook", className: "fs-22px" })),
            React__default["default"].createElement("div", { className: "rounded-circle w-39px h-39px bg-primary-4 text-white d-flex justify-content-center align-items-center cursor-pointer me-2" },
                React__default["default"].createElement(react.Icon, { icon: "ri:twitter-fill", className: "fs-22px" })),
            React__default["default"].createElement("div", { className: "rounded-circle w-39px h-39px bg-danger-2 text-white d-flex justify-content-center align-items-center cursor-pointer me-2" },
                React__default["default"].createElement(react.Icon, { icon: "mdi:instagram", className: "fs-22px" })))));
};

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Input = Input;
exports.Layout = Layout;
exports.Logo = Logo;
exports.Select = Select;
exports.SocialLinks = SocialLinks;
