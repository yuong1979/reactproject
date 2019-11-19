
import React, {Component, Fragment, useState, useEffect } from 'react';


const Pagination = (props) => {

	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
		pageNumbers.push(i)
	}

	return (

		<nav>
			<ul className="pagination">
				{pageNumbers.map(number => (
					<li key={number} className="page-item">

						<a onClick={() => props.paginate(number)} href="/#/pagination" className="page-link">
						{number}
						</a>

					</li>
				))}
			</ul>
		</nav>

		)

}


export default Pagination;



// //using classed based
// class Pagination extends Component {

// 	render() {

// 		const pageNumbers = []

// 		for (let i = 1; i <= Math.ceil(this.props.totalPosts / this.props.postsPerPage); i++) {
// 			pageNumbers.push(i)
// 		}


// 		if (this.props.loading) {
// 			return <h2>Loading...</h2>
// 		}


// 		return (
// 				<div className="container">

// 					<nav>
// 						<ul className="pagination">
// 							{pageNumbers.map(number => (
// 								<li key={number} className="page-item">

// 									<a onClick={() => this.props.paginate(number)} href="#" className="page-link">
// 									{number}
// 									</a>

// 								</li>
// 							))}
// 						</ul>
// 					</nav>

// 				</div>
// 		)
// 	}
// }

// export default Pagination;




