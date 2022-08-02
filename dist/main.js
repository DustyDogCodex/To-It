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

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\n/* class for changing display when user selects the home tab */\nclass Home {\n    static HomeDisplay(){\n        const display = document.querySelector('.display')\n\n        /* create button for adding new to-do */\n        /* newDivForButtons will contain 2 separate divs. Each of these divs contains a button and a span element. */\n        const newDivForButtons = document.createElement('div')\n        const newToDoDiv = document.createElement('div')\n        const newProjectDiv = document.createElement('div')\n        const newToDoSpan = document.createElement('span')\n        const newProjectSpan = document.createElement('span')\n        const newToDoButton = document.createElement('button')\n        const newProjectButton = document.createElement('button')\n\n        newToDoButton.innerText = '+'\n        newToDoButton.classList.add('addNewToDo')\n        newToDoSpan.innerText = 'Add a new to-do item!'\n\n        newProjectButton.innerText = '+'\n        newProjectButton.classList.add('addNewProject')\n        newProjectSpan.innerText = 'Start a new project!'\n\n        newToDoDiv.appendChild(newToDoButton)\n        newToDoDiv.appendChild(newToDoSpan)\n        newToDoDiv.classList.add('newToDoDiv')\n        newProjectDiv.appendChild(newProjectButton)\n        newProjectDiv.appendChild(newProjectSpan)\n        newProjectDiv.classList.add('newProjectDiv')\n\n        newDivForButtons.appendChild(newToDoDiv)\n        newDivForButtons.appendChild(newProjectDiv)\n        newDivForButtons.classList.add('addNew')\n\n        display.appendChild(newDivForButtons)\n    }\n}\n\n\n\n\n//# sourceURL=webpack://to-it/./src/Home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/Home.js\");\n\n\nconst homeButton = document.querySelector('#home')\n\nhomeButton.addEventListener('click', () => {\n    _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home.HomeDisplay()\n})\n\n//# sourceURL=webpack://to-it/./src/index.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;