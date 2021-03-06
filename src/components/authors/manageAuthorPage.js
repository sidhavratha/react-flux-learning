"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorAction = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var Toastr = require('toastr');

var ManageAuthorPage = React.createClass({
	getInitialState: function(){
		return {
			author: {id: '', firstName: '', lastName: ''},
			errors: {}
		};
	},
	componentWillMount: function(){
		var authorId = this.props.params.authorId;
		if(authorId){
			this.setState({author : AuthorStore.getAuthorById(authorId)});
		}
	},
	setAuthorState: function(event){
		var field = event.target.name;
		var value = event.target.value;

		this.state.author[field] = value;
		return this.setState({author: this.state.author});
	},
	authorFormIsValid: function(){
		var formIsValid = true;
		this.state.errors={}; //clear any previous errors
		if(this.state.author.firstName.length<3){
			this.state.errors.firstName = 'First name must be at least 3 chars.';
			formIsValid=false;
		}
		if(this.state.author.lastName.length<3){
			this.state.errors.lastName = 'Last name must be at least 3 chars.';
			formIsValid=false;
		}
		this.setState({errors: this.state.errors});
		return formIsValid;
	},
	saveAuthor: function(event){
		event.preventDefault();
		if(!this.authorFormIsValid())
		{
			return;
		}
		if(this.state.author.id){
			AuthorAction.updateAuthor(this.state.author);
			Toastr.success('Author updated.');
		}
		else{
			AuthorAction.createAuthor(this.state.author);
			Toastr.success('Author created.');
		}
		this.props.router.push('authors');
	},
	render: function(){
		return (
			<div>
				<AuthorForm author={this.state.author} 
					onChange={this.setAuthorState} 
					onSave={this.saveAuthor}
					errors={this.state.errors}/>
			</div>
		);
	}
});

module.exports = ManageAuthorPage;