(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Button.js":
/*!*******************!*\
  !*** ./Button.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var SVGIcon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon").SVGIcon;

module.exports = React.createClass({
  displayName: 'ZRButton',
  getDefaultProps: function getDefaultProps() {
    return {
      className: '',
      type: 'button' //button, reset, submit

    };
  },
  getInitialState: function getInitialState() {
    return {
      loading: false
    };
  },
  __click: function __click(event) {
    if (this.props.disabled) {
      event.preventDefault();
    }

    event.owner = this;
    this.props.onClick && this.props.onClick(event, this);
  },
  loading: function loading(value) {
    this.setState({
      loading: value
    });
  },
  render: function render() {
    if (this.props.isHidden) {
      return null;
    }

    var _value = this.props.value || this.props.label;

    return /*#__PURE__*/React.createElement("button", {
      onClick: this.__click,
      className: znui.react.classname("zr-button", this.props.className, this.props.status, this.props.isActive ? "active" : ""),
      disabled: this.props.disabled || this.state.loading,
      "data-loading": this.state.loading,
      "data-focus": this.props.focus,
      style: this.props.style
    }, this.props.icon && /*#__PURE__*/React.createElement(SVGIcon, {
      icon: this.props.icon
    }), !!_value && /*#__PURE__*/React.createElement("span", {
      className: "value"
    }, _value), this.props.children);
  }
});

/***/ }),

/***/ "./Buttons.js":
/*!********************!*\
  !*** ./Buttons.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var Button = __webpack_require__(/*! ./Button */ "./Button.js");

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

module.exports = React.createClass({
  displayName: 'ZRButtons',
  getInitialState: function getInitialState() {
    return {
      loading: true
    };
  },
  __itemClick: function __itemClick(event, item, index) {
    event.data = item;
    event.index = index;
    event.sender = this;
    item.onClick && item.onClick(event, item, index);
    this.props.onClick && this.props.onClick(event, this);
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    return /*#__PURE__*/React.createElement(Button, _extends({}, item, {
      key: index,
      onClick: function onClick(event) {
        return _this.__itemClick(event, item, index);
      }
    }));
  },
  __onLoading: function __onLoading() {
    this.setState({
      loading: true
    });
  },
  __onFinished: function __onFinished() {
    this.setState({
      loading: false
    });
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-buttons", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement(znui.react.DataView, {
      data: this.props.data,
      itemRender: this.__itemRender,
      onLoading: this.__onLoading,
      onFinished: this.__onFinished
    }), this.state.loading && /*#__PURE__*/React.createElement(loader.Loader, {
      content: "...",
      loader: "circle",
      size: "size-smail",
      layout: "flex-row"
    }));
  }
});

/***/ }),

/***/ "./Tab.js":
/*!****************!*\
  !*** ./Tab.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var Button = __webpack_require__(/*! ./Button */ "./Button.js");

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

module.exports = React.createClass({
  displayName: 'ZRButtons',
  getInitialState: function getInitialState() {
    return {
      loading: true,
      actived: null
    };
  },
  __itemClick: function __itemClick(event, item, index) {
    event.data = item;
    event.index = index;
    event.sender = this;
    this.setState({
      actived: index
    });
    this.props.onClick && this.props.onClick(event, this);
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    return /*#__PURE__*/React.createElement(Button, _extends({}, item, {
      className: znui.react.classname(item.className, this.state.actived == index ? 'actived' : ''),
      key: index,
      onClick: function onClick(event) {
        return _this.__itemClick(event, item, index);
      }
    }));
  },
  __onLoading: function __onLoading() {
    this.setState({
      loading: true
    });
  },
  __onFinished: function __onFinished(data) {
    var _state = {
      loading: false
    };

    if (this.props.activeIndex != null && this.props.activeIndex < data.length) {
      _state.actived = this.props.activeIndex;

      this.__itemClick({}, data[this.props.activeIndex], this.props.activeIndex);
    }

    this.setState(_state);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-tab", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement(znui.react.DataView, {
      data: this.props.data,
      itemRender: this.__itemRender,
      onLoading: this.__onLoading,
      onFinished: this.__onFinished
    }), this.state.loading && /*#__PURE__*/React.createElement(loader.Loader, {
      content: "...",
      loader: "circle",
      size: "size-smail",
      layout: "flex-row"
    }));
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'Button': __webpack_require__(/*! ./Button */ "./Button.js"),
  'Buttons': __webpack_require__(/*! ./Buttons */ "./Buttons.js"),
  'Tab': __webpack_require__(/*! ./Tab */ "./Tab.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "znui-react-icon":
/*!***********************!*\
  !*** external "icon" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["icon"]; }());

/***/ }),

