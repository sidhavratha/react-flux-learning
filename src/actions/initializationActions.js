"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');

var IntializationAction = {
	initApp: function(){
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			authors: AuthorApi.getAllAuthors()
		});
	}
}

module.exports = IntializationAction;