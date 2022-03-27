"use strict";
(() => {
var exports = {};
exports.id = 166;
exports.ids = [166];
exports.modules = {

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 7651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onError: (err, req, res, next)=>{
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res)=>{
        res.status(404).end("Page is not found");
    }
}).post(async (req, res)=>{
    const { filePath  } = req.query;
    try {
        fs__WEBPACK_IMPORTED_MODULE_1___default().closeSync(fs__WEBPACK_IMPORTED_MODULE_1___default().openSync(filePath, "w"));
    } catch (err) {
        throw new Error(err);
    }
}).patch(async (req, res)=>{
    const { filePath  } = req.query;
    let body = req.body;
    try {
        fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(filePath, body.fileContent);
    } catch (err) {
        throw new Error(err);
    }
}).delete(async (req, res)=>{
    const { filePath  } = req.query;
    try {
        fs__WEBPACK_IMPORTED_MODULE_1___default().unlinkSync(filePath);
        res.json({
            message: `${filePath} deleted successfully`
        });
    } catch (err) {
        throw new Error(err);
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7651));
module.exports = __webpack_exports__;

})();