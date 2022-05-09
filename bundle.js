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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".keyboard {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    flex-wrap: wrap;\\r\\n    max-width: 840px;\\r\\n    margin: 0 auto;\\r\\n    padding-left: 0;\\r\\n    padding-bottom: 0;\\r\\n    background: #888888;\\r\\n    border: 3px solid #222222;\\r\\n    border-radius: 5px;\\r\\n    padding-left: 6px;\\r\\n    padding-top: 6px;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n    clear: both;\\r\\n}\\r\\n\\r\\n.key {\\r\\n    float: left;\\r\\n    min-width: 40px;\\r\\n    height: 40px;\\r\\n    padding: 0 5px;\\r\\n    margin: 0 6px 6px 0;\\r\\n    font-weight: 500;\\r\\n    line-height: 40px;\\r\\n    text-align: center;\\r\\n    color: #ffffff;\\r\\n    background: #444444;\\r\\n    border-radius: 3px;\\r\\n    user-select: none;\\r\\n    transition: border-radius 0.3s, background-color 0.3s;\\r\\n}\\r\\n\\r\\n.key:hover {\\r\\n    cursor: pointer;\\r\\n    background: orange\\r\\n}\\r\\n\\r\\n.clear {\\r\\n    clear: both;\\r\\n}\\r\\n\\r\\n.active {\\r\\n    border-radius: 50px;\\r\\n    background: orange;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.textarea {\\r\\n    display: block;\\r\\n    width: 700px;\\r\\n    height: 200px;\\r\\n    margin: 10px auto 10px;\\r\\n    padding: 10px;\\r\\n    font-size: 18px;\\r\\n    color: #444444;\\r\\n    line-height: 1.15;\\r\\n}\\r\\n\\r\\n\\r\\n.centralizer {\\r\\n    margin: 0 auto;\\r\\n    font-family: \\\"Trebuchet MS\\\", \\\"Helvetica\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.title {\\r\\n    font-size: 30px;\\r\\n    text-align: center;\\r\\n    margin: 5px\\r\\n}\\r\\n\\r\\np {\\r\\n    text-align: center;\\r\\n    margin: 5px;\\r\\n}\\r\\n\\r\\n#Enter {\\r\\n    width: 80px;\\r\\n}\\r\\n\\r\\n#Space {\\r\\n    width: 375px\\r\\n}\\r\\n\\r\\n#ShiftLeft {\\r\\n    width: 58px;\\r\\n}\\r\\n\\r\\n#ShiftRight {\\r\\n    width: 93px;\\r\\n}\\r\\n\\r\\n.activ {\\r\\n    border-radius: 50px;\\r\\n    background: orange;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://keyboard/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n\r\n      content += cssWithMappingToString(item);\r\n\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      return content;\r\n    }).join(\"\");\r\n  }; // import a list of modules into the list\r\n\r\n\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\n\n//# sourceURL=webpack://keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://keyboard/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n\r\n  return updater;\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n\r\n  css += obj.css;\r\n\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/app */ \"./src/scripts/app.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n(0,_scripts_app__WEBPACK_IMPORTED_MODULE_0__.addElement)();\n\n//# sourceURL=webpack://keyboard/./src/index.js?");

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addElement\": () => (/* binding */ addElement)\n/* harmony export */ });\n/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea */ \"./src/scripts/textarea.js\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ \"./src/scripts/keyboard.js\");\n/* harmony import */ var _arrayKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrayKeys */ \"./src/scripts/arrayKeys.js\");\n\r\n\r\n\r\n\r\nfunction addElement() {\r\n    let newDiv = document.createElement('div');\r\n    newDiv.classList.add('centralizer');\r\n    newDiv.innerHTML += '<p class=\"title\">RSS Virtual Keyboard</p>';\r\n    newDiv.innerHTML += '<p class=\"description\">Клавиатура создана в операционной системе Windows</p>';\r\n    newDiv.innerHTML += '<p class=\"language\">Для переключения языка комбинация: ctrl + alt</p>';\r\n    document.body.append(newDiv);\r\n    let a = document.querySelector('.description');\r\n    a.before((0,_textarea__WEBPACK_IMPORTED_MODULE_0__.createBodyTextarea)());\r\n    a.before((0,_keyboard__WEBPACK_IMPORTED_MODULE_1__.createBodyKeyboard)());\r\n}\r\n\r\n\n\n//# sourceURL=webpack://keyboard/./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/arrayKeys.js":
/*!**********************************!*\
  !*** ./src/scripts/arrayKeys.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keysCode\": () => (/* binding */ keysCode),\n/* harmony export */   \"keysShift_EN\": () => (/* binding */ keysShift_EN),\n/* harmony export */   \"keysShift_ua\": () => (/* binding */ keysShift_ua),\n/* harmony export */   \"keysUp_EN\": () => (/* binding */ keysUp_EN),\n/* harmony export */   \"keysUp_ua\": () => (/* binding */ keysUp_ua),\n/* harmony export */   \"keys_en\": () => (/* binding */ keys_en),\n/* harmony export */   \"keys_en_description\": () => (/* binding */ keys_en_description),\n/* harmony export */   \"keys_ua\": () => (/* binding */ keys_ua),\n/* harmony export */   \"keys_ua_description\": () => (/* binding */ keys_ua_description)\n/* harmony export */ });\nlet keysCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];\r\nlet keys_en = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', \"'\", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];\r\nlet keys_en_description = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', \"'\", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl'];\r\nlet keysUp_EN = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\\\', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', \"'\", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#8593', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl'];\r\nlet keysShift_EN = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#8593', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl'];\r\nlet keys_ua = [\"'\", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ї', '\\\\', 'Delete', 'CapsLock', 'ф', 'i', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'є', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'AltGraph', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];\r\nlet keys_ua_description = [\"'\", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ї', '\\\\', 'Del', 'CapsLock', 'ф', 'i', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'є', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592;', '&#8595', '&#8594', 'Ctrl'];\r\nlet keysUp_ua = [\"'\", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ї', '\\\\', 'Del', 'CapsLock', 'Ф', 'I', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Є', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#8593', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl'];\r\nlet keysShift_ua = ['₴', '!', '\"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ї', '/', 'Del', 'CapsLock', 'Ф', 'I', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Є', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#8593', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl'];\r\n\r\n\r\n\n\n//# sourceURL=webpack://keyboard/./src/scripts/arrayKeys.js?");

