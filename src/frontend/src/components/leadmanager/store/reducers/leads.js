import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_TESTS } from '../actions/types.js'

const initialState = {

	//the leads here are what you have in your backend that you feed in here
	leads: []

}


export default function (state = initialState, action ) {

	switch (action.type) {

		case GET_LEADS:

		return {
			...state,
			leads: action.payload
		}

		case DELETE_LEAD:
		return {
			...state,
			leads: state.leads.filter(lead => lead.id !== 
			action.payload)
		}


		case ADD_LEAD:
		return {
			...state,
			leads: [...state.leads, action.payload]
		}


		default:
			return state;

	}


}






		// case GET_TESTS:
		// //this function takes in two things, state and actions so you return state and actions based on the action type
		// return {
		// 	//the state is returned with the spread operator[...] because you want to return all the items inside the state, including leads
		// 	...state,
		// 	// on top of all those taht are already in the state, you want to add updated leads that are fetched from the server - sent as a payload with below
		// 	leads: action.payload
		// }