import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from 'prop-types'
// import { logout } from '../../store/actions/auth'
import * as actions from '../../store/actions/auth'


export class TestHeader extends Component {




	render() {


		return (

			<div>

      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              Just django
            </a>
          </div>


		      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

			        <li className="nav-item">
			          <Link to="/jd/" className="nav-link">
			            Posts
			          </Link>
			        </li>


			        {
			        	this.props.isAuthenticated ?

			        <li className="nav-item">
			          <p className="nav-link" onClick={this.props.logout}> 
			          	Logout
			          </p>
			        </li>

			        :

		      		<Fragment>

			        <li className="nav-item">
			          <Link to="/jd/login" className="nav-link">
			            Login
			          </Link>
			        </li>

			        <li className="nav-item">
			          <Link to="/jd/register" className="nav-link">
			            Register
			          </Link>
			        </li>

		      		</Fragment>

			        }


		      </ul>



        </div>
      </nav>

			</div>

			)
	}
}





const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}



export default connect(null, mapDispatchToProps )(TestHeader)



