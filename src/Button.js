var React = znui.React || require('react');
var SVGIcon = require('znui-react-icon').SVGIcon;

module.exports = React.createClass({
	displayName: 'ZRButton',
	getDefaultProps: function (){
		return {
			className: '',
			type: 'button'  //button, reset, submit
		}
	},
	getInitialState: function() {
		return {
			loading: false
		}
	},
	__click: function (event){
		if(this.props.disabled){
			event.preventDefault();
		}
		event.owner = this;
		this.props.onClick && this.props.onClick(event, this);
	},
	loading: function (value){
		this.setState({
			loading: value
		});
	},
	render: function (){
		if(this.props.isHidden){
			return null;
		}
		return (
			<button onClick={this.__click} className={znui.react.classname("zr-button", this.props.className, this.props.status, (this.props.isActive?"active":""))} disabled={this.props.disabled||this.state.loading} data-loading={this.state.loading} data-focus={this.props.focus}>
				{this.props.icon && <SVGIcon icon={this.props.icon} />}
				{this.props.value && <span className="value">{this.props.value}</span>}
				{this.props.children}
			</button>
		);
	}
});