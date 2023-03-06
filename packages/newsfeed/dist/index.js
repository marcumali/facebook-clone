'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@iconify/react');
var Col = require('react-bootstrap/Col');
var Row = require('react-bootstrap/Row');
var Image = require('react-bootstrap/Image');
var Link = require('next/link');
var Form = require('react-bootstrap/Form');
var Dropdown = require('react-bootstrap/Dropdown');
var Button = require('react-bootstrap/Button');
var Accordion = require('react-bootstrap/Accordion');
var AccordionButton = require('react-bootstrap/AccordionButton');
var TextareaAutosize = require('react-textarea-autosize');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Col__default = /*#__PURE__*/_interopDefaultLegacy(Col);
var Row__default = /*#__PURE__*/_interopDefaultLegacy(Row);
var Image__default = /*#__PURE__*/_interopDefaultLegacy(Image);
var Link__default = /*#__PURE__*/_interopDefaultLegacy(Link);
var Form__default = /*#__PURE__*/_interopDefaultLegacy(Form);
var Dropdown__default = /*#__PURE__*/_interopDefaultLegacy(Dropdown);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var Accordion__default = /*#__PURE__*/_interopDefaultLegacy(Accordion);
var TextareaAutosize__default = /*#__PURE__*/_interopDefaultLegacy(TextareaAutosize);

var SidebarMenuItems = function (_a) {
    var className = _a.className;
    var MenuList = [
        {
            id: 1,
            label: 'Newsfeed',
            icon: 'mdi:home',
            link: '/newsfeed'
        },
        {
            id: 2,
            label: 'Friends',
            icon: 'mdi:users',
            link: '/my-profile'
        },
        {
            id: 3,
            label: 'Messages',
            icon: 'mdi:message',
            link: '/messenger'
        },
        {
            id: 4,
            label: 'Read The Bible',
            icon: 'mdi:book',
            link: '/read-the-bible'
        },
        {
            id: 5,
            label: 'Ask God',
            icon: 'simple-icons:askubuntu',
            link: '/ask-god'
        },
        {
            id: 6,
            label: 'Devotionals',
            icon: 'material-symbols:shield-with-heart',
            link: '/devotionals'
        },
        {
            id: 7,
            label: 'Christian Magazine',
            icon: 'mdi:book-cross',
            link: '/christian-magazine'
        },
        {
            id: 8,
            label: 'Christian News',
            icon: 'fluent:news-24-filled',
            link: '/christian-news'
        },
        {
            id: 9,
            label: 'Christian Events',
            icon: 'material-symbols:calendar-month',
            link: '/christian-events'
        },
        {
            id: 10,
            label: 'Christian Radio',
            icon: 'mdi:radio-tower',
            link: '/christian-radio'
        },
        {
            id: 11,
            label: 'Prayer Request',
            icon: 'fa6-solid:hands-praying',
            link: '/prayer-request'
        },
        {
            id: 12,
            label: 'Christian Television',
            icon: 'ph:television-simple-fill',
            link: '/christian-television'
        },
        {
            id: 13,
            label: 'Top Videos',
            icon: 'material-symbols:play-circle-rounded',
            link: '/top-videos'
        },
    ];
    return (React__default["default"].createElement("div", { className: className }, MenuList.map(function (item) { return (React__default["default"].createElement(Link__default["default"], { href: item.link, key: item.id },
        React__default["default"].createElement("div", { className: "d-flex align-items-center mb-2" },
            React__default["default"].createElement("div", { className: "bg-white w-30px h-30px rounded-circle d-flex align-items-center justify-content-center me-2" },
                React__default["default"].createElement(react.Icon, { icon: item.icon, className: "fs-18px text-primary" })),
            React__default["default"].createElement("div", null, item.label)))); })));
};

var Avatar = function (_a) {
    var className = _a.className, src = _a.src, width = _a.width, height = _a.height, hasMessage = _a.hasMessage;
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement("div", { className: "bg-gray-3 rounded-circle bg-center bg-cover d-flex justify-content-end", "data-width": width, "data-height": height, style: { backgroundImage: "url( ".concat(src, " )") } }, hasMessage && React__default["default"].createElement("div", { className: "w-12px h-12px rounded-circle border-2-solid-white bg-danger" }))));
};

