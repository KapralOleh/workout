var React = require("react");

var ListItem = React.createClass({
	render: function() {
		return (
			<li>{this.props.name} - {this.props.result}</li>;
		);
	}
});

var History = React.createClass({
	_mockHistory: [
		{
			"name": "dada",
			"result": "21313",
			"notes": "asdasdasdasdasd das das da"
		},
		{
			"name": "czxv",
			"result": "111",
			"notes": "czxc as  hfg hf sdf fa "
		}
	],
	render: function () {
		var hist = this._mockHistory;
		var formattedLi = [];
		for (var i = 0; i < hist.length; i++) {
			var histObj = {name: hist[i].name, result: hist[i].result};
			formattedLi.push(<ListItem {...histObj} />);
		}
		return (
			<div>
				<h2>History</h2>
				<ul>
					{formattedLi}
				</ul>
		);
	}

});
module.exports = History;