import React, {Component, Fragment} from 'react';
import axios from 'axios'
import { getBlogList, deleteBlog, addBlog, getBlog, updateBlog } from '../store/actions/Blog'
import { Provider, connect } from 'react-redux'


class BlogUpdateForm extends Component {


	componentDidMount() {
		const id = this.props.id
		this.props.getBlog(id)
	}

	componentDidUpdate(prevProps){

	}



	handleFormSubmit = (e) => {
		e.preventDefault()

		//passed from the blogdetail
		const id = this.props.id

		const title = e.target.elements.title.value
		const description = e.target.elements.description.value
		const date = e.target.elements.date.value
		const quantity = e.target.elements.quantity.value
		const active = e.target.elements.active.value
		const upload = e.target.elements.upload.value

		const data = {
			title: title,
			description: description,
			date: date,
			quantity: quantity,
			active: upload,
		}

		this.props.updateBlog(id, data)

	}



	render() {


		return (
				<div className="container">

					<br />
						<form onSubmit={event => this.handleFormSubmit(event)}>

							<input type="text" name="title" value={this.props.blog.title} />
							<br />

							<input type="text" name="description" value={this.props.blog.description} />
							<br />

							<input type="date" name="date" value={this.props.blog.date} />
							<br />

							<input type="number" name="quantity" value={this.props.blog.quantity} />
							<br />

							<input type="checkbox" name="active" value={this.props.blog.active} />
							<br />

							<input type="text" name="upload" value={this.props.blog.upload} />
							<br />

							<button type="submit">Update</button>

						</form>
					<br />

				</div>
		)
	}
}



// for properties
const mapStateToProps = state => {
	return {
		// isAuthenticated: state.auth.token !== null,
		// token: state.auth.token,
		blog: state.blogs.blog,

	}
}



const mapDispatchToProps = dispatch => {
  return {
    // onTryAutoSignup: () => dispatch(authCheckState()),

    getBlog: (id) => dispatch(getBlog(id)),
    updateBlog: (id, data) => dispatch(updateBlog(id, data)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BlogUpdateForm)






				// alternative method of doing submit
				// <form onSubmit={event => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>
				// <form onSubmit={this.handleFormSubmit.bind(this, event, this.props.requestType, this.props.articleID)}>



			// return axios.put(`http://localhost:8000/api/${articleID}/`,{
			// 	title: title,
			// 	content: content
			// })
			// .then(res => console.log(res))
			// .catch(error => console.log(error))