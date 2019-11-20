
import React, {Component, Fragment} from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { getBlogList, deleteBlog, addBlog, getBlog } from '../store/actions/Blog'
import { authCheckState  } from '../store/actions/auth'
// import CustomForm from './Form'



class BlogDetail extends Component {

	state = {
		blog : []
	}


	componentDidMount() {

    	this.props.onTryAutoSignup();

		// console.log(this.props.match.params.blogID)
		const id = this.props.match.params.blogID

		this.props.getBlog(id)

	}


	componentDidUpdate(prevProps){

	}


	handleDelete = (event) => {
		// event.preventDefault()
	}



	render() {

		if (this.props.isAuthenticated === false) {
			return <Redirect to="/jd/login"/>
		}



		return (
				<div className="container">

					<Link to="/jd/bloglist" className="nav-link">
					Home
					</Link>

					<h1>Details</h1>
					<br />
					<h5>Title: {this.props.blog.title}</h5>
					<br />
					<h5>Description: {this.props.blog.description}</h5>
					<br />
					<h5>Quantity: {this.props.blog.quantity}</h5>
					<br />
					<h5>User: {this.props.blog.user}</h5>



				</div>
		)
	}
}


// for properties
const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null,
		token: state.auth.token,
		blog: state.blogs.blog,

	}
}


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState()),

    getBlog: (id) => dispatch(getBlog(id)),
    deleteBlog: () => dispatch(deleteBlog()),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail)







				// <CustomForm requestType='put' articleID={this.props.match.params.articleID} btnText='update'/>

				// <form onSubmit={this.handleDelete} >
				// 	<button type="submit">Delete</button>
				// </form>


				// <Link to="/article">Home</Link>




				// <Link to "/">Home</Link>

