'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Col = require('react-bootstrap/Col');
var Row = require('react-bootstrap/Row');
var reactTabs = require('react-tabs');
var Dropdown = require('react-bootstrap/Dropdown');
var react = require('@iconify/react');
var TextareaAutosize = require('react-textarea-autosize');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Col__default = /*#__PURE__*/_interopDefaultLegacy(Col);
var Row__default = /*#__PURE__*/_interopDefaultLegacy(Row);
var Dropdown__default = /*#__PURE__*/_interopDefaultLegacy(Dropdown);
var TextareaAutosize__default = /*#__PURE__*/_interopDefaultLegacy(TextareaAutosize);

var Avatar = function (_a) {
    var className = _a.className, src = _a.src, width = _a.width, height = _a.height, status = _a.status;
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement("div", { className: "bg-gray-3 rounded-circle bg-center bg-cover d-flex justify-content-end", "data-width": width, "data-height": height, style: { backgroundImage: "url( ".concat(src, " )") } },
            React__default["default"].createElement("div", { className: "w-12px h-12px rounded-circle border-2-solid-white " + status }))));
};

var Conversation = function (_a) {
    var userName = _a.userName, currentMessage = _a.currentMessage, userStatus = _a.userStatus;
    return (React__default["default"].createElement("div", { className: "d-flex flex-column h-100" },
        React__default["default"].createElement("div", { className: "d-flex align-items-center justify-content-between p-3 border-bottom-1-solid-gray-6" },
            React__default["default"].createElement("div", { className: "d-flex align-items-center" },
                React__default["default"].createElement(Avatar, { width: 55, height: 55, src: "https://i.pravatar.cc/55/55", status: userStatus, className: "me-2" }),
                React__default["default"].createElement("div", null,
                    React__default["default"].createElement("div", { className: "fw-500" }, userName),
                    React__default["default"].createElement("div", { className: "fs-12px" }, userStatus === 'bg-success-2' ? "Online" : "Offline"))),
            React__default["default"].createElement(Dropdown__default["default"], { className: "dropdown-seamless" },
                React__default["default"].createElement(Dropdown__default["default"].Toggle, null,
                    React__default["default"].createElement(react.Icon, { icon: "lucide:more-vertical", className: "fs-20px cursor-pointer text-base" })),
                React__default["default"].createElement(Dropdown__default["default"].Menu, { align: "end", className: "w-200px" },
                    React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center" },
                        React__default["default"].createElement("div", { className: "me-2" },
                            React__default["default"].createElement(react.Icon, { icon: "lucide:user", className: "fs-20px" })),
                        React__default["default"].createElement("div", null, "View Profile")),
                    React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center" },
                        React__default["default"].createElement("div", { className: "me-2" },
                            React__default["default"].createElement(react.Icon, { icon: "lucide:alert-circle", className: "fs-20px" })),
                        React__default["default"].createElement("div", null, "Block")),
                    React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center" },
                        React__default["default"].createElement("div", { className: "me-2" },
                            React__default["default"].createElement(react.Icon, { icon: "lucide:trash-2", className: "fs-20px" })),
                        React__default["default"].createElement("div", null, "Delete Conversation"))))),
        React__default["default"].createElement("div", { className: "h-100 d-flex flex-column p-3" },
            React__default["default"].createElement("div", { className: "position-relative h-100" },
                React__default["default"].createElement("div", { className: "overflow-y-auto position-absolute h-100 top-0 start-0 w-100" },
                    React__default["default"].createElement("div", { className: "d-flex" },
                        React__default["default"].createElement("div", { className: "w-80p" },
                            React__default["default"].createElement("div", { className: "d-flex align-items-center mb-3" },
                                React__default["default"].createElement("div", { className: "bg-gray-1 px-2 py-1 me-2 rounded-10px" }, currentMessage)))),
                    React__default["default"].createElement("div", { className: "d-flex justify-content-end" },
                        React__default["default"].createElement("div", { className: "w-80p" },
                            React__default["default"].createElement("div", { className: "d-flex align-items-center justify-content-end mb-3" },
                                React__default["default"].createElement("div", { className: "text-white bg-primary px-2 py-1 me-2 rounded-10px" }, "Yow! It\u2019s exciting! It\u2019s much busier than the last city we lived in. I was working in Seattle for the last 3 years."),
                                React__default["default"].createElement("div", null,
                                    React__default["default"].createElement(react.Icon, { icon: "material-symbols:check-circle-rounded", className: "fs-14px text-primary" }))))))),
            React__default["default"].createElement("div", null,
                React__default["default"].createElement("div", { className: "fs-12px mb-1 text-gray-4" },
                    userName,
                    " is typing ..."),
                React__default["default"].createElement("div", { className: "d-flex align-items-end" },
                    React__default["default"].createElement(TextareaAutosize__default["default"], { maxRows: 3, minRows: 1, className: "form-control w-100 me-2", placeholder: "Write something here ..." }),
                    React__default["default"].createElement(react.Icon, { icon: "ant-design:like-filled", className: "cursor-pointer fs-24px cursor-pointer text-primary mb-2" }))))));
};

