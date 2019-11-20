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

	this.props.getBlog()


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

				<table className="table table-striped">

				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>User</th>
						<th>Quantity</th>
						<th>Active</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{ this.props.blogs.map(blog => (
						<tr key = {blog.id}>

							<td>{blog.id}</td>
							<td>{blog.title}</td>
							<td>{blog.description}</td>
							<td>{blog.user}</td>
							<td>{blog.quantity}</td>
							<td>{blog.active}</td>

							<td><button onClick={this.props.deleteBlog.bind(this, blog.id)} className="btn btn-danger btn-sm">Delete</button></td>

						</tr>
					)) }
				</tbody>

				</table>



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
    getBlog: () => dispatch(getBlog()),
    deleteBlog: () => dispatch(deleteBlog()),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(JDMain)






