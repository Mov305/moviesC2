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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n  height: 100vh;\\r\\n  justify-content: space-between;\\r\\n  font-size: larger;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border: 3px solid black;\\r\\n  width: calc(100% - 20px);\\r\\n  margin: 10px;\\r\\n  padding: 10px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#navList {\\r\\n  display: flex;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n#navList > li {\\r\\n  padding: 0 15px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popupBackground {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: rgb(0 0 0 / 70%);\\r\\n  z-index: 1000;\\r\\n  /* position: fixed; */\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  backdrop-filter: blur(10px);\\r\\n}\\r\\n\\r\\n.popUpWindow {\\r\\n  width: 76%;\\r\\n  max-height: 93%;\\r\\n  margin: auto;\\r\\n  padding: 15px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  position: absolute;\\r\\n  left: 50%;\\r\\n  top: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  background: rgba(0, 0, 0, 0.636);\\r\\n  box-shadow: 0 48px 48px rgb(137, 70, 37);\\r\\n  color: rgb(255, 255, 255);\\r\\n  gap: 5px;\\r\\n}\\r\\n\\r\\n.popupImg {\\r\\n  width: 35%;\\r\\n}\\r\\n\\r\\n.showContent {\\r\\n  padding: 15px;\\r\\n  width: 60%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.showInfo {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 4px;\\r\\n  padding-top: 10px;\\r\\n  font-size: 15px;\\r\\n  padding-top: 10px;\\r\\n  padding-bottom: 10px;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.showTitle {\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\n.showGenre {\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.showDates {\\r\\n  width: 45%;\\r\\n  padding: 5px;\\r\\n  text-align: center;\\r\\n  font-size: 13px;\\r\\n  font-weight: lighter;\\r\\n  color: #fff;\\r\\n  background-color: rgb(255, 134, 36);\\r\\n  border-radius: 40px;\\r\\n}\\r\\n\\r\\n.commentSection {\\r\\n  margin: 30px;\\r\\n}\\r\\n\\r\\n.commentTitle {\\r\\n  font-size: 18px;\\r\\n  font-weight: 100;\\r\\n  color: rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\n#myComments {\\r\\n  height: 70px;\\r\\n  width: 70%;\\r\\n  overflow-y: scroll;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n#myComments li {\\r\\n  background-color: rgba(255, 255, 255, 0.162);\\r\\n  color: #fff;\\r\\n  margin-bottom: 5px;\\r\\n  padding: 3px 18px 5px;\\r\\n  border-radius: 40px;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n.createComment {\\r\\n  padding: 10px 10px 0px 0px;\\r\\n}\\r\\n\\r\\n#inputTitle {\\r\\n  font-size: 18px;\\r\\n  font-weight: 100;\\r\\n  color: rgb(255, 255, 255);\\r\\n  padding-bottom: 5px;\\r\\n}\\r\\n\\r\\n#inputSection {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\ninput[type=text] {\\r\\n  width: 100%;\\r\\n  padding: 5px;\\r\\n  color: #fff;\\r\\n  border: 1px solid rgb(255, 134, 36);\\r\\n  outline: none;\\r\\n  background-color: rgba(0, 0, 0, 0.105);\\r\\n  transition: all 0.1s ease;\\r\\n}\\r\\n\\r\\ninput::placeholder {\\r\\n  color: #fff;\\r\\n  font-size: 15px;\\r\\n  font-weight: 100;\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  width: 100%;\\r\\n  height: 100px;\\r\\n  padding: 5px;\\r\\n  resize: none;\\r\\n  border: 1px solid rgb(255, 134, 36);\\r\\n  background-color: rgba(0, 0, 0, 0.105);\\r\\n  color: #fff;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\ntextarea::placeholder {\\r\\n  color: #fff;\\r\\n  font-size: 15px;\\r\\n  font-weight: 100;\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n}\\r\\n\\r\\ninput[type=submit] {\\r\\n  width: 22%;\\r\\n  background-color: rgb(255, 134, 36);\\r\\n  color: #fff;\\r\\n  margin-top: 5px;\\r\\n  padding: 8px;\\r\\n  border: none;\\r\\n  font-size: 15px;\\r\\n  font-weight: 700;\\r\\n  transition: all 0.5s ease;\\r\\n}\\r\\n\\r\\ninput[type=submit]:hover {\\r\\n  background-color: rgb(227, 120, 33);\\r\\n}\\r\\n\\r\\ninput[type=submit]:active {\\r\\n  background-color: rgb(219, 98, 0);\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  width: 5px;\\r\\n  }\\r\\n  \\r\\n  ::-webkit-scrollbar-track {\\r\\n  box-shadow: inset 0 0 5px grey; \\r\\n  border-radius: 10px;\\r\\n  }\\r\\n  \\r\\n  ::-webkit-scrollbar-thumb {\\r\\n  background:rgba(255, 255, 255, 0.399); \\r\\n  border-radius: 10px;\\r\\n  }\\r\\n  \\r\\n  ::-webkit-scrollbar-thumb:hover {\\r\\n  background:rgb(227, 120, 33);\\r\\n  }\\r\\n\\r\\n  @media only screen and (max-width: 768px) {\\r\\n    .popUpWindow {\\r\\n      width: 76%;\\r\\n      max-height: 96%;\\r\\n      flex-direction: column;\\r\\n    }\\r\\n\\r\\n    .showContent {\\r\\n      padding: 15px;\\r\\n      width: 100%;\\r\\n      gap: 10px;\\r\\n    }\\r\\n\\r\\n    .showInfo {\\r\\n      padding-top: 10px;\\r\\n      font-size: 2px;\\r\\n      padding-top: 0px;\\r\\n      padding-bottom: 0px;\\r\\n      font-size: 12px;\\r\\n    }\\r\\n\\r\\n    .showDates {\\r\\n      width: 70%;\\r\\n      padding: 5px;\\r\\n      font-size: 10px;\\r\\n    }\\r\\n\\r\\n    .#myComments {\\r\\n      height: 20px;\\r\\n      width: 40%;\\r\\n      overflow-y: scroll;\\r\\n      padding: 5px;\\r\\n    }\\r\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movies-app/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://movies-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://movies-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://movies-app/./src/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://movies-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://movies-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://movies-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://movies-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://movies-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://movies-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _modules_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/movies.js */ \"./src/javascript/modules/movies.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/javascript/modules/popup.js\");\n\r\n\r\n\r\n\r\n_modules_movies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchMovies();\r\n(0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://movies-app/./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/modules/movies.js":
/*!******************************************!*\
  !*** ./src/javascript/modules/movies.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Movies {\r\n  BaseURL = 'https://api.tvmaze.com/search/shows?q=';\r\n\r\n  async fetchMovies(search = 'marvel', page = '1') {\r\n    const api = `${this.BaseURL}${search}&page=${page}`;\r\n    try {\r\n      const res = await fetch(api);\r\n      const movies = await res.json();\r\n      console.log(movies);\r\n      return movies;\r\n    } catch (error) {\r\n      return error;\r\n    }\r\n  }\r\n}\r\n\r\nconst movies = new Movies();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movies);\r\n\n\n//# sourceURL=webpack://movies-app/./src/javascript/modules/movies.js?");

/***/ }),

