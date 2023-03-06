'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var react = require('@iconify/react');
var Dropdown = require('react-bootstrap/Dropdown');
var Button = require('react-bootstrap/Button');
var Col = require('react-bootstrap/Col');
var Row = require('react-bootstrap/Row');
var Modal = require('react-bootstrap/Modal');
var Form = require('react-bootstrap/Form');
var emoji = require('react-easy-emoji');
var ImageProps = require('react-bootstrap/Image');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Dropdown__default = /*#__PURE__*/_interopDefaultLegacy(Dropdown);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var Col__default = /*#__PURE__*/_interopDefaultLegacy(Col);
var Row__default = /*#__PURE__*/_interopDefaultLegacy(Row);
var Modal__default = /*#__PURE__*/_interopDefaultLegacy(Modal);
var Form__default = /*#__PURE__*/_interopDefaultLegacy(Form);
var emoji__default = /*#__PURE__*/_interopDefaultLegacy(emoji);
var ImageProps__default = /*#__PURE__*/_interopDefaultLegacy(ImageProps);

var PostModal = function (_a) {
    var show = _a.show, handleClose = _a.handleClose, size = _a.size, title = _a.title, children = _a.children, dialogClassName = _a.dialogClassName;
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement(Modal__default["default"], { onClose: handleClose, size: size, show: show, onHide: handleClose, dialogClassName: dialogClassName },
            React__default["default"].createElement(Modal__default["default"].Header, { closeButton: true },
                React__default["default"].createElement("div", { className: "fw-700" }, title)),
            React__default["default"].createElement(Modal__default["default"].Body, null, children))));
};

var Check = function (_a) {
    var label = _a.label, name = _a.name, className = _a.className, id = _a.id;
    return (React__default["default"].createElement(Form__default["default"].Group, { className: "d-flex align-items-center " + className, controlId: "formBasicEmail" },
        React__default["default"].createElement(Form__default["default"].Check, { "aria-label": "option 1", id: id, name: name, className: "me-2" }),
        React__default["default"].createElement(Form__default["default"].Label, { "for": id }, label)));
};

var Avatar = function (_a) {
    var className = _a.className, src = _a.src, width = _a.width, height = _a.height;
    return (React__default["default"].createElement("div", { className: className },
        React__default["default"].createElement("div", { className: "bg-gray-3 rounded-circle bg-center bg-cover", "data-width": width, "data-height": height, style: { backgroundImage: "url( ".concat(src, " )") } })));
};

