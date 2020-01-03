"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var Button = require('./Button');

module.exports = React.createClass({
  displayName: 'Buttons',
  __itemRender: function __itemRender(item, index) {
    return React.createElement(Button, _extends({
      key: index
    }, item));
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname("zr-buttons", this.props.className),
      style: this.props.style
    }, React.createElement(znui.react.DataViewer, {
      data: this.props.data,
      itemRender: this.__itemRender
    }));
  }
});