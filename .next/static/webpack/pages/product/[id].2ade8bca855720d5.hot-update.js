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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ti */ \"./node_modules/react-icons/ti/index.esm.js\");\n\n\n\nvar _this = undefined;\nvar ProductSummary = function(param) {\n    var product = param.product;\n    var name = product.name, sku = product.sku, price = product.price, image = product.image, attributes = product.attributes;\n    var description = attributes.description, hardiness = attributes.hardiness, shape = attributes.shape, taste = attributes.taste;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        direction: \"column\",\n        align: \"center\",\n        gap: \"2rem\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                borderWidth: \"1px\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: image\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                        direction: \"column\",\n                        divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, void 0, void 0),\n                        p: \"1rem\",\n                        gap: \"1rem\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                children: price\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                children: [\n                                    \" SKU: \",\n                                    sku\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                                direction: \"row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                                        type: \"number\",\n                                        fontWeight: \"bold\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        p: \"1.5rem\",\n                                        leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__.TiShoppingCart, {}, void 0, false, void 0, void 0),\n                                        colorScheme: \"pink\",\n                                        variant: \"solid\",\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                p: \"1rem\",\n                maxW: \"80%\",\n                borderWidth: \"1px\",\n                divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, void 0, void 0),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                        size: \"md\",\n                        children: \"About this Avocado\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table, {\n                variant: \"simple\",\n                w: \"80%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Thead, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {\n                                children: \"Attributes\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tbody, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: \"Shape\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: shape\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: \"Hardiness\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: hardiness\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: \"Taste\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                        children: taste\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this));\n};\n_c = ProductSummary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductSummary);\nvar _c;\n$RefreshReg$(_c, \"ProductSummary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBZXlCO0FBQ3NCOztBQU0vQyxHQUFLLENBQUNlLGNBQWMsR0FBRyxRQUFRLFFBQStCLENBQUM7UUFBckNDLE9BQU8sU0FBUEEsT0FBTztJQUMvQixHQUFLLENBQUdDLElBQUksR0FBb0NELE9BQU8sQ0FBL0NDLElBQUksRUFBRUMsR0FBRyxHQUErQkYsT0FBTyxDQUF6Q0UsR0FBRyxFQUFFQyxLQUFLLEdBQXdCSCxPQUFPLENBQXBDRyxLQUFLLEVBQUVDLEtBQUssR0FBaUJKLE9BQU8sQ0FBN0JJLEtBQUssRUFBRUMsVUFBVSxHQUFLTCxPQUFPLENBQXRCSyxVQUFVO0lBQzNDLEdBQUssQ0FBR0MsV0FBVyxHQUE4QkQsVUFBVSxDQUFuREMsV0FBVyxFQUFFQyxTQUFTLEdBQW1CRixVQUFVLENBQXRDRSxTQUFTLEVBQUVDLEtBQUssR0FBWUgsVUFBVSxDQUEzQkcsS0FBSyxFQUFFQyxLQUFLLEdBQUtKLFVBQVUsQ0FBcEJJLEtBQUs7SUFFNUMsTUFBTSw2RUFDSHpCLGtEQUFJO1FBQUMwQixTQUFTLEVBQUMsQ0FBUTtRQUFDQyxLQUFLLEVBQUMsQ0FBUTtRQUFDQyxHQUFHLEVBQUMsQ0FBTTs7d0ZBQy9DNUIsa0RBQUk7Z0JBQUM2QixXQUFXLEVBQUMsQ0FBSzs7Z0dBQ3BCM0IsbURBQUs7d0JBQUM0QixHQUFHLEVBQUVWLEtBQUs7Ozs7OztnR0FDaEJiLG1EQUFLO3dCQUFDbUIsU0FBUyxFQUFDLENBQVE7d0JBQUNLLE9BQU8sOEVBQUd6QixxREFBTzt3QkFBSzBCLENBQUMsRUFBQyxDQUFNO3dCQUFDSixHQUFHLEVBQUMsQ0FBTTs7d0dBQ2hFM0IscURBQU87MENBQUVnQixJQUFJOzs7Ozs7d0dBQ2JkLGtEQUFJOzBDQUFFZ0IsS0FBSzs7Ozs7O3dHQUNYaEIsa0RBQUk7O29DQUFDLENBQU07b0NBQUNlLEdBQUc7Ozs7Ozs7d0dBQ2ZYLG1EQUFLO2dDQUFDbUIsU0FBUyxFQUFDLENBQUs7O2dIQUNuQnRCLG1EQUFLO3dDQUFDNkIsSUFBSSxFQUFDLENBQVE7d0NBQUNDLFVBQVUsRUFBQyxDQUFNOzs7Ozs7Z0hBQ3JDN0Isb0RBQU07d0NBQ0wyQixDQUFDLEVBQUMsQ0FBUTt3Q0FDVkcsUUFBUSw4RUFBR3JCLDBEQUFjO3dDQUN6QnNCLFdBQVcsRUFBQyxDQUFNO3dDQUNsQkMsT0FBTyxFQUFDLENBQU87a0RBQ2hCLENBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJTDlCLG1EQUFLO2dCQUFDeUIsQ0FBQyxFQUFDLENBQU07Z0JBQUNNLElBQUksRUFBQyxDQUFLO2dCQUFDVCxXQUFXLEVBQUMsQ0FBSztnQkFBQ0UsT0FBTyw4RUFBR3pCLHFEQUFPOztnR0FDM0RMLHFEQUFPO3dCQUFDc0MsSUFBSSxFQUFDLENBQUk7a0NBQUMsQ0FBa0I7Ozs7OztnR0FDcENwQyxrREFBSTtrQ0FBRW1CLFdBQVc7Ozs7Ozs7Ozs7Ozt3RkFFbkJkLG1EQUFLO2dCQUFDNkIsT0FBTyxFQUFDLENBQVE7Z0JBQUNHLENBQUMsRUFBQyxDQUFLOztnR0FDNUIvQixtREFBSzs4R0FDSEUsZ0RBQUU7a0hBQ0FDLGdEQUFFOzBDQUFDLENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBR2pCRixtREFBSzs7d0dBQ0hDLGdEQUFFOztnSEFDQUUsZ0RBQUU7a0RBQUMsQ0FBSzs7Ozs7O2dIQUNSQSxnREFBRTtrREFBRVcsS0FBSzs7Ozs7Ozs7Ozs7O3dHQUVYYixnREFBRTs7Z0hBQ0FFLGdEQUFFO2tEQUFDLENBQVM7Ozs7OztnSEFDWkEsZ0RBQUU7a0RBQUVVLFNBQVM7Ozs7Ozs7Ozs7Ozt3R0FFZlosZ0RBQUU7O2dIQUNBRSxnREFBRTtrREFBQyxDQUFLOzs7Ozs7Z0hBQ1JBLGdEQUFFO2tEQUFFWSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEIsQ0FBQztLQXBES1YsY0FBYztBQXFEcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9pbmRleC50c3g/NDNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZsZXgsXHJcbiAgSGVhZGluZyxcclxuICBJbWFnZSxcclxuICBUZXh0LFxyXG4gIElucHV0LFxyXG4gIEJ1dHRvbixcclxuICBEaXZpZGVyLFxyXG4gIFN0YWNrLFxyXG4gIFRhYmxlLFxyXG4gIFRoZWFkLFxyXG4gIFRib2R5LFxyXG4gIFRyLFxyXG4gIFRoLFxyXG4gIFRkLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IFRpU2hvcHBpbmdDYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XHJcblxyXG50eXBlIElQcm9kdWN0U3VtbWFyeVByb3BzID0ge1xyXG4gIHByb2R1Y3Q6IFRQcm9kdWN0O1xyXG59O1xyXG5cclxuY29uc3QgUHJvZHVjdFN1bW1hcnkgPSAoeyBwcm9kdWN0IH06IElQcm9kdWN0U3VtbWFyeVByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCBza3UsIHByaWNlLCBpbWFnZSwgYXR0cmlidXRlcyB9ID0gcHJvZHVjdDtcclxuICBjb25zdCB7IGRlc2NyaXB0aW9uLCBoYXJkaW5lc3MsIHNoYXBlLCB0YXN0ZSB9ID0gYXR0cmlidXRlcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduPVwiY2VudGVyXCIgZ2FwPVwiMnJlbVwiPlxyXG4gICAgICA8RmxleCBib3JkZXJXaWR0aD1cIjFweFwiPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSAvPlxyXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJjb2x1bW5cIiBkaXZpZGVyPXs8RGl2aWRlciAvPn0gcD1cIjFyZW1cIiBnYXA9XCIxcmVtXCI+XHJcbiAgICAgICAgICA8SGVhZGluZz57bmFtZX08L0hlYWRpbmc+XHJcbiAgICAgICAgICA8VGV4dD57cHJpY2V9PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+IFNLVToge3NrdX08L1RleHQ+XHJcbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgZm9udFdlaWdodD1cImJvbGRcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgcD1cIjEuNXJlbVwiXHJcbiAgICAgICAgICAgICAgbGVmdEljb249ezxUaVNob3BwaW5nQ2FydCAvPn1cclxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cInBpbmtcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9TdGFjaz5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICA8U3RhY2sgcD1cIjFyZW1cIiBtYXhXPVwiODAlXCIgYm9yZGVyV2lkdGg9XCIxcHhcIiBkaXZpZGVyPXs8RGl2aWRlciAvPn0+XHJcbiAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCI+QWJvdXQgdGhpcyBBdm9jYWRvPC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0PntkZXNjcmlwdGlvbn08L1RleHQ+XHJcbiAgICAgIDwvU3RhY2s+XHJcbiAgICAgIDxUYWJsZSB2YXJpYW50PVwic2ltcGxlXCIgdz1cIjgwJVwiPlxyXG4gICAgICAgIDxUaGVhZD5cclxuICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgPFRoPkF0dHJpYnV0ZXM8L1RoPlxyXG4gICAgICAgICAgPC9Ucj5cclxuICAgICAgICA8L1RoZWFkPlxyXG4gICAgICAgIDxUYm9keT5cclxuICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgPFRkPlNoYXBlPC9UZD5cclxuICAgICAgICAgICAgPFRkPntzaGFwZX08L1RkPlxyXG4gICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgPFRkPkhhcmRpbmVzczwvVGQ+XHJcbiAgICAgICAgICAgIDxUZD57aGFyZGluZXNzfTwvVGQ+XHJcbiAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICA8VGQ+VGFzdGU8L1RkPlxyXG4gICAgICAgICAgICA8VGQ+e3Rhc3RlfTwvVGQ+XHJcbiAgICAgICAgICA8L1RyPlxyXG4gICAgICAgIDwvVGJvZHk+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFN1bW1hcnk7XHJcbiJdLCJuYW1lcyI6WyJGbGV4IiwiSGVhZGluZyIsIkltYWdlIiwiVGV4dCIsIklucHV0IiwiQnV0dG9uIiwiRGl2aWRlciIsIlN0YWNrIiwiVGFibGUiLCJUaGVhZCIsIlRib2R5IiwiVHIiLCJUaCIsIlRkIiwiVGlTaG9wcGluZ0NhcnQiLCJQcm9kdWN0U3VtbWFyeSIsInByb2R1Y3QiLCJuYW1lIiwic2t1IiwicHJpY2UiLCJpbWFnZSIsImF0dHJpYnV0ZXMiLCJkZXNjcmlwdGlvbiIsImhhcmRpbmVzcyIsInNoYXBlIiwidGFzdGUiLCJkaXJlY3Rpb24iLCJhbGlnbiIsImdhcCIsImJvcmRlcldpZHRoIiwic3JjIiwiZGl2aWRlciIsInAiLCJ0eXBlIiwiZm9udFdlaWdodCIsImxlZnRJY29uIiwiY29sb3JTY2hlbWUiLCJ2YXJpYW50IiwibWF4VyIsInNpemUiLCJ3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductSummary/index.tsx\n");

/***/ })

});