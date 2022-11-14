/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.png */ "./src/location.png");


function createMenu() {
    const main = document.createElement("main");

    const mainContentDiv = document.createElement("div");
    mainContentDiv.className = "mainContent";

    const firstPara = document.createElement("p");
    firstPara.innerText = "📞 123 456 789";
    mainContentDiv.appendChild(firstPara);

    const secondPara = document.createElement("p");
    secondPara.innerText = "🍴 14 Oxford St, London W1D 1AU, United Kingdom";
    mainContentDiv.appendChild(secondPara);

    const img = document.createElement("img");
    img.src = _location_png__WEBPACK_IMPORTED_MODULE_0__;
    img.setAttribute("alt", "Restaurant Location");
    mainContentDiv.appendChild(img);

    main.appendChild(mainContentDiv);

    return main;
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _githublogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./githublogo.png */ "./src/githublogo.png");


function createFooter() {
    const footer = document.createElement("footer");

    footer.innerHTML = `Foto de <a href="https://unsplash.com/@nik_owens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nik Owens</a> en <a href="https://unsplash.com/es/s/fotos/copyleft-pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash.</a>
    &nbsp Copyright © <script>document.write(new Date().getFullYear())</script> <a href="https://github.com/oscarote" target="_blank">
            Oscarote <img id="gh-logo" src="${_githublogo_png__WEBPACK_IMPORTED_MODULE_0__}" alt="github logo"></a>`

    return footer;
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader() {
    const header = document.createElement("header");

    const h1 = document.createElement("h1");
    h1.innerText = "Pizza Cosco";
    header.appendChild(h1);

    const nav = document.createElement("nav");

    const homeBtn = document.createElement("button");
    homeBtn.setAttribute("id", "home");
    homeBtn.innerText = "Home";
    nav.appendChild(homeBtn);

    const menuBtn = document.createElement("button");
    menuBtn.setAttribute("id", "menu");
    menuBtn.innerText = "Menu";
    nav.appendChild(menuBtn);

    const contactBtn = document.createElement("button");
    contactBtn.setAttribute("id", "contact");
    contactBtn.innerText = "Contact";
    nav.appendChild(contactBtn);

    header.appendChild(nav);

    return header;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _pizzasign_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizzasign.jpg */ "./src/pizzasign.jpg");


function createHome() {
    const main = document.createElement("main");
    const mainContentDiv = document.createElement("div");
    mainContentDiv.className = "mainContent";

    const firstPara = document.createElement("p");
    firstPara.innerText = "The best pizza that you will ever try";
    mainContentDiv.appendChild(firstPara);

    const secondPara = document.createElement("p");
    secondPara.innerText = "We open everyday from 12:00 to 16:00 and from 20:00 to 23:00.";
    mainContentDiv.appendChild(secondPara);

    const img = document.createElement("img");
    img.src = _pizzasign_jpg__WEBPACK_IMPORTED_MODULE_0__;
    img.setAttribute("alt", "Restaurant Location");
    mainContentDiv.appendChild(img);

    main.appendChild(mainContentDiv);

    return main;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _cheeseandgreenleavespizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cheeseandgreenleavespizza.jpg */ "./src/cheeseandgreenleavespizza.jpg");
/* harmony import */ var _meatandvegetablespizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meatandvegetablespizza.jpg */ "./src/meatandvegetablespizza.jpg");
/* harmony import */ var _prosciuttosalamipizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prosciuttosalamipizza.jpg */ "./src/prosciuttosalamipizza.jpg");
/* harmony import */ var _vegetablepizza_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vegetablepizza.jpg */ "./src/vegetablepizza.jpg");





