
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'

// // import rootReducer from './reducers' //looking for index.js file inside reducers
// import reducer from '../store/reducers/auth'





// const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(
// 	reducer, 
// 	// rootReducer,
// 	composeEnhances(applyMiddleware(thunk)
// 	))

// export default store;






import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers/auth'
import rootReducer from './reducers' //looking for index.js file inside reducers

const initialState = {}


const middleware = [thunk]


const store = createStore(
		// reducer,
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(...middleware))
	)





export default store;