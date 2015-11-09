var React = require("react");
var SingIn = require("./singin.jsx");
var CreateAccount = require("./createaccount.jsx");

var Authentication = React.createClass({
	render: function () {
		return(
			<div>
				<SingIn onAuthComplete={this.props.onAuthComplete}/>
				<CreateAccount onAuthComplete={this.props.onAuthComplete}/>
			</div>
		);
	}
});

module.exports = Authentication;