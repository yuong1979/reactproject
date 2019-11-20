import React, { Component, Fragment } from 'react'
import JDHeader from './layout/navbar/JDHeader'
import { Link, Redirect } from 'react-router-dom'


// import * as actions from './store/actions/auth'

import { authCheckState  } from './store/actions/auth'

import { Provider, connect } from 'react-redux'
import axios from 'axios'
import { getBlog, deleteBlog, addBlog } from './store/actions/Blog'


export class JDMain extends Component {




  componentDidMount() {
  	// this state chaeck whether the token exists and if it is authorised
    this.props.onTryAutoSignup();



	// if (this.props.isAuthenticated === true) {

	// 	axios.defaults.headers = {
	// 		"Content-Type": "application/json",
	// 		Authorization: this.props.token
	// 	}

	// 	axios.get('http://localhost:8000/api/blog/')
	// 	.then(res => {
	// 		console.log(res.data)

	// 	}).catch(err => {
	// 		console.log(err)
	// 	})

	// }



  }



	//componentDidUpdate - when this function receives a new prop componentdidupdate will run
	componentDidUpdate(prevProps){


		// console.log("prevprops",prevProps)

		//// this is not working - prevProps is not retrieving the blogs
		// if (this.props.blogs !== prevProps.blogs) {
		// 	this.props.getBlog()
		// }

		// if (error !== prevProps.error) {

		// axios.defaults.headers = {
		// 	"Content-Type": "application/json",
		// 	Authorization: this.props.token
		// }

		// axios.get('http://localhost:8000/api/blog/')
		// .then(res => {
		// 	console.log(res.data)
		// }).catch(err => {
		// 	console.log(err)
		// })

		// }

	}













	render() {

		if (this.props.isAuthenticated === false) {
			return <Redirect to="/jd/login"/>
		}



		return (

			<Fragment>

				<JDHeader {...this.props}/>

				<br/>



				      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

				        <li className="nav-item">
				          <Link to="/test" className="nav-link">
				            Articles
				          </Link>
				        </li>

				        <li className="nav-item">
				          <Link to="/jd/bloglist" className="nav-link">
				            Blogs
				          </Link>
				        </li>

				      </ul>


			</Fragment>


			)
	}
}


// for properties
const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null,
		token: state.auth.token,
		blogs: state.blogs.blogs,


		// blogs: state.blogs,
		// auth: state.auth,
		// testing: state.testing,
		// tester: state.tester,
	}
}


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState()),



    // onTryAutoSignup: () => dispatch(actions.authCheckState()),
    // getBlog: () => dispatch(getBlog()),
    // deleteBlog: () => dispatch(deleteBlog()),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(JDMain)