var Header = function (_a) {
    var userName = _a.userName, userAvatar = _a.userAvatar, status = _a.status;
    var _b = React.useState(false), isActive = _b[0], setActive = _b[1];
    var _c = React.useState(false), isFollow = _c[0], setFollow = _c[1];
    var _d = React.useState(false), show = _d[0], setShow = _d[1];
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement(PostModal, { show: show, handleClose: function () { return setShow(false); }, handleShow: function () { return setShow(true); }, title: "Report this post" },
            React__default["default"].createElement("div", { className: "fw-600" }, "Please select a problem"),
            React__default["default"].createElement("div", null, "If someone is in immediate danger, get help before reporting to Koinonia. Don't wait."),
            React__default["default"].createElement(Row__default["default"], { className: "mt-3" },
                React__default["default"].createElement(Col__default["default"], { md: 6, className: "mb-3" },
                    React__default["default"].createElement(Check, { label: "Nudity", name: "report-post", id: "nudity" })),
                React__default["default"].createElement(Col__default["default"], { md: 6, className: "mb-3" },
                    React__default["default"].createElement(Check, { label: "Violence", name: "report-post", id: "violence" })),
                React__default["default"].createElement(Col__default["default"], { md: 6, className: "mb-3" },
                    React__default["default"].createElement(Check, { label: "Terrorism", name: "report-post", id: "terrorism" })),
                React__default["default"].createElement(Col__default["default"], { md: 6, className: "mb-3" },
                    React__default["default"].createElement(Check, { label: "Hate Speech", name: "report-post", id: "hate-speech" })),
                React__default["default"].createElement(Col__default["default"], { md: 6, className: "mb-3" },
                    React__default["default"].createElement(Check, { label: "Harassment", name: "report-post", id: "Harassment" })),
                React__default["default"].createElement(Col__default["default"], { md: 6, className: "mb-3" },
                    React__default["default"].createElement(Check, { label: "Something Else", name: "report-post", id: "something-else" })),
                React__default["default"].createElement(Col__default["default"], null,
                    React__default["default"].createElement(Button__default["default"], { className: "w-100" }, "Submit")))),
        React__default["default"].createElement("div", { className: "d-flex align-items-center justify-content-between mb-2" },
            React__default["default"].createElement("a", { href: "#" },
                React__default["default"].createElement("div", { className: "d-flex align-items-center cursor-pointer" },
                    React__default["default"].createElement(Avatar, { src: userAvatar, height: 40, width: 40 }),
                    React__default["default"].createElement("div", { className: "fw-600 mx-2" }, userName),
                    React__default["default"].createElement("div", { className: "text-gray-2" }, status))),
            React__default["default"].createElement("div", null,
                React__default["default"].createElement(Dropdown__default["default"], { className: "dropdown-seamless" },
                    React__default["default"].createElement(Dropdown__default["default"].Toggle, null,
                        React__default["default"].createElement(react.Icon, { icon: "lucide:more-vertical", className: "fs-20px cursor-pointer text-base" })),
                    React__default["default"].createElement(Dropdown__default["default"].Menu, { align: "end" },
                        React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center", onClick: function () { return setActive(!isActive); } }, isActive ?
                            React__default["default"].createElement("div", { className: "d-flex align-items-center" },
                                React__default["default"].createElement("div", { className: "me-2" },
                                    React__default["default"].createElement(react.Icon, { icon: "lucide:bookmark", className: "fs-20px" })),
                                React__default["default"].createElement("div", null, "Save Post"))
                            :
                                React__default["default"].createElement("div", { className: "d-flex align-items-center text-primary" },
                                    React__default["default"].createElement("div", { className: "me-2" },
                                        React__default["default"].createElement(react.Icon, { icon: "material-symbols:bookmark-rounded", className: "fs-20px" })),
                                    React__default["default"].createElement("div", null, "Saved!"))),
                        React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center", onClick: function () { return setFollow(!isFollow); } },
                            React__default["default"].createElement("div", { className: "d-flex align-items-center" },
                                React__default["default"].createElement("div", { className: "me-2" },
                                    React__default["default"].createElement(react.Icon, { icon: isFollow ? 'lucide:user-x' : 'lucide:user-plus', className: "fs-20px" })),
                                React__default["default"].createElement("div", null, isFollow ? 'Unfollow' : 'Follow'))),
                        React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center", onClick: function () { return setShow(true); } },
                            React__default["default"].createElement("div", { className: "me-2" },
                                React__default["default"].createElement(react.Icon, { icon: "lucide:alert-circle", className: "fs-20px" })),
                            React__default["default"].createElement("div", null, "Report"))))))));
};

var Text = function (_a) {
    var value = _a.value, className = _a.className;
    return (React__default["default"].createElement("div", { className: "mb-1 " + className }, emoji__default["default"](value)));
};

var Image = function (_a) {
    var src = _a.src, onClick = _a.onClick, className = _a.className;
    return (React__default["default"].createElement("div", { className: "bg-black rounded-4px", onClick: onClick },
        React__default["default"].createElement(ImageProps__default["default"], { src: src, className: "rounded-4px cursor-pointer mx-auto d-block " + className, fluid: true })));
};

var Engagement = function (_a) {
    return (React__default["default"].createElement("div", { className: "d-flex align-items-center justify-content-between text-gray-3 my-2" },
        React__default["default"].createElement("div", { className: "d-flex" },
            React__default["default"].createElement("div", { className: "d-flex" },
                React__default["default"].createElement(react.Icon, { icon: "clarity:happy-face-solid", className: "fs-20px text-warning" }),
                React__default["default"].createElement(react.Icon, { icon: "ant-design:like-filled", className: "fs-20px text-primary" })),
            React__default["default"].createElement("div", { className: "text-gray-3 ms-2 text" }, "123")),
        React__default["default"].createElement("div", { className: "d-flex align-items-center" },
            React__default["default"].createElement("div", { className: "me-2" }, "532 Comments"),
            React__default["default"].createElement("div", null, "214 Share"))));
};

