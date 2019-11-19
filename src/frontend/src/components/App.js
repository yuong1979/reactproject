import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { Link } from "react-router-dom"
import './App.css'



import JDRoute from './jdauthentication/JDRoute'
import TodoDash from './todos/TodoDash'
import Counters from './counter/Counters'
import PageExample from './pagination/PageExample'

import Articles from './articles/Articles'
import ArticleDetail from './articles/ArticleDetail'


import Projectlinks from './Projectlinks'


// import JDRoute from './jdauthentication/JDRoute'
// import JDLogin from './jdauthentication/account/JDLogin'
// import JDRegister from './jdauthentication/account/JDregister'

import Dashboard from './leadmanager/Dashboard'



// import Dashboard from './leads/Dashboard'
// import Login from './accounts/login'
// import Register from './accounts/register'
// import PrivateRoute from './common/PrivateRoute'


class App extends Component {


	render() {

		return (

			<div className="App">

			<Router>
				<Fragment>

				<div className="container">


					<Switch>

					{/* adding with a form example and connecting to backend api */}
					<Route exact path="/" component={Projectlinks} />


					{/* adding with a form example */}
					<Route exact path="/todos" component={TodoDash} />

					<Route exact path="/counters" component={Counters} />

					{/* pagination example */}
					<Route exact path="/pagination" component={PageExample} />

					{/* this is for inserting a list of additional urls - shows detailed and list view styles */}
					<Route exact path="/article" component={Articles} />
					<Route exact path="/article/:articleID" component={ArticleDetail} />

					{/* test the loading of images */}
					{/* the pretty dynamic features */}


					{/* adding with a form example and connecting to backend api */}
					{/*
					<Dashboard />
					*/}

					
					{/*
					{/* just django authentication - they can only allow one link so dashboard is working but below will not work */}

					<JDRoute />
					*/}


					</Switch>
					
				</div>

				</Fragment>
			</Router>



			</div>

		)
	}

}




ReactDOM.render(<App />, document.getElementById('app'))






	// <PrivateRoute exact path="/" component={Dashboard} />
	// <Route exact path="/testleads" component={TestLeads} />
	// <Route exact path="/register" component={Register} />
	// <Route exact path="/login" component={Login} />



	      // <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

	      //   <li className="nav-item">
	      //     <Link to="/dashboard" className="nav-link">
	      //       Main
	      //     </Link>
	      //   </li>

	      //   <li className="nav-item">
	      //     <Link to="/todos" className="nav-link">
	      //       Todos
	      //     </Link>
	      //   </li>

	      //   <li className="nav-item">
	      //     <Link to="/counters" className="nav-link">
	      //       Counters
	      //     </Link>
	      //   </li>

	      //   <li className="nav-item">
	      //     <Link to="/pagination" className="nav-link">
	      //       PageExample
	      //     </Link>
	      //   </li>

	      //   <li className="nav-item">
	      //     <Link to="/article" className="nav-link">
	      //       Articles
	      //     </Link>
	      //   </li>

	      // </ul>