var Friends$2 = function (_a) {
    var listRef = React.useRef();
    var _b = React.useState([
        {
            id: 0,
            name: 'Jason Daro',
            avatar: 'https://i.pravatar.cc/32/32',
            link: '#'
        },
        {
            id: 1,
            name: 'Kevin Rey Tabada',
            avatar: 'https://i.pravatar.cc/33/33',
            link: '#'
        },
    ]), RecentSearches = _b[0], setRecentSearches = _b[1];
    var removeItem = function (id) {
        var newList = RecentSearches.filter(function (l) { return l.id !== id; });
        setRecentSearches(newList);
    };
    var _c = React.useState(false), searchDrawer = _c[0], setSearchDrawer = _c[1];
    var showSearchDrawer = function () { return setSearchDrawer(!searchDrawer); };
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement("div", { className: "position-relative", onClick: showSearchDrawer },
            React__default["default"].createElement("div", { className: "d-flex d-md-none align-items-center text-white cursor-pointer mx-1 position-relative h-35px w-35px w-md-40px h-md-40px bg-primary-6 rounded-circle justify-content-center" },
                React__default["default"].createElement(react.Icon, { icon: "lucide:search", className: "fs-16px fs-md-20px" })),
            React__default["default"].createElement("div", { className: "d-none d-md-block position-relative" },
                React__default["default"].createElement(react.Icon, { icon: "lucide:search", className: "position-absolute top-0 bottom-0 my-auto fs-18px ms-2" }),
                React__default["default"].createElement("div", { className: "rounded-100px cursor-pointer bg-white pe-3 py-2 ps-6 text-gray-4 w-170px" }, "Search Koinonia"))),
        React__default["default"].createElement("div", { className: searchDrawer ? "d-block" : "d-none" },
            React__default["default"].createElement("div", { className: "position-fixed top-0 start-0 h-100 w-100 z-index-1020" },
                React__default["default"].createElement("div", { className: "mx-n3 h-100" },
                    React__default["default"].createElement("div", { className: "h-100 d-flex" },
                        React__default["default"].createElement("div", { className: "h-100 w-70 w-md-auto" },
                            React__default["default"].createElement("div", { className: "p-3 bg-white box-shadow-1 w-280px w-md-350px h-100" },
                                React__default["default"].createElement("div", { className: "d-flex align-items-center mb-3" },
                                    React__default["default"].createElement(react.Icon, { icon: "lucide:arrow-left", className: "fs-26px me-2 me-md-3 cursor-pointer", onClick: showSearchDrawer }),
                                    React__default["default"].createElement(Form__default["default"].Control, { type: "text", placeholder: "Search Koinonia", className: "form-control-rounded cursor-pointer bg-gray-1 border-none py-2 py-md-3 px-3 px-md-4" })),
                                React__default["default"].createElement("div", { className: "d-flex align-items-center justify-content-between mb-3" },
                                    React__default["default"].createElement("div", null, "Recent Searches"),
                                    React__default["default"].createElement("div", { className: "text-danger cursor-pointer" }, "Clear All")),
                                React__default["default"].createElement("div", { ref: listRef }, RecentSearches.map(function (item) { return (React__default["default"].createElement("div", { key: item.id },
                                    React__default["default"].createElement(Link__default["default"], { href: item.link },
                                        React__default["default"].createElement("div", { className: "d-flex align-items-center justify-content-between mb-3 cursor-pointer" },
                                            React__default["default"].createElement("div", { className: "d-flex align-items-center" },
                                                React__default["default"].createElement(Avatar, { src: item.avatar, width: 32, height: 32, className: "me-2" }),
                                                React__default["default"].createElement("div", null, item.name)),
                                            React__default["default"].createElement(react.Icon, { icon: "lucide:x", className: "fs-18px cursor-pointer", onClick: function () { return removeItem(item.id); } }))))); })))),
                        React__default["default"].createElement("div", { className: "cursor-pointer h-100 w-100 w-md-100p", onClick: showSearchDrawer })))))));
};