var Item = function (_a) {
    var children = _a.children;
    return (React__default["default"].createElement("div", { className: "box-shadow-1 p-3 rounded-8px bg-white mb-4" }, children));
};

var sendComment = function (_a) {
    return (React__default["default"].createElement("div", { className: "d-flex align-items-center my-2" },
        React__default["default"].createElement(Avatar, { className: "me-2", src: "https://i.pravatar.cc/35/35", height: 35, width: 35 }),
        React__default["default"].createElement(Form__default["default"].Control, { type: "text", placeholder: "Write a comment", className: "w-100" })));
};

var Reactions = function (_a) {
    return (React__default["default"].createElement("div", { className: "d-flex cursor-pointer" },
        React__default["default"].createElement("div", { className: "mx-2" },
            React__default["default"].createElement(react.Icon, { icon: "ant-design:like-filled", className: "fs-24px text-primary" })),
        React__default["default"].createElement("div", { className: "mx-2" },
            React__default["default"].createElement(react.Icon, { icon: "mdi:cards-heart", className: "fs-24px text-danger" })),
        React__default["default"].createElement("div", { className: "mx-2" },
            React__default["default"].createElement(react.Icon, { icon: "clarity:happy-face-solid", className: "fs-24px text-warning" })),
        React__default["default"].createElement("div", { className: "mx-2" },
            React__default["default"].createElement(react.Icon, { icon: "bxs:shocked", className: "fs-26px text-warning" })),
        React__default["default"].createElement("div", { className: "mx-2" },
            React__default["default"].createElement(react.Icon, { icon: "ri:emotion-sad-fill", className: "fs-26px text-warning" })),
        React__default["default"].createElement("div", { className: "mx-2" },
            React__default["default"].createElement(react.Icon, { icon: "fluent:emoji-angry-20-filled", className: "fs-26px text-danger" }))));
};

var ShareNow = function (_a) {
    var _b = React.useState(false), show = _b[0], setShow = _b[1];
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement(PostModal, { show: show, handleClose: function () { return setShow(false); }, handleShow: function () { return setShow(true); }, title: "Post Shared!" },
            React__default["default"].createElement("div", { className: "fw-600" }, "You've just shared a post"),
            React__default["default"].createElement("div", null, "Your shared post is displayed on your timeline and newsfeed"),
            React__default["default"].createElement(Button__default["default"], { onClick: function () { return setShow(false); }, className: "mt-3 w-100" }, "Okay!")),
        React__default["default"].createElement("div", { className: "d-flex align-items-center", onClick: function () { return setShow(true); } },
            React__default["default"].createElement("div", { className: "me-2" },
                React__default["default"].createElement(react.Icon, { icon: "lucide:forward", className: "fs-18px cursor-pointer" })),
            React__default["default"].createElement("div", null, "Share Now"))));
};

var ShareToFeed = function (_a) {
    var _b = React.useState(false), show = _b[0], setShow = _b[1];
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement(PostModal, { show: show, handleClose: function () { return setShow(false); }, handleShow: function () { return setShow(true); }, title: "Share to Feed" },
            React__default["default"].createElement("div", { className: "d-flex align-items-center cursor-pointer mb-3" },
                React__default["default"].createElement(Avatar, { className: "me-2", src: "https://i.pravatar.cc/41/41", height: 40, width: 40 }),
                React__default["default"].createElement("div", { className: "fw-600" }, "Marc Umali")),
            React__default["default"].createElement(Form__default["default"].Control, { placeholder: "What's on your mind?", as: "textarea", rows: 3, className: "w-100" }),
            React__default["default"].createElement("div", { className: "bg-gray-7 rounded-8px mt-3 p-3" },
                React__default["default"].createElement(Image, { src: "https://picsum.photos/1000/600" }),
                React__default["default"].createElement("div", { className: "d-flex align-items-center cursor-pointer mb-1 mt-3" },
                    React__default["default"].createElement(Avatar, { className: "me-2", src: "https://i.pravatar.cc/38/38", height: 35, width: 35 }),
                    React__default["default"].createElement("div", { className: "fw-600" }, "Marc Umali")),
                React__default["default"].createElement(Text, { value: "I really like this photo!" })),
            React__default["default"].createElement(Button__default["default"], { onClick: function () { return setShow(false); }, className: "mt-3 w-100" }, "Share a post")),
        React__default["default"].createElement("div", { className: "d-flex align-items-center", onClick: function () { return setShow(true); } },
            React__default["default"].createElement("div", { className: "me-2" },
                React__default["default"].createElement(react.Icon, { icon: "lucide:edit", className: "fs-18px cursor-pointer" })),
            React__default["default"].createElement("div", null, "Share To Feed"))));
};

