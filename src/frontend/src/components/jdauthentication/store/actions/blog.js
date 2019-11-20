import axios from 'axios';
// import { createMessage, returnErrors } from './messages'

// import { tokenConfig } from './auth'

import { GET_BLOG, DELETE_BLOG, ADD_BLOG } from './actionTypes'





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



// GET LEADS

export const getBlog = () => (dispatch, getState) => {

	axios.get('/api/blog/', tokenConfig(getState))
	.then(res => {

		dispatch({
			type: GET_BLOG,
			payload: res.data
		})
	})

	.catch(err => {

		console.log(err)
		
		// dispatch(returnErrors(err.response.data, err.response.status));

		// dispatch({
		// 	type: REGISTER_FAIL
		// });

	})

}




// DELETE LEADS

export const deleteBlog = (id) => (dispatch, getState) => {

	axios.get(`/api/blog/${id}/`, tokenConfig(getState))
	.then(res => {

		dispatch(createMessage({
			deleteBlog: 'Blog Deleted'

			}))

		dispatch({
			type: DELETE_BLOG,
			payload: id

		})
	}).catch(err => 
		console.log(err)
	);

}



// ADD LEADS

export const addBlog = (blog) => (dispatch, getState) => {

	axios.post('/api/blog/', blog, tokenConfig(getState))
	.then(res => {


		// dispatch(createMessage({
		// 	addLead: 'Blog Added'
		// 	}))


		dispatch({

			type: ADD_BLOG,
			payload: res.data

		})
	})
	.catch(err =>

		{


			console.log("addblog", err)

			// dispatch(returnErrors(
			// 	err.response.data, 
			// 	err.response.status
			// 	))


			// const errors = {
			// 	msg: err.response.data,
			// 	status: err.response.status
			// }

			// dispatch({
			// 	type: GET_ERRORS,
			// 	payload: errors
			// })


		}
		);





}
