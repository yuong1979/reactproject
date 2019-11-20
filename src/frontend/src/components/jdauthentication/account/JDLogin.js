import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { login } from '../../actions/auth'
import * as actions from '../store/actions/auth'
import JDHeader from '../layout/navbar/JDHeader'


const spinner = <p> loading ...</p>




export class JDLogin extends Component {

  state = {

    username: '',
    password: '',

  }



    onSubmit = e => {
      e.preventDefault();

		this.props.onAuth(this.state.username, this.state.password)


		// this.props.history.push('/jd/')


   //    this.props.form.validateFields((err, values) => {
	  //     if (!err) {

	  //     	console.log('working fine')
			// // this.props.onAuth(values.username, values.password)
	  //     }
   //    })

    }


    onChange = e => {

      this.setState({
        [e.target.name]: e.target.value
        })

    }





  render(){


    //redirecting user 
    if (this.props.isAuthenticated === true) {
      return <Redirect to="/jd/"/>
    }



    const { username, password } = this.state


    //inserting variables into the html
    let errormessage = null;
    if (this.props.error) {
    	errormessage = (
    		<p>{this.props.error.message}</p>
    		)
    }


    return (
      <Fragment>
        <JDHeader {...this.props}/>


      <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Login</h2>

    	{errormessage}

        {

        	this.props.loading ? 


        	<p> loading ...</p>


        	:

	        <form onSubmit={this.onSubmit}>

	        <p>just django</p>

	          <div className="form-group">
	            <label>Username</label>
	            <input
	              className="form-control"
	              type="text"
	              name="username"
	              onChange={this.onChange}
	              value={username}
	            />
	          </div>

	          <div className="form-group">
	            <label>Password</label>
	            <input
	              className="form-control"
	              type="password"
	              name="password"
	              onChange={this.onChange}
	              value={password}
	            />
	          </div>


	          <div className="form-group">
	            <button type="submit" className="btn btn-primary">
	              Login
	            </button>
	          </div>

	          <p>
	            Don't have an account? <Link to="/jd/register">Register</Link>
	          </p>

	        </form>

		}

      </div>
      </div>

      </Fragment>
      )
  }

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null,
  loading: state.auth.loading,
  error: state.auth.error
})


const mapDispatchToProps = dispatch => {
	return {
		onAuth: (username, password) => dispatch(actions.authLogin(username, password))
	}
}



export default connect(mapStateToProps, mapDispatchToProps )(JDLogin)