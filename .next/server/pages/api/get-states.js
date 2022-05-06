"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/get-states";
exports.ids = ["pages/api/get-states"];
exports.modules = {

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "(api)/./pages/api/get-states.js":
/*!*********************************!*\
  !*** ./pages/api/get-states.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_db_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/db/index.js */ \"(api)/./utils/db/index.js\");\n\nasync function handler(req, res) {\n    try {\n        const statesRaw = await _utils_db_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].collection(\"states\").get();\n        if (statesRaw) {\n            let states = statesRaw.docs.map((entry)=>entry.data()\n            );\n            let stat = states.map((item)=>item.states\n            );\n            res.status(200).json(stat[0]);\n        } else {\n            const states = await _utils_db_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].collection(\"states\").add({\n                ...req.body,\n                created: new Date().toISOString()\n            });\n        }\n    } catch (error) {\n        res.status(400).end();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LXN0YXRlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QztBQUUxQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRTVDLElBQUk7UUFDQSxNQUFNQyxTQUFTLEdBQUcsTUFBTUoscUVBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQ00sR0FBRyxFQUFFO1FBQ3JELElBQUdGLFNBQVMsRUFBQztZQUNULElBQUlHLE1BQU0sR0FBR0gsU0FBUyxDQUFDSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFJQSxLQUFLLENBQUNDLElBQUksRUFBRTtZQUFBLENBQUM7WUFDckQsSUFBSUMsSUFBSSxHQUFHTCxNQUFNLENBQUNFLEdBQUcsQ0FBQ0ksQ0FBQUEsSUFBSSxHQUFJQSxJQUFJLENBQUNOLE1BQU07WUFBQSxDQUFDO1lBQzNDSixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFFSCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUU7U0FDbEMsTUFBSTtZQUNELE1BQU1MLE1BQU0sR0FBRyxNQUFNUCxxRUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDZ0IsR0FBRyxDQUFDO2dCQUM3QyxHQUFHZCxHQUFHLENBQUNlLElBQUk7Z0JBQ1hDLE9BQU8sRUFBRSxJQUFJQyxJQUFJLEVBQUUsQ0FBQ0MsV0FBVyxFQUFFO2FBQ2xDLENBQUM7U0FDUDtLQUlKLENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBRVpsQixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1EsR0FBRyxFQUFFLENBQUM7S0FDekI7Q0FFRiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdheS8uL3BhZ2VzL2FwaS9nZXQtc3RhdGVzLmpzPzM1YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gJy4uLy4uL3V0aWxzL2RiL2luZGV4LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlc1JhdyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3N0YXRlcycpLmdldCgpO1xyXG4gICAgICAgIGlmKHN0YXRlc1Jhdyl7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZXMgPSBzdGF0ZXNSYXcuZG9jcy5tYXAoZW50cnkgPT4gZW50cnkuZGF0YSgpKTtcclxuICAgICAgICAgICAgIGxldCBzdGF0ID0gc3RhdGVzLm1hcChpdGVtID0+IGl0ZW0uc3RhdGVzKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oIHN0YXRbMF0gKSAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZXMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdzdGF0ZXMnKS5hZGQoe1xyXG4gICAgICAgICAgICAgICAgLi4ucmVxLmJvZHksXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmVuZCgpO1xyXG4gICAgfVxyXG4gICBcclxuICB9XHJcbiAgIl0sIm5hbWVzIjpbImRiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXRlc1JhdyIsImNvbGxlY3Rpb24iLCJnZXQiLCJzdGF0ZXMiLCJkb2NzIiwibWFwIiwiZW50cnkiLCJkYXRhIiwic3RhdCIsIml0ZW0iLCJzdGF0dXMiLCJqc29uIiwiYWRkIiwiYm9keSIsImNyZWF0ZWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJlcnJvciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-states.js\n");

/***/ }),

/***/ "(api)/./utils/db/index.js":
/*!***************************!*\
  !*** ./utils/db/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_my_way_c4beb_firebase_adminsdk_u27xu_90cf3bd81e_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/my-way-c4beb-firebase-adminsdk-u27xu-90cf3bd81e.json */ \"(api)/./config/my-way-c4beb-firebase-adminsdk-u27xu-90cf3bd81e.json\");\n\n\nif (!(firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    try {\n        firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().initializeApp({\n            credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().credential.cert(_config_my_way_c4beb_firebase_adminsdk_u27xu_90cf3bd81e_json__WEBPACK_IMPORTED_MODULE_1__)\n        });\n    } catch (error) {\n        console.log(\"Firebase admin initialization error\", error.stack);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().firestore());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1DO0FBQzREO0FBRS9GLElBQUksQ0FBQ0EsbUVBQWlCLEVBQUU7SUFDdEIsSUFBSTtRQUNGQSxtRUFBbUIsQ0FBQztZQUNsQkssVUFBVSxFQUFFTCxxRUFBcUIsQ0FBQ0MseUZBQWMsQ0FBQztTQUNsRCxDQUFDLENBQUM7S0FDSixDQUFDLE9BQU9NLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRUYsS0FBSyxDQUFDRyxLQUFLLENBQUMsQ0FBQztLQUNqRTtDQUNGO0FBQ0QsaUVBQWVWLCtEQUFlLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdheS8uL3V0aWxzL2RiL2luZGV4LmpzP2RmMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcclxuaW1wb3J0IHNlcnZpY2VBY2NvdW50IGZyb20gJy4uLy4uL2NvbmZpZy9teS13YXktYzRiZWItZmlyZWJhc2UtYWRtaW5zZGstdTI3eHUtOTBjZjNiZDgxZS5qc29uJztcclxuXHJcbmlmICghYWRtaW4uYXBwcy5sZW5ndGgpIHtcclxuICB0cnkge1xyXG4gICAgYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydChzZXJ2aWNlQWNjb3VudClcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRmlyZWJhc2UgYWRtaW4gaW5pdGlhbGl6YXRpb24gZXJyb3InLCBlcnJvci5zdGFjayk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGFkbWluLmZpcmVzdG9yZSgpO1xyXG4iXSwibmFtZXMiOlsiYWRtaW4iLCJzZXJ2aWNlQWNjb3VudCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiY3JlZGVudGlhbCIsImNlcnQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsImZpcmVzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/db/index.js\n");

