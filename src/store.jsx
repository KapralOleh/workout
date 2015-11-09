var React = require("react");

var Option = React.createClass({
	render: function() {
		return (
			<option>{this.props.value}</option>
		)
	}
});

var StoreWorkouts = React.createClass({
	_mockWorkouts: [
		{},
		{}
	],
	render: function() {
		var opts = [];
		for(var i = 0; i < this._mockWorkouts.length; i++) {
			opts.push(<Option value={this._mockWorkouts[i].name}/>);
		}
		return (
			<div id="logWorkout">
				<h2>Record Workout</h2>
				<label htmlFor="chooseWorkout">Workout:</label>
				<select name="" id="chooseWorkout">
					{opts}
				</select>
				<label htmlFor="workoutResult">Result:</label>
				<input id="workoutResult" />
				<input id="workoutDate" type="date"/>
				<label htmlFor="notes">Notes:</label>
				<textarea id="notes"></textarea>
				<button onClick={this._Store}>Store</button>
			</div>
		);
	},
	_Store: function () {
		alert("store");
	}
});

module.exports = StoreWorkouts;