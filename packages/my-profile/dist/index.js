'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Button = require('react-bootstrap/Button');
var react = require('@iconify/react');
var Dropdown = require('react-bootstrap/Dropdown');
var Form = require('react-bootstrap/Form');
var Modal = require('react-bootstrap/Modal');
var Select = require('react-select');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var Dropdown__default = /*#__PURE__*/_interopDefaultLegacy(Dropdown);
var Form__default = /*#__PURE__*/_interopDefaultLegacy(Form);
var Modal__default = /*#__PURE__*/_interopDefaultLegacy(Modal);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);

var Banner = function (_a) {
    var bannerImg = _a.bannerImg;
    return (React__default["default"].createElement("div", { className: "d-flex align-items-end px-4 pb-4 bg-center bg-cover pt-35p bg-gray-1 w-100 rounded-be-10px rounded-bs-10px", style: { backgroundImage: "url( ".concat(bannerImg, " )") } },
        React__default["default"].createElement("div", { className: "text-end w-100" },
            React__default["default"].createElement(Button__default["default"], { variant: "light" },
                React__default["default"].createElement(react.Icon, { icon: "mdi:camera", className: "fs-18px me-2" }),
                "Edit Cover Photo"))));
};

var Avatar = function (_a) {
    var className = _a.className, src = _a.src, width = _a.width, height = _a.height, widthLg = _a.widthLg, heightLg = _a.heightLg, imgClassName = _a.imgClassName;
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement("div", { className: "bg-gray-3 rounded-circle bg-center bg-cover " + imgClassName, "data-width": width, "data-height": height, "data-lg-width": widthLg, "data-lg-height": heightLg, style: { backgroundImage: "url( ".concat(src, " )") } })));
};

var UserPopover = function (_a) {
    _a.bannerImg;
    return (React__default["default"].createElement("div", { className: "popover-content", "data-inner-spacer": 20, "data-position-start": 0, "data-position-top": 35, "data-width": 300, style: { display: "none" } },
        React__default["default"].createElement("div", { className: "d-flex mb-3" },
            React__default["default"].createElement("div", null,
                React__default["default"].createElement("div", { className: "w-60px h-60px rounded-circle bg-gray-1 bg-center bg-cover cursor-pointer", style: { backgroundImage: "url( https://i.pravatar.cc )" } })),
            React__default["default"].createElement("div", { className: "ms-3" },
                React__default["default"].createElement("div", { className: "fw-700 fs-16px cursor-pointer" }, "Jason Daro"),
                React__default["default"].createElement("div", { className: "d-flex mb-1" },
                    React__default["default"].createElement("div", null,
                        React__default["default"].createElement(react.Icon, { icon: "mdi:users", className: "fs-16px me-1" })),
                    React__default["default"].createElement("div", null, "100 mutual friends")),
                React__default["default"].createElement("div", { className: "d-flex mb-1" },
                    React__default["default"].createElement("div", null,
                        React__default["default"].createElement(react.Icon, { icon: "mdi:briefcase", className: "fs-16px me-1" })),
                    React__default["default"].createElement("div", null,
                        "Fullstack Developer at ",
                        React__default["default"].createElement("b", null, "Lifestream Networks"))))),
        React__default["default"].createElement("div", { className: "d-flex" },
            React__default["default"].createElement(Dropdown__default["default"], { className: "dropdown-bs-btn w-50 me-2" },
                React__default["default"].createElement(Dropdown__default["default"].Toggle, { className: "btn btn-light" },
                    React__default["default"].createElement(react.Icon, { icon: "bxs:user-check", className: "fs-20px me-2" }),
                    React__default["default"].createElement("div", { className: "" }, "Friends")),
                React__default["default"].createElement(Dropdown__default["default"].Menu, { className: "p-3 w-200px" },
                    React__default["default"].createElement("div", { className: "px-0 d-flex align-items-center mb-2" },
                        React__default["default"].createElement(react.Icon, { icon: "gis:layer-alt-x-o", className: "fs-20px me-2" }),
                        React__default["default"].createElement("div", null, "Unfollow")),
                    React__default["default"].createElement("div", { className: "px-0 d-flex align-items-center mb-2" },
                        React__default["default"].createElement(react.Icon, { icon: "lucide:user-x", className: "fs-20px me-2" }),
                        React__default["default"].createElement("div", null, "Unfriend")),
                    React__default["default"].createElement("div", { className: "px-0 d-flex align-items-center mb-2" },
                        React__default["default"].createElement(react.Icon, { icon: "mdi:ban", className: "fs-20px me-2" }),
                        React__default["default"].createElement("div", null, "Block")),
                    React__default["default"].createElement("div", { className: "px-0 d-flex align-items-center" },
                        React__default["default"].createElement(react.Icon, { icon: "mdi:warning-circle-outline", className: "fs-20px me-2" }),
                        React__default["default"].createElement("div", null, "Report")))),
            React__default["default"].createElement(Button__default["default"], { className: "w-50" },
                React__default["default"].createElement(react.Icon, { icon: "mdi:message", className: "fs-18px me-2" }),
                React__default["default"].createElement("div", { className: "" }, "Message")))));
};

