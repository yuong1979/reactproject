
import React, {Component, Fragment } from 'react';
import Article from './Article'
import axios from 'axios'
import CustomForm from './Form'




//this is for cycling through every article

class Articles extends Component {

	state = {
		articles : []
	}


	componentDidMount() {

		console.log(this.props.match)

		axios.get('http://localhost:8000/api/article/')
		.then(res => {

			this.setState({
				articles: res.data
			})

		})
	}



	render() {


		return (
				<div className="container">

					<br />
					<h3>create a new entry here</h3>

					<CustomForm requestType='post' articleID={null} btnText='post'/>


					{this.state.articles.map(article => 
						<Article key={article.id} article={article} />
					)}

				</div>
		)
	}
}

export default Articles;


					// <Article data={this.state.articles}/>