var FriendNotification$2 = function (_a) {
    var listRef = React.useRef();
    var _b = React.useState([
        {
            id: 1,
            name: 'Jason Daro',
            avatar: 'https://i.pravatar.cc/32/32',
            time: '1 min'
        },
        {
            id: 2,
            name: 'Darwin Pineda',
            avatar: 'https://i.pravatar.cc/34/34',
            time: '30 mins'
        },
        {
            id: 3,
            name: 'Kevin Rey Tabada',
            avatar: 'https://i.pravatar.cc/33/33',
            time: '2 hrs'
        },
        {
            id: 4,
            name: 'Devin Stewart',
            avatar: 'https://i.pravatar.cc/35/35',
            time: '1 day'
        },
    ]), RequestList = _b[0], SetRequestList = _b[1];
    var removeItem = function (id) {
        var newList = RequestList.filter(function (l) { return l.id !== id; });
        SetRequestList(newList);
    };
    return (React__default["default"].createElement(Dropdown__default["default"], { className: "dropdown-seamless" },
        React__default["default"].createElement(Dropdown__default["default"].Toggle, null,
            React__default["default"].createElement("div", { className: "d-flex align-items-center text-white cursor-pointer mx-1 position-relative d-flex w-35px h-35px w-md-40px h-md-40px bg-primary-6 rounded-circle justify-content-center" },
                React__default["default"].createElement("div", { className: "rounded-circle bg-danger w-10px h-10px position-absolute top-0 right-0 me-2" }),
                React__default["default"].createElement(react.Icon, { icon: "mdi-users", className: "fs-18px fs-md-22px" }))),
        React__default["default"].createElement(Dropdown__default["default"].Menu, { className: "p-3 w-300px" },
            React__default["default"].createElement("div", { className: "box-shadow-1 p-3 rounded-8px" },
                React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "p-0 d-flex align-items-center justify-content-between" },
                    React__default["default"].createElement("div", { className: "fw-700" }, "Requests"),
                    React__default["default"].createElement("a", { href: "/my-profile" },
                        React__default["default"].createElement("div", { className: "text-primary" }, "View More")))),
            React__default["default"].createElement("div", { ref: listRef }, RequestList.map(function (item) { return (React__default["default"].createElement("div", { key: item.id },
                React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center justify-content-between" },
                    React__default["default"].createElement("div", { className: "d-flex align-items-center py-2" },
                        React__default["default"].createElement("div", { className: "w-32px me-2" },
                            React__default["default"].createElement("div", { className: "w-32px h-32px rounded-circle bg-gray-1 bg-center bg-cover", style: { backgroundImage: "url(".concat(item.avatar, ")") } })),
                        React__default["default"].createElement("div", { className: "w-100" },
                            React__default["default"].createElement("div", { className: "fw-700 me-2" }, item.name),
                            React__default["default"].createElement("div", { className: "clamp clamp-1" }, "Added you as a friend"),
                            React__default["default"].createElement("div", { className: "fs-12px text-primary" },
                                item.time,
                                " ago"))),
                    React__default["default"].createElement("div", { className: "d-flex ms-2" },
                        React__default["default"].createElement(react.Icon, { icon: "lucide:check", className: "fs-18px cursor-pointer me-2 text-success" }),
                        React__default["default"].createElement(react.Icon, { icon: "lucide:x", className: "fs-18px cursor-pointer text-danger", onClick: function () { return removeItem(item.id); } }))),
                React__default["default"].createElement(Dropdown__default["default"].Divider, { className: "m-0" }))); })))));
};

var MessageNotification = function (_a) {
    var MessageList = [
        {
            id: '1',
            name: 'Jason Daro',
            avatar: 'https://i.pravatar.cc/32/32',
            message: 'This is some text',
            time: '1 min'
        },
        {
            id: '2',
            name: 'Darwin Pineda',
            avatar: 'https://i.pravatar.cc/33/33',
            message: 'This is some text',
            time: '30 mins'
        },
        {
            id: '3',
            name: 'Kevin Rey Tabada',
            avatar: 'https://i.pravatar.cc/34/34',
            message: 'This is some text This is some text',
            time: '2 hrs'
        },
        {
            id: '4',
            name: 'Devin Stewart',
            avatar: 'https://i.pravatar.cc/35/35',
            message: 'This is some text',
            time: '1 day'
        },
    ];
    return (React__default["default"].createElement(Dropdown__default["default"], { className: "dropdown-seamless" },
        React__default["default"].createElement(Dropdown__default["default"].Toggle, null,
            React__default["default"].createElement("div", { className: "d-flex align-items-center text-white cursor-pointer mx-1 position-relative d-flex w-35px h-35px w-md-40px h-md-40px bg-primary-6 rounded-circle justify-content-center" },
                React__default["default"].createElement("div", { className: "rounded-circle bg-danger w-10px h-10px position-absolute top-0 right-0 me-2" }),
                React__default["default"].createElement(react.Icon, { icon: "mdi-message", className: "fs-18px fs-md-22px" }))),
        React__default["default"].createElement(Dropdown__default["default"].Menu, { className: "p-3 w-300px" },
            React__default["default"].createElement("div", { className: "box-shadow-1 p-3 rounded-8px" },
                React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "p-0 d-flex align-items-center justify-content-between" },
                    React__default["default"].createElement("div", { className: "fw-700" }, "Messages"),
                    React__default["default"].createElement(Link__default["default"], { href: "/messenger" },
                        React__default["default"].createElement("div", { className: "text-primary" }, "View More")))),
            MessageList.map(function (item, index) { return (React__default["default"].createElement("div", { key: index },
                React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center justify-content-between" },
                    React__default["default"].createElement("div", { className: "d-flex align-items-center py-2" },
                        React__default["default"].createElement("div", { className: "w-32px me-2" },
                            React__default["default"].createElement("div", { className: "w-32px h-32px rounded-circle bg-gray-1 bg-center bg-cover", style: { backgroundImage: 'url( https://i.pravatar.cc )' } })),
                        React__default["default"].createElement("div", { className: "w-100" },
                            React__default["default"].createElement("div", { className: "fw-700 me-2" }, item.name),
                            React__default["default"].createElement("div", { className: "clamp clamp-1 fs-12px text-gray-4" }, item.message),
                            React__default["default"].createElement("div", { className: "fs-12px text-primary" },
                                item.time,
                                " ago"))),
                    React__default["default"].createElement("div", { className: "w-18px ms-2" },
                        React__default["default"].createElement(react.Icon, { icon: "material-symbols:arrow-right-alt", className: "fs-18px cursor-pointer" }))),
                React__default["default"].createElement(Dropdown__default["default"].Divider, { className: "m-0" }))); }))));
};

