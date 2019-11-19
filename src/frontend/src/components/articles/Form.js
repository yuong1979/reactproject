
import React, {Component, Fragment} from 'react';
import axios from 'axios'

class CustomForm extends Component {


handleFormSubmit = (e, requestType, articleID) => {
	e.preventDefault()

	const title = e.target.elements.title.value
	const content = e.target.elements.content.value

	switch (requestType) {

		case 'post':

			return axios.post(`http://localhost:8000/api/`,{
				title: title,
				content: content
			})
			.then(res => console.log(res))
			.catch(error => console.log(error))

		case 'put':

			return axios.put(`http://localhost:8000/api/${articleID}/`,{
				title: title,
				content: content
			})
			.then(res => console.log(res))
			.catch(error => console.log(error))
	}

}



	render() {




		return (
				<div className="container">


					<br />

				<form onSubmit={event => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>

					<input type="text" name="title" placeholder="title" />
					<br />
					<input type="text" name="content" placeholder="content" />
					<br />
					<button type="submit">{this.props.btnText}</button>

				</form>
					<br />


				</div>
		)
	}
}

export default CustomForm;


				// alternative method of doing submit
				// <form onSubmit={event => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>
				// <form onSubmit={this.handleFormSubmit.bind(this, event, this.props.requestType, this.props.articleID)}>