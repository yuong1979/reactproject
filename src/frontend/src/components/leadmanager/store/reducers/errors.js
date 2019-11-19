import { GET_ERRORS } from '../actions/types'


const initialState = {
	msg: {},
	status: null

}


export default function(state = initialState, action) {


	switch(action.type) {


		case GET_ERRORS:
			return {
				//change that state in message and status to be changed to the action payload
				msg: action.payload.msg,
				status: action.payload.status
			};

		default:
			return state;

	}


}


