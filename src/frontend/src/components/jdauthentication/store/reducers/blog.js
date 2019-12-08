import { GET_BLOG_LIST, DELETE_BLOG, ADD_BLOG, GET_BLOG, UPDATE_BLOG, DELETE_FILE } from '../actions/actionTypes.js'

const initialState = {

	//the leads here are what you have in your backend that you feed in here
	blogs: [],
	blog: []
	
}


export default function (state = initialState, action ) {

	switch (action.type) {

		case GET_BLOG_LIST:
		return {
			...state,
			blogs: action.payload
		}

		case GET_BLOG:
		return {
			...state,
			blog: action.payload
		}

		case DELETE_BLOG:
		return {
			...state,
			blogs: state.blogs.filter(blog => blog.id !== 
			action.payload)
		}

		case ADD_BLOG:
		return {
			...state,
			blogs: [...state.blogs, action.payload]
		}

		case UPDATE_BLOG:
		return {
			...state,
			blog: action.payload
			// blogs: [...state.blogs, action.payload]
		}

		case DELETE_FILE:
		return {
			...state,
			blog: action.payload
		}

		default:
			return state;

	}


}

				// error: action.error,
				// loading: false,