/***/ }),

/***/ "./src/scripts/inputTextarea.js":
/*!**************************************!*\
  !*** ./src/scripts/inputTextarea.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputTextarea\": () => (/* binding */ inputTextarea)\n/* harmony export */ });\nfunction inputTextarea(element) {\r\n    let ua = element.querySelector('.ua');\r\n    let en = element.querySelector('.en');\r\n    let textarea = document.querySelector('#textarea');\r\n    textarea.focus();\r\n\r\n    if (element.id == 'CapsLock') {\r\n        element.classList.toggle('activ');\r\n    }\r\n\r\n    else if (element.id == 'ShiftLeft' || element.id == 'ShiftRight' || element.id == 'ControlLeft' || element.id == 'ControlRight' || element.id == 'AltLeft' || element.id == 'AltRight' || element.id == 'MetaLeft') {\r\n        return;\r\n    }\r\n\r\n    else if (element.id == 'Tab') {\r\n        textarea.textContent += '   ';\r\n    }\r\n\r\n    else if (element.id == 'Space') {\r\n        textarea.textContent += ' ';\r\n    }\r\n\r\n    else if (element.id == 'Backspace') {\r\n        textarea.textContent = textarea.textContent.substring(0, textarea.textContent.length - 1);\r\n    }\r\n\r\n    else if (element.id == 'Delete') {\r\n        textarea.textContent = textarea.textContent.slice(1);\r\n    }\r\n\r\n    else if (element.id == 'Enter') {\r\n        textarea.textContent += '\\n';\r\n    }\r\n\r\n    else if (ua.classList.contains('hidden')) {\r\n        let span = en.querySelectorAll('span');\r\n        for (let i = 0; i < span.length; i++) {\r\n            if (!span[i].classList.contains('hidden')) {\r\n                textarea.textContent += span[i].textContent;\r\n            }\r\n        }\r\n    }\r\n    else {\r\n        let span = ua.querySelectorAll('span');\r\n        for (let i = 0; i < span.length; i++) {\r\n            if (!span[i].classList.contains('hidden')) {\r\n                textarea.textContent += span[i].textContent;\r\n            }\r\n        }\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://keyboard/./src/scripts/inputTextarea.js?");

/***/ }),

/***/ "./src/scripts/key.js":
/*!****************************!*\
  !*** ./src/scripts/key.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addActiveOnClick\": () => (/* binding */ addActiveOnClick),\n/* harmony export */   \"addKey\": () => (/* binding */ addKey)\n/* harmony export */ });\n/* harmony import */ var _arrayKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayKeys */ \"./src/scripts/arrayKeys.js\");\n/* harmony import */ var _keyCaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyCaps */ \"./src/scripts/keyCaps.js\");\n/* harmony import */ var _shift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shift */ \"./src/scripts/shift.js\");\n/* harmony import */ var _inputTextarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputTextarea */ \"./src/scripts/inputTextarea.js\");\n/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang */ \"./src/scripts/lang.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction addKey() {\r\n    let out = '';\r\n    for (let i = 0; i < _arrayKeys__WEBPACK_IMPORTED_MODULE_0__.keysCode.length; i++) {\r\n        let caseDownUA = '<span class=\"caseDown\">' + _arrayKeys__WEBPACK_IMPORTED_MODULE_0__.keys_ua_description[i] + '</span>',\r\n            caseUpUA = '<span class=\"caseUp hidden\">' + _arrayKeys__WEBPACK_IMPORTED_MODULE_0__.keysUp_ua[i] + '</span>',\r\n            shiftUA = '<span class=\"shift hidden\">' + _arrayKeys__WEBPACK_IMPORTED_MODULE_0__.keysShift_ua[i] + '</span>',\r\n            capsUA = '<span class=\"caps hidden\">' + _arrayKeys__WEBPACK_IMPORTED_MODULE_0__.keysUp_ua[i] + '</span>',\r\n            keysUA = '<span class=\"ua hidden\">' + caseDownUA + caseUpUA + shiftUA + capsUA + '</span>';\r\n        let caseDownEN = '<span class=\"caseDown\">' + _arrayKeys__WEBPACK_IMPORTED_MODULE_0__.keys_en_description[i] + '</span>',\r\n            caseUpEN = '<span class=\"caseUp hidden\">' + _arrayKeys__WEBPACK_IMPORTED_MODULE_0__.keysUp_EN[i] + '</span>',\r\n            shiftEN = '<span class=\"shift hidden\">' + _arrayKeys__WEBPACK_IMPORTED_MODULE_0__.keysShift_EN[i] + '</span>',\r\n            capsEN = '<span class=\"caps hidden\">' + _arrayKeys__WEBPACK_IMPORTED_MODULE_0__.keysUp_EN[i] + '</span>',\r\n            keysEN = '<span class=\"en\">' + caseDownEN + caseUpEN + capsEN + shiftEN + '</span>';\r\n        out += '<div class=\"keyboard--key key\" id=\"' + _arrayKeys__WEBPACK_IMPORTED_MODULE_0__.keysCode[i] + '\">' + keysUA + keysEN + '</span></div>';\r\n    }\r\n    return out;\r\n}\r\nlet ctrl = false;\r\ndocument.onkeydown = function (event) {\r\n    event.preventDefault();\r\n    (0,_inputTextarea__WEBPACK_IMPORTED_MODULE_3__.inputTextarea)(document.querySelector('#' + event.code));\r\n    document.querySelector('#' + event.code).classList.add('active');\r\n    if (event.code == 'ControlLeft' || event.code == 'ControlRight') { ctrl = true; }\r\n    if ((event.code == 'AltLeft' || event.code == 'AltRight') && ctrl) {\r\n        (0,_lang__WEBPACK_IMPORTED_MODULE_4__.lang)();\r\n        let en = document.querySelectorAll('.en');\r\n        let ua = document.querySelectorAll('.ua');\r\n        for (let i = 0; i < en.length; i++) {\r\n            ua[i].classList.toggle('hidden');\r\n            en[i].classList.toggle('hidden');\r\n        }\r\n    }\r\n    else if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {\r\n        document.querySelector('#' + event.code).classList.toggle('activ');\r\n        (0,_shift__WEBPACK_IMPORTED_MODULE_2__.shift)();\r\n    }\r\n    else if (event.code == 'CapsLock') {\r\n        (0,_keyCaps__WEBPACK_IMPORTED_MODULE_1__.caps)();\r\n    }\r\n};\r\n\r\ndocument.onkeyup = function (event) {\r\n    document.querySelector('#' + event.code).classList.remove('active');\r\n    if (event.code == 'ControlLeft' || event.code == 'ControlRight') { ctrl = false; }\r\n};\r\n\r\nfunction addActiveOnClick() {\r\n    document.querySelectorAll('.key').forEach((element) => {\r\n        element.onclick = function () {\r\n            (0,_inputTextarea__WEBPACK_IMPORTED_MODULE_3__.inputTextarea)(element);\r\n            document.querySelectorAll('.key').forEach((element) => {\r\n                setTimeout(function () {\r\n                    element.classList.remove('active');\r\n                }, 300);\r\n                this.classList.add('active');\r\n            });\r\n            if (element.id == 'CapsLock') {\r\n                (0,_keyCaps__WEBPACK_IMPORTED_MODULE_1__.caps)();\r\n            }\r\n            else if (element.id == 'ShiftLeft' || element.id == 'ShiftRight') {\r\n                document.querySelector('#' + element.id).classList.toggle('activ');\r\n                (0,_shift__WEBPACK_IMPORTED_MODULE_2__.shift)();\r\n            }\r\n        };\r\n    });\r\n}\n\n//# sourceURL=webpack://keyboard/./src/scripts/key.js?");

