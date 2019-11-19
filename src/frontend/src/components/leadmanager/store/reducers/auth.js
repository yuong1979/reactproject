import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types'


const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	isLoading: false,
	user: null

}


export default function(state = initialState, action) {


	switch(action.type) {


		case USER_LOADING:
			return {
				...state,
				isLoading: true
			};


		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload
			};

		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token)
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false,
			}



		case REGISTER_SUCCESS:
			localStorage.setItem('token', action.payload.token)

			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false,
			}

		//in this case both login fail and auth error will do the same thing - and destroy the token
		case AUTH_ERROR:
				console.log('auth error')
				localStorage.removeItem('token')
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false,
			};




		case LOGIN_FAIL:
				console.log('login fail')		
				localStorage.removeItem('token')
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false,
			};




		case LOGOUT_SUCCESS:
				console.log('logout success')		
				localStorage.removeItem('token')
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false,
			};



		case REGISTER_FAIL:
				console.log('register fail')

				localStorage.removeItem('token')
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false,
			};



		// case GET_ERRORS:
		// 	return {
		// 		msg: action.payload.msg,
		// 		status: action.payload.status
		// 	};

		default:
			return state;

	}


}