"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7484:
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
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./utils/useContextMenu.js

const useContextMenu = ()=>{
    const { 0: anchorPoint , 1: setAnchorPoint  } = (0,external_react_.useState)({
        x: 0,
        y: 0
    });
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const handleContextMenu = (0,external_react_.useCallback)((event)=>{
        event.preventDefault();
        setAnchorPoint({
            x: event.pageX,
            y: event.pageY
        });
        setShow(true);
    }, [
        setShow,
        setAnchorPoint
    ]);
    const handleClick = (0,external_react_.useCallback)(()=>show ? setShow(false) : null
    , [
        show
    ]);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("click", handleClick);
        document.addEventListener("contextmenu", handleContextMenu);
        return ()=>{
            document.removeEventListener("click", handleClick);
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    });
    return {
        anchorPoint,
        show
    };
};
/* harmony default export */ const utils_useContextMenu = (useContextMenu);

;// CONCATENATED MODULE: external "@szhsin/react-menu"
const react_menu_namespaceObject = require("@szhsin/react-menu");
// EXTERNAL MODULE: ./node_modules/@szhsin/react-menu/dist/index.css
var dist = __webpack_require__(4995);
// EXTERNAL MODULE: ./node_modules/@szhsin/react-menu/dist/transitions/slide.css
var slide = __webpack_require__(5141);
;// CONCATENATED MODULE: external "pretty-ms"
const external_pretty_ms_namespaceObject = require("pretty-ms");
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./components/Menu.js











const Menu_ = ({ path , isFile , stats , fileContent , handleSave  })=>{
    const { anchorPoint , show  } = utils_useContextMenu();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "https://unpkg.com/flowbite@1.4.1/dist/flowbite.min.css"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_menu_namespaceObject.ControlledMenu, {
                state: show ? "open" : "closed",
                anchorPoint: anchorPoint,
                children: isFile ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_menu_namespaceObject.MenuItem, {
                            onClick: handleSave,
                            children: "Save"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_menu_namespaceObject.MenuItem, {
                            type: "button",
                            "data-modal-toggle": "popup-modal-delete",
                            children: "Delete"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_menu_namespaceObject.MenuItem, {
                            type: "button",
                            "data-modal-toggle": "popup-modal",
                            children: "Properties"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_menu_namespaceObject.MenuItem, {
                            type: "button",
                            "data-modal-toggle": "popup-modal-newfolder",
                            children: "New Folder"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_menu_namespaceObject.MenuItem, {
                            type: "button",
                            "data-modal-toggle": "popup-modal-newfile",
                            children: "New File"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_menu_namespaceObject.MenuItem, {
                            type: "button",
                            "data-modal-toggle": "popup-modal",
                            children: "Properties"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "popup-modal",
                tabIndex: "-1",
                className: "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Stats, {
                    stats: stats,
                    path: path
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "popup-modal-newfile",
                tabIndex: "-1",
                className: "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx(NewFile, {
                    stats: stats,
                    path: path
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "popup-modal-newfolder",
                tabIndex: "-1",
                className: "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx(NewFolder, {
                    stats: stats,
                    path: path
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "popup-modal-delete",
                tabIndex: "-1",
                className: "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Delete, {
                    stats: stats,
                    path: path
                })
            })
        ]
    });
};
/* harmony default export */ const Menu = (Menu_);
const Stats = ({ stats , path  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative p-4 w-full max-w-md h-full md:h-auto",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-end p-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",
                        "data-modal-toggle": "popup-modal",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                clipRule: "evenodd"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-6 pt-0 text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "mb-5 font-normal text-gray-500 dark:text-gray-400",
                            children: [
                                "Properties for ",
                                path
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "accessed At: ",
                                new Date(stats["atime"]).toDateString(),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "modified At: ",
                                new Date(stats["mtime"]).toDateString(),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "created At : ",
                                new Date(stats["birthtime"]).toDateString(),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "size : ",
                                stats["size"]
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const NewFile = ({ stats , path  })=>{
    const { 0: filename , 1: setFileName  } = (0,external_react_.useState)("");
    console.log(filename);
    const handleCreateFile = ()=>{
        external_axios_default().post(`/api/file?filePath=${path + "/" + filename}`).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative p-4 w-full max-w-md h-full md:h-auto",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-end p-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",
                        "data-modal-toggle": "popup-modal-newfile",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                clipRule: "evenodd"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-6 pt-0 text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "password",
                                    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                    children: "File Name"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    id: "filename",
                                    onChange: (e)=>setFileName(e.target.value)
                                    ,
                                    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            "data-modal-toggle": "popup-modal-newfile",
                            onClick: handleCreateFile,
                            type: "button",
                            className: "text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",
                            children: "Create new File"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            "data-modal-toggle": "popup-modal-newfile",
                            type: "button",
                            className: "text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",
                            children: "No, cancel"
                        })
                    ]
                })
            ]
        })
    });
};
const NewFolder = ({ stats , path  })=>{
    const { 0: dirname , 1: setDirName  } = (0,external_react_.useState)("");
    const handleCreateFile = ()=>{
        external_axios_default().post(`/api/folder?dir=${path + "/" + dirname}`).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative p-4 w-full max-w-md h-full md:h-auto",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-end p-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",
                        "data-modal-toggle": "popup-modal-newfolder",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                clipRule: "evenodd"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-6 pt-0 text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "foldername",
                                    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                    children: "Folder Name"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    id: "foldername",
                                    onChange: (e)=>setDirName(e.target.value)
                                    ,
                                    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            "data-modal-toggle": "popup-modal-newfolder",
                            onClick: handleCreateFile,
                            type: "button",
                            className: "text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",
                            children: "Create new Folder"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            "data-modal-toggle": "popup-modal-newfolder",
                            type: "button",
                            className: "text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",
                            children: "No, cancel"
                        })
                    ]
                })
            ]
        })
    });
};
const Delete = ({ stats , path  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    const handleDelete = ()=>{
        external_axios_default()["delete"](`/api/file?filePath=${path}`).then((res)=>{
            router.push(`/?folder=${path.split("/").slice(0, -1).join("/")}`);
        }).catch((err)=>{
            console.log(err);
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative p-4 w-full max-w-md h-full md:h-auto",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-end p-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",
                        "data-modal-toggle": "popup-modal-delete",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fillRule: "evenodd",
                                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                clipRule: "evenodd"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-6 pt-0 text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                            className: "mb-5 text text-wrap font-normal text-gray-500 dark:text-gray-400",
                            children: [
                                "Are you sure you want to delete ",
                                /*#__PURE__*/ jsx_runtime_.jsx("kbd", {
                                    children: path
                                }),
                                "?"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            "data-modal-toggle": "popup-modal-delete",
                            onClick: handleDelete,
                            type: "button",
                            className: "text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",
                            children: "Yes, I am sure"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            "data-modal-toggle": "popup-modal-delete",
                            type: "button",
                            className: "text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",
                            children: "No, cancel"
                        })
                    ]
                })
            ]
        })
    });
};

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

