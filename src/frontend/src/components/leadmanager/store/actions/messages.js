import { CREATE_MESSAGE, GET_ERRORS, UPDATEMSG } from './types';


// CREATE MESSAGE
export const createMessage = msg => {

	return {

		type: CREATE_MESSAGE,
		payload: msg
	}

}


// RETURN ERRORS
export const returnErrors = (msg, status) => {

	console.log(msg)
	console.log(status)


	return {

		type: GET_ERRORS,
		payload: { msg, status }
	}

}



// RETURN ERRORS
export const returnTestMessage = (msg, status) => {

	// console.log(msg)
	// console.log(status)

	return {

		type: UPDATEMSG,
		payload: { msg, status }
	}

}