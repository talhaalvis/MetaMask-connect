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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useMetaMaskCard\": function() { return /* binding */ useMetaMaskCard; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../connectors/metaMask */ \"./connectors/metaMask.ts\");\nvar _s = $RefreshSig$();\n\n\nvar useChainId = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useChainId, useAccounts = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useAccounts, useIsActivating = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useIsActivating, useIsActive = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useIsActive, useProvider = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useProvider, useENSNames = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks.useENSNames;\nvar useMetaMaskCard = function() {\n    _s();\n    var chainId = useChainId();\n    var accounts = useAccounts();\n    var isActivating = useIsActivating();\n    var isActive = useIsActive();\n    var provider = useProvider();\n    var ENSNames = useENSNames(provider);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined), error = ref[0], setError = ref[1];\n    console.log({\n        hooks: _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.hooks,\n        metaMask: _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.metaMask\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        void _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.metaMask.connectEagerly().catch(function() {\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    return {\n        connector: _connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.metaMask,\n        activeChainId: chainId,\n        isActivating: isActivating,\n        isActive: isActive,\n        error: error,\n        setError: setError,\n        accounts: accounts,\n        provider: provider,\n        ENSNames: ENSNames\n    };\n};\n_s(useMetaMaskCard, \"yu0RriamKj5PwK6bkNB5s2GmAHw=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActivating,\n        useIsActive,\n        useProvider,\n        useENSNames\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nvbm5lY3RvckNhcmRzL01ldGFNYXNrSG9vay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBNEM7QUFDZ0I7QUFDNUQsSUFDRUksVUFBVSxHQU1SRixrRUFOUSxFQUNWRyxXQUFXLEdBS1RILG1FQUxTLEVBQ1hJLGVBQWUsR0FJYkosdUVBSmEsRUFDZkssV0FBVyxHQUdUTCxtRUFIUyxFQUNYTSxXQUFXLEdBRVROLG1FQUZTLEVBQ1hPLFdBQVcsR0FDVFAsbUVBRFM7QUFHTixJQUFNUSxlQUFlLEdBQUcsV0FBTTs7SUFDbkMsSUFBTUMsT0FBTyxHQUFHUCxVQUFVLEVBQUU7SUFDNUIsSUFBTVEsUUFBUSxHQUFHUCxXQUFXLEVBQUU7SUFDOUIsSUFBTVEsWUFBWSxHQUFHUCxlQUFlLEVBQUU7SUFDdEMsSUFBTVEsUUFBUSxHQUFHUCxXQUFXLEVBQUU7SUFDOUIsSUFBTVEsUUFBUSxHQUFHUCxXQUFXLEVBQUU7SUFDOUIsSUFBTVEsUUFBUSxHQUFHUCxXQUFXLENBQUNNLFFBQVEsQ0FBQztJQUN0QyxJQUEwQmQsR0FBbUIsR0FBbkJBLCtDQUFRLENBQUNnQixTQUFTLENBQUMsRUFBdENDLEtBQUssR0FBY2pCLEdBQW1CLEdBQWpDLEVBQUVrQixRQUFRLEdBQUlsQixHQUFtQixHQUF2QjtJQUV0Qm1CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQUVuQixLQUFLLEVBQUxBLHVEQUFLO1FBQUVDLFFBQVEsRUFBUkEsMERBQVE7S0FBRSxDQUFDLENBQUM7SUFFakNILGdEQUFTLENBQUMsV0FBTTtRQUNkLEtBQUtHLHlFQUF1QixFQUFFLENBQUNvQixLQUFLLENBQUMsV0FBTTtZQUN6Q0gsT0FBTyxDQUFDSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU87UUFDTEMsU0FBUyxFQUFFdEIsMERBQVE7UUFDbkJ1QixhQUFhLEVBQUVmLE9BQU87UUFDdEJFLFlBQVksRUFBWkEsWUFBWTtRQUNaQyxRQUFRLEVBQVJBLFFBQVE7UUFDUkksS0FBSyxFQUFMQSxLQUFLO1FBQ0xDLFFBQVEsRUFBUkEsUUFBUTtRQUNSUCxRQUFRLEVBQVJBLFFBQVE7UUFDUkcsUUFBUSxFQUFSQSxRQUFRO1FBQ1JDLFFBQVEsRUFBUkEsUUFBUTtLQUNULENBQUM7QUFDSixDQUFDLENBQUM7R0E1QldOLGVBQWU7O1FBQ1ZOLFVBQVU7UUFDVEMsV0FBVztRQUNQQyxlQUFlO1FBQ25CQyxXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Nvbm5lY3RvckNhcmRzL01ldGFNYXNrSG9vay5qcz80ZTFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgaG9va3MsIG1ldGFNYXNrIH0gZnJvbSBcIi4uLy4uL2Nvbm5lY3RvcnMvbWV0YU1hc2tcIjtcclxuY29uc3Qge1xyXG4gIHVzZUNoYWluSWQsXHJcbiAgdXNlQWNjb3VudHMsXHJcbiAgdXNlSXNBY3RpdmF0aW5nLFxyXG4gIHVzZUlzQWN0aXZlLFxyXG4gIHVzZVByb3ZpZGVyLFxyXG4gIHVzZUVOU05hbWVzLFxyXG59ID0gaG9va3M7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTWV0YU1hc2tDYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNoYWluSWQgPSB1c2VDaGFpbklkKCk7XHJcbiAgY29uc3QgYWNjb3VudHMgPSB1c2VBY2NvdW50cygpO1xyXG4gIGNvbnN0IGlzQWN0aXZhdGluZyA9IHVzZUlzQWN0aXZhdGluZygpO1xyXG4gIGNvbnN0IGlzQWN0aXZlID0gdXNlSXNBY3RpdmUoKTtcclxuICBjb25zdCBwcm92aWRlciA9IHVzZVByb3ZpZGVyKCk7XHJcbiAgY29uc3QgRU5TTmFtZXMgPSB1c2VFTlNOYW1lcyhwcm92aWRlcik7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG5cclxuICBjb25zb2xlLmxvZyh7IGhvb2tzLCBtZXRhTWFzayB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZvaWQgbWV0YU1hc2suY29ubmVjdEVhZ2VybHkoKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcoXCJGYWlsZWQgdG8gY29ubmVjdCBlYWdlcmx5IHRvIG1ldGFtYXNrXCIpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY29ubmVjdG9yOiBtZXRhTWFzayxcclxuICAgIGFjdGl2ZUNoYWluSWQ6IGNoYWluSWQsXHJcbiAgICBpc0FjdGl2YXRpbmcsXHJcbiAgICBpc0FjdGl2ZSxcclxuICAgIGVycm9yLFxyXG4gICAgc2V0RXJyb3IsXHJcbiAgICBhY2NvdW50cyxcclxuICAgIHByb3ZpZGVyLFxyXG4gICAgRU5TTmFtZXMsXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaG9va3MiLCJtZXRhTWFzayIsInVzZUNoYWluSWQiLCJ1c2VBY2NvdW50cyIsInVzZUlzQWN0aXZhdGluZyIsInVzZUlzQWN0aXZlIiwidXNlUHJvdmlkZXIiLCJ1c2VFTlNOYW1lcyIsInVzZU1ldGFNYXNrQ2FyZCIsImNoYWluSWQiLCJhY2NvdW50cyIsImlzQWN0aXZhdGluZyIsImlzQWN0aXZlIiwicHJvdmlkZXIiLCJFTlNOYW1lcyIsInVuZGVmaW5lZCIsImVycm9yIiwic2V0RXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdEVhZ2VybHkiLCJjYXRjaCIsImRlYnVnIiwiY29ubmVjdG9yIiwiYWN0aXZlQ2hhaW5JZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/connectorCards/MetaMaskHook.js\n"));

/***/ })

});