var Bio = function (_a) {
    var className = _a.className;
    var _b = React.useState(false), editBio = _b[0], setEditBio = _b[1];
    var bioData = [
        {
            id: 0,
            label: 'Frontend Developer - UI/UX Designer at Prospark',
            icon: 'mdi:briefcase'
        },
        {
            id: 1,
            label: 'Binangonan',
            icon: 'mdi:home'
        },
        {
            id: 2,
            label: 'Datamex',
            icon: 'mdi:graduation-cap'
        },
        {
            id: 3,
            label: 'marcumaligithub.io',
            icon: 'mdi:globe'
        },
    ];
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement("div", { className: "mb-3" }, editBio ?
            React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement(Form__default["default"].Control, { type: "text", as: "textarea", placeholder: "Add something about your self", value: "Frontend Developer - UI/UX Designer", className: "mb-2" }),
                React__default["default"].createElement("div", { className: "d-flex justify-content-end" },
                    React__default["default"].createElement(Button__default["default"], { variant: "light", onClick: function () { return setEditBio(false); }, className: "me-2" }, "Cancel"),
                    React__default["default"].createElement(Button__default["default"], { variant: "primary", onClick: function () { return setEditBio(false); } }, "Save")))
            :
                React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement("div", { className: "text-center mb-2" }, "Frontend Developer - UI/UX Designer"),
                    React__default["default"].createElement(Button__default["default"], { variant: "light", className: "w-100", onClick: function () { return setEditBio(true); } }, "Edit Bio"))),
        React__default["default"].createElement("div", { className: "mb-3" },
            bioData.map(function (item) { return (React__default["default"].createElement("div", { className: "d-flex align-items-center mb-2", key: item.id },
                React__default["default"].createElement("div", { className: "me-2" },
                    React__default["default"].createElement(react.Icon, { icon: item.icon, className: "fs-22px text-gray-4" })),
                React__default["default"].createElement("div", null, item.label))); }),
            React__default["default"].createElement("a", { href: "/account-settings" },
                React__default["default"].createElement(Button__default["default"], { variant: "light", className: "w-100" }, "Edit Details")))));
};

var PostModal = function (_a) {
    var show = _a.show, handleClose = _a.handleClose, size = _a.size, title = _a.title, children = _a.children;
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement(Modal__default["default"], { onClose: handleClose, size: size, show: show, onHide: handleClose },
            React__default["default"].createElement(Modal__default["default"].Header, { closeButton: true },
                React__default["default"].createElement("div", { className: "fw-700" }, title)),
            React__default["default"].createElement(Modal__default["default"].Body, null, children))));
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

var SelectOptions = function (props) {
    var isMulti = props.isMulti, value = props.value, onChange = props.onChange; props.icon;
    var handleRemoveValue = function (e) {
        if (!onChange)
            return;
        var buttonName = e.currentTarget.name;
        var removedValue = value.find(function (val) { return val.value === buttonName; });
        if (!removedValue)
            return;
        onChange(value.filter(function (val) { return val.value !== buttonName; }), { name: name, action: "remove-value", removedValue: removedValue });
    };
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement("div", { className: "d-flex flex-wrap" }, isMulti
            ? value.map(function (val) { return (React__default["default"].createElement("div", { key: val.value, className: "d-flex align-items-center border-1-solid-gray-4 me-2 mb-2 px-2 py-1 rounded-8px" },
                React__default["default"].createElement("div", null,
                    React__default["default"].createElement(react.Icon, { icon: val.icon, className: "fs-20px me-1 text-gray-4" })),
                React__default["default"].createElement("div", null, val.label),
                React__default["default"].createElement("button", { name: val.value, onClick: handleRemoveValue, className: "btn-reset ms-2" },
                    React__default["default"].createElement(react.Icon, { icon: "pepicons-pop:times", className: "fs-20px" })))); })
            : null),
        React__default["default"].createElement(Select__default["default"], __assign({}, props, { controlShouldRenderValue: !isMulti, isClearable: false }))));
};

