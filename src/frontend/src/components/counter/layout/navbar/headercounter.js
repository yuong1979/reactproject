import React, {Component, Fragment} from 'react';


const HeaderCounter = (props) => {
		return (

			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
				Counter - Navbar
				</a>
				<span className="badge badge-pill badge-info">{props.totalCounter}</span>
			</nav>

		)
}



export default HeaderCounter;

			// <span className="badge badge-pill badge-info">{this.props.totalCounters}</span>