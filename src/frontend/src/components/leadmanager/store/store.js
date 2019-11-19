import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers' //looking for index.js file inside reducers

const initialState = {}


const middleware = [thunk]


const store = createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(...middleware))
	)





export default store;


// first step is to in implementing redux is to do up the store