var FriendNotification$1 = function (_a) {
    var MessageList = [
        {
            id: '1',
            name: 'Jason Daro',
            avatar: 'https://i.pravatar.cc/32/32',
            action: 'like your',
            activity: 'story',
            time: '1 min'
        },
        {
            id: '2',
            name: 'Darwin Pineda',
            avatar: 'https://i.pravatar.cc/33/33',
            action: 'mentioned you in a',
            activity: 'post',
            time: '30 mins'
        },
        {
            id: '3',
            name: 'Kevin Rey Tabada',
            avatar: 'https://i.pravatar.cc/34/34',
            action: 'like your',
            activity: 'story',
            time: '2 hrs'
        },
        {
            id: '4',
            name: 'Devin Stewart',
            avatar: 'https://i.pravatar.cc/35/35',
            action: 'mentioned you in a',
            activity: 'comment',
            time: '1 day'
        },
    ];
    return (React__default["default"].createElement(Dropdown__default["default"], { className: "dropdown-seamless" },
        React__default["default"].createElement(Dropdown__default["default"].Toggle, null,
            React__default["default"].createElement("div", { className: "d-flex align-items-center text-white cursor-pointer mx-1 position-relative d-flex w-35px h-35px w-md-40px h-md-40px bg-primary-6 rounded-circle justify-content-center" },
                React__default["default"].createElement("div", { className: "rounded-circle bg-danger w-10px h-10px position-absolute top-0 right-0 me-2" }),
                React__default["default"].createElement(react.Icon, { icon: "mdi-bell", className: "fs-18px fs-md-22px" }))),
        React__default["default"].createElement(Dropdown__default["default"].Menu, { className: "p-3 w-300px" },
            React__default["default"].createElement("div", { className: "box-shadow-1 p-3 rounded-8px" },
                React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "p-0 d-flex align-items-center justify-content-between" },
                    React__default["default"].createElement("div", { className: "fw-700" }, "Activity"),
                    React__default["default"].createElement(Link__default["default"], { href: "#" },
                        React__default["default"].createElement("div", { className: "text-primary" }, "View More")))),
            MessageList.map(function (item, index) { return (React__default["default"].createElement("div", { key: index },
                React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center justify-content-between" },
                    React__default["default"].createElement("div", { className: "d-flex align-items-center py-2" },
                        React__default["default"].createElement("div", { className: "w-32px me-2" },
                            React__default["default"].createElement("div", { className: "w-32px h-32px rounded-circle bg-gray-1 bg-center bg-cover", style: { backgroundImage: "url(".concat(item.avatar, ")") } })),
                        React__default["default"].createElement("div", { className: "w-100" },
                            React__default["default"].createElement("div", { className: "clamp clamp-2" },
                                React__default["default"].createElement("span", { className: "fw-700 me-2" }, item.name),
                                React__default["default"].createElement("span", null,
                                    item.action,
                                    " ",
                                    item.activity)),
                            React__default["default"].createElement("div", { className: "fs-12px text-primary fw-700" },
                                item.time,
                                " ago"))),
                    React__default["default"].createElement("div", { className: "w-18px ms-2" },
                        React__default["default"].createElement(react.Icon, { icon: "lucide:x", className: "fs-18px cursor-pointer" }))),
                React__default["default"].createElement(Dropdown__default["default"].Divider, { className: "m-0" }))); }))));
};

var FriendNotification = function (_a) {
    var MenuItems = [
        {
            id: '1',
            label: 'General Settings',
            icon: 'mdi:cog',
            link: '/account-settings'
        },
        {
            id: '2',
            label: 'Admin Area',
            icon: 'ic:baseline-space-dashboard',
            link: '#'
        },
        {
            id: '3',
            label: 'Logout',
            icon: 'mdi:logout',
            link: '#'
        },
    ];
    return (React__default["default"].createElement(Dropdown__default["default"], { className: "dropdown-seamless" },
        React__default["default"].createElement(Dropdown__default["default"].Toggle, null,
            React__default["default"].createElement("div", { className: "d-flex align-items-center text-white cursor-pointer mx-lg-1" },
                React__default["default"].createElement("div", { className: "w-35px h-35px w-md-40px h-md-40px rounded-circle bg-white ms-2 bg-center bg-cover", style: { backgroundImage: 'url( https://i.pravatar.cc )' } }))),
        React__default["default"].createElement(Dropdown__default["default"].Menu, { className: "p-3 w-300px" },
            React__default["default"].createElement("div", { className: "box-shadow-1 p-3 rounded-8px mb-3" },
                React__default["default"].createElement(Dropdown__default["default"].Item, { href: "my-profile", className: "p-0 d-flex align-items-center" },
                    React__default["default"].createElement("div", { className: "me-2" },
                        React__default["default"].createElement("div", { className: "w-32px h-32px rounded-circle bg-gray-1 bg-center bg-cover", style: { backgroundImage: 'url(https://i.pravatar.cc)' } })),
                    React__default["default"].createElement("div", { className: "fw-700 fs-16px" }, "Marc Umali"))),
            MenuItems.map(function (item) { return (React__default["default"].createElement(Dropdown__default["default"].Item, { href: item.link, className: "px-0 d-flex align-items-center mb-2" },
                React__default["default"].createElement("div", { className: "me-2" },
                    React__default["default"].createElement("div", { className: "w-38px h-38px rounded-circle bg-gray-1 d-flex align-items-center justify-content-center" },
                        React__default["default"].createElement(react.Icon, { icon: item.icon, className: "fs-16px fs-md-20px" }))),
                React__default["default"].createElement("div", null, item.label))); }))));
};

