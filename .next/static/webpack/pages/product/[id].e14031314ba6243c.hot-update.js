"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./src/components/ProductSummary/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/ProductSummary/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ti */ \"./node_modules/react-icons/ti/index.esm.js\");\n\n\n\nvar _this = undefined;\nvar ProductSummary = function(param) {\n    var product = param.product;\n    var name = product.name, sku = product.sku, price = product.price, image = product.image, attributes = product.attributes;\n    var description = attributes.description, hardiness = attributes.hardiness, shape = attributes.shape, taste = attributes.taste;\n    console.log(product.attributes);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        direction: \"column\",\n        align: \"center\",\n        gap: \"2rem\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                borderWidth: \"1px\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: image\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                        direction: \"column\",\n                        divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, void 0, void 0),\n                        p: \"1rem\",\n                        gap: \"1rem\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                children: price\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                children: [\n                                    \" SKU: \",\n                                    sku\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                                direction: \"row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                                        type: \"number\",\n                                        fontWeight: \"bold\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        p: \"1.5rem\",\n                                        leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__.TiShoppingCart, {}, void 0, false, void 0, void 0),\n                                        colorScheme: \"pink\",\n                                        variant: \"solid\",\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                p: \"1rem\",\n                maxW: \"80%\",\n                borderWidth: \"1px\",\n                divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, void 0, void 0),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                        size: \"md\",\n                        children: \"About this Avocado\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table, {\n                variant: \"simple\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Thead, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {\n                                children: \"Attributes\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tbody, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: \"shape\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: shape\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: shape\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: hardiness\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: taste\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: shape\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: hardiness\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: taste\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this));\n};\n_c = ProductSummary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductSummary);\nvar _c;\n$RefreshReg$(_c, \"ProductSummary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBaUJ5QjtBQUNzQjs7QUFNL0MsR0FBSyxDQUFDZSxjQUFjLEdBQUcsUUFBUSxRQUErQixDQUFDO1FBQXJDQyxPQUFPLFNBQVBBLE9BQU87SUFDL0IsR0FBSyxDQUFHQyxJQUFJLEdBQW9DRCxPQUFPLENBQS9DQyxJQUFJLEVBQUVDLEdBQUcsR0FBK0JGLE9BQU8sQ0FBekNFLEdBQUcsRUFBRUMsS0FBSyxHQUF3QkgsT0FBTyxDQUFwQ0csS0FBSyxFQUFFQyxLQUFLLEdBQWlCSixPQUFPLENBQTdCSSxLQUFLLEVBQUVDLFVBQVUsR0FBS0wsT0FBTyxDQUF0QkssVUFBVTtJQUMzQyxHQUFLLENBQUdDLFdBQVcsR0FBOEJELFVBQVUsQ0FBbkRDLFdBQVcsRUFBRUMsU0FBUyxHQUFtQkYsVUFBVSxDQUF0Q0UsU0FBUyxFQUFFQyxLQUFLLEdBQVlILFVBQVUsQ0FBM0JHLEtBQUssRUFBRUMsS0FBSyxHQUFLSixVQUFVLENBQXBCSSxLQUFLO0lBQzVDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsT0FBTyxDQUFDSyxVQUFVO0lBQzlCLE1BQU0sNkVBQ0hyQixrREFBSTtRQUFDNEIsU0FBUyxFQUFDLENBQVE7UUFBQ0MsS0FBSyxFQUFDLENBQVE7UUFBQ0MsR0FBRyxFQUFDLENBQU07O3dGQUMvQzlCLGtEQUFJO2dCQUFDK0IsV0FBVyxFQUFDLENBQUs7O2dHQUNwQjdCLG1EQUFLO3dCQUFDOEIsR0FBRyxFQUFFWixLQUFLOzs7Ozs7Z0dBQ2hCYixtREFBSzt3QkFBQ3FCLFNBQVMsRUFBQyxDQUFRO3dCQUFDSyxPQUFPLDhFQUFHM0IscURBQU87d0JBQUs0QixDQUFDLEVBQUMsQ0FBTTt3QkFBQ0osR0FBRyxFQUFDLENBQU07O3dHQUNoRTdCLHFEQUFPOzBDQUFFZ0IsSUFBSTs7Ozs7O3dHQUNiZCxrREFBSTswQ0FBRWdCLEtBQUs7Ozs7Ozt3R0FDWGhCLGtEQUFJOztvQ0FBQyxDQUFNO29DQUFDZSxHQUFHOzs7Ozs7O3dHQUNmWCxtREFBSztnQ0FBQ3FCLFNBQVMsRUFBQyxDQUFLOztnSEFDbkJ4QixtREFBSzt3Q0FBQytCLElBQUksRUFBQyxDQUFRO3dDQUFDQyxVQUFVLEVBQUMsQ0FBTTs7Ozs7O2dIQUNyQy9CLG9EQUFNO3dDQUNMNkIsQ0FBQyxFQUFDLENBQVE7d0NBQ1ZHLFFBQVEsOEVBQUd2QiwwREFBYzt3Q0FDekJ3QixXQUFXLEVBQUMsQ0FBTTt3Q0FDbEJDLE9BQU8sRUFBQyxDQUFPO2tEQUNoQixDQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSUxoQyxtREFBSztnQkFBQzJCLENBQUMsRUFBQyxDQUFNO2dCQUFDTSxJQUFJLEVBQUMsQ0FBSztnQkFBQ1QsV0FBVyxFQUFDLENBQUs7Z0JBQUNFLE9BQU8sOEVBQUczQixxREFBTzs7Z0dBQzNETCxxREFBTzt3QkFBQ3dDLElBQUksRUFBQyxDQUFJO2tDQUFDLENBQWtCOzs7Ozs7Z0dBQ3BDdEMsa0RBQUk7a0NBQUVtQixXQUFXOzs7Ozs7Ozs7Ozs7d0ZBRW5CZCxtREFBSztnQkFBQytCLE9BQU8sRUFBQyxDQUFROztnR0FDcEI5QixtREFBSzs4R0FDSEUsZ0RBQUU7a0hBQ0FDLGdEQUFFOzBDQUFDLENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBR2pCRixtREFBSzs7d0dBQ0hDLGdEQUFFOztnSEFDQUUsZ0RBQUU7a0RBQUMsQ0FBSzs7Ozs7O2dIQUNSQSxnREFBRTtrREFBRVcsS0FBSzs7Ozs7Ozs7Ozs7O3dHQUVYYixnREFBRTs7Z0hBQ0FFLGdEQUFFO2tEQUFFVyxLQUFLOzs7Ozs7Z0hBQ1RYLGdEQUFFO2tEQUFFVSxTQUFTOzs7Ozs7Z0hBQ2JWLGdEQUFFO2tEQUFFWSxLQUFLOzs7Ozs7Ozs7Ozs7d0dBRVhkLGdEQUFFOztnSEFDQUUsZ0RBQUU7a0RBQUVXLEtBQUs7Ozs7OztnSEFDVFgsZ0RBQUU7a0RBQUVVLFNBQVM7Ozs7OztnSEFDYlYsZ0RBQUU7a0RBQUVZLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QixDQUFDO0tBdERLVixjQUFjO0FBdURwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RTdW1tYXJ5L2luZGV4LnRzeD80M2E2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRmxleCxcclxuICBIZWFkaW5nLFxyXG4gIEltYWdlLFxyXG4gIFRleHQsXHJcbiAgSW5wdXQsXHJcbiAgQnV0dG9uLFxyXG4gIERpdmlkZXIsXHJcbiAgU3RhY2ssXHJcbiAgVGFibGUsXHJcbiAgVGhlYWQsXHJcbiAgVGJvZHksXHJcbiAgVGZvb3QsXHJcbiAgVHIsXHJcbiAgVGgsXHJcbiAgVGQsXHJcbiAgVGFibGVDYXB0aW9uLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IFRpU2hvcHBpbmdDYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XHJcblxyXG50eXBlIElQcm9kdWN0U3VtbWFyeVByb3BzID0ge1xyXG4gIHByb2R1Y3Q6IFRQcm9kdWN0O1xyXG59O1xyXG5cclxuY29uc3QgUHJvZHVjdFN1bW1hcnkgPSAoeyBwcm9kdWN0IH06IElQcm9kdWN0U3VtbWFyeVByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCBza3UsIHByaWNlLCBpbWFnZSwgYXR0cmlidXRlcyB9ID0gcHJvZHVjdDtcclxuICBjb25zdCB7IGRlc2NyaXB0aW9uLCBoYXJkaW5lc3MsIHNoYXBlLCB0YXN0ZSB9ID0gYXR0cmlidXRlcztcclxuICBjb25zb2xlLmxvZyhwcm9kdWN0LmF0dHJpYnV0ZXMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbj1cImNlbnRlclwiIGdhcD1cIjJyZW1cIj5cclxuICAgICAgPEZsZXggYm9yZGVyV2lkdGg9XCIxcHhcIj5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gLz5cclxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwiY29sdW1uXCIgZGl2aWRlcj17PERpdmlkZXIgLz59IHA9XCIxcmVtXCIgZ2FwPVwiMXJlbVwiPlxyXG4gICAgICAgICAgPEhlYWRpbmc+e25hbWV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHQ+e3ByaWNlfTwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0PiBTS1U6IHtza3V9PC9UZXh0PlxyXG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiPlxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHA9XCIxLjVyZW1cIlxyXG4gICAgICAgICAgICAgIGxlZnRJY29uPXs8VGlTaG9wcGluZ0NhcnQgLz59XHJcbiAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJwaW5rXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwic29saWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkIHRvIENhcnRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAgPFN0YWNrIHA9XCIxcmVtXCIgbWF4Vz1cIjgwJVwiIGJvcmRlcldpZHRoPVwiMXB4XCIgZGl2aWRlcj17PERpdmlkZXIgLz59PlxyXG4gICAgICAgIDxIZWFkaW5nIHNpemU9XCJtZFwiPkFib3V0IHRoaXMgQXZvY2FkbzwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dD57ZGVzY3JpcHRpb259PC9UZXh0PlxyXG4gICAgICA8L1N0YWNrPlxyXG4gICAgICA8VGFibGUgdmFyaWFudD1cInNpbXBsZVwiPlxyXG4gICAgICAgIDxUaGVhZD5cclxuICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgPFRoPkF0dHJpYnV0ZXM8L1RoPlxyXG4gICAgICAgICAgPC9Ucj5cclxuICAgICAgICA8L1RoZWFkPlxyXG4gICAgICAgIDxUYm9keT5cclxuICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgPFRkPnNoYXBlPC9UZD5cclxuICAgICAgICAgICAgPFRkPntzaGFwZX08L1RkPlxyXG4gICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgPFRkPntzaGFwZX08L1RkPlxyXG4gICAgICAgICAgICA8VGQ+e2hhcmRpbmVzc308L1RkPlxyXG4gICAgICAgICAgICA8VGQ+e3Rhc3RlfTwvVGQ+XHJcbiAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICA8VGQ+e3NoYXBlfTwvVGQ+XHJcbiAgICAgICAgICAgIDxUZD57aGFyZGluZXNzfTwvVGQ+XHJcbiAgICAgICAgICAgIDxUZD57dGFzdGV9PC9UZD5cclxuICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgPC9UYm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U3VtbWFyeTtcclxuIl0sIm5hbWVzIjpbIkZsZXgiLCJIZWFkaW5nIiwiSW1hZ2UiLCJUZXh0IiwiSW5wdXQiLCJCdXR0b24iLCJEaXZpZGVyIiwiU3RhY2siLCJUYWJsZSIsIlRoZWFkIiwiVGJvZHkiLCJUciIsIlRoIiwiVGQiLCJUaVNob3BwaW5nQ2FydCIsIlByb2R1Y3RTdW1tYXJ5IiwicHJvZHVjdCIsIm5hbWUiLCJza3UiLCJwcmljZSIsImltYWdlIiwiYXR0cmlidXRlcyIsImRlc2NyaXB0aW9uIiwiaGFyZGluZXNzIiwic2hhcGUiLCJ0YXN0ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXJlY3Rpb24iLCJhbGlnbiIsImdhcCIsImJvcmRlcldpZHRoIiwic3JjIiwiZGl2aWRlciIsInAiLCJ0eXBlIiwiZm9udFdlaWdodCIsImxlZnRJY29uIiwiY29sb3JTY2hlbWUiLCJ2YXJpYW50IiwibWF4VyIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductSummary/index.tsx\n");

/***/ })

});