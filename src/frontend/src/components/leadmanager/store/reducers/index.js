import { combineReducers } from  'redux';
import leads from './leads';
import errors from './errors';
import messages from './messages';
import auth from "./auth";

import testleads from './test'


//the root reducer is the meeting place for all your reducers
//for instance the leads reducers hands down the file that has to do with leads and one for auth


export default combineReducers({

	leads: leads,
	errors: errors,
	messages: messages,
	auth: auth,

	testleads: testleads


})