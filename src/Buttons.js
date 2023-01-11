var React = znui.React || require('react');
var Button = require('./Button');
var loader = require('znui-react-loader');
module.exports = React.createClass({
	displayName:'ZRButtons',
	getInitialState: function (){
		return {
			loading: true
		};
	},
	__itemClick: function (event, item, index){
		event.data = item;
		event.index = index;
		event.sender = this;
		item.onClick && item.onClick(event, item, index);
		this.props.onClick && this.props.onClick(event, this);
	},
	__itemRender: function (item, index){
		return <Button {...item} key={index} onClick={(evt, btn)=>this.__itemClick(evt, item, index)} />
	},
	__onLoading: function (){
		this.setState({
			loading: true
		});
	},
	__onFinished: function (){
		this.setState({
			loading: false
		});
	},
	render:function(){
		return (
			<div className={znui.react.classname("zr-buttons", this.props.className)} style={this.props.style}>
				<znui.react.DataView data={this.props.data} itemRender={this.__itemRender} onLoading={this.__onLoading} onFinished={this.__onFinished} />
				{this.state.loading && <loader.Loader content="..." loader="circle" size="size-smail" layout="flex-row" />}
			</div>
		);
	}
});