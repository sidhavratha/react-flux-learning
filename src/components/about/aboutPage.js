"use strict";

var React = require('react');

var About = React.createClass({
	willTransitionTo: function(nextState, replace, callback){
		if(!confirm('Are you sure you want to enter')){
			console.log('transition aborted');
			replace("/");
		}
		callback();
	},
	willTransitionFrom: function(prevState){
		if(!confirm('Are you sure you want to leave')){
			console.log('transition should be aborted');
		}
	},
	render : function(){
		return (
			<div>
				<h1>About React with Flux</h1>
			</div>
		);
	}
});

module.exports = About;