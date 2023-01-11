"use strict";

var React = znui.React || require('react');

var Loading = require('./Loading.js');

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