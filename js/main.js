/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ (() => {

/* Модальное окно */
const modalBtn = document.querySelector('.bottom__info-link');
const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
modalBtn.addEventListener('click', e => {
  e.preventDefault();
  modal.style.display = 'block';
  /* document.querySelector('body').style.overflow = 'hidden'; */
});
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
  /* document.querySelector('body').style.overflow = ''; */
});
/* Активные классы элементов */

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__item');
const dateWrapper = document.querySelector('.date__wrapper');
const dateItems = document.querySelectorAll('.date__item');
dateWrapper.addEventListener('click', event => {
  let target = event.target;

  if (target.classList.contains('date__item')) {
    for (let i = 0; i < dateItems.length; i++) {
      dateItems[i].classList.remove('active');
    }

    target.classList.add('active');
  }
});
slider.addEventListener('click', event => {
  let target = event.target;

  if (target.classList.contains('slider__item')) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }

    target.classList.add('active');
  }
});
/* Слайдер (Slick slider) */

$(document).ready(function () {
  $('.slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_right.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.svg"></button>',
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
        infinite: false
      }
    }]
  });
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=main.js.map