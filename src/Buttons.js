var React = znui.React || require('react');
var Button = require('./Button');

module.exports = React.createClass({
	displayName:'Buttons',
	__itemRender: function (item, index){
		return <Button key={index} {...item} />
	},
	render:function(){
		return (
			<div className={znui.react.classname("zr-buttons", this.props.className)} style={this.props.style}>
				<znui.react.DataViewer data={this.props.data} itemRender={this.__itemRender} />
			</div>
		);
	}
});