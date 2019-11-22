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

/***/ "./src/Inbox.js":
/*!**********************!*\
  !*** ./src/Inbox.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\n\nInbox = {};\n\nInbox.render = function() {\n\tlet ul = document.createElement('ul');\n\tul.className = 'messages';\n\tMessageStore.getInboxMessages().forEach(message => {\n\t\tmessageNode = this.renderMessage(message);\n\t\tul.appendChild(messageNode);\n\t});\n\treturn ul;\n};\n\nInbox.renderMessage = function (message) {\n\tlet li = document.createElement('li');\n\tli.className = 'message';\n\tli.innerHTML = `\n\t<span class=\"from\">${message.from}</span>\n\t<span class=\"subject\">${message.subject}</span>\n\t<span class=\"body\">${message.body}</span>\n\t`;\n\treturn li;\n};\n\nmodule.exports = Inbox;\n\n\n//# sourceURL=webpack:///./src/Inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\nconst Inbox = __webpack_require__(/*! ./Inbox.js */ \"./src/Inbox.js\");\n\nconst routes = {\n\tinbox: Inbox\n};\n\ndocument.addEventListener('DOMContentLoaded', event => {\n\tlet eles = document.querySelectorAll('.sidebar-nav li');\n\tlet content = document.querySelector('.content');\n\tnew Router(content, routes);\n\tlocation.hash = \"#inbox\";\n\teles.forEach(ele => {\n\t\tele.addEventListener('click', event => {\n\t\t\twindow.location.hash = ele.innerText.toLowerCase();\n\t\t});\n\t});\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/message_store.js":
/*!******************************!*\
  !*** ./src/message_store.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const messages = {\n\tsent : [],\n\tinbox : []\n};\n\nconst message1 = {\n\tto: \"friend@mail.com\",\n\tsubject: \"Check this out\",\n\tbody: \"It's so cool\"\n};\nconst message2 = {\n\tto: \"person@mail.com\",\n\tsubject: \"zzz\",\n\tbody: \"so booring\"\n};\nconst message3 = {\n\tfrom: \"grandma@mail.com\",\n\tsubject: \"Fwd: Fwd: Fwd: Check this out\",\n\tbody:\n\t\t\"Stay at home mom discovers cure for leg cramps. Doctors hate her\"\n};\nconst message4 = {\n\tfrom: \"person@mail.com\",\n\tsubject: \"Questionnaire\",\n\tbody: \"Take this free quiz win $1000 dollars\"\n};\n\nmessages.sent.push(message1, message2);\nmessages.inbox.push(message3, message4);\n\nMessageStore = {\n\tgetInboxMessages : () => messages.inbox,\n\tgetSentMessages : () => messages.sent\n};\n\nmodule.exports = MessageStore;\n\n\n//# sourceURL=webpack:///./src/message_store.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Router {\n\tconstructor(node, routes) {\n\t\tthis.node = node;\n\t\tthis.routes = routes;\n\t\tthis.start();\n\t}\n\n\tstart() {\n\t\tthis.render();\n\t\twindow.addEventListener('hashchange', _event => this.render());\n\t}\n\n\tactiveRoute() {\n\t\tlet locationStr = window.location.hash\n\t\treturn this.routes[locationStr.slice(1, locationStr.length)];\n\t}\n\n\trender() {\n\t\tlet component = this.activeRoute();\n\t\tthis.node.innerHTML = \"\";\n\t\tif (component) {\n\t\t\tlet componentNode = component.render();\n\t\t\tthis.node.appendChild(componentNode);\n\t\t}\n\t}\n}\n\nmodule.exports = Router;\n\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ })

/******/ });