/***/ }),

/***/ "./src/scripts/keyCaps.js":
/*!********************************!*\
  !*** ./src/scripts/keyCaps.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"caps\": () => (/* binding */ caps)\n/* harmony export */ });\nfunction caps() {\r\n    let caseDown = document.querySelectorAll('.caseDown');\r\n    let caps = document.querySelectorAll('.caps');\r\n    let en = document.querySelectorAll('.en');\r\n    let ua = document.querySelectorAll('.ua');\r\n    let k = 0;\r\n\r\n    for (let i = 0; i < caps.length; i++) {\r\n        k = Math.floor(i / 2);\r\n        if (en[k].classList.contains('hidden') == false) {\r\n            caps[i].classList.toggle('hidden');\r\n            caseDown[i].classList.toggle('hidden');\r\n        }\r\n        else if (ua[k].classList.contains('hidden') == false) {\r\n            caps[i].classList.toggle('hidden');\r\n            caseDown[i].classList.toggle('hidden');\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://keyboard/./src/scripts/keyCaps.js?");

/***/ }),

/***/ "./src/scripts/keyboard.js":
/*!*********************************!*\
  !*** ./src/scripts/keyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBodyKeyboard\": () => (/* binding */ createBodyKeyboard)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/scripts/key.js\");\n/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ \"./src/scripts/lang.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createBodyKeyboard() {\r\n    let keyboard = document.createElement('div');\r\n    keyboard.classList.add('body--keyboard', 'keyboard');\r\n    keyboard.id = 'keyboard';\r\n    document.body.append(keyboard);\r\n    keyboard.innerHTML = (0,_key__WEBPACK_IMPORTED_MODULE_0__.addKey)();\r\n    (0,_key__WEBPACK_IMPORTED_MODULE_0__.addActiveOnClick)();\r\n    (0,_lang__WEBPACK_IMPORTED_MODULE_1__.switchLang)();\r\n    return keyboard;\r\n}\r\n\n\n//# sourceURL=webpack://keyboard/./src/scripts/keyboard.js?");

/***/ }),

/***/ "./src/scripts/lang.js":
/*!*****************************!*\
  !*** ./src/scripts/lang.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lang\": () => (/* binding */ lang),\n/* harmony export */   \"switchLang\": () => (/* binding */ switchLang)\n/* harmony export */ });\nfunction lang() {\r\n    let en = document.querySelector('.en');\r\n    if (en.classList.contains('hidden')) {\r\n        localStorage.setItem('lang', 'en');\r\n    }\r\n    else {\r\n        localStorage.setItem('lang', 'ua');\r\n    }\r\n}\r\n\r\nfunction switchLang() {\r\n    let ua = document.querySelectorAll('.ua');\r\n    let en = document.querySelectorAll('.en');\r\n\r\n    if (localStorage.getItem('lang') == 'ua') {\r\n        for (let i = 0; i < en.length; i++) {\r\n            en[i].classList.add('hidden');\r\n            ua[i].classList.remove('hidden');\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://keyboard/./src/scripts/lang.js?");

/***/ }),

/***/ "./src/scripts/shift.js":
/*!******************************!*\
  !*** ./src/scripts/shift.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shift\": () => (/* binding */ shift)\n/* harmony export */ });\nfunction shift() {\r\n    let caseDown = document.querySelectorAll('.caseDown')\r\n    let shift = document.querySelectorAll('.shift')\r\n    let en = document.querySelectorAll('.en')\r\n    let ua = document.querySelectorAll('.ua')\r\n    let k = 0;\r\n\r\n    for (let i = 0; i < shift.length; i++) {\r\n        k = Math.floor(i / 2)\r\n        if (en[k].classList.contains('hidden') == false) {\r\n            shift[i].classList.toggle('hidden')\r\n            caseDown[i].classList.toggle('hidden')\r\n        }\r\n        else if (ua[k].classList.contains('hidden') == false) {\r\n            shift[i].classList.toggle('hidden')\r\n            caseDown[i].classList.toggle('hidden')\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://keyboard/./src/scripts/shift.js?");

/***/ }),

/***/ "./src/scripts/textarea.js":
/*!*********************************!*\
  !*** ./src/scripts/textarea.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBodyTextarea\": () => (/* binding */ createBodyTextarea)\n/* harmony export */ });\nfunction createBodyTextarea() {\r\n    let textarea = document.createElement(\"textarea\");\r\n    textarea.classList.add('body--textarea', 'textarea');\r\n    textarea.cols = 50;\r\n    textarea.rows = 5;\r\n    textarea.id = 'textarea';\r\n    return textarea;\r\n}\r\n\n\n//# sourceURL=webpack://keyboard/./src/scripts/textarea.js?");

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
/******/ 			id: moduleId,
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;