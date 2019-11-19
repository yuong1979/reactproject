import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import store from './store/store'
import { Provider, connect } from 'react-redux'
import JDMain from './JDMain'
import JDLogin from './account/JDLogin'
import JDRegister from './account/JDregister'



export class JDRoute extends Component {



	render() {

		return (


			<Provider store={store}>
				<Fragment>

					<Route exact path='/jd/' component={JDMain} />
					<Route exact path='/jd/login' component={JDLogin} />
					<Route exact path='/jd/register' component={JDRegister} />

				</Fragment>
			</Provider>


			)
	}
}



export default JDRoute


					// <Tester />