var Comment = function (_a) {
    var userLink = _a.userLink, userName = _a.userName, userComment = _a.userComment, className = _a.className, userAvatar = _a.userAvatar;
    var _b = React.useState(false), showReply = _b[0], setShowReply = _b[1];
    var _c = React.useState(false), isActive = _c[0], setActive = _c[1];
    return (React__default["default"].createElement("div", { className: "d-flex " + className },
        React__default["default"].createElement(Avatar, { className: "me-2", src: userAvatar, height: 35, width: 35 }),
        React__default["default"].createElement("div", { className: "w-100" },
            React__default["default"].createElement("div", { className: "bg-gray-1 px-2 py-1 rounded-6px d-inline-flex flex-column" },
                React__default["default"].createElement("a", { href: userLink },
                    React__default["default"].createElement("div", { className: "fw-600" }, userName)),
                React__default["default"].createElement("div", null, userComment)),
            React__default["default"].createElement("div", { className: "d-flex" },
                React__default["default"].createElement("div", { className: "popupover" },
                    React__default["default"].createElement("div", { className: 'me-2' + (isActive ? ' text-primary' : ''), onClick: function () { return setActive(function (current) { return !current; }); } }, "Like"),
                    React__default["default"].createElement("div", { className: "popover-content", "data-inner-spacer": 10, "data-position-bottom": 20, style: { display: "none" } },
                        React__default["default"].createElement(Reactions, null))),
                React__default["default"].createElement("div", { className: "cursor-pointer", onClick: function () { return setShowReply(function (current) { return !current; }); } }, "Reply")),
            showReply && (React__default["default"].createElement(sendComment, null)))));
};

var CallToAction = function (_a) {
    var commentContainerClass = _a.commentContainerClass;
    var _b = React.useState(false), showComment = _b[0], setShowComment = _b[1];
    var _c = React.useState(false), showPreviousComment = _c[0], setPreviousComment = _c[1];
    var _d = React.useState(false); _d[0]; _d[1];
    var _e = React.useState(false), isActive = _e[0], setActive = _e[1];
    var CommentList = [
        {
            id: '1',
            name: 'Kevin Rey Tabada',
            avatar: 'https://i.pravatar.cc/36/36',
            link: '#',
            comment: 'Great! I like the photo.'
        },
        {
            id: '1',
            name: 'Jason Daro',
            avatar: 'https://i.pravatar.cc/37/37',
            link: '#',
            comment: 'Very nice'
        },
    ];
    return (React__default["default"].createElement("div", { className: "d-flex flex-column h-100" },
        React__default["default"].createElement("div", { className: "d-flex justify-content-evenly cursor-pointer border-top-1-solid-gray-4 pt-3" },
            React__default["default"].createElement("div", { className: "d-flex align-items-center popupover" },
                React__default["default"].createElement("div", { className: 'd-flex align-items-center' + (isActive ? ' text-primary' : ''), onClick: function () { return setActive(function (current) { return !current; }); } },
                    React__default["default"].createElement(react.Icon, { icon: "lucide:thumbs-up", className: "fs-18px me-2" }),
                    React__default["default"].createElement("div", null, "Like")),
                React__default["default"].createElement("div", { className: "popover-content", "data-inner-spacer": 10, "data-position-bottom": 20, style: { display: "none" } },
                    React__default["default"].createElement(Reactions, null))),
            React__default["default"].createElement("div", { className: "d-flex align-items-center cursor-pointer", onClick: function () { return setShowComment(function (current) { return !current; }); } },
                React__default["default"].createElement(react.Icon, { icon: "lucide:message-circle", className: "fs-18px me-2" }),
                React__default["default"].createElement("div", null, "Comment")),
            React__default["default"].createElement("div", { className: "d-flex align-items-center" },
                React__default["default"].createElement(Dropdown__default["default"], { className: "dropdown-seamless" },
                    React__default["default"].createElement(Dropdown__default["default"].Toggle, null,
                        React__default["default"].createElement("div", { className: "d-flex align-items-center cursor-pointer text-base" },
                            React__default["default"].createElement(react.Icon, { icon: "lucide:share-2", className: "fs-18px me-2" }),
                            React__default["default"].createElement("div", null, "Share"))),
                    React__default["default"].createElement(Dropdown__default["default"].Menu, { className: "p-3 w-200px" },
                        React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center px-0" },
                            React__default["default"].createElement(ShareNow, null)),
                        React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center px-0" },
                            React__default["default"].createElement(ShareToFeed, null)))))),
        React__default["default"].createElement("div", { className: "fw-600 cursor-pointer my-2 " + (showPreviousComment ? 'd-none' : 'd-block'), onClick: function () { return setPreviousComment(function (current) { return !current; }); } }, "2 Previous Comments"),
        showComment && (React__default["default"].createElement(sendComment, null)),
        React__default["default"].createElement("div", { className: "h-100 position-relative" },
            React__default["default"].createElement("div", { className: commentContainerClass },
                showPreviousComment && (React__default["default"].createElement("div", { className: "mt-3" }, CommentList.map(function (item) { return (React__default["default"].createElement(Comment, { userName: item.name, userComment: item.comment, className: "mb-3", userAvatar: item.avatar, userLink: item.link })); }))),
                React__default["default"].createElement(Comment, { userName: "Devin Stewart", userComment: "This is Awesome!", userAvatar: "https://i.pravatar.cc/38/38", userLink: "#" })))));
};

