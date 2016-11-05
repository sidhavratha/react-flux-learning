"use strict";

var React = require('react');
var AuthorApi = require('../../api/AuthorApi');

var AuthorDetail = React.createClass({
	getInitialState: function(){
		return {
			author: {}
		};
	},
	componentDidMount: function(){
		if(this.isMounted()){
			this.setState({author : AuthorApi.getAuthorById(this.props.params.authorId)});
		}
	},
	render: function(){
		return (
			<div>
				<h3>Id:</h3> {this.state.author.id}
				<h3>Name:</h3> {this.state.author.firstName} {this.state.author.lastName}
			</div>
		);
	}
});

module.exports = AuthorDetail;