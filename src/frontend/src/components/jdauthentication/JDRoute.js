import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import store from './store/store'
import { Provider, connect } from 'react-redux'
import JDMain from './JDMain'
import JDLogin from './account/JDLogin'
import JDRegister from './account/JDregister'

import BlogDetail from './blog/BlogDetail'
import BlogList from './blog/BlogList'

export class JDRoute extends Component {



	render() {

		return (


			<Provider store={store}>
				<Fragment>

					<Route exact path='/jd/' component={JDMain} />
					<Route exact path='/jd/login' component={JDLogin} />
					<Route exact path='/jd/register' component={JDRegister} />

					<Route exact path="/jd/bloglist" component={BlogList} />
					<Route exact path="/jd/blog/:blogID" component={BlogDetail} />

				</Fragment>
			</Provider>


			)
	}
}



export default JDRoute


					// <Tester />


					// <Route exact path="/article" component={Articles} />
					// <Route exact path="/article/:articleID" component={ArticleDetail} />