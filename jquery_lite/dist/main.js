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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n\tconstructor(arr) {\n\t\tthis.arr = arr;\n\t}\n\n\thtml(string) {\n\t\tif (typeof string === 'string') {\n\t\t\tthis.arr.forEach(node => {\n\t\t\t\tnode.innerHTML = string;\n\t\t\t});\n\t\t} else if (this.arr.length > 0) {\n\t\t\treturn this.arr[0].innerHTML;\n\t\t}\n\t}\n\n\tempty() {\n\t\tthis.html('');\n\t}\n\n\tappend(children) {\n\t\tif (this.arr.length === 0) {\n\t\t\treturn;\n\t\t}\n\t\tif (typeof children === 'string') {\n\t\t\tthis.arr.forEach(node => node.innerHTML += children);\n\t\t}\n\t\tif (children instanceof Object) {\n\t\t\tif (!(children instanceof DOMNodeCollection)) {\n\t\t\t\tchildren = window.$l(children);\n\t\t\t}\n\t\t\tthis.arr.forEach(node => {\n\t\t\t\tchildren.arr.forEach(child => {\n\t\t\t\t\tnode.appendChild(child.cloneNode(true));\n\t\t\t\t});\n\t\t\t});\n\t\t}\n\t}\n\n\tattr(attrib, value) {\n\t\tif (attrib === undefined || this.arr.length === 0) {\n\t\t\treturn;\n\t\t}\n\n\t\tif (value !== undefined) {\n\t\t\tthis.arr.forEach(node => {\n\t\t\t\tnode.setAttribute(attrib, value);\n\t\t\t});\n\t\t} else {\n\t\t\treturn this.arr[0].getAttribute(attrib);\n\t\t}\n\t}\n\n\taddClass(classes) {\n\t\tclasses = classes.split(' ');\n\t\tthis.arr.forEach(node => {\n\t\t\tnode.classList.add(...classes);\n\t\t});\n\t}\n\n\tremoveClass(classes) {\n\t\tclasses = classes.split(' ');\n\t\tthis.arr.forEach(node => {\n\t\t\tnode.classList.remove(...classes);\n\t\t});\n\t}\n\n\tchildren() {\n\t\tlet arr = [];\n\t\tthis.arr.forEach(node => {\n\t\t\tarr.push(...Array.from(node.children));\n\t\t});\n\t\treturn new DOMNodeCollection(arr);\n\t}\n\n\tparent() {\n\t\tlet arr = [];\n\t\tthis.arr.forEach(node => {\n\t\t\tif (!node.parentNode.visited) {\n\t\t\t\tarr.push(node.parentNode);\n\t\t\t\tnode.parentNode.visited = true;\n\t\t\t}\n\t\t});\n\t\treturn new DOMNodeCollection(arr);\n\t}\n\n\tfind(selector) {\n\t\tlet arr = [];\n\t\tthis.arr.forEach(node => {\n\t\t\tarr = arr.concat(Array.from(node.querySelectorAll(selector)));\n\t\t});\n\t\treturn new DOMNodeCollection(arr);\n\t}\n\n\tremove() {\n\t\tthis.arr.forEach(node => {\n\t\t\tnode.remove();\n\t\t});\n\t}\n\n\t// Not handling event delegation\n\ton(events, callback) {\n\t\tevents = events.split(' ');\n\t\tthis.arr.forEach(node => {\n\t\t\tevents.forEach(event => {\n\t\t\t\tnode.addEventListener(event, callback);\n\t\t\t\tnode.callbacks = node.callbacks || {};\n\t\t\t\tif (node.callbacks[event]) {\n\t\t\t\t\tnode.callbacks[event].push(callback);\n\t\t\t\t} else {\n\t\t\t\t\tnode.callbacks[event] = [callback];\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t}\n\n\t// In hindsight here could have split into multiple functions, then used\n\t// said functions to help do other functions to keep it DRY.\n\toff(events, callback) {\n\t\tif (events) {\n\t\t\tevents = events.split(' ');\n\t\t}\n\t\tif (events && callback) {\n\t\t\tthis.arr.forEach(node => {\n\t\t\t\tevents.forEach(event => {\n\t\t\t\t\tnode.removeEventListener(event, callback);\n\t\t\t\t\tlet i = node.callbacks[event].indexOf(callback);\n\t\t\t\t\tnode.callbacks[event].splice(i, 1);\n\t\t\t\t});\n\t\t\t});\n\t\t} else if (events) {\n\t\t\tthis.arr.forEach(node => {\n\t\t\t\tevents.forEach(event => {\n\t\t\t\t\tlet callbacks = node.callbacks[event];\n\t\t\t\t\tnode.callbacks[event] = [];\n\t\t\t\t\tcallbacks.forEach(callback => {\n\t\t\t\t\t\tnode.removeEventListener(event, callback);\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t});\n\t\t} else {\n\t\t\tthis.arr.forEach(node => {\n\t\t\t\tlet obj = node.callbacks;\n\t\t\t\tfor (const event in obj) {\n\t\t\t\t\tlet callbacks = obj[event];\n\t\t\t\t\tcallbacks.forEach(callback => {\n\t\t\t\t\t\tnode.removeEventListener(event, callback);\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t\t// node.outerHTML = node.outerHTML; -> This broke on/off for some reason\n\t\t\t\t// on the second iteration...\n\t\t\t\tnode.callbacks = {};\n\t\t\t});\n\t\t}\n\t}\n}\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = arg => {\n\tlet arr = [];\n\n\tif (arg instanceof HTMLElement) {\n\t\tarr = [arg];\n\t} else {\n\t\tlet nodeList = document.querySelectorAll(arg);\n\t\tnodeList.forEach(node => {\n\t\t\tarr.push(node);\n\t\t});\n\t}\n\treturn new DomNodeCollection(arr);\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });