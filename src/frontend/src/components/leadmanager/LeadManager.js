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


// Alert Options
const alertOptions = {
	timeout: 3000,
	position: 'top center' 

}



export class LeadManager extends Component {

	// for the traversy media
	componentDidMount() {
		store.dispatch(loadUser())
	}


	render() {


		return (


			<Fragment>

				<Alerts />

				<Form />

				<Leads />


			</Fragment>



			)
	}
}


export default LeadManager