function createMenu() {
    const main = document.createElement("main");
    main.className = "displayGrid";

    // First pizza
    const pizzaCard1 = document.createElement("div");
    pizzaCard1.className = "pizzaCard";

    const img1 = document.createElement("img");
    img1.src = _cheeseandgreenleavespizza_jpg__WEBPACK_IMPORTED_MODULE_0__;
    img1.setAttribute("alt", "Cheese and Green Leaves Pizza");
    pizzaCard1.appendChild(img1);

    const title1 = document.createElement("h3");
    title1.innerText = "Cheese and Green Leaves Pizza";
    pizzaCard1.appendChild(title1);

    main.appendChild(pizzaCard1);

    // Second pizza
    const pizzaCard2 = document.createElement("div");
    pizzaCard2.className = "pizzaCard";

    const img2 = document.createElement("img");
    img2.src = _meatandvegetablespizza_jpg__WEBPACK_IMPORTED_MODULE_1__;
    img2.setAttribute("alt", "Meat and Vegetables Pizza");
    pizzaCard2.appendChild(img2);

    const title2 = document.createElement("h3");
    title2.innerText = "Meat and Vegetables Pizza";
    pizzaCard2.appendChild(title2);

    main.appendChild(pizzaCard2);

    // Third pizza
    const pizzaCard3 = document.createElement("div");
    pizzaCard3.className = "pizzaCard";

    const img3 = document.createElement("img");
    img3.src = _prosciuttosalamipizza_jpg__WEBPACK_IMPORTED_MODULE_2__;
    img3.setAttribute("alt", "Prosciutto and Salami Pizza");
    pizzaCard3.appendChild(img3);

    const title3 = document.createElement("h3");
    title3.innerText = "Prosciutto and Salami Pizza";
    pizzaCard3.appendChild(title3);

    main.appendChild(pizzaCard3);

    // Fourth pizza
    const pizzaCard4 = document.createElement("div");
    pizzaCard4.className = "pizzaCard";

    const img4 = document.createElement("img");
    img4.src = _vegetablepizza_jpg__WEBPACK_IMPORTED_MODULE_3__;
    img4.setAttribute("alt", "Vegetable Pizza");
    pizzaCard4.appendChild(img4);

    const title4 = document.createElement("h3");
    title4.innerText = "Vegetable Pizza";
    pizzaCard4.appendChild(title4);

    main.appendChild(pizzaCard4);

    return main;
}

/***/ }),

/***/ "./src/cheeseandgreenleavespizza.jpg":
/*!*******************************************!*\
  !*** ./src/cheeseandgreenleavespizza.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bde2387fcebe7ca9dcc0.jpg";

/***/ }),

/***/ "./src/githublogo.png":
/*!****************************!*\
  !*** ./src/githublogo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffa70286205754fefa7e.png";

/***/ }),

/***/ "./src/location.png":
/*!**************************!*\
  !*** ./src/location.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91316a3f19517fd9182a.png";

/***/ }),

/***/ "./src/meatandvegetablespizza.jpg":
/*!****************************************!*\
  !*** ./src/meatandvegetablespizza.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5af55bbf293a3d5d15b0.jpg";

/***/ }),

/***/ "./src/pizzasign.jpg":
/*!***************************!*\
  !*** ./src/pizzasign.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "903104f16417df8a6b7c.jpg";

/***/ }),

/***/ "./src/prosciuttosalamipizza.jpg":
/*!***************************************!*\
  !*** ./src/prosciuttosalamipizza.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eaa8c11152b0845bcc8f.jpg";

/***/ }),

