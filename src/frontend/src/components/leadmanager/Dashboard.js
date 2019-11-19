import React, { Component, Fragment } from 'react'
import AlertTemplate from 'react-alert-template-basic'
import { Provider as AlertProvider } from 'react-alert'
import { Provider, connect } from 'react-redux'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"


import store from '../leadmanager/store/store'
import { loadUser } from '../leadmanager/store/actions/auth'
import Form from '../leadmanager/Form';
import Leads from '../leadmanager/Leads';

import Alerts from '../leadmanager/layout/Alerts'
import Header from '../leadmanager/layout/navbar/header'

import getTests from '../leadmanager/TestLeads'
import Test from './Test'
import LeadManager from '../leadmanager/LeadManager'

import Login from '../leadmanager/accounts/login'
import Register from '../leadmanager/accounts/register'
import PrivateRoute from '../leadmanager/PrivateRoute'


// Alert Options
const alertOptions = {
	timeout: 3000,
	position: 'top center' 

}



export class DashBoard extends Component {

	// for the traversy media
	componentDidMount() {

		store.dispatch(loadUser())
	}


	render() {

		console.log('DashBoard')

		return (

			<Router>

				<Switch>


			<Provider store={store}>
			{/* this below inserts altertemplate as a props to the provider and also all the settings of the alertoptions */}
			<AlertProvider template={AlertTemplate} {...alertOptions}>

			<Fragment>

				<Header />
				<Alerts />

					<PrivateRoute exact path="/leadmanager" component={LeadManager} />

					<Route exact path="/register" component={Register} />

					<Route exact path="/login" component={Login} />

					<Route exact path="/test" component={Test} />

			</Fragment>

			</AlertProvider>
			</Provider>


				</Switch>


			</Router>




			)
	}
}


export default DashBoard

