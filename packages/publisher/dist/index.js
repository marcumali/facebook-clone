'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Form = require('react-bootstrap/Form');
var react = require('@iconify/react');
var Select = require('react-select');
var Modal = require('react-bootstrap/Modal');
var Button = require('react-bootstrap/Button');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Form__default = /*#__PURE__*/_interopDefaultLegacy(Form);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);
var Modal__default = /*#__PURE__*/_interopDefaultLegacy(Modal);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);

var PostModal = function (_a) {
    var show = _a.show, handleClose = _a.handleClose, size = _a.size, title = _a.title, children = _a.children;
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement(Modal__default["default"], { onClose: handleClose, size: size, show: show, onHide: handleClose },
            React__default["default"].createElement(Modal__default["default"].Header, { closeButton: true },
                React__default["default"].createElement("div", { className: "fw-700" }, title)),
            React__default["default"].createElement(Modal__default["default"].Body, null, children))));
};

var Avatar = function (_a) {
    var className = _a.className, src = _a.src, width = _a.width, height = _a.height;
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement("div", { className: "bg-gray-3 rounded-circle bg-center bg-cover", "data-width": width, "data-height": height, style: { backgroundImage: "url( ".concat(src, " )") } })));
};

var Publisher = function (_a) {
    var _b = React.useState(false), show = _b[0], setShow = _b[1];
    var _c = React.useState(''), disablebuttonifempty = _c[0], Setdisablebuttonifempty = _c[1];
    var privacy = [
        { value: 0, label: 'Public' },
        { value: 1, label: 'Friends' },
        { value: 2, label: 'Private' },
    ];
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement(PostModal, { show: show, handleClose: function () { return setShow(false); }, handleShow: function () { return setShow(true); }, title: "Create Post" },
            React__default["default"].createElement("div", { className: "d-flex cursor-pointer mb-3 align-items-center" },
                React__default["default"].createElement(Avatar, { className: "me-2", src: "https://i.pravatar.cc/41/41", height: 45, width: 45 }),
                React__default["default"].createElement("div", null,
                    React__default["default"].createElement("div", { className: "fw-700" }, "Jason Daro"),
                    React__default["default"].createElement(Select__default["default"], { options: privacy, className: "select select-disable-icon select-sm", classNamePrefix: "select", defaultValue: { label: "Public", value: 0 } }))),
            React__default["default"].createElement(Form__default["default"].Control, { placeholder: "What's on your mind?", as: "textarea", rows: 3, className: "w-100 mb-3", value: disablebuttonifempty, onChange: function (e) { return Setdisablebuttonifempty(e.target.value); } }),
            React__default["default"].createElement("div", { className: "bg-gray-1 rounded-8px d-flex justify-content-center align-items-center w-100 py-10 cursor-pointer" },
                React__default["default"].createElement(react.Icon, { icon: "lucide:image-plus", className: "fs-24px me-2" }),
                React__default["default"].createElement("div", { className: "fw-600" }, "Add Photos/Video")),
            React__default["default"].createElement(Button__default["default"], { onClick: function () { return setShow(false); }, className: "mt-3 w-100", disabled: !disablebuttonifempty }, "Post")),
        React__default["default"].createElement("div", { className: "box-shadow-1 bg-white rounded-10px p-3 mb-4" },
            React__default["default"].createElement("div", { className: "d-flex" },
                React__default["default"].createElement(Avatar, { className: "me-2", src: "https://i.pravatar.cc/41/41", height: 40, width: 40 }),
                React__default["default"].createElement("div", { className: "form-control cursor-pointer d-flex align-items-center", onClick: function () { return setShow(true); } }, "What's on your mind?")),
            React__default["default"].createElement("div", { className: "d-flex justify-content-evenly cursor-pointer border-top-1-solid-gray-4 pt-3 mt-3" },
                React__default["default"].createElement("a", { href: "/go-live" },
                    React__default["default"].createElement("div", { className: "d-flex align-items-center cursor-pointer" },
                        React__default["default"].createElement(react.Icon, { icon: "lucide:video", className: "fs-22px me-2 text-primary" }),
                        React__default["default"].createElement("div", null, "Live Video"))),
                React__default["default"].createElement("div", { className: "d-flex align-items-center cursor-pointer", onClick: function () { return setShow(true); } },
                    React__default["default"].createElement(react.Icon, { icon: "lucide:image", className: "fs-18px me-2 text-primary" }),
                    React__default["default"].createElement("div", null, "Photo/Video"))))));
};

exports.Avatar = Avatar;
exports.Modal = PostModal;
exports.Publisher = Publisher;
