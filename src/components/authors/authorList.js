"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var AuthorAction = require('../../actions/authorActions');
var Link = ReactRouter.Link;
var Toastr = require('toastr');

var AuthorList = React.createClass({
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},
	deleteAuthor: function(id, event){
		event.preventDefault();
		AuthorAction.deleteAuthor(id);
		Toastr.success('Author deleted');
	},
	render: function(){
		var createAuthorRow = function(author){
			return (
				<tr key={author.id}>
					<td><Link to={"authors/"+author.id}>{author.id}</Link></td>
					<td>{author.firstName} {author.lastName}</td>
					<td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
				</tr>
			);
		};
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						{this.props.authors.map(createAuthorRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = AuthorList;