/***/ "./src/vegetablepizza.jpg":
/*!********************************!*\
  !*** ./src/vegetablepizza.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2be02a6188891abd6cff.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







const contentDiv = document.getElementById("content");

const createWeb = (page) => {
    contentDiv.innerText = "";
    contentDiv.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
    if (page === "home") {
        contentDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])());
    } else if (page === "menu") {
        contentDiv.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])());
    } else {
        contentDiv.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_5__["default"])());
    }
    contentDiv.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());

    const homeBtn = document.getElementById("home");
    homeBtn.addEventListener("click", () => createWeb("home"));

    const menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", () => createWeb("menu"));

    const contactBtn = document.getElementById("contact");
    contactBtn.addEventListener("click", () => createWeb("contact"));
};

createWeb("home");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXNDOztBQUV2QjtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsMENBQVE7QUFDdEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QjBDOztBQUUzQjtBQUNmOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsNENBQVUsQ0FBQzs7QUFFekQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQndDOztBQUV6QjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYywyQ0FBUztBQUN2QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCd0Q7QUFDSDtBQUNEO0FBQ1A7O0FBRTlCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLDJEQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsd0RBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSx1REFBUztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGdEQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ2U7QUFDQTtBQUNKO0FBQ0E7QUFDTTs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixtREFBWTtBQUN2QztBQUNBLCtCQUErQixpREFBVTtBQUN6QyxNQUFNO0FBQ04sK0JBQStCLGlEQUFVO0FBQ3pDLE1BQU07QUFDTiwrQkFBK0Isb0RBQWE7QUFDNUM7QUFDQSwyQkFBMkIsbURBQVk7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGxvY2F0aW9uIGZyb20gXCIuL2xvY2F0aW9uLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQ29udGVudERpdi5jbGFzc05hbWUgPSBcIm1haW5Db250ZW50XCI7XG5cbiAgICBjb25zdCBmaXJzdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmaXJzdFBhcmEuaW5uZXJUZXh0ID0gXCLwn5OeIDEyMyA0NTYgNzg5XCI7XG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZmlyc3RQYXJhKTtcblxuICAgIGNvbnN0IHNlY29uZFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzZWNvbmRQYXJhLmlubmVyVGV4dCA9IFwi8J+NtCAxNCBPeGZvcmQgU3QsIExvbmRvbiBXMUQgMUFVLCBVbml0ZWQgS2luZ2RvbVwiO1xuICAgIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKHNlY29uZFBhcmEpO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuc3JjID0gbG9jYXRpb247XG4gICAgaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlJlc3RhdXJhbnQgTG9jYXRpb25cIik7XG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnREaXYpO1xuXG4gICAgcmV0dXJuIG1haW47XG59IiwiaW1wb3J0IEdpdEh1YkxvZ28gZnJvbSBcIi4vZ2l0aHVibG9nby5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cbiAgICBmb290ZXIuaW5uZXJIVE1MID0gYEZvdG8gZGUgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BuaWtfb3dlbnM/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+TmlrIE93ZW5zPC9hPiBlbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vZXMvcy9mb3Rvcy9jb3B5bGVmdC1waXp6YT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaC48L2E+XG4gICAgJm5ic3AgQ29weXJpZ2h0IMKpIDxzY3JpcHQ+ZG9jdW1lbnQud3JpdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKTwvc2NyaXB0PiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL29zY2Fyb3RlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICBPc2Nhcm90ZSA8aW1nIGlkPVwiZ2gtbG9nb1wiIHNyYz1cIiR7R2l0SHViTG9nb31cIiBhbHQ9XCJnaXRodWIgbG9nb1wiPjwvYT5gXG5cbiAgICByZXR1cm4gZm9vdGVyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJUZXh0ID0gXCJQaXp6YSBDb3Njb1wiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaG9tZUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG4gICAgaG9tZUJ0bi5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcbiAgICBtZW51QnRuLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnRhY3RCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuICAgIGNvbnRhY3RCdG4uaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufSIsImltcG9ydCBwaXp6YVNpZ24gZnJvbSBcIi4vcGl6emFzaWduLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBtYWluQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRlbnREaXYuY2xhc3NOYW1lID0gXCJtYWluQ29udGVudFwiO1xuXG4gICAgY29uc3QgZmlyc3RQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmlyc3RQYXJhLmlubmVyVGV4dCA9IFwiVGhlIGJlc3QgcGl6emEgdGhhdCB5b3Ugd2lsbCBldmVyIHRyeVwiO1xuICAgIG1haW5Db250ZW50RGl2LmFwcGVuZENoaWxkKGZpcnN0UGFyYSk7XG5cbiAgICBjb25zdCBzZWNvbmRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2Vjb25kUGFyYS5pbm5lclRleHQgPSBcIldlIG9wZW4gZXZlcnlkYXkgZnJvbSAxMjowMCB0byAxNjowMCBhbmQgZnJvbSAyMDowMCB0byAyMzowMC5cIjtcbiAgICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChzZWNvbmRQYXJhKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNyYyA9IHBpenphU2lnbjtcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUmVzdGF1cmFudCBMb2NhdGlvblwiKTtcbiAgICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGVudERpdik7XG5cbiAgICByZXR1cm4gbWFpbjtcbn0iLCJpbXBvcnQgcGl6emExaW1nIGZyb20gXCIuL2NoZWVzZWFuZGdyZWVubGVhdmVzcGl6emEuanBnXCI7XG5pbXBvcnQgcGl6emEyaW1nIGZyb20gXCIuL21lYXRhbmR2ZWdldGFibGVzcGl6emEuanBnXCI7XG5pbXBvcnQgcGl6emEzaW1nIGZyb20gXCIuL3Byb3NjaXV0dG9zYWxhbWlwaXp6YS5qcGdcIjtcbmltcG9ydCBwaXp6YTRpbWcgZnJvbSBcIi4vdmVnZXRhYmxlcGl6emEuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG1haW4uY2xhc3NOYW1lID0gXCJkaXNwbGF5R3JpZFwiO1xuXG4gICAgLy8gRmlyc3QgcGl6emFcbiAgICBjb25zdCBwaXp6YUNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaXp6YUNhcmQxLmNsYXNzTmFtZSA9IFwicGl6emFDYXJkXCI7XG5cbiAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcxLnNyYyA9IHBpenphMWltZztcbiAgICBpbWcxLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkNoZWVzZSBhbmQgR3JlZW4gTGVhdmVzIFBpenphXCIpO1xuICAgIHBpenphQ2FyZDEuYXBwZW5kQ2hpbGQoaW1nMSk7XG5cbiAgICBjb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGl0bGUxLmlubmVyVGV4dCA9IFwiQ2hlZXNlIGFuZCBHcmVlbiBMZWF2ZXMgUGl6emFcIjtcbiAgICBwaXp6YUNhcmQxLmFwcGVuZENoaWxkKHRpdGxlMSk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHBpenphQ2FyZDEpO1xuXG4gICAgLy8gU2Vjb25kIHBpenphXG4gICAgY29uc3QgcGl6emFDYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGl6emFDYXJkMi5jbGFzc05hbWUgPSBcInBpenphQ2FyZFwiO1xuXG4gICAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nMi5zcmMgPSBwaXp6YTJpbWc7XG4gICAgaW1nMi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJNZWF0IGFuZCBWZWdldGFibGVzIFBpenphXCIpO1xuICAgIHBpenphQ2FyZDIuYXBwZW5kQ2hpbGQoaW1nMik7XG5cbiAgICBjb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGl0bGUyLmlubmVyVGV4dCA9IFwiTWVhdCBhbmQgVmVnZXRhYmxlcyBQaXp6YVwiO1xuICAgIHBpenphQ2FyZDIuYXBwZW5kQ2hpbGQodGl0bGUyKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQocGl6emFDYXJkMik7XG5cbiAgICAvLyBUaGlyZCBwaXp6YVxuICAgIGNvbnN0IHBpenphQ2FyZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBpenphQ2FyZDMuY2xhc3NOYW1lID0gXCJwaXp6YUNhcmRcIjtcblxuICAgIGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZzMuc3JjID0gcGl6emEzaW1nO1xuICAgIGltZzMuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUHJvc2NpdXR0byBhbmQgU2FsYW1pIFBpenphXCIpO1xuICAgIHBpenphQ2FyZDMuYXBwZW5kQ2hpbGQoaW1nMyk7XG5cbiAgICBjb25zdCB0aXRsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGl0bGUzLmlubmVyVGV4dCA9IFwiUHJvc2NpdXR0byBhbmQgU2FsYW1pIFBpenphXCI7XG4gICAgcGl6emFDYXJkMy5hcHBlbmRDaGlsZCh0aXRsZTMpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwaXp6YUNhcmQzKTtcblxuICAgIC8vIEZvdXJ0aCBwaXp6YVxuICAgIGNvbnN0IHBpenphQ2FyZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBpenphQ2FyZDQuY2xhc3NOYW1lID0gXCJwaXp6YUNhcmRcIjtcblxuICAgIGNvbnN0IGltZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZzQuc3JjID0gcGl6emE0aW1nO1xuICAgIGltZzQuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiVmVnZXRhYmxlIFBpenphXCIpO1xuICAgIHBpenphQ2FyZDQuYXBwZW5kQ2hpbGQoaW1nNCk7XG5cbiAgICBjb25zdCB0aXRsZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGl0bGU0LmlubmVyVGV4dCA9IFwiVmVnZXRhYmxlIFBpenphXCI7XG4gICAgcGl6emFDYXJkNC5hcHBlbmRDaGlsZCh0aXRsZTQpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwaXp6YUNhcmQ0KTtcblxuICAgIHJldHVybiBtYWluO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGNyZWF0ZVdlYiA9IChwYWdlKSA9PiB7XG4gICAgY29udGVudERpdi5pbm5lclRleHQgPSBcIlwiO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGlmIChwYWdlID09PSBcImhvbWVcIikge1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG4gICAgfSBlbHNlIGlmIChwYWdlID09PSBcIm1lbnVcIikge1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xuICAgIH1cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY3JlYXRlV2ViKFwiaG9tZVwiKSk7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNyZWF0ZVdlYihcIm1lbnVcIikpO1xuXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjcmVhdGVXZWIoXCJjb250YWN0XCIpKTtcbn07XG5cbmNyZWF0ZVdlYihcImhvbWVcIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9