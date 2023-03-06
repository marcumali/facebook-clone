'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Col = require('react-bootstrap/Col');
var Row = require('react-bootstrap/Row');
var Container = require('react-bootstrap/Container');
var reactTabs = require('react-tabs');
var react = require('@iconify/react');
var Form = require('react-bootstrap/Form');
var Button = require('react-bootstrap/Button');
var Select = require('react-select');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Col__default = /*#__PURE__*/_interopDefaultLegacy(Col);
var Row__default = /*#__PURE__*/_interopDefaultLegacy(Row);
var Container__default = /*#__PURE__*/_interopDefaultLegacy(Container);
var Form__default = /*#__PURE__*/_interopDefaultLegacy(Form);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);

var Input$1 = function (_a) {
    var label = _a.label, value = _a.value, placeholder = _a.placeholder, alert = _a.alert, message = _a.message;
    return (React__default["default"].createElement(Form__default["default"].Group, { className: "mb-3", controlId: "formBasicEmail" },
        React__default["default"].createElement(Form__default["default"].Label, null, label),
        React__default["default"].createElement(Form__default["default"].Control, { value: value, placeholder: placeholder }),
        alert && React__default["default"].createElement(Form__default["default"].Text, { className: "text-danger" }, alert),
        message && React__default["default"].createElement(Form__default["default"].Text, { className: "text-gray-2" }, message)));
};

var Check = function (_a) {
    var label = _a.label, name = _a.name, className = _a.className;
    return (React__default["default"].createElement(Form__default["default"].Group, { className: "d-flex align-items-center " + className, controlId: "formBasicEmail" },
        React__default["default"].createElement(Form__default["default"].Check, { "aria-label": "option 1", name: name, className: "me-2" }),
        React__default["default"].createElement(Form__default["default"].Label, { label: label }, label)));
};

var GeneralSettings = function (_a) {
    var DropdownIndicator = function () {
        return React__default["default"].createElement(react.Icon, { icon: "lucide:chevron-down", className: "me-2 text-gray-5 fs-20px" });
    };
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: "p-3 border-bottom-1-solid-gray-4" },
            React__default["default"].createElement("div", { className: "fw-700 fs-18px mb-3" }, "General Settings"),
            React__default["default"].createElement("div", { className: "d-flex align-items-center mb-3" },
                React__default["default"].createElement("div", { className: "me-4" },
                    React__default["default"].createElement("div", { className: "bg-gray-1 w-75px h-75px rounded-circle bg-center bg-cover position-relative", style: { backgroundImage: "url( https://i.pravatar.cc )" } },
                        React__default["default"].createElement("div", { className: "w-35px h-35px rounded-circle d-flex align-items-center justify-content-center bg-gray-1 cursor-pointer position-absolute end-0 bottom-0" },
                            React__default["default"].createElement(react.Icon, { icon: "mdi:camera", className: "fs-20px" })))),
                React__default["default"].createElement("div", { className: "lh-sm" },
                    React__default["default"].createElement("div", { className: "fs-18px fw-700" }, "Marc Umali"),
                    React__default["default"].createElement("div", { className: "text-gray-4" }, "@marcumali"))),
            React__default["default"].createElement("div", { className: "mx-n3" },
                React__default["default"].createElement(Row__default["default"], null,
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Input$1, { label: "Username", type: "text", value: "marcumali", placeholder: "Username", alert: "This field is requried." })),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Input$1, { label: "Email", type: "email", value: "marcumali", placeholder: "Email", alert: "This field is requried." })),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Input$1, { label: "Phone", type: "number", value: "+63 987 6543 210", placeholder: "Phone" })),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Check, { label: "Enable/Disable Phone Number", name: "name", className: "mt-5" })),
                    React__default["default"].createElement(Col__default["default"], { lg: 12 },
                        React__default["default"].createElement(Form__default["default"].Group, { className: "mb-3", controlId: "formBasicEmail" },
                            React__default["default"].createElement(Form__default["default"].Label, null, "Birthday"),
                            React__default["default"].createElement(Form__default["default"].Control, { type: "text", placeholder: "Pick Date" }),
                            React__default["default"].createElement(Form__default["default"].Text, { className: "text-danger" }, "This field is required."))),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Form__default["default"].Group, { className: "mb-3", controlId: "formBasicEmail" },
                            React__default["default"].createElement(Form__default["default"].Label, null, "Country"),
                            React__default["default"].createElement(Select__default["default"], { options: [], components: { DropdownIndicator: DropdownIndicator }, className: "select", classNamePrefix: "select" }),
                            React__default["default"].createElement(Form__default["default"].Text, { className: "text-danger" }, "This field is required."))),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Form__default["default"].Group, { className: "mb-3", controlId: "formBasicEmail" },
                            React__default["default"].createElement(Form__default["default"].Label, null, "Gender"),
                            React__default["default"].createElement(Select__default["default"], { options: [], components: { DropdownIndicator: DropdownIndicator }, className: "select", classNamePrefix: "select" }),
                            React__default["default"].createElement(Form__default["default"].Text, { className: "text-danger" }, "This field is required.")))))),
        React__default["default"].createElement("div", { className: "p-3" },
            React__default["default"].createElement(Button__default["default"], null, "Save"))));
};

