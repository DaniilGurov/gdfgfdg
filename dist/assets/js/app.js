/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("\r\n$( window ).scroll( function() {\r\n    localStorage.setItem( 'www_mysite_com_scroll_position', $( window ).scrollTop() );\r\n  } );\r\n\r\n  $(document).ready(function() {\r\n    $('.add__work').click(function(event) {\r\n    $('.modal').toggleClass('show')\r\n    $('body').addClass('no-scroll')\r\n});\r\n});\r\n\r\n\r\n$(document).ready(function() {\r\n    $('.close').click(function(event) {\r\n    $('.modal').removeClass('show')\r\n    $('body').removeClass('no-scroll')\r\n    $('.modal__action1').removeClass('show')\r\n    $('.modal__action2').removeClass('show')\r\n    $('.modal__action3').removeClass('show')\r\n\r\n});\r\n});\r\n$(document).ready(function() {\r\n    $('.next').click(function(event) {\r\n    $('.modal__action2').addClass('show')\r\n    $('.modal__action1').addClass('show')\r\n    \r\n});\r\n});\r\n$(document).ready(function() {\r\n    $('.save').click(function(event) {\r\n    $('.modal__action2').removeClass('show')\r\n    $('.modal__action3').addClass('show')\r\n    \r\n});\r\n});\r\n$(document).ready(function() {\r\n    $('.cancel').click(function(event) {\r\n    $('.modal__action1').removeClass('show')\r\n    $('.modal__action2').removeClass('show')\r\n    \r\n});\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;