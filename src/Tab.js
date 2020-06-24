var React = znui.React || require('react');
var Button = require('./Button');
var loader = require('znui-react-loader');
module.exports = React.createClass({
	displayName:'ZRButtons',
	getInitialState: function (){
		return {
			loading: true,
			actived: null
		};
	},
	__itemClick: function (event, item, index){
		event.data = item;
		event.index = index;
		event.sender = this;
		this.setState({ actived: index });
		this.props.onClick && this.props.onClick(event, this);
	},
	__itemRender: function (item, index){
		return <Button {...item} className={znui.react.classname(item.className, (this.state.actived==index?'actived':''))} key={index} onClick={(event)=>this.__itemClick(event, item, index)} />
	},
	__onLoading: function (){
		this.setState({
			loading: true
		});
	},
	__onFinished: function (data){
		var _state = {
			loading: false
		};
		if(this.props.activeIndex!=null && this.props.activeIndex < data.length) {
			_state.actived = this.props.activeIndex;
			this.__itemClick({}, data[this.props.activeIndex], this.props.activeIndex);
		}
		this.setState(_state);
	},
	render:function(){
		return (
			<div className={znui.react.classname("zr-tab", this.props.className)} style={this.props.style}>
				<znui.react.DataView data={this.props.data} itemRender={this.__itemRender} onLoading={this.__onLoading} onFinished={this.__onFinished} />
				{this.state.loading && <loader.Loader content="..." loader="circle" size="size-smail" layout="flex-row" />}
			</div>
		);
	}
});