;// CONCATENATED MODULE: ./pages/index.js












const hljs = __webpack_require__(3755);


function Home({ data , path , fileContent , stats  }) {
    const { 0: fileContent_ , 1: setFileContent_  } = (0,external_react_.useState)(fileContent);
    console.log(fileContent_);
    (0,external_react_.useEffect)(()=>{
        // first, find all the div.code blocks
        document.querySelectorAll('div.code').forEach((el)=>{
            // then highlight each
            hljs.highlightElement(el);
        });
    }, []);
    (0,external_react_.useEffect)(()=>{
        setFileContent_(fileContent);
    }, [
        fileContent
    ]);
    const handleSave = ()=>{
        external_axios_default().patch(`/api/file/?filePath=${path}`, {
            fileContent
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "FIle-Manager"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumb, {
                path: path
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                path: path,
                isFile: !data,
                stats: stats,
                fileContent: fileContent_
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
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("code", {
                            className: "code",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                className: " form-control block w-full h-[80vh] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ",
                                value: fileContent_,
                                onChange: (e)=>setFileContent_(e.target.value)
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-end mt-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                "data-modal-toggle": "popup-modal-newfolder",
                                onClick: handleSave,
                                type: "button",
                                className: "align-left text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",
                                children: "Save"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                "data-modal-toggle": "popup-modal-newfolder",
                                type: "button",
                                className: "text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",
                                children: "No, cancel"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps(context) {
    let { folder ='/'  } = context.query;
    folder = folder === "" ? '/' : folder;
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
            fileContent,
            stats: JSON.parse(JSON.stringify(stats))
        }
    };
}


/***/ }),

/***/ 3755:
/***/ ((module) => {

module.exports = require("highlight.js");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
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
var __webpack_exports__ = __webpack_require__.X(0, [895,792], () => (__webpack_exec__(7484)));
module.exports = __webpack_exports__;

})();