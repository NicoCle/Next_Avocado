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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ti */ \"./node_modules/react-icons/ti/index.esm.js\");\n\n\n\nvar _this = undefined;\nvar ProductSummary = function(param) {\n    var product = param.product;\n    var name = product.name, sku = product.sku, price = product.price, image = product.image, attributes = product.attributes;\n    var description = attributes.description, hardiness = attributes.hardiness, shape = attributes.shape, taste = attributes.taste;\n    console.log(product.attributes);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        direction: \"column\",\n        align: \"center\",\n        gap: \"2rem\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                borderWidth: \"1px\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: image\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                        direction: \"column\",\n                        divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, void 0, void 0),\n                        p: \"1rem\",\n                        gap: \"1rem\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                children: price\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                children: [\n                                    \" SKU: \",\n                                    sku\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                                direction: \"row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                                        type: \"number\",\n                                        fontWeight: \"bold\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        p: \"1.5rem\",\n                                        leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__.TiShoppingCart, {}, void 0, false, void 0, void 0),\n                                        colorScheme: \"pink\",\n                                        variant: \"solid\",\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                p: \"1rem\",\n                maxW: \"80%\",\n                borderWidth: \"1px\",\n                divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, void 0, void 0),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                        size: \"md\",\n                        children: \"About this Avocado\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table, {\n                variant: \"simple\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Thead, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {\n                                children: \"Attributes\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tbody, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: \"Shape\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: shape\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: \"Hardiness\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: hardiness\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: \"Taste\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: hardiness\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this));\n};\n_c = ProductSummary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductSummary);\nvar _c;\n$RefreshReg$(_c, \"ProductSummary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBaUJ5QjtBQUNzQjs7QUFNL0MsR0FBSyxDQUFDZSxjQUFjLEdBQUcsUUFBUSxRQUErQixDQUFDO1FBQXJDQyxPQUFPLFNBQVBBLE9BQU87SUFDL0IsR0FBSyxDQUFHQyxJQUFJLEdBQW9DRCxPQUFPLENBQS9DQyxJQUFJLEVBQUVDLEdBQUcsR0FBK0JGLE9BQU8sQ0FBekNFLEdBQUcsRUFBRUMsS0FBSyxHQUF3QkgsT0FBTyxDQUFwQ0csS0FBSyxFQUFFQyxLQUFLLEdBQWlCSixPQUFPLENBQTdCSSxLQUFLLEVBQUVDLFVBQVUsR0FBS0wsT0FBTyxDQUF0QkssVUFBVTtJQUMzQyxHQUFLLENBQUdDLFdBQVcsR0FBOEJELFVBQVUsQ0FBbkRDLFdBQVcsRUFBRUMsU0FBUyxHQUFtQkYsVUFBVSxDQUF0Q0UsU0FBUyxFQUFFQyxLQUFLLEdBQVlILFVBQVUsQ0FBM0JHLEtBQUssRUFBRUMsS0FBSyxHQUFLSixVQUFVLENBQXBCSSxLQUFLO0lBQzVDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsT0FBTyxDQUFDSyxVQUFVO0lBQzlCLE1BQU0sNkVBQ0hyQixrREFBSTtRQUFDNEIsU0FBUyxFQUFDLENBQVE7UUFBQ0MsS0FBSyxFQUFDLENBQVE7UUFBQ0MsR0FBRyxFQUFDLENBQU07O3dGQUMvQzlCLGtEQUFJO2dCQUFDK0IsV0FBVyxFQUFDLENBQUs7O2dHQUNwQjdCLG1EQUFLO3dCQUFDOEIsR0FBRyxFQUFFWixLQUFLOzs7Ozs7Z0dBQ2hCYixtREFBSzt3QkFBQ3FCLFNBQVMsRUFBQyxDQUFRO3dCQUFDSyxPQUFPLDhFQUFHM0IscURBQU87d0JBQUs0QixDQUFDLEVBQUMsQ0FBTTt3QkFBQ0osR0FBRyxFQUFDLENBQU07O3dHQUNoRTdCLHFEQUFPOzBDQUFFZ0IsSUFBSTs7Ozs7O3dHQUNiZCxrREFBSTswQ0FBRWdCLEtBQUs7Ozs7Ozt3R0FDWGhCLGtEQUFJOztvQ0FBQyxDQUFNO29DQUFDZSxHQUFHOzs7Ozs7O3dHQUNmWCxtREFBSztnQ0FBQ3FCLFNBQVMsRUFBQyxDQUFLOztnSEFDbkJ4QixtREFBSzt3Q0FBQytCLElBQUksRUFBQyxDQUFRO3dDQUFDQyxVQUFVLEVBQUMsQ0FBTTs7Ozs7O2dIQUNyQy9CLG9EQUFNO3dDQUNMNkIsQ0FBQyxFQUFDLENBQVE7d0NBQ1ZHLFFBQVEsOEVBQUd2QiwwREFBYzt3Q0FDekJ3QixXQUFXLEVBQUMsQ0FBTTt3Q0FDbEJDLE9BQU8sRUFBQyxDQUFPO2tEQUNoQixDQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSUxoQyxtREFBSztnQkFBQzJCLENBQUMsRUFBQyxDQUFNO2dCQUFDTSxJQUFJLEVBQUMsQ0FBSztnQkFBQ1QsV0FBVyxFQUFDLENBQUs7Z0JBQUNFLE9BQU8sOEVBQUczQixxREFBTzs7Z0dBQzNETCxxREFBTzt3QkFBQ3dDLElBQUksRUFBQyxDQUFJO2tDQUFDLENBQWtCOzs7Ozs7Z0dBQ3BDdEMsa0RBQUk7a0NBQUVtQixXQUFXOzs7Ozs7Ozs7Ozs7d0ZBRW5CZCxtREFBSztnQkFBQytCLE9BQU8sRUFBQyxDQUFROztnR0FDcEI5QixtREFBSzs4R0FDSEUsZ0RBQUU7a0hBQ0FDLGdEQUFFOzBDQUFDLENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBR2pCRixtREFBSzs7d0dBQ0hDLGdEQUFFOztnSEFDQUUsZ0RBQUU7a0RBQUMsQ0FBSzs7Ozs7O2dIQUNSQSxnREFBRTtrREFBRVcsS0FBSzs7Ozs7Ozs7Ozs7O3dHQUVYYixnREFBRTs7Z0hBQ0FFLGdEQUFFO2tEQUFDLENBQVM7Ozs7OztnSEFDWkEsZ0RBQUU7a0RBQUVVLFNBQVM7Ozs7Ozs7Ozs7Ozt3R0FFZlosZ0RBQUU7O2dIQUNBRSxnREFBRTtrREFBQyxDQUFLOzs7Ozs7Z0hBQ1JBLGdEQUFFO2tEQUFFVSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUIsQ0FBQztLQXBES1IsY0FBYztBQXFEcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9pbmRleC50c3g/NDNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZsZXgsXHJcbiAgSGVhZGluZyxcclxuICBJbWFnZSxcclxuICBUZXh0LFxyXG4gIElucHV0LFxyXG4gIEJ1dHRvbixcclxuICBEaXZpZGVyLFxyXG4gIFN0YWNrLFxyXG4gIFRhYmxlLFxyXG4gIFRoZWFkLFxyXG4gIFRib2R5LFxyXG4gIFRmb290LFxyXG4gIFRyLFxyXG4gIFRoLFxyXG4gIFRkLFxyXG4gIFRhYmxlQ2FwdGlvbixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBUaVNob3BwaW5nQ2FydCB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xyXG5cclxudHlwZSBJUHJvZHVjdFN1bW1hcnlQcm9wcyA9IHtcclxuICBwcm9kdWN0OiBUUHJvZHVjdDtcclxufTtcclxuXHJcbmNvbnN0IFByb2R1Y3RTdW1tYXJ5ID0gKHsgcHJvZHVjdCB9OiBJUHJvZHVjdFN1bW1hcnlQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgc2t1LCBwcmljZSwgaW1hZ2UsIGF0dHJpYnV0ZXMgfSA9IHByb2R1Y3Q7XHJcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgaGFyZGluZXNzLCBzaGFwZSwgdGFzdGUgfSA9IGF0dHJpYnV0ZXM7XHJcbiAgY29uc29sZS5sb2cocHJvZHVjdC5hdHRyaWJ1dGVzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ249XCJjZW50ZXJcIiBnYXA9XCIycmVtXCI+XHJcbiAgICAgIDxGbGV4IGJvcmRlcldpZHRoPVwiMXB4XCI+XHJcbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IC8+XHJcbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cImNvbHVtblwiIGRpdmlkZXI9ezxEaXZpZGVyIC8+fSBwPVwiMXJlbVwiIGdhcD1cIjFyZW1cIj5cclxuICAgICAgICAgIDxIZWFkaW5nPntuYW1lfTwvSGVhZGluZz5cclxuICAgICAgICAgIDxUZXh0PntwcmljZX08L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dD4gU0tVOiB7c2t1fTwvVGV4dD5cclxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIj5cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJudW1iZXJcIiBmb250V2VpZ2h0PVwiYm9sZFwiIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBwPVwiMS41cmVtXCJcclxuICAgICAgICAgICAgICBsZWZ0SWNvbj17PFRpU2hvcHBpbmdDYXJ0IC8+fVxyXG4gICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwicGlua1wiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInNvbGlkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L1N0YWNrPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxTdGFjayBwPVwiMXJlbVwiIG1heFc9XCI4MCVcIiBib3JkZXJXaWR0aD1cIjFweFwiIGRpdmlkZXI9ezxEaXZpZGVyIC8+fT5cclxuICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIj5BYm91dCB0aGlzIEF2b2NhZG88L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQ+e2Rlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgPC9TdGFjaz5cclxuICAgICAgPFRhYmxlIHZhcmlhbnQ9XCJzaW1wbGVcIj5cclxuICAgICAgICA8VGhlYWQ+XHJcbiAgICAgICAgICA8VHI+XHJcbiAgICAgICAgICAgIDxUaD5BdHRyaWJ1dGVzPC9UaD5cclxuICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgPC9UaGVhZD5cclxuICAgICAgICA8VGJvZHk+XHJcbiAgICAgICAgICA8VHI+XHJcbiAgICAgICAgICAgIDxUZD5TaGFwZTwvVGQ+XHJcbiAgICAgICAgICAgIDxUZD57c2hhcGV9PC9UZD5cclxuICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgICA8VHI+XHJcbiAgICAgICAgICAgIDxUZD5IYXJkaW5lc3M8L1RkPlxyXG4gICAgICAgICAgICA8VGQ+e2hhcmRpbmVzc308L1RkPlxyXG4gICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgPFRkPlRhc3RlPC9UZD5cclxuICAgICAgICAgICAgPFRkPntoYXJkaW5lc3N9PC9UZD5cclxuICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgPC9UYm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U3VtbWFyeTtcclxuIl0sIm5hbWVzIjpbIkZsZXgiLCJIZWFkaW5nIiwiSW1hZ2UiLCJUZXh0IiwiSW5wdXQiLCJCdXR0b24iLCJEaXZpZGVyIiwiU3RhY2siLCJUYWJsZSIsIlRoZWFkIiwiVGJvZHkiLCJUciIsIlRoIiwiVGQiLCJUaVNob3BwaW5nQ2FydCIsIlByb2R1Y3RTdW1tYXJ5IiwicHJvZHVjdCIsIm5hbWUiLCJza3UiLCJwcmljZSIsImltYWdlIiwiYXR0cmlidXRlcyIsImRlc2NyaXB0aW9uIiwiaGFyZGluZXNzIiwic2hhcGUiLCJ0YXN0ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXJlY3Rpb24iLCJhbGlnbiIsImdhcCIsImJvcmRlcldpZHRoIiwic3JjIiwiZGl2aWRlciIsInAiLCJ0eXBlIiwiZm9udFdlaWdodCIsImxlZnRJY29uIiwiY29sb3JTY2hlbWUiLCJ2YXJpYW50IiwibWF4VyIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductSummary/index.tsx\n");

/***/ })

});