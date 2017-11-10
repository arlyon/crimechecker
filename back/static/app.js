/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_people__ = __webpack_require__(3);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_people__["a" /* People */], null), document.getElementById("root"));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person__ = __webpack_require__(4);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * The people class component.
 */
class People extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    /**
     * Called when the component is instantiated.
     */
    constructor() {
        super();
        /**
         * Fetches the data asynchronously and sets the state.
         * @returns {Promise<void>}
         */
        this.fetchData = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("/api/people/");
            this.setState({ people: yield response.json() });
        });
        // set the state
        this.state = {
            people: []
        };
        this.fetchData();
    }
    /**
     * The render function returns the markup for the component.
     * @returns {any}
     */
    render() {
        const people = this.state.people.map(person => {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__person__["a" /* Person */], Object.assign({ key: person.id }, person));
        });
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("section", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "People"),
            people));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = People;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/**
 * A stateless, classless component.
 * @param {IPerson} props
 * @constructor
 */
const Person = (props) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("article", null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, props.name),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("dl", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("dt", null, "Born"),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("dd", null, props.birthday),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("dt", null, "Relative"),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("dd", null, props.is_relative.toString())));
/* harmony export (immutable) */ __webpack_exports__["a"] = Person;

/**
 * A class-based component.
 */
class Person2 extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("article", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, this.props.name),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("dl", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("dt", null, "Born"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("dd", null, this.props.birthday),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("dt", null, "Relative"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("dd", null, this.props.is_relative.toString()))));
    }
}
/* unused harmony export Person2 */



/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map