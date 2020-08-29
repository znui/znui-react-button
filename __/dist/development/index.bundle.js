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

/***/ "znui-react-loader":
/*!*************************!*\
  !*** external "loader" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["loader"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL0J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vVGFiLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9hZGVyXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwidHlwZSIsImdldEluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJfX2NsaWNrIiwiZXZlbnQiLCJwcm9wcyIsImRpc2FibGVkIiwicHJldmVudERlZmF1bHQiLCJvd25lciIsIm9uQ2xpY2siLCJ2YWx1ZSIsInNldFN0YXRlIiwicmVuZGVyIiwiaXNIaWRkZW4iLCJfdmFsdWUiLCJsYWJlbCIsInJlYWN0IiwiY2xhc3NuYW1lIiwic3RhdHVzIiwiaXNBY3RpdmUiLCJzdGF0ZSIsImZvY3VzIiwic3R5bGUiLCJpY29uIiwiY2hpbGRyZW4iLCJCdXR0b24iLCJsb2FkZXIiLCJfX2l0ZW1DbGljayIsIml0ZW0iLCJpbmRleCIsImRhdGEiLCJzZW5kZXIiLCJfX2l0ZW1SZW5kZXIiLCJfX29uTG9hZGluZyIsIl9fb25GaW5pc2hlZCIsImFjdGl2ZWQiLCJfc3RhdGUiLCJhY3RpdmVJbmRleCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosS0FBSyxDQUFDSyxXQUFOLENBQWtCO0FBQ2xDQyxhQUFXLEVBQUUsVUFEcUI7QUFFbENDLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTztBQUNOQyxlQUFTLEVBQUUsRUFETDtBQUVOQyxVQUFJLEVBQUUsUUFGQSxDQUVVOztBQUZWLEtBQVA7QUFJQSxHQVBpQztBQVFsQ0MsaUJBQWUsRUFBRSwyQkFBVztBQUMzQixXQUFPO0FBQ05DLGFBQU8sRUFBRTtBQURILEtBQVA7QUFHQSxHQVppQztBQWFsQ0MsU0FBTyxFQUFFLGlCQUFVQyxLQUFWLEVBQWdCO0FBQ3hCLFFBQUcsS0FBS0MsS0FBTCxDQUFXQyxRQUFkLEVBQXVCO0FBQ3RCRixXQUFLLENBQUNHLGNBQU47QUFDQTs7QUFDREgsU0FBSyxDQUFDSSxLQUFOLEdBQWMsSUFBZDtBQUNBLFNBQUtILEtBQUwsQ0FBV0ksT0FBWCxJQUFzQixLQUFLSixLQUFMLENBQVdJLE9BQVgsQ0FBbUJMLEtBQW5CLEVBQTBCLElBQTFCLENBQXRCO0FBQ0EsR0FuQmlDO0FBb0JsQ0YsU0FBTyxFQUFFLGlCQUFVUSxLQUFWLEVBQWdCO0FBQ3hCLFNBQUtDLFFBQUwsQ0FBYztBQUNiVCxhQUFPLEVBQUVRO0FBREksS0FBZDtBQUdBLEdBeEJpQztBQXlCbENFLFFBQU0sRUFBRSxrQkFBVztBQUNsQixRQUFHLEtBQUtQLEtBQUwsQ0FBV1EsUUFBZCxFQUF1QjtBQUN0QixhQUFPLElBQVA7QUFDQTs7QUFDRCxRQUFJQyxNQUFNLEdBQUcsS0FBS1QsS0FBTCxDQUFXSyxLQUFYLElBQW9CLEtBQUtMLEtBQUwsQ0FBV1UsS0FBNUM7O0FBQ0Esd0JBQ0M7QUFBUSxhQUFPLEVBQUUsS0FBS1osT0FBdEI7QUFBK0IsZUFBUyxFQUFFWCxJQUFJLENBQUN3QixLQUFMLENBQVdDLFNBQVgsQ0FBcUIsV0FBckIsRUFBa0MsS0FBS1osS0FBTCxDQUFXTixTQUE3QyxFQUF3RCxLQUFLTSxLQUFMLENBQVdhLE1BQW5FLEVBQTRFLEtBQUtiLEtBQUwsQ0FBV2MsUUFBWCxHQUFvQixRQUFwQixHQUE2QixFQUF6RyxDQUExQztBQUF5SixjQUFRLEVBQUUsS0FBS2QsS0FBTCxDQUFXQyxRQUFYLElBQXFCLEtBQUtjLEtBQUwsQ0FBV2xCLE9BQW5NO0FBQTRNLHNCQUFjLEtBQUtrQixLQUFMLENBQVdsQixPQUFyTztBQUE4TyxvQkFBWSxLQUFLRyxLQUFMLENBQVdnQixLQUFyUTtBQUE0USxXQUFLLEVBQUUsS0FBS2hCLEtBQUwsQ0FBV2lCO0FBQTlSLE9BQ0csS0FBS2pCLEtBQUwsQ0FBV2tCLElBQVgsaUJBQW1CO0FBQU0sZUFBUyxFQUFDO0FBQWhCLG9CQUF1QjtBQUFHLGVBQVMsRUFBRSxRQUFRLEtBQUtsQixLQUFMLENBQVdrQjtBQUFqQyxNQUF2QixDQUR0QixFQUVHLENBQUMsQ0FBQ1QsTUFBRixpQkFBWTtBQUFNLGVBQVMsRUFBQztBQUFoQixPQUF5QkEsTUFBekIsQ0FGZixFQUdHLEtBQUtULEtBQUwsQ0FBV21CLFFBSGQsQ0FERDtBQU9BO0FBckNpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7Ozs7O0FDRkEsSUFBSWpDLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBQ0EsSUFBSWdDLE1BQU0sR0FBR2hDLG1CQUFPLENBQUMsNkJBQUQsQ0FBcEI7O0FBQ0EsSUFBSWlDLE1BQU0sR0FBR2pDLG1CQUFPLENBQUMsNENBQUQsQ0FBcEI7O0FBQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosS0FBSyxDQUFDSyxXQUFOLENBQWtCO0FBQ2xDQyxhQUFXLEVBQUMsV0FEc0I7QUFFbENJLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTztBQUNOQyxhQUFPLEVBQUU7QUFESCxLQUFQO0FBR0EsR0FOaUM7QUFPbEN5QixhQUFXLEVBQUUscUJBQVV2QixLQUFWLEVBQWlCd0IsSUFBakIsRUFBdUJDLEtBQXZCLEVBQTZCO0FBQ3pDekIsU0FBSyxDQUFDMEIsSUFBTixHQUFhRixJQUFiO0FBQ0F4QixTQUFLLENBQUN5QixLQUFOLEdBQWNBLEtBQWQ7QUFDQXpCLFNBQUssQ0FBQzJCLE1BQU4sR0FBZSxJQUFmO0FBQ0FILFFBQUksQ0FBQ25CLE9BQUwsSUFBZ0JtQixJQUFJLENBQUNuQixPQUFMLENBQWFMLEtBQWIsRUFBb0J3QixJQUFwQixFQUEwQkMsS0FBMUIsQ0FBaEI7QUFDQSxTQUFLeEIsS0FBTCxDQUFXSSxPQUFYLElBQXNCLEtBQUtKLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkwsS0FBbkIsRUFBMEIsSUFBMUIsQ0FBdEI7QUFDQSxHQWJpQztBQWNsQzRCLGNBQVksRUFBRSxzQkFBVUosSUFBVixFQUFnQkMsS0FBaEIsRUFBc0I7QUFBQTs7QUFDbkMsd0JBQU8sb0JBQUMsTUFBRCxlQUFZRCxJQUFaO0FBQWtCLFNBQUcsRUFBRUMsS0FBdkI7QUFBOEIsYUFBTyxFQUFFLGlCQUFDekIsS0FBRDtBQUFBLGVBQVMsS0FBSSxDQUFDdUIsV0FBTCxDQUFpQnZCLEtBQWpCLEVBQXdCd0IsSUFBeEIsRUFBOEJDLEtBQTlCLENBQVQ7QUFBQTtBQUF2QyxPQUFQO0FBQ0EsR0FoQmlDO0FBaUJsQ0ksYUFBVyxFQUFFLHVCQUFXO0FBQ3ZCLFNBQUt0QixRQUFMLENBQWM7QUFDYlQsYUFBTyxFQUFFO0FBREksS0FBZDtBQUdBLEdBckJpQztBQXNCbENnQyxjQUFZLEVBQUUsd0JBQVc7QUFDeEIsU0FBS3ZCLFFBQUwsQ0FBYztBQUNiVCxhQUFPLEVBQUU7QUFESSxLQUFkO0FBR0EsR0ExQmlDO0FBMkJsQ1UsUUFBTSxFQUFDLGtCQUFVO0FBQ2hCLHdCQUNDO0FBQUssZUFBUyxFQUFFcEIsSUFBSSxDQUFDd0IsS0FBTCxDQUFXQyxTQUFYLENBQXFCLFlBQXJCLEVBQW1DLEtBQUtaLEtBQUwsQ0FBV04sU0FBOUMsQ0FBaEI7QUFBMEUsV0FBSyxFQUFFLEtBQUtNLEtBQUwsQ0FBV2lCO0FBQTVGLG9CQUNDLG9CQUFDLElBQUQsQ0FBTSxLQUFOLENBQVksUUFBWjtBQUFxQixVQUFJLEVBQUUsS0FBS2pCLEtBQUwsQ0FBV3lCLElBQXRDO0FBQTRDLGdCQUFVLEVBQUUsS0FBS0UsWUFBN0Q7QUFBMkUsZUFBUyxFQUFFLEtBQUtDLFdBQTNGO0FBQXdHLGdCQUFVLEVBQUUsS0FBS0M7QUFBekgsTUFERCxFQUVFLEtBQUtkLEtBQUwsQ0FBV2xCLE9BQVgsaUJBQXNCLG9CQUFDLE1BQUQsQ0FBUSxNQUFSO0FBQWUsYUFBTyxFQUFDLEtBQXZCO0FBQTZCLFlBQU0sRUFBQyxRQUFwQztBQUE2QyxVQUFJLEVBQUMsWUFBbEQ7QUFBK0QsWUFBTSxFQUFDO0FBQXRFLE1BRnhCLENBREQ7QUFNQTtBQWxDaUMsQ0FBbEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7OztBQ0hBLElBQUlYLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBQ0EsSUFBSWdDLE1BQU0sR0FBR2hDLG1CQUFPLENBQUMsNkJBQUQsQ0FBcEI7O0FBQ0EsSUFBSWlDLE1BQU0sR0FBR2pDLG1CQUFPLENBQUMsNENBQUQsQ0FBcEI7O0FBQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosS0FBSyxDQUFDSyxXQUFOLENBQWtCO0FBQ2xDQyxhQUFXLEVBQUMsV0FEc0I7QUFFbENJLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTztBQUNOQyxhQUFPLEVBQUUsSUFESDtBQUVOaUMsYUFBTyxFQUFFO0FBRkgsS0FBUDtBQUlBLEdBUGlDO0FBUWxDUixhQUFXLEVBQUUscUJBQVV2QixLQUFWLEVBQWlCd0IsSUFBakIsRUFBdUJDLEtBQXZCLEVBQTZCO0FBQ3pDekIsU0FBSyxDQUFDMEIsSUFBTixHQUFhRixJQUFiO0FBQ0F4QixTQUFLLENBQUN5QixLQUFOLEdBQWNBLEtBQWQ7QUFDQXpCLFNBQUssQ0FBQzJCLE1BQU4sR0FBZSxJQUFmO0FBQ0EsU0FBS3BCLFFBQUwsQ0FBYztBQUFFd0IsYUFBTyxFQUFFTjtBQUFYLEtBQWQ7QUFDQSxTQUFLeEIsS0FBTCxDQUFXSSxPQUFYLElBQXNCLEtBQUtKLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkwsS0FBbkIsRUFBMEIsSUFBMUIsQ0FBdEI7QUFDQSxHQWRpQztBQWVsQzRCLGNBQVksRUFBRSxzQkFBVUosSUFBVixFQUFnQkMsS0FBaEIsRUFBc0I7QUFBQTs7QUFDbkMsd0JBQU8sb0JBQUMsTUFBRCxlQUFZRCxJQUFaO0FBQWtCLGVBQVMsRUFBRXBDLElBQUksQ0FBQ3dCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQlcsSUFBSSxDQUFDN0IsU0FBMUIsRUFBc0MsS0FBS3FCLEtBQUwsQ0FBV2UsT0FBWCxJQUFvQk4sS0FBcEIsR0FBMEIsU0FBMUIsR0FBb0MsRUFBMUUsQ0FBN0I7QUFBNkcsU0FBRyxFQUFFQSxLQUFsSDtBQUF5SCxhQUFPLEVBQUUsaUJBQUN6QixLQUFEO0FBQUEsZUFBUyxLQUFJLENBQUN1QixXQUFMLENBQWlCdkIsS0FBakIsRUFBd0J3QixJQUF4QixFQUE4QkMsS0FBOUIsQ0FBVDtBQUFBO0FBQWxJLE9BQVA7QUFDQSxHQWpCaUM7QUFrQmxDSSxhQUFXLEVBQUUsdUJBQVc7QUFDdkIsU0FBS3RCLFFBQUwsQ0FBYztBQUNiVCxhQUFPLEVBQUU7QUFESSxLQUFkO0FBR0EsR0F0QmlDO0FBdUJsQ2dDLGNBQVksRUFBRSxzQkFBVUosSUFBVixFQUFlO0FBQzVCLFFBQUlNLE1BQU0sR0FBRztBQUNabEMsYUFBTyxFQUFFO0FBREcsS0FBYjs7QUFHQSxRQUFHLEtBQUtHLEtBQUwsQ0FBV2dDLFdBQVgsSUFBd0IsSUFBeEIsSUFBZ0MsS0FBS2hDLEtBQUwsQ0FBV2dDLFdBQVgsR0FBeUJQLElBQUksQ0FBQ1EsTUFBakUsRUFBeUU7QUFDeEVGLFlBQU0sQ0FBQ0QsT0FBUCxHQUFpQixLQUFLOUIsS0FBTCxDQUFXZ0MsV0FBNUI7O0FBQ0EsV0FBS1YsV0FBTCxDQUFpQixFQUFqQixFQUFxQkcsSUFBSSxDQUFDLEtBQUt6QixLQUFMLENBQVdnQyxXQUFaLENBQXpCLEVBQW1ELEtBQUtoQyxLQUFMLENBQVdnQyxXQUE5RDtBQUNBOztBQUNELFNBQUsxQixRQUFMLENBQWN5QixNQUFkO0FBQ0EsR0FoQ2lDO0FBaUNsQ3hCLFFBQU0sRUFBQyxrQkFBVTtBQUNoQix3QkFDQztBQUFLLGVBQVMsRUFBRXBCLElBQUksQ0FBQ3dCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQixRQUFyQixFQUErQixLQUFLWixLQUFMLENBQVdOLFNBQTFDLENBQWhCO0FBQXNFLFdBQUssRUFBRSxLQUFLTSxLQUFMLENBQVdpQjtBQUF4RixvQkFDQyxvQkFBQyxJQUFELENBQU0sS0FBTixDQUFZLFFBQVo7QUFBcUIsVUFBSSxFQUFFLEtBQUtqQixLQUFMLENBQVd5QixJQUF0QztBQUE0QyxnQkFBVSxFQUFFLEtBQUtFLFlBQTdEO0FBQTJFLGVBQVMsRUFBRSxLQUFLQyxXQUEzRjtBQUF3RyxnQkFBVSxFQUFFLEtBQUtDO0FBQXpILE1BREQsRUFFRSxLQUFLZCxLQUFMLENBQVdsQixPQUFYLGlCQUFzQixvQkFBQyxNQUFELENBQVEsTUFBUjtBQUFlLGFBQU8sRUFBQyxLQUF2QjtBQUE2QixZQUFNLEVBQUMsUUFBcEM7QUFBNkMsVUFBSSxFQUFDLFlBQWxEO0FBQStELFlBQU0sRUFBQztBQUF0RSxNQUZ4QixDQUREO0FBTUE7QUF4Q2lDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDSEFSLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiLFlBQVVGLG1CQUFPLENBQUMsNkJBQUQsQ0FESjtBQUViLGFBQVdBLG1CQUFPLENBQUMsK0JBQUQsQ0FGTDtBQUdiLFNBQU9BLG1CQUFPLENBQUMsdUJBQUQ7QUFIRCxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxpQ0FBaUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdaUkJ1dHRvbicsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHR0eXBlOiAnYnV0dG9uJyAgLy9idXR0b24sIHJlc2V0LCBzdWJtaXRcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX2NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGlzYWJsZWQpe1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdFx0ZXZlbnQub3duZXIgPSB0aGlzO1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRsb2FkaW5nOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdmFsdWVcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmlzSGlkZGVuKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHR2YXIgX3ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLmxhYmVsO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX19jbGlja30gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWJ1dHRvblwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5wcm9wcy5zdGF0dXMsICh0aGlzLnByb3BzLmlzQWN0aXZlP1wiYWN0aXZlXCI6XCJcIikpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZHx8dGhpcy5zdGF0ZS5sb2FkaW5nfSBkYXRhLWxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gZGF0YS1mb2N1cz17dGhpcy5wcm9wcy5mb2N1c30gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7IHRoaXMucHJvcHMuaWNvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+PGkgY2xhc3NOYW1lPXtcImZhIFwiICsgdGhpcy5wcm9wcy5pY29ufSAvPjwvc3Bhbj4gfVxuXHRcdFx0XHR7ICEhX3ZhbHVlICYmIDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+e192YWx1ZX08L3NwYW4+IH1cblx0XHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cblx0XHRcdDwvYnV0dG9uPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBCdXR0b24gPSByZXF1aXJlKCcuL0J1dHRvbicpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSQnV0dG9ucycsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9O1xuXHR9LFxuXHRfX2l0ZW1DbGljazogZnVuY3Rpb24gKGV2ZW50LCBpdGVtLCBpbmRleCl7XG5cdFx0ZXZlbnQuZGF0YSA9IGl0ZW07XG5cdFx0ZXZlbnQuaW5kZXggPSBpbmRleDtcblx0XHRldmVudC5zZW5kZXIgPSB0aGlzO1xuXHRcdGl0ZW0ub25DbGljayAmJiBpdGVtLm9uQ2xpY2soZXZlbnQsIGl0ZW0sIGluZGV4KTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHJldHVybiA8QnV0dG9uIHsuLi5pdGVtfSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9faXRlbUNsaWNrKGV2ZW50LCBpdGVtLCBpbmRleCl9IC8+XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1idXR0b25zXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSBvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9IG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfSAvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsb2FkZXIuTG9hZGVyIGNvbnRlbnQ9XCIuLi5cIiBsb2FkZXI9XCJjaXJjbGVcIiBzaXplPVwic2l6ZS1zbWFpbFwiIGxheW91dD1cImZsZXgtcm93XCIgLz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQnV0dG9uID0gcmVxdWlyZSgnLi9CdXR0b24nKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkJ1dHRvbnMnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0YWN0aXZlZDogbnVsbFxuXHRcdH07XG5cdH0sXG5cdF9faXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0sIGluZGV4KXtcblx0XHRldmVudC5kYXRhID0gaXRlbTtcblx0XHRldmVudC5pbmRleCA9IGluZGV4O1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZWQ6IGluZGV4IH0pO1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQsIHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxCdXR0b24gey4uLml0ZW19IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoaXRlbS5jbGFzc05hbWUsICh0aGlzLnN0YXRlLmFjdGl2ZWQ9PWluZGV4PydhY3RpdmVkJzonJykpfSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoZXZlbnQpPT50aGlzLl9faXRlbUNsaWNrKGV2ZW50LCBpdGVtLCBpbmRleCl9IC8+XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dmFyIF9zdGF0ZSA9IHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fTtcblx0XHRpZih0aGlzLnByb3BzLmFjdGl2ZUluZGV4IT1udWxsICYmIHRoaXMucHJvcHMuYWN0aXZlSW5kZXggPCBkYXRhLmxlbmd0aCkge1xuXHRcdFx0X3N0YXRlLmFjdGl2ZWQgPSB0aGlzLnByb3BzLmFjdGl2ZUluZGV4O1xuXHRcdFx0dGhpcy5fX2l0ZW1DbGljayh7fSwgZGF0YVt0aGlzLnByb3BzLmFjdGl2ZUluZGV4XSwgdGhpcy5wcm9wcy5hY3RpdmVJbmRleCk7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoX3N0YXRlKTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYlwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gb25Mb2FkaW5nPXt0aGlzLl9fb25Mb2FkaW5nfSBvbkZpbmlzaGVkPXt0aGlzLl9fb25GaW5pc2hlZH0gLz5cblx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyAmJiA8bG9hZGVyLkxvYWRlciBjb250ZW50PVwiLi4uXCIgbG9hZGVyPVwiY2lyY2xlXCIgc2l6ZT1cInNpemUtc21haWxcIiBsYXlvdXQ9XCJmbGV4LXJvd1wiIC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ0J1dHRvbic6IHJlcXVpcmUoJy4vQnV0dG9uJyksXG4gICAgJ0J1dHRvbnMnOiByZXF1aXJlKCcuL0J1dHRvbnMnKSxcbiAgICAnVGFiJzogcmVxdWlyZSgnLi9UYWInKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=