import axios from 'axios';
import { returnErrors } from './messages'

import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL} from './types'


// check token and load user
export const loadUser = () => (dispatch, getState) => {

	// user loading
	dispatch({type: USER_LOADING})

	axios.get('/api/auth/user', tokenConfig(getState))
	.then(res => {

		dispatch({
			type: USER_LOADED,
			payload: res.data
		})

	}).catch(err => {


		dispatch(returnErrors(err.response.data, err.response.status));

		dispatch({
			type: AUTH_ERROR
		});

	})

}







// login user - we dont need to check the token - we need to get the token
export const login = (username, password) => (dispatch) => {

	// console.log(username)
	// console.log(password)

	//headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	//request body
	const body = JSON.stringify({ username, password })


	// this is strange because url does not end with a "/" whereas the other ends with a url
	axios.post('/api/auth/login', body, config)
	.then(res => { 

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		})
		console.log('login success')

	}).catch(err => {


		console.log('login failed')

		dispatch(returnErrors(err.response.data, err.response.status));
		dispatch({
			type: LOGIN_FAIL
		});

	})

}









// register user
export const register = ({username, password, email}) => (dispatch) => {

	//headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	//request body
	const body = JSON.stringify({ username: username, email : email, password : password })

	// this is strange because url does not end with a "/" whereas the other ends with a url
	axios.post('/api/auth/register', body, config)
	.then(res => { 

		console.log('register successful')

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		})

	}).catch(err => {

		// console.log(err)
		// console.log(err.response)
		// // console.log(err.response.data)
		// console.log(err.response.status)

		dispatch(returnErrors(err.response.data, err.response.status));

		dispatch({
			type: REGISTER_FAIL
		});

	})

}





// logout user
export const logout = () => (dispatch, getState) => {


    // // console.log(tokenConfig(getState))
    // console.log('trying to logout')


	//using null to represent the body
	axios.post('/api/auth/logout/', null, tokenConfig(getState))
	.then(res => { 

		dispatch({
			type: LOGOUT_SUCCESS
		})

	}).catch(err => {



		dispatch(returnErrors(err.response.data, err.response.status));

	})

}





// setup config with token - helper function

export const tokenConfig = getState => {


	// get token from the state
	const token = getState().auth.token


	//headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	//if token exists, add to headers
	if (token) {
		config.headers['Authorisation'] = `Token ${token}`;

	}

	return config

}















