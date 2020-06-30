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
      "data-focus": this.props.focus
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL0J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vVGFiLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJTVkdJY29uIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJ0eXBlIiwiZ2V0SW5pdGlhbFN0YXRlIiwibG9hZGluZyIsIl9fY2xpY2siLCJldmVudCIsInByb3BzIiwiZGlzYWJsZWQiLCJwcmV2ZW50RGVmYXVsdCIsIm93bmVyIiwib25DbGljayIsInZhbHVlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJpc0hpZGRlbiIsIl92YWx1ZSIsImxhYmVsIiwicmVhY3QiLCJjbGFzc25hbWUiLCJzdGF0dXMiLCJpc0FjdGl2ZSIsInN0YXRlIiwiZm9jdXMiLCJpY29uIiwiY2hpbGRyZW4iLCJCdXR0b24iLCJsb2FkZXIiLCJfX2l0ZW1DbGljayIsIml0ZW0iLCJpbmRleCIsImRhdGEiLCJzZW5kZXIiLCJfX2l0ZW1SZW5kZXIiLCJfX29uTG9hZGluZyIsIl9fb25GaW5pc2hlZCIsInN0eWxlIiwiYWN0aXZlZCIsIl9zdGF0ZSIsImFjdGl2ZUluZGV4IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7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O0FBQStELFlBQU0sRUFBQztBQUF0RSxNQUZ4QixDQUREO0FBTUE7QUF4Q2lDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDSEFSLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiLFlBQVVILG1CQUFPLENBQUMsNkJBQUQsQ0FESjtBQUViLGFBQVdBLG1CQUFPLENBQUMsK0JBQUQsQ0FGTDtBQUdiLFNBQU9BLG1CQUFPLENBQUMsdUJBQUQ7QUFIRCxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSwrQkFBK0IsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E5QyxhQUFhLGlDQUFpQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgU1ZHSWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpLlNWR0ljb247XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSQnV0dG9uJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHR5cGU6ICdidXR0b24nICAvL2J1dHRvbiwgcmVzZXQsIHN1Ym1pdFxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fY2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0XHRldmVudC5vd25lciA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdGxvYWRpbmc6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB2YWx1ZVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXNIaWRkZW4pe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMubGFiZWw7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5fX2NsaWNrfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItYnV0dG9uXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnByb3BzLnN0YXR1cywgKHRoaXMucHJvcHMuaXNBY3RpdmU/XCJhY3RpdmVcIjpcIlwiKSl9IGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfHx0aGlzLnN0YXRlLmxvYWRpbmd9IGRhdGEtbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBkYXRhLWZvY3VzPXt0aGlzLnByb3BzLmZvY3VzfT5cblx0XHRcdFx0eyB0aGlzLnByb3BzLmljb24gJiYgPFNWR0ljb24gaWNvbj17dGhpcy5wcm9wcy5pY29ufSAvPiB9XG5cdFx0XHRcdHsgISFfdmFsdWUgJiYgPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj57X3ZhbHVlfTwvc3Bhbj4gfVxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0PC9idXR0b24+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEJ1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJCdXR0b25zJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH07XG5cdH0sXG5cdF9faXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0sIGluZGV4KXtcblx0XHRldmVudC5kYXRhID0gaXRlbTtcblx0XHRldmVudC5pbmRleCA9IGluZGV4O1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0aXRlbS5vbkNsaWNrICYmIGl0ZW0ub25DbGljayhldmVudCwgaXRlbSwgaW5kZXgpO1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxCdXR0b24gey4uLml0ZW19IGtleT17aW5kZXh9IG9uQ2xpY2s9eyhldmVudCk9PnRoaXMuX19pdGVtQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KX0gLz5cblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWJ1dHRvbnNcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IG9uTG9hZGluZz17dGhpcy5fX29uTG9hZGluZ30gb25GaW5pc2hlZD17dGhpcy5fX29uRmluaXNoZWR9IC8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGxvYWRlci5Mb2FkZXIgY29udGVudD1cIi4uLlwiIGxvYWRlcj1cImNpcmNsZVwiIHNpemU9XCJzaXplLXNtYWlsXCIgbGF5b3V0PVwiZmxleC1yb3dcIiAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBCdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQnV0dG9ucycsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRhY3RpdmVkOiBudWxsXG5cdFx0fTtcblx0fSxcblx0X19pdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgaXRlbSwgaW5kZXgpe1xuXHRcdGV2ZW50LmRhdGEgPSBpdGVtO1xuXHRcdGV2ZW50LmluZGV4ID0gaW5kZXg7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnNldFN0YXRlKHsgYWN0aXZlZDogaW5kZXggfSk7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRyZXR1cm4gPEJ1dHRvbiB7Li4uaXRlbX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShpdGVtLmNsYXNzTmFtZSwgKHRoaXMuc3RhdGUuYWN0aXZlZD09aW5kZXg/J2FjdGl2ZWQnOicnKSl9IGtleT17aW5kZXh9IG9uQ2xpY2s9eyhldmVudCk9PnRoaXMuX19pdGVtQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KX0gLz5cblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX3N0YXRlID0ge1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9O1xuXHRcdGlmKHRoaXMucHJvcHMuYWN0aXZlSW5kZXghPW51bGwgJiYgdGhpcy5wcm9wcy5hY3RpdmVJbmRleCA8IGRhdGEubGVuZ3RoKSB7XG5cdFx0XHRfc3RhdGUuYWN0aXZlZCA9IHRoaXMucHJvcHMuYWN0aXZlSW5kZXg7XG5cdFx0XHR0aGlzLl9faXRlbUNsaWNrKHt9LCBkYXRhW3RoaXMucHJvcHMuYWN0aXZlSW5kZXhdLCB0aGlzLnByb3BzLmFjdGl2ZUluZGV4KTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZShfc3RhdGUpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFiXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSBvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9IG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfSAvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsb2FkZXIuTG9hZGVyIGNvbnRlbnQ9XCIuLi5cIiBsb2FkZXI9XCJjaXJjbGVcIiBzaXplPVwic2l6ZS1zbWFpbFwiIGxheW91dD1cImZsZXgtcm93XCIgLz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnQnV0dG9uJzogcmVxdWlyZSgnLi9CdXR0b24nKSxcbiAgICAnQnV0dG9ucyc6IHJlcXVpcmUoJy4vQnV0dG9ucycpLFxuICAgICdUYWInOiByZXF1aXJlKCcuL1RhYicpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpY29uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=