"use strict";

var React = znui.React || require('react');

var SVGIcon = require('znui-react-icon').SVGIcon;

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