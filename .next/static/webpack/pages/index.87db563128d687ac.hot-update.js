"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/connectorCards/MetaMaskHook.js":
/*!***************************************************!*\
  !*** ./components/connectorCards/MetaMaskHook.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useMetaMaskCard\": function() { return /* binding */ useMetaMaskCard; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../connectors/metaMask */ \"./connectors/metaMask.ts\");\nvar _s = $RefreshSig$();\n\n\nvar useChainId = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useChainId, useAccounts = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useAccounts, useIsActivating = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useIsActivating, useIsActive = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useIsActive, useProvider = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useProvider, useENSNames = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useENSNames;\nvar useMetaMaskCard = function() {\n    _s();\n    var chainId = useChainId();\n    var accounts = useAccounts();\n    var isActivating = useIsActivating();\n    var isActive = useIsActive();\n    var provider = useProvider();\n    var ENSNames = useENSNames(provider);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined), error = ref[0], setError = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        void _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.metaMask.connectEagerly().catch(function() {\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    return {\n        connector: _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.metaMask,\n        activeChainId: chainId,\n        isActivating: isActivating,\n        isActive: isActive,\n        error: error,\n        setError: setError,\n        accounts: accounts,\n        provider: provider,\n        ENSNames: ENSNames\n    };\n};\n_s(useMetaMaskCard, \"yu0RriamKj5PwK6bkNB5s2GmAHw=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActivating,\n        useIsActive,\n        useProvider,\n        useENSNames\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nvbm5lY3RvckNhcmRzL01ldGFNYXNrSG9vay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBNEM7QUFDZ0I7QUFDNUQsSUFDRUksVUFBVSxHQU1SRixrRUFOUSxFQUNWRyxXQUFXLEdBS1RILG1FQUxTLEVBQ1hJLGVBQWUsR0FJYkosdUVBSmEsRUFDZkssV0FBVyxHQUdUTCxtRUFIUyxFQUNYTSxXQUFXLEdBRVROLG1FQUZTLEVBQ1hPLFdBQVcsR0FDVFAsbUVBRFM7QUFHTixJQUFNUSxlQUFlLEdBQUcsV0FBTTs7SUFDbkMsSUFBTUMsT0FBTyxHQUFHUCxVQUFVLEVBQUU7SUFDNUIsSUFBTVEsUUFBUSxHQUFHUCxXQUFXLEVBQUU7SUFDOUIsSUFBTVEsWUFBWSxHQUFHUCxlQUFlLEVBQUU7SUFDdEMsSUFBTVEsUUFBUSxHQUFHUCxXQUFXLEVBQUU7SUFDOUIsSUFBTVEsUUFBUSxHQUFHUCxXQUFXLEVBQUU7SUFDOUIsSUFBTVEsUUFBUSxHQUFHUCxXQUFXLENBQUNNLFFBQVEsQ0FBQztJQUN0QyxJQUEwQmQsR0FBbUIsR0FBbkJBLCtDQUFRLENBQUNnQixTQUFTLENBQUMsRUFBdENDLEtBQUssR0FBY2pCLEdBQW1CLEdBQWpDLEVBQUVrQixRQUFRLEdBQUlsQixHQUFtQixHQUF2QjtJQUV0QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsS0FBS0cseUVBQXVCLEVBQUUsQ0FBQ2tCLEtBQUssQ0FBQyxXQUFNO1lBQ3pDQyxPQUFPLENBQUNDLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTztRQUNMQyxTQUFTLEVBQUVyQiwwREFBUTtRQUNuQnNCLGFBQWEsRUFBRWQsT0FBTztRQUN0QkUsWUFBWSxFQUFaQSxZQUFZO1FBQ1pDLFFBQVEsRUFBUkEsUUFBUTtRQUNSSSxLQUFLLEVBQUxBLEtBQUs7UUFDTEMsUUFBUSxFQUFSQSxRQUFRO1FBQ1JQLFFBQVEsRUFBUkEsUUFBUTtRQUNSRyxRQUFRLEVBQVJBLFFBQVE7UUFDUkMsUUFBUSxFQUFSQSxRQUFRO0tBQ1QsQ0FBQztBQUNKLENBQUMsQ0FBQztHQTFCV04sZUFBZTs7UUFDVk4sVUFBVTtRQUNUQyxXQUFXO1FBQ1BDLGVBQWU7UUFDbkJDLFdBQVc7UUFDWEMsV0FBVztRQUNYQyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29ubmVjdG9yQ2FyZHMvTWV0YU1hc2tIb29rLmpzPzRlMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBob29rcywgbWV0YU1hc2sgfSBmcm9tIFwiLi4vLi4vY29ubmVjdG9ycy9tZXRhTWFza1wiO1xyXG5jb25zdCB7XHJcbiAgdXNlQ2hhaW5JZCxcclxuICB1c2VBY2NvdW50cyxcclxuICB1c2VJc0FjdGl2YXRpbmcsXHJcbiAgdXNlSXNBY3RpdmUsXHJcbiAgdXNlUHJvdmlkZXIsXHJcbiAgdXNlRU5TTmFtZXMsXHJcbn0gPSBob29rcztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VNZXRhTWFza0NhcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2hhaW5JZCA9IHVzZUNoYWluSWQoKTtcclxuICBjb25zdCBhY2NvdW50cyA9IHVzZUFjY291bnRzKCk7XHJcbiAgY29uc3QgaXNBY3RpdmF0aW5nID0gdXNlSXNBY3RpdmF0aW5nKCk7XHJcbiAgY29uc3QgaXNBY3RpdmUgPSB1c2VJc0FjdGl2ZSgpO1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gdXNlUHJvdmlkZXIoKTtcclxuICBjb25zdCBFTlNOYW1lcyA9IHVzZUVOU05hbWVzKHByb3ZpZGVyKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2b2lkIG1ldGFNYXNrLmNvbm5lY3RFYWdlcmx5KCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKFwiRmFpbGVkIHRvIGNvbm5lY3QgZWFnZXJseSB0byBtZXRhbWFza1wiKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbm5lY3RvcjogbWV0YU1hc2ssXHJcbiAgICBhY3RpdmVDaGFpbklkOiBjaGFpbklkLFxyXG4gICAgaXNBY3RpdmF0aW5nLFxyXG4gICAgaXNBY3RpdmUsXHJcbiAgICBlcnJvcixcclxuICAgIHNldEVycm9yLFxyXG4gICAgYWNjb3VudHMsXHJcbiAgICBwcm92aWRlcixcclxuICAgIEVOU05hbWVzLFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImhvb2tzIiwibWV0YU1hc2siLCJ1c2VDaGFpbklkIiwidXNlQWNjb3VudHMiLCJ1c2VJc0FjdGl2YXRpbmciLCJ1c2VJc0FjdGl2ZSIsInVzZVByb3ZpZGVyIiwidXNlRU5TTmFtZXMiLCJ1c2VNZXRhTWFza0NhcmQiLCJjaGFpbklkIiwiYWNjb3VudHMiLCJpc0FjdGl2YXRpbmciLCJpc0FjdGl2ZSIsInByb3ZpZGVyIiwiRU5TTmFtZXMiLCJ1bmRlZmluZWQiLCJlcnJvciIsInNldEVycm9yIiwiY29ubmVjdEVhZ2VybHkiLCJjYXRjaCIsImNvbnNvbGUiLCJkZWJ1ZyIsImNvbm5lY3RvciIsImFjdGl2ZUNoYWluSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/connectorCards/MetaMaskHook.js\n"));

/***/ })

});