/***/ "znui-react-loader":
/*!*************************!*\
  !*** external "loader" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["loader"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL0J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vVGFiLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJTVkdJY29uIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJ0eXBlIiwiZ2V0SW5pdGlhbFN0YXRlIiwibG9hZGluZyIsIl9fY2xpY2siLCJldmVudCIsInByb3BzIiwiZGlzYWJsZWQiLCJwcmV2ZW50RGVmYXVsdCIsIm93bmVyIiwib25DbGljayIsInZhbHVlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJpc0hpZGRlbiIsIl92YWx1ZSIsImxhYmVsIiwicmVhY3QiLCJjbGFzc25hbWUiLCJzdGF0dXMiLCJpc0FjdGl2ZSIsInN0YXRlIiwiZm9jdXMiLCJzdHlsZSIsImljb24iLCJjaGlsZHJlbiIsIkJ1dHRvbiIsImxvYWRlciIsIl9faXRlbUNsaWNrIiwiaXRlbSIsImluZGV4IiwiZGF0YSIsInNlbmRlciIsIl9faXRlbVJlbmRlciIsIl9fb25Mb2FkaW5nIiwiX19vbkZpbmlzaGVkIiwiYWN0aXZlZCIsIl9zdGF0ZSIsImFjdGl2ZUluZGV4IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7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QTZCLFlBQU0sRUFBQyxRQUFwQztBQUE2QyxVQUFJLEVBQUMsWUFBbEQ7QUFBK0QsWUFBTSxFQUFDO0FBQXRFLE1BRnhCLENBREQ7QUFNQTtBQXhDaUMsQ0FBbEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNIQVIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2IsWUFBVUgsbUJBQU8sQ0FBQyw2QkFBRCxDQURKO0FBRWIsYUFBV0EsbUJBQU8sQ0FBQywrQkFBRCxDQUZMO0FBR2IsU0FBT0EsbUJBQU8sQ0FBQyx1QkFBRDtBQUhELENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLCtCQUErQixFQUFFLEk7Ozs7Ozs7Ozs7O0FDQTlDLGFBQWEsaUNBQWlDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTVkdJY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJykuU1ZHSWNvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJCdXR0b24nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dHlwZTogJ2J1dHRvbicgIC8vYnV0dG9uLCByZXNldCwgc3VibWl0XG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH1cblx0fSxcblx0X19jbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZih0aGlzLnByb3BzLmRpc2FibGVkKXtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHRcdGV2ZW50Lm93bmVyID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0bG9hZGluZzogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHZhbHVlXG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pc0hpZGRlbil7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy5sYWJlbDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9fY2xpY2t9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1idXR0b25cIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMuc3RhdHVzLCAodGhpcy5wcm9wcy5pc0FjdGl2ZT9cImFjdGl2ZVwiOlwiXCIpKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR8fHRoaXMuc3RhdGUubG9hZGluZ30gZGF0YS1sb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGRhdGEtZm9jdXM9e3RoaXMucHJvcHMuZm9jdXN9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0eyB0aGlzLnByb3BzLmljb24gJiYgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29ufSAvPiB9XG5cdFx0XHRcdHsgISFfdmFsdWUgJiYgPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj57X3ZhbHVlfTwvc3Bhbj4gfVxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0PC9idXR0b24+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEJ1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJCdXR0b25zJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH07XG5cdH0sXG5cdF9faXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0sIGluZGV4KXtcblx0XHRldmVudC5kYXRhID0gaXRlbTtcblx0XHRldmVudC5pbmRleCA9IGluZGV4O1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0aXRlbS5vbkNsaWNrICYmIGl0ZW0ub25DbGljayhldmVudCwgaXRlbSwgaW5kZXgpO1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxCdXR0b24gey4uLml0ZW19IGtleT17aW5kZXh9IG9uQ2xpY2s9eyhldmVudCk9PnRoaXMuX19pdGVtQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KX0gLz5cblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWJ1dHRvbnNcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IG9uTG9hZGluZz17dGhpcy5fX29uTG9hZGluZ30gb25GaW5pc2hlZD17dGhpcy5fX29uRmluaXNoZWR9IC8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGxvYWRlci5Mb2FkZXIgY29udGVudD1cIi4uLlwiIGxvYWRlcj1cImNpcmNsZVwiIHNpemU9XCJzaXplLXNtYWlsXCIgbGF5b3V0PVwiZmxleC1yb3dcIiAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBCdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQnV0dG9ucycsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRhY3RpdmVkOiBudWxsXG5cdFx0fTtcblx0fSxcblx0X19pdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgaXRlbSwgaW5kZXgpe1xuXHRcdGV2ZW50LmRhdGEgPSBpdGVtO1xuXHRcdGV2ZW50LmluZGV4ID0gaW5kZXg7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnNldFN0YXRlKHsgYWN0aXZlZDogaW5kZXggfSk7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRyZXR1cm4gPEJ1dHRvbiB7Li4uaXRlbX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShpdGVtLmNsYXNzTmFtZSwgKHRoaXMuc3RhdGUuYWN0aXZlZD09aW5kZXg/J2FjdGl2ZWQnOicnKSl9IGtleT17aW5kZXh9IG9uQ2xpY2s9eyhldmVudCk9PnRoaXMuX19pdGVtQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KX0gLz5cblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX3N0YXRlID0ge1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9O1xuXHRcdGlmKHRoaXMucHJvcHMuYWN0aXZlSW5kZXghPW51bGwgJiYgdGhpcy5wcm9wcy5hY3RpdmVJbmRleCA8IGRhdGEubGVuZ3RoKSB7XG5cdFx0XHRfc3RhdGUuYWN0aXZlZCA9IHRoaXMucHJvcHMuYWN0aXZlSW5kZXg7XG5cdFx0XHR0aGlzLl9faXRlbUNsaWNrKHt9LCBkYXRhW3RoaXMucHJvcHMuYWN0aXZlSW5kZXhdLCB0aGlzLnByb3BzLmFjdGl2ZUluZGV4KTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZShfc3RhdGUpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFiXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSBvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9IG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfSAvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsb2FkZXIuTG9hZGVyIGNvbnRlbnQ9XCIuLi5cIiBsb2FkZXI9XCJjaXJjbGVcIiBzaXplPVwic2l6ZS1zbWFpbFwiIGxheW91dD1cImZsZXgtcm93XCIgLz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnQnV0dG9uJzogcmVxdWlyZSgnLi9CdXR0b24nKSxcbiAgICAnQnV0dG9ucyc6IHJlcXVpcmUoJy4vQnV0dG9ucycpLFxuICAgICdUYWInOiByZXF1aXJlKCcuL1RhYicpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpY29uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=