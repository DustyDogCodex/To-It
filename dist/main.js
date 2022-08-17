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

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => (/* binding */ createNewProject)\n/* harmony export */ });\n/* Class for creating a new project from user supplied inputs */\nfunction createNewProject(name) {\n    return { id: Date.now().toString(), name: name, tasks: [] }\n}\n\n\n\n//# sourceURL=webpack://to-it/./src/createProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject.js */ \"./src/createProject.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n\nconst myProjects = document.querySelector('[data-projects]')\nconst newProjectForm = document.querySelector('[data-new-project-form]')\nconst newProjectInput = document.querySelector('[data-new-project-input]')\n\nconst LOCAL_STORAGE_PROJECT_KEY = 'toit.projects'\nlet projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || []\n\nnewProjectForm.addEventListener('submit', e => {\n    e.preventDefault()\n    const projectName = newProjectInput.value\n    if (projectName == null || projectName === '') { \n        return\n    }\n    const project = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_1__.createNewProject)(projectName)\n    newProjectInput.value = null\n    projects.push(project)\n    saveAndLoad()\n})\n\nfunction saveAndLoad() {\n    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(LOCAL_STORAGE_PROJECT_KEY, projects)\n    ;(0,_render_js__WEBPACK_IMPORTED_MODULE_0__.loadProjectList)(myProjects, projects)\n}\n\n(0,_render_js__WEBPACK_IMPORTED_MODULE_0__.loadProjectList)(myProjects, projects)\n\n//# sourceURL=webpack://to-it/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadProjectList\": () => (/* binding */ loadProjectList)\n/* harmony export */ });\n/* functions for rendering a list of projects in the My Projects section. */\nfunction loadProjectList(myProjects, projects) {\n    /* method for clearing and rendering new project list */\n    clearProjectList(myProjects)\n    \n    projects.forEach(project => {\n        const projectElement = document.createElement('li')\n\n        projectElement.classList.add('project-name')\n        projectElement.dataset.projectId = project.id\n        projectElement.innerText = project.name\n        \n        myProjects.appendChild(projectElement)\n    });\n}\n\n/* this function clears previous elements from project list before rendering a fresh list. */\nfunction clearProjectList(element){\n    while (element.firstChild) {\n        element.removeChild(element.firstChild)\n    }\n}\n\n\n\n//# sourceURL=webpack://to-it/./src/render.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveToLocalStorage\": () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\n/* for accessing and setting stuff in local storage */\nfunction saveToLocalStorage(projectKey, projects){\n    localStorage.setItem(projectKey, JSON.stringify(projects))\n}\n\n\n\n//# sourceURL=webpack://to-it/./src/storage.js?");

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