var Header = function (_a) {
    var _b = React.useState(false), sidebar = _b[0], setSetsidebar = _b[1];
    var showSidebar = function () { return setSetsidebar(!sidebar); };
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement("div", { className: "h-54px" }),
        React__default["default"].createElement("div", { className: "py-2 px-3 bg-primary-5 position-fixed start-0 top-0 z-index-1030 w-100" },
            React__default["default"].createElement(Row__default["default"], { className: "d-flex align-items-center" },
                React__default["default"].createElement(Col__default["default"], { xs: 8, className: "d-flex align-items-center" },
                    React__default["default"].createElement("div", { className: "w-100 d-flex justify-content-lg-between" },
                        React__default["default"].createElement("div", { className: "w-lg-50p" },
                            React__default["default"].createElement("div", { className: "d-flex align-items-center" },
                                React__default["default"].createElement("a", { href: "/newsfeed" },
                                    React__default["default"].createElement(Image__default["default"], { src: "/images/logo-white.png", className: "w-35px me-2 me-md-3 cursor-pointer" })),
                                React__default["default"].createElement(Friends$2, null))),
                        React__default["default"].createElement("div", { className: "w-lg-50p d-none d-md-flex justify-content-center ms-2 ms-lg-0 align-items-center" },
                            React__default["default"].createElement("a", { href: "/newsfeed" },
                                React__default["default"].createElement("div", { className: "d-flex align-items-center text-white cursor-pointer mx-1 mx-lg-3" },
                                    React__default["default"].createElement(react.Icon, { icon: "mdi-house", className: "fs-24px me-2" }),
                                    React__default["default"].createElement("div", { className: "d-none d-md-block" }, "Home"))),
                            React__default["default"].createElement("a", { href: "/go-live" },
                                React__default["default"].createElement("div", { className: "d-flex align-items-center text-white cursor-pointer mx-1 mx-lg-3" },
                                    React__default["default"].createElement(react.Icon, { icon: "mdi-video", className: "fs-24px me-2" }),
                                    React__default["default"].createElement("div", { className: "d-none d-md-block" }, "Go Live")))))),
                React__default["default"].createElement(Col__default["default"], { xs: 4, className: "justify-content-end d-flex align-items-center" },
                    React__default["default"].createElement(FriendNotification$2, null),
                    React__default["default"].createElement(MessageNotification, null),
                    React__default["default"].createElement(FriendNotification$1, null),
                    React__default["default"].createElement(FriendNotification, null),
                    React__default["default"].createElement("div", null,
                        React__default["default"].createElement(react.Icon, { icon: "uis-bars", onClick: showSidebar, className: "fs-30px ms-2 text-white cursor-pointer d-lg-none" })))),
            React__default["default"].createElement("div", { className: sidebar ? "d-block" : "d-none" },
                React__default["default"].createElement("div", { className: "position-fixed top-0 start-0 h-100 w-100 z-index-1020" },
                    React__default["default"].createElement("div", { className: "mx-n3 h-100" },
                        React__default["default"].createElement(Row__default["default"], { className: "h-100" },
                            React__default["default"].createElement(Col__default["default"], { xs: 8, sm: 6, className: "bg-white" },
                                React__default["default"].createElement("div", { className: "p-3", onClick: showSidebar },
                                    React__default["default"].createElement(react.Icon, { icon: "mdi:close", className: "fs-30px mb-3" }),
                                    React__default["default"].createElement("div", null,
                                        React__default["default"].createElement(SidebarMenuItems, { className: "test" })))),
                            React__default["default"].createElement(Col__default["default"], { xs: 4, sm: 6, className: "bg-dark-opacity-7 cursor-pointer", onClick: showSidebar }))))))));
};

var Layout = function (_a) {
    var children = _a.children;
    return (React__default["default"].createElement("div", { className: "d-flex flex-column h-100" }, children));
};

