"use strict";

var React = require('react');

var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

var About = require('./components/about/aboutPage');

var routes = (
	<Route path="/" component={require('./components/app')}>
		<IndexRoute component={require('./components/homePage')} />
		<Route path="/authors" component={require('./components/authors/authorPage')} />
		<Route path="/authors/:authorId" component={require('./components/authors/manageAuthorPage')} />
		<Route path="/addAuthor" component={require('./components/authors/manageAuthorPage')} />
		<Route path="/about" component={About} onEnter={About.prototype.willTransitionTo} onLeave={About.prototype.willTransitionFrom}/>
		<Redirect from="/about-us" to="/about" />
		<Redirect from="/about/*" to="/about" />
		<Route path="*" component={require('./components/notFoundPage')} />
	</Route>
);

module.exports = routes;