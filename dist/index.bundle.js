"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkkanban_board"] = self["webpackChunkkanban_board"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\nhtml {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  padding: 1rem;\\r\\n  background: rgb(180, 201, 180);\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.nav_items {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 1rem;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 80%;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 3fr);\\r\\n  margin: 5rem auto;\\r\\n  padding: 1rem;\\r\\n  place-items: center;\\r\\n}\\r\\n\\r\\n.card-a {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  border: 1px solid gold;\\r\\n  width: 70%;\\r\\n  padding: 2rem 1rem;\\r\\n  margin: 1rem 0;\\r\\n  gap: 1rem;\\r\\n  border-radius: 20px;\\r\\n  transition: 1s;\\r\\n}\\r\\n\\r\\n.card-a:hover {\\r\\n  cursor: pointer;\\r\\n  box-shadow: 2px 2px 2px 2px;\\r\\n}\\r\\n\\r\\n.space-like {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\n.btns {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.fa-heart:hover {\\r\\n  color: gold;\\r\\n}\\r\\n\\r\\n.fa-heart:active {\\r\\n  color: green;\\r\\n  cursor: wait;\\r\\n}\\r\\n\\r\\n.reserve,\\r\\n.comment {\\r\\n  height: 2rem;\\r\\n}\\r\\n\\r\\n.reserve:hover,\\r\\n.comment:hover {\\r\\n  border-radius: 0.4rem;\\r\\n  box-shadow: 2px 2px 2px 0;\\r\\n}\\r\\n\\r\\n.meal-details {\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  -webkit-transform: translate(-50%, -50%);\\r\\n  -moz-transform: translate(-50%, -50%);\\r\\n  -ms-transform: translate(-50%, -50%);\\r\\n  -o-transform: translate(-50%, -50%);\\r\\n  color: #fff;\\r\\n  background: rgb(90, 86, 86);\\r\\n  border-radius: 1rem;\\r\\n  -webkit-border-radius: 1rem;\\r\\n  -moz-border-radius: 1rem;\\r\\n  -ms-border-radius: 1rem;\\r\\n  -o-border-radius: 1rem;\\r\\n  width: 40%;\\r\\n  height: 90%;\\r\\n  overflow-y: scroll;\\r\\n  display: none;\\r\\n  padding: 2rem 0;\\r\\n}\\r\\n\\r\\n.meal-details::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n.meal-details::-webkit-scrollbar-thumb {\\r\\n  background: #f0f0f0;\\r\\n  border-radius: 2rem;\\r\\n  -webkit-border-radius: 2rem;\\r\\n  -moz-border-radius: 2rem;\\r\\n  -ms-border-radius: 2rem;\\r\\n  -o-border-radius: 2rem;\\r\\n}\\r\\n\\r\\n.showRecipe {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.meal-details-content {\\r\\n  margin: 2rem;\\r\\n}\\r\\n\\r\\n.meal-details-content p:not(.recipe-category) {\\r\\n  padding: 1rem 0;\\r\\n}\\r\\n\\r\\n.recipe-close-btn {\\r\\n  position: absolute;\\r\\n  right: 2rem;\\r\\n  top: 2rem;\\r\\n  font-size: 1.8rem;\\r\\n  background: #fff;\\r\\n  border: none;\\r\\n  width: 35px;\\r\\n  height: 35px;\\r\\n  border-radius: 50%;\\r\\n  -webkit-border-radius: 50%;\\r\\n  -moz-border-radius: 50%;\\r\\n  -ms-border-radius: 50%;\\r\\n  -o-border-radius: 50%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  opacity: 0.9;\\r\\n}\\r\\n\\r\\n.recipe-title {\\r\\n  letter-spacing: 1px;\\r\\n  padding-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.recipe-category {\\r\\n  /* background: #fff; */\\r\\n  font-weight: 600;\\r\\n  color: var(--tenne-tawny);\\r\\n  display: inline-block;\\r\\n  padding: 0.2rem 0.5rem;\\r\\n  border-radius: 0.3rem;\\r\\n  -webkit-border-radius: 0.3rem;\\r\\n  -moz-border-radius: 0.3rem;\\r\\n  -ms-border-radius: 0.3rem;\\r\\n  -o-border-radius: 0.3rem;\\r\\n  width: 100%;\\r\\n  height: 2.5rem;\\r\\n}\\r\\n\\r\\n#comment_list {\\r\\n  background: #000;\\r\\n  height: 5rem;\\r\\n  margin-top: 0;\\r\\n  overflow-y: scroll;\\r\\n  gap: 0.5rem;\\r\\n  padding: 0.6rem 1rem;\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n#comment_list li {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 3rem;\\r\\n}\\r\\n\\r\\n.recipe-instruct {\\r\\n  padding: 1rem 0;\\r\\n}\\r\\n\\r\\n.recipe-meal-img img {\\r\\n  width: 100px;\\r\\n  height: 100px;\\r\\n  border-radius: 50%;\\r\\n  -webkit-border-radius: 50%;\\r\\n  -moz-border-radius: 50%;\\r\\n  -ms-border-radius: 50%;\\r\\n  -o-border-radius: 50%;\\r\\n  margin: 0 auto;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.recipe-link {\\r\\n  margin: 1.4rem 0;\\r\\n}\\r\\n\\r\\n.recipe-link a {\\r\\n  color: #fff;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 700;\\r\\n  transition: all 0.4s linear;\\r\\n  -webkit-transition: all 0.4s linear;\\r\\n  -moz-transition: all 0.4s linear;\\r\\n  -ms-transition: all 0.4s linear;\\r\\n  -o-transition: all 0.4s linear;\\r\\n}\\r\\n\\r\\n.recipe-link a:hover {\\r\\n  opacity: 0.8;\\r\\n}\\r\\n\\r\\n/* Form */\\r\\n.comment__form {\\r\\n  margin-top: 0.5rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 50%;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.input__field {\\r\\n  height: 2rem;\\r\\n  width: 40%;\\r\\n}\\r\\n\\r\\n.text-area {\\r\\n  height: 5rem;\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.form_btn {\\r\\n  height: 2rem;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  margin-top: 4rem;\\r\\n  justify-content: space-around;\\r\\n  height: 4rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanban-board/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://kanban-board/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kanban-board/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kanban-board/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kanban-board/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kanban-board/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kanban-board/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kanban-board/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kanban-board/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kanban-board/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst element = document.querySelector('#container');\nconst popupWindow = document.querySelector('.meal-details');\n\nconst mealUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';\n\nconst fetchRecipes = async (url) => {\n  const res = await fetch(url);\n  const data = await res.json();\n  return data;\n};\nconst fetchData = async (url) => {\n  const data = await fetchRecipes(url);\n  const likes = await (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const storage = [];\n  data.categories.forEach((item) => {\n    storage.push({\n      ...likes.find(\n        (innerItem) => innerItem.item_id.toString() === item.idCategory.toString(),\n      ),\n      ...item,\n    });\n  });\n  return storage;\n};\n\nwindow.onload = async () => {\n  const storage = await fetchData(mealUrl);\n  (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(storage, element);\n  element.addEventListener('click', async (e) => {\n    if (e.target.className === 'fa fa-heart') {\n      const likeContainer = e.target.parentNode.parentNode.querySelector('.show');\n      await (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_0__.addLikes)(e.target.id);\n      const newVal = +likeContainer.innerHTML + 1;\n      likeContainer.innerHTML = newVal;\n    } else if (e.target.className === 'comment') {\n      const recipes = await fetchRecipes(mealUrl);\n      (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.id, popupWindow, recipes);\n    }\n  });\n};\n\n\n//# sourceURL=webpack://kanban-board/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComments\": () => (/* binding */ addComments),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\nconst commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eJ0dYt3woHnL6Sz1FyVG/';\n\nconst getComments = async (id) => {\n  const URL = `${commentUrl}comments?item_id=${id}`;\n  const response = await fetch(URL);\n  return response.json();\n};\n\nconst addComments = async (data) => {\n  const URL = `${commentUrl}comments`;\n  const response = await fetch(URL, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  });\n  return response.text();\n};\n\n\n\n\n//# sourceURL=webpack://kanban-board/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (array) => {\n  const { length } = array;\n  return length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://kanban-board/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst likesCounter = (array) => {\n  const { length } = array;\n  return length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likesCounter);\n\n\n//# sourceURL=webpack://kanban-board/./src/modules/itemsCounter.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLikes\": () => (/* binding */ addLikes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\nconst apiKey = 'eJ0dYt3woHnL6Sz1FyVG';\nconst getLikes = async () => {\n  const res = await fetch(`${apiUrl}/${apiKey}/likes`);\n  const data = await res.json();\n  return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\nconst addLikes = async (id) => {\n  await fetch(\n    ' https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eJ0dYt3woHnL6Sz1FyVG/likes',\n    {\n      method: 'POST',\n      headers: { 'Content-type': 'application/json' },\n      body: JSON.stringify({\n        item_id: id,\n      }),\n    },\n  );\n};\n// https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eJ0dYt3woHnL6Sz1FyVG/likes\n\n\n//# sourceURL=webpack://kanban-board/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\r\n\r\n\r\nlet comments = [];\r\n\r\nconst getComCounter = () => {\r\n  const span = document.querySelector('#commentCounter');\r\n  const comList = document.querySelector('#comment_list');\r\n  const result = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(comList.children);\r\n  if (comments.length > 0) {\r\n    span.innerHTML = result;\r\n  }\r\n};\r\n\r\nconst fetchComments = async (id) => {\r\n  const cList = document.querySelector('#comment_list');\r\n  await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id).then((data) => {\r\n    if (data.length > 0) {\r\n      comments = data;\r\n      const list = comments.map((item) => `<li>\r\n        <span>${item.creation_date}</span>\r\n        <span>${item.username}</span>\r\n        <span>${item.comment}</span>\r\n        </li>`);\r\n      cList.innerHTML = list.join('');\r\n    } else {\r\n      const span = document.querySelector('#commentCounter');\r\n      span.innerHTML = '0';\r\n      throw Error('No comment available');\r\n    }\r\n    getComCounter();\r\n  }).catch((error) => {\r\n    const list = `<li>\r\n      ${error.message}\r\n    </li>`;\r\n    cList.innerHTML = list;\r\n  });\r\n};\r\n\r\nconst createComment = (commentID) => {\r\n  const formBtn = document.querySelector('.form_btn');\r\n  formBtn.addEventListener('click', () => {\r\n    const id = commentID;\r\n    const name = document.querySelector('#name').value;\r\n    const comment = document.querySelector('#input').value;\r\n    const cObj = {\r\n      item_id: id,\r\n      username: name,\r\n      comment,\r\n    };\r\n    (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.addComments)(cObj).then(() => {\r\n      fetchComments(id);\r\n      document.querySelector('#name').value = '';\r\n      document.querySelector('#input').value = '';\r\n    });\r\n  });\r\n};\r\n\r\nconst renderPopUp = (id, element, data) => {\r\n  element.style.display = 'flex';\r\n  data.categories.forEach((cat) => {\r\n    if (id.toString() === cat.idCategory.toString()) {\r\n      element.innerHTML = `\r\n    <button type=\"button\" class=\"btn recipe-close-btn\" id=\"recipe-close-btn\">\r\n    <i class=\"fas fa-times\"></i>\r\n    </button>\r\n    <div class=\"meal-details-content\">\r\n    <img src=${cat.strCategoryThumb} alt=\"\">\r\n    <h2 class=\"recipe-title\">${cat.strCategory}</h2>\r\n    <div class=\"recipe-instruct\">\r\n      <h3>Discriptions:</h3>\r\n      <p>${cat.strCategoryDescription}</p>\r\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam voluptatibus ad obcaecati magnam,\r\n        esse numquam nisi ut adipisci in?</p>\r\n    </div>\r\n    <div class=\"comment__container\">\r\n    <p class=\"recipe-category\"></p>\r\n    <ul id='comment_list'></ul>\r\n      <h2 class=\"post__comment__title\">Comments (<span id='commentCounter'></span>)</h2>\r\n      <div class=\"comments\">\r\n        <div class=\"comments__item post__comment\">\r\n        </div>\r\n      </div>\r\n      <form action='' class=\"comment_form\">\r\n        <input name='name' class=\"input_field\" type=\"text\" id=\"name\" placeholder=\"Your name\" required>\r\n        <textarea class=\"text-area\" id=\"input\" cols=\"30\" rows=\"10\" placeholder=\"Your message\" required></textarea>\r\n        <button type='button' class=\"form_btn\">Comment</button>\r\n        <div class=\"message\">\r\n          <p class=\"success\">Form successfully submited</p>\r\n          <p class=\"danger\">Please fill in the form</p>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n`;\r\n      fetchComments(cat.idCategory);\r\n      createComment(cat.idCategory);\r\n    }\r\n  });\r\n  // const comList = document.querySelector('#comment_list');\r\n  const popupCloseBtn = document.querySelector('.recipe-close-btn');\r\n  popupCloseBtn.addEventListener('click', () => {\r\n    element.style.display = 'none';\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPopUp);\r\n\n\n//# sourceURL=webpack://kanban-board/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _itemsCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemsCounter.js */ \"./src/modules/itemsCounter.js\");\n\n\nconst getlikesCounter = (item) => {\n  const span = document.querySelector('#likesCounter');\n  const result = (0,_itemsCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item);\n  span.textContent = result;\n};\n\nconst render = (data, element) => {\n  element.innerHTML = '';\n  data.forEach((cat) => {\n    element.innerHTML += `\n      <div id=\"${cat.idCategory}\" class=\"card-a\">\n      <img src=\"${cat.strCategoryThumb}\" alt=\"Picture\">\n        <div class=\"space-like\">\n          <p>${cat.strCategory}</p>\n          <i class=\"fa fa-heart\" id=${cat.idCategory} aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"like\">\n          <label for=\"text\" class=\"show\" >${cat.likes || 0}</label>\n          <label for=\"text\">Likes</label>\n        </div>\n        <div class=\"btns\">\n        <button type=\"button\" id=${\n  cat.idCategory\n} class=\"reserve\">Reserve</button>\n        <button type=\"button\" id=${\n  cat.idCategory\n} class=\"comment\">Comments</button>\n        </div>\n        </div>\n        `;\n  });\n  getlikesCounter(element.children);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n\n//# sourceURL=webpack://kanban-board/./src/modules/render.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);