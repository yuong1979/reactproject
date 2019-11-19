import axios from 'axios';
import { createMessage, returnErrors, returnTestMessage } from './messages'
import { LOADINITIAL, UPDATEINITIAL, UPDATEQUANTITY, UPDATEFINANCE, UPDATEGENDER, UPDATEMSG, GET_TESTS} from './types'



// TESTING


export const getTests = () => (dispatch) => {

	axios.get('/api/leads/')
	.then(res => {

		dispatch({
		//when you dispatch a "type" you are firing the reducers in reducers/leads.js
			// type: GET_LEADS,
			type: GET_TESTS,
		//leads are responses returned from the server
			payload: res.data
		})
		// console.log(res.data)
	})

	.catch(err => {
		console.log(err)
	})

}




export const loadInitial = () => (dispatch) => {

	dispatch({
		type: LOADINITIAL,
		payload: ["current state"]
	})
}


export const loadUpdate = (input) => (dispatch) => {

	dispatch({
		type: UPDATEINITIAL,
		payload: input
	})
}


export const LoadQuantity = (input) => (dispatch) => {

	dispatch({
		type: UPDATEQUANTITY,
		payload: input
	})

	// dispatch(createMessage({
	// 	createtestmsg: 'Test message created'
	// 	}))
}



export const LoadFinance = (input1, input2) => (dispatch) => {

	const finance = {
		vehicle: input1,
		employed: input2
	}

	dispatch({
		type: UPDATEFINANCE,
		payload: finance
	})

	// dispatch(createMessage({
	// 	createtestmsg: 'Test message created'
	// 	}))
}



export const LoadGender = (input) => (dispatch) => {

	dispatch({
		type: UPDATEGENDER,
		payload: input
	})

	console.log(input)

	// dispatch(returnTestMessage({
	// 	msg: 'Gender changed',
	// 	status: 'Changed',
	// 	}))	

	// dispatch(returnTestMessage({
	// 	msg: 'Gender changed',
	// 	status: 'Changed',
	// 	}))	

	dispatch(returnTestMessage("gender changed", input));

	// dispatch(returnErrors(err.response.data, err.response.status));

}









export const GetTest4 = (id) => (dispatch) => {

	dispatch({
		type: TESTS4,
		payload: "test4 of " + id
	})

	console.log("test4")


	const errors = {
		msg: "test msg",
		status: "test status"
	}

	dispatch({
		type: GET_ERRORS,
		payload: errors
	})


	dispatch(returnErrors({
		createtestmsg: 'Test message 4 created'
		}))

}