var Video = function (_a) {
    var src = _a.src;
    return (React__default["default"].createElement("div", { className: "post-video" },
        React__default["default"].createElement("video", { controls: true },
            React__default["default"].createElement("source", { src: src, type: "video/mp4" }))));
};

var SharedPost = function (_a) {
    return (React__default["default"].createElement("div", { className: "p-3 rounded-8px border-1-solid-gray-1 bg-gray-1" },
        React__default["default"].createElement(Image, { src: "https://picsum.photos/1000/600" }),
        React__default["default"].createElement("div", { className: "d-flex align-items-center cursor-pointer mt-2" },
            React__default["default"].createElement(Avatar, { className: "me-2", src: "https://i.pravatar.cc/30/30", height: 30, width: 30 }),
            React__default["default"].createElement("div", { className: "fw-600" }, "Jason Daro")),
        React__default["default"].createElement(Text, { className: "text-gray-4 mt-1", value: "The way to get started is to quit talking and begin doing." })));
};

var imageList = [
    {
        id: 1,
        src: 'https://picsum.photos/500/500'
    },
    {
        id: 2,
        src: 'https://picsum.photos/501/501'
    },
    {
        id: 3,
        src: 'https://picsum.photos/502/502'
    },
    {
        id: 4,
        src: 'https://picsum.photos/503/503'
    },
    {
        id: 5,
        src: 'https://picsum.photos/504/504'
    },
    {
        id: 6,
        src: 'https://picsum.photos/505/505'
    },
];
var ImageMultiple = function (_a) {
    return (React__default["default"].createElement("div", { className: "mx-3" },
        React__default["default"].createElement(Row__default["default"], { className: "grid-post" }, imageList.slice(0, 5).map(function (item, index) { return (React__default["default"].createElement(Col__default["default"], { key: item.id, className: "pt-33p bg-gray-1 bg-center bg-cover position-relative " + ("items-" + (imageList.length === 2 ? '2' : imageList.length === 4 ? '4' : imageList.length === 5 || imageList.length >= 6 ? '5' : '')), style: { backgroundImage: "url( ".concat(item.src, " )") } }, imageList.length >= 6 ?
            React__default["default"].createElement("div", null, "+4")
            :
                '')); }))));
};

