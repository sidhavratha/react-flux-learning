"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var routes = require('./routes');
//var history = require('history');
var hashHistory = ReactRouter.hashHistory;
// 
ReactDOM.render(<Router history={hashHistory} routes={routes} />, document.getElementById('app'));
/*Router.run(routes, function(Handler){
	
})*/

/*function render(){
	var route = window.location.hash.substr(1);
	ReactDOM.render(<App route={route} />, document.getElementById('app'));
}*/

//ReactDOM.render(<Home />, document.getElementById('app'));