/***/ }),

/***/ "(api)/./config/my-way-c4beb-firebase-adminsdk-u27xu-90cf3bd81e.json":
/*!*********************************************************************!*\
  !*** ./config/my-way-c4beb-firebase-adminsdk-u27xu-90cf3bd81e.json ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"my-way-c4beb","private_key_id":"90cf3bd81eb2fdd257d3c8ead0a7215d598a431d","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2DRWYcAHZmrLO\\nWFKYW/LtWUdDfSzh+d5BMBoZnZF4tGG6gs6tMv3XWK4htTvPVv384PLSm2p+Uxtu\\nmgjfUJ1KPDd+ywwJBodGb3viWxT9B1WSIVA/2XtAkzPnUoagbBXRhaLWnD8esF2i\\nUKDMbpsYqd8XImnOgdRXpjIQ5csLe9l0mIqgsMrFQ6V4QI9FCA758utiuaN4HaJU\\nDPV59Q0Ayv58XushR+03qdLsWpgTNn2m2QSM1vvU0dCiQ2BqBhkMHulg1+6RrUJ+\\n2vn90fWMAsPu2QmOIHFVkWx7vZAuw+NKAfE/4QhiCqjxPn6bakT7UdTVs1vdR1YE\\nYKn/SXFFAgMBAAECggEADHTXvDgS5OdDXck2B0cxoKxPqwv/8Galw0DQG8veves4\\nBFqjWyzozVjyqKbI/fHL6+Kws9jRNKSOGb4tr2BJobvHMbtF7wq7hvPA2guZ0UF+\\nAAx36gDKJTmfiC/q39YnuFAB4EXEL5W7k4wbfIO5xAN3iIBXzE0ekN4qpdANosnC\\n10+u1H1dltbWAftVEUCHCohaBNiJcC+4wPD4HzrWO7+SzXizyyhsyw7jXsfZpg/4\\n4buGQKW0/+Iwnb92L8ZFLL8ocNQccC8avRxIdtr86URI2mzwDx++WZ9+umL85DQ+\\nc60OXhfF31wZDcW/Q+EodVnBgWR6QSQlIKNk12QkjwKBgQDfdKinHgUsBjesxtL1\\nEPM7Y2Pfht14lQljqInxaf+EoCy5vE0zcU1tm33U9wCPh+f9OI98Y+sRfJVqp5Ve\\noGtPBbY5VoYYkj3gVwgX8hI0vHJhG5bYy8aAXJwAib9AyW8jTbSvlxJfqGrSIsLc\\nF3VkE2R5aA8jZCqOa6BdQrfVHwKBgQDQkLGCwDJ/M3OlXImcJMvi9DMC91Mrgqqw\\nvK3GryidAZaK1CbucJfObTneaDG/r+TWQK6z7vAFgoYrd2UJ3lOOmSyfjOuebuYz\\n3UfH7555sRRXPIKg8apAO2pLtXqSwhr9xMxmUpDqQYCYirzWLpvLzH3kAGTqqXXf\\nUkopvrwpGwKBgFzlFZvr+gB0UT7tpROmSUfeKM3rNjUD2FRq43XOOCB9qjpI0ttY\\n9fRkGOqpCL2ipUn68oOm0jmBzmf5ZTpifFnsqPWrR7H9UeXqqH2z7+emk/JU0uAr\\nzsjcNypuGWkolKBblIsOxd+ol0fmlZWD1xSUj0d9gBWZdauhiJhcvSnHAoGBAMXq\\nuPiZyJGa0sB2GwP4ix5Ym9vRtbQRcEb9FW74ovKzIhemETet0vEKB6M9fxAnK2IB\\nyYdoU472+LlguJnvx50HUCgsAx+6n2tSLh7WDa3vU50hB9kQ233OpCUqFyITXqe4\\nTDtBWNFjzVN0PJSHcEKqUEC/+wQQQZHltgj9PfNHAoGBAKat5OgDp7eaaYVTCJJ3\\npKyyoeGkL+z3LBUHyygEzjFMUQz0kIUJm1epiqrlgOeFbZJrzzioaYmnc/0f4ORt\\nvsomgfdyCD1JGDV+w9Z63TaQEbfw+Wa7fGz+0L3A88PvwAfkfz+VzjuU2HJsj5jk\\nwYKfdJdUBzHvyAavtXndWlYb\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-u27xu@my-way-c4beb.iam.gserviceaccount.com","client_id":"100642271568209517187","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-u27xu%40my-way-c4beb.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get-states.js"));
module.exports = __webpack_exports__;

})();