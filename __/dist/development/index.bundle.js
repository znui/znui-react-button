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

    if (this.props.hash) {
      var _hash = this.props.hash;

      if (_hash.charAt(0) != '#') {
        _hash = '#' + _hash;
      }

      window.location.hash = _hash;
    }

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
      style: znui.react.style(this.props.style, {
        color: this.props.color
      })
    }, this.props.icon && /*#__PURE__*/React.createElement("span", {
      className: "icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa " + this.props.icon
    })), !!_value && /*#__PURE__*/React.createElement("span", {
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
  __itemClick: function __itemClick(event, item, index, fireClick) {
    event.data = item;
    event.index = index;
    event.sender = this;
    this.setState({
      actived: index,
      loading: false
    });

    if (fireClick !== false) {
      this.props.onClick && this.props.onClick(event, this);
    }
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
    if (this.props.activeIndex != null && this.props.activeIndex < data.length) {
      this.__itemClick({}, data[this.props.activeIndex], this.props.activeIndex, this.props.fireActive);

      return;
    }

    this.setState({
      loading: false
    });
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

/***/ "znui-react-loader":
/*!*************************!*\
  !*** external "loader" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["loader"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL0J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vVGFiLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9hZGVyXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwidHlwZSIsImdldEluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJfX2NsaWNrIiwiZXZlbnQiLCJwcm9wcyIsImRpc2FibGVkIiwicHJldmVudERlZmF1bHQiLCJvd25lciIsImhhc2giLCJfaGFzaCIsImNoYXJBdCIsIndpbmRvdyIsImxvY2F0aW9uIiwib25DbGljayIsInZhbHVlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJpc0hpZGRlbiIsIl92YWx1ZSIsImxhYmVsIiwicmVhY3QiLCJjbGFzc25hbWUiLCJzdGF0dXMiLCJpc0FjdGl2ZSIsInN0YXRlIiwiZm9jdXMiLCJzdHlsZSIsImNvbG9yIiwiaWNvbiIsImNoaWxkcmVuIiwiQnV0dG9uIiwibG9hZGVyIiwiX19pdGVtQ2xpY2siLCJpdGVtIiwiaW5kZXgiLCJkYXRhIiwic2VuZGVyIiwiX19pdGVtUmVuZGVyIiwiX19vbkxvYWRpbmciLCJfX29uRmluaXNoZWQiLCJhY3RpdmVkIiwiZmlyZUNsaWNrIiwiYWN0aXZlSW5kZXgiLCJsZW5ndGgiLCJmaXJlQWN0aXZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7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SSxDQUFDNkIsS0FBTCxDQUFXQyxTQUFYLENBQXFCLFFBQXJCLEVBQStCLEtBQUtqQixLQUFMLENBQVdOLFNBQTFDLENBQWhCO0FBQXNFLFdBQUssRUFBRSxLQUFLTSxLQUFMLENBQVdzQjtBQUF4RixvQkFDQyxvQkFBQyxJQUFELENBQU0sS0FBTixDQUFZLFFBQVo7QUFBcUIsVUFBSSxFQUFFLEtBQUt0QixLQUFMLENBQVcrQixJQUF0QztBQUE0QyxnQkFBVSxFQUFFLEtBQUtFLFlBQTdEO0FBQTJFLGVBQVMsRUFBRSxLQUFLQyxXQUEzRjtBQUF3RyxnQkFBVSxFQUFFLEtBQUtDO0FBQXpILE1BREQsRUFFRSxLQUFLZixLQUFMLENBQVd2QixPQUFYLGlCQUFzQixvQkFBQyxNQUFELENBQVEsTUFBUjtBQUFlLGFBQU8sRUFBQyxLQUF2QjtBQUE2QixZQUFNLEVBQUMsUUFBcEM7QUFBNkMsVUFBSSxFQUFDLFlBQWxEO0FBQStELFlBQU0sRUFBQztBQUF0RSxNQUZ4QixDQUREO0FBTUE7QUE3Q2lDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDSEFSLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiLFlBQVVGLG1CQUFPLENBQUMsNkJBQUQsQ0FESjtBQUViLGFBQVdBLG1CQUFPLENBQUMsK0JBQUQsQ0FGTDtBQUdiLFNBQU9BLG1CQUFPLENBQUMsdUJBQUQ7QUFIRCxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxpQ0FBaUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdaUkJ1dHRvbicsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR0eXBlOiAnYnV0dG9uJyAgLy9idXR0b24sIHJlc2V0LCBzdWJtaXRcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX2NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpe1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdFx0ZXZlbnQub3duZXIgPSB0aGlzO1xuXHRcdGlmKHRoaXMucHJvcHMuaGFzaCkge1xuXHRcdFx0dmFyIF9oYXNoID0gdGhpcy5wcm9wcy5oYXNoO1xuXHRcdFx0aWYoX2hhc2guY2hhckF0KDApICE9ICcjJyl7XG5cdFx0XHRcdF9oYXNoID0gJyMnICsgX2hhc2g7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gX2hhc2g7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRsb2FkaW5nOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdmFsdWVcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmlzSGlkZGVuKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLmxhYmVsO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX19jbGlja30gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWJ1dHRvblwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5zdGF0dXMsICh0aGlzLnByb3BzLmlzQWN0aXZlP1wiYWN0aXZlXCI6XCJcIikpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZHx8dGhpcy5zdGF0ZS5sb2FkaW5nfSBkYXRhLWxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gZGF0YS1mb2N1cz17dGhpcy5wcm9wcy5mb2N1c30gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgeyBjb2xvcjogdGhpcy5wcm9wcy5jb2xvciB9KX0+XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5pY29uICYmIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj48aSBjbGFzc05hbWU9e1wiZmEgXCIgKyB0aGlzLnByb3BzLmljb259IC8+PC9zcGFuPiB9XG5cdFx0XHRcdHsgISFfdmFsdWUgJiYgPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj57X3ZhbHVlfTwvc3Bhbj4gfVxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0PC9idXR0b24+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEJ1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJCdXR0b25zJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH07XG5cdH0sXG5cdF9faXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0sIGluZGV4KXtcblx0XHRldmVudC5kYXRhID0gaXRlbTtcblx0XHRldmVudC5pbmRleCA9IGluZGV4O1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0aXRlbS5vbkNsaWNrICYmIGl0ZW0ub25DbGljayhldmVudCwgaXRlbSwgaW5kZXgpO1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxCdXR0b24gey4uLml0ZW19IGtleT17aW5kZXh9IG9uQ2xpY2s9eyhldmVudCk9PnRoaXMuX19pdGVtQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KX0gLz5cblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWJ1dHRvbnNcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IG9uTG9hZGluZz17dGhpcy5fX29uTG9hZGluZ30gb25GaW5pc2hlZD17dGhpcy5fX29uRmluaXNoZWR9IC8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGxvYWRlci5Mb2FkZXIgY29udGVudD1cIi4uLlwiIGxvYWRlcj1cImNpcmNsZVwiIHNpemU9XCJzaXplLXNtYWlsXCIgbGF5b3V0PVwiZmxleC1yb3dcIiAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBCdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQnV0dG9ucycsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRhY3RpdmVkOiBudWxsXG5cdFx0fTtcblx0fSxcblx0X19pdGVtQ2xpY2s6IGZ1bmN0aW9uIChldmVudCwgaXRlbSwgaW5kZXgsIGZpcmVDbGljayl7XG5cdFx0ZXZlbnQuZGF0YSA9IGl0ZW07XG5cdFx0ZXZlbnQuaW5kZXggPSBpbmRleDtcblx0XHRldmVudC5zZW5kZXIgPSB0aGlzO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBcblx0XHRcdGFjdGl2ZWQ6IGluZGV4LCBcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdFx0aWYoZmlyZUNsaWNrICE9PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdFx0fVxuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxCdXR0b24gey4uLml0ZW19IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoaXRlbS5jbGFzc05hbWUsICh0aGlzLnN0YXRlLmFjdGl2ZWQ9PWluZGV4PydhY3RpdmVkJzonJykpfSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9faXRlbUNsaWNrKGV2ZW50LCBpdGVtLCBpbmRleCl9IC8+XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0aWYodGhpcy5wcm9wcy5hY3RpdmVJbmRleCE9bnVsbCAmJiB0aGlzLnByb3BzLmFjdGl2ZUluZGV4IDwgZGF0YS5sZW5ndGgpIHtcblx0XHRcdHRoaXMuX19pdGVtQ2xpY2soe30sIGRhdGFbdGhpcy5wcm9wcy5hY3RpdmVJbmRleF0sIHRoaXMucHJvcHMuYWN0aXZlSW5kZXgsIHRoaXMucHJvcHMuZmlyZUFjdGl2ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFiXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSBvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9IG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfSAvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsb2FkZXIuTG9hZGVyIGNvbnRlbnQ9XCIuLi5cIiBsb2FkZXI9XCJjaXJjbGVcIiBzaXplPVwic2l6ZS1zbWFpbFwiIGxheW91dD1cImZsZXgtcm93XCIgLz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnQnV0dG9uJzogcmVxdWlyZSgnLi9CdXR0b24nKSxcbiAgICAnQnV0dG9ucyc6IHJlcXVpcmUoJy4vQnV0dG9ucycpLFxuICAgICdUYWInOiByZXF1aXJlKCcuL1RhYicpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==