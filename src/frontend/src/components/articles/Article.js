
import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom'

class Article extends Component {

	render() {


		return (
				<div className="container">


					<h1>{this.props.article.id}</h1>
					<h1>{this.props.article.title}</h1>

					<a href={`#/article/${this.props.article.id}`}> {this.props.article.title} </a>

				</div>
		)
	}
}

export default Article;