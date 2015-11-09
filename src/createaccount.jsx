var React = require("react");

var CreateAccount = React.createClass({
	render: function() {
		return (
				<div>
					<label htmlFor="username">username
						<input type="text" id="username" />
					</label>
					<label htmlFor="password">password
						<imput type="text" id="password" />
					</label>
					<label htmlFor="password">confirm password
						<imput type="text" id="password" />
					</label>
					<button id="singIn" onClick={this.props.onAuthComplete.bind(null, this._createAccount)}>
					Create Account</button>
				</div>
			);
	},

	_createAccount: function () {
		return true;
	}
});


module.exports = CreateAccount;