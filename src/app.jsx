var React = require("react");
var Authentification = require("./auth.jsx");
var WorkoutLog = require("./workoutlog.jsx");

var App = React.createClass({
	getInitalState: function () {
		return {signedIn: false};
	},
	render: function() {
		
	},
	_onAuthComplete: function ( result ) {
		if ( result()) {
			this.setState({signedIn:true});
		}
	},
	_onLogout: function () {
		this.setState({signedIn:false});
	}
});

React.render(<App/>, document.getElementById('container'));