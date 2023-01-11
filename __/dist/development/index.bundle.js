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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL0J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9UYWIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwiTG9hZGluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwidHlwZSIsImdldEluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJwcm9wcyIsIl9fY2xpY2siLCJldmVudCIsImRpc2FibGVkIiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJvd25lciIsImhhc2giLCJfaGFzaCIsImNoYXJBdCIsIndpbmRvdyIsImxvY2F0aW9uIiwib25DbGljayIsInZhbHVlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJpc0hpZGRlbiIsIl92YWx1ZSIsImxhYmVsIiwicmVhY3QiLCJjbGFzc25hbWUiLCJzdGF0dXMiLCJpc0FjdGl2ZSIsInN0YXRlIiwiZm9jdXMiLCJzdHlsZSIsImNvbG9yIiwiaWNvbiIsImNoaWxkcmVuIiwiQnV0dG9uIiwibG9hZGVyIiwiX19pdGVtQ2xpY2siLCJpdGVtIiwiaW5kZXgiLCJkYXRhIiwic2VuZGVyIiwiX19pdGVtUmVuZGVyIiwiZXZ0IiwiYnRuIiwiX19vbkxvYWRpbmciLCJfX29uRmluaXNoZWQiLCJhY3RpdmVkIiwiZmlyZUNsaWNrIiwiX2FjdGl2ZWQiLCJvbkl0ZW1BY3RpdmVkIiwidW5kZWZpbmVkIiwiYWN0aXZlSW5kZXgiLCJsZW5ndGgiLCJmaXJlQWN0aXZlIiwiQnV0dG9ucyIsIlRhYiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLGtDQUFELENBQXJCOztBQUVBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLEtBQUssQ0FBQ00sV0FBTixDQUFrQjtBQUNsQ0MsYUFBVyxFQUFFLFVBRHFCO0FBRWxDQyxpQkFBZSxFQUFFLDJCQUFXO0FBQzNCLFdBQU87QUFDTkMsZUFBUyxFQUFFLEVBREw7QUFFTkMsVUFBSSxFQUFFLFFBRkEsQ0FFVTs7QUFGVixLQUFQO0FBSUEsR0FQaUM7QUFRbENDLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTztBQUNOQyxhQUFPLEVBQUUsS0FBS0MsS0FBTCxDQUFXRCxPQUFYLElBQXNCO0FBRHpCLEtBQVA7QUFHQSxHQVppQztBQWFsQ0UsU0FBTyxFQUFFLGlCQUFVQyxLQUFWLEVBQWdCO0FBQ3hCLFFBQUcsS0FBS0YsS0FBTCxDQUFXRyxRQUFkLEVBQXVCO0FBQ3RCRCxXQUFLLENBQUNFLGNBQU47QUFDQTs7QUFDREYsU0FBSyxDQUFDRyxNQUFOLEdBQWUsSUFBZjtBQUNBSCxTQUFLLENBQUNJLEtBQU4sR0FBYyxJQUFkOztBQUNBLFFBQUcsS0FBS04sS0FBTCxDQUFXTyxJQUFkLEVBQW9CO0FBQ25CLFVBQUlDLEtBQUssR0FBRyxLQUFLUixLQUFMLENBQVdPLElBQXZCOztBQUNBLFVBQUdDLEtBQUssQ0FBQ0MsTUFBTixDQUFhLENBQWIsS0FBbUIsR0FBdEIsRUFBMEI7QUFDekJELGFBQUssR0FBRyxNQUFNQSxLQUFkO0FBQ0E7O0FBRURFLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkosSUFBaEIsR0FBdUJDLEtBQXZCO0FBQ0E7O0FBQ0QsU0FBS1IsS0FBTCxDQUFXWSxPQUFYLElBQXNCLEtBQUtaLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQlYsS0FBbkIsRUFBMEIsSUFBMUIsQ0FBdEI7QUFDQSxHQTVCaUM7QUE2QmxDSCxTQUFPLEVBQUUsaUJBQVVjLEtBQVYsRUFBZ0I7QUFDeEIsU0FBS0MsUUFBTCxDQUFjO0FBQ2JmLGFBQU8sRUFBRWM7QUFESSxLQUFkO0FBR0EsR0FqQ2lDO0FBa0NsQ0UsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLFFBQUcsS0FBS2YsS0FBTCxDQUFXZ0IsUUFBZCxFQUF1QjtBQUN0QixhQUFPLElBQVA7QUFDQTs7QUFDRCxRQUFJQyxNQUFNLEdBQUcsS0FBS2pCLEtBQUwsQ0FBV2EsS0FBWCxJQUFvQixLQUFLYixLQUFMLENBQVdrQixLQUE1Qzs7QUFDQSx3QkFDQztBQUFRLGFBQU8sRUFBRSxLQUFLakIsT0FBdEI7QUFBK0IsZUFBUyxFQUFFYixJQUFJLENBQUMrQixLQUFMLENBQVdDLFNBQVgsQ0FBcUIsV0FBckIsRUFBa0MsS0FBS3BCLEtBQUwsQ0FBV0osU0FBN0MsRUFBd0QsS0FBS0ksS0FBTCxDQUFXcUIsTUFBbkUsRUFBNEUsS0FBS3JCLEtBQUwsQ0FBV3NCLFFBQVgsR0FBb0IsUUFBcEIsR0FBNkIsRUFBekcsQ0FBMUM7QUFBeUosY0FBUSxFQUFFLEtBQUt0QixLQUFMLENBQVdHLFFBQVgsSUFBcUIsS0FBS29CLEtBQUwsQ0FBV3hCLE9BQW5NO0FBQTRNLHNCQUFjLEtBQUt3QixLQUFMLENBQVd4QixPQUFyTztBQUE4TyxvQkFBWSxLQUFLQyxLQUFMLENBQVd3QixLQUFyUTtBQUE0USxXQUFLLEVBQUVwQyxJQUFJLENBQUMrQixLQUFMLENBQVdNLEtBQVgsQ0FBaUIsS0FBS3pCLEtBQUwsQ0FBV3lCLEtBQTVCLEVBQW1DO0FBQUVDLGFBQUssRUFBRSxLQUFLMUIsS0FBTCxDQUFXMEI7QUFBcEIsT0FBbkM7QUFBblIsT0FDRyxLQUFLMUIsS0FBTCxDQUFXMkIsSUFBWCxpQkFBbUI7QUFBTSxlQUFTLEVBQUM7QUFBaEIsb0JBQXVCO0FBQUcsZUFBUyxFQUFFLFFBQVEsS0FBSzNCLEtBQUwsQ0FBVzJCO0FBQWpDLE1BQXZCLENBRHRCLEVBRUcsQ0FBQyxDQUFDVixNQUFGLGlCQUFZO0FBQU0sZUFBUyxFQUFDO0FBQWhCLE9BQXlCQSxNQUF6QixDQUZmLEVBR0csS0FBS2pCLEtBQUwsQ0FBVzRCLFFBSGQsQ0FERDtBQU9BO0FBOUNpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7Ozs7O0FDSEEsSUFBSXpDLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBQ0EsSUFBSXdDLE1BQU0sR0FBR3hDLG1CQUFPLENBQUMsNkJBQUQsQ0FBcEI7O0FBQ0EsSUFBSXlDLE1BQU0sR0FBR3pDLG1CQUFPLENBQUMsNENBQUQsQ0FBcEI7O0FBQ0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkwsS0FBSyxDQUFDTSxXQUFOLENBQWtCO0FBQ2xDQyxhQUFXLEVBQUMsV0FEc0I7QUFFbENJLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTztBQUNOQyxhQUFPLEVBQUU7QUFESCxLQUFQO0FBR0EsR0FOaUM7QUFPbENnQyxhQUFXLEVBQUUscUJBQVU3QixLQUFWLEVBQWlCOEIsSUFBakIsRUFBdUJDLEtBQXZCLEVBQTZCO0FBQ3pDL0IsU0FBSyxDQUFDZ0MsSUFBTixHQUFhRixJQUFiO0FBQ0E5QixTQUFLLENBQUMrQixLQUFOLEdBQWNBLEtBQWQ7QUFDQS9CLFNBQUssQ0FBQ2lDLE1BQU4sR0FBZSxJQUFmO0FBQ0FILFFBQUksQ0FBQ3BCLE9BQUwsSUFBZ0JvQixJQUFJLENBQUNwQixPQUFMLENBQWFWLEtBQWIsRUFBb0I4QixJQUFwQixFQUEwQkMsS0FBMUIsQ0FBaEI7QUFDQSxTQUFLakMsS0FBTCxDQUFXWSxPQUFYLElBQXNCLEtBQUtaLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQlYsS0FBbkIsRUFBMEIsSUFBMUIsQ0FBdEI7QUFDQSxHQWJpQztBQWNsQ2tDLGNBQVksRUFBRSxzQkFBVUosSUFBVixFQUFnQkMsS0FBaEIsRUFBc0I7QUFBQTs7QUFDbkMsd0JBQU8sb0JBQUMsTUFBRCxlQUFZRCxJQUFaO0FBQWtCLFNBQUcsRUFBRUMsS0FBdkI7QUFBOEIsYUFBTyxFQUFFLGlCQUFDSSxHQUFELEVBQU1DLEdBQU47QUFBQSxlQUFZLEtBQUksQ0FBQ1AsV0FBTCxDQUFpQk0sR0FBakIsRUFBc0JMLElBQXRCLEVBQTRCQyxLQUE1QixDQUFaO0FBQUE7QUFBdkMsT0FBUDtBQUNBLEdBaEJpQztBQWlCbENNLGFBQVcsRUFBRSx1QkFBVztBQUN2QixTQUFLekIsUUFBTCxDQUFjO0FBQ2JmLGFBQU8sRUFBRTtBQURJLEtBQWQ7QUFHQSxHQXJCaUM7QUFzQmxDeUMsY0FBWSxFQUFFLHdCQUFXO0FBQ3hCLFNBQUsxQixRQUFMLENBQWM7QUFDYmYsYUFBTyxFQUFFO0FBREksS0FBZDtBQUdBLEdBMUJpQztBQTJCbENnQixRQUFNLEVBQUMsa0JBQVU7QUFDaEIsd0JBQ0M7QUFBSyxlQUFTLEVBQUUzQixJQUFJLENBQUMrQixLQUFMLENBQVdDLFNBQVgsQ0FBcUIsWUFBckIsRUFBbUMsS0FBS3BCLEtBQUwsQ0FBV0osU0FBOUMsQ0FBaEI7QUFBMEUsV0FBSyxFQUFFLEtBQUtJLEtBQUwsQ0FBV3lCO0FBQTVGLG9CQUNDLG9CQUFDLElBQUQsQ0FBTSxLQUFOLENBQVksUUFBWjtBQUFxQixVQUFJLEVBQUUsS0FBS3pCLEtBQUwsQ0FBV2tDLElBQXRDO0FBQTRDLGdCQUFVLEVBQUUsS0FBS0UsWUFBN0Q7QUFBMkUsZUFBUyxFQUFFLEtBQUtHLFdBQTNGO0FBQXdHLGdCQUFVLEVBQUUsS0FBS0M7QUFBekgsTUFERCxFQUVFLEtBQUtqQixLQUFMLENBQVd4QixPQUFYLGlCQUFzQixvQkFBQyxNQUFELENBQVEsTUFBUjtBQUFlLGFBQU8sRUFBQyxLQUF2QjtBQUE2QixZQUFNLEVBQUMsUUFBcEM7QUFBNkMsVUFBSSxFQUFDLFlBQWxEO0FBQStELFlBQU0sRUFBQztBQUF0RSxNQUZ4QixDQUREO0FBTUE7QUFsQ2lDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDSEEsSUFBSVosS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUwsSUFBY0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFqQzs7QUFFQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxLQUFLLENBQUNNLFdBQU4sQ0FBa0I7QUFBQTtBQUNsQ3NCLFFBQU0sRUFBRSxrQkFBVTtBQUNqQix3QkFDQztBQUFLLFdBQUssRUFBRSxLQUFLZixLQUFMLENBQVd5QixLQUF2QjtBQUE4QixlQUFTLEVBQUUsd0JBQXdCLEtBQUt6QixLQUFMLENBQVdKLFNBQVgsSUFBd0IsRUFBaEQ7QUFBekMsb0JBQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFBMEIsZ0NBQTFCLGVBQXFDLGdDQUFyQyxlQUFnRCxnQ0FBaEQsZUFBMkQsZ0NBQTNELENBREQsQ0FERDtBQUtBO0FBUGlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7QUNGQSxJQUFJVCxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBTCxJQUFjRSxtQkFBTyxDQUFDLG9CQUFELENBQWpDOztBQUNBLElBQUl3QyxNQUFNLEdBQUd4QyxtQkFBTyxDQUFDLDZCQUFELENBQXBCOztBQUNBLElBQUl5QyxNQUFNLEdBQUd6QyxtQkFBTyxDQUFDLDRDQUFELENBQXBCOztBQUNBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLEtBQUssQ0FBQ00sV0FBTixDQUFrQjtBQUNsQ0MsYUFBVyxFQUFDLFdBRHNCO0FBRWxDSSxpQkFBZSxFQUFFLDJCQUFXO0FBQzNCLFdBQU87QUFDTkMsYUFBTyxFQUFFLElBREg7QUFFTjBDLGFBQU8sRUFBRTtBQUZILEtBQVA7QUFJQSxHQVBpQztBQVFsQ1YsYUFBVyxFQUFFLHFCQUFVN0IsS0FBVixFQUFpQjhCLElBQWpCLEVBQXVCQyxLQUF2QixFQUE4QlMsU0FBOUIsRUFBd0M7QUFDcER4QyxTQUFLLENBQUNnQyxJQUFOLEdBQWFGLElBQWI7QUFDQTlCLFNBQUssQ0FBQytCLEtBQU4sR0FBY0EsS0FBZDtBQUNBL0IsU0FBSyxDQUFDaUMsTUFBTixHQUFlLElBQWY7QUFDQSxTQUFLckIsUUFBTCxDQUFjO0FBQ2IyQixhQUFPLEVBQUVSLEtBREk7QUFFYmxDLGFBQU8sRUFBRTtBQUZJLEtBQWQ7O0FBSUEsUUFBRzJDLFNBQVMsS0FBSyxLQUFqQixFQUF3QjtBQUN2QixXQUFLMUMsS0FBTCxDQUFXWSxPQUFYLElBQXNCLEtBQUtaLEtBQUwsQ0FBV1ksT0FBWCxDQUFtQlYsS0FBbkIsRUFBMEIsSUFBMUIsQ0FBdEI7QUFDQTtBQUNELEdBbkJpQztBQW9CbENrQyxjQUFZLEVBQUUsc0JBQVVKLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXNCO0FBQUE7O0FBQ25DLFFBQUlVLFFBQVEsR0FBRyxLQUFLM0MsS0FBTCxDQUFXNEMsYUFBWCxJQUE0QixLQUFLNUMsS0FBTCxDQUFXNEMsYUFBWCxDQUF5QlosSUFBekIsRUFBK0JDLEtBQS9CLENBQTNDOztBQUNBLFFBQUdVLFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEtBQUtFLFNBQXJDLEVBQWdEO0FBQy9DRixjQUFRLEdBQUcsS0FBS3BCLEtBQUwsQ0FBV2tCLE9BQVgsSUFBc0JSLEtBQWpDO0FBQ0E7O0FBQ0Qsd0JBQU8sb0JBQUMsTUFBRCxlQUFZRCxJQUFaO0FBQWtCLGVBQVMsRUFBRTVDLElBQUksQ0FBQytCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQlksSUFBSSxDQUFDcEMsU0FBMUIsRUFBc0MrQyxRQUFRLEdBQUMsU0FBRCxHQUFXLEVBQXpELENBQTdCO0FBQTRGLFNBQUcsRUFBRVYsS0FBakc7QUFBd0csYUFBTyxFQUFFLGlCQUFDL0IsS0FBRDtBQUFBLGVBQVMsS0FBSSxDQUFDNkIsV0FBTCxDQUFpQjdCLEtBQWpCLEVBQXdCOEIsSUFBeEIsRUFBOEJDLEtBQTlCLENBQVQ7QUFBQTtBQUFqSCxPQUFQO0FBQ0EsR0ExQmlDO0FBMkJsQ00sYUFBVyxFQUFFLHVCQUFXO0FBQ3ZCLFNBQUt6QixRQUFMLENBQWM7QUFDYmYsYUFBTyxFQUFFO0FBREksS0FBZDtBQUdBLEdBL0JpQztBQWdDbEN5QyxjQUFZLEVBQUUsc0JBQVVOLElBQVYsRUFBZTtBQUM1QixRQUFHLEtBQUtsQyxLQUFMLENBQVc4QyxXQUFYLElBQXdCLElBQXhCLElBQWdDLEtBQUs5QyxLQUFMLENBQVc4QyxXQUFYLEdBQXlCWixJQUFJLENBQUNhLE1BQWpFLEVBQXlFO0FBQ3hFLFdBQUtoQixXQUFMLENBQWlCLEVBQWpCLEVBQXFCRyxJQUFJLENBQUMsS0FBS2xDLEtBQUwsQ0FBVzhDLFdBQVosQ0FBekIsRUFBbUQsS0FBSzlDLEtBQUwsQ0FBVzhDLFdBQTlELEVBQTJFLEtBQUs5QyxLQUFMLENBQVdnRCxVQUF0Rjs7QUFDQTtBQUNBOztBQUVELFNBQUtsQyxRQUFMLENBQWM7QUFDYmYsYUFBTyxFQUFFO0FBREksS0FBZDtBQUdBLEdBekNpQztBQTBDbENnQixRQUFNLEVBQUMsa0JBQVU7QUFDaEIsd0JBQ0M7QUFBSyxlQUFTLEVBQUUzQixJQUFJLENBQUMrQixLQUFMLENBQVdDLFNBQVgsQ0FBcUIsUUFBckIsRUFBK0IsS0FBS3BCLEtBQUwsQ0FBV0osU0FBMUMsQ0FBaEI7QUFBc0UsV0FBSyxFQUFFLEtBQUtJLEtBQUwsQ0FBV3lCO0FBQXhGLG9CQUNDLG9CQUFDLElBQUQsQ0FBTSxLQUFOLENBQVksUUFBWjtBQUFxQixVQUFJLEVBQUUsS0FBS3pCLEtBQUwsQ0FBV2tDLElBQXRDO0FBQTRDLGdCQUFVLEVBQUUsS0FBS0UsWUFBN0Q7QUFBMkUsZUFBUyxFQUFFLEtBQUtHLFdBQTNGO0FBQXdHLGdCQUFVLEVBQUUsS0FBS0M7QUFBekgsTUFERCxFQUVFLEtBQUtqQixLQUFMLENBQVd4QixPQUFYLGlCQUFzQixvQkFBQyxNQUFELENBQVEsTUFBUjtBQUFlLGFBQU8sRUFBQyxLQUF2QjtBQUE2QixZQUFNLEVBQUMsUUFBcEM7QUFBNkMsVUFBSSxFQUFDLFlBQWxEO0FBQStELFlBQU0sRUFBQztBQUF0RSxNQUZ4QixDQUREO0FBTUE7QUFqRGlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDSEFSLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNicUMsUUFBTSxFQUFFeEMsbUJBQU8sQ0FBQyw2QkFBRCxDQURGO0FBRWI0RCxTQUFPLEVBQUU1RCxtQkFBTyxDQUFDLCtCQUFELENBRkg7QUFHYjZELEtBQUcsRUFBRTdELG1CQUFPLENBQUMsdUJBQUQ7QUFIQyxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxpQ0FBaUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExvYWRpbmcgPSByZXF1aXJlKCcuL0xvYWRpbmcuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJCdXR0b24nLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0dHlwZTogJ2J1dHRvbicgIC8vYnV0dG9uLCByZXNldCwgc3VibWl0XG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiB0aGlzLnByb3BzLmxvYWRpbmcgfHwgZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fY2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXNhYmxlZCl7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0XHRldmVudC5idXR0b24gPSB0aGlzO1xuXHRcdGV2ZW50Lm93bmVyID0gdGhpcztcblx0XHRpZih0aGlzLnByb3BzLmhhc2gpIHtcblx0XHRcdHZhciBfaGFzaCA9IHRoaXMucHJvcHMuaGFzaDtcblx0XHRcdGlmKF9oYXNoLmNoYXJBdCgwKSAhPSAnIycpe1xuXHRcdFx0XHRfaGFzaCA9ICcjJyArIF9oYXNoO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IF9oYXNoO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0bG9hZGluZzogZnVuY3Rpb24gKHZhbHVlKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHZhbHVlXG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pc0hpZGRlbil7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0dmFyIF92YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy5sYWJlbDtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9fY2xpY2t9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1idXR0b25cIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMuc3RhdHVzLCAodGhpcy5wcm9wcy5pc0FjdGl2ZT9cImFjdGl2ZVwiOlwiXCIpKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR8fHRoaXMuc3RhdGUubG9hZGluZ30gZGF0YS1sb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGRhdGEtZm9jdXM9e3RoaXMucHJvcHMuZm9jdXN9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHsgY29sb3I6IHRoaXMucHJvcHMuY29sb3IgfSl9PlxuXHRcdFx0XHR7IHRoaXMucHJvcHMuaWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+PGkgY2xhc3NOYW1lPXtcImZhIFwiICsgdGhpcy5wcm9wcy5pY29ufSAvPjwvc3Bhbj4gfVxuXHRcdFx0XHR7ICEhX3ZhbHVlICYmIDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+e192YWx1ZX08L3NwYW4+IH1cblx0XHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBCdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQnV0dG9ucycsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9O1xuXHR9LFxuXHRfX2l0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBpdGVtLCBpbmRleCl7XG5cdFx0ZXZlbnQuZGF0YSA9IGl0ZW07XG5cdFx0ZXZlbnQuaW5kZXggPSBpbmRleDtcblx0XHRldmVudC5zZW5kZXIgPSB0aGlzO1xuXHRcdGl0ZW0ub25DbGljayAmJiBpdGVtLm9uQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHJldHVybiA8QnV0dG9uIHsuLi5pdGVtfSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoZXZ0LCBidG4pPT50aGlzLl9faXRlbUNsaWNrKGV2dCwgaXRlbSwgaW5kZXgpfSAvPlxuXHR9LFxuXHRfX29uTG9hZGluZzogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25GaW5pc2hlZDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItYnV0dG9uc1wiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gb25Mb2FkaW5nPXt0aGlzLl9fb25Mb2FkaW5nfSBvbkZpbmlzaGVkPXt0aGlzLl9fb25GaW5pc2hlZH0gLz5cblx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyAmJiA8bG9hZGVyLkxvYWRlciBjb250ZW50PVwiLi4uXCIgbG9hZGVyPVwiY2lyY2xlXCIgc2l6ZT1cInNpemUtc21haWxcIiBsYXlvdXQ9XCJmbGV4LXJvd1wiIC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9eyd6ci1idXR0b24tbG9hZGluZyAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGRzLXJpbmdcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEJ1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJCdXR0b25zJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdGFjdGl2ZWQ6IG51bGxcblx0XHR9O1xuXHR9LFxuXHRfX2l0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBpdGVtLCBpbmRleCwgZmlyZUNsaWNrKXtcblx0XHRldmVudC5kYXRhID0gaXRlbTtcblx0XHRldmVudC5pbmRleCA9IGluZGV4O1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IFxuXHRcdFx0YWN0aXZlZDogaW5kZXgsIFxuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0XHRpZihmaXJlQ2xpY2sgIT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0XHR9XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX2FjdGl2ZWQgPSB0aGlzLnByb3BzLm9uSXRlbUFjdGl2ZWQgJiYgdGhpcy5wcm9wcy5vbkl0ZW1BY3RpdmVkKGl0ZW0sIGluZGV4KTtcblx0XHRpZihfYWN0aXZlZCA9PT0gbnVsbCB8fCBfYWN0aXZlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRfYWN0aXZlZCA9IHRoaXMuc3RhdGUuYWN0aXZlZCA9PSBpbmRleDtcblx0XHR9XG5cdFx0cmV0dXJuIDxCdXR0b24gey4uLml0ZW19IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoaXRlbS5jbGFzc05hbWUsIChfYWN0aXZlZD8nYWN0aXZlZCc6JycpKX0ga2V5PXtpbmRleH0gb25DbGljaz17KGV2ZW50KT0+dGhpcy5fX2l0ZW1DbGljayhldmVudCwgaXRlbSwgaW5kZXgpfSAvPlxuXHR9LFxuXHRfX29uTG9hZGluZzogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25GaW5pc2hlZDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdGlmKHRoaXMucHJvcHMuYWN0aXZlSW5kZXghPW51bGwgJiYgdGhpcy5wcm9wcy5hY3RpdmVJbmRleCA8IGRhdGEubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLl9faXRlbUNsaWNrKHt9LCBkYXRhW3RoaXMucHJvcHMuYWN0aXZlSW5kZXhdLCB0aGlzLnByb3BzLmFjdGl2ZUluZGV4LCB0aGlzLnByb3BzLmZpcmVBY3RpdmUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYlwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gb25Mb2FkaW5nPXt0aGlzLl9fb25Mb2FkaW5nfSBvbkZpbmlzaGVkPXt0aGlzLl9fb25GaW5pc2hlZH0gLz5cblx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyAmJiA8bG9hZGVyLkxvYWRlciBjb250ZW50PVwiLi4uXCIgbG9hZGVyPVwiY2lyY2xlXCIgc2l6ZT1cInNpemUtc21haWxcIiBsYXlvdXQ9XCJmbGV4LXJvd1wiIC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQnV0dG9uOiByZXF1aXJlKCcuL0J1dHRvbicpLFxuICAgIEJ1dHRvbnM6IHJlcXVpcmUoJy4vQnV0dG9ucycpLFxuICAgIFRhYjogcmVxdWlyZSgnLi9UYWInKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=