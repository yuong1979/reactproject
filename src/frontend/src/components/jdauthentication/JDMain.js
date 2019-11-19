import React, { Component, Fragment } from 'react'
import JDHeader from './layout/navbar/JDHeader'
import { Link, Redirect } from 'react-router-dom'


// import * as actions from './store/actions/auth'

import { authCheckState  } from './store/actions/auth'

import { Provider, connect } from 'react-redux'
import axios from 'axios'
// import { getBlog, deleteBlog, addBlog } from './store/actions/Blog'


export class JDMain extends Component {




  componentDidMount() {
  	// this state chaeck whether the token exists and if it is authorised
    this.props.onTryAutoSignup();


    if (this.props.isAuthenticated === true) {

    	// console.log(this.props)

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

    }
  }



	//componentDidUpdate - when this function receives a new prop componentdidupdate will run
	componentDidUpdate(prevProps){


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

		// console.log(this.props.blogs)

		if (this.props.isAuthenticated === false) {
			return <Redirect to="/jd/login"/>
		}

		console.log(this.props)


		return (


			<Fragment>
				<JDHeader {...this.props}/>

				<br/><br/><br/>

				<p>A list of posts - which all users have access to </p>

				<p>A list of posts - which only authenticated users have access to </p>




			</Fragment>


			)
	}
}


// for properties
const mapStateToProps = state => {
	return {
		isAuthenticated: state.token !== null,
		token: state.token,
		blogs: state.blogs,
		auth: state.auth,
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




				// <tbody>
				// 	{ this.props.blogs.map(blog => (
				// 		<tr key = {blog.id}>

				// 			<td>{blog.id}</td>

				// 			<td><button onClick={this.props.deleteBlog.bind(this, blog.id)} className="btn btn-danger btn-sm">Delete</button></td>

				// 		</tr>
				// 		)) }
				// </tbody>