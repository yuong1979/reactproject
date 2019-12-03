import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = 'csrftoken';

// import { createMessage, returnErrors } from './messages'

// import { tokenConfig } from './auth'







import { GET_BLOG_LIST, DELETE_BLOG, ADD_BLOG, GET_BLOG, UPDATE_BLOG } from './actionTypes'



function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
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


	var csrftoken = getCookie('XSRF-TOKEN');
	config.headers['X-CSRFToken'] = `${csrftoken}`;

	return config

}



// GET BLOGSLIST

export const getBlogList = (query) => (dispatch, getState) => {
	let url = '/api/blog/';
	if (query)
		url += '?search=' + query;
	axios.get(url, tokenConfig(getState))
	.then(res => {

		dispatch({
			type: GET_BLOG_LIST,
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




// GET BLOG

export const getBlog = (id) => (dispatch, getState) => {

	axios.get(`/api/blog/${id}/`, tokenConfig(getState))
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



// DELETE BLOGS

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



// ADD BLOGS

export const addBlog = (blog) => (dispatch, getState) => {
	let contentType = "multipart/form-data";
	let config = tokenConfig(getState);
	config.headers["Content-Type"] = contentType; //for fileField
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



// UPDATE BLOGS

export const updateBlog = (id, data) => (dispatch, getState) => {
	let contentType = "multipart/form-data";
	let config = tokenConfig(getState);
	config.headers["Content-Type"] = contentType; //for fileField
	axios.put(`/api/blog/${id}/`, data, config)
	.then(res => {

		// dispatch(createMessage({
		// 	addLead: 'Blog Added'
		// 	}))

		dispatch({
			type: UPDATE_BLOG,
			payload: res.data
		})

	})
	.catch(err =>

			{
				console.log("update error", err)
			}
		);
}




		// case 'post':

		// 	return axios.post(`http://localhost:8000/api/`,{
		// 		title: title,
		// 		content: content
		// 	})
		// 	.then(res => console.log(res))
		// 	.catch(error => console.log(error))

		// case 'put':

		// 	return axios.put(`http://localhost:8000/api/${articleID}/`,{
		// 		title: title,
		// 		content: content
		// 	})
		// 	.then(res => console.log(res))
		// 	.catch(error => console.log(error))

