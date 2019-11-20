import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { register } from '../../actions/auth'
// import { createMessage } from '../../actions/messages'
import * as actions from '../store/actions/auth'
import JDHeader from '../layout/navbar/JDHeader'



export class JDRegister extends Component {

  state = {

    username: '',
    email: '',
    password: '',
    password2: '',

  }



    onSubmit = e => {
      e.preventDefault();

      const {username, email, password, password2 } = this.state

      if ( password !== password2 ) {

        console.log("passwords do not match")

      } else {

        console.log('submit')

        // const newUser = {
        //   username,
        //   password,
        //   email
        // }

        // this.props.onAuth(newUser)

        this.props.onAuth(
          this.state.username, 
          this.state.email, 
          this.state.password,
          this.state.password2
          )

        this.props.history.push('/jd/')

      }

    }



  onChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value
    });

      // console.log(e)
      // console.log(e.target)
      // console.log(e.target.name)
      // console.log(e.target.value)

  }




  render(){

    if(this.props.isAuthenticated) {
      return <Redirect to="/jd/"/>;
    }


    const { username, email, password, password2 } = this.state

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
        <h2 className="text-center">Register</h2>

      {errormessage}

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
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
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
            <label>Confirm Password</label>
            <input
              className="form-control"
              type="password"
              name="password2"
              onChange={this.onChange}
              value={password2}
            />
          </div>


          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>

          <p>
            Already have an account? <Link to="/jd/login">Login</Link>
          </p>

        </form>



      </div>
      </div>

      </Fragment>
      )
  }

}



const mapStateToProps = state => ({

  loading: state.auth.loading,
  error: state.auth.error
})


const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
  }
}



export default connect(mapStateToProps, mapDispatchToProps )(JDRegister)