var TabContainer = function (_a) {
    var TablistItem = [
        {
            id: 1,
            name: 'Jason Daro',
            avatar: 'https://i.pravatar.cc/35/35',
            currentMessage: 'Hey! Did you just arrive here? How do you like it?',
            newMessage: 3,
            status: "bg-success-2"
        },
        {
            id: 2,
            name: 'Marc Umali',
            avatar: 'https://i.pravatar.cc/36/36',
            currentMessage: 'ipsum eveniet sapiente, ipsam nostrum assumenda pariatur ratione suscipit',
            status: "bg-gray-3"
        },
        {
            id: 3,
            name: 'Kevin Rey Tabada',
            avatar: 'https://i.pravatar.cc/37/37',
            currentMessage: 'dolorum fuga optio nam corporis iusto, incidunt dolore nemo in harum omnis?',
            status: "bg-success-2"
        },
        {
            id: 4,
            name: 'Archere Dimaculangan',
            avatar: 'https://i.pravatar.cc/38/38',
            currentMessage: 'incidunt dolore nemo in harum omnis',
            status: "bg-gray-3"
        },
    ];
    return (React__default["default"].createElement("div", { className: "w-100 h-100" },
        React__default["default"].createElement(reactTabs.Tabs, { className: "h-100 tabs-h-100" },
            React__default["default"].createElement(Row__default["default"], { className: "h-100 w-100 m-0" },
                React__default["default"].createElement(Col__default["default"], { md: 5, lg: 6, xl: 4, className: "py-4 px-0 px-md-3" },
                    React__default["default"].createElement("div", { className: "bg-white rounded-8px box-shadow-1 h-100 position-relative" },
                        React__default["default"].createElement("div", { className: "overflow-y-auto position-absolute h-100 top-0 start-0 w-100 p-3" },
                            React__default["default"].createElement(reactTabs.TabList, { className: "list-unstyled cursor-pointer tabs-box" }, TablistItem.map(function (item) { return (React__default["default"].createElement(reactTabs.Tab, { className: "d-flex align-items-center" },
                                React__default["default"].createElement(Avatar, { width: 35, height: 35, src: item.avatar, status: item.status, className: "me-2" }),
                                React__default["default"].createElement("div", null,
                                    React__default["default"].createElement("div", null, item.name),
                                    React__default["default"].createElement("div", { className: "clamp clamp-1 text-gray-3 fs-12px" }, item.currentMessage)),
                                item.newMessage &&
                                    React__default["default"].createElement("div", { className: "ms-auto" },
                                        React__default["default"].createElement("div", { className: "w-20px h-20px rounded-circle d-flex align-items-center justify-content-center bg-danger fs-10px text-white" }, "3")))); }))))),
                React__default["default"].createElement(Col__default["default"], { md: 7, lg: 6, xl: 8, className: "py-4 d-none d-md-block" },
                    React__default["default"].createElement("div", { className: "bg-white rounded-8px box-shadow-1 h-100" }, TablistItem.map(function (item) { return (React__default["default"].createElement(reactTabs.TabPanel, null,
                        React__default["default"].createElement(Conversation, { userName: item.name, currentMessage: item.currentMessage, userStatus: item.status }))); })))))));
};

exports.Avatar = Avatar;
exports.Conversation = Conversation;
exports.TabContainer = TabContainer;