/***/ "./src/javascript/modules/popup.js":
/*!*****************************************!*\
  !*** ./src/javascript/modules/popup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ myShowsPopup)\n/* harmony export */ });\n/* harmony import */ var _movies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies.js */ \"./src/javascript/modules/movies.js\");\n\r\n\r\nconst myBody = document.querySelector('body');\r\nconst myAppId = 'eNh0z3Fwr51ftZcGUctd';\r\nconst myApiURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${myAppId}/comments`;\r\n/* const myApiGet = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eNh0z3Fwr51ftZcGUctd/comments?item_id=item${i}`; */\r\n\r\nconst myCommentList = document.getElementById('myComments');\r\nconst userName = document.getElementById('myUser');\r\nconst userComment = document.getElementById('myInputComment');\r\n\r\nconst myShowsPopup = async () => {\r\n  const myShowsGet = await _movies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchMovies();\r\n  myShowsGet.forEach((show) => {\r\n    myBody.innerHTML = `<div class=\"popupBackground\">\r\n    <section class=\"popUpWindow\">\r\n      <img src=\"${show.show.image.original}\" alt=\"#\" class=\"popupImg\">\r\n\r\n      <div class=\"showContent\">\r\n      <div class=\"showInfo\">\r\n      <h2 class=\"showTitle\">${show.show.name}</h2>\r\n      <p id=\"mySum\">${show.show.summary}</p>\r\n      <p class=\"showDates\">Premiered : ${show.show.premiered} - Ended : ${show.show.ended}</p>\r\n      </div>\r\n\r\n      <div class\"commentSection\">\r\n        <h3 class=\"commentTitle\">Comments</h3>\r\n        <ul id=\"myComments\">\r\n        <li>hello</li>\r\n        <li>hello</li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"createComment\">\r\n        <h3 id=\"inputTitle\">Add a Comment</h3>\r\n        <form action=\"#\" method=\"POST\" id=\"inputSection\">\r\n          <input id=\"myUser\"type=\"text\" placeholder=\"Your name\" required>\r\n          <textarea id=\"myInputComment\" name=\"user_name\" id=\"user-message\" maxlength=\"500\" placeholder=\"Your insights\" required></textarea>\r\n          <input type=\"submit\" value=\"Comment\" id=\"commentBtn\">\r\n        </form>\r\n      </div>\r\n     </div>\r\n    </section>\r\n  </div>`;\r\n\r\n    const sendComment = async () => {\r\n      try {\r\n        const myResponse = await fetch(myApiURL, {\r\n          method: 'POST',\r\n          body: JSON.stringify({\r\n            item_id: show.show.id.value,\r\n            username: userName.value,\r\n            comment: userComment.value,\r\n          }),\r\n          headers: {\r\n            'Content-type': 'application/json; charset=UTF-8',\r\n          },\r\n        });\r\n        userName.value = '';\r\n        userComment.value = '';\r\n        return await myResponse.json();\r\n      } catch (error) {\r\n        return error;\r\n      }\r\n    };\r\n\r\n      const displayComments = () => {\r\n      const myListComments = sendComment();\r\n      myCommentList.innerHTML = '';\r\n      myListComments.forEach((showC) => {\r\n        myCommentList.innerHTML += `<li>${showC.username} : ${showC.comment}</li>`;\r\n      });\r\n    };\r\n\r\n    myCommentList.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n      displayComments();\r\n      sendComment();\r\n    });\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://movies-app/./src/javascript/modules/popup.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/index.js");
/******/ 	
/******/ })()
;