var Friends$1 = function (_a) {
    var UserList = [
        {
            id: '1',
            name: 'Jason Daro',
            avatar: 'https://i.pravatar.cc/100/100',
            link: '#',
            mutalFriends: 23,
            job: "Full Stack Developer",
            company: "LifestreamNetworks"
        },
        {
            id: '2',
            name: 'Devin Stewart',
            avatar: 'https://i.pravatar.cc/101/101',
            link: '#',
            mutalFriends: 213,
            job: "QA Manager",
            company: "Adidas"
        },
        {
            id: '3',
            name: 'Kevin Rey Tabada',
            avatar: 'https://i.pravatar.cc/102/102',
            link: '#',
            mutalFriends: 223,
            job: "Web Developer",
            company: "Omni Media Cast"
        },
        {
            id: '4',
            name: 'Archere Dimaculangan',
            avatar: 'https://i.pravatar.cc/103/103',
            link: '#',
            mutalFriends: 234,
            job: "Product Manager",
            company: "Apple"
        },
        {
            id: '5',
            name: 'Darwin Pineda',
            avatar: 'https://i.pravatar.cc/104/104',
            link: '#',
            mutalFriends: 567,
            job: "Quality Assurance",
            company: "Microsoft"
        },
        {
            id: '6',
            name: 'Kallah Vista',
            avatar: 'https://i.pravatar.cc/105/105',
            link: '#',
            mutalFriends: 342,
            job: "Frontend Developer",
            company: "Windows"
        },
    ];
    return (React__default["default"].createElement("div", { className: "box-shadow-1 p-3 bg-white rounded-8px mb-3" },
        React__default["default"].createElement("div", { className: "mx-n3" },
            React__default["default"].createElement(Row__default["default"], null,
                React__default["default"].createElement(Col__default["default"], { lg: 12 },
                    React__default["default"].createElement("div", { className: "d-flex align-items-center justify-content-between mb-2" },
                        React__default["default"].createElement("div", { className: "fs-16px fw-700" }, "Friends"),
                        React__default["default"].createElement(Link__default["default"], { href: "#" },
                            React__default["default"].createElement("div", { className: "text-primary cursor-pointer" }, "See all"))))),
            React__default["default"].createElement(Row__default["default"], { className: "mx-0" }, UserList.map(function (item) { return (React__default["default"].createElement(Col__default["default"], { md: 6, lg: 4, className: "mb-2 px-1", key: item.id },
                React__default["default"].createElement(Link__default["default"], { href: item.link },
                    React__default["default"].createElement("div", { className: "popupover text-base" },
                        React__default["default"].createElement("div", { className: "bg-center bg-cover w-100 pt-100p bg-gray-1 rounded-6px", style: { backgroundImage: "url(".concat(item.avatar, ")") } }),
                        React__default["default"].createElement("div", { className: "clamp clamp-2 fs-13px" }, item.name),
                        React__default["default"].createElement("div", { className: "popover-content", "data-inner-spacer": 20, "data-position-start": "n300", "data-position-top": 0, "data-width": 300, style: { display: "none" } },
                            React__default["default"].createElement("div", { className: "d-flex mb-3" },
                                React__default["default"].createElement("div", null,
                                    React__default["default"].createElement("div", { className: "w-60px h-60px rounded-circle bg-gray-1 bg-center bg-cover cursor-pointer", style: { backgroundImage: "url( https://i.pravatar.cc )" } })),
                                React__default["default"].createElement("div", { className: "ms-3" },
                                    React__default["default"].createElement("div", { className: "fw-700 fs-16px cursor-pointer" }, item.name),
                                    React__default["default"].createElement("div", { className: "d-flex mb-1" },
                                        React__default["default"].createElement("div", null,
                                            React__default["default"].createElement(react.Icon, { icon: "mdi:users", className: "fs-16px me-1" })),
                                        React__default["default"].createElement("div", null,
                                            item.mutalFriends,
                                            " mutual friends")),
                                    React__default["default"].createElement("div", { className: "d-flex mb-1" },
                                        React__default["default"].createElement("div", null,
                                            React__default["default"].createElement(react.Icon, { icon: "mdi:briefcase", className: "fs-16px me-1" })),
                                        React__default["default"].createElement("div", null,
                                            item.job,
                                            " at ",
                                            React__default["default"].createElement("b", null, item.company))))),
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
                                    React__default["default"].createElement("div", { className: "" }, "Message")))))))); })))));
};

var Contacts = function (_a) {
    var name = _a.name, avatar = _a.avatar, hasMessage = _a.hasMessage, status = _a.status;
    return (React__default["default"].createElement("div", { className: "d-flex align-items-center mb-2 cursor-pointer" },
        React__default["default"].createElement("div", { className: "d-flex align-items-center w-100" },
            React__default["default"].createElement(Avatar, { width: 35, height: 35, src: avatar, hasMessage: hasMessage }),
            React__default["default"].createElement("div", { className: "ms-2 " + (hasMessage && "fw-500") }, name),
            React__default["default"].createElement("div", { className: "ms-auto w-8px h-8px rounded-circle " + status }))));
};
Contacts.defaultProps = {
    status: "bg-gray-4"
};

