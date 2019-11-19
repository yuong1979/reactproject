
import React, {Component, Fragment, useState, useEffect } from 'react';
// import Article from './Article'
import axios from 'axios'
// import CustomForm from './Form'


class Posts extends Component {

	render() {

		if (this.props.loading) {
			return <h2>Loading...</h2>
		}


		return (
				<div className="container">


			 		<ul className='list-group mb-4'>

			 			{this.props.posts.map(post=> (

			 				<li key={post.id} className='list-group-item'>
			 				{post.title}
			 				</li>

			 				))}

			 		</ul>

				</div>
		)
	}
}

export default Posts;


//alternative
// const Posts = (props) => {

// 	if (props.loading) {
// 		return <h2>Loading...</h2>
// 	}

	
// 	return (


// 		<ul className='list-group mb-4'>

// 			{props.posts.map(post=> (

// 				<li key={post.id} className='list-group-item'>
// 				{post.title}
// 				</li>

// 				))}

// 		</ul>

// 		)

// }


// export default Posts;