import React, {Component, Fragment} from 'react';
import axios from 'axios'
import { getBlogList, deleteBlog, addBlog, getBlog, updateBlog } from '../store/actions/Blog'
import { Provider, connect } from 'react-redux'

class BlogAddForm extends Component {



	handleFormSubmit = (e) => {
		e.preventDefault()

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

		this.props.addBlog(data)

	}




	render() {

		return (
				<div className="container">

					<br />
						<form onSubmit={event => this.handleFormSubmit(event)}>

							<input type="text" name="title" placeholder="title" />
							<br />

							<input type="text" name="description" placeholder="description" />
							<br />

							<input type="date" name="date" placeholder="" />
							<br />

							<input type="number" name="quantity" placeholder="quantity" />
							<br />

							<input type="checkbox" name="active" placeholder="" />
							<br />

							<input type="text" name="upload" placeholder="upload" />
							<br />

							<button type="submit">Add</button>

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
    addBlog: (data) => dispatch(addBlog(data)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BlogAddForm)



