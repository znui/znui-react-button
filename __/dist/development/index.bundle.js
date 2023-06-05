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

var Loading = __webpack_require__(/*! ./Loading.js */ "./Loading.js");

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
      loading: this.props.loading || false
    };
  },
  __click: function __click(event) {
    if (this.props.disabled) {
      event.preventDefault();
    }

    event.button = this;
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

    var _value = this.props.label || this.props.text || this.props.value;

    return /*#__PURE__*/React.createElement("button", {
      onClick: this.__click,
      className: znui.react.classname("zr-button", this.props.className, this.props.status, this.props.isActive ? "active" : ""),
      disabled: this.props.disabled || this.state.loading,
      "data-loading": this.state.loading,
      "data-focus": this.props.focus,
      style: znui.react.style(this.props.style, {
        color: this.props.color
      })
    }, this.props.icon && /*#__PURE__*/React.createElement("i", {
      className: "icon fa " + this.props.icon
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
      onClick: function onClick(evt, btn) {
        return _this.__itemClick(evt, item, index);
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

/***/ "./Loading.js":
/*!********************!*\
  !*** ./Loading.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: 'zr-button-loading ' + (this.props.className || '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "lds-ring"
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)));
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

    var _actived = this.props.onItemActived && this.props.onItemActived(item, index);

    if (_actived === null || _actived === undefined) {
      _actived = this.state.actived == index;
    }

    return /*#__PURE__*/React.createElement(Button, _extends({}, item, {
      className: znui.react.classname(item.className, _actived ? 'actived' : ''),
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
  Button: __webpack_require__(/*! ./Button */ "./Button.js"),
  Buttons: __webpack_require__(/*! ./Buttons */ "./Buttons.js"),
  Tab: __webpack_require__(/*! ./Tab */ "./Tab.js")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL0J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9UYWIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwiTG9hZGluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwidHlwZSIsImdldEluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJwcm9wcyIsIl9fY2xpY2siLCJldmVudCIsImRpc2FibGVkIiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJvd25lciIsImhhc2giLCJfaGFzaCIsImNoYXJBdCIsIndpbmRvdyIsImxvY2F0aW9uIiwib25DbGljayIsInZhbHVlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJpc0hpZGRlbiIsIl92YWx1ZSIsImxhYmVsIiwidGV4dCIsInJlYWN0IiwiY2xhc3NuYW1lIiwic3RhdHVzIiwiaXNBY3RpdmUiLCJzdGF0ZSIsImZvY3VzIiwic3R5bGUiLCJjb2xvciIsImljb24iLCJjaGlsZHJlbiIsIkJ1dHRvbiIsImxvYWRlciIsIl9faXRlbUNsaWNrIiwiaXRlbSIsImluZGV4IiwiZGF0YSIsInNlbmRlciIsIl9faXRlbVJlbmRlciIsImV2dCIsImJ0biIsIl9fb25Mb2FkaW5nIiwiX19vbkZpbmlzaGVkIiwiYWN0aXZlZCIsImZpcmVDbGljayIsIl9hY3RpdmVkIiwib25JdGVtQWN0aXZlZCIsInVuZGVmaW5lZCIsImFjdGl2ZUluZGV4IiwibGVuZ3RoIiwiZmlyZUFjdGl2ZSIsIkJ1dHRv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RUFBRSxLQUFLSSxLQUFMLENBQVcwQjtBQUF4RixvQkFDQyxvQkFBQyxJQUFELENBQU0sS0FBTixDQUFZLFFBQVo7QUFBcUIsVUFBSSxFQUFFLEtBQUsxQixLQUFMLENBQVdtQyxJQUF0QztBQUE0QyxnQkFBVSxFQUFFLEtBQUtFLFlBQTdEO0FBQTJFLGVBQVMsRUFBRSxLQUFLRyxXQUEzRjtBQUF3RyxnQkFBVSxFQUFFLEtBQUtDO0FBQXpILE1BREQsRUFFRSxLQUFLakIsS0FBTCxDQUFXekIsT0FBWCxpQkFBc0Isb0JBQUMsTUFBRCxDQUFRLE1BQVI7QUFBZSxhQUFPLEVBQUMsS0FBdkI7QUFBNkIsWUFBTSxFQUFDLFFBQXBDO0FBQTZDLFVBQUksRUFBQyxZQUFsRDtBQUErRCxZQUFNLEVBQUM7QUFBdEUsTUFGeEIsQ0FERDtBQU1BO0FBakRpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztBQ0hBUixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYnNDLFFBQU0sRUFBRXpDLG1CQUFPLENBQUMsNkJBQUQsQ0FERjtBQUViNkQsU0FBTyxFQUFFN0QsbUJBQU8sQ0FBQywrQkFBRCxDQUZIO0FBR2I4RCxLQUFHLEVBQUU5RCxtQkFBTyxDQUFDLHVCQUFEO0FBSEMsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsaUNBQWlDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBMb2FkaW5nID0gcmVxdWlyZSgnLi9Mb2FkaW5nLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSQnV0dG9uJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHR5cGU6ICdidXR0b24nICAvL2J1dHRvbiwgcmVzZXQsIHN1Ym1pdFxuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdGhpcy5wcm9wcy5sb2FkaW5nIHx8IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX2NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpe1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdFx0ZXZlbnQuYnV0dG9uID0gdGhpcztcblx0XHRldmVudC5vd25lciA9IHRoaXM7XG5cdFx0aWYodGhpcy5wcm9wcy5oYXNoKSB7XG5cdFx0XHR2YXIgX2hhc2ggPSB0aGlzLnByb3BzLmhhc2g7XG5cdFx0XHRpZihfaGFzaC5jaGFyQXQoMCkgIT0gJyMnKXtcblx0XHRcdFx0X2hhc2ggPSAnIycgKyBfaGFzaDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBfaGFzaDtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCwgdGhpcyk7XG5cdH0sXG5cdGxvYWRpbmc6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB2YWx1ZVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXNIaWRkZW4pe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfdmFsdWUgPSB0aGlzLnByb3BzLmxhYmVsIHx8IHRoaXMucHJvcHMudGV4dCB8fCB0aGlzLnByb3BzLnZhbHVlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX19jbGlja30gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWJ1dHRvblwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5zdGF0dXMsICh0aGlzLnByb3BzLmlzQWN0aXZlP1wiYWN0aXZlXCI6XCJcIikpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZHx8dGhpcy5zdGF0ZS5sb2FkaW5nfSBkYXRhLWxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gZGF0YS1mb2N1cz17dGhpcy5wcm9wcy5mb2N1c30gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgeyBjb2xvcjogdGhpcy5wcm9wcy5jb2xvciB9KX0+XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5pY29uICYmIDxpIGNsYXNzTmFtZT17XCJpY29uIGZhIFwiICsgdGhpcy5wcm9wcy5pY29ufSAvPiB9XG5cdFx0XHRcdHsgISFfdmFsdWUgJiYgPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj57X3ZhbHVlfTwvc3Bhbj4gfVxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0PC9idXR0b24+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEJ1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJCdXR0b25zJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH07XG5cdH0sXG5cdF9faXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0sIGluZGV4KXtcblx0XHRldmVudC5kYXRhID0gaXRlbTtcblx0XHRldmVudC5pbmRleCA9IGluZGV4O1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0aXRlbS5vbkNsaWNrICYmIGl0ZW0ub25DbGljayhldmVudCwgaXRlbSwgaW5kZXgpO1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxCdXR0b24gey4uLml0ZW19IGtleT17aW5kZXh9IG9uQ2xpY2s9eyhldnQsIGJ0bik9PnRoaXMuX19pdGVtQ2xpY2soZXZ0LCBpdGVtLCBpbmRleCl9IC8+XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1idXR0b25zXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSBvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9IG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfSAvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsb2FkZXIuTG9hZGVyIGNvbnRlbnQ9XCIuLi5cIiBsb2FkZXI9XCJjaXJjbGVcIiBzaXplPVwic2l6ZS1zbWFpbFwiIGxheW91dD1cImZsZXgtcm93XCIgLz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17J3pyLWJ1dHRvbi1sb2FkaW5nICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycpfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZHMtcmluZ1wiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24nKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkJ1dHRvbnMnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0YWN0aXZlZDogbnVsbFxuXHRcdH07XG5cdH0sXG5cdF9faXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0sIGluZGV4LCBmaXJlQ2xpY2spe1xuXHRcdGV2ZW50LmRhdGEgPSBpdGVtO1xuXHRcdGV2ZW50LmluZGV4ID0gaW5kZXg7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnNldFN0YXRlKHsgXG5cdFx0XHRhY3RpdmVkOiBpbmRleCwgXG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHRcdGlmKGZpcmVDbGljayAhPT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHRcdH1cblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfYWN0aXZlZCA9IHRoaXMucHJvcHMub25JdGVtQWN0aXZlZCAmJiB0aGlzLnByb3BzLm9uSXRlbUFjdGl2ZWQoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKF9hY3RpdmVkID09PSBudWxsIHx8IF9hY3RpdmVkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdF9hY3RpdmVkID0gdGhpcy5zdGF0ZS5hY3RpdmVkID09IGluZGV4O1xuXHRcdH1cblx0XHRyZXR1cm4gPEJ1dHRvbiB7Li4uaXRlbX0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShpdGVtLmNsYXNzTmFtZSwgKF9hY3RpdmVkPydhY3RpdmVkJzonJykpfSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9faXRlbUNsaWNrKGV2ZW50LCBpdGVtLCBpbmRleCl9IC8+XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0aWYodGhpcy5wcm9wcy5hY3RpdmVJbmRleCE9bnVsbCAmJiB0aGlzLnByb3BzLmFjdGl2ZUluZGV4IDwgZGF0YS5sZW5ndGgpIHtcblx0XHRcdHRoaXMuX19pdGVtQ2xpY2soe30sIGRhdGFbdGhpcy5wcm9wcy5hY3RpdmVJbmRleF0sIHRoaXMucHJvcHMuYWN0aXZlSW5kZXgsIHRoaXMucHJvcHMuZmlyZUFjdGl2ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFiXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSBvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9IG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfSAvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsb2FkZXIuTG9hZGVyIGNvbnRlbnQ9XCIuLi5cIiBsb2FkZXI9XCJjaXJjbGVcIiBzaXplPVwic2l6ZS1zbWFpbFwiIGxheW91dD1cImZsZXgtcm93XCIgLz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBCdXR0b246IHJlcXVpcmUoJy4vQnV0dG9uJyksXG4gICAgQnV0dG9uczogcmVxdWlyZSgnLi9CdXR0b25zJyksXG4gICAgVGFiOiByZXF1aXJlKCcuL1RhYicpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==