var Hobbies = function (_a) {
    var className = _a.className;
    var _b = React.useState(false), show = _b[0], setShow = _b[1];
    var _c = React.useState([]), selected = _c[0], setSelected = _c[1];
    var handleSelectChange = function (values) {
        setSelected(values);
    };
    var hobbyList = [
        {
            id: 0,
            label: 'Eating',
            icon: 'icon-park-solid:fork-spoon'
        },
        {
            id: 1,
            label: 'Basketball',
            icon: 'mdi:basketball'
        },
        {
            id: 2,
            label: 'Video Games',
            icon: 'dashicons:games'
        },
        {
            id: 3,
            label: 'Volley Ball',
            icon: 'material-symbols:sports-volleyball'
        },
        {
            id: 4,
            label: 'Listening to Music',
            icon: 'ic:round-music-note'
        },
        {
            id: 5,
            label: 'Swimming',
            icon: 'fa-solid:swimmer'
        },
        {
            id: 6,
            label: 'Cooking',
            icon: 'icon-park-solid:cook'
        },
        {
            id: 7,
            label: 'Art',
            icon: 'map:art-gallery'
        },
        {
            id: 8,
            label: 'Traveling',
            icon: 'material-symbols:card-travel'
        },
        {
            id: 9,
            label: 'Singing',
            icon: 'mingcute:microphone-fill'
        },
    ];
    var options = [
        {
            value: "0",
            label: 'Eating',
            icon: 'icon-park-solid:fork-spoon'
        },
        {
            value: "1",
            label: 'Basketball',
            icon: 'mdi:basketball'
        },
        {
            value: "2",
            label: 'Video Games',
            icon: 'dashicons:games'
        },
        {
            value: "3",
            label: 'Volley Ball',
            icon: 'material-symbols:sports-volleyball'
        },
        {
            value: "4",
            label: 'Listening to Music',
            icon: 'ic:round-music-note'
        },
        {
            value: "5",
            label: 'Swimming',
            icon: 'fa-solid:swimmer'
        },
        {
            value: "6",
            label: 'Cooking',
            icon: 'icon-park-solid:cook'
        },
        {
            value: "7",
            label: 'Art',
            icon: 'map:art-gallery'
        },
        {
            value: "8",
            label: 'Traveling',
            icon: 'material-symbols:card-travel'
        },
        {
            value: "9",
            label: 'Singing',
            icon: 'mingcute:microphone-fill'
        },
    ];
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement(PostModal, { show: show, handleClose: function () { return setShow(false); }, handleShow: function () { return setShow(true); }, title: "Edit Hobbies" },
            React__default["default"].createElement("div", { className: "mb-3" }, "What do you love to do? Choose from the popular hobbies below or add others."),
            React__default["default"].createElement(SelectOptions, { onChange: handleSelectChange, isMulti: true, options: options, value: selected, className: "select", classNamePrefix: "select" })),
        React__default["default"].createElement("div", { className: "mb-2 d-flex flex-wrap" }, hobbyList.map(function (item) { return (React__default["default"].createElement("div", { className: "d-flex align-items-center border-1-solid-gray-4 me-2 mb-2 px-2 py-1 rounded-8px", key: item.id },
            React__default["default"].createElement("div", null,
                React__default["default"].createElement(react.Icon, { icon: item.icon, className: "fs-16px me-1 text-gray-4" })),
            React__default["default"].createElement("div", null, item.label))); })),
        React__default["default"].createElement(Button__default["default"], { variant: "light", className: "w-100", onClick: function () { return setShow(true); } }, "Edit Hobbies")));
};

