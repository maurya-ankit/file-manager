"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/Breadcrumb.js


function Breadcrumb({ path  }) {
    const links = path.split("/");
    let currentPath = '';
    const BreadcrumbPaths = links.map((link)=>{
        currentPath = currentPath + link + `/`;
        let name = link;
        if (currentPath == "/") {
            name = "root";
        }
        return {
            name,
            path: currentPath
        };
    });
    console.log(BreadcrumbPaths);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700",
            "aria-label": "Breadcrumb",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                className: "inline-flex items-center space-x-1 md:space-x-3",
                children: [
                    BreadcrumbPaths.slice(0, -1).map((BreadcrumbPath)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/?folder=${BreadcrumbPath.path}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white",
                                            children: BreadcrumbPath.name
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "w-6 h-6 text-gray-400",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                            clipRule: "evenodd"
                                        })
                                    })
                                ]
                            })
                        }, BreadcrumbPath.path)
                    ),
                    BreadcrumbPaths.length > 2 && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        "aria-current": "page",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500",
                                    children: BreadcrumbPaths[BreadcrumbPaths.length - 1].name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-6 h-6 text-gray-400",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                        clipRule: "evenodd"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/File.js



function File({ name , parent  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const handleNavigate = (path)=>{
        router.push(`/?folder=${path}`);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            onClick: ()=>handleNavigate(parent + "/" + name)
            ,
            className: " bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    className: "rounded-t-lg",
                    src: "/file.svg",
                    alt: "",
                    height: 200,
                    width: 200
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "p-5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mb-2 font-bold tracking-tight text-gray-900 dark:text-white",
                        children: name
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Folder.js



function Folder({ name , parent  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const handleNavigate = (path)=>{
        router.push(`/?folder=${path}`);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            onClick: ()=>handleNavigate(parent + "/" + name)
            ,
            className: "max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    className: "rounded-t-lg",
                    src: "/folder.svg",
                    alt: "",
                    height: 200,
                    width: 200
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "p-5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mb-2 font-bold tracking-tight text-gray-900 dark:text-white",
                        children: name
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/index.js











const hljs = __webpack_require__(755);

function Home({ data , path , fileContent  }) {
    console.log({
        fileContent
    });
    (0,external_react_.useEffect)(()=>{
        // first, find all the div.code blocks
        document.querySelectorAll('div.code').forEach((el)=>{
            // then highlight each
            hljs.highlightElement(el);
            console.log(el);
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumb, {
                path: path
            }),
            data ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-6 gap-4",
                children: data.map((d)=>{
                    if (d.isFile === true) {
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(File, {
                                name: d.name,
                                parent: path
                            })
                        }, d.name);
                    } else {
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Folder, {
                                name: d.name,
                                parent: path
                            })
                        }, d.name);
                    }
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("code", {
                    className: "code",
                    children: fileContent
                })
            })
        ]
    });
};
async function getServerSideProps(context) {
    let { folder ='/'  } = context.query;
    folder = folder === "" ? '/' : folder;
    console.log({
        folder
    });
    let data = false;
    let fileContent = false;
    var stats = external_fs_default().statSync(folder);
    if (stats.isDirectory()) {
        data = await promises_default().readdir(folder, {
            withFileTypes: true
        });
        data = data.map((d)=>{
            return {
                name: d.name,
                isFile: d.isFile()
            };
        });
    } else {
        try {
            const data = external_fs_default().readFileSync(folder, 'utf8');
            fileContent = data;
        } catch (err) {
            console.error(err);
        }
    }
    return {
        props: {
            data,
            path: folder,
            fileContent
        }
    };
}


/***/ }),

/***/ 755:
/***/ ((module) => {

module.exports = require("highlight.js");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61], () => (__webpack_exec__(908)));
module.exports = __webpack_exports__;

})();