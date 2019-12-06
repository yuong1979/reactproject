import { GET_ARTICLE_LIST} from '../actions/actionTypes.js'

const initialState = {
	articles: [],
}


export default function (state = initialState, action ) {

	switch (action.type) {

		case GET_ARTICLE_LIST:
		return {
			...state,
			articles: action.payload
        }
        
		default:
			return state;

	}


}
