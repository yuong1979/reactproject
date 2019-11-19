import { GET_BLOG, DELETE_BLOG, ADD_BLOG } from '../actions/actionTypes.js'

const initialState = {

	//the leads here are what you have in your backend that you feed in here
	blogs: [
		// {tester: true},
	],
	
}


export default function (state = initialState, action ) {

	switch (action.type) {


		case GET_BLOG:

		// console.log('get blog',action.payload)
		
		return {
			...state,
			blogs: action.payload
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


		default:
			return state;

	}


}