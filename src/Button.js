var React = znui.React || require('react');

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
		if(this.props.hash) {
			var _hash = this.props.hash;
			if(_hash.charAt(0) != '#'){
				_hash = '#' + _hash;
			}
			
			window.location.hash = _hash;
		}
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
		var _value = this.props.value || this.props.label;
		return (
			<button onClick={this.__click} className={znui.react.classname("zr-button", this.props.className, this.props.status, (this.props.isActive?"active":""))} disabled={this.props.disabled||this.state.loading} data-loading={this.state.loading} data-focus={this.props.focus} style={znui.react.style(this.props.style, { color: this.props.color })}>
				{ this.props.icon && <span className="icon"><i className={"fa " + this.props.icon} /></span> }
				{ !!_value && <span className="value">{_value}</span> }
				{ this.props.children }
			</button>
		);
	}
});