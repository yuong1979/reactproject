
import React, {Component, Fragment} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import CustomForm from './Form'

class ArticleDetail extends Component {

	state = {
		article : []
	}


	componentDidMount() {

		console.log(this.props.match.params.articleID)

		const articleID = this.props.match.params.articleID

		axios.get(`http://localhost:8000/api/article/${articleID}`)
		.then(res => {

			this.setState({
				article: res.data
			})

		})
	}


	handleDelete = (event) => {
		event.preventDefault()
		const articleID = this.props.match.params.articleID

		axios.delete(`http://localhost:8000/api/article/${articleID}`)
		.then(res => console.log(res))
		.catch(error => console.log(error))
		this.props.history.push('/')

	}



	render() {


		return (
				<div className="container">

				<CustomForm requestType='put' articleID={this.props.match.params.articleID} btnText='update'/>

				<form onSubmit={this.handleDelete} >
					<button type="submit">Delete</button>
				</form>


				<Link to="/article">Home</Link>

				<h2>{this.state.article.id}</h2>
				<h2>{this.state.article.title}</h2>
				<h2>{this.state.article.content}</h2>

				</div>
		)
	}
}

export default ArticleDetail;


				// <Link to "/">Home</Link>