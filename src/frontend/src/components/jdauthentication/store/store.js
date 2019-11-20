import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers/auth'
import rootReducer from './reducers' //looking for index.js file inside reducers

// const initialState = {}


const middleware = [thunk]


const store = createStore(
		// reducer,
		rootReducer,
		// initialState,
		composeWithDevTools(applyMiddleware(...middleware))
	)





export default store;