var postList = [
    {
        id: 1,
        username: "Marc Umali",
        useravatar: "https://i.pravatar.cc/40/40",
        text: "I really like this photo!",
        imagesrc: "https://picsum.photos/1000/600"
    },
    {
        id: 2,
        username: "Jason Daro",
        useravatar: "https://i.pravatar.cc/41/41",
        text: "Thank you Lord for another blessings"
    },
    {
        id: 3,
        username: "Kevin Rey Tabada",
        useravatar: "https://i.pravatar.cc/42/42",
        videosrc: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
    },
    {
        id: 4,
        username: "Devin Stewart",
        useravatar: "https://i.pravatar.cc/43/43",
        text: "Where is my coffee???!!!",
        imagesrc: "https://media2.giphy.com/media/M8ISSK5iSLbysOmYAw/giphy.gif"
    },
    {
        id: 5,
        username: "Darwin Pineda",
        useravatar: "https://i.pravatar.cc/43/43",
        text: "This is my first post shared.",
        sharedPost: true
    },
    {
        id: 6,
        username: "Kallah Vista",
        useravatar: "https://i.pravatar.cc/44/44",
        text: "Multiple image uploads",
        imageMultiple: true
    },
];
var Container = function (_a) {
    var _b = React.useState(false), isActive = _b[0], setActive = _b[1];
    var _c = React.useState(false), isFollow = _c[0], setFollow = _c[1];
    var _d = React.useState(false), show = _d[0], setShow = _d[1];
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement(PostModal, { show: show, handleClose: function () { return setShow(false); }, handleShow: function () { return setShow(true); }, title: "Post Details", dialogClassName: "modal-dialog-fluid mx-0" },
            React__default["default"].createElement("div", { className: "d-lg-flex h-100" },
                React__default["default"].createElement("div", { className: "w-100 bg-black d-flex flex-column" },
                    React__default["default"].createElement("div", { className: "d-flex p-3" },
                        React__default["default"].createElement("div", { className: "me-3 bg-white w-35px h-35px w-lg-45px h-lg-45px rounded-circle cursor-pointer d-flex align-items-center justify-content-center text-gray-2", onClick: function () { return setShow(false); } },
                            React__default["default"].createElement(react.Icon, { icon: "lucide:x", className: "fs-24px" })),
                        React__default["default"].createElement("a", { href: "/" },
                            React__default["default"].createElement("div", { className: "w-35px h-35px w-lg-45px h-lg-45px rounded-circle cursor-pointer bg-primary-5 d-flex align-items-center justify-content-center" },
                                React__default["default"].createElement(ImageProps__default["default"], { src: "/images/logo-white.png", className: "w-20px w-lg-30px cursor-pointer" })))),
                    React__default["default"].createElement("div", { className: "d-flex align-items-center mt-auto justify-content-between mb-3 mb-lg-auto" },
                        React__default["default"].createElement("div", { className: "mx-1 mx-lg-3" },
                            React__default["default"].createElement("div", { className: "bg-gray-1 w-35px h-35px w-lg-45px h-lg-45px rounded-circle cursor-pointer d-flex align-items-center justify-content-center text-gray-2" },
                                React__default["default"].createElement(react.Icon, { icon: "lucide:chevron-left", className: "fs-24px" }))),
                        React__default["default"].createElement(Image, { src: "https://picsum.photos/1920/1080", className: "maxh-500px" }),
                        React__default["default"].createElement("div", { className: "mx-1 mx-lg-3" },
                            React__default["default"].createElement("div", { className: "bg-gray-1 w-35px h-35px w-lg-45px h-lg-45px rounded-circle cursor-pointer d-flex align-items-center justify-content-center text-gray-2" },
                                React__default["default"].createElement(react.Icon, { icon: "lucide:chevron-right", className: "fs-24px" }))))),
                React__default["default"].createElement("div", null,
                    React__default["default"].createElement("div", { className: "w-lg-400px p-3 d-flex flex-column h-100 bg-white" },
                        React__default["default"].createElement("div", { className: "d-flex justify-content-between align-items-center mb-2" },
                            React__default["default"].createElement("a", { href: "#" },
                                React__default["default"].createElement("div", { className: "d-flex align-items-center cursor-pointer" },
                                    React__default["default"].createElement(Avatar, { src: "https://i.pravatar.cc/40/40", height: 40, width: 40 }),
                                    React__default["default"].createElement("div", { className: "ms-2" },
                                        React__default["default"].createElement("div", { className: "fw-600" }, "Jason Daro"),
                                        React__default["default"].createElement("div", { className: "text-gray-2 fs-12px" }, "Dec. 25, 2022 at 9:09PM")))),
                            React__default["default"].createElement(Dropdown__default["default"], { className: "dropdown-seamless" },
                                React__default["default"].createElement(Dropdown__default["default"].Toggle, null,
                                    React__default["default"].createElement(react.Icon, { icon: "lucide:more-vertical", className: "fs-20px cursor-pointer text-base" })),
                                React__default["default"].createElement(Dropdown__default["default"].Menu, { align: "end" },
                                    React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center", onClick: function () { return setActive(!isActive); } }, isActive ?
                                        React__default["default"].createElement("div", { className: "d-flex align-items-center" },
                                            React__default["default"].createElement("div", { className: "me-2" },
                                                React__default["default"].createElement(react.Icon, { icon: "lucide:bookmark", className: "fs-20px" })),
                                            React__default["default"].createElement("div", null, "Save Post"))
                                        :
                                            React__default["default"].createElement("div", { className: "d-flex align-items-center text-primary" },
                                                React__default["default"].createElement("div", { className: "me-2" },
                                                    React__default["default"].createElement(react.Icon, { icon: "material-symbols:bookmark-rounded", className: "fs-20px" })),
                                                React__default["default"].createElement("div", null, "Saved!"))),
                                    React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center", onClick: function () { return setFollow(!isFollow); } },
                                        React__default["default"].createElement("div", { className: "d-flex align-items-center" },
                                            React__default["default"].createElement("div", { className: "me-2" },
                                                React__default["default"].createElement(react.Icon, { icon: isFollow ? 'lucide:user-x' : 'lucide:user-plus', className: "fs-20px" })),
                                            React__default["default"].createElement("div", null, isFollow ? 'Unfollow' : 'Follow'))),
                                    React__default["default"].createElement(Dropdown__default["default"].Item, { href: "#", className: "d-flex align-items-center", onClick: function () { return setShow(true); } },
                                        React__default["default"].createElement("div", { className: "me-2" },
                                            React__default["default"].createElement(react.Icon, { icon: "lucide:alert-circle", className: "fs-20px" })),
                                        React__default["default"].createElement("div", null, "Report"))))),
                        React__default["default"].createElement("div", null,
                            React__default["default"].createElement(Text, { value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic ab veniam suscipit perspiciatis reiciendis incidunt velit praesentium, ex eos, sed magnam illum ipsam mollitia dolor earum maiores nostrum porro." })),
                        React__default["default"].createElement(Engagement, null),
                        React__default["default"].createElement(CallToAction, { commentContainerClass: "overflow-y-auto position-lg-absolute top-0 start-0 w-100 h-100" }))))),
        postList.map(function (item) { return (React__default["default"].createElement(Item, { key: item.id },
            item.sharedPost ?
                React__default["default"].createElement(Header, { userAvatar: item.useravatar, userName: item.username, status: "shared a post" })
                :
                    React__default["default"].createElement(Header, { userAvatar: item.useravatar, userName: item.username }),
            item.text && React__default["default"].createElement(Text, { value: item.text }),
            item.imagesrc && React__default["default"].createElement(Image, { src: item.imagesrc, onClick: function () { return setShow(true); } }),
            item.videosrc && React__default["default"].createElement(Video, { src: item.videosrc }),
            item.sharedPost && React__default["default"].createElement(SharedPost, null),
            item.imageMultiple && React__default["default"].createElement(ImageMultiple, null),
            React__default["default"].createElement(Engagement, null),
            React__default["default"].createElement(CallToAction, null))); })));
};

exports.Avatar = Avatar;
exports.CallToAction = CallToAction;
exports.Check = Check;
exports.Comment = Comment;
exports.Container = Container;
exports.Engagement = Engagement;
exports.Header = Header;
exports.Image = Image;
exports.Item = Item;
exports.PostModal = PostModal;
exports.Reactions = Reactions;
exports.SendComment = sendComment;
exports.ShareNow = ShareNow;
exports.ShareToFeed = ShareToFeed;
exports.SharedPost = SharedPost;
exports.Text = Text;
exports.Video = Video;
