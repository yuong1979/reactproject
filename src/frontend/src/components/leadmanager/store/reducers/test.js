import { LOADINITIAL, UPDATEINITIAL, UPDATEQUANTITY, UPDATEFINANCE, UPDATEGENDER, GET_TESTS} from '../actions/types.js'

const initialState = {

	//the leads here are what you have in your backend that you feed in here
	testleads: ['initial state'],
	testmsg: {},
	teststatus: null,
	quantity: "",
	testgender: "",
	vehicle: "",
	employed: "",
}



export default function (state = initialState, action ) {

	switch (action.type) {

		case GET_TESTS:
		//this function takes in two things, state and actions so you return state and actions based on the action type
		return {
			//the state is returned with the spread operator[...] because you want to return all the items inside the state, including leads
			...state,
			// on top of all those taht are already in the state, you want to add updated leads that are fetched from the server - sent as a payload with below
			testleads: action.payload
		}

		case LOADINITIAL:
		return {
			...state,
			testleads: action.payload
		}


		case UPDATEINITIAL:
		return {
			...state,
			testleads: action.payload
		}

		case UPDATEQUANTITY:
		return {
			//change that state in message and status to be changed to the action payload
			quantity: action.payload
		};

		case UPDATEFINANCE:
		return {
			//change that state in message and status to be changed to the action payload
			vehicle: action.payload.vehicle,
			employed: action.payload.employed
		};


		case UPDATEGENDER:
		return {
			//change that state in message and status to be changed to the action payload
			testgender: action.payload,
		};


		default:
			return state;

	}


}