var Input = function (_a) {
    var label = _a.label, value = _a.value, alert = _a.alert;
    return (React__default["default"].createElement(Form__default["default"].Group, { className: "mb-3", controlId: "formBasicEmail" },
        React__default["default"].createElement(Form__default["default"].Label, null, label),
        React__default["default"].createElement("textarea", { className: "form-control" }, value),
        React__default["default"].createElement(Form__default["default"].Text, { className: "text-danger" }, alert)));
};

var Profile = function (_a) {
    var DropdownIndicator = function () {
        return React__default["default"].createElement(react.Icon, { icon: "lucide:chevron-down", className: "me-2 text-gray-5 fs-20px" });
    };
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: "p-3 border-bottom-1-solid-gray-4" },
            React__default["default"].createElement("div", { className: "mx-n3" },
                React__default["default"].createElement(Row__default["default"], null,
                    React__default["default"].createElement(Col__default["default"], { lg: 12 },
                        React__default["default"].createElement("div", { className: "fw-700 fs-18px mb-3" }, "Profile"))),
                React__default["default"].createElement(Row__default["default"], null,
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Input$1, { type: "text", label: "First Name", value: "Marc Umali", placeholder: "First Name", alert: "This field is required" })),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Input$1, { type: "text", label: "Last Name", value: "Marc Umali", placeholder: "Last Name", alert: "This field is required" })),
                    React__default["default"].createElement(Col__default["default"], { lg: 12 },
                        React__default["default"].createElement(Input, { label: "About Me" })),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Input$1, { type: "text", label: "School", value: "Harvard University", placeholder: "School" })),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Check, { label: "Completed?", name: "name", className: "mt-5" })),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Input$1, { type: "text", label: "Working at", placeholder: "Working at" })),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Input$1, { type: "text", label: "Company Website", placeholder: "Company Website", message: "(e.g http://www.example.com)" })),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Input$1, { type: "text", label: "Your Website", placeholder: "Your Website Website" })),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Form__default["default"].Group, { className: "mb-3", controlId: "formBasicEmail" },
                            React__default["default"].createElement(Form__default["default"].Label, null, "Relationship"),
                            React__default["default"].createElement(Select__default["default"], { options: [], components: { DropdownIndicator: DropdownIndicator }, className: "select", classNamePrefix: "select" })))))),
        React__default["default"].createElement("div", { className: "p-3" },
            React__default["default"].createElement(Button__default["default"], null, "Save"))));
};

var Security = function (_a) {
    var _b = React.useState(false), passwordShown = _b[0], setPasswordShown = _b[1];
    var togglePassword = function () {
        setPasswordShown(!passwordShown);
    };
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: "p-3 border-bottom-1-solid-gray-4" },
            React__default["default"].createElement("div", { className: "mx-n3" },
                React__default["default"].createElement(Row__default["default"], null,
                    React__default["default"].createElement(Col__default["default"], { lg: 12 },
                        React__default["default"].createElement("div", { className: "fw-700 fs-18px mb-3" }, "Password")),
                    React__default["default"].createElement(Col__default["default"], { lg: 12 },
                        React__default["default"].createElement(Form__default["default"].Group, { className: "mb-3", controlId: "formBasicEmail" },
                            React__default["default"].createElement(Form__default["default"].Label, null, "Current Password"),
                            React__default["default"].createElement("div", { className: "position-relative" },
                                React__default["default"].createElement(Form__default["default"].Control, { type: passwordShown ? "text" : "password", placeholder: "Current Password" }),
                                React__default["default"].createElement(react.Icon, { className: "cursor-pointer position-absolute top-0 bottom-0 my-auto fs-16px end-0 me-3", icon: passwordShown ? "lucide:eye" : "lucide:eye-off", onClick: togglePassword })),
                            React__default["default"].createElement(Form__default["default"].Text, { className: "text-danger" }, "Incorrect Password"))),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Form__default["default"].Group, { className: "mb-3", controlId: "formBasicEmail" },
                            React__default["default"].createElement(Form__default["default"].Label, null, "New Password"),
                            React__default["default"].createElement("div", { className: "position-relative" },
                                React__default["default"].createElement(Form__default["default"].Control, { type: passwordShown ? "text" : "password", placeholder: "Current Password" }),
                                React__default["default"].createElement(react.Icon, { className: "cursor-pointer position-absolute top-0 bottom-0 my-auto fs-16px end-0 me-3", icon: passwordShown ? "lucide:eye" : "lucide:eye-off", onClick: togglePassword })),
                            React__default["default"].createElement(Form__default["default"].Text, { className: "text-danger" }, "Password not match"))),
                    React__default["default"].createElement(Col__default["default"], { lg: 6 },
                        React__default["default"].createElement(Form__default["default"].Group, { className: "mb-3", controlId: "formBasicEmail" },
                            React__default["default"].createElement(Form__default["default"].Label, null, "Confirm Password"),
                            React__default["default"].createElement("div", { className: "position-relative" },
                                React__default["default"].createElement(Form__default["default"].Control, { type: passwordShown ? "text" : "password", placeholder: "Current Password" }),
                                React__default["default"].createElement(react.Icon, { className: "cursor-pointer position-absolute top-0 bottom-0 my-auto fs-16px end-0 me-3", icon: passwordShown ? "lucide:eye" : "lucide:eye-off", onClick: togglePassword })),
                            React__default["default"].createElement(Form__default["default"].Text, { className: "text-danger" }, "Password not match")))))),
        React__default["default"].createElement("div", { className: "p-3" },
            React__default["default"].createElement(Button__default["default"], null, "Save"))));
};

