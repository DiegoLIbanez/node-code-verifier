/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\nconst server_1 = __importDefault(__webpack_require__(/*! ./src/server */ \"./src/server/index.ts\"));\r\nconst logger_1 = __webpack_require__(/*! ./src/utils/logger */ \"./src/utils/logger.ts\");\r\n// Configuration the .env file\r\ndotenv_1.default.config();\r\nconst port = process.env.PORT || 5001;\r\n// Excute SERVER\r\nserver_1.default.listen(port, () => {\r\n    (0, logger_1.LogSuccess)(`[SERVER ON]: Running in http://localhost:${port}/api`);\r\n});\r\n// Control SERVER ERROR\r\nserver_1.default.on('error', (error) => {\r\n    (0, logger_1.LogError)(`[SERVER ERROR]: ${error}`);\r\n});\r\n\n\n//# sourceURL=webpack://code-verifier/./index.ts?");

/***/ }),

/***/ "./src/controller/HelloController.ts":
/*!*******************************************!*\
  !*** ./src/controller/HelloController.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.HelloController = void 0;\r\nconst logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\r\nclass HelloController {\r\n    getMessage(name) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            (0, logger_1.LogSuccess)('[/api/hello] GET Request');\r\n            return {\r\n                message: `Hello, ${name || \"World!\"}`\r\n            };\r\n        });\r\n    }\r\n}\r\nexports.HelloController = HelloController;\r\n\n\n//# sourceURL=webpack://code-verifier/./src/controller/HelloController.ts?");

/***/ }),

/***/ "./src/routes/HelloRouter.ts":
/*!***********************************!*\
  !*** ./src/routes/HelloRouter.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst HelloController_1 = __webpack_require__(/*! ../controller/HelloController */ \"./src/controller/HelloController.ts\");\r\nconst logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\r\n// Router from express\r\nconst helloRouter = express_1.default.Router();\r\n// http://localhost:8000/api/hello/\r\nhelloRouter.route('/').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    var _a;\r\n    // Obtain a Query Param\r\n    const name = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.name;\r\n    (0, logger_1.LogInfo)(`Query Param: ${name}`);\r\n    // Controller Instance to excute method\r\n    const controller = new HelloController_1.HelloController();\r\n    // Obtain Response\r\n    const response = yield controller.getMessage(name);\r\n    // Send to the client the response\r\n    return res.send({ response });\r\n}));\r\n// Export Hello Router\r\nexports[\"default\"] = helloRouter;\r\n\n\n//# sourceURL=webpack://code-verifier/./src/routes/HelloRouter.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\n// Root Router\r\n// Redirections to Routers\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst HelloRouter_1 = __importDefault(__webpack_require__(/*! ./HelloRouter */ \"./src/routes/HelloRouter.ts\"));\r\nconst logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\r\n// Server instance\r\nconst server = (0, express_1.default)();\r\n// Router instance\r\nconst rootRouter = express_1.default.Router();\r\n// Activate for requests to http://localhost:5001/api\r\nrootRouter.get('/', (req, res) => {\r\n    (0, logger_1.LogInfo)('GET: http://localhost:5001/api/');\r\n    //  send hello world\r\n    const data = 'Welcome to my  API Restfull Express + Nodemon + Jest +  TS + Postman + Mongoose';\r\n    res.send({ data });\r\n});\r\n// Redirections to Routers & Controllers\r\nserver.use('/', rootRouter);\r\nserver.use('/hello', HelloRouter_1.default);\r\n// add more routes to the app\r\nexports[\"default\"] = server;\r\n\n\n//# sourceURL=webpack://code-verifier/./src/routes/index.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\n// Security \r\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\n// Root Router\r\nconst routes_1 = __importDefault(__webpack_require__(/*! ../routes */ \"./src/routes/index.ts\"));\r\n// Create Express APP\r\nconst server = (0, express_1.default)();\r\n// Define SERVER tu use /api\r\nserver.use('/api', routes_1.default);\r\n// TODO Mongoose connection\r\n// Security Config\r\nserver.use((0, helmet_1.default)());\r\nserver.use((0, cors_1.default)());\r\nserver.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));\r\nserver.use(express_1.default.json({ limit: '50mb' }));\r\n// Redirection Config\r\nserver.use('/', (req, res) => {\r\n    res.redirect('/api');\r\n});\r\nexports[\"default\"] = server;\r\n\n\n//# sourceURL=webpack://code-verifier/./src/server/index.ts?");

/***/ }),

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.LogError = exports.LogWarning = exports.LogSuccess = exports.LogInfo = void 0;\r\nconst LogInfo = (message) => {\r\n    console.log(`Info: ${message}`);\r\n};\r\nexports.LogInfo = LogInfo;\r\nconst LogSuccess = (message) => {\r\n    console.log(`Success: ${message}`);\r\n};\r\nexports.LogSuccess = LogSuccess;\r\nconst LogWarning = (message) => {\r\n    console.log(`Warning: ${message}`);\r\n};\r\nexports.LogWarning = LogWarning;\r\nconst LogError = (message) => {\r\n    console.log(`Error: ${message}`);\r\n};\r\nexports.LogError = LogError;\r\n\n\n//# sourceURL=webpack://code-verifier/./src/utils/logger.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;