var React = require("react");

var Navigation = React.createClass({
	render: function() {
		return(
			<ul>
				<li><a href="#" onClick={this.props.onNav.bind(null, this._nav("define"))}>Define</li>
				<li><a href="#" onClick={this.props.onNav.bind(null, this._nav("store"))}>Store</li>
				<li><a href="#" onClick={this.props.onNav.bind(null, this._nav("history"))}>History</li>
				<li><a href="#" onClick={this.props.onLogout}>Logout</li>
		);
	},
	_nav: function (view) {
		return view;
	}
});

module.exports = Navigation;