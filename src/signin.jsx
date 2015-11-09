var React = require("react");

var SingIn = React.createClass({
	render: function() {
		return (
				<div>
					<label htmlFor="username">username
						<input type="text" id="username" />
					</label>
					<label htmlFor="password">password
						<imput type="text" id="password" />
					</label>
					<button id="singIn" onClick={this.props.onAuthComplete.bind(null, this._doAut)}>
					Sing in </button>
				</div>
			);
	},

	_doAut: function () {
		return true;
	}
});


module.exports = SingIn;