var Friends = function (_a) {
    var PhotosList = [
        {
            id: '1',
            photo: 'https://picsum.photos/100/100'
        },
        {
            id: '2',
            photo: 'https://picsum.photos/101/101'
        },
        {
            id: '3',
            photo: 'https://picsum.photos/102/102'
        },
        {
            id: '4',
            photo: 'https://picsum.photos/103/103'
        },
        {
            id: '5',
            photo: 'https://picsum.photos/104/104'
        },
        {
            id: '6',
            photo: 'https://picsum.photos/105/105'
        },
    ];
    return (React__default["default"].createElement("div", { className: "box-shadow-1 p-3 bg-white rounded-8px mb-3" },
        React__default["default"].createElement("div", { className: "mx-n3" },
            React__default["default"].createElement(Row__default["default"], null,
                React__default["default"].createElement(Col__default["default"], { lg: 12 },
                    React__default["default"].createElement("div", { className: "d-flex align-items-center justify-content-between mb-2" },
                        React__default["default"].createElement("div", { className: "fs-16px fw-700" }, "Photos"),
                        React__default["default"].createElement(Link__default["default"], { href: "#" },
                            React__default["default"].createElement("div", { className: "text-primary cursor-pointer" }, "See all"))))),
            React__default["default"].createElement(Row__default["default"], { className: "mx-0" }, PhotosList.map(function (item) { return (React__default["default"].createElement(Col__default["default"], { lg: 4, className: "mb-2 px-1", key: item.id },
                React__default["default"].createElement("div", { className: "pt-100p bg-center bg-cover bg-gray-1 rounded-6px cursor-pointer", style: { backgroundImage: "url(".concat(item.photo, ")") } }))); })))));
};

var ImageSlider = function (_a) {
    var className = _a.className;
    return (React__default["default"].createElement("div", { className: "d-none d-xl-block" + className },
        React__default["default"].createElement("div", { className: "w-250px h-100 position-relative" },
            React__default["default"].createElement("div", { className: "bg-white p-3 position-fixed w-100 h-100 top-0" },
                React__default["default"].createElement("div", { className: "h-54px" }),
                "Image Slider"))));
};

