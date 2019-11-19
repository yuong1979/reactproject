import React, {Component, Fragment} from 'react';
import { Link } from "react-router-dom"


class Projectlinks extends Component {


	render() {

		return (

			<div className="App">

				<Fragment>

				<div className="container">


		<br /><br /><br />

				      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

				        <li className="nav-item">
				          <Link to="/leadmanager" className="nav-link">
				            Lead Manager
				          </Link>
				        </li>

				        <li className="nav-item">
				          <Link to="/test" className="nav-link">
				            Test Redux Form
				          </Link>
				        </li>

				        <li className="nav-item">
				          <Link to="/jd/" className="nav-link">
				            Just Django Login
				          </Link>
				        </li>

				        <li className="nav-item">
				          <Link to="/todos" className="nav-link">
				            Todos
				          </Link>
				        </li>

				        <li className="nav-item">
				          <Link to="/counters" className="nav-link">
				            Counters
				          </Link>
				        </li>

				        <li className="nav-item">
				          <Link to="/pagination" className="nav-link">
				            PageExample
				          </Link>
				        </li>

				        <li className="nav-item">
				          <Link to="/article" className="nav-link">
				            Articles
				          </Link>
				        </li>

				      </ul>
					
				</div>

				</Fragment>

			</div>

		)
	}

}

export default Projectlinks;








	// <PrivateRoute exact path="/" component={Dashboard} />
	// <Route exact path="/testleads" component={TestLeads} />
	// <Route exact path="/register" component={Register} />
	// <Route exact path="/login" component={Login} />