var Privacy = function (_a) {
    var label = _a.label;
    var _b = React.useState(false), show = _b[0], setShow = _b[1];
    var _c = React.useState("Public"), privacy = _c[0], setPrivacy = _c[1];
    var handleClose = function () { return setShow(false); };
    var handleShow = function () { return setShow(true); };
    var RadioButton = function (props) {
        var changed = props.changed, id = props.id, isSelected = props.isSelected, label = props.label, value = props.value, labelClassName = props.labelClassName, className = props.className, icon = props.icon;
        return (React__default["default"].createElement("div", { className: className },
            React__default["default"].createElement("label", { className: "d-flex align-items-center cursor-pointer " + labelClassName, htmlFor: id },
                React__default["default"].createElement("div", { className: "d-flex" },
                    React__default["default"].createElement("div", null,
                        React__default["default"].createElement(react.Icon, { icon: icon, className: "fs-20px me-2" })),
                    React__default["default"].createElement("div", null, label)),
                React__default["default"].createElement("input", { id: id, onChange: changed, value: value, type: "radio", checked: isSelected }))));
    };
    var radioChangeHandler = function (e) {
        setPrivacy(e.target.value);
    };
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        label ?
            React__default["default"].createElement(Button__default["default"], { variant: "light", onClick: handleShow }, privacy === "Public" ?
                React__default["default"].createElement("div", { className: "d-flex align-items-center" },
                    React__default["default"].createElement(react.Icon, { icon: "mdi:globe", className: "me-2" }),
                    " Public") : privacy === "Friends" ?
                React__default["default"].createElement("div", { className: "d-flex align-items-center" },
                    React__default["default"].createElement(react.Icon, { icon: "ph:users-three-fill", className: "me-2" }),
                    " Friends") : privacy === "Private" ?
                React__default["default"].createElement("div", { className: "d-flex align-items-center" },
                    React__default["default"].createElement(react.Icon, { icon: "uis:padlock", className: "me-2" }),
                    " Only Me") : '') :
            React__default["default"].createElement(react.Icon, { onClick: handleShow, icon: privacy === "Public" ? 'mdi:globe' : privacy === "Friends" ? 'ph:users-three-fill' : privacy === "Private" ? 'uis:padlock' : '', className: "fs-20px cursor-pointer" }),
        React__default["default"].createElement(Modal__default["default"], { show: show, onHide: handleClose },
            React__default["default"].createElement(Modal__default["default"].Header, { closeButton: true },
                React__default["default"].createElement("div", { className: "fw-700" }, "Select audience")),
            React__default["default"].createElement(Modal__default["default"].Body, null,
                React__default["default"].createElement(RadioButton, { changed: radioChangeHandler, icon: "mdi:globe", id: "public", isSelected: privacy === "Public", label: "Public", value: "Public", labelClassName: "mb-2 p-3 rounded-8px bg-gray-1 justify-content-between w-100" }),
                React__default["default"].createElement(RadioButton, { changed: radioChangeHandler, icon: "ph:users-three-fill", id: "friends", isSelected: privacy === "Friends", label: "Friends", value: "Friends", labelClassName: "mb-2 p-3 rounded-8px bg-gray-1 justify-content-between w-100" }),
                React__default["default"].createElement(RadioButton, { changed: radioChangeHandler, icon: "uis:padlock", id: "private", isSelected: privacy === "Private", label: "Only Me", value: "Private", labelClassName: "mb-2 p-3 rounded-8px bg-gray-1 justify-content-between w-100" })),
            React__default["default"].createElement("div", { className: "d-flex px-3 pb-3 justify-content-end" },
                React__default["default"].createElement(Button__default["default"], { variant: "light", onClick: handleClose, className: "me-3" }, "Cancel"),
                React__default["default"].createElement(Button__default["default"], { variant: "primary", onClick: handleClose }, "Done")))));
};
Privacy.defaultProps = {};

var DropdownButton = function (_a) {
    var onClick = _a.onClick, title = _a.title;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(Dropdown__default["default"], { className: "dropdown-seamless" },
            React__default["default"].createElement(Dropdown__default["default"].Toggle, null,
                React__default["default"].createElement("div", { className: "ms-2 w-30px h-30px text-base rounded-circle bg-gray-6 d-flex align-items-center justify-content-center" },
                    React__default["default"].createElement(react.Icon, { icon: "mdi:ellipsis-horizontal", className: "fs-20px" }))),
            React__default["default"].createElement(Dropdown__default["default"].Menu, { className: "p-3 w-200px" },
                React__default["default"].createElement(Dropdown__default["default"].Item, { className: "px-0 d-flex align-items-center mb-2", onClick: onClick },
                    React__default["default"].createElement(react.Icon, { icon: "lucide:edit", className: "fs-20px me-2" }),
                    React__default["default"].createElement("div", null,
                        "Edit ",
                        title)),
                React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "px-0 d-flex align-items-center mb-2" },
                    React__default["default"].createElement(react.Icon, { icon: "lucide:trash-2", className: "fs-20px me-2" }),
                    React__default["default"].createElement("div", null,
                        "Delete ",
                        title))))));
};
DropdownButton.defaultProps = {
    title: ''
};

exports.Avatar = Avatar;
exports.Banner = Banner;
exports.Bio = Bio;
exports.DropdownButton = DropdownButton;
exports.Hobbies = Hobbies;
exports.Modal = PostModal;
exports.Privacy = Privacy;
exports.SelectOptions = SelectOptions;
exports.UserPopover = UserPopover;