var ContactDrawer = function () {
    var _a = React.useState(false), showSearch = _a[0], setShowSearch = _a[1];
    var _b = React.useState(false), minimize = _b[0], setMinimize = _b[1];
    var _c = React.useState({
        query: '',
        list: []
    }), state = _c[0], setState = _c[1];
    var handleChange = function (e) {
        var results = userList.filter(function (post) {
            if (e.target.value === "")
                return userList;
            return post.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setState({
            query: e.target.value,
            list: results
        });
    };
    var userList = [
        {
            id: 1,
            name: 'Jason Daro',
            avatar: 'https:/i.pravatar.cc/35/35',
            hasMessage: true,
            status: 'bg-success-2'
        },
        {
            id: 2,
            name: 'Kevin Rey',
            avatar: 'https:/i.pravatar.cc/36/36',
            status: 'bg-success-2'
        },
        {
            id: 3,
            name: 'Devin Stewart',
            avatar: 'https:/i.pravatar.cc/37/37',
            hasMessage: true
        },
        {
            id: 4,
            name: 'Darwin Pineda',
            avatar: 'https:/i.pravatar.cc/38/38'
        },
    ];
    var CustomToggle = function (_a) {
        var children = _a.children, eventKey = _a.eventKey;
        var decoratedOnClick = AccordionButton.useAccordionButton(eventKey);
        return (React__default["default"].createElement("div", { className: "cursor-pointer", onClick: decoratedOnClick }, children));
    };
    var CloseToggle = function (_a) {
        var eventKey = _a.eventKey;
        var decoratedOnClick = AccordionButton.useAccordionButton(eventKey);
        return (React__default["default"].createElement(react.Icon, { icon: "pepicons-pop:times", onClick: decoratedOnClick, className: "fs-22px cursor-pointer" }));
    };
    var messages = [
        {
            id: 0,
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 1,
            message: React__default["default"].createElement(react.Icon, { icon: "ant-design:like-filled", className: "fs-24px text-primary" }),
            isLike: true
        },
        {
            id: 2,
            message: "Odio accusantium ipsa in mollitia consectetur impedit optio, officiis cum delectus fuga ullam a veritatis deserunt maiores dolore et."
        },
        {
            id: 3,
            message: "Lorem ipsum dolor sit amet."
        },
        {
            id: 4,
            message: "Officiis cum delectus fuga ullam a veritatis."
        },
        {
            id: 5,
            message: "ullam a veritatis deserunt maiores dolore et"
        },
    ];
    return (React__default["default"].createElement("div", { className: "h-100 overflow-y-scroll scrollbar-1" },
        React__default["default"].createElement("div", { className: "bg-white d-flex align-items-center justify-content-between p-3 box-shadow-1 position-sticky top-0" },
            showSearch ? React__default["default"].createElement(Form__default["default"].Control, { type: "text", placeholder: "Search", className: "form-control", onChange: handleChange, value: state.query })
                : React__default["default"].createElement("div", { className: "fw-700 fs-16px" }, "Contacts"),
            React__default["default"].createElement("div", null,
                React__default["default"].createElement(react.Icon, { icon: (showSearch ? "pepicons-pop:times" : "ph:magnifying-glass-bold"), className: "ms-2 cursor-pointer " + (showSearch ? "fs-22px" : "fs-18px"), onClick: function () { return setShowSearch(!showSearch); } }))),
        React__default["default"].createElement("div", { className: "p-3" },
            React__default["default"].createElement(Accordion__default["default"], { alwaysOpen: true },
                (state.query === '' ? userList.map(function (item) { return (React__default["default"].createElement(CustomToggle, { key: item.id, eventKey: "".concat(item.id) },
                    React__default["default"].createElement(Contacts, { name: item.name, avatar: item.avatar, hasMessage: item.hasMessage, status: item.status }))); }) : !state.list.length ? "User Not Found" : state.list.map(function (item) {
                    return React__default["default"].createElement(CustomToggle, { key: item.id, eventKey: "".concat(item.id) },
                        React__default["default"].createElement(Contacts, { name: item.name, avatar: item.avatar, hasMessage: item.hasMessage, status: item.status }));
                })),
                React__default["default"].createElement("div", { className: "position-fixed bottom-0 start-0 w-100 d-flex justify-content-end align-items-end" },
                    userList.map(function (item) { return (React__default["default"].createElement(Accordion__default["default"].Collapse, { eventKey: "".concat(item.id), key: item.id },
                        React__default["default"].createElement("div", { className: "w-280px bg-white box-shadow-1 rounded-top-x-10px ms-2" },
                            React__default["default"].createElement("div", { className: "bg-primary text-white d-flex align-items-center ps-2 pe-1 py-2 justify-content-between rounded-top-x-10px" },
                                React__default["default"].createElement("div", { className: "d-flex align-items-center" },
                                    React__default["default"].createElement(Avatar, { width: 35, height: 35, src: item.avatar }),
                                    React__default["default"].createElement("div", { className: "clamp clamp-1 ms-2" }, item.name)),
                                React__default["default"].createElement("div", { className: "d-flex " + (!minimize ? 'align-items-end' : 'align-items-center') },
                                    React__default["default"].createElement("div", null,
                                        React__default["default"].createElement(react.Icon, { icon: !minimize ? 'mdi:window-minimize' : 'mdi:window-maximize', className: "fs-18px cursor-pointer", onClick: function () { return setMinimize(!minimize); } })),
                                    React__default["default"].createElement(CloseToggle, { eventKey: "".concat(item.id) }))),
                            !minimize &&
                                React__default["default"].createElement("div", null,
                                    React__default["default"].createElement("div", { className: "h-250px scrollbar-1 overflow-y-auto" },
                                        React__default["default"].createElement("div", { className: "px-3 pt-3" }, messages.map(function (item, index) { return (React__default["default"].createElement("div", null, index % 2 === 0 ?
                                            React__default["default"].createElement("div", { className: "w-80p mb-2" }, !item.isLike ?
                                                React__default["default"].createElement("div", { className: "bg-gray-1 px-2 py-1 me-2 rounded-10px d-inline-flex" }, item.message) :
                                                React__default["default"].createElement(React__default["default"].Fragment, null, item.message))
                                            :
                                                React__default["default"].createElement("div", { className: "d-flex justify-content-end mb-2" }, !item.isLike ?
                                                    React__default["default"].createElement("div", { className: "w-80p d-flex justify-content-end" },
                                                        React__default["default"].createElement("div", { className: "text-white bg-primary px-2 py-1 me-2 rounded-10px d-inline-flex" }, item.message)) :
                                                    React__default["default"].createElement(React__default["default"].Fragment, null, item.message)))); }))),
                                    React__default["default"].createElement("div", { className: "px-3 pb-3 pt-2" },
                                        React__default["default"].createElement("div", { className: "d-flex align-items-end" },
                                            React__default["default"].createElement(TextareaAutosize__default["default"], { maxRows: 3, minRows: 1, className: "form-control w-100 me-2" }),
                                            React__default["default"].createElement(Form__default["default"].Control, { type: "text", className: "me-2 d-none", placeholder: "Write something here ..." }),
                                            React__default["default"].createElement(react.Icon, { icon: "ant-design:like-filled", className: "cursor-pointer fs-24px cursor-pointer text-primary mb-2" }))))))); }),
                    React__default["default"].createElement("div", { className: "w-250px ms-3" }))))));
};

exports.ActivityNotification = FriendNotification$1;
exports.Avatar = Avatar;
exports.ContactDrawer = ContactDrawer;
exports.Contacts = Contacts;
exports.FriendNotification = FriendNotification$2;
exports.Friends = Friends$1;
exports.Header = Header;
exports.HeaderProfile = FriendNotification;
exports.ImageSlider = ImageSlider;
exports.Layout = Layout;
exports.MessageNotification = MessageNotification;
exports.Photos = Friends;
exports.Search = Friends$2;
exports.SidebarMenuItems = SidebarMenuItems;
