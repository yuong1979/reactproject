import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from '../actions/actionTypes'

	// token: localStorage.getItem('token'),

const initialState = {
	token: localStorage.getItem('token'),
	error: null,
	loading: false,
	// testing: false,

}



export default function(state = initialState, action) {

	switch (action.type){
		case AUTH_START:
			return {
				...state,
				error: null,
				loading: true
			}

		case AUTH_SUCCESS:
			return {
				...state,
				...action.token,
				token: action.token,
				error: null,
				loading: false,
			}

		case AUTH_FAIL:
			return {
				...state,
				...action.error,
				error: action.error,
				loading: false,
			}

		case AUTH_LOGOUT:
			return {
				...state,
				token: null,
			}


		default:
			return state

	}

}