var DeleteAccount = function (_a) {
    var _b = React.useState(false), passwordShown = _b[0], setPasswordShown = _b[1];
    var togglePassword = function () {
        setPasswordShown(!passwordShown);
    };
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: "p-3 border-bottom-1-solid-gray-4" },
            React__default["default"].createElement("div", { className: "mx-n3" },
                React__default["default"].createElement(Row__default["default"], null,
                    React__default["default"].createElement(Col__default["default"], { lg: 12 },
                        React__default["default"].createElement("div", { className: "fw-700 fs-18px mb-3" }, "Delete Account")),
                    React__default["default"].createElement(Col__default["default"], { lg: 12 },
                        React__default["default"].createElement(Form__default["default"].Group, { className: "mb-3", controlId: "formBasicEmail" },
                            React__default["default"].createElement(Form__default["default"].Label, null, "Current Password"),
                            React__default["default"].createElement("div", { className: "position-relative" },
                                React__default["default"].createElement(Form__default["default"].Control, { type: passwordShown ? "text" : "password", placeholder: "Current Password" }),
                                React__default["default"].createElement(react.Icon, { className: "cursor-pointer position-absolute top-0 bottom-0 my-auto fs-16px end-0 me-3", icon: passwordShown ? "lucide:eye" : "lucide:eye-off", onClick: togglePassword })),
                            React__default["default"].createElement(Form__default["default"].Text, { className: "text-danger" }, "Incorrect Password")))))),
        React__default["default"].createElement("div", { className: "p-3" },
            React__default["default"].createElement(Button__default["default"], null, "Save"))));
};

var TablistItem = [
    {
        label: 'General Settings',
        icon: 'mdi:cog'
    },
    {
        label: 'Profile',
        icon: 'mdi:user'
    },
    {
        label: 'Security',
        icon: 'mdi:shield'
    },
    {
        label: 'Delete Account',
        icon: 'mdi:trash'
    },
];
var TabContainer = function (_a) {
    return (React__default["default"].createElement("div", { className: "w-100" },
        React__default["default"].createElement(Container__default["default"], { className: "px-0 px-lg-3" },
            React__default["default"].createElement(reactTabs.Tabs, { className: "tabs-icon-vertical-responsive" },
                React__default["default"].createElement(Row__default["default"], { className: "h-100 w-100 m-0" },
                    React__default["default"].createElement(Col__default["default"], { md: { span: 4, order: "last" }, className: "pt-4 px-0 px-md-3" },
                        React__default["default"].createElement("div", { className: "p-md-3 bg-md-white rounded-8px box-shadow-md-1" },
                            React__default["default"].createElement("div", { className: "tab-list-reponsive" },
                                React__default["default"].createElement(reactTabs.TabList, { className: "list-unstyled cursor-pointer" }, TablistItem.map(function (item) { return (React__default["default"].createElement(reactTabs.Tab, null,
                                    React__default["default"].createElement("div", { className: "bg-gray-1 w-35px h-35px d-flex align-items-center justify-content-center rounded-circle text-primary me-3" },
                                        React__default["default"].createElement(react.Icon, { icon: item.icon, className: "fs-22px" })),
                                    React__default["default"].createElement("div", null, item.label))); }))))),
                    React__default["default"].createElement(Col__default["default"], { md: { span: 8, order: "first" }, className: "pt-4" },
                        React__default["default"].createElement("div", { className: "bg-white rounded-8px box-shadow-1" },
                            React__default["default"].createElement(reactTabs.TabPanel, null,
                                React__default["default"].createElement(GeneralSettings, null)),
                            React__default["default"].createElement(reactTabs.TabPanel, null,
                                React__default["default"].createElement(Profile, null)),
                            React__default["default"].createElement(reactTabs.TabPanel, null,
                                React__default["default"].createElement(Security, null)),
                            React__default["default"].createElement(reactTabs.TabPanel, null,
                                React__default["default"].createElement(DeleteAccount, null)))))))));
};

exports.Check = Check;
exports.DeleteAccount = DeleteAccount;
exports.GeneralSettings = GeneralSettings;
exports.Input = Input$1;
exports.Profile = Profile;
exports.Security = Security;
exports.TabContainer = TabContainer;
exports.Textarea = Input;
