"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"bc759703bd98\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRhbGljYWttYWsvRG9jdW1lbnRzL0dpdEh1Yi9ub3ZhLXNvbWluZS12Mi9hcHAvZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiYzc1OTcwM2JkOThcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Ana-Sayfa/HeaderBanner.tsx":
/*!***********************************************!*\
  !*** ./components/Ana-Sayfa/HeaderBanner.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeaderBanner: () => (/* binding */ HeaderBanner),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ HeaderBanner,default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst HeaderBanner = ()=>{\n    _s();\n    const data = [\n        \"/banner2.png\",\n        \"/banner2.png\",\n        \"/banner2.png\",\n        \"/banner2.png\"\n    ];\n    const [currSlide, setCurrSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const prevSlide = ()=>{\n        setCurrSlide(currSlide === 0 ? 3 : currSlide - 1);\n    };\n    const nextSlide = ()=>{\n        setCurrSlide(currSlide === 3 ? 0 : currSlide + 1);\n    };\n    // Mobilde otomatik geçişi sağlamak için useEffect\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"HeaderBanner.useEffect\": ()=>{\n            const intervalId = setInterval({\n                \"HeaderBanner.useEffect.intervalId\": ()=>{\n                    nextSlide(); // Her 5 saniyede bir slide geçişi yapar\n                }\n            }[\"HeaderBanner.useEffect.intervalId\"], 5000); // 5000 ms = 5 saniye\n            return ({\n                \"HeaderBanner.useEffect\": ()=>clearInterval(intervalId)\n            })[\"HeaderBanner.useEffect\"]; // Component unmount olduğunda interval temizlenir\n        }\n    }[\"HeaderBanner.useEffect\"], [\n        currSlide\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Anasayfa - Nova Flame\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \" Gaziantep, Adana, Mersin, Kahramanmaraş, Şanlıurfa, Malatya, Adıyaman, Hatay Ve T\\xfcm G\\xfcneydoğu B\\xf6lgesinde Odunlu ş\\xf6mine, barbek\\xfc, elektrikli ş\\xf6mine, ekmek fırınları, biogazlı ş\\xf6mine \\xe7eşitlerimiz ile sekt\\xf6rde siz m\\xfcşterilerimize kaliteli, g\\xfcvenilir ve ekonomik hizmetler sunmaya kararlılıkla devam etmekteyiz.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"Gaziantep Ş\\xf6mine, Adana Ş\\xf6mine, Şanlıurfa Ş\\xf6mine, Hatay Ş\\xf6mine, Adıyaman Ş\\xf6mine, G\\xfcneydoğu Ş\\xf6mine, Elektrikli Ş\\xf6mine, Elektrikli Ş\\xf6mine Modelleri, elektrikli somine, elektrikli ş\\xf6mine \\xfcreticileri, elektrikli ş\\xf6mine modelleri ve fiyatları, elektrikli ş\\xf6mine 150cm, tektes ş\\xf6mine, elektrikli ş\\xf6mine malatya, elektrikli ş\\xf6mine \\xe7eşitleri, elektrikli somine modelleri, hazır ş\\xf6mine modelleri, ş\\xf6mine fiyatları, ş\\xf6mine elektrik, zaya ş\\xf6mine, , flameline ş\\xf6mine, dekoratif ş\\xf6mine, 150cm elektrikli ş\\xf6mine, hazir s\\xf6mine, odun ş\\xf6mine fiyatları, elektrikli ş\\xf6mine tasarımları, elektrikli ş\\xf6mine dekorasyon, elektrikli ş\\xf6mine haznesi, dlc ş\\xf6mine, ş\\xf6mine elektrikli, portatif elektrikli ş\\xf6mine, elk ş\\xf6mine, taşınılabilir elektrikli ş\\xf6mine, elektrikli ş\\xf6mine g\\xf6rselleri, elektronik ş\\xf6mine, salon elektrikli ş\\xf6mine,   \"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"canonical\",\n                        href: \"https://novasomine.com/\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"robots\",\n                        content: \"index, follow\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"Anasayfa - Nova Flame\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: \" Gaziantep, Adana, Mersin, Kahramanmaraş, Şanlıurfa, Malatya, Adıyaman, Hatay Ve T\\xfcm G\\xfcneydoğu B\\xf6lgesinde Odunlu ş\\xf6mine, barbek\\xfc, elektrikli ş\\xf6mine, ekmek fırınları, biogazlı ş\\xf6mine \\xe7eşitlerimiz ile sekt\\xf6rde siz m\\xfcşterilerimize kaliteli, g\\xfcvenilir ve ekonomik hizmetler sunmaya kararlılıkla devam etmekteyiz.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:url\",\n                        content: \"https://novasomine.com\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: \"https://novasomine.com\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image:width\",\n                        content: \"1200\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image:height\",\n                        content: \"630\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:site_name\",\n                        content: \"Nova Flame\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:locale\",\n                        content: \"tr_TR\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-auto overflow-x-hidden bottom-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-screen\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                transform: \"translate(-\".concat(currSlide * 100, \"vw)\")\n                            },\n                            className: \"w-[400vw] h-full flex transition-transform duration-1000\",\n                            children: data.map((src, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-screen h-full\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        src: src,\n                                        alt: \"Slide \".concat(index + 1),\n                                        width: 1920,\n                                        height: 1080,\n                                        objectFit: \"cover\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-10 left-0 right-0 w-fit mx-auto hidden md:flex gap-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: prevSlide,\n                                    className: \"w-14 h-12 border-[#acacac] flex items-center justify-center hover:cursor-pointer hover:bg-orange-400 hover:text-white active:bg-gray-900 duration-300\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        src: \"/left_arrow.svg\",\n                                        alt: \"left_arrow\",\n                                        width: 10,\n                                        height: 10\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 5\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 3\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: nextSlide,\n                                    className: \"w-14 h-12 border-[#acacac] flex items-center justify-center hover:cursor-pointer hover:bg-orange-400 hover:text-white active:bg-gray-900 duration-300\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        src: \"/right_arrow.svg\",\n                                        alt: \"right_arrow\",\n                                        width: 10,\n                                        height: 10\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 5\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 3\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 1\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mehmetalicakmak/Documents/GitHub/nova-somine-v2/components/Ana-Sayfa/HeaderBanner.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HeaderBanner, \"yPEO2+dW1ToyyNUr16iXROUDyew=\");\n_c = HeaderBanner;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderBanner);\nvar _c;\n$RefreshReg$(_c, \"HeaderBanner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQW5hLVNheWZhL0hlYWRlckJhbm5lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNtQjtBQUNyQjtBQUV0QixNQUFNSyxlQUFlOztJQUUxQixNQUFNQyxPQUFPO1FBQ1g7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNTyxZQUFZO1FBQ2hCRCxhQUFhRCxjQUFjLElBQUksSUFBSUEsWUFBWTtJQUNqRDtJQUVBLE1BQU1HLFlBQVk7UUFDaEJGLGFBQWFELGNBQWMsSUFBSSxJQUFJQSxZQUFZO0lBQ2pEO0lBRUEsa0RBQWtEO0lBQ2xESixnREFBU0E7a0NBQUM7WUFDUixNQUFNUSxhQUFhQztxREFBWTtvQkFDN0JGLGFBQWEsd0NBQXdDO2dCQUN2RDtvREFBRyxPQUFPLHFCQUFxQjtZQUUvQjswQ0FBTyxJQUFNRyxjQUFjRjswQ0FBYSxrREFBa0Q7UUFDNUY7aUNBQUc7UUFBQ0o7S0FBVTtJQUVkLHFCQUNFOzswQkFFRSw4REFBQ0gsa0RBQUlBOztrQ0FDSCw4REFBQ1U7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQVlDLE1BQUs7Ozs7OztrQ0FDM0IsOERBQUNMO3dCQUFLQyxNQUFLO3dCQUFTQyxTQUFROzs7Ozs7a0NBQzVCLDhEQUFDRjt3QkFBS00sVUFBUzt3QkFBV0osU0FBUTs7Ozs7O2tDQUNsQyw4REFBQ0Y7d0JBQUtNLFVBQVM7d0JBQWlCSixTQUFROzs7Ozs7a0NBQ3hDLDhEQUFDRjt3QkFBS00sVUFBUzt3QkFBVUosU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtNLFVBQVM7d0JBQVNKLFNBQVE7Ozs7OztrQ0FDaEMsOERBQUNGO3dCQUFLTSxVQUFTO3dCQUFXSixTQUFROzs7Ozs7a0NBQ2xDLDhEQUFDRjt3QkFBS00sVUFBUzt3QkFBaUJKLFNBQVE7Ozs7OztrQ0FDeEMsOERBQUNGO3dCQUFLTSxVQUFTO3dCQUFrQkosU0FBUTs7Ozs7O2tDQUN6Qyw4REFBQ0Y7d0JBQUtNLFVBQVM7d0JBQWVKLFNBQVE7Ozs7OztrQ0FDdEMsOERBQUNGO3dCQUFLTSxVQUFTO3dCQUFZSixTQUFROzs7Ozs7Ozs7Ozs7MEJBR3JDLDhEQUFDSztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFDQ0UsT0FBTztnQ0FBRUMsV0FBVyxjQUE4QixPQUFoQmxCLFlBQVksS0FBSTs0QkFBSzs0QkFDdkRnQixXQUFVO3NDQUVUakIsS0FBS29CLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDZCw4REFBQ047b0NBQWdCQyxXQUFVOzhDQUN6Qiw0RUFBQ3ZCLGtEQUFLQTt3Q0FDSjJCLEtBQUtBO3dDQUNMRSxLQUFLLFNBQW1CLE9BQVZELFFBQVE7d0NBQ3RCRSxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSQyxXQUFVOzs7Ozs7bUNBTkpKOzs7Ozs7Ozs7O3NDQWF4Qiw4REFBQ047NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSVcsU0FBU3hCO29DQUFXYyxXQUFVOzhDQUVqQyw0RUFBQ3ZCLGtEQUFLQTt3Q0FBQzJCLEtBQUk7d0NBQWtCRSxLQUFJO3dDQUFhQyxPQUFPO3dDQUFJQyxRQUFROzs7Ozs7Ozs7Ozs4Q0FFbkUsOERBQUNUO29DQUFJVyxTQUFTdkI7b0NBQVdhLFdBQVU7OENBRWpDLDRFQUFDdkIsa0RBQUtBO3dDQUFDMkIsS0FBSTt3Q0FBbUJFLEtBQUk7d0NBQWNDLE9BQU87d0NBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2RSxFQUFDO0dBcEZZMUI7S0FBQUE7QUFzRmIsaUVBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRhbGljYWttYWsvRG9jdW1lbnRzL0dpdEh1Yi9ub3ZhLXNvbWluZS12Mi9jb21wb25lbnRzL0FuYS1TYXlmYS9IZWFkZXJCYW5uZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGNvbnN0IEhlYWRlckJhbm5lciA9ICgpID0+IHtcblxuICBjb25zdCBkYXRhID0gW1xuICAgIFwiL2Jhbm5lcjIucG5nXCIsXG4gICAgXCIvYmFubmVyMi5wbmdcIiwgICAgICAgXG4gICAgXCIvYmFubmVyMi5wbmdcIixcbiAgICBcIi9iYW5uZXIyLnBuZ1wiLFxuICBdO1xuXG4gIGNvbnN0IFtjdXJyU2xpZGUsIHNldEN1cnJTbGlkZV0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgICBzZXRDdXJyU2xpZGUoY3VyclNsaWRlID09PSAwID8gMyA6IGN1cnJTbGlkZSAtIDEpXG4gIH1cblxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XG4gICAgc2V0Q3VyclNsaWRlKGN1cnJTbGlkZSA9PT0gMyA/IDAgOiBjdXJyU2xpZGUgKyAxKVxuICB9XG5cbiAgLy8gTW9iaWxkZSBvdG9tYXRpayBnZcOnacWfaSBzYcSfbGFtYWsgacOnaW4gdXNlRWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIG5leHRTbGlkZSgpOyAvLyBIZXIgNSBzYW5peWVkZSBiaXIgc2xpZGUgZ2XDp2nFn2kgeWFwYXJcbiAgICB9LCA1MDAwKTsgLy8gNTAwMCBtcyA9IDUgc2FuaXllXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTsgLy8gQ29tcG9uZW50IHVubW91bnQgb2xkdcSfdW5kYSBpbnRlcnZhbCB0ZW1pemxlbmlyXG4gIH0sIFtjdXJyU2xpZGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogU0VPIE1ldGEgVGFnbGVyaSAqL31cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QW5hc2F5ZmEgLSBOb3ZhIEZsYW1lPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIiBHYXppYW50ZXAsIEFkYW5hLCBNZXJzaW4sIEthaHJhbWFubWFyYcWfLCDFnmFubMSxdXJmYSwgTWFsYXR5YSwgQWTEsXlhbWFuLCBIYXRheSBWZSBUw7xtIEfDvG5leWRvxJ91IELDtmxnZXNpbmRlIE9kdW5sdSDFn8O2bWluZSwgYmFyYmVrw7wsIGVsZWt0cmlrbGkgxZ/Dtm1pbmUsIGVrbWVrIGbEsXLEsW5sYXLEsSwgYmlvZ2F6bMSxIMWfw7ZtaW5lIMOnZcWfaXRsZXJpbWl6IGlsZSBzZWt0w7ZyZGUgc2l6IG3DvMWfdGVyaWxlcmltaXplIGthbGl0ZWxpLCBnw7x2ZW5pbGlyIHZlIGVrb25vbWlrIGhpem1ldGxlciBzdW5tYXlhIGthcmFybMSxbMSxa2xhIGRldmFtIGV0bWVrdGV5aXouXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiR2F6aWFudGVwIMWew7ZtaW5lLCBBZGFuYSDFnsO2bWluZSwgxZ5hbmzEsXVyZmEgxZ7Dtm1pbmUsIEhhdGF5IMWew7ZtaW5lLCBBZMSxeWFtYW4gxZ7Dtm1pbmUsIEfDvG5leWRvxJ91IMWew7ZtaW5lLCBFbGVrdHJpa2xpIMWew7ZtaW5lLCBFbGVrdHJpa2xpIMWew7ZtaW5lIE1vZGVsbGVyaSwgZWxla3RyaWtsaSBzb21pbmUsIGVsZWt0cmlrbGkgxZ/Dtm1pbmUgw7xyZXRpY2lsZXJpLCBlbGVrdHJpa2xpIMWfw7ZtaW5lIG1vZGVsbGVyaSB2ZSBmaXlhdGxhcsSxLCBlbGVrdHJpa2xpIMWfw7ZtaW5lIDE1MGNtLCB0ZWt0ZXMgxZ/Dtm1pbmUsIGVsZWt0cmlrbGkgxZ/Dtm1pbmUgbWFsYXR5YSwgZWxla3RyaWtsaSDFn8O2bWluZSDDp2XFn2l0bGVyaSwgZWxla3RyaWtsaSBzb21pbmUgbW9kZWxsZXJpLCBoYXrEsXIgxZ/Dtm1pbmUgbW9kZWxsZXJpLCDFn8O2bWluZSBmaXlhdGxhcsSxLCDFn8O2bWluZSBlbGVrdHJpaywgemF5YSDFn8O2bWluZSwgLCBmbGFtZWxpbmUgxZ/Dtm1pbmUsIGRla29yYXRpZiDFn8O2bWluZSwgMTUwY20gZWxla3RyaWtsaSDFn8O2bWluZSwgaGF6aXIgc8O2bWluZSwgb2R1biDFn8O2bWluZSBmaXlhdGxhcsSxLCBlbGVrdHJpa2xpIMWfw7ZtaW5lIHRhc2FyxLFtbGFyxLEsIGVsZWt0cmlrbGkgxZ/Dtm1pbmUgZGVrb3Jhc3lvbiwgZWxla3RyaWtsaSDFn8O2bWluZSBoYXpuZXNpLCBkbGMgxZ/Dtm1pbmUsIMWfw7ZtaW5lIGVsZWt0cmlrbGksIHBvcnRhdGlmIGVsZWt0cmlrbGkgxZ/Dtm1pbmUsIGVsayDFn8O2bWluZSwgdGHFn8SxbsSxbGFiaWxpciBlbGVrdHJpa2xpIMWfw7ZtaW5lLCBlbGVrdHJpa2xpIMWfw7ZtaW5lIGfDtnJzZWxsZXJpLCBlbGVrdHJvbmlrIMWfw7ZtaW5lLCBzYWxvbiBlbGVrdHJpa2xpIMWfw7ZtaW5lLCAgIFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL25vdmFzb21pbmUuY29tL1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiQW5hc2F5ZmEgLSBOb3ZhIEZsYW1lXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCIgR2F6aWFudGVwLCBBZGFuYSwgTWVyc2luLCBLYWhyYW1hbm1hcmHFnywgxZ5hbmzEsXVyZmEsIE1hbGF0eWEsIEFkxLF5YW1hbiwgSGF0YXkgVmUgVMO8bSBHw7xuZXlkb8SfdSBCw7ZsZ2VzaW5kZSBPZHVubHUgxZ/Dtm1pbmUsIGJhcmJla8O8LCBlbGVrdHJpa2xpIMWfw7ZtaW5lLCBla21layBmxLFyxLFubGFyxLEsIGJpb2dhemzEsSDFn8O2bWluZSDDp2XFn2l0bGVyaW1peiBpbGUgc2VrdMO2cmRlIHNpeiBtw7zFn3RlcmlsZXJpbWl6ZSBrYWxpdGVsaSwgZ8O8dmVuaWxpciB2ZSBla29ub21payBoaXptZXRsZXIgc3VubWF5YSBrYXJhcmzEsWzEsWtsYSBkZXZhbSBldG1la3RleWl6LlwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9ub3Zhc29taW5lLmNvbVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9ub3Zhc29taW5lLmNvbVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMTIwMFwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYzMFwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIk5vdmEgRmxhbWVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJ0cl9UUlwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1hdXRvIG92ZXJmbG93LXgtaGlkZGVuIGJvdHRvbS01Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuJz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLSR7Y3VyclNsaWRlICogMTAwfXZ3KWAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1bNDAwdnddIGgtZnVsbCBmbGV4IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTEwMDAnPlxuICAgICAgICAgICAgey8qIFJlc2ltbGVyaSBsYXlvdXQ9J2ludHJpbnNpYycgaWxlIGJlbGlybGkgYm95dXRsYXJkYSBnw7ZzdGVybWVrICovfVxuICAgICAgICAgICAge2RhdGEubWFwKChzcmMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1zY3JlZW4gaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9IFxuICAgICAgICAgICAgICAgICAgYWx0PXtgU2xpZGUgJHtpbmRleCArIDF9YH0gXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTkyMH0gXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwODB9IFxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIiBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEJ1dG9ubGFyIHNhZGVjZSBtYXNhw7xzdMO8IGnDp2luIGfDtnLDvG7DvHIgKi99XG48ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTEwIGxlZnQtMCByaWdodC0wIHctZml0IG14LWF1dG8gaGlkZGVuIG1kOmZsZXggZ2FwLTgnPlxuICA8ZGl2IG9uQ2xpY2s9e3ByZXZTbGlkZX0gY2xhc3NOYW1lPSd3LTE0IGgtMTIgYm9yZGVyLVsjYWNhY2FjXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclxuICAgIGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOmJnLW9yYW5nZS00MDAgaG92ZXI6dGV4dC13aGl0ZSBhY3RpdmU6YmctZ3JheS05MDAgZHVyYXRpb24tMzAwJz5cbiAgICA8SW1hZ2Ugc3JjPVwiL2xlZnRfYXJyb3cuc3ZnXCIgYWx0PSdsZWZ0X2Fycm93JyB3aWR0aD17MTB9IGhlaWdodD17MTB9IC8+XG4gIDwvZGl2PlxuICA8ZGl2IG9uQ2xpY2s9e25leHRTbGlkZX0gY2xhc3NOYW1lPSd3LTE0IGgtMTIgYm9yZGVyLVsjYWNhY2FjXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclxuICAgIGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOmJnLW9yYW5nZS00MDAgaG92ZXI6dGV4dC13aGl0ZSBhY3RpdmU6YmctZ3JheS05MDAgZHVyYXRpb24tMzAwJz5cbiAgICA8SW1hZ2Ugc3JjPVwiL3JpZ2h0X2Fycm93LnN2Z1wiIGFsdD0ncmlnaHRfYXJyb3cnIHdpZHRoPXsxMH0gaGVpZ2h0PXsxMH0gLz5cbiAgPC9kaXY+XG48L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckJhbm5lclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJIZWFkZXJCYW5uZXIiLCJkYXRhIiwiY3VyclNsaWRlIiwic2V0Q3VyclNsaWRlIiwicHJldlNsaWRlIiwibmV4dFNsaWRlIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJwcm9wZXJ0eSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwidHJhbnNmb3JtIiwibWFwIiwic3JjIiwiaW5kZXgiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Ana-Sayfa/HeaderBanner.tsx\n"));

/***/ })

});