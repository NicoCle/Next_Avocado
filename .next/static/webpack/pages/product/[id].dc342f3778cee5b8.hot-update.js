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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ti */ \"./node_modules/react-icons/ti/index.esm.js\");\n\n\n\nvar _this = undefined;\nvar ProductSummary = function(param) {\n    var product = param.product;\n    var name = product.name, sku = product.sku, price = product.price, image = product.image, attributes = product.attributes;\n    var description = attributes.description, hardiness = attributes.hardiness, shape = attributes.shape, taste = attributes.taste;\n    console.log(product.attributes);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        direction: \"column\",\n        align: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                borderWidth: \"1px\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: image\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                        direction: \"column\",\n                        divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, void 0, void 0),\n                        p: \"1rem\",\n                        gap: \"1rem\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                children: price\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                children: [\n                                    \" SKU: \",\n                                    sku\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                                direction: \"row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                                        type: \"number\",\n                                        fontWeight: \"bold\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        p: \"1.5rem\",\n                                        leftIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_2__.TiShoppingCart, {}, void 0, false, void 0, void 0),\n                                        colorScheme: \"pink\",\n                                        variant: \"solid\",\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                maxW: \"6rem\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                        size: \"md\",\n                        children: \"About this Avocado\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nico\\\\repostres\\\\platzi\\\\next_avocado\\\\src\\\\components\\\\ProductSummary\\\\index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this));\n};\n_c = ProductSummary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductSummary);\nvar _c;\n$RefreshReg$(_c, \"ProductSummary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBVXlCO0FBQ3NCOztBQU0vQyxHQUFLLENBQUNVLGNBQWMsR0FBRyxRQUFRLFFBQStCLENBQUM7UUFBckNDLE9BQU8sU0FBUEEsT0FBTztJQUMvQixHQUFLLENBQUdDLElBQUksR0FBb0NELE9BQU8sQ0FBL0NDLElBQUksRUFBRUMsR0FBRyxHQUErQkYsT0FBTyxDQUF6Q0UsR0FBRyxFQUFFQyxLQUFLLEdBQXdCSCxPQUFPLENBQXBDRyxLQUFLLEVBQUVDLEtBQUssR0FBaUJKLE9BQU8sQ0FBN0JJLEtBQUssRUFBRUMsVUFBVSxHQUFLTCxPQUFPLENBQXRCSyxVQUFVO0lBQzNDLEdBQUssQ0FBR0MsV0FBVyxHQUE4QkQsVUFBVSxDQUFuREMsV0FBVyxFQUFFQyxTQUFTLEdBQW1CRixVQUFVLENBQXRDRSxTQUFTLEVBQUVDLEtBQUssR0FBWUgsVUFBVSxDQUEzQkcsS0FBSyxFQUFFQyxLQUFLLEdBQUtKLFVBQVUsQ0FBcEJJLEtBQUs7SUFDNUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxPQUFPLENBQUNLLFVBQVU7SUFDOUIsTUFBTSw2RUFDSGhCLGtEQUFJO1FBQUN1QixTQUFTLEVBQUMsQ0FBUTtRQUFDQyxLQUFLLEVBQUMsQ0FBUTs7d0ZBQ3BDeEIsa0RBQUk7Z0JBQUN5QixXQUFXLEVBQUMsQ0FBSzs7Z0dBQ3BCdkIsbURBQUs7d0JBQUN3QixHQUFHLEVBQUVYLEtBQUs7Ozs7OztnR0FDaEJSLG1EQUFLO3dCQUFDZ0IsU0FBUyxFQUFDLENBQVE7d0JBQUNJLE9BQU8sOEVBQUdyQixxREFBTzt3QkFBS3NCLENBQUMsRUFBQyxDQUFNO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTs7d0dBQ2hFNUIscURBQU87MENBQUVXLElBQUk7Ozs7Ozt3R0FDYlQsa0RBQUk7MENBQUVXLEtBQUs7Ozs7Ozt3R0FDWFgsa0RBQUk7O29DQUFDLENBQU07b0NBQUNVLEdBQUc7Ozs7Ozs7d0dBQ2ZOLG1EQUFLO2dDQUFDZ0IsU0FBUyxFQUFDLENBQUs7O2dIQUNuQm5CLG1EQUFLO3dDQUFDMEIsSUFBSSxFQUFDLENBQVE7d0NBQUNDLFVBQVUsRUFBQyxDQUFNOzs7Ozs7Z0hBQ3JDMUIsb0RBQU07d0NBQ0x1QixDQUFDLEVBQUMsQ0FBUTt3Q0FDVkksUUFBUSw4RUFBR3ZCLDBEQUFjO3dDQUN6QndCLFdBQVcsRUFBQyxDQUFNO3dDQUNsQkMsT0FBTyxFQUFDLENBQU87a0RBQ2hCLENBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJTDFCLGlEQUFHO2dCQUFDMkIsSUFBSSxFQUFDLENBQU07O2dHQUNibEMscURBQU87d0JBQUNtQyxJQUFJLEVBQUMsQ0FBSTtrQ0FBQyxDQUFrQjs7Ozs7O2dHQUNwQ2pDLGtEQUFJO2tDQUFFYyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUIsQ0FBQztLQS9CS1AsY0FBYztBQWdDcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0U3VtbWFyeS9pbmRleC50c3g/NDNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZsZXgsXHJcbiAgSGVhZGluZyxcclxuICBJbWFnZSxcclxuICBUZXh0LFxyXG4gIElucHV0LFxyXG4gIEJ1dHRvbixcclxuICBEaXZpZGVyLFxyXG4gIFN0YWNrLFxyXG4gIEJveCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBUaVNob3BwaW5nQ2FydCB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xyXG5cclxudHlwZSBJUHJvZHVjdFN1bW1hcnlQcm9wcyA9IHtcclxuICBwcm9kdWN0OiBUUHJvZHVjdDtcclxufTtcclxuXHJcbmNvbnN0IFByb2R1Y3RTdW1tYXJ5ID0gKHsgcHJvZHVjdCB9OiBJUHJvZHVjdFN1bW1hcnlQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgc2t1LCBwcmljZSwgaW1hZ2UsIGF0dHJpYnV0ZXMgfSA9IHByb2R1Y3Q7XHJcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgaGFyZGluZXNzLCBzaGFwZSwgdGFzdGUgfSA9IGF0dHJpYnV0ZXM7XHJcbiAgY29uc29sZS5sb2cocHJvZHVjdC5hdHRyaWJ1dGVzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgPEZsZXggYm9yZGVyV2lkdGg9XCIxcHhcIj5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gLz5cclxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwiY29sdW1uXCIgZGl2aWRlcj17PERpdmlkZXIgLz59IHA9XCIxcmVtXCIgZ2FwPVwiMXJlbVwiPlxyXG4gICAgICAgICAgPEhlYWRpbmc+e25hbWV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHQ+e3ByaWNlfTwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0PiBTS1U6IHtza3V9PC9UZXh0PlxyXG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiPlxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHA9XCIxLjVyZW1cIlxyXG4gICAgICAgICAgICAgIGxlZnRJY29uPXs8VGlTaG9wcGluZ0NhcnQgLz59XHJcbiAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJwaW5rXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwic29saWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkIHRvIENhcnRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICAgPEJveCBtYXhXPVwiNnJlbVwiPlxyXG4gICAgICAgIDxIZWFkaW5nIHNpemU9XCJtZFwiPkFib3V0IHRoaXMgQXZvY2FkbzwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dD57ZGVzY3JpcHRpb259PC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U3VtbWFyeTtcclxuIl0sIm5hbWVzIjpbIkZsZXgiLCJIZWFkaW5nIiwiSW1hZ2UiLCJUZXh0IiwiSW5wdXQiLCJCdXR0b24iLCJEaXZpZGVyIiwiU3RhY2siLCJCb3giLCJUaVNob3BwaW5nQ2FydCIsIlByb2R1Y3RTdW1tYXJ5IiwicHJvZHVjdCIsIm5hbWUiLCJza3UiLCJwcmljZSIsImltYWdlIiwiYXR0cmlidXRlcyIsImRlc2NyaXB0aW9uIiwiaGFyZGluZXNzIiwic2hhcGUiLCJ0YXN0ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXJlY3Rpb24iLCJhbGlnbiIsImJvcmRlcldpZHRoIiwic3JjIiwiZGl2aWRlciIsInAiLCJnYXAiLCJ0eXBlIiwiZm9udFdlaWdodCIsImxlZnRJY29uIiwiY29sb3JTY2hlbWUiLCJ2YXJpYW50IiwibWF4VyIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductSummary/index.tsx\n");

/***/ })

});