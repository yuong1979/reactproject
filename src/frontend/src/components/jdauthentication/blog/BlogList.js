
import React, {Component, Fragment } from 'react';
// import Article from './Article'
import axios from 'axios'
// import CustomForm from './Form'
import { Provider, connect } from 'react-redux'
import { authCheckState  } from '../store/actions/auth'
import { getBlogList, deleteBlog, addBlog, getBlog } from '../store/actions/Blog'
import { Link, Redirect } from 'react-router-dom'
import BlogAddForm from './BlogAddForm'


//this is for cycling through every article

class BlogList extends Component {


	componentDidMount() {
	    this.props.onTryAutoSignup();
		this.props.getBlogList()
	}


	componentDidUpdate(prevProps){

	}


	render() {

		if (this.props.isAuthenticated === false) {
			return <Redirect to="/jd/login"/>
		}

		console.log('bloglist',this.props.blogs)

		return (
				<div className="container">

					<br />

					<h2>List of blogs</h2>

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


							<td><button className="btn btn-danger btn-sm"><a href={`#/jd/blog/${blog.id}`}> Details </a></button></td>

							</tr>
							)) }

						</tbody>

						</table>

					<BlogAddForm id={this.props.match.params.blogID} />

				</div>
		)
	}
}



// for properties
const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null,
		token: state.auth.token,
		blogs: state.blogs.blogs,

	}
}


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState()),
    getBlogList: () => dispatch(getBlogList()),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BlogList)



{/* 

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


					<td><button className="btn btn-danger btn-sm"><a href={`#/jd/blog/${blog.id}`}> Details </a></button></td>

					</tr>
					)) }

